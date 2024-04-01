import {useRouter} from "next/router";
import MiniLogo from "@/assets/ctfcentral_small.png";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";


export default function NavBar(props) {

    const router = useRouter()
    const links = {
        "/about": "О CTF",
        "/team": "Команда",
        "/sponsors": "Спонсоры",
        "/jury": "Жюри"
    }

    const [burger, burgerOpen] = useState(false)

    return <div
        className="w-full px-4 fixed z-50 flex items-center justify-between h-16 bg-gradient-to-b from-darkblue via-[#13132C88] to-transparent backdrop-blur">
        <Link legacyBehavior href="/">
            <img src={MiniLogo.src} className="h-10 cursor-pointer"/>
        </Link>
        <div className="md:flex hidden items-center">
            {/*nav*/}
            {Object.keys(links).map(link => <Link key={link} href={link}
                                                  className={`font-bold flex items-center justify-center h-12 px-6 uppercase border-b-2 border-solid border-transparent hover:border-white ${router.pathname === link ? "border-white" : ""} transition-all duration-300`}>{links[link]}</Link>)}
        </div>

        <div className="flex items-center gap-2">
            <a href="#"
               className={`uppercase bg-gradient-to-tr from-[#1A1A5B] to-[#323297] h-12 flex items-center justify-center px-6 rounded-xl border-solid border-[#6D6DDD88] border-[1px] box-border transition-all duration-300 hover:from-[#30306E] hover:to-[#3737FE]`}>Регистрация</a>
            <a href="#"
               className="h-12 rounded-xl border-solid border-[#6D6DDD88] border-[1px] box-border aspect-square flex items-center justify-center
               md:hidden" onClick={() => burgerOpen(!burger)}>
                <FontAwesomeIcon icon={faBars} className="h-8"/>
                {burger && <div className=" border-solid border-[#6D6DDD88] border-[1px] box-border absolute top-full right-4 rounded-xl
                bg-darkblue bg-opacity-90 flex flex-col">
                    {Object.keys(links).map(link => <Link key={link} href={link} className={`font-bold flex items-center
                     justify-center h-12 px-6 uppercase hover:bg-darkblue rounded-xl border-solid border-transparent
                      hover:border-[#6D6DDD44] border-[1px] ${router.pathname === link ? "border-white" : ""} transition-all
                       duration-150`}>{links[link]}</Link>)}
                </div>}
            </a>
        </div>
    </div>
}