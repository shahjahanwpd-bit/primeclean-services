import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/site-data";

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) return (
    <div className="flex min-h-80 flex-col items-center justify-center rounded-lg border border-success/30 bg-success-soft p-8 text-center" role="status">
      <CheckCircle2 className="mb-4 size-12 text-success" />
      <h3 className="font-display text-2xl font-bold">Thanks for reaching out.</h3>
      <p className="mt-2 max-w-sm text-muted-foreground">We received your request and will respond as quickly as possible.</p>
      <Button className="mt-6" variant="outline" onClick={() => setSent(false)}>Send another request</Button>
    </div>
  );

  return (
    <form onSubmit={submit} className="grid gap-4" aria-label="Free quote request">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="First Name" name="firstName" />
        <Field label="Last Name" name="lastName" />
        <Field label="Email" name="email" type="email" />
        <Field label="Phone" name="phone" type="tel" />
      </div>
      <label className="grid gap-2 text-sm font-semibold">Service Type*
        <select required name="service" className="h-12 rounded-lg border border-input bg-background px-4 font-normal outline-none transition focus:border-primary focus:ring-3 focus:ring-ring/20">
          <option value="">Choose a service</option>
          {services.map((service) => <option key={service.slug}>{service.name}</option>)}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-semibold">Message / Job Details*
        <textarea required name="message" rows={compact ? 3 : 5} placeholder="Tell us what needs cleaning..." className="rounded-lg border border-input bg-background px-4 py-3 font-normal outline-none transition focus:border-primary focus:ring-3 focus:ring-ring/20" />
      </label>
      <Button size="lg" type="submit" className="h-12 w-full sm:w-fit">Send Message / Request Quote <Send /></Button>
    </form>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return <label className="grid gap-2 text-sm font-semibold">{label}*<input required name={name} type={type} className="h-12 rounded-lg border border-input bg-background px-4 font-normal outline-none transition focus:border-primary focus:ring-3 focus:ring-ring/20" /></label>;
}