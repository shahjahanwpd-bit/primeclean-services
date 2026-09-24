import logo from "@/assets/primeclean-logo-crop.png.asset.json";
import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Facebook, Instagram, MapPin, Menu, Phone, ShoppingBag, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/site-data";

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return <Link to="/" aria-label="PrimeClean Services home" className={`inline-flex items-center ${inverse ? "rounded-lg bg-card px-3 py-2" : ""}`}>
    <img src={logo.url} alt="PrimeClean Services" width={419} height={227} className={inverse ? "h-12 w-auto" : "h-16 w-auto mix-blend-multiply"} />
  </Link>;
}

const mainLinks = [
  { to: "/", label: "Home" }, { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" }, { to: "/blog", label: "Blog" }, { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return <>
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 shadow-sm backdrop-blur-xl">
      <div className="page-shell flex h-20 items-center justify-between gap-5">
        <Brand />
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {mainLinks.slice(0, 2).map((item) => <NavLink key={item.to} {...item} />)}
          <div className="group relative py-6"><Link to="/services" className="flex items-center gap-1 text-sm font-semibold text-foreground/75 transition hover:text-primary">Services <ChevronDown className="size-3.5" /></Link>
            <div className="invisible absolute left-1/2 top-[68px] w-64 -translate-x-1/2 rounded-lg border bg-popover p-2 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100">
              {services.map((service) => <Link key={service.slug} to="/services/$slug" params={{ slug: service.slug }} className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium hover:bg-accent"><service.icon className="size-4 text-primary" />{service.name}</Link>)}
            </div>
          </div>
          {mainLinks.slice(2).map((item) => <NavLink key={item.to} {...item} />)}
        </nav>
        <Button asChild className="hidden lg:inline-flex"><Link to="/booking">Book Now</Link></Button>
        <Button className="lg:hidden" variant="ghost" size="icon" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</Button>
      </div>
      {open && <div className="border-t bg-background p-5 lg:hidden"><nav className="grid gap-1">
        {mainLinks.map((item) => <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 font-semibold hover:bg-accent">{item.label}</Link>)}
        <Link to="/services" onClick={() => setOpen(false)} className="rounded-md px-3 py-3 font-semibold hover:bg-accent">Services</Link>
        <Button asChild className="mt-3"><Link to="/booking" onClick={() => setOpen(false)}>Book Now</Link></Button>
      </nav></div>}
    </header>
  </>;
}

function NavLink({ to, label }: { to: "/" | "/about" | "/gallery" | "/blog" | "/contact"; label: string }) {
  return <Link to={to} activeProps={{ className: "text-primary" }} inactiveProps={{ className: "text-foreground/75" }} activeOptions={{ exact: to === "/" }} className="text-sm font-semibold transition hover:text-primary">{label}</Link>;
}

export function Footer() {
  return <footer className="bg-brand-deep pb-22 pt-16 text-primary-foreground md:pb-0">
    <div className="page-shell grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_.8fr_.9fr_1.4fr]">
      <div><Brand inverse /><p className="mt-5 max-w-xs text-sm leading-6 text-primary-foreground/70">Deep cleaning. Fast drying. Real results you can see.</p><div className="mt-5 flex gap-2"><a className="social-button" href="#" aria-label="Instagram"><Instagram /></a><a className="social-button" href="#" aria-label="Facebook"><Facebook /></a></div></div>
      <FooterGroup title="Quick Links" links={["Home", "About Us", "Gallery", "Blog", "Contact", "Terms & Privacy"]} />
      <FooterGroup title="Services" links={services.map((s) => s.name)} />
      <div><h3 className="font-display font-bold">Contact & Service Area</h3><ul className="mt-5 grid gap-3 text-sm text-primary-foreground/70"><li className="flex gap-2"><MapPin className="size-4 shrink-0 text-brand-bright" />Winnipeg, Manitoba, Canada</li><li><a href="tel:+14312946727">+1 (431) 294 6727</a></li><li><a href="mailto:primeclean.ca@gmail.com">primeclean.ca@gmail.com</a></li></ul><span className="mt-5 inline-block rounded-md border border-brand-bright/30 bg-brand-bright/10 px-3 py-2 text-xs font-bold text-brand-bright">Same-day & Next-day Appointments Available</span></div>
    </div>
    <div className="page-shell mt-12 border-t border-primary-foreground/10 py-6 text-xs text-primary-foreground/55">© 2026 PrimeClean Services. All rights reserved.</div>
  </footer>;
}

function FooterGroup({ title, links }: { title: string; links: readonly string[] }) { return <div><h3 className="font-display font-bold">{title}</h3><ul className="mt-5 grid gap-2 text-sm text-primary-foreground/65">{links.map((link) => <li key={link}>{link}</li>)}</ul></div>; }

export function WhatsAppButton() {
  return <a href="https://wa.me/14312946727?text=Hi%20PrimeClean%2C%20I%27d%20like%20to%20book%20a%20cleaning." target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="fixed bottom-20 right-4 z-50 grid size-14 place-items-center rounded-full bg-whatsapp text-primary-foreground shadow-2xl transition hover:scale-105 md:bottom-6 md:right-6">
    <svg viewBox="0 0 24 24" className="size-7 fill-current" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.93.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.23-9.43 9.44-9.43a9.4 9.4 0 0 1 9.43 9.44c0 5.2-4.24 9.43-9.44 9.43M20.08 3.9A11.3 11.3 0 0 0 12.05.58C5.8.58.7 5.68.7 11.94c0 2 .52 3.95 1.52 5.67L.6 23.5l6.03-1.58a11.3 11.3 0 0 0 5.42 1.38h.01c6.26 0 11.36-5.1 11.36-11.36 0-3.03-1.18-5.88-3.33-8.03"/></svg>
  </a>;
}

export function MobileBar() { const path = useRouterState({ select: (s) => s.location.pathname }); if (path.startsWith("/services/")) return null; return <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t bg-background p-2 shadow-2xl md:hidden"><Button asChild variant="outline"><a href="tel:+14312946727"><Phone />Call Now</a></Button><Button asChild><Link to="/booking"><ShoppingBag />Book Now</Link></Button></div>; }