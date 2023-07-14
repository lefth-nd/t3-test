export default function Bulletin() {
  const time = 0;
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#205bff] to-[#205baa] font-title text-white">
      <div className="m-5 text-[3rem] font-extrabold tracking-tight text-white">
        Pass or <span className="text-black">Replace?</span>
      </div>
      <div className=" m-5 text-center text-sm italic tracking-tight">
        Deface the current bulletin message with your own words of wisdom?
        <br /> Or see how long the current one can last?
        <br /> Your choice...
      </div>

      <div className="m-5 font-bold">
        Bulletin message last changed: {time} ago
      </div>

      <div className="h-fit w-1/2 rounded-md border-2 border-solid border-white bg-black/10 text-white">
        <div className="m-12 text-justify text-xs md:text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
          cupiditate animi sunt! Eos, dolore perspiciatis quos
        </div>
      </div>
      <div className="my-10 w-96 text-center">
        <input
          className="w-100% h-12 rounded-lg bg-slate-200 px-6 text-lg font-bold text-black shadow-inner shadow-slate-950"
          placeholder=""
          title="your message"
          maxLength={120}
        ></input>
        <button className="ml-4 mt-4 h-12 w-24 rounded-full bg-slate-900 font-bold uppercase shadow-md transition-colors duration-100 hover:bg-slate-800">
          pass
        </button>
        <button className="ml-4 mt-4 h-12 w-24 rounded-full bg-slate-900 font-bold uppercase shadow-md transition-colors duration-100 hover:bg-slate-800">
          replace
        </button>
      </div>
    </div>
  );
}
