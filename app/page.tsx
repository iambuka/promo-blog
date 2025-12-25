import Link from "next/link";
import Image from "next/image";

const banners = [
  {
    href: "/welcome-bonus",
    title: "Welcome Bonus",
    desc: "Learn how the Welcome Bonus works and how to claim it.",
    img: "/banners/welcome-bonus.png",
  },
  {
    href: "/everyday-rewards",
    title: "Everyday Rewards",
    desc: "Daily/weekly rewards and cashback explained.",
    img: "/banners/everyday-rewards.png",
  },
  {
    href: "/first-bet",
    title: "First Bet",
    desc: "How the first bet offer works and who is eligible.",
    img: "/banners/first-bet.png",
  },
  {
    href: "/payback-monday",
    title: "Payback Monday",
    desc: "VIP levels, perks, and how progression works.",
    img: "/banners/payback-monday.png",
  },
  {
    href: "/9000-games",
    title: "9000 Games",
    desc: "Invite friends and see referral benefits.",
    img: "/banners/9000-games.png",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#230F49] text-[#FFF]">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl font-bold text-[#FFF]">Promotions</h1>
        <p className="mt-2 text-[#FFF]">
          Click a banner to open its info page.
        </p>

        <section className="mt-8 grid grid-cols-3 gap-x-12 gap-y-12">
          {banners.map((b) => (
            <Link
              key={b.href}
              href={b.href}
              className="group no-underline overflow-hidden rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={b.img}
                  alt={b.title}
                  fill
                  className="object-cover transition group-hover:scale-[1.02]"
                />
              </div>

              <div className="p-3">
                <h2 className="text-sm font-semibold text-[#FFF]">{b.title}</h2>
                <p className="mt-1 text-xs text-[#FFF] line-clamp-2">{b.desc}</p>
                <div className="mt-2 text-xs font-medium text-[#FFF]">
                  Read more →
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}