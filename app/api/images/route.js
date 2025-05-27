
/*
category is like "nature", "people", "food", "travel", "architecture", "sports", "business", "technology", "fashion", "health"
size is like "small", "medium", "large", "original", "portrait", "landscape", "tiny"
*/

const getRandomImageUrl = async (category, size, index) => {
	try {
		const query = `${category} ${index}`;
		const res = await fetch(
			`https://api.pexels.com/v1/search?query=${encodeURIComponent(
				query
			)}&per_page=1`,
			{
				headers: {
					Authorization: process.env.NEXT_PUBLIC_PEXELS_API_KEY,
				},
			}
		);
		const data = await res.json();

		if (data.photos && data.photos.length > 0) {
			const photo = data.photos[0];
			const baseObj = {
				id: index + 1,
				category: category,
				alt: photo.alt || `Image of ${category} ${index + 1}`,
			};

			switch (size) {
				case "original":
					return { ...baseObj, url: photo.src.original, size: "original" };
				case "portrait":
					return { ...baseObj, url: photo.src.portrait, size: "portrait" };
				case "landscape":
					return { ...baseObj, url: photo.src.landscape, size: "landscape" };
				case "tiny":
					return { ...baseObj, url: photo.src.tiny, size: "tiny" };
				case "small":
					return { ...baseObj, url: photo.src.small, size: "small" };
				case "medium":
					return { ...baseObj, url: photo.src.medium, size: "medium" };
				case "large":
					return { ...baseObj, url: photo.src.large, size: "large" };
				default:
					return { ...baseObj, url: photo.src.medium, size: "medium" };
			}
		}

		// Fallback response when no photos are found
		return {
			id: index + 1,
			url: `https://placehold.co/400x400?text=${encodeURIComponent(query)}`,
			size: size,
			category: category,
			alt: `Placeholder for ${query} ${index + 1}`,
		};
	} catch (err) {
		// Error response
		return {
			id: index + 1,
			url: `https://placehold.co/400x400?text=${encodeURIComponent(category)}`,
			size: size,
			category: category,
			alt: `Error loading image for ${category} ${index + 1}`,
			error: true,
			message: err.message,
		};
	}
};

export async function GET(request) {
	const url = new URL(request.url);
  const pageParam = url.searchParams.get("page");
	const isAll = pageParam === "all";
	const page = isAll ? 1 : parseInt(pageParam) || 1;
	const limit = parseInt(url.searchParams.get("limit")) || 10;
  const category = url.searchParams.get("category") || "nature";
  const size = url.searchParams.get("size") || "medium";
	const images = await Promise.all(
		Array.from({ length: limit }, (_, index) =>
			getRandomImageUrl(category, size, index)
		)
	);
	return new Response(JSON.stringify({images,meta:{total:limit,page:isAll ? "all" : page,limit:isAll ? limit : limit}}), {
		headers: { "Content-Type": "application/json" },
	});
}
