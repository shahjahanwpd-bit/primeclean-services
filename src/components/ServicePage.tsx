import { Link } from "@tanstack/react-router";
import { CalendarClock, Check, ChevronRight, Clock3, Droplets, Leaf, ShieldCheck, Sparkles, Star, Wind, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QuoteForm } from "@/components/QuoteForm";
import { services } from "@/lib/site-data";
import r2 from "@/assets/result-2.png.asset.json";
import r3 from "@/assets/result-3.png.asset.json";
import r4 from "@/assets/result-4.png.asset.json";
import r5 from "@/assets/result-5.png.asset.json";
import r6 from "@/assets/result-6.png.asset.json";
import r7 from "@/assets/result-7.png.asset.json";

type Slug = (typeof services)[number]["slug"];

const item: Record<Slug, { noun: string; proof: string[]; reviews: [string, string, string][] }> = {
  "couch-cleaning": { noun: "couch", proof: [r3.url, r6.url], reviews: [["Maya R.", "St. Vital", "Our sectional had coffee and pet stains everywhere. It looks brand new and smells so fresh."], ["Jordan P.", "Transcona", "Dried within a few hours and the fabric feels soft again. Super professional."], ["Aisha K.", "River Heights", "The dark spot on our chaise is completely gone. Booking again for the loveseat."]] },
  "carpet-cleaning": { noun: "carpet", proof: [r2.url], reviews: [["Daniel K.", "Fort Garry", "Clear pricing, on time, and the high-traffic marks are finally gone."], ["Sarah L.", "St. James", "Years of dirt lifted out of our basement carpet. Dry by evening."], ["Mark T.", "Charleswood", "The pet odor we couldn't get rid of is gone. Great results."]] },
  "mattress-cleaning": { noun: "mattress", proof: [r4.url, r7.url], reviews: [["Priya S.", "Osborne Village", "Professional, careful, and the room feels noticeably fresher."], ["Kevin M.", "Tuxedo", "Old yellow stains removed and my allergies are better at night."], ["Lena B.", "West End", "Fast, friendly, and the mattress was ready to sleep on the same day."]] },
  "area-rug-cleaning": { noun: "rug", proof: [r5.url], reviews: [["Chris D.", "Wolseley", "The colors on our rug pop again. Gentle but thorough."], ["Nadia F.", "Linden Woods", "Removed a wine stain I'd given up on. Highly recommend."], ["Tom W.", "East Kildonan", "Quick appointment, fair price, and the rug feels soft and clean."]] },
  "car-interior-cleaning": { noun: "car seats", proof: [], reviews: [["Ryan G.", "Bridgwater", "Kids' snack stains and dog hair all gone. Car feels new inside."], ["Emily H.", "St. Boniface", "Seats and carpets are spotless. Worth every dollar."], ["Omar A.", "Garden City", "They came to me and the interior smells amazing."]] },
};

const features = [
  { icon: Droplets, title: "Deep Fiber Extraction", text: "Lifts embedded dirt from the root of every fiber." },
  { icon: Sparkles, title: "Tough Stain & Spot Neutralization", text: "Targeted treatment for food, drink, and pet spots." },
  { icon: Leaf, title: "Organic Deodorizing & Sanitization", text: "Neutralizes odors and bacteria with eco-friendly solutions." },
  { icon: ShieldCheck, title: "Fabric & Fiber Protection Shield", text: "Helps resist future spills and daily wear." },
  { icon: Wind, title: "Fast-Drying Air Treatment", text: "Ready in hours, not days." },
];

const steps = [
  ["Fiber Inspection & Colorfast Test", "Assessing fabric type and stain severity."],
  ["Eco-Friendly Pre-Spray & Agitation", "Loosening dirt and tough spots."],
  ["High-Pressure Steam & Deep Extraction", "Rinsing out dirt, mites, and detergent residue."],
  ["Grooming, Neutralizer & Fast Drying", "Restoring plush feel and setting up quick dry."],
];

export function ServiceDetailPage({ slug }: { slug: string }) {
  const service = services.find((s) => s.slug === slug) ?? services[0];
  const info = item[service.slug];
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const proof = info.proof.length ? info.proof : [service.image];
  const faqs = [
    [`How long will it take for my ${info.noun} to dry completely?`, "Most items are dry within 2–6 hours thanks to our high-powered extraction and air treatment."],
    ["Are the cleaning chemicals safe for children and pets?", "Yes. We use eco-friendly, pet-safe solutions and rinse residue out during extraction."],
    ["Can you remove tough pet urine and vomit odors?", "We treat the source with enzyme-based neutralizers. Most odors are removed completely; we’ll set expectations during inspection."],
    ["Do I need to prepare the room before you arrive?", "Just clear small items and give us access. We handle the rest."],
    ["Can every stain be removed?", "Most stains lift out, but some permanent dyes or damage may only lighten. We always assess first."],
  ];

  return <>
    <section className="relative overflow-hidden bg-brand-deep text-primary-foreground">
      <img src={service.image} alt="" className="absolute inset-0 size-full object-cover opacity-35" />
      <div className="absolute inset-0 bg-linear-to-r from-brand-deep via-brand-deep/90 to-brand-deep/40" />
      <div className="page-shell relative py-20 lg:py-28">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-primary-foreground/70">
          <Link to="/" className="hover:text-primary-foreground">Home</Link><ChevronRight className="size-4" />
          <Link to="/services" className="hover:text-primary-foreground">Services</Link><ChevronRight className="size-4" />
          <span className="font-semibold text-primary-foreground">{service.name}</span>
        </nav>
        <h1 className="mt-6 max-w-3xl font-display text-5xl font-extrabold leading-tight sm:text-6xl">Professional {service.name} in Winnipeg</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-primary-foreground/80">{service.description} We remove stains, pet odors, dust mites, and bacteria for a healthier, fresher home.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          {[{ icon: Zap, t: `Starting at ${service.price}` }, { icon: Clock3, t: `Estimated Time: ${service.duration}` }, { icon: CalendarClock, t: "Same-Day & Next-Day Booking Available" }, { icon: Leaf, t: "Eco-Friendly & Pet-Safe Solutions" }].map(({ icon: Icon, t }) =>
            <span key={t} className="flex items-center gap-2 rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2.5 text-sm font-semibold backdrop-blur"><Icon className="size-4 text-brand-bright" />{t}</span>)}
        </div>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button asChild size="lg"><Link to="/booking">Book Now - From {service.price}</Link></Button>
          <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"><a href="#quote">Get a Quick Quote</a></Button>
        </div>
      </div>
    </section>

    <section className="section-pad"><div className="page-shell">
      <p className="eyebrow">What’s included</p><h2 className="mt-3 text-4xl font-extrabold">Everything your {info.noun} needs</h2>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">{features.map(({ icon: Icon, title, text }) =>
        <article key={title} className="rounded-lg border bg-card p-6 shadow-sm"><span className="grid size-12 place-items-center rounded-lg bg-accent text-primary"><Icon /></span><h3 className="mt-5 font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></article>)}</div>
    </div></section>

    <section className="section-pad bg-accent"><div className="page-shell">
      <p className="eyebrow">How we clean it</p><h2 className="mt-3 text-4xl font-extrabold">Our 4-step process</h2>
      <ol className="mt-10 grid gap-5 md:grid-cols-4">{steps.map(([t, d], i) =>
        <li key={t} className="relative rounded-lg border bg-card p-6"><span className="grid size-11 place-items-center rounded-full bg-primary font-bold text-primary-foreground">{i + 1}</span><p className="mt-4 text-xs font-bold text-primary">STEP {i + 1}</p><h3 className="mt-1 font-bold">{t}</h3><p className="mt-2 text-sm text-muted-foreground">{d}</p></li>)}</ol>
    </div></section>

    <section className="section-pad"><div className="page-shell">
      <div className="text-center"><p className="eyebrow">Real proof</p><h2 className="mt-3 text-4xl font-extrabold">Real Results: See the {service.name} Transformation</h2><p className="mt-3 text-muted-foreground">Untouched photos of actual Winnipeg client homes.</p></div>
      <div className={`mx-auto mt-10 grid gap-6 ${proof.length > 1 ? "md:grid-cols-2" : "max-w-3xl"}`}>{proof.map((src, i) =>
        <figure key={i} className="overflow-hidden rounded-lg border bg-card shadow-lg"><img src={src} alt={`${service.name} before and after`} loading="lazy" className="w-full object-cover" /></figure>)}</div>
      <div className="mt-10 text-center"><Button asChild size="lg"><Link to="/booking">Book Now - From {service.price}</Link></Button></div>
    </div></section>

    <section className="section-pad bg-brand-deep text-primary-foreground"><div className="page-shell grid items-center gap-10 lg:grid-cols-2">
      <div><p className="eyebrow text-brand-bright">Transparent pricing</p><h2 className="mt-3 text-4xl font-extrabold">No hidden fees. Ever.</h2><p className="mt-4 max-w-md text-primary-foreground/70">One clear starting price. We confirm the final scope before any work begins.</p></div>
      <div className="rounded-lg bg-card p-8 text-card-foreground shadow-2xl">
        <p className="text-sm font-bold text-primary">{service.name.toUpperCase()}</p>
        <div className="mt-2 flex items-end gap-2"><span className="font-display text-6xl font-extrabold">{service.price}</span><span className="pb-2 text-muted-foreground">starting</span></div>
        <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground"><Clock3 className="size-4 text-primary" />Estimated {service.duration}</p>
        <ul className="mt-6 grid gap-3 border-t pt-6">{["Pre-inspection & colorfast test", "Eco-friendly pre-spray & agitation", "Hot water deep extraction", "Spot & stain treatment", "Deodorizing & sanitizing", "Fast-dry air treatment"].map((x) => <li key={x} className="flex gap-3 text-sm"><Check className="size-5 shrink-0 text-success" />{x}</li>)}</ul>
        <Button asChild size="lg" className="mt-7 h-14 w-full text-base"><Link to="/booking">Book Now - {service.price}</Link></Button>
      </div>
    </div></section>

    <section className="section-pad"><div className="page-shell">
      <h2 className="text-center text-4xl font-extrabold">What Winnipeg Homeowners Say About Our {service.name}</h2>
      <div className="mt-10 grid gap-5 md:grid-cols-3">{info.reviews.map(([n, area, q]) =>
        <blockquote key={n} className="rounded-lg border bg-card p-6 shadow-sm"><div className="flex gap-1 text-primary">{[1, 2, 3, 4, 5].map((x) => <Star key={x} className="size-4 fill-current" />)}</div><p className="mt-5 leading-7">“{q}”</p><footer className="mt-5 border-t pt-4"><strong>{n}</strong><small className="ml-2 text-muted-foreground">{area}, Winnipeg</small></footer></blockquote>)}</div>
    </div></section>

    <section className="section-pad bg-accent"><div className="page-shell max-w-3xl">
      <h2 className="text-center text-4xl font-extrabold">Frequently asked questions</h2>
      <div className="mt-8 grid gap-3">{faqs.map(([q, a]) => <details key={q} className="rounded-lg border bg-card p-5"><summary className="cursor-pointer font-bold">{q}</summary><p className="mt-3 text-sm leading-6 text-muted-foreground">{a}</p></details>)}</div>
    </div></section>

    <section id="quote" className="section-pad"><div className="page-shell grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
      <div><p className="eyebrow">Free quote</p><h2 className="mt-3 text-4xl font-extrabold">Ready for a Fresh Clean? Request Your Free Quote</h2><p className="mt-4 text-muted-foreground">We’ll reply fast with pricing and the next available time.</p></div>
      <div className="rounded-lg border bg-card p-6 shadow-xl sm:p-8"><QuoteForm service={service.name} submitLabel="Send Request & Check Availability" /></div>
    </div></section>

    <section className="border-t py-14"><div className="page-shell">
      <h2 className="text-xl font-bold">Other Popular Cleaning Services in Winnipeg</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">{others.map((s) =>
        <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="flex items-center gap-4 rounded-lg border bg-card p-3 transition hover:shadow-md"><img src={s.image} alt="" className="size-16 rounded-md object-cover" /><span><strong className="block text-sm">{s.name}</strong><small className="text-primary">From {s.price}</small></span></Link>)}</div>
    </div></section>

    <div className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-3 border-t bg-background p-3 shadow-2xl md:hidden">
      <span className="text-sm font-bold">{service.name} • From {service.price}</span>
      <Button asChild><Link to="/booking">Book Now</Link></Button>
    </div>
  </>;
}
