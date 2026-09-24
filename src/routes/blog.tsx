import { createFileRoute } from "@tanstack/react-router";
import { BlogPage } from "@/components/Pages";
import { pageMeta } from "@/lib/site-data";
export const Route = createFileRoute("/blog")({ component: BlogPage, head: () => pageMeta("Cleaning Advice", "Practical carpet, mattress, upholstery, and auto care advice from PrimeClean Services.", "/blog") });