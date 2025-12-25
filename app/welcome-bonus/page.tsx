import Image from "next/image";
import Link from "next/link";

const imgWelcome4 = "https://bet25.com/media/m_thumbs/unsafe/933x601/smart/68e7a563f720567847cfeb76";
const imgWelcomeMobile = "https://bet25.com/media/m_thumbs/unsafe/403x748/smart/68e91724f720567847395d1a";

export default function WelcomeBonusPage() {
  return (
    <main className="min-h-screen bg-[#230F49] text-[#FFF] relative">
      <div className="mx-auto max-w-[1304px] px-4 py-10">
        {/* Top Banner Section with Text Inside Card */}
        <div className="relative mt-8 mb-12">
          <div 
            className="rounded-[17px] min-h-[129px] p-6 md:p-8 flex items-center justify-center"
            style={{
              borderRadius: '25px',
              border: '2px solid rgb(124, 76, 229)',
              background: 'linear-gradient(90deg, rgba(124, 76, 229, 0) 0%, rgb(124, 76, 229) 100%)',
            }}
          >
            <div className="text-center">
              <p className="text-base sm:text-lg md:text-xl lg:text-[32px] leading-normal lg:leading-[32px] text-white mb-2">
                <span className="font-bold">Experience the ultimate reward with </span>
                <span className="text-[#f4c451]">Bet</span>
                <span className="font-bold">25</span>
                <span className="font-bold">.</span>
              </p>
              <p className="text-base sm:text-lg md:text-xl lg:text-[32px] leading-normal lg:leading-[32px] text-white">
                Our deposit bonuses are designed to reward your loyalty, just like all our promotions.
              </p>
            </div>
          </div>
        </div>

        {/* Hero Image with Overlaid Text */}
        <div className="relative rounded-[17px] overflow-hidden mb-8 mt-12">
          {/* Mobile Image - Clickable */}
          <div className="block sm:hidden w-full relative" style={{ aspectRatio: '403/748', minHeight: '300px' }}>
            <Link 
              href={imgWelcomeMobile}
              className="block w-full h-full relative"
            >
              <Image
                src={imgWelcomeMobile}
                alt="Welcome Bonus"
                fill
                className="object-cover rounded-[17px]"
                sizes="100vw"
                priority
              />
            </Link>
          </div>
          {/* Desktop Image - Not clickable - Hidden on mobile */}
          <div className="hidden sm:block h-[500px] md:h-[700px] lg:h-[840px] w-full relative">
            <Image
              src={imgWelcome4}
              alt="Welcome Bonus"
              fill
              className="object-cover rounded-[17px]"
              sizes="100vw"
              priority
            />
          </div>
          {/* Overlaid Text - Top */}
          <div className="absolute top-0 left-0 right-0 pt-6 sm:pt-8 md:pt-12 pointer-events-none bg-gradient-to-b from-black/40 to-transparent">
            <div className="text-center px-4">
              <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-[100px] leading-tight sm:leading-[50px] md:leading-[60px] lg:leading-[80px] font-bold text-white uppercase mb-2 sm:mb-4">
                GET <span className="text-[#f4c451]">4X 150% </span>
                <br className="hidden sm:block" />
                DEPOSIT BONUS
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-[32px] leading-normal lg:leading-[32px] text-white uppercase">
                AFTER REGISTRATION
              </p>
            </div>
          </div>
          {/* Overlaid Text - Bottom */}
          <div className="absolute bottom-0 left-0 right-0 pb-6 sm:pb-8 md:pb-12 pointer-events-none bg-gradient-to-t from-black/40 to-transparent">
            <div className="text-center px-4">
              <p className="text-sm sm:text-base md:text-lg lg:text-[32px] leading-normal lg:leading-[32px] text-white">
                Activate and use any of these four bonuses{" "}
                <span className="font-bold">at any time and in any order.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Hybrid Gameplay Explanation - Mobile View with Gradient Card */}
        <div className="sm:hidden mb-16">
          <div 
            className="text-center px-4 py-4 rounded-[17px]"
            style={{
              borderRadius: '25px',
              border: '2px solid rgb(124, 76, 229)',
              background: 'linear-gradient(90deg, rgba(124, 76, 229, 0) 0%, rgb(124, 76, 229) 100%)',
            }}
          >
            <p className="text-sm text-white">
              <span className="font-bold">Enjoy these bonuses with our hybrid gameplay model</span>, where both bets and winnings are split proportionally between real and bonus balances.
            </p>
          </div>
        </div>

        {/* Hybrid Gameplay Explanation - Desktop View */}
        <div className="text-center mb-16 hidden sm:block">
          <p className="text-base sm:text-lg md:text-xl lg:text-[32px] leading-normal lg:leading-[32px] text-white max-w-[1184px] mx-auto px-4">
            <span className="font-bold">Enjoy these bonuses with our hybrid gameplay model</span>, where both bets and winnings are split proportionally between real and bonus balances.
          </p>
        </div>

        {/* Example Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Example 1 Card */}
          <div className="bg-gradient-to-b from-[#08011e] to-[#230f49] rounded-[17px] p-6 md:p-8">
            <div className="text-base sm:text-lg md:text-xl lg:text-[32px] leading-normal lg:leading-[32px] text-white">
              <p className="font-bold text-[#00aabc] mb-4">Example 1</p>
              <ul className="list-disc space-y-2 ml-8">
                <li>
                  <span className="font-bold">Deposit:</span> $100
                </li>
                <li>
                  <span className="font-bold">Bonus:</span> $100
                </li>
                <li>
                  <span className="font-bold">Total:</span> $200 (50% real / 50% bonus)
                </li>
              </ul>
              <div className="mt-6 space-y-2">
                <ul className="list-disc ml-8 space-y-2">
                  <li>
                    <span className="font-bold">Bet:</span> $10 → $5 real + $5 bonus
                  </li>
                  <li>
                    <span className="font-bold">Win:</span> $200 → $100 to real + $100 to bonus
                  </li>
                </ul>
              </div>
              <p className="font-bold mt-6 mb-2">Result:</p>
              <ul className="list-disc ml-8 space-y-2">
                <li>Real: 100 – 5 + 100 = $195</li>
                <li>Bonus: 100 – 5 + 100 = $195</li>
              </ul>
            </div>
          </div>

          {/* Example 2 Card */}
          <div className="bg-gradient-to-b from-[#08011e] to-[#230f49] rounded-[17px] p-6 md:p-8">
            <div className="text-base sm:text-lg md:text-xl lg:text-[32px] leading-normal lg:leading-[32px] text-white">
              <p className="font-bold text-[#00aabc] mb-4">Example 2</p>
              <ul className="list-disc space-y-2 ml-8">
                <li>
                  <span className="font-bold">Deposit:</span> $100
                </li>
                <li>
                  <span className="font-bold">Bonus:</span> $150
                </li>
                <li>
                  <span className="font-bold">Total:</span> $250 (33.33% real, 66.67% bonus)
                </li>
              </ul>
              <p className="font-bold mt-6 mb-2">Bet:</p>
              <ul className="list-disc ml-8 space-y-2 mb-4">
                <li>
                  <span className="font-bold">Amount: </span>
                  $25 → split $10 real + $15 bonus
                </li>
              </ul>
              <p className="font-bold mb-2">Win:</p>
              <ul className="list-disc ml-8 space-y-2 mb-4">
                <li>
                  <span className="font-bold">Amount: </span>
                  $60 → Split into $20 Real / $40 Bonus
                </li>
              </ul>
              <p className="font-bold mb-2">Result:</p>
              <ul className="list-disc ml-8 space-y-2">
                <li>
                  <span className="font-bold">Real: </span>
                  $100 – 10 + 20 = <span className="font-bold">$110</span>
                </li>
                <li>
                  <span className="font-bold">Bonus:</span> $150 – 15 + 40 = <span className="font-bold">$175</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Withdrawals Section */}
        <div 
          className="rounded-[17px] min-h-[256px] p-6 md:p-8 mb-16"
          style={{
            borderRadius: '25px',
              border: '2px solid rgb(124, 76, 229)',
              background: 'linear-gradient(90deg, rgba(124, 76, 229, 0) 0%, rgb(124, 76, 229) 100%)',
          }}
        >
          <div className="text-[#f4c451] text-xl sm:text-2xl md:text-3xl lg:text-[32px] leading-normal lg:leading-[32px] font-bold mb-4">
            Withdrawals
          </div>
          <ul className="list-disc ml-6 md:ml-8 space-y-2 text-white text-base sm:text-lg md:text-xl lg:text-[32px] leading-normal lg:leading-[32px]">
            <li>You can withdraw your real balance at any time.</li>
            <li>If you still have funds in the bonus balance, the bonus will be forfeited upon withdrawal.</li>
          </ul>
        </div>

        {/* First CTA Button */}
        <div className="text-center mb-16">
          <button
            className="bg-[#00AABC] text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 active:scale-100 w-[206px] h-[70px] sm:w-[451px] sm:h-[83px]"
            style={{
              filter: 'drop-shadow(8px 10px 5.7px rgba(0, 0, 0, 0.15))',
            }}
          >
            <span className="text-base sm:text-xl md:text-2xl lg:text-[36px] leading-normal lg:leading-[32px]">
              Get<span className="font-black"> 150%</span> Deposit Bonus
            </span>
          </button>
        </div>

        {/* Terms & Conditions Accordion */}
        <section className="terms mb-16" aria-label="Terms & Conditions">
          <div className="acc">
            {/* Item 1 */}
            <div className="item">
              <input id="t1" className="tgl" defaultChecked type="checkbox" />
              <label className="hdr" htmlFor="t1">How the Welcome Package Works</label>
              <div className="wrap">
                <div className="cnt">
                  <p>
                    &bull; All players who make a deposit of more than $10 (or equivalent in another currency) are eligible for the Welcome Package.<br />
                    &bull; 4&times; The Welcome Package grants you 4 separate 150% deposit bonuses, which you can activate in any order.<br />
                    &bull; The maximum bonus credit per bonus is $2,000 (or the equivalent in your currency).<br />
                    &bull; The maximum winnings you can claim from each bonus are 500% of your bonus credit (bonus limit).
                  </p>
                </div>
              </div>
            </div>
            {/* Item 2 */}
            <div className="item">
              <input id="t2" className="tgl" type="checkbox" />
              <label className="hdr" htmlFor="t2">Hybrid Betting System</label>
              <div className="wrap">
                <div className="cnt">
                  <p>
                    &bull; This bonus uses a hybrid betting system: Both real balance and bonus balance are proportionally used for stakes and wins.<br />
                    &bull; Both real and bonus balances count toward wagering requirements.<br />
                    &bull; You may withdraw your real balance at any time, but if you still have bonus funds, the bonus will be voided upon withdrawal.
                  </p>
                </div>
              </div>
            </div>
            {/* Item 3 */}
            <div className="item">
              <input id="t3" className="tgl" type="checkbox" />
              <label className="hdr" htmlFor="t3">Wagering Requirements &amp; Bonus Rules</label>
              <div className="wrap">
                <div className="cnt">
                  <p>
                    &bull; 35&times; wagering of bonus and cash amounts.<br />
                    &bull; You have 30 days after registration to activate all four deposit bonuses.<br />
                    &bull; Once a bonus is activated, you have 3 days to meet the wagering requirements.<br />
                    &bull; Different games contribute differently toward wagering requirements. Click the info button on each game to see the contribution rate.<br />
                    &bull; Only one bonus per user is allowed. Multiple accounts are strictly prohibited.
                  </p>
                </div>
              </div>
            </div>
            {/* Item 4 */}
            <div className="item">
              <input id="t4" className="tgl" type="checkbox" />
              <label className="hdr" htmlFor="t4">Important Notes</label>
              <div className="wrap">
                <div className="cnt">
                  <p>
                    &bull; Any attempt to abuse the bonus&mdash;including but not limited to multiple accounts, collusion, or fraudulent activity&mdash;may result in the loss of the bonus and all winnings, as well as permanent exclusion from all promotions.<br />
                    &bull; The general terms and conditions also apply.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Second CTA Button */}
        <div className="text-center mb-16">
          <button
            className="bg-[#00AABC] text-white font-bold rounded-lg transition-all duration-300 hover:scale-105 active:scale-100 w-[206px] h-[70px] sm:w-[451px] sm:h-[83px]"
            style={{
              filter: 'drop-shadow(8px 10px 5.7px rgba(0, 0, 0, 0.15))',
            }}
          >
            <span className="text-base sm:text-xl md:text-2xl lg:text-[36px] leading-normal lg:leading-[32px]">
              Claim Your Welcome Bonus
            </span>
          </button>
        </div>

        {/* Footer Card */}
        <div 
          className="mx-auto mb-8 flex flex-col items-center justify-center gap-1 sm:flex-row sm:gap-8 px-2 sm:px-6 py-2 sm:py-6 footer-card-container"
          style={{
            width: '402px',
            maxWidth: '100%',
            height: '145px',
            borderRadius: '25px',
            border: '2px solid rgb(124, 76, 229)',
            background: 'linear-gradient(90deg, rgba(124, 76, 229, 0) 0%, rgb(124, 76, 229) 100%)',
            overflow: 'hidden',
          }}
        >
          <div
            className="flex justify-center items-center footer-image-container"
            style={{
              width: '120px',
              height: '80px',
              flexShrink: 0,
            }}
          >
            <Image
              src="/Bet25.png"
              alt="Bet25 Logo"
              width={396}
              height={82}
              className="object-contain footer-image"
              style={{
                width: '120px',
                height: '80px',
              }}
            />
          </div>
          <div
            className="text-center sm:text-left footer-text"
            style={{
              color: '#FFF',
              fontFamily: 'Kanit',
              fontSize: '20px',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: '22px',
              textTransform: 'uppercase',
            }}
          >
            <div>FAIR GAMING,</div>
            <div>SIMPLY DONE</div>
          </div>
        </div>

        {/* Card Below Footer */}
        <div 
          className="mx-auto mb-16"
          style={{
            width: '100%',
            maxWidth: '1306px',
            minHeight: '170px',
            borderRadius: '17px',
            border: '2px solid rgba(124, 76, 229, 0.00)',
            background: 'linear-gradient(90deg, rgba(124, 76, 229, 0.00) 0%, #230F49 100%)',
            padding: '24px',
          }}
        >
          {/* Add content here if needed */}
        </div>
      </div>
    </main>
  );
}
