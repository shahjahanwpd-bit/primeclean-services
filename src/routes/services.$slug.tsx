import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetailPage } from "@/components/ServicePage";
import { pageMeta, services } from "@/lib/site-data";
export const Route = createFileRoute("/services/$slug")({ component: Page, head: ({ params }) => { const service = services.find((item) => item.slug === params.slug); return pageMeta(service?.name ?? "Cleaning Service", service?.description ?? "Professional deep cleaning in Winnipeg.", `/services/${params.slug}`); } });
function Page() { const { slug } = Route.useParams(); return <ServiceDetailPage slug={slug} />; }