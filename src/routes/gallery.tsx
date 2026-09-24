import { createFileRoute } from "@tanstack/react-router";
import { GalleryPage } from "@/components/Pages";
import { pageMeta } from "@/lib/site-data";
export const Route = createFileRoute("/gallery")({ component: GalleryPage, head: () => pageMeta("Cleaning Gallery", "See PrimeClean carpet, couch, mattress, and auto cleaning results across Winnipeg.", "/gallery") });