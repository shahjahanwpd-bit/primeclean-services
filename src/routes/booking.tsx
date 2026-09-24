import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/Pages";
import { pageMeta } from "@/lib/site-data";
export const Route = createFileRoute("/booking")({ component: () => <ContactPage booking />, head: () => pageMeta("Book an Appointment", "Book carpet or upholstery cleaning with PrimeClean Services in Winnipeg.", "/booking") });