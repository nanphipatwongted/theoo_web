import Image from "next/image";
import {
  ChevronDown,
  Droplet,
  Droplets,
  Heart,
  Leaf,
  Shield,
  ShoppingBag,
  Sparkles,
  Sun,
} from "lucide-react";
import { SiInstagram, SiShopee, SiTiktok } from "react-icons/si";
import { PageSearch } from "@/components/page-search";
import { ScrollEffects } from "@/components/scroll-effects";

const SHOPEE_URL = "https://s.shopee.co.th/4qEDJVMei2";

const CHANNELS = [
  {
    name: "Instagram",
    handle: "theoo_store.th",
    href: "https://www.instagram.com/theoo_store.th?igsh=OGUwNHZxZXFhcXB3&utm_source=qr",
    icon: SiInstagram,
  },
  {
    name: "Shopee",
    handle: "theoo_store.th",
    href: SHOPEE_URL,
    icon: SiShopee,
  },
  {
    name: "TikTok",
    handle: "theoo_store.th",
    href: "https://www.tiktok.com/@theoo_store.th",
    icon: SiTiktok,
  },
];

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
    icon: Droplet,
  },
  {
    name: "Sodium Hyaluronate (Hyaluronic Acid)",
    points: ["Locks in moisture", "Helps smooth lip texture"],
    icon: Droplets,
  },
  {
    name: "Simmondsia Chinensis (Jojoba) Seed Oil",
    points: ["Nourishes lips", "Helps reduce dryness"],
    icon: Leaf,
  },
  {
    name: "Vitis Vinifera (Grape) Seed Oil",
    points: ["Rich in antioxidants", "Helps lips look healthy"],
    icon: Shield,
  },
  {
    name: "Tocopheryl Acetate (Vitamin E)",
    points: ["Nourishes and protects lips from dryness", "An antioxidant"],
    icon: Sun,
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
      <p className="mt-3 text-center font-label-md text-label-md text-on-surface-variant">
        {shade.id}
      </p>
    </a>
  );
}

const PRODUCT_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "theoo The Mood Lip Gloss",
  image: ["https://theoo-web.vercel.app/images/19.jpg"],
  description:
    "A creamy, buildable-color lip gloss that nourishes and hydrates in one swipe. Available in 5 shades.",
  brand: { "@type": "Brand", name: "theoo" },
  offers: {
    "@type": "Offer",
    url: SHOPEE_URL,
    priceCurrency: "THB",
    price: "299",
    availability: "https://schema.org/InStock",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PRODUCT_JSON_LD) }}
      />
      <ScrollEffects />

      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 nav-glass transition-transform duration-500">
        <div className="flex justify-between items-center w-full px-margin-desktop py-6 max-w-[1440px] mx-auto">
          <div className="font-headline-lg text-headline-lg tracking-[-0.094em] text-on-surface">
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
              href="#buy"
            >
              Buy
            </a>
          </div>
          <div className="flex items-center gap-6">
            <PageSearch />
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
            src="/images/19.jpg"
            alt="theoo Mood Lip Gloss"
            fill
            priority
            sizes="100vw"
            quality={100}
            className="object-cover hero-zoom"
          />
          <div className="absolute inset-0 bg-black/5" />
        </div>
        <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop max-w-4xl">
          <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl mb-4 uppercase tracking-widest drop-shadow-sm text-white">
            The Mood Lip Gloss
          </h1>
          <p className="font-body-lg text-body-sm md:text-body-lg text-white mb-8 max-w-lg mx-auto tracking-wide font-medium">
            Nourishment and color, together in one swipe.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href={SHOPEE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-1/2 md:w-auto mx-auto md:mx-0 px-10 py-4 bg-primary text-white font-label-md text-label-md tracking-widest uppercase hover:bg-dark-accent transition-all duration-500 shadow-xl text-center"
            >
              Explore Shades
            </a>
          </div>
        </div>
        <a
          href="#buy"
          aria-label="Scroll to Where to Buy"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary animate-bounce hover:opacity-70 transition-opacity"
        >
          <ChevronDown className="w-6 h-6" />
        </a>
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
                src="/images/pure_forest.jpg"
                alt="theoo skincare texture"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                quality={90}
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/5] shadow-sm overflow-hidden mt-12">
              <Image
                src="/images/pure_water.jpg"
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
                src="/images/5.jpg"
                alt="Lip gloss swatches"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                quality={90}
                className="object-cover"
              />
            </div>
            {HERO_INGREDIENTS.map((ingredient) => (
              <div
                key={ingredient.name}
                className="bg-surface-container-lowest p-6 md:p-8 flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary mb-4">
                  <ingredient.icon className="w-6 h-6" />
                </div>
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
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-gutter pb-4 -mx-margin-mobile px-margin-mobile md:mx-0 md:px-0 md:pb-0 md:grid md:grid-cols-5 md:overflow-visible">
            {SHADES.map((shade, i) => (
              <a
                key={shade.id}
                href={SHOPEE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group block shrink-0 w-[42vw] snap-start md:w-auto editorial-reveal"
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
                </div>
                <div className="flex flex-col gap-2 p-2">
                  <div className="flex justify-between">
                    <div className="font-light text-headline-md text-md mb-1 uppercase tracking-wider">
                      {shade.id}
                    </div>

                    <h3 className="font-bold text-headline-md text-sm mb-1 uppercase tracking-wider">
                      {shade.name}
                    </h3>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant text-right">
                    {PRICE}
                  </p>
                </div>
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
        id="buy"
        className="scroll-mt-24 py-stack-lg px-margin-mobile md:px-margin-desktop bg-surface-container-low overflow-hidden"
      >
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="editorial-reveal">
            <h2 className="font-headline-lg text-headline-lg mb-4 text-dark-accent">
              Where to Buy
            </h2>
            <p className="font-label-md text-label-md text-primary uppercase tracking-widest mb-8">
              Official Channels
            </p>
            <div className="space-y-6">
              {CHANNELS.map((channel) => (
                <a
                  key={channel.name}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-6"
                >
                  <div className="w-16 h-16 shrink-0 rounded-full bg-surface-container flex items-center justify-center text-primary transition-transform duration-500 group-hover:scale-110">
                    <channel.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-headline-md text-headline-md mb-1 group-hover:text-primary transition-colors">
                      {channel.name}
                    </h4>
                    <p className="font-body-md text-on-surface-variant">
                      {channel.handle}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="editorial-reveal lg:pl-12">
            <div className="relative aspect-square">
              <Image
                src="/images/9.png"
                alt="theoo product"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={90}
                className="object-cover shadow-2xl relative z-10"
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
                src="/images/7.jpg"
                alt="Lifestyle 1"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                quality={90}
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden mt-8 md:mt-16">
              <Image
                src="/images/lifestyle-2.jpg"
                alt="Lifestyle 2"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                quality={90}
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/ingredients.jpg"
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
              Effortless, like you! The Mood Lip Gloss — nourishment and
              color, together in one swipe.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-16">
            <div className="flex flex-col gap-3">
              <h5 className="font-label-md text-label-md text-dark-accent uppercase">
                Shop
              </h5>
              <a
                className="font-body-sm text-body-sm text-on-secondary-container hover:text-primary hover:underline underline-offset-4 transition-all"
                href="#product"
              >
                Product
              </a>
              <a
                className="font-body-sm text-body-sm text-on-secondary-container hover:text-primary hover:underline underline-offset-4 transition-all"
                href="#ingredients"
              >
                Ingredients
              </a>
              <a
                className="font-body-sm text-body-sm text-on-secondary-container hover:text-primary hover:underline underline-offset-4 transition-all"
                href="#collection"
              >
                Collection
              </a>
              <a
                className="font-body-sm text-body-sm text-on-secondary-container hover:text-primary hover:underline underline-offset-4 transition-all"
                href="#shades"
              >
                Shades
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <h5 className="font-label-md text-label-md text-dark-accent uppercase">
                Connect
              </h5>
              {CHANNELS.map((channel) => (
                <a
                  key={channel.name}
                  className="font-body-sm text-body-sm text-on-secondary-container hover:text-primary hover:underline underline-offset-4 transition-all"
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {channel.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto px-margin-desktop mt-stack-lg pt-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-label-md text-label-md text-on-secondary-container">
            © 2026 theoo. Effortless, like you!
          </p>
          <div className="flex gap-6">
            {CHANNELS.map((channel) => (
              <a
                key={channel.name}
                className="text-on-secondary-container hover:text-primary transition-colors"
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={channel.name}
              >
                <channel.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
