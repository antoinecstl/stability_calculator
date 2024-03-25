import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      
    <h1 className="text-white text-heading3-bold">Introduction</h1>
    <div className="grid lg:grid-cols-2 gap-6 justify-center mt-8 text-pretty">
      <div className="bg-slate-900 hover:bg-slate-800/80 transition ease-in-out delay-50 duration-200 p-6 rounded-xl">
        <p className="text-white text-body-medium">The stability modes of an aircraft are a critical aspect of its design and operation. In order to ensure safe and efficient flight, it is essential to understand and analyze the various stability modes of an aircraft. In this homework, we will be studying the stability modes of an aircraft for which we have access to its geometric, inertial, and aerodynamic data. This data provides us with a comprehensive understanding of the physical characteristics of the aircraft, which is essential for modeling and analyzing its behavior in various flight conditions.</p>
      </div>
      <div className="bg-slate-900 hover:bg-slate-800/80 transition ease-in-out delay-50 duration-200 p-6 rounded-xl">
        <p className="text-white text-body-medium">Throught this analysis, we aim to gain insights into the various stability modes of the aircraft, including the longitudinal, lateral, and directional modes. By studying these stability modes, we can identify potential issues with the aircraft's stability and develop strategies to mitigate these issues. This homework will provide an opportunity to apply advanced modeling and analysis techniques to real-world aircraft data, thereby enhancing our understanding of the fundamental principles of aircraft design and operation.</p>
      </div>
    </div>
    <div className="bg-slate-900 hover:bg-slate-800/80 transition ease-in-out delay-50 duration-200 p-6 rounded-xl mt-6">
      <p className="text-white text-body-medium">In the field of aeronautics and aircraft engineering, the longitudinal motion of an aircraft is an essential area of study. This refers to the motion of the aircraft along its longitudinal axis, which encompasses pitch and acceleration. In order to model and analyze the behavior of an aircraft in longitudinal motion, it is necessary to understand the dynamics of the system. This includes the aircraft matrix A and control matrix B, which define the relationship between the inputs and outputs of the system. The aircraft matrix A describes the dynamics of the system in the absence of external forces, while the control matrix B relates the inputs to the outputs of the system. By understanding the aircraft matrix A and control matrix B, engineers can design and implement effective control strategies for aircraft in longitudinal motion. In this context, accurate modeling and analysis of these matrices play a critical role in ensuring the safety and efficiency of aircraft in flight.</p>
    </div>
    <div>
    <Image className="mt-8 rounded-xl" src='/dc8.jpg' alt='dc8' width={700} height={700}/>
    <p className="text-white">Image of a Douglas DC-8</p>
    </div>    
  </main>
  );
}
