import Image from "next/image";

export function HeroIllustration() {
  return (
    <div className="relative w-full max-w-[640px] mx-auto lg:ml-auto lg:mr-0">
      <Image
        src="/images/hero-illustration.png"
        alt="Two developers collaborating — one sketching ideas, the other coding on a laptop, surrounded by wireframes, sticky notes, code snippets, and creative tools"
        width={1200}
        height={850}
        className="w-full h-auto select-none"
        priority
        draggable={false}
      />
    </div>
  );
}
