import { Inter, IBM_Plex_Sans, Rubik } from "next/font/google";

import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFile} from "@fortawesome/free-regular-svg-icons";
import {faDownload} from "@fortawesome/free-solid-svg-icons";
import {useRouter} from "next/router";
import NavBar from "@/components/NavBar";

import Kirbo from "@/assets/Kirbo.webp"

const rubik = Rubik({ subsets: ["latin", "cyrillic"] });

function datediff(first, second) {
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
}




export default function Home() {

    const router = useRouter()

    return (
      <>
          <main className={`${rubik.className} flex flex-col items-center h-screen select-none`}>
              <NavBar />
              <div className="flex-1 flex flex-col items-center justify-center">
                  <p className="font-avant text-6xl md:text-8xl lg:text-9xl xl:text-11xl font-bold uppercase">CENTER CTF</p>
                  <span className="font-avant uppercase font-bold text-md md:text-lg lg:text-xl">all flags are planted. engage</span>
              </div>

              <svg viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0">
                  <path
                      d="M0 552L29 570L58 551L87 584L116 571L145 557L174 549L203 565L232 582L261 553L290 564L319 569L348 569L377 559L406 579L435 566L465 560L494 584L523 585L552 561L581 585L610 582L639 551L668 558L697 559L726 571L755 569L784 583L813 577L842 556L871 571L900 567L900 601L871 601L842 601L813 601L784 601L755 601L726 601L697 601L668 601L639 601L610 601L581 601L552 601L523 601L494 601L465 601L435 601L406 601L377 601L348 601L319 601L290 601L261 601L232 601L203 601L174 601L145 601L116 601L87 601L58 601L29 601L0 601Z"
                      fill="#1d1d43" fillOpacity="0.25" strokeLinecap="square" strokeLinejoin="bevel"></path>
              </svg>
          </main>
          <div className={`bg-darkblue bg-opacity-25 p-8 flex flex-col items-center ${rubik.className}`}>
              <span className="font-bold text-xl uppercase">формат</span>
              <span className="font-avant font-bold text-3xl uppercase">ATTACK/DEFENSE</span>
              <div className="grid lg:grid-cols-2 gap-16 w-full">
                  <div className="p-8 flex flex-col ">
                      <p className="font-avant font-bold text-4xl text-blue-700 uppercase">Защищайте</p>
                      <p className="text-lg border-blue-700 border-l-4 pl-4 mb-4">Каждой команде выдаются серверы с
                          некоторыми сервисами на них. <br/>
                          Найдите и <span className="text-blue-500">исправьте уязвимости</span> в них, прежде чем их
                          найдет
                          кто-то еще. <br/>
                          Помните, на ваши сервисы регулярно <span
                              className="text-blue-500">заходят пользователи* </span>
                          — что бы вы ни делали, все функции сервиса должны работать исправно. Иначе вы рискуете
                          потерять
                          несколько баллов...
                          <span className="text-sm mt-2">* - автоматические проверки, проверяющие работоспособность сервисов</span>
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
                          забрать их &quot;горячими&quot;.
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

              <span className="font-bold text-xl uppercase mt-16">все что нужно знать</span>
              <span className="font-avant font-bold text-3xl uppercase">участие</span>
              <div className="grid lg:grid-cols-2 gap-16 w-full mt-8">
                  <div
                      className="bg-darkblue bg-opacity-50 rounded-2xl shadow border-solid border-[#6D6DDD44] border-[1px] box-border">
                      <p className="px-4 py-1 block text-xl uppercase font-bold">Место проведения</p>
                      <iframe
                          src="https://yandex.ru/map-widget/v1/?ll=39.217203%2C51.664266&mode=search&oid=1013107961&ol=biz&z=16.62&theme=dark"
                          allowFullScreen="true" className="rounded-2xl w-full aspect-video"></iframe>
                      <p className="text-lg border-blue-700 border-l-4 pl-4 m-4">
                          Адрес: <a href="https://yandex.ru/maps/-/CDRfvHoQ" target="_blank"
                                    className="text-blue-500 hover:underline">
                          г. Воронеж, площадь Детей, 1
                      </a><br/>
                          Дворец творчества детей и молодёжи
                      </p>
                  </div>
                  <div className="flex flex-col gap-4 h-full">
                      <div
                          className="bg-darkblue bg-opacity-50 rounded-2xl shadow border-solid border-[#6D6DDD44] border-[1px] box-border flex-1">
                          <p className="px-4 py-1 block text-xl uppercase font-bold">Дата проведения</p>
                          <div className="p-4">
                              <p className="text-4xl lg:text-7xl font-bold">28 апреля 2024</p>
                              <span
                                  className="text-xl font-bold">Через {datediff(new Date(), new Date("2024-04-28"))} дней</span>
                          </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 flex-1">
                          <Link href="#" legacyBehavior>
                              <div
                                  className="bg-darkblue bg-opacity-50 rounded-2xl shadow border-solid border-[#6D6DDD44] border-[1px]
                              box-border relative group cursor-pointer aspect-[2/3] lg:aspect-auto">
                                  <FontAwesomeIcon icon={faFile} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                              text-8xl opacity-25 group-hover:rotate-12 group-hover:opacity-50 group-hover:scale-150 transition-all duration-300"/>
                                  <p className="px-4 py-1 text-md lg:text-xl uppercase font-bold flex items-center justify-between">
                                      Положение
                                      <FontAwesomeIcon icon={faDownload} className="text-sm"/>
                                  </p>
                              </div>
                          </Link>
                          <Link href="#" legacyBehavior>
                              <div
                                  className="bg-darkblue bg-opacity-50 rounded-2xl shadow border-solid border-[#6D6DDD44] border-[1px]
                              box-border relative group cursor-pointer aspect-[2/3] lg:aspect-auto">
                                  <FontAwesomeIcon icon={faFile} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                              text-8xl opacity-25 group-hover:rotate-12 group-hover:opacity-50 group-hover:scale-150 transition-all duration-300"/>
                                  <p className="px-4 py-1 text-md lg:text-xl uppercase font-bold flex items-center justify-between">
                                      Регламент
                                      <FontAwesomeIcon icon={faDownload} className="text-sm"/>
                                  </p>
                              </div>
                          </Link>
                          <div
                              className="bg-darkblue bg-opacity-50 rounded-2xl shadow border-solid border-[#6D6DDD44] border-[1px] box-border aspect-[2/3] lg:aspect-auto"></div>
                      </div>
                  </div>
              </div>

              <span className="font-bold text-xl uppercase mt-16">я больше не буду без тз работать</span>
              <span className="font-avant font-bold text-3xl uppercase">споносры</span>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 w-full mt-8">
                  <div
                      className="bg-darkblue bg-opacity-50 rounded-2xl shadow border-solid border-[#6D6DDD44] border-[1px]
                              box-border flex flex-col items-center p-4">
                      <img src={Kirbo.src} />
                      <p className="text-xl font-bold">Мать его Кирби</p>
                  </div>
              </div>
          </div>

          <div className="relative h-32 overflow-hidden">
              <svg viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg" className="rotate-180 absolute">
                  <path
                      d="M0 552L29 570L58 551L87 584L116 571L145 557L174 549L203 565L232 582L261 553L290 564L319 569L348 569L377 559L406 579L435 566L465 560L494 584L523 585L552 561L581 585L610 582L639 551L668 558L697 559L726 571L755 569L784 583L813 577L842 556L871 571L900 567L900 601L871 601L842 601L813 601L784 601L755 601L726 601L697 601L668 601L639 601L610 601L581 601L552 601L523 601L494 601L465 601L435 601L406 601L377 601L348 601L319 601L290 601L261 601L232 601L203 601L174 601L145 601L116 601L87 601L58 601L29 601L0 601Z"
                      fill="#1d1d43" fillOpacity="0.25" strokeLinecap="square" strokeLinejoin="bevel"></path>
              </svg>
          </div>

          <div
              className={`grid grid-cols-3 gap-8 w-full p-8 bg-gradient-to-t from-darkblue via-[#13132C88] to-transparent backdrop-blur ${rubik.className}`}>
              <span className="font-bold">ФУТЕР СУКА ФУТЕР</span>
              <span className="font-bold">ФУТЕР СУКА ФУТЕР</span>
              <span className="font-bold">ФУТЕР СУКА ФУТЕР</span>
          </div>
          <p className="bg-darkblue text-sm text-slate-500 p-2 text-center">Designed by <a className="transition-all duration-300 hover:text-blue-600 " href="https://m41den.com" target="_blank">@m41den</a></p>
      </>
  );
}
