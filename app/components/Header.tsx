import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full border-b border-white/10 bg-[#230F49] text-[#FFF]">
      <nav className="mx-auto max-w-[1920px] px-6 py-5 sm:px-8 sm:py-6">
        <div className="flex flex-col items-center gap-24 sm:flex-row sm:justify-between">
          <Link href="/" className="hover:opacity-80 transition">
            <Image
              src="/Bet25.png"
              alt="Bet25 Promo"
              width={120}
              height={28}
              className="h-7 w-auto"
            />
          </Link> 
          
          <ul className="list-none p-0 m-0 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 sm:gap-x-12 sm:gap-y-0">
            <li>
              <Link
                href="/"
                className="text-sm font-medium text-[#FFF] transition hover:text-white sm:text-base"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="https://www.bet25.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[#FFF] transition hover:text-white sm:text-base"
              >
                Bet25
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-sm font-medium text-[#FFF] transition hover:text-white sm:text-base"
              >
                Menu 3
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-sm font-medium text-[#FFF] transition hover:text-white sm:text-base"
              >
                Menu 4
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

