import { createFileRoute, Navigate } from "@tanstack/react-router";

/**
 * The Duxio VSL landing page lives at /coach-client-acquisition (the canonical
 * SEO slug). The root path "/" redirects there so any legacy/home traffic lands
 * on the correct page.
 */
export const Route = createFileRoute("/")({
  component: () => <Navigate to="/coach-client-acquisition" />,
});
