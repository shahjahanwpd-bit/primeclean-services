import logo from "@/assets/primeclean-logo.png.asset.json";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Facebook, Instagram, MapPin, Menu, Phone, ShoppingBag, UserRound, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/site-data";

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return <Link to="/" aria-label="PrimeClean Services home" className={`flex items-center ${inverse ? "rounded-lg bg-card px-3 py-1.5" : ""}`}>
    <img src={logo.url} alt="PrimeClean Services" width={428} height={256} className="h-14 w-auto" />
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
      <div className="page-shell flex h-19 items-center justify-between gap-5">
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
        <div className="hidden items-center gap-2 xl:flex">
          <a href="tel:+14312946727" className="mr-2 flex items-center gap-2 text-sm font-bold"><Phone className="size-4 text-primary" />+1 (431) 294 6727</a>
          <Button asChild variant="ghost" size="icon"><Link to="/account" aria-label="My account"><UserRound /></Link></Button>
          <Button asChild variant="ghost" size="icon"><Link to="/booking" aria-label="Booking tray" className="relative"><ShoppingBag /><span className="absolute right-0 top-0 grid size-4 place-items-center rounded-full bg-primary text-[9px] text-primary-foreground">0</span></Link></Button>
          <Button asChild><Link to="/booking">Book Now</Link></Button>
        </div>
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

export function MobileBar() { return <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t bg-background p-2 shadow-2xl md:hidden"><Button asChild variant="outline"><a href="tel:+14312946727"><Phone />Call Now</a></Button><Button asChild><Link to="/booking"><ShoppingBag />Book Now</Link></Button></div>; }