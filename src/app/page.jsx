'use client'
import Link from "next/link";


export default function Home() {
  return (
    <div className="mt-[80px] ml-[10px] lg:ml-[100px]">
      <h1 className="text-6xl font-bebas text-blue-700">About Me</h1>
      <div className="mt-[20px] ml-[10px] text-xl font-ubuntu mr-[20px]">
        <p className="text-2xl">Hi</p>
        <p className="mt-[10px] mb-[10px]">My name is Ryan</p>
        <p className="mb-[10px]">I&apos;m a fullstack developer, primarily using React (MERN)</p>
        <p>I also like to experiment with other technologies and frameworks</p>
        <div className="mt-[20px] max-w-[700px] text-sm md:text-xl">
          <div className="grid grid-cols-2 bg-gray-300 h-[40px]">
            <p className="mb-[10px] ml-[10px]">Main Languages : </p>
            <p>Javascript, C#</p>
          </div>

          <div className="grid grid-cols-2 bg-gray-300 mt-[10px] h-[40px]">
            <p className="ml-[10px]">Tech Stack :</p>
            <p>React, Node, MongoDB, Express</p>
          </div>

        </div>
      </div>

      <Link href="/projects">
        <button className="buttonblue w-[300px] h-[70px] my-[20px] text-5xl">My Projects</button>
      </Link>


    </div>

  );
};
