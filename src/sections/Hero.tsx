import SplitText from "@/components/SplitText";
import RotatingText from "@/components/RotatingText";
import Dither from "@/components/Dither";
import StampTag from "@/components/ui/StampTag";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] overflow-hidden bg-cream grain"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-multiply">
        <Dither
          waveColor={[0.83, 0.18, 0.18]}
          waveSpeed={0.012}
          waveFrequency={2.4}
          waveAmplitude={0.28}
          colorNum={3}
          pixelSize={3}
          enableMouseInteraction={true}
          mouseRadius={0.7}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-10 pt-28 md:pt-36 pb-16">
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <div className="col-span-12 md:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <StampTag tone="red" rotate={-2}>
                Bảo tàng Kỹ thuật số
              </StampTag>
              <span className="font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase text-ink/70">
                VNR202 · Lịch sử Đảng
              </span>
            </div>

            <div className="relative">
              <SplitText
                tag="h1"
                text="NƯỚC VIỆT NAM"
                textAlign="left"
                className="headline block text-[clamp(3rem,12vw,10rem)] text-ink"
                delay={45}
                duration={1.1}
                from={{ opacity: 0, y: 100, rotate: -3 }}
                to={{ opacity: 1, y: 0, rotate: 0 }}
              />
              <div className="relative inline-flex items-baseline gap-4 mt-1 md:mt-2">
                <span className="headline text-[clamp(3rem,12vw,10rem)] text-blood">
                  LÀ MỘT
                </span>
                <span className="relative -top-2 md:-top-4 h-2 md:h-3 w-24 md:w-40 bg-ink" />
              </div>
            </div>

            <SplitText
              tag="h2"
              text="DÂN TỘC VIỆT NAM LÀ MỘT"
              textAlign="left"
              className="headline text-[clamp(1.5rem,4vw,3rem)] text-ink"
              delay={20}
              duration={0.8}
              splitType="words"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
            />

            <p className="serif text-lg md:text-xl text-ink/80 max-w-xl leading-relaxed italic border-l-4 border-blood pl-5">
              “Sông có thể cạn, núi có thể mòn, song chân lý ấy không bao giờ
              thay đổi.”
              <span className="block not-italic font-mono text-xs md:text-sm tracking-widest uppercase text-ink/60 mt-2">
                — Hồ Chí Minh
              </span>
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-4">
              <a
                href="#context"
                className="group bg-ink text-cream px-6 py-3 font-headline uppercase tracking-wide text-sm shadow-[4px_4px_0_#D32F2F] hover:-translate-y-0.5 transition-transform"
              >
                Bước vào kho lưu trữ →
              </a>
              <a
                href="#lessons"
                className="group border-2 border-ink px-6 py-3 font-headline uppercase tracking-wide text-sm hover:bg-ink hover:text-cream transition-colors"
              >
                4 Bài học
              </a>
            </div>
          </div>

          <div className="col-span-12 md:col-span-5 flex flex-col gap-4 md:pl-4">
            <div className="relative bg-ink text-cream p-6 md:p-8 shadow-[8px_8px_0_#D32F2F]">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-70">
                Khẩu hiệu 03/09/1945 — Ba nhiệm vụ cấp bách
              </div>
              <div className="mt-5 font-headline text-3xl md:text-4xl leading-tight uppercase">
                Diệt giặc{" "}
                <RotatingText
                  texts={["đói", "dốt", "ngoại xâm"]}
                  mainClassName="inline-flex overflow-hidden bg-blood text-cream px-3 align-baseline"
                  staggerFrom="last"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  transition={{ type: "spring", damping: 30, stiffness: 380 }}
                  rotationInterval={2200}
                />
              </div>
              <div className="mt-5 rule-red" />
              <p className="serif italic mt-5 text-cream/85 text-sm leading-relaxed">
                Chỉ ba mặt trận. Một vận mệnh. Chính phủ lâm thời triệu tập
                toàn dân tộc vào cuộc trường chinh chưa từng có.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Stat value="1945" caption="Cách mạng Tháng Tám" />
              <Stat value="1954" caption="Giải phóng Miền Bắc" />
              <Stat value="09" caption="năm kháng chiến" />
              <Stat value="56" caption="ngày đêm Điện Biên" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-0 right-0">
        <div className="mx-auto max-w-7xl px-5 md:px-10 flex items-end justify-between gap-6">
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-ink/60">
            <span className="h-2 w-2 bg-blood animate-pulse" />
            Ngàn cân treo sợi tóc
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/60">
            ↓ cuộn xuống
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, caption }: { value: string; caption: string }) {
  return (
    <div className="bg-bone border-2 border-ink p-3 md:p-4">
      <div className="font-headline text-3xl md:text-4xl leading-none text-ink">
        {value}
      </div>
      <div className="font-mono text-[9px] uppercase tracking-[0.25em] mt-2 text-ink/70">
        {caption}
      </div>
    </div>
  );
}
