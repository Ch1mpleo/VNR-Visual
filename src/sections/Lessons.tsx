import SectionHeader from "@/components/ui/SectionHeader";
import CountUp from "@/components/CountUp";
import AnimatedContent from "@/components/AnimatedContent";
import RotatingText from "@/components/RotatingText";
import StampTag from "@/components/ui/StampTag";
import CardSwap, { Card } from "@/components/CardSwap";
import PixelCard from "@/components/PixelCard";
import HistoricPhoto from "@/components/ui/HistoricPhoto";

const LESSONS = [
  {
    no: "I",
    title: "SỰ TỈNH TÁO",
    vi: "Xác định ưu tiên",
    body: 'Giải quyết dứt điểm "giặc đói, giặc dốt" trước khi đánh giặc ngoại xâm. Trong deadline hôm nay: fix lỗi ngắn hạn không được bỏ quên gốc rễ.',
    quote: "Thấy rõ đâu là gốc, đâu là ngọn.",
  },
  {
    no: "II",
    title: "SỰ LINH HOẠT",
    vi: "Dĩ bất biến, ứng vạn biến",
    body: "Mục tiêu độc lập không đổi — phương pháp phải đổi theo tình thế. Hôm nay là 'dĩ bất biến' về sứ mệnh, 'ứng vạn biến' về công nghệ.",
    quote: "Mục tiêu bất biến. Phương pháp vạn biến.",
  },
  {
    no: "III",
    title: "SỰ TÍCH LŨY",
    vi: "Lấy ngắn nuôi dài",
    body: "1945–1946 bồi dưỡng nội lực. 1954 gặt hái Điện Biên Phủ. Học hành và sự nghiệp: từng dự án nhỏ là gạch cho 'Điện Biên' cá nhân sau này.",
    quote: "Ngắn là hạt — dài là rừng.",
  },
  {
    no: "IV",
    title: "SỰ KIÊN TRÌ",
    vi: "Tư duy trường kỳ",
    body: "Chín năm. Không giàu xổi. Thắng từng bước bền vững. Trong công việc, đừng sợ đường dài — sợ mất phương hướng giữa đường dài.",
    quote: "Không giàu xổi. Thắng từng bước.",
  },
];

export default function Lessons() {
  return (
    <section
      id="lessons"
      className="relative py-24 md:py-32 bg-bone grain overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeader
          phase="Phần IV"
          eyebrow="Vận dụng hiện đại — Liên hệ thực tiễn"
          title="BỐN BÀI HỌC XƯƠNG MÁU"
          tagline="Từ chiến khu đến phòng họp hội đồng quản trị — bốn nguyên lý kháng chiến vẫn vận hành trong học tập, sự nghiệp và quản trị doanh nghiệp."
        />

        <div className="mt-12 flex flex-wrap items-center gap-4 font-headline uppercase text-[clamp(1.25rem,3.5vw,2.75rem)] leading-tight">
          <span className="text-ink">Hôm nay ta đánh</span>
          <RotatingText
            texts={["deadline", "burnout", "trì trệ", "tự mãn", "sợ hãi"]}
            mainClassName="inline-flex overflow-hidden bg-blood text-cream px-4 py-1"
            staggerFrom="last"
            staggerDuration={0.025}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            transition={{ type: "spring", damping: 28, stiffness: 380 }}
            rotationInterval={2000}
          />
          <span className="text-ink">— bằng tinh thần của 1954.</span>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {LESSONS.map((l, i) => (
            <AnimatedContent key={l.no} distance={60} delay={i * 0.08}>
              <article
                className={`group relative p-7 md:p-8 h-full border-4 ${
                  i % 2 === 0
                    ? "bg-cream border-ink"
                    : "bg-ink text-cream border-blood"
                } shadow-[8px_8px_0_${i % 2 === 0 ? "#D32F2F" : "#D32F2F"}]`}
                style={{
                  boxShadow: `8px 8px 0 ${i % 2 === 0 ? "#D32F2F" : "#D32F2F"}`,
                }}
              >
                <header className="flex items-start justify-between mb-5">
                  <span
                    className={`font-headline text-6xl md:text-7xl leading-none ${
                      i % 2 === 0 ? "text-blood" : "text-flagYellow"
                    }`}
                  >
                    {l.no}
                  </span>
                  <StampTag
                    tone={i % 2 === 0 ? "ink" : "cream"}
                    rotate={2}
                    className="text-[10px]"
                  >
                    Bài học {l.no}
                  </StampTag>
                </header>

                <h3 className="headline text-2xl md:text-3xl uppercase leading-tight mb-2">
                  {l.title}
                </h3>
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] opacity-70 mb-5">
                  — {l.vi}
                </p>
                <p className="serif text-base md:text-lg leading-relaxed mb-6">
                  {l.body}
                </p>
                <blockquote
                  className={`serif italic border-l-4 pl-4 text-sm ${
                    i % 2 === 0
                      ? "border-blood text-ink/80"
                      : "border-flagYellow text-cream/85"
                  }`}
                >
                  {l.quote}
                </blockquote>
              </article>
            </AnimatedContent>
          ))}
        </div>

        {/*
          ══════════════════════════════════════════════════════════════════
          📷 LESSONS SECTION — HIGH-IMPACT PHOTO SLOT
          Place a modern photo that bridges history and today: FPT campus,
          Vietnamese students/professionals, or a crowd of Vietnamese people
          celebrating (e.g. the user's flag-waving nighttime photo).

          → Change src="" below to your image URL.
          ══════════════════════════════════════════════════════════════════
        */}
        <div className="mt-16">
          <HistoricPhoto
            src=""
            alt="Thế hệ Việt Nam hôm nay — tiếp nối tinh thần 1954"
            caption="Thế hệ kế tiếp · Tinh thần trường kỳ sống mãi trong lòng dân tộc"
            credit="Ảnh tư liệu hiện đại"
            aspect="wide"
            colorize={false}
          />
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-6">
            <StampTag tone="red">Case Study · FPT 2025</StampTag>
            <h3 className="mt-6 headline text-[clamp(2rem,5vw,3.5rem)] uppercase leading-tight text-ink">
              Từ “hũ gạo cứu đói” đến{" "}
              <span className="text-blood">
                <CountUp to={70_000} duration={2.5} separator="," />
              </span>{" "}
              tỷ VND
            </h3>
            <p className="serif mt-5 text-lg text-ink/85 leading-relaxed max-w-xl">
              Doanh thu năm 2025 của tập đoàn FPT là minh chứng sống động cho
              nguyên lý <em>“lấy ngắn nuôi dài”</em> — dòng tiền ngắn hạn từ
              dịch vụ CNTT nuôi các khoản đầu tư dài hạn vào AI, Cloud và bán
              dẫn. Không “giàu xổi”. Không nản chí. Từng bước bền vững.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <Pill value={70000} suffix="B" label="doanh thu 2025" />
              <Pill value={37} label="năm thành lập" />
              <Pill value={82000} label="nhân sự toàn cầu" />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#hero"
                className="bg-ink text-cream px-5 py-2.5 font-headline uppercase text-sm tracking-wide shadow-[3px_3px_0_#D32F2F] hover:-translate-y-0.5 transition-transform"
              >
                ↑ Về đầu trang
              </a>
              <a
                href="#victory"
                className="border-2 border-ink px-5 py-2.5 font-headline uppercase text-sm tracking-wide hover:bg-ink hover:text-cream transition-colors"
              >
                Xem lại Điện Biên
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative min-h-[28rem]">
            <div
              className="relative h-[28rem] md:h-[30rem] pr-10"
              style={{ perspective: "900px" }}
            >
              <CardSwap
                cardDistance={36}
                verticalDistance={48}
                delay={3400}
                pauseOnHover={true}
                width={380}
                height={260}
              >
                <Card className="!bg-cream !text-ink !border-4 !border-ink !rounded-none overflow-hidden">
                  <div className="h-full p-6 flex flex-col">
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-70">
                      Trong học tập
                    </span>
                    <h4 className="headline text-2xl mt-2 uppercase leading-tight">
                      Không học đối phó
                    </h4>
                    <p className="serif mt-3 text-sm leading-relaxed flex-1">
                      Tránh deadline-driven. Hướng tới{" "}
                      <strong>tích luỹ năng lực</strong> như cách Bình dân học
                      vụ xoá mù chữ — từng con chữ, từng bài học.
                    </p>
                  </div>
                </Card>
                <Card className="!bg-ink !text-cream !border-4 !border-blood !rounded-none overflow-hidden">
                  <div className="h-full p-6 flex flex-col">
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-70">
                      Trong công việc
                    </span>
                    <h4 className="headline text-2xl mt-2 uppercase text-flagYellow leading-tight">
                      Fix & improve
                    </h4>
                    <p className="serif mt-3 text-sm leading-relaxed flex-1 text-cream/90">
                      Dập lỗi hệ thống (ngắn hạn) + cải tiến quy trình (dài
                      hạn). Hai việc song song — như vừa chống giặc đói vừa
                      chuẩn bị kháng chiến.
                    </p>
                  </div>
                </Card>
                <Card className="!bg-blood !text-cream !border-4 !border-ink !rounded-none overflow-hidden">
                  <div className="h-full p-6 flex flex-col">
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-80">
                      Trong quản trị
                    </span>
                    <h4 className="headline text-2xl mt-2 uppercase leading-tight">
                      Ngắn nuôi dài
                    </h4>
                    <p className="serif mt-3 text-sm leading-relaxed flex-1 text-cream/95">
                      FPT: dịch vụ CNTT nuôi AI, Cloud, bán dẫn. Lời dạy 1946
                      vẫn còn nguyên giá trị — đừng cắt vốn cho tương lai để
                      sống qua quý này.
                    </p>
                  </div>
                </Card>
              </CardSwap>
            </div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-5">
          <PixelCard variant="pink" className="!rounded-none !bg-cream !border-2 !border-ink !aspect-auto h-60">
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/70">
                Công cụ hỗ trợ
              </span>
              <h4 className="mt-2 headline text-2xl uppercase text-ink">
                AI có đạo đức
              </h4>
              <p className="serif text-sm text-ink/80 mt-2">
                ChatGPT · Gemini · NotebookLM — dùng để sáng tạo, không để đối
                phó.
              </p>
            </div>
          </PixelCard>

          <PixelCard variant="yellow" className="!rounded-none !bg-ink !border-2 !border-blood !aspect-auto h-60">
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/70">
                Nguồn kiểm chứng
              </span>
              <h4 className="mt-2 headline text-2xl uppercase text-flagYellow">
                Liêm chính học thuật
              </h4>
              <p className="serif text-sm text-cream/85 mt-2">
                Giáo trình Lịch sử Đảng · Báo cáo thường niên FPT 2025.
              </p>
            </div>
          </PixelCard>

          <PixelCard variant="blue" className="!rounded-none !bg-blood !border-2 !border-ink !aspect-auto h-60">
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/80">
                Giá trị sáng tạo
              </span>
              <h4 className="mt-2 headline text-2xl uppercase text-cream">
                Lịch sử = mô hình quản trị
              </h4>
              <p className="serif text-sm text-cream/90 mt-2">
                Chuyển hoá lịch sử thành khung tư duy quản trị bản thân hiện
                đại.
              </p>
            </div>
          </PixelCard>
        </div>
      </div>
    </section>
  );
}

function Pill({
  value,
  label,
  suffix = "",
}: {
  value: number;
  label: string;
  suffix?: string;
}) {
  return (
    <div className="bg-cream border-2 border-ink p-3 shadow-[4px_4px_0_#1A1A1A]">
      <div className="font-headline text-2xl md:text-3xl text-ink leading-none">
        <CountUp to={value} separator="," duration={2.2} />
        {suffix}
      </div>
      <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.25em] text-ink/70">
        {label}
      </div>
    </div>
  );
}
