import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/Pages";
import { pageMeta } from "@/lib/site-data";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => pageMeta("Professional Carpet & Upholstery Cleaning in Winnipeg", "Deep extraction cleaning that removes stains, dirt, odors, allergens, dust mites, and bacteria.", "/"),
});
