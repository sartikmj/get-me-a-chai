import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (<>
    <div className="flex justify-center items-center flex-col gap-4 text-white h-[44vh] px-5 md:px-0 text-xs md:text-base" >
      <div className="font-bold text-center flex gap-4 justify-center items-center md:text-4xl text-xl">Get me a Ducat<span><img className="invertImg" src="/tea.gif" width={88} alt="" /></span> </div>
      <p className="text-center md:text-left">
        A crowdfunding platform for creators. Get funded by your fans and followers. Start now !
      </p>
      <div>
        <Link href={"/login"}>

          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Start Here Now !</button>
        </Link>

        <Link href={"/about"} >
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Read More Here !
          </span>
        </button>
        </Link>
      </div>
    </div>
    <div className="bg-white h-1 opacity-10">
    </div>

    <div className="text-white container mx-auto py-16 px-10 ">
      <h2 className="text-3xl font-bold text-center mb-14">Your Fans can buy you a Ducat !</h2> {/* my-10 as per harry */}
      <div className="flex gap-5 justify-around">
        <div className="item space-y-3 flex flex-col items-center justify-center">
          <img src="/man.gif" className="bg-slate-200 rounded-full p-2 text-black" width={88} alt="" />
          <p className="font-bold text-center" >Fans want to help.</p>
          <p className="" >Your Fans are available for you to help you </p> {/* As per harry w-1/2 text-center */}
        </div>
        <div className="item space-y-3 flex flex-col items-center justify-center">
          <img src="/coin.gif" className="bg-slate-200 rounded-full p-2 text-black" width={88} alt="" />
          <p className="font-bold text-center" >Fans want to help.</p>
          <p className="" >Your Fans are available for you to help you </p> {/* As per harry w-1/2 text-center */}
        </div>
        <div className="item space-y-3 flex flex-col items-center justify-center">
          <img src="/group.gif" className="bg-slate-200 rounded-full p-2 text-black" width={88} alt="" />
          <p className="font-bold text-center" >Fans want to help.</p>
          <p className="" >Your Fans are available for you to help you </p> {/* As per harry w-1/2 text-center */}
        </div>
      </div>
    </div>

    <div className="bg-white h-1 opacity-10">
    </div>

    <div className="text-white container mx-auto py-16 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold  text-center mb-14">Learn More About Us</h1>
      <iframe className="md:w-[560px] md:h-[315px]"  src="https://www.youtube.com/embed/De77dp-tjUg?si=nvlWS9oHz57nyXNE" title="YouTube video player" style={{ border: "0" }} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  </>
  );
}
