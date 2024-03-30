import { Inter, IBM_Plex_Sans, Rubik } from "next/font/google";

import MiniLogo from "@/assets/ctfcentral_small.png"
import Blue from "@/assets/blue.gif"
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const ibm = IBM_Plex_Sans({ weight: "400", subsets: ["latin", "cyrillic"] });
const rubik = Rubik({ subsets: ["latin", "cyrillic"] });

const links = {
    "/about": "О CTF",
    "/team": "Команда",
    "/sponsors": "Спонсоры",
    "/jury": "Жюри"
}

export default function Home() {
  return (
      <>
          <main className={`${rubik.className} flex flex-col items-center h-screen select-none`}>
              <div
                  className="w-full px-4 fixed z-50 flex items-center justify-between h-16 bg-gradient-to-b from-darkblue via-[#13132C88] to-transparent backdrop-blur">
                  <img src={MiniLogo.src} className="h-10"/>
                  <div className="flex items-center">
                      {/*nav*/}
                      {Object.keys(links).map(link => <Link key={link} href={link}
                                                            className={`font-bold flex items-center justify-center h-12 px-6 uppercase border-b-2 border-solid border-transparent hover:border-white transition-all duration-300`}>{links[link]}</Link>)}
                  </div>
                  <a href="#"
                     className={`uppercase bg-gradient-to-tr from-[#1A1A5B] to-[#323297] h-12 flex items-center justify-center px-6 rounded-xl border-solid border-[#6D6DDD] border-[1px] box-border transition-all duration-300 hover:from-[#30306E] hover:to-[#3737FE]`}>Регистрация</a>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center">
                  <p className={`font-avant text-11xl font-bold -mb-12 uppercase`}>CENTER CTF</p>
                  <span className="font-avant uppercase font-bold text-xl">all flags are planted. engage</span>
                  <span className="text-xl font-avant font-bold">28.04.2024 - ВОРОНЕЖ</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250" className="absolute bottom-0">
                  <path fill="#1d1d43" fill-opacity="0.25"
                        d="M0,192L90,96L180,64L270,160L360,128L450,256L540,96L630,256L720,64L810,192L900,96L990,32L1080,64L1170,96L1260,224L1350,160L1440,96L1440,320L1350,320L1260,320L1170,320L1080,320L990,320L900,320L810,320L720,320L630,320L540,320L450,320L360,320L270,320L180,320L90,320L0,320Z"></path>
              </svg>
          </main>
          <div className="bg-darkblue bg-opacity-25 p-8">

          </div>
          <div className="h-[999px]"></div>
      </>
  );
}
