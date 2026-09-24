import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/Pages";
import { pageMeta } from "@/lib/site-data";
export const Route = createFileRoute("/legal")({ component: LegalPage, head: () => pageMeta("Terms & Privacy", "PrimeClean Services terms and privacy information.", "/legal") });