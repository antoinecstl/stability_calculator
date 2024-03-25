"use client"

import { useState } from 'react';
import * as math from 'mathjs';

export default function calculator() {
    const [eigenvalues, setEigenvalues] = useState<string[]>([]);

  const calculateEigenvalues = () => {
    // Initialisation des données géométriques
    const S = 241.5; // Surface de l'aile, m²
    const b = 43.4; // Envergure, m
    const A = 7.8; // Rapport d'aspect
    const c = 7.01; // Corde moyenne aérodynamique, m
    const e = 0.85; // Nombre d'Oswald

    // Données de masse et inertielles
    const m = 104305 ;
    const Ixx = 5111433.7 ;
    const Iyy = 3986104.8 ;
    const Izz = 9666982 ;
    const Ixz = 61011.8 ;

    // Conditions de vol
    const H = 10668; // Altitude, m
    const rho = 0.377; // Densité de l'air, kg/m³
    const U0 = 263.2; // Vitesse, m/s
    const M = 0.88; // Nombre de Mach
    const theta0 = 0; // Inclinaison initiale, rad

    // Coefficients initiaux d'état stationnaire
    const CL0 = 0.279;
    const Cd0 = 0.0276;

    // Déclarer les dérivées de stabilité longitudinale, de contrôle, etc...
    const Cdu = 0.3653;
    const CDal = 0.4862;

    const CLu =  -1.2;
    const CLal = 6.8989;
    const CLalp = 0;
    const CLq = 0;

    const Cmu = -0.5;
    const Cmal = -2.413;
    const Cmalp = -6.83;
    const Cmq = -15.2;

    // Longitudinal Control derivatives
    const CDde = 0;
    const CLde = 0.358;
    const Cmde = 0;

    // Lateral Stability derivatives
    const CyB = -0.7449;
    const Cyp = 0;
    const Cyr = 0;

    const ClB = -0.1736;
    const Clp = -0.538;
    const Clr = 0.146;

    const CnB = 0.1604;
    const Cnp = -0.0587;
    const Cnr = -0.199;

    // Lateral Control derivatives
    const Cyda = 0;
    const Clda = -0.07907;
    const Cnda = -0.004;

    const Cydr = 0.1865;
    const Cldr = 0.02166;
    const Cndr = -0.0;

    const g = 9.81; // Accélération gravitationnelle, m/s²
    const q = 0.5 * rho * U0 ** 2; // Pression dynamique

    // Utilisation de mathjs pour les opérations matricielles
    const matA = math.matrix([
      [-(q*S/(m*U0)*(2*Cd0 + Cdu)), q*S/(m*U0)*(CL0*(1-((2*CLal)/(math.pi*e*A)))), 0, -g*math.cos(theta0)],
      [-q*S/(m*U0)*(2*CL0 + CLu), -q*S/(m*U0)*(Cd0 + CLal), U0, -g*math.sin(theta0)],
      [(q*S*c/(Iyy*U0))*Cmu + -q*S/(m*U0)*(2*CL0 + CLu)*(q*S*c**2/(2*Iyy*U0**2))*Cmalp, (q*S*c/(Iyy*U0))*Cmal + -q*S/(m*U0)*(Cd0 + CLal)*(q*S*c**2/(2*Iyy*U0**2))*Cmalp, (q*S*c**2/(2*Iyy*U0))*Cmq + U0*(q*S*c**2/(2*Iyy*U0**2))*Cmalp, 0],
      [0, 0, 1, 0]
    ]);

    // Complétion de la matrice B
    const matB = math.matrix([
        [q*S/(m*U0)*CDde, q*S/(m*U0)*0], // CDdt est 0
        [q*S/(m*U0)*CLde, q*S/(m*U0)*0], // CLdt est 0
        [(q*S*c/(Iyy*U0))*Cmde + q*S/(m*U0)*CLde*(q*S*c**2/(2*Iyy*U0**2))*Cmalp, (q*S*c/(Iyy*U0))*0 + q*S/(m*U0)*0*(q*S*c**2/(2*Iyy*U0**2))*Cmalp], // Mdt est 0
        [0, 0]
      ]);

    // Affichage des matrices pour vérification
    console.log('A matrix:', matA.toString());
    console.log('B matrix:', matB.toString());

    // Calcul des valeurs propres de la matrice A
    const evals = math.eigs(matA).values;
    console.log('Eigenvalues:', evals);

    if (!evals || !Array.isArray(evals._data)) {
        console.error('The eigenvalues are not in the expected format.');
        return;
      }
  
      // Conversion des valeurs propres en chaînes pour l'affichage
      const evalsStrings = evals._data.map((val) =>
        math.isComplex(val) ? `${val.re} + ${val.im}i` : val.toString()
      );
  
      // Mise à jour de l'état avec les valeurs propres converties en chaînes
      setEigenvalues(evalsStrings);
    };

    return (
        <div>
          <button className='bg-primary-500' onClick={calculateEigenvalues}>Calculate Eigenvalues</button>
          <div>
              {eigenvalues.map((val, index) => (
                <p key={index} className='text-white'>{val}</p>
              ))}
          </div>
        </div>
      );
    }