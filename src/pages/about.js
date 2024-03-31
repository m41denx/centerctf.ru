import {Rubik} from "next/font/google";
import NavBar from "@/components/NavBar";

import Lev from "@/assets/img.png"

const rubik = Rubik({ subsets: ["latin", "cyrillic"] });

export default function AboutPage(props) {
    return (
        <main className={`${rubik.className} flex flex-col items-center select-none`}>
            <NavBar />

            <img src={Lev.src} className="mt-48" />
        </main>
    )
}