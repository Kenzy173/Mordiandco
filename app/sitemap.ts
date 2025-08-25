import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const base = "https://mordiandco.com";
	const routes = [
		"/",
		"/services",
		"/services/criminal-law",
		"/services/commercial-law",
		"/services/immigration-nationality-law",
		"/services/property-conveyancing",
		"/services/wills-probate",
		"/services/civil-litigation",
		"/services/family-law",
		"/services/oil-gas",
		"/about",
		"/team",
		"/contact",
	];

	return routes.map((route) => ({ url: `${base}${route}`, changeFrequency: "monthly", priority: route === "/" ? 1 : 0.7 }));
}


