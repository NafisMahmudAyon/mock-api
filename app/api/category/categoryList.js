export const categories = [
	{
		model: "sports",
		categories: [
			{
				name: "cricket",
				slug: "cricket",
			},
			{
				name: "football",
				slug: "football",
			},
			{
				name: "basketball",
				slug: "basketball",
			},
			{
				name: "tennis",
				slug: "tennis",
			},
			{
				name: "athletics (track & field)",
				slug: "athletics-track-and-field",
			},
			{
				name: "swimming",
				slug: "swimming",
			},
			{
				name: "boxing",
				slug: "boxing",
			},
			{
				name: "martial arts (karate, judo)",
				slug: "martial-arts-karate-judo",
			},
			{
				name: "winter sports (skiing, ice hockey)",
				slug: "winter-sports-skiing-ice-hockey",
			},
			{
				name: "esports",
				slug: "esports",
			},
			{
				name: "cycling",
				slug: "cycling",
			},
			{
				name: "golf",
				slug: "golf",
			},
			{
				name: "rugby",
				slug: "rugby",
			},
			{
				name: "volleyball",
				slug: "volleyball",
			},
		],
	},
	{
		model: "technology",
		categories: [
			{
				name: "programming",
				slug: "programming",
			},
			{
				name: "web development",
				slug: "web-development",
			},
			{
				name: "AI/ML",
				slug: "ai-ml",
			},
			{
				name: "cybersecurity",
				slug: "cybersecurity",
			},
			{
				name: "cloud computing",
				slug: "cloud-computing",
			},
			{
				name: "robotics",
				slug: "robotics",
			},
			{
				name: "blockchain",
				slug: "blockchain",
			},
			{
				name: "IoT",
				slug: "iot",
			},
			{
				name: "quantum computing",
				slug: "quantum-computing",
			},
			{
				name: "devops",
				slug: "devops",
			},
		],
	},
	{
		model: "science",
		categories: [
			{
				name: "physics",
				slug: "physics",
				subcategories: [
					{
						name: "quantum mechanics",
						slug: "quantum-mechanics",
					},
					{
						name: "astrophysics",
						slug: "astrophysics",
					},
				],
			},
			{
				name: "chemistry",
				slug: "chemistry",
				subcategories: [
					{
						name: "organic chemistry",
						slug: "organic-chemistry",
					},
					{
						name: "biochemistry",
						slug: "biochemistry",
					},
				],
			},
			{
				name: "biology",
				slug: "biology",
				subcategories: [
					{
						name: "genetics",
						slug: "genetics",
					},
					{
						name: "ecology",
						slug: "ecology",
					},
				],
			},
			{
				name: "earth science",
				slug: "earth-science",
				subcategories: [
					{
						name: "geology",
						slug: "geology",
					},
					{
						name: "meteorology",
						slug: "meteorology",
					},
				],
			},
			{
				name: "mathematics",
				slug: "mathematics",
				subcategories: [
					{
						name: "algebra",
						slug: "algebra",
					},
					{
						name: "calculus",
						slug: "calculus",
					},
				],
			},
			{
				name: "space science",
				slug: "space-science",
				subcategories: [
					{
						name: "astronautics",
						slug: "astronautics",
					},
					{
						name: "planetary science",
						slug: "planetary-science",
					},
				],
			},
		],
	},
	{
		model: "arts",
		categories: [
			{
				name: "visual arts",
				slug: "visual-arts",
				subcategories: [
					{
						name: "painting",
						slug: "painting",
					},
					{
						name: "sculpture",
						slug: "sculpture",
					},
				],
			},
			{
				name: "performing arts",
				slug: "performing-arts",
				subcategories: [
					{
						name: "theater",
						slug: "theater",
					},
					{
						name: "dance",
						slug: "dance",
					},
				],
			},
			{
				name: "literary arts",
				slug: "literary-arts",
				subcategories: [
					{
						name: "poetry",
						slug: "poetry",
					},
					{
						name: "fiction",
						slug: "fiction",
					},
				],
			},
			{
				name: "digital arts",
				slug: "digital-arts",
				subcategories: [
					{
						name: "3D modeling",
						slug: "3d-modeling",
					},
					{
						name: "animation",
						slug: "animation",
					},
				],
			},
			{
				name: "applied arts",
				slug: "applied-arts",
				subcategories: [
					{
						name: "architecture",
						slug: "architecture",
					},
					{
						name: "graphic design",
						slug: "graphic-design",
					},
				],
			},
			{
				name: "music",
				slug: "music",
				subcategories: [
					{
						name: "classical",
						slug: "classical",
					},
					{
						name: "jazz",
						slug: "jazz",
					},
				],
			},
		],
	},
	{
		model: "business",
		categories: [
			{
				name: "entrepreneurship",
				slug: "entrepreneurship",
			},
			{
				name: "marketing",
				slug: "marketing",
				subcategories: [
					{
						name: "digital marketing",
						slug: "digital-marketing",
					},
					{
						name: "SEO",
						slug: "seo",
					},
				],
			},
			{
				name: "finance",
				slug: "finance",
				subcategories: [
					{
						name: "investing",
						slug: "investing",
					},
					{
						name: "fintech",
						slug: "fintech",
					},
				],
			},
			{
				name: "supply chain management",
				slug: "supply-chain-management",
			},
			{
				name: "HR",
				slug: "hr",
			},
			{
				name: "e-commerce",
				slug: "e-commerce",
			},
			{
				name: "corporate strategy",
				slug: "corporate-strategy",
			},
			{
				name: "business analytics",
				slug: "business-analytics",
			},
		],
	},
	{
		model: "health-and-medicine",
		categories: [
			{
				name: "general medicine",
				slug: "general-medicine",
			},
			{
				name: "surgery",
				slug: "surgery",
			},
			{
				name: "mental health",
				slug: "mental-health",
				subcategories: [
					{
						name: "psychology",
						slug: "psychology",
					},
					{
						name: "psychiatry",
						slug: "psychiatry",
					},
				],
			},
			{
				name: "nutrition",
				slug: "nutrition",
			},
			{
				name: "nursing",
				slug: "nursing",
			},
			{
				name: "public health",
				slug: "public-health",
			},
			{
				name: "alternative medicine",
				slug: "alternative-medicine",
				subcategories: [
					{
						name: "acupuncture",
						slug: "acupuncture",
					},
					{
						name: "ayurveda",
						slug: "ayurveda",
					},
				],
			},
			{
				name: "biotechnology",
				slug: "biotechnology",
			},
		],
	},
	{
		model: "education",
		categories: [
			{
				name: "pedagogy",
				slug: "pedagogy",
			},
			{
				name: "curriculum design",
				slug: "curriculum-design",
			},
			{
				name: "edtech (online learning platforms)",
				slug: "edtech-online-learning-platforms",
			},
			{
				name: "special education",
				slug: "special-education",
			},
			{
				name: "stem education",
				slug: "stem-education",
			},
			{
				name: "language learning",
				slug: "language-learning",
			},
			{
				name: "higher education",
				slug: "higher-education",
			},
		],
	},
	{
		model: "entertainment",
		categories: [
			{
				name: "film",
				slug: "film",
				subcategories: [
					{
						name: "cinematography",
						slug: "cinematography",
					},
					{
						name: "screenwriting",
						slug: "screenwriting",
					},
				],
			},
			{
				name: "music",
				slug: "music",
				subcategories: [
					{
						name: "production",
						slug: "production",
					},
					{
						name: "dijing",
						slug: "dijing",
					},
				],
			},
			{
				name: "gaming",
				slug: "gaming",
				subcategories: [
					{
						name: "video games",
						slug: "video-games",
					},
					{
						name: "board games",
						slug: "board-games",
					},
				],
			},
			{
				name: "theater",
				slug: "theater",
			},
			{
				name: "streaming",
				slug: "streaming",
				subcategories: [
					{
						name: "podcasts",
						slug: "podcasts",
					},
					{
						name: "youtube",
						slug: "youtube",
					},
				],
			},
			{
				name: "comedy",
				slug: "comedy",
			},
		],
	},
	{
		model: "environment",
		categories: [
			{
				name: "climate science",
				slug: "climate-science",
			},
			{
				name: "renewable energy",
				slug: "renewable-energy",
				subcategories: [
					{
						name: "solar",
						slug: "solar",
					},
					{
						name: "wind",
						slug: "wind",
					},
				],
			},
			{
				name: "conservation",
				slug: "conservation",
			},
			{
				name: "sustainable agriculture",
				slug: "sustainable-agriculture",
			},
			{
				name: "environmental policy",
				slug: "environmental-policy",
			},
			{
				name: "ecology",
				slug: "ecology",
			},
			{
				name: "recycling",
				slug: "recycling",
			},
		],
	},
	{
		model: "social-sciences",
		categories: [
			{
				name: "sociology",
				slug: "sociology",
			},
			{
				name: "anthropology",
				slug: "anthropology",
			},
			{
				name: "political science",
				slug: "political-science",
			},
			{
				name: "economics",
				slug: "economics",
			},
			{
				name: "psychology",
				slug: "psychology",
			},
			{
				name: "linguistics",
				slug: "linguistics",
			},
			{
				name: "gender studies",
				slug: "gender-studies",
			},
		],
	},
	{
		model: "culinary-arts",
		categories: [
			{
				name: "baking",
				slug: "baking",
			},
			{
				name: "pastry arts",
				slug: "pastry-arts",
			},
			{
				name: "gastronomy",
				slug: "gastronomy",
			},
			{
				name: "mixology",
				slug: "mixology",
			},
			{
				name: "regional cuisine",
				slug: "regional-cuisine",
				subcategories: [
					{
						name: "italian",
						slug: "italian",
					},
					{
						name: "japanese",
						slug: "japanese",
					},
				],
			},
			{
				name: "food science",
				slug: "food-science",
			},
		],
	},
	{
		model: "automotive",
		categories: [
			{
				name: "electric vehicles (EVs)",
				slug: "electric-vehicles-evs",
			},
			{
				name: "autonomous driving",
				slug: "autonomous-driving",
			},
			{
				name: "automotive design",
				slug: "automotive-design",
			},
			{
				name: "motorsports",
				slug: "motorsports",
				subcategories: [
					{
						name: "formula 1",
						slug: "formula-1",
					},
					{
						name: "nascar",
						slug: "nascar",
					},
				],
			},
			{
				name: "hybrid technology",
				slug: "hybrid-technology",
			},
		],
	},
	{
		model: "fashion",
		categories: [
			{
				name: "textile design",
				slug: "textile-design",
			},
			{
				name: "sustainable fashion",
				slug: "sustainable-fashion",
			},
			{
				name: "haute couture",
				slug: "haute-couture",
			},
			{
				name: "accessories",
				slug: "accessories",
			},
			{
				name: "footwear",
				slug: "footwear",
			},
		],
	},
	{
		model: "law",
		categories: [
			{
				name: "criminal law",
				slug: "criminal-law",
			},
			{
				name: "corporate law",
				slug: "corporate-law",
			},
			{
				name: "international law",
				slug: "international-law",
			},
			{
				name: "intellectual property",
				slug: "intellectual-property",
			},
			{
				name: "human rights law",
				slug: "human-rights-law",
			},
			{
				name: "environmental law",
				slug: "environmental-law",
			},
		],
	},
	{
		model: "agriculture",
		categories: [
			{
				name: "agronomy",
				slug: "agronomy",
			},
			{
				name: "horticulture",
				slug: "horticulture",
			},
			{
				name: "aquaponics",
				slug: "aquaponics",
			},
			{
				name: "organic farming",
				slug: "organic-farming",
			},
			{
				name: "agricultural engineering",
				slug: "agricultural-engineering",
			},
			{
				name: "animal husbandry",
				slug: "animal-husbandry",
			},
		],
	},
	{
		model: "travel-tourism",
		categories: [
			{
				name: "hospitality",
				slug: "hospitality",
			},
			{
				name: "adventure travel",
				slug: "adventure-travel",
			},
			{
				name: "cultural tourism",
				slug: "cultural-tourism",
			},
			{
				name: "ecotourism",
				slug: "ecotourism",
			},
			{
				name: "travel writing",
				slug: "travel-writing",
			},
			{
				name: "aviation",
				slug: "aviation",
			},
		],
	},
	{
		model: "real-estate",
		categories: [
			{
				name: "residential property",
				slug: "residential-property",
			},
			{
				name: "commercial real estate",
				slug: "commercial-real-estate",
			},
			{
				name: "urban planning",
				slug: "urban-planning",
			},
			{
				name: "property management",
				slug: "property-management",
			},
			{
				name: "real estate law",
				slug: "real-estate-law",
			},
		],
	},
	{
		model: "military-defense",
		categories: [
			{
				name: "military strategy",
				slug: "military-strategy",
			},
			{
				name: "aerospace engineering",
				slug: "aerospace-engineering",
			},
			{
				name: "cybersecurity",
				slug: "cybersecurity",
			},
			{
				name: "naval systems",
				slug: "naval-systems",
			},
			{
				name: "weaponry",
				slug: "weaponry",
			},
			{
				name: "defense policy",
				slug: "defense-policy",
			},
		],
	},
	{
		model: "gaming",
		categories: [
			{
				name: "video game genres",
				slug: "video-game-genres",
				subcategories: [
					{
						name: "RPG",
						slug: "rpg",
					},
					{
						name: "FPS",
						slug: "fps",
					},
				],
			},
			{
				name: "game development",
				slug: "game-development",
				subcategories: [
					{
						name: "Unity",
						slug: "unity",
					},
					{
						name: "Unreal Engine",
						slug: "unreal-engine",
					},
				],
			},
			{
				name: "esports",
				slug: "esports",
			},
			{
				name: "board games",
				slug: "board-games",
			},
			{
				name: "VR gaming",
				slug: "vr-gaming",
			},
		],
	},
	{
		model: "artificial-intelligence",
		categories: [
			{
				name: "machine learning",
				slug: "machine-learning",
			},
			{
				name: "computer vision",
				slug: "computer-vision",
			},
			{
				name: "natural language processing",
				slug: "natural-language-processing",
				subcategories: [
					{
						name: "chatGPT",
						slug: "chatgpt",
					},
				],
			},
			{
				name: "reinforcement learning",
				slug: "reinforcement-learning",
			},
			{
				name: "AI ethics",
				slug: "ai-ethics",
			},
		],
	},
	{
		model: "space-exploration",
		categories: [
			{
				name: "rocketry",
				slug: "rocketry",
			},
			{
				name: "satellite technology",
				slug: "satellite-technology",
			},
			{
				name: "astrobiology",
				slug: "astrobiology",
			},
			{
				name: "space tourism",
				slug: "space-tourism",
			},
			{
				name: "planetary colonization",
				slug: "planetary-colonization",
			},
		],
	},
	{
		model: "crafts-diy",
		categories: [
			{
				name: "woodworking",
				slug: "woodworking",
			},
			{
				name: "knitting",
				slug: "knitting",
			},
			{
				name: "pottery",
				slug: "pottery",
			},
			{
				name: "jewelry making",
				slug: "jewelry-making",
			},
			{
				name: "home improvement",
				slug: "home-improvement",
			},
			{
				name: "model building",
				slug: "model-building",
			},
		],
	},
	{
		model: "philanthropy",
		categories: [
			{
				name: "nonprofit management",
				slug: "nonprofit-management",
			},
			{
				name: "social entrepreneurship",
				slug: "social-entrepreneurship",
			},
			{
				name: "grant writing",
				slug: "grant-writing",
			},
			{
				name: "community development",
				slug: "community-development",
			},
			{
				name: "disaster relief",
				slug: "disaster-relief",
			},
		],
	},
	{
		model: "transportation",
		categories: [
			{
				name: "aviation",
				slug: "aviation",
			},
			{
				name: "maritime",
				slug: "maritime",
			},
			{
				name: "rail systems",
				slug: "rail-systems",
			},
			{
				name: "public transit",
				slug: "public-transit",
			},
			{
				name: "logistics",
				slug: "logistics",
			},
			{
				name: "hyperloop",
				slug: "hyperloop",
			},
		],
	},
	{
		model: "religion-spirituality",
		categories: [
			{
				name: "theology",
				slug: "theology",
			},
			{
				name: "comparative religion",
				slug: "comparative-religion",
			},
			{
				name: "meditation",
				slug: "meditation",
			},
			{
				name: "religious history",
				slug: "religious-history",
			},
			{
				name: "mysticism",
				slug: "mysticism",
			},
		],
	},
	{
		model: "fitness-wellness",
		categories: [
			{
				name: "yoga",
				slug: "yoga",
			},
			{
				name: "crossfit",
				slug: "crossfit",
			},
			{
				name: "pilates",
				slug: "pilates",
			},
			{
				name: "bodybuilding",
				slug: "bodybuilding",
			},
			{
				name: "mental wellness",
				slug: "mental-wellness",
			},
			{
				name: "holistic health",
				slug: "holistic-health",
			},
		],
	},
	{
		model: "media-journalism",
		categories: [
			{
				name: "investigative journalism",
				slug: "investigative-journalism",
			},
			{
				name: "broadcast media",
				slug: "broadcast-media",
			},
			{
				name: "photojournalism",
				slug: "photojournalism",
			},
			{
				name: "social media management",
				slug: "social-media-management",
			},
			{
				name: "content creation",
				slug: "content-creation",
			},
		],
	},
	{
		model: "history",
		categories: [
			{
				name: "ancient history",
				slug: "ancient-history",
			},
			{
				name: "medieval history",
				slug: "medieval-history",
			},
			{
				name: "modern history",
				slug: "modern-history",
			},
			{
				name: "cultural history",
				slug: "cultural-history",
			},
			{
				name: "military history",
				slug: "military-history",
			},
		],
	},
	{
		model: "pets-animals",
		categories: [
			{
				name: "veterinary medicine",
				slug: "veterinary-medicine",
			},
			{
				name: "animal training",
				slug: "animal-training",
			},
			{
				name: "pet nutrition",
				slug: "pet-nutrition",
			},
			{
				name: "wildlife conservation",
				slug: "wildlife-conservation",
			},
			{
				name: "aquaculture",
				slug: "aquaculture",
			},
		],
	},
	{
		model: "virtual-reality",
		categories: [
			{
				name: "vr gaming",
				slug: "vr-gaming",
			},
			{
				name: "simulation training",
				slug: "simulation-training",
			},
			{
				name: "vr filmmaking",
				slug: "vr-filmmaking",
			},
			{
				name: "augmented reality (ar)",
				slug: "augmented-reality-ar",
			},
			{
				name: "metaverse development",
				slug: "metaverse-development",
			},
		],
	},

];
