"use client"

import Image from "next/image";
import Link from "next/link";

function Topbar() {
 
  return (

    <nav className='topbar mt-2'>
        <Link href='/' className='flex items-center gap-2 sm:gap-4'>
            <p className='text-base-semibold sm:text-heading3-bold text-light-1'>Stability Calculator</p>
        </Link>

        <div className='flex items-center gap-1 text-white'>
            <div className='flex gap-6 mr-4'>
                <p className="text-small-bold">By Antoine CASTEL & Luca LIZON</p>
            </div>
        </div>
    </nav>
    
  );
}

export default Topbar;
