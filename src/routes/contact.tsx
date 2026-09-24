import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/Pages";
import { pageMeta } from "@/lib/site-data";
export const Route = createFileRoute("/contact")({ component: ContactPage, head: () => pageMeta("Contact & Free Quote", "Request a fast, no-obligation cleaning quote in Winnipeg.", "/contact") });