import Image from "next/image";
import {
  ChevronDown,
  Droplet,
  Heart,
  Search,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { ScrollEffects } from "@/components/scroll-effects";

const SHOPEE_URL = "https://s.shopee.co.th/4qEDJVMei2";

const PRICE = "฿299";
const NET_WEIGHT = "4.5g";

const SHADES = [
  { id: "101", name: "Pomelo" },
  { id: "102", name: "Teddy" },
  { id: "103", name: "Misty" },
  { id: "104", name: "Brick" },
  { id: "105", name: "Rosewood" },
];

const HERO_INGREDIENTS = [
  {
    name: "Squalane",
    points: ["Deeply moisturizes", "Softens lips for a fuller look"],
  },
  {
    name: "Sodium Hyaluronate (Hyaluronic Acid)",
    points: ["Locks in moisture", "Helps smooth lip texture"],
  },
  {
    name: "Simmondsia Chinensis (Jojoba) Seed Oil",
    points: ["Nourishes lips", "Helps reduce dryness"],
  },
  {
    name: "Vitis Vinifera (Grape) Seed Oil",
    points: ["Rich in antioxidants", "Helps lips look healthy"],
  },
  {
    name: "Tocopheryl Acetate (Vitamin E)",
    points: ["Nourishes and protects lips from dryness", "An antioxidant"],
  },
];

function ShadeSwatch({ shade }: { shade: (typeof SHADES)[number] }) {
  return (
    <a
      href={SHOPEE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 overflow-hidden shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:z-10">
        <Image
          src={`/images/swatch${shade.id}.PNG`}
          alt={`${shade.name} swatch`}
          fill
          sizes="(max-width: 768px) 192px, 256px"
          quality={90}
          className="object-cover"
        />
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <>
      <ScrollEffects />

      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 nav-glass transition-transform duration-500">
        <div className="flex justify-between items-center w-full px-margin-desktop py-6 max-w-[1440px] mx-auto">
          <div className="font-headline-lg text-headline-lg tracking-tighter text-on-surface">
            theoo
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              data-nav-link
              className="font-label-md text-label-md text-on-surface/80 hover:text-on-surface transition-colors pb-1 border-b border-transparent"
              href="#product"
            >
              Product
            </a>
            <a
              data-nav-link
              className="font-label-md text-label-md text-on-surface/80 hover:text-on-surface transition-colors pb-1 border-b border-transparent"
              href="#philosophy"
            >
              Philosophy
            </a>
            <a
              data-nav-link
              className="font-label-md text-label-md text-on-surface/80 hover:text-on-surface transition-colors pb-1 border-b border-transparent"
              href="#ingredients"
            >
              Ingredients
            </a>
            <a
              data-nav-link
              className="font-label-md text-label-md text-on-surface/80 hover:text-on-surface transition-colors pb-1 border-b border-transparent"
              href="#collection"
            >
              Collection
            </a>
            <a
              data-nav-link
              className="font-label-md text-label-md text-on-surface/80 hover:text-on-surface transition-colors pb-1 border-b border-transparent"
              href="#shades"
            >
              Shades
            </a>
            <a
              data-nav-link
              className="font-label-md text-label-md text-on-surface/80 hover:text-on-surface transition-colors pb-1 border-b border-transparent"
              href="#shop"
            >
              Shop
            </a>
          </div>
          <div className="flex items-center gap-6">
            <button className="hover:opacity-70 transition-opacity duration-300">
              <Search className="w-6 h-6" />
            </button>
            <a
              href={SHOPEE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity duration-300"
            >
              <ShoppingBag className="w-6 h-6" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header
        id="product"
        className="scroll-mt-24 relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDw9yVpKU8lzkTq3DBgTOjqvSY8noPzkYf2bdPx6MbyzJJSGpmdfbysdxyPNwQZ7NVCGPCLEzgkbVf8AEEOU_SYuJfSPM9dqIDxZl2b66My1MTkF1Lk9s249Ts3f8U2hmur3nAmijE3FapPxhRpvqjKvsLRYo1OgdI6o7Y6vl025GTQ319M8QrB6ASCfz82qfiZ35kUb5nV4WEPOgu4nbqECT2vyma2DjjUmROuCabcnX9THpvsYASAW7yR37iBY__GoA=s0"
            alt="theoo Mood Lip Gloss"
            fill
            priority
            sizes="100vw"
            quality={90}
            className="object-cover hero-zoom"
          />
          <div className="absolute inset-0 bg-black/5" />
        </div>
        <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop max-w-4xl">
          <h1 className="font-headline-xl text-headline-xl mb-4 uppercase tracking-widest drop-shadow-sm text-white">
            The Mood Lip Gloss
          </h1>
          <p className="font-body-lg text-body-lg text-white mb-8 max-w-lg mx-auto tracking-wide font-medium">
            Nourishment and color, together in one swipe.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href={SHOPEE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-primary text-white font-label-md text-label-md tracking-widest uppercase hover:bg-dark-accent transition-all duration-500 shadow-xl"
            >
              Explore Shades
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary animate-bounce">
          <ChevronDown className="w-6 h-6" />
        </div>
      </header>

      {/* Philosophy & Narrative Section */}
      <section
        id="philosophy"
        className="scroll-mt-24 py-stack-lg px-margin-mobile md:px-margin-desktop bg-surface-container-low"
      >
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-5 editorial-reveal">
            <h2 className="font-headline-lg text-headline-lg mb-stack-sm text-dark-accent">
              Pure care by nature
            </h2>
            <div className="w-16 h-[2px] bg-primary mb-stack-md" />
            <div className="space-y-4">
              <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
                At theoo, we believe that beauty should be a grounding
                experience. Our commitment to clean beauty means every formula
                is stripped of the unnecessary and enriched with only what
                serves your skin&apos;s health.
              </p>
              <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
                We source the world&apos;s finest cold-pressed botanicals,
                ensuring each application delivers a potent dose of
                nature&rsquo;s restorative power. No parabens, no silicones—just
                pure, intentional care that respects both your biology and our
                planet.
              </p>
            </div>
            <button className="mt-8 font-label-md text-label-md uppercase tracking-widest border-b-2 border-primary-container pb-1 hover:border-primary transition-all">
              Our Transparency Report
            </button>
          </div>
          <div
            className="md:col-span-7 grid grid-cols-2 gap-4 editorial-reveal"
            style={{ transitionDelay: "200ms" }}
          >
            <div className="relative aspect-[4/5] shadow-sm overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzDIq2wUIEk6rOQt-mcnt9M13icpTu2wn4DnXsO3uJQkQONLOk951S6wecI2sK10Y8JWG9Lxd22NzLGABEIEU4s-0u5J_cerNZf7N8r8Y6umsxQfh_7IWhHbgeNzZGBm3wLvsz1cfAQ8XkvkhKgpRC0J0__DZyoVYt55JwjWYDFNDHiLsY4iT5eJj3PgVgR1RQg8xepZEyFduEk9YEz2AIdsED31YjpCjEKSGSm22vWkQqTcItckVyM19b8F9rhuc8PA=s0"
                alt="theoo skincare texture"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                quality={90}
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/5] shadow-sm overflow-hidden mt-12">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_vCc8DRbmrnhhXroxiPOdPd4s55WyEj4yXl3L2dFZt8bwwKN5cosE9QOuxpfyX-T_JD2cQO-feyQbkFix3EtegbmwFtXme0T64UADpCwFXMKyCoptBXGxb8i71qYzzZ1JEKi9j0rJEpVrDWdSZz-pwa2LSfs9hGWyvcADjYT7Dzw8f9KAp07MCgrT_3XUovJJbieKe2WC1aVzHwV5uvJ18v6b1qQEElIfU-55c4RbI-dWztDPVd2x-qC8denb-PlUng=s0"
                alt="theoo product detail"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                quality={90}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16 editorial-reveal">
            <h2 className="font-headline-lg text-headline-lg text-dark-accent mb-2">
              The Difference is Felt
            </h2>
            <p className="font-label-md text-label-md text-primary tracking-widest uppercase">
              Care and color, in one swipe
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center editorial-reveal">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-6 text-primary">
                <Droplet className="w-7 h-7" />
              </div>
              <h3 className="font-headline-md text-headline-md mb-3">
                Creamy &amp; Comfortable
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant max-w-[280px]">
                A rich, moisturizing gloss that glides on smoothly and feels
                comfortable on the lips — no stickiness.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-6 text-primary">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="font-headline-md text-headline-md mb-3">
                Buildable Color Payoff
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant max-w-[280px]">
                Delivers noticeable color that complements your natural lip tone
                — no lipstick needed underneath.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-6 text-primary">
                <Heart className="w-7 h-7" />
              </div>
              <h3 className="font-headline-md text-headline-md mb-3">
                Plump, Healthy Glow
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant max-w-[280px]">
                Nourishes and hydrates for fuller-looking, healthy lips with a
                glossy, radiant finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredient Spotlight */}
      <section
        id="ingredients"
        className="scroll-mt-24 py-stack-lg px-margin-mobile md:px-margin-desktop bg-surface-container-low"
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16 editorial-reveal">
            <span className="font-label-md text-label-md text-primary uppercase tracking-[0.2em] block mb-2">
              Ingredient Spotlight
            </span>
            <h2 className="font-headline-lg text-headline-lg text-dark-accent">
              Hero Ingredients
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 editorial-reveal">
            <div className="relative aspect-square bg-surface-container overflow-hidden sm:col-span-2 lg:col-span-1">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZKNHyyB6wnA5Qr8CEv6IMetuwQI9mGberJ_lSqCftSUYgkiKOXIhC7pzq0-XkVJiLE4asOt3bkRODd6wZGYfQzmRwyLIB3XJQT5NXJ-LNvZ14i2lXHyurh_n89E5Z5vE4XaVdUy5DytLzRia4fA_1kc_AbCO2EB230ZjLoDp2MUADuN4eZFIwbosVvS9UJ5NCrvnUMH_XElWgfGwAHSJCqXRq-XWtxN8YuGvTIywtqd-kf41rwzqYWGgbCs687VXAiQ=s0"
                alt="Botanical ingredients"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                quality={90}
                className="object-cover"
              />
            </div>
            {HERO_INGREDIENTS.map((ingredient, i) => (
              <div
                key={ingredient.name}
                className="bg-surface-container-lowest p-6 md:p-8 flex flex-col"
              >
                <span className="font-headline-lg text-headline-lg text-surface-container-high text-4xl font-bold mb-4">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="font-headline-md text-headline-md uppercase mb-3">
                  {ingredient.name}
                </h4>
                <ul className="list-disc list-inside space-y-1 mt-auto">
                  {ingredient.points.map((point) => (
                    <li
                      key={point}
                      className="font-body-sm text-body-sm text-on-surface-variant"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Collection Grid */}
      <section
        id="collection"
        className="scroll-mt-24 py-stack-lg px-margin-mobile md:px-margin-desktop bg-surface"
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="flex justify-between items-end mb-12 editorial-reveal">
            <div>
              <span className="font-label-md text-label-md text-primary uppercase tracking-[0.2em] block mb-2">
                The First Collection
              </span>
              <h2 className="font-headline-lg text-headline-lg text-dark-accent">
                The Mood Lip Gloss
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                5 shades · {NET_WEIGHT} · {PRICE}
              </p>
            </div>
            <a
              className="font-label-md text-label-md text-primary-container hover:text-primary transition-colors underline underline-offset-8"
              href={SHOPEE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Shop All
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-gutter">
            {SHADES.map((shade, i) => (
              <a
                key={shade.id}
                href={SHOPEE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group block editorial-reveal"
                style={{ transitionDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="relative aspect-[2/3] bg-surface-container overflow-hidden mb-4 transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={`/images/${shade.id}.png`}
                    alt={`Shade ${shade.id} - ${shade.name}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    quality={90}
                    className="object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <Image
                    src={`/images/swatch${shade.id}.PNG`}
                    alt={`${shade.name} swatch`}
                    fill
                    sizes="(max-width: 768px) 50vw, 20vw"
                    quality={90}
                    className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 font-label-md text-label-md shadow-sm">
                    {shade.id}
                  </div>
                </div>
                <h3 className="font-headline-md text-headline-md text-sm mb-1 uppercase tracking-wider">
                  {shade.name}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {PRICE}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Shades Palette */}
      <section
        id="shades"
        className="scroll-mt-24 py-stack-lg px-margin-mobile md:px-margin-desktop bg-surface-container-lowest overflow-hidden"
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16 editorial-reveal">
            <span className="font-label-md text-label-md text-primary uppercase tracking-[0.2em] block mb-2">
              Find Your Mood
            </span>
            <h2 className="font-headline-lg text-headline-lg text-dark-accent">
              Shades
            </h2>
          </div>
          <div className="flex flex-col items-center gap-y-8 editorial-reveal">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-8">
              {SHADES.slice(0, 3).map((shade) => (
                <ShadeSwatch key={shade.id} shade={shade} />
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-8">
              {SHADES.slice(3, 5).map((shade) => (
                <ShadeSwatch key={shade.id} shade={shade} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ritual of Application Section */}
      <section
        id="shop"
        className="scroll-mt-24 py-stack-lg px-margin-mobile md:px-margin-desktop bg-surface-container-low overflow-hidden"
      >
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="editorial-reveal">
            <h2 className="font-headline-lg text-headline-lg mb-4 text-dark-accent">
              Ritual of Application
            </h2>
            <p className="font-label-md text-label-md text-primary uppercase tracking-widest mb-8">
              Expert Pro Tips
            </p>
            <div className="space-y-10">
              <div className="flex gap-6">
                <span className="font-headline-lg text-surface-container-high text-6xl leading-none font-bold">
                  01
                </span>
                <div>
                  <h4 className="font-headline-md text-headline-md mb-2">
                    The Base
                  </h4>
                  <p className="font-body-md text-on-surface-variant">
                    Apply to clean, dry lips. For a softer look, blot your
                    natural lip color with a tiny amount of concealer before
                    application.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="font-headline-lg text-surface-container-high text-6xl leading-none font-bold">
                  02
                </span>
                <div>
                  <h4 className="font-headline-md text-headline-md mb-2">
                    The Technique
                  </h4>
                  <p className="font-body-md text-on-surface-variant">
                    Start from the cupid&apos;s bow and sweep outwards. The
                    custom doe-foot applicator is designed to hug your lip
                    contours for precision in one swipe.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="font-headline-lg text-surface-container-high text-6xl leading-none font-bold">
                  03
                </span>
                <div>
                  <h4 className="font-headline-md text-headline-md mb-2">
                    The Layering
                  </h4>
                  <p className="font-body-md text-on-surface-variant">
                    Wear alone for a healthy, high-shine glow, or layer over a
                    matte lip liner for a defined, editorial finish.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="editorial-reveal lg:pl-12">
            <div className="relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2MXtiZh7AP5LEgUh8wh8cn21YUoR4Fd5PjeBluaOVZ80F-SUhQTDr9bn05tY4iPsOToGAkTFO2T219WXKWEpTtTsrLSRva109tRNYpzZoCCns7wNTCMZxe2Dcjh3ktkvSZAaCZgRfYPd4wbx05lwnDu9BqL0injKdpX53oZzs_VW32vunrlYUBc8Heh6K9or9FQb0TixT3P2npmltZhTgv_KsXMphQw0Q_5-m9V-zupfxrCg5_srCmX5pXDtRP8X6mA=s0"
                alt="Lip gloss swatches"
                width={800}
                height={1000}
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={90}
                className="w-full h-auto shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary-container/20 -z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Community & Ritual */}
      <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-12 editorial-reveal">
            <h2 className="font-headline-lg text-headline-lg text-dark-accent mb-2">
              Community &amp; Ritual
            </h2>
            <p className="font-label-md text-label-md text-primary tracking-widest uppercase">
              Shared moments of minimalism
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter editorial-reveal">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLZDPDS0IWSZ3lFsmjdxMWVcLDXOflXbDnQt5FeoQfu6eaA_dYLp4GpQ67EazNd1HbLec4DgcBKd24OLvF0yuyliKl8clfUZkBc1cZxiAjpRDac6ElQM21fg8D5FBxT8jmdvbWQUNieJDb-lP2f5N40w0mEKnYHsyL5rc122uzgNO9tSbyDCG9pA6fL1ClErTJaOoCByiIfdFZGofIojQmqrpcIzwFZ7e_jEJ0uxqdyHIb6xBjPW97nvrgkFmgBupRhg=s0"
                alt="Lifestyle 1"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                quality={90}
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden mt-8 md:mt-16">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuATR20nNljYF1Vgl7yUJoDDHBhWUqnvO78GclrBLqCcJn0cnitQPWMKkYNC4J9IMjbZ58O5U7sABvvFAHuDCJrMCkW5kj48wOv-shXGYXGEgFdLSNNBbSP8DZEr_knWoYVJs7fvm7amas3cbvWamFNWbwELpq9TJ5KVNxDM_tgEW-MgdDtJ0IA9-mi8ralzjH0sMKTsLiYUh-2AWdgT9_1gs2p8t1Dr2TbQq8FA73q-fi_COc5cBQWzcb99U5rf-PCSng=s0"
                alt="Lifestyle 2"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                quality={90}
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2MXtiZh7AP5LEgUh8wh8cn21YUoR4Fd5PjeBluaOVZ80F-SUhQTDr9bn05tY4iPsOToGAkTFO2T219WXKWEpTtTsrLSRva109tRNYpzZoCCns7wNTCMZxe2Dcjh3ktkvSZAaCZgRfYPd4wbx05lwnDu9BqL0injKdpX53oZzs_VW32vunrlYUBc8Heh6K9or9FQb0TixT3P2npmltZhTgv_KsXMphQw0Q_5-m9V-zupfxrCg5_srCmX5pXDtRP8X6mA=s0"
                alt="Lifestyle 3"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                quality={90}
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-dim pt-stack-lg pb-stack-md border-t border-outline-variant">
        <div className="max-w-[1440px] mx-auto px-margin-desktop flex flex-col md:flex-row justify-between items-start gap-stack-md">
          <div className="max-w-sm">
            <div className="font-headline-md text-headline-md text-primary mb-4">
              theoo
            </div>
            <p className="font-body-sm text-body-sm text-on-secondary-container">
              Effortless beauty, consciously crafted. We believe in simplicity
              that speaks volumes through quality.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-16">
            <div className="flex flex-col gap-3">
              <h5 className="font-label-md text-label-md text-dark-accent uppercase">
                Shop
              </h5>
              <a
                className="font-body-sm text-body-sm text-on-secondary-container hover:text-primary hover:underline underline-offset-4 transition-all"
                href={SHOPEE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Collections
              </a>
              <a
                className="font-body-sm text-body-sm text-on-secondary-container hover:text-primary hover:underline underline-offset-4 transition-all"
                href="#"
              >
                Ingredients
              </a>
              <a
                className="font-body-sm text-body-sm text-on-secondary-container hover:text-primary hover:underline underline-offset-4 transition-all"
                href="#"
              >
                Stockists
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <h5 className="font-label-md text-label-md text-dark-accent uppercase">
                Help
              </h5>
              <a
                className="font-body-sm text-body-sm text-on-secondary-container hover:text-primary hover:underline underline-offset-4 transition-all"
                href="#"
              >
                Shipping &amp; Returns
              </a>
              <a
                className="font-body-sm text-body-sm text-on-secondary-container hover:text-primary hover:underline underline-offset-4 transition-all"
                href="#"
              >
                Privacy Policy
              </a>
              <a
                className="font-body-sm text-body-sm text-on-secondary-container hover:text-primary hover:underline underline-offset-4 transition-all"
                href="#"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto px-margin-desktop mt-stack-lg pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-label-md text-label-md text-on-secondary-container">
            © 2026 theoo skincare. Effortless beauty, consciously crafted.
          </p>
          <div className="flex gap-6">
            <a
              className="font-label-md text-label-md text-on-secondary-container hover:text-primary transition-colors"
              href="#"
            >
              Instagram
            </a>
            <a
              className="font-label-md text-label-md text-on-secondary-container hover:text-primary transition-colors"
              href="#"
            >
              TikTok
            </a>
            <a
              className="font-label-md text-label-md text-on-secondary-container hover:text-primary transition-colors"
              href="#"
            >
              Pinterest
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
