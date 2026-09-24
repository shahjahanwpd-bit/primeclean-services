import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/Pages";
import { pageMeta } from "@/lib/site-data";
export const Route = createFileRoute("/about")({ component: AboutPage, head: () => pageMeta("About Us", "Meet PrimeClean Services and our careful four-step cleaning process for Winnipeg homes.", "/about") });