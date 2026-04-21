import SectionHeader from "@/components/ui/SectionHeader";
import TextType from "@/components/TextType";
import AnimatedContent from "@/components/AnimatedContent";
import SpotlightCard from "@/components/SpotlightCard";
import StampTag from "@/components/ui/StampTag";
import CountUp from "@/components/CountUp";

const DOCTRINE = [
  {
    char: "TD",
    title: "Toàn dân",
    body: "Mọi người dân, không phân biệt giai cấp, dân tộc, tôn giáo, đều là chiến sĩ.",
  },
  {
    char: "TD",
    title: "Toàn diện",
    body: "Chiến tranh trên mọi mặt trận: quân sự, chính trị, kinh tế, văn hoá, ngoại giao.",
  },
  {
    char: "TK",
    title: "Trường kỳ",
    body: "Không nôn nóng. Thắng từng bước, bồi dưỡng nội lực, kiên trì đến cùng.",
  },
  {
    char: "TL",
    title: "Tự lực cánh sinh",
    body: "Dựa vào sức mình là chính. Viện trợ là quý — nhưng không phụ thuộc.",
  },
];

export default function Resistance() {
  return (
    <section
      id="resistance"
      className="relative py-24 md:py-32 bg-ink text-cream overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
      >
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="tac-grid"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 48 0 L 0 0 0 48"
                fill="none"
                stroke="#D32F2F"
                strokeWidth="0.5"
                opacity="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tac-grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <StampTag tone="red">1946 — 1950</StampTag>
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-cream/70">
              Toàn quốc kháng chiến
            </span>
          </div>
          <h2 className="headline text-[clamp(2.5rem,7vw,6rem)] text-cream uppercase tracking-monumental leading-none max-w-5xl">
            THÀ HY SINH{" "}
            <span className="text-blood">TẤT CẢ</span>,<br />
            CHỨ NHẤT ĐỊNH KHÔNG CHỊU MẤT NƯỚC
          </h2>
          <div className="flex items-center gap-2 pt-2">
            <span className="h-[3px] w-16 bg-blood" />
            <span className="h-[3px] w-40 bg-cream" />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          <div className="lg:col-span-7">
            <div className="relative bg-cream text-ink p-7 md:p-10 border-4 border-blood shadow-[10px_10px_0_#D32F2F]">
              <div className="flex items-center justify-between mb-4 border-b-2 border-ink pb-3">
                <span className="font-mono text-xs uppercase tracking-[0.3em]">
                  Lời kêu gọi toàn quốc kháng chiến
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.3em] bg-blood text-cream px-2 py-1">
                  19 · 12 · 1946
                </span>
              </div>

              <TextType
                as="p"
                text={[
                  'Hỡi đồng bào toàn quốc! Chúng ta muốn hoà bình, chúng ta phải nhân nhượng. Nhưng chúng ta càng nhân nhượng, thực dân Pháp càng lấn tới, vì chúng quyết tâm cướp nước ta một lần nữa!',
                  'Không! Chúng ta thà hy sinh tất cả, chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ.',
                  'Bất kỳ đàn ông, đàn bà, bất kỳ người già, người trẻ, không chia tôn giáo, đảng phái, dân tộc — hễ là người Việt Nam thì phải đứng lên đánh thực dân Pháp để cứu Tổ quốc.',
                ]}
                typingSpeed={28}
                pauseDuration={2400}
                deletingSpeed={18}
                loop={true}
                showCursor={true}
                cursorCharacter="▍"
                className="serif text-lg md:text-xl leading-relaxed min-h-[12rem] md:min-h-[10rem] block"
                cursorClassName="text-blood"
              />
              <p className="mt-6 text-right font-mono text-xs uppercase tracking-[0.3em] opacity-70">
                — Chủ tịch Hồ Chí Minh
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 grid gap-5">
            <AnimatedContent distance={80}>
              <SpotlightCard
                className="!bg-ink !border !border-cream/20 !rounded-none !p-7 !text-cream shadow-[8px_8px_0_#D32F2F]"
                spotlightColor="rgba(211, 47, 47, 0.45)"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-70">
                    Chiến dịch
                  </span>
                  <span className="headline text-4xl text-flagYellow">
                    1947
                  </span>
                </div>
                <h3 className="headline text-2xl md:text-3xl uppercase leading-tight mb-3">
                  Việt Bắc Thu – Đông
                </h3>
                <p className="serif leading-relaxed text-cream/85">
                  Phá sản chiến lược <em>“đánh nhanh thắng nhanh”</em> của
                  Pháp. Bảo toàn căn cứ địa cách mạng — xác lập thế cầm cự,
                  chuẩn bị phản công.
                </p>
              </SpotlightCard>
            </AnimatedContent>

            <AnimatedContent distance={80} delay={0.1}>
              <SpotlightCard
                className="!bg-blood !border !border-ink !rounded-none !p-7 !text-cream shadow-[8px_8px_0_#1A1A1A]"
                spotlightColor="rgba(255, 205, 0, 0.55)"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-80">
                    Chiến dịch
                  </span>
                  <span className="headline text-4xl text-flagYellow">
                    1950
                  </span>
                </div>
                <h3 className="headline text-2xl md:text-3xl uppercase leading-tight mb-3">
                  Biên Giới — khai thông quốc tế
                </h3>
                <p className="serif leading-relaxed text-cream/95">
                  Mở đường liên lạc với Trung Quốc và hệ thống xã hội chủ
                  nghĩa. Lần đầu tiên quân đội ta{" "}
                  <strong>giành quyền chủ động chiến lược</strong> trên chiến
                  trường chính.
                </p>
              </SpotlightCard>
            </AnimatedContent>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex items-center gap-4 mb-8">
            <StampTag tone="cream">Đường lối</StampTag>
            <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-cream/70">
              Bốn nguyên tắc chiến lược
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {DOCTRINE.map((d, i) => (
              <AnimatedContent key={d.title} distance={60} delay={i * 0.08}>
                <div className="group relative bg-cream text-ink p-6 h-full border-2 border-cream hover:border-blood hover:-translate-y-1 transition-all duration-300 shadow-[4px_4px_0_#D32F2F]">
                  <div className="flex items-start justify-between mb-4">
                    <span className="font-headline text-5xl text-blood leading-none">
                      {d.char}
                    </span>
                    <span className="font-mono text-[10px] text-ink/60">
                      0{i + 1} / 04
                    </span>
                  </div>
                  <h4 className="headline text-xl uppercase mb-3">
                    {d.title}
                  </h4>
                  <p className="serif text-sm leading-relaxed">{d.body}</p>
                </div>
              </AnimatedContent>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3">
          <BigStat value={3000} suffix="+" caption="ngày kháng chiến" />
          <BigStat value={9} caption="năm trường kỳ" />
          <BigStat value={1} suffix=" dân tộc" caption="thống nhất ý chí" />
          <BigStat value={0} caption="đầu hàng" />
        </div>
      </div>
    </section>
  );
}

function BigStat({
  value,
  caption,
  suffix = "",
}: {
  value: number;
  caption: string;
  suffix?: string;
}) {
  return (
    <div className="border border-cream/20 p-4 bg-ink/60 backdrop-blur-sm">
      <div className="font-headline text-3xl md:text-4xl text-flagYellow leading-none">
        <CountUp to={value} duration={2.4} separator="," />
        {suffix}
      </div>
      <div className="mt-2 font-mono text-[9px] uppercase tracking-[0.25em] text-cream/80">
        {caption}
      </div>
    </div>
  );
}
