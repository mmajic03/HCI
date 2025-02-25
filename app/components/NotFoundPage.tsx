

import React from 'react';
import Image from 'next/image';


export default function NotFoundPage() {
    return (
        <div className="bg-[#9C8D71E8] flex flex-col min-h-screen items-center justify-start">
            <h1 className="text-4xl font-bold mt-8">It looks like this recipe got lost in the pot! </h1>
            <div className="flex-grow mt-8 flex flex-row justify-center">
                <Image 
                    src="/chef.png" 
                    width={300} 
                    height={100} 
                    alt="Not Found" 
                />
            </div>
            <p className="mt-4 text-lg">But don't worry, even the greatest chefs make mistakes sometimes :D</p>
            <p className="mt-2 text-md">Go back to the <a href="/" className="text-[#053906e8] underline">homepage</a> and find something delicious!</p>
        </div>
    );
}



