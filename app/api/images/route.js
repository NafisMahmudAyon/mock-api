
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
      switch (size) {
        case "original":
          return {id: index + 1, url: data.photos[0].src.original, size: "original", category: category,alt: data.photos[0].alt};
        case "portrait":
          return {
						id: index + 1,
						url: data.photos[0].src.original,
						size: "original",
						category: category,
						alt: data.photos[0].alt,
					};
        case "landscape":
          return {
						id: index + 1,
						url: data.photos[0].src.landscape,
						size: "landscape",
						category: category,
						alt: data.photos[0].alt,
					};
        case "tiny":
          return {
						id: index + 1,
						url: data.photos[0].src.tiny,
						size: "tiny",
						category: category,
						alt: data.photos[0].alt,
					};
        case "small":
          return {
						id: index + 1,
						url: data.photos[0].src.small,
						size: "small",
						category: category,
						alt: data.photos[0].alt,
					};
        case "medium":
          return {
						id: index + 1,
						url: data.photos[0].src.medium,
						size: "medium",
						category: category,
						alt: data.photos[0].alt,
					};
        case "large":
          return {
						id: index + 1,
						url: data.photos[0].src.large,
						size: "large",
						category: category,
						alt: data.photos[0].alt,
					};
        default:``
          return {
						id: index + 1,
						url: data.photos[0].src.medium,
						size: "medium",
						category: category,
						alt: data.photos[0].alt,
					};
      }
		}
		return `https://placehold.co/400x400?text=${query.replace(/ /g, "+")}+${
			index + 1
		}`;
	} catch (err) {
		return `https://placehold.co/400x400?text=${category}+${index + 1}`;
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
