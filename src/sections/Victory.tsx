import SectionHeader from "@/components/ui/SectionHeader";
import Aurora from "@/components/Aurora";
import CountUp from "@/components/CountUp";
import AnimatedContent from "@/components/AnimatedContent";
import StampTag from "@/components/ui/StampTag";
import ScrollFloat from "@/components/ScrollFloat";

const TIMELINE = [
  {
    date: "02 · 1951",
    title: "Đại hội II của Đảng",
    body: "Đảng ra hoạt động công khai với tên gọi Đảng Lao động Việt Nam. Xác định nhiệm vụ: đuổi Pháp - Mỹ, giành độc lập, 'người cày có ruộng'.",
  },
  {
    date: "1953",
    title: "Cải cách ruộng đất",
    body: "Bồi dưỡng sức dân — khẩu hiệu 'người cày có ruộng' được thực thi bước đầu, giải phóng năng lực sản xuất nông thôn.",
  },
  {
    date: "13 · 03 · 1954",
    title: "Mở màn Điện Biên Phủ",
    body: "Đại đoàn 312 nổ súng tấn công cứ điểm Him Lam. Kế hoạch Nava bắt đầu lung lay.",
  },
  {
    date: "07 · 05 · 1954",
    title: "Bắt sống De Castries",
    body: "Sau 56 ngày đêm 'khoét núi, ngủ hầm, mưa dầm, cơm vắt' — lá cờ 'Quyết chiến quyết thắng' tung bay trên nóc hầm chỉ huy Pháp.",
  },
  {
    date: "21 · 07 · 1954",
    title: "Ký Hiệp định Genève",
    body: "Pháp rút khỏi Đông Dương. Miền Bắc hoàn toàn giải phóng sau gần 100 năm đô hộ — bắt đầu hành trình thống nhất đất nước.",
  },
];

export default function Victory() {
  return (
    <section
      id="victory"
      className="relative py-24 md:py-32 bg-cream grain overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[45vh] opacity-70">
        <Aurora
          colorStops={["#D32F2F", "#FFCD00", "#D32F2F"]}
          amplitude={1.1}
          blend={0.55}
          speed={0.6}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeader
          phase="1951 — 1954"
          eyebrow="Đẩy mạnh kháng chiến đến thắng lợi"
          title="CHẤN ĐỘNG ĐỊA CẦU"
          tagline='"Chín năm làm một Điện Biên — Nên vành hoa đỏ, nên thiên sử vàng." — Tố Hữu'
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-blood text-cream p-7 md:p-9 shadow-[10px_10px_0_#1A1A1A] border-4 border-ink">
              <StampTag tone="cream" rotate={-2}>
                Điện Biên Phủ
              </StampTag>
              <div className="mt-6 font-headline text-[clamp(4rem,12vw,9rem)] leading-none text-cream">
                <CountUp to={56} duration={2.6} />
              </div>
              <div className="mt-2 font-mono text-xs uppercase tracking-[0.3em] text-cream/90">
                ngày đêm quyết chiến
              </div>

              <div className="mt-8 rule w-20 bg-cream" />

              <div className="mt-6 grid grid-cols-2 gap-4">
                <BigNum value={16_000} label="quân Pháp bị tiêu diệt / bắt" />
                <BigNum value={1} suffix=" lá cờ" label="Quyết chiến quyết thắng" />
                <BigNum value={62} label="máy bay bị phá huỷ" />
                <BigNum value={0} label="khả năng chuộc lỗi của Nava" />
              </div>

              <div className="mt-8 rule w-20 bg-cream" />
              <p className="serif italic mt-5 text-cream/90 text-sm leading-relaxed">
                “Một dân tộc Việt Nam nhỏ bé đã đánh bại cả một đế quốc thực
                dân lớn mạnh — và thức tỉnh toàn bộ phong trào giải phóng dân
                tộc thế giới.”
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <ol className="relative space-y-5 before:absolute before:left-4 md:before:left-5 before:top-3 before:bottom-3 before:w-[3px] before:bg-ink">
              {TIMELINE.map((t, i) => (
                <AnimatedContent key={t.date} distance={60} delay={i * 0.08}>
                  <li className="relative pl-14 md:pl-16">
                    <span className="absolute left-0 md:left-1 top-0 grid h-10 w-10 place-items-center bg-ink text-cream font-headline text-sm border-2 border-blood">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="group bg-bone border-2 border-ink p-5 md:p-6 shadow-[5px_5px_0_#1A1A1A] hover:-translate-y-1 transition-transform">
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                        <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] bg-ink text-cream px-2 py-1">
                          {t.date}
                        </span>
                        <span className="font-mono text-[10px] text-ink/60">
                          CHƯƠNG {String(i + 1).padStart(2, "0")} / {TIMELINE.length}
                        </span>
                      </div>
                      <h3 className="headline text-2xl md:text-[1.75rem] uppercase leading-tight text-ink">
                        {t.title}
                      </h3>
                      <p className="serif mt-3 leading-relaxed text-ink/90">
                        {t.body}
                      </p>
                    </div>
                  </li>
                </AnimatedContent>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-24 border-4 border-ink bg-ink text-cream p-8 md:p-12 shadow-[10px_10px_0_#D32F2F]">
          <div className="flex items-center gap-3 mb-5">
            <StampTag tone="red" rotate={-1}>
              Hiệp định Genève
            </StampTag>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-cream/70">
              21 · 07 · 1954
            </span>
          </div>
          <ScrollFloat
            containerClassName="!text-cream"
            textClassName="!text-cream"
          >
            Giải phóng hoàn toàn miền Bắc
          </ScrollFloat>
          <p className="serif text-cream/85 italic mt-6 max-w-3xl leading-relaxed">
            Sau gần 100 năm đô hộ, gần một thập kỷ kháng chiến trường kỳ, lá cờ
            đỏ sao vàng được kéo lên trên toàn bộ miền Bắc. Nhưng chân lý
            <span className="text-blood font-semibold">
              {" "}“Nước Việt Nam là một, dân tộc Việt Nam là một”{" "}
            </span>
            tiếp tục được tranh đấu cho tới ngày thống nhất hoàn toàn
            30/04/1975.
          </p>
        </div>
      </div>
    </section>
  );
}

function BigNum({
  value,
  suffix = "",
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  return (
    <div>
      <div className="font-headline text-3xl md:text-4xl text-flagYellow leading-none">
        <CountUp to={value} separator="," duration={2.4} />
        {suffix}
      </div>
      <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.25em] text-cream/85">
        {label}
      </div>
    </div>
  );
}
