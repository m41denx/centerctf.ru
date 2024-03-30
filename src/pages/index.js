import { Inter, IBM_Plex_Sans, Rubik } from "next/font/google";

import MiniLogo from "@/assets/ctfcentral_small.png"
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
                     className={`uppercase bg-gradient-to-tr from-[#1A1A5B] to-[#323297] h-12 flex items-center justify-center px-6 rounded-xl border-solid border-[#6D6DDD88] border-[1px] box-border transition-all duration-300 hover:from-[#30306E] hover:to-[#3737FE]`}>Регистрация</a>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center">
                  <p className={`font-avant text-11xl font-bold -mb-12 uppercase`}>CENTER CTF</p>
                  <span className="font-avant uppercase font-bold text-xl">all flags are planted. engage</span>
              </div>

              <svg id="visual" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0">
                  <path
                      d="M0 552L29 570L58 551L87 584L116 571L145 557L174 549L203 565L232 582L261 553L290 564L319 569L348 569L377 559L406 579L435 566L465 560L494 584L523 585L552 561L581 585L610 582L639 551L668 558L697 559L726 571L755 569L784 583L813 577L842 556L871 571L900 567L900 601L871 601L842 601L813 601L784 601L755 601L726 601L697 601L668 601L639 601L610 601L581 601L552 601L523 601L494 601L465 601L435 601L406 601L377 601L348 601L319 601L290 601L261 601L232 601L203 601L174 601L145 601L116 601L87 601L58 601L29 601L0 601Z"
                      fill="#1d1d43" fillOpacity="0.25" strokeLinecap="square" strokeLinejoin="bevel"></path>
              </svg>
          </main>
          <div className={`bg-darkblue bg-opacity-25 p-8 flex flex-col items-center ${rubik.className}`}>
              <span className="font-bold text-xl uppercase">формат</span>
              <span className="font-avant font-bold text-3xl uppercase">ATTACK/DEFENSE</span>
              <div className="grid grid-cols-2 gap-16 w-full">
                  <div className="p-8 flex flex-col ">
                      <p className="font-avant font-bold text-4xl text-blue-700 uppercase">Защищайте</p>
                      <p className="text-lg border-blue-700 border-l-4 pl-4 mb-4">Каждой команде выдаются серверы с
                          некоторыми сервисами на них. <br/>
                          Найдите и <span className="text-blue-500">исправьте уязвимости</span> в них, прежде чем их найдет
                          кто-то еще. <br/>
                          Помните, на ваши сервисы регулярно <span className="text-blue-500">заходят пользователи* </span>
                          — что бы вы ни делали, все функции сервиса должны работать исправно. Иначе вы рискуете потерять
                          несколько баллов...
                          <p className="text-sm mt-2">* - автоматические проверки, проверяющие работоспособность сервисов</p>
                      </p>
                      <pre
                          className="w-full text-sm font-mono whitespace-pre-line line py-2 px-3 bg-darkblue bg-opacity-50 rounded-lg shadow border-solid border-[#6D6DDD44] border-[1px] box-border">
                            {'center@srv-01:~$ sudo auditctl -k root-actions\n'}
                          <span className="text-gray-400">
                          {'type=TTY msg=audit(12/03/2024 15:29:04.244:59) : tty pid=2852 uid=root auid=root major=136 minor=3 comm=bash data="touch /root/HELLO_THERE",<ret>'}
                          </span>
                      </pre>
                  </div>
                  <div className="p-8 flex flex-col">
                      <p className="font-avant font-bold text-4xl text-red-700 uppercase">Атакуйте</p>
                      <p className="text-lg border-red-700 border-l-4 pl-4 mb-4">
                          <span className="text-red-500">Успейте украсть флаги</span> у вражеских команд, прежде чем они
                          исправят все уязвимости. <br/>
                          Делитесь находками с командой: если вы смогли взломать соперников, то таким же способом могут
                          попытаться <span className="text-red-500">взломать и вас</span>. <br/>
                          Не время расслабляться! Пользователи регулярно <span className="text-red-500">оставляют новые
                          флаги</span> в сервисах, ваша задача
                          забрать их "горячими".
                      </p>
                      <pre
                          className="w-full text-sm font-mono whitespace-pre-line line py-2 px-3 bg-darkblue bg-opacity-50 rounded-lg shadow border-solid border-[#6D6DDD44] border-[1px] box-border">
                            {'center@srv-02:~$ ./cve-2024-1086\n'}
                          <span className="text-gray-400">
                              {'[*] creating user namespace (CLONE_USER)\n...\n'}
                          </span>
                          {'# whoami\n'}
                          <span className="text-gray-400">{'root'}</span>
                      </pre>
                  </div>
              </div>
          </div>
          <div className="h-[999px]"></div>
      </>
  );
}
