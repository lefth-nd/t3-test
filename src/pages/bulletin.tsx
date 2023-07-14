export default function Bulletin() {
  const time = 0;
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#205bff] to-[#205baa] font-title text-white">
      <div className="m-5 text-[3rem] font-extrabold tracking-tight text-white">
        Replace or <span className="text-black">Pass?</span>
      </div>
      <div className=" m-5 text-center text-sm italic tracking-tight">
        Deface the current bulletin message with your own words of wisdom?
        <br /> Or see how long the current one can last?
        <br /> Your choice...
      </div>

      <div className="m-5 font-bold">
        Bulletin message last changed: {time} ago
      </div>

      <div className="h-fit w-1/2 rounded-md border-2 border-solid border-white bg-black text-white">
        <div className="m-12 text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
          cupiditate animi sunt! Eos, dolore perspiciatis quos cum qui veniam
          totam atque maiores numquam, possimus, deleniti illo voluptas
          officiis. Recusandae, ducimus!
        </div>
      </div>
      <div className="my-10 w-96 text-center">
        <input
          className="w-100% h-12 rounded-lg bg-slate-200 px-6 text-lg font-bold text-black shadow-inner shadow-lg shadow-slate-950"
          placeholder=""
          title="final-text"
          maxLength={120}
        ></input>
        <button className="ml-4 mt-4 h-12 w-24 rounded-full bg-slate-900 font-bold uppercase shadow-md transition-colors duration-100 hover:bg-slate-800">
          replace
        </button>
        <button className="ml-4 mt-4 h-12 w-24 rounded-full bg-slate-900 font-bold uppercase shadow-md transition-colors duration-100 hover:bg-slate-800">
          pass
        </button>
      </div>
    </div>
  );
}
