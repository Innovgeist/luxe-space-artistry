import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sitemap/xml")({
  server: {
    handlers: {
      GET: async () => {
        const BASE_URL = "https://id-preview--775e067c-45f1-42bf-a3dd-a1382a28b889.lovable.app";

        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.8" },
          { path: "/projects", changefreq: "weekly", priority: "0.9" },
          { path: "/services", changefreq: "monthly", priority: "0.8" },
          { path: "/process", changefreq: "monthly", priority: "0.7" },
          { path: "/testimonials", changefreq: "monthly", priority: "0.7" },
          { path: "/journal", changefreq: "weekly", priority: "0.7" },
          { path: "/contact", changefreq: "monthly", priority: "0.8" },
        ];

        const projectSlugs = [
          "riverfront-pavilion",
          "aurum-collective",
          "sand-house",
          "equinox-hub",
          "basalt-pavilion",
          "the-olive-hotel",
        ];

        const journalSlugs = [
          "the-art-of-limewash",
          "designing-for-generations",
          "light-as-material",
          "sourcing-stone-rajasthan",
          "office-design-post-pandemic",
          "bronze-in-interiors",
        ];

        const allUrls = [
          ...entries,
          ...projectSlugs.map((slug) => ({
            path: `/projects/${slug}`,
            changefreq: "monthly" as const,
            priority: "0.7",
          })),
          ...journalSlugs.map((slug) => ({
            path: `/journal/${slug}`,
            changefreq: "monthly" as const,
            priority: "0.6",
          })),
        ];

        const urls = allUrls.map(
          (e) =>
            `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
