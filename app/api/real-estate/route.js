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

	const generateRandomNumber = (min, max) =>
		Math.floor(Math.random() * (max - min + 1)) + min;

	const defaultCities = [
		"New York",
		"Los Angeles",
		"London",
		"Tokyo",
		"Paris",
		"Dubai",
	];
	const defaultCountries = ["USA", "UK", "Japan", "France", "UAE"];
	const propertyTypes = [
		"Apartment",
		"Villa",
		"Cottage",
		"Studio",
		"Penthouse",
	];
	const defaultAmenities = [
		"Pool",
		"Gym",
		"Parking",
		"Wi-Fi",
		"Garden",
		"Security",
	];

	const generateRandomAmenities = (amenitiesList) => {
		const count = generateRandomNumber(2, 5);
		const shuffled = [...amenitiesList].sort(() => 0.5 - Math.random());
		return shuffled.slice(0, count);
	};

	const getRandomImageUrl = async (query, limit) => {
		try {
			const res = await fetch(
				`https://api.pexels.com/v1/search?query=${encodeURIComponent(
					query
				)}&per_page=${limit}`,
				{
					headers: {
						Authorization: process.env.NEXT_PUBLIC_PEXELS_API_KEY,
					},
				}
			);
			const data = await res.json();
			return data.photos.map((item) => item.src.medium); // use actual image URLs
		} catch (err) {
			return Array.from(
				{ length: limit },
				(_, i) => `https://placehold.co/600x400?text=${query}+${i + 1}`
			);
		}
	};

	const url = new URL(request.url);
	const pageParam = url.searchParams.get("page");
	const isAll = pageParam === "all";
	const page = isAll ? 1 : parseInt(pageParam) || 1;
	const limit = parseInt(url.searchParams.get("limit")) || 10;

	// Filters
	const locationParam = url.searchParams.get("location") || "";
	const countryParam = url.searchParams.get("country") || "";
	const propertyTypeParam = url.searchParams.get("propertyType") || "";
	const minPrice = parseFloat(url.searchParams.get("minPrice")) || 0;
	const maxPrice = parseFloat(url.searchParams.get("maxPrice")) || 10000000;
	const minBedrooms = parseInt(url.searchParams.get("minBedrooms")) || 0;
	const maxBedrooms = parseInt(url.searchParams.get("maxBedrooms")) || 10;
	const amenityParam = url.searchParams.get("amenity") || "";

	let cities = [...defaultCities];
	if (locationParam && !cities.includes(locationParam))
		cities.push(locationParam);

	let countries = [...defaultCountries];
	if (countryParam && !countries.includes(countryParam))
		countries.push(countryParam);

	let amenitiesList = [...defaultAmenities];
	if (amenityParam && !amenitiesList.includes(amenityParam))
		amenitiesList.push(amenityParam);

	// Wait for images before generating properties
	const imageArray = await getRandomImageUrl("house real estate", limit);

	const generateProperty = async (id, index) => {
		return {
			id,
			propertyName: `Property ${generateRandomString(6)}`,
			location: cities[generateRandomNumber(0, cities.length - 1)],
			country: countries[generateRandomNumber(0, countries.length - 1)],
			propertyType:
				propertyTypes[generateRandomNumber(0, propertyTypes.length - 1)],
			bedrooms: generateRandomNumber(1, 6),
			bathrooms: generateRandomNumber(1, 4),
			area: generateRandomNumber(500, 5000),
			price: parseFloat((Math.random() * 1000000 + 50000).toFixed(2)),
			listingDate: new Date(
				Date.now() - generateRandomNumber(0, 30) * 86400000
			).toISOString(),
			agentName: `${generateRandomString(5)} ${generateRandomString(7)}`,
			contactEmail: `${generateRandomString(5).toLowerCase()}@example.com`,
			amenities: generateRandomAmenities(amenitiesList),
			imageUrl: imageArray[index],
		};
	};

	const propertyPromises = Array.from({ length: limit }, (_, index) =>
		generateProperty(index + 1, index)
	);
	const allListings = await Promise.all(propertyPromises);

	const filteredListings = allListings.filter((listing) => {
		return (
			(locationParam ? listing.location === locationParam : true) &&
			(countryParam ? listing.country === countryParam : true) &&
			(propertyTypeParam ? listing.propertyType === propertyTypeParam : true) &&
			(amenityParam ? listing.amenities.includes(amenityParam) : true) &&
			listing.price >= minPrice &&
			listing.price <= maxPrice &&
			listing.bedrooms >= minBedrooms &&
			listing.bedrooms <= maxBedrooms
		);
	});

	const paginatedListings = isAll
		? filteredListings
		: filteredListings.slice((page - 1) * limit, page * limit);

	return new Response(
		JSON.stringify({
			data: paginatedListings,
			meta: {
				total: filteredListings.length,
				page: isAll ? "all" : page,
				limit: isAll ? filteredListings.length : limit,
				totalPages: isAll ? 1 : Math.ceil(filteredListings.length / limit),
			},
		}),
		{ headers: { "Content-Type": "application/json" } }
	);
}
