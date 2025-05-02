export async function GET(request) {
	const generateRandomString = (length) => {
		const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
		let result = "";
		for (let i = 0; i < length; i++) {
			result += characters.charAt(
				Math.floor(Math.random() * characters.length)
			);
		}
		return result;
	};

	const generateRandomPrice = () => {
		return parseFloat((Math.random() * 100).toFixed(2));
	};

	// Base categories
	const defaultCategories = [
		"Electronics",
		"Books",
		"Clothing",
		"Furniture",
		"Toys",
	];

	// Parse query params
	const url = new URL(request.url);
	const page = parseInt(url.searchParams.get("page")) || 1;
	const limit = parseInt(url.searchParams.get("limit")) || 10;
	const categoryParam = url.searchParams.get("category");
	const userCategories = categoryParam ? categoryParam.split(",") : [];

	// Merge user-defined categories with base ones
	const allCategories = Array.from(
		new Set([...defaultCategories, ...userCategories])
	);

	const minPrice = parseFloat(url.searchParams.get("minPrice")) || 0;
	const maxPrice = parseFloat(url.searchParams.get("maxPrice")) || 10000;
	const rating = parseFloat(url.searchParams.get("rating")) || 0;
	const onSale = url.searchParams.get("onSale") === "true";
	const saleActive = url.searchParams.get("saleActive") === "true";
	const inStockOnly = url.searchParams.get("inStockOnly") === "true";
	const sort = url.searchParams.get("sort") || "price_asc";

	// Generate dummy products with full category list
	const totalProducts = 100;
	const generateDummyProduct = (id) => ({
		id,
		name: `Product ${generateRandomString(5)}`,
		description: `This is a description for Product ${generateRandomString(
			10
		)}`,
		price: generateRandomPrice(),
		originalPrice: generateRandomPrice(),
		salePrice: generateRandomPrice(),
		isOnSale: Math.random() < 0.5,
		saleStartDate: new Date().toISOString(),
		saleEndDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
		category: allCategories[Math.floor(Math.random() * allCategories.length)],
		imageUrl: `https://placehold.co/600?text=Product+${id}`,
		stock: Math.floor(Math.random() * 100),
		sku: `SKU-${generateRandomString(5)}`,
		rating: parseFloat((Math.random() * 5).toFixed(1)),
		createdAt: new Date().toISOString(),
		isAvailable: Math.random() < 0.8,
	});

	const allProducts = Array.from({ length: totalProducts }, (_, index) =>
		generateDummyProduct(index + 1)
	);

	// Filter logic
	let filteredProducts = allProducts.filter((product) => {
		const isInCategory =
			userCategories.length === 0 || userCategories.includes(product.category);
		const isInPriceRange =
			product.price >= minPrice && product.price <= maxPrice;
		const isInStock = inStockOnly ? product.stock > 0 : true;
		const isOnSaleProduct = onSale ? product.isOnSale : true;
		const isSaleActive = saleActive
			? new Date(product.saleStartDate) <= new Date() &&
			  new Date(product.saleEndDate) >= new Date()
			: true;
		const hasSufficientRating = product.rating >= rating;

		return (
			isInCategory &&
			isInPriceRange &&
			isInStock &&
			isOnSaleProduct &&
			isSaleActive &&
			hasSufficientRating
		);
	});

	// Sort logic
	switch (sort) {
		case "price_asc":
			filteredProducts.sort((a, b) => a.price - b.price);
			break;
		case "price_desc":
			filteredProducts.sort((a, b) => b.price - a.price);
			break;
		case "rating_asc":
			filteredProducts.sort((a, b) => a.rating - b.rating);
			break;
		case "rating_desc":
			filteredProducts.sort((a, b) => b.rating - a.rating);
			break;
		default:
			break;
	}

	// Pagination
	const startIndex = (page - 1) * limit;
	const endIndex = startIndex + limit;
	const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

	return new Response(
		JSON.stringify({
			data: paginatedProducts,
			meta: {
				total: filteredProducts.length,
				page,
				limit,
				totalPages: Math.ceil(filteredProducts.length / limit),
			},
		}),
		{
			headers: { "Content-Type": "application/json" },
		}
	);
}
