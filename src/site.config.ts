import type { AstroExpressiveCodeOptions } from "astro-expressive-code";
import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
	author: "Max O'Keeffe",
	date: {
		locale: "en-gb",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
	description:
		"I am a graudating maths PhD student at King's College London. My research interests lie in harmonic analysis, pointwise ergodic theory, and additive combinatorics.\n\nOver the last few years I have become interested in using programming to problem solve and have taught myself Python and C++. I am continuing to learn new skills and languages such as Rust.\n\nHere you can find a list of my publications, projects I've worked on, and some posts about my work. Feel free to get in touch!",
	lang: "en-gb",
	ogLocale: "en_gb",
	sortPostsByUpdatedDate: false,
	title: "Max O'Keeffe",
	hideThemeCredit: false,
	profile: {
		name: "Max O'Keeffe",
		email: "maximilian.okeeffe@kcl.ac.uk",
		github: "https://github.com/max-okeeffe",
		linkedin: "https://www.linkedin.com/in/max-okeeffe/",
		jobTitle: "Software Engineer",
		employer: "King's College London",
		employerUrl: "https://www.kcl.ac.uk/people/maximilian-okeeffe",
		alumni: "University of Warwick",
		avatar: "/avatar.png",
	},
	// Uncomment & fill in to enable Giscus comments on every post.
	// comments: {
	// 	repo: "your-handle/your-repo",
	// 	repoId: "...",
	// 	category: "General",
	// 	categoryId: "...",
	// },
	// Uncomment to enable analytics. Both providers load via Partytown.
	// analytics: {
	// 	googleAnalyticsId: "G-XXXXXXX",
	// 	goatcounterUrl: "https://your-handle.goatcounter.com/count",
	// },
};

export const menuLinks: { path: string; title: string }[] = [
	{
		path: "/",
		title: "Home",
	},
	{
		path: "/about/",
		title: "About",
	},
	{
		path: "/publications/",
		title: "Publications",
	},
	{
		path: "/projects/",
		title: "Projects",
	},
	{
		path: "/posts/",
		title: "Posts",
	},
];

export const expressiveCodeOptions: AstroExpressiveCodeOptions = {
	styleOverrides: {
		borderRadius: "4px",
		codeBackground: ({ theme }) => (theme.type === "light" ? "#f0e9d6" : "#1a1715"),
		codeFontFamily:
			'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;',
		codeFontSize: "0.875rem",
		codeLineHeight: "1.7142857rem",
		codePaddingInline: "1rem",
		frames: {
			editorActiveTabBackground: ({ theme }) => (theme.type === "light" ? "#f0e9d6" : "#1a1715"),
			editorTabBarBackground: ({ theme }) => (theme.type === "light" ? "#ebe3cd" : "#15120e"),
			frameBoxShadowCssValue: "none",
			terminalBackground: ({ theme }) => (theme.type === "light" ? "#f0e9d6" : "#1a1715"),
			terminalTitlebarBackground: ({ theme }) => (theme.type === "light" ? "#ebe3cd" : "#15120e"),
		},
		uiLineHeight: "inherit",
	},
	themeCssSelector(theme, { styleVariants }) {
		if (styleVariants.length >= 2) {
			const baseTheme = styleVariants[0]?.theme;
			const altTheme = styleVariants.find((v) => v.theme.type !== baseTheme?.type)?.theme;
			if (theme === baseTheme || theme === altTheme) return `[data-theme='${theme.type}']`;
		}
		return `[data-theme="${theme.name}"]`;
	},
	themes: ["min-dark", "min-light"],
	useThemedScrollbars: false,
};
