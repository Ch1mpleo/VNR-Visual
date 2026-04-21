import StampTag from "@/components/ui/StampTag";

export default function Footer() {
  return (
    <footer className="relative bg-ink text-cream py-16 border-t-4 border-blood overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-6 flex flex-col gap-5">
          <StampTag tone="red">Colophon</StampTag>
          <h3 className="headline uppercase text-4xl md:text-5xl leading-tight">
            NƯỚC VIỆT NAM LÀ MỘT
          </h3>
          <p className="serif text-cream/80 max-w-xl italic leading-relaxed">
            Bảo tàng Kỹ thuật số Tương tác — biên khảo lịch sử Cách mạng Việt
            Nam 1945–1954 theo phong cách Revolutionary Constructivist. Chạy
            trên React, TailwindCSS &amp; ReactBits.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {[
              "React 19",
              "TailwindCSS 3",
              "ReactBits",
              "GSAP",
              "Motion",
              "OGL",
              "Three",
            ].map((t) => (
              <span
                key={t}
                className="font-mono text-[10px] uppercase tracking-[0.25em] border border-cream/40 px-2 py-1"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="md:col-span-3 flex flex-col gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/60">
            Chương mục
          </span>
          {[
            { id: "hero", t: "Mở đầu" },
            { id: "context", t: "Bối cảnh" },
            { id: "struggle", t: "Ba giặc (45–46)" },
            { id: "resistance", t: "Kháng chiến (46–50)" },
            { id: "victory", t: "Điện Biên Phủ" },
            { id: "lessons", t: "Bốn bài học" },
          ].map((x) => (
            <a
              key={x.id}
              href={`#${x.id}`}
              className="font-headline uppercase text-sm text-cream/90 hover:text-blood transition-colors"
            >
              → {x.t}
            </a>
          ))}
        </div>

        <div className="md:col-span-3 flex flex-col gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/60">
            Nguồn &amp; Kiểm chứng
          </span>
          <p className="serif text-sm text-cream/85 leading-relaxed">
            Giáo trình Lịch sử Đảng Cộng sản Việt Nam. Báo cáo thường niên FPT
            2025. Tư liệu ảnh: tư liệu công cộng (Public Domain).
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-cream/60 mt-2">
            VNR202 · Học kỳ 9 · 2026
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-10 mt-12 pt-6 border-t border-cream/20 flex flex-wrap items-center justify-between gap-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/60">
          © 2026 · Interactive Archive. Made with ★ and tinh thần trường kỳ.
        </p>
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 bg-blood animate-pulse" />
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-cream/70">
            Dĩ bất biến · Ứng vạn biến
          </span>
        </div>
      </div>
    </footer>
  );
}
