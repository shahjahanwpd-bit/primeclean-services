import { createFileRoute } from "@tanstack/react-router";
import { AccountPage } from "@/components/Pages";
import { pageMeta } from "@/lib/site-data";
export const Route = createFileRoute("/account")({ component: AccountPage, head: () => pageMeta("My Account", "Access your PrimeClean Services appointment details.", "/account") });