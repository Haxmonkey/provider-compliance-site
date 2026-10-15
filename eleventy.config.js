// Provider Compliance Bureau — static site build (Eleventy 3)
export default function (eleventyConfig) {
  // Static files copied as-is
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/admin": "admin" });
  eleventyConfig.addPassthroughCopy({ "src/uploads": "uploads" });
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });

  // Resources articles (managed in the editor at /admin/)
  eleventyConfig.addCollection("articles", (api) =>
    api
      .getFilteredByGlob("src/resources/articles/*.md")
      .filter((a) => !a.data.draft)
      .sort((a, b) => b.date - a.date)
  );

  const fmt = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
  eleventyConfig.addFilter("readableDate", (d) => (d ? fmt.format(new Date(d)) : ""));
  eleventyConfig.addFilter("isoDate", (d) => (d ? new Date(d).toISOString().slice(0, 10) : ""));
  eleventyConfig.addFilter("slugify", (s) =>
    String(s).toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
  );
  eleventyConfig.addFilter("readingTime", (html) => {
    const words = String(html || "").replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / 225));
  });
  eleventyConfig.addFilter("related", (articles, url, category, n = 3) => {
    const others = (articles || []).filter((a) => a.url !== url);
    const same = others.filter((a) => a.data.category === category);
    const rest = others.filter((a) => a.data.category !== category);
    return [...same, ...rest].slice(0, n);
  });
  eleventyConfig.addFilter("byCategory", (articles, cat) => (articles || []).filter((a) => a.data.category === cat));
  eleventyConfig.addFilter("absoluteUrl", (path, base) => (base ? base.replace(/\/$/, "") + path : path));

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md"],
  };
}
