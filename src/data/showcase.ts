export interface ShowcaseItem {
	name: string;
	href: string;
	stack?: string;
	badge?: string;
	desc: string;
}

export const showcase: ShowcaseItem[] = [
	{
		name: "FinMathsLib-Cpp",
		href: "https://github.com/max-okeeffe/FinMathsLib-Cpp",
		stack: "C++ · Googletest ",
		badge: "Ongoing",
		desc: "A modern C++ library for financial mathematics including options pricing, portfolio hedging, numerical methods, and multi-threaded Monte Carlo simulations. The aim is the incorporate idiomatic and safety features of modern C++.",
	},
	/*{
		name: "Sample Project",
		href: "https://github.com/example/sample",
		stack: "TypeScript · CLI",
		badge: "OSS",
		desc: "A short, plain description of what the project does and why it's interesting. One or two sentences is plenty — keep the prose tight so the row stays scannable.",
	},
	{
		name: "Another Thing",
		href: "https://example.com",
		stack: "Web App · Realtime",
		badge: "Live",
		desc: "Use the badge slot for a status hint — installs, stars, version, or just an OSS / Closed marker. Leave the field undefined and the badge disappears.",
	},
	{
		name: "Research Note",
		href: "https://github.com/example/paper",
		stack: "Python · Algorithms",
		desc: "Showcase entries don't have to be products — a write-up, a paper repo, a one-off experiment all fit. The list is rendered in order; reorder to taste.",
	},*/
];
