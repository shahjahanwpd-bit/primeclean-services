import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/components/Pages";
import { pageMeta } from "@/lib/site-data";
export const Route = createFileRoute("/services/")({ component: ServicesPage, head: () => pageMeta("Cleaning Services", "Explore couch, carpet, mattress, area rug, and car interior cleaning in Winnipeg.", "/services") });