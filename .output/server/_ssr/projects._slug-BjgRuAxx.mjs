import { r as projectBySlug } from "./projects-CUK_U9ss.mjs";
import { A as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects._slug-BjgRuAxx.js
var $$splitNotFoundComponentImporter = () => import("./projects._slug-Dzusuphg.mjs");
var $$splitComponentImporter = () => import("./projects._slug-AjAv3Fbb.mjs");
var Route = createFileRoute("/projects/$slug")({
	loader: ({ params }) => {
		const project = projectBySlug(params.slug);
		if (!project) throw notFound();
		return { project };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Case study — Bajarangi Infratech World" }, {
			name: "robots",
			content: "noindex"
		}] };
		const { project } = loaderData;
		const title = `${project.title} — Case Study | Bajarangi Infratech World`;
		const desc = project.summary;
		return { meta: [
			{ title },
			{
				name: "description",
				content: desc
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: desc
			},
			{
				property: "og:type",
				content: "article"
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
//#endregion
export { Route as t };
