export default function Home() {
  return (
    <div className="mt-[80px] ml-[10px] lg:ml-[100px]">
      <h1 className="text-6xl font-bebas">About Me</h1>
      <div className="mt-[20px] ml-[10px] text-xl font-ubuntu mr-[20px]">
        <p className="text-2xl">Hi</p>
        <p className="mt-[10px] mb-[10px]">My name is Ryan</p>
        <p className="mb-[10px]">I'm a fullstack developer, primarily using MERN</p>
        <p>However I also like to experiment with other technologies and frameworks</p>
        <div className="mt-[20px]">
          <div className="grid grid-cols-2 bg-slate-200">
            <p className="mb-[10px]">Main Languages : </p>
            <p>Javascript, C++, C#</p>
          </div>
          
          <div className="grid grid-cols-2 bg-slate-200 mt-[10px]">
            <p>Tech Stack :</p>
            <p>React, Node, MongoDB, Express</p>
          </div>
          
        </div>
      </div>
      <div className="mb-[60px] hover:text-blue-200 mt-[20px] h-[60px] w-[200px] bg-blue-500 text-4xl font-bebas flex justify-center items-center rounded-2xl text-blue-100">
        <a href="/projects">My Projects</a>
      </div>


    </div>

  );
}
