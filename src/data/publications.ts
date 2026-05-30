export interface Publication {
	title: string;
	date: Date;
	venue?: string;
	description: string;
	href: string;
	tags?: string[];
}

export const publications: Publication[] = [
	// {
	//     title: "Example Paper Title",
	//     date: new Date(2024, 5),   // June 2024
	//     venue: "NeurIPS 2024",
	//     description: "A short description of the paper.",
	//     href: "https://arxiv.org/abs/...",
	//     tags: ["Machine Learning"],
	// },
	{
		title: "Sárközy's Theorem for Fractional Monomials",
		date: new Date("11 November 2024"),
		//venue: "Arxiv",
		description:
			"I proved a Sárközy-type theorem on the relative density of subsets of integers whose difference lacks Piatetski-Shapiro sequences with exponent between 1 and 4/3. In particular, I obtained a power savings bound which improves on those previously established by Sárközy and Rivat in the late 90s.",
		href: "https://arxiv.org/abs/2411.07386",
		tags: ["Additive Combinatorics"],
	},
	{
		title: "Pointwise Convergence of Ergodic Averages Along Hardy Field Sequences",
		date: new Date("11 November 2024"),
		//venue: "Arxiv",
		description:
			"I proved that a wide class of linear ergodic averages (defined with an arbitrary number of commuting transformations and non-polynomial Hardy field functions of distinct growth rates) converge pointwise almost everywhere on an measure space. This is achieved by obtaining a full variational estimate which in turn proves that a maximal estimate holds too.\n\nAlong the way we obtain two results about the corresponding exponential sums: an inverse theorem bound and uniform bounds on the number of jumps by any positive threshold.",
		href: "https://arxiv.org/abs/2411.07385",
		tags: ["Pointwise Ergodic Theory", "Harmonic Analysis"],
	},
	{
		title: "Variational Estimates for Bilinear Ergodic Averages Along Sublinear Sequences",
		date: new Date("11 November 2024"),
		//venue: "Arxiv",
		description:
			"I proved that certain bilinear ergodic averages, defined for a wide class of functions and measure preserving transformations, satisfy long-variational inequalities and maximal estimates. This recovers known results about the almost everywhere pointwise convergence of such averages.\n\nBy adapting the proof of an inverse theorem due to Peluse and Prendiville, I am able to provide a single frequency proof of the variational estimate, in contrast to similar results due to Krause, Mirek, and Tao. Consequently, my results are sharp up to the endpoint.",
		href: "https://arxiv.org/abs/2411.07384",
		tags: ["Pointwise Ergodic Theory", "Harmonic Analysis", "Additive Combinatorics"],
	},
];
