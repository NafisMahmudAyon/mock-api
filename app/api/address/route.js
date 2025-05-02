export async function GET(request) {
	const types = [
		"residential",
		"business",
		"billing",
		"shipping",
		"warehouse",
		"temporary",
		"mailing",
	];
	const names = [
		"Alice Johnson",
		"Ravi Kumar",
		"Marie Dupont",
		"Kenji Sato",
		"Fatima Al-Sayed",
		"Liam Smith",
		"Carlos Rivera",
		"Chen Wei",
		"John Doe",
		"Jane Smith",
	];
	const companies = [
		"TechNova Inc.",
		"Globex Logistics",
		"Acme Corp.",
		"FutureTech",
		"LogiPro",
		"BizWare",
	];
	const streets = [
		"Main St",
		"Market St",
		"MG Road",
		"Rue de Rivoli",
		"Minato",
		"King Street",
		"Al Olaya St",
		"High St",
		"Av. Reforma",
		"Nanjing Rd",
	];
	const buildings = [
		"Apt 4B",
		"Suite 2100",
		"Gokul Apartments",
		"Sky Tower",
		"Huangpu",
		"Akasaka",
		"Grove Complex",
		"Sunset Plaza",
		"Central Heights",
		"Maple Residency",
	];
	const cities = [
		"San Francisco",
		"New Delhi",
		"Paris",
		"Tokyo",
		"Toronto",
		"Riyadh",
		"London",
		"Mexico City",
		"Shanghai",
		"Berlin",
	];
	const states = [
		"CA",
		"Delhi",
		"Île-de-France",
		"Tokyo",
		"ON",
		"Riyadh",
		"Greater London",
		"CDMX",
		"Shanghai",
		"Berlin",
	];
	const countries = [
		"USA",
		"India",
		"France",
		"Japan",
		"Canada",
		"Saudi Arabia",
		"UK",
		"Mexico",
		"China",
		"Germany",
	];
	const zips = [
		"94105",
		"110001",
		"75004",
		"105-0001",
		"M5V 1J5",
		"11564",
		"SW1A 1AA",
		"06600",
		"200001",
		"10115",
	];

	function getRandom(arr) {
		return arr[Math.floor(Math.random() * arr.length)];
	}
	function getRandomFloat(min, max, decimals = 3) {
		return parseFloat((Math.random() * (max - min) + min).toFixed(decimals));
	}
	function generateAddress(id) {
		const type = getRandom(types);
		const base = {
			id,
			type,
			city: getRandom(cities),
			state: getRandom(states),
			zip: getRandom(zips),
			country: getRandom(countries),
			latitude: getRandomFloat(-90, 90),
			longitude: getRandomFloat(-180, 180),
		};
		if (type === "business" || type === "warehouse") {
			base.company = getRandom(companies);
			base.street = `${Math.floor(Math.random() * 1000)} ${getRandom(streets)}`;
			if (type === "business") base.suite = getRandom(buildings);
		} else {
			base.name = getRandom(names);
			base.street = `${Math.floor(Math.random() * 1000)} ${getRandom(streets)}`;
			if (["residential", "temporary"].includes(type))
				base.building = getRandom(buildings);
			if (type === "residential") base.apartment = getRandom(buildings);
			if (type === "shipping" || type === "billing")
				base.district = getRandom(buildings);
		}
		return base;
	}

	const url = new URL(request.url);
	const params = url.searchParams;
	const total = 100;
	const addresses = Array.from({ length: total }, (_, i) =>
		generateAddress(i + 1)
	);

	let filtered = addresses;
	for (const [key, value] of params.entries()) {
		if (key === "page" || key === "limit") continue;
		filtered = filtered.filter((addr) => {
			if (addr[key] === undefined) return false;
			if (typeof addr[key] === "string") {
				return addr[key].toLowerCase() === value.toLowerCase();
			}
			if (typeof addr[key] === "number") {
				return addr[key] == value;
			}
			return false;
		});
	}

	const page = parseInt(params.get("page")) || 1;
	const limit = parseInt(params.get("limit")) || 10;
	const start = (page - 1) * limit;
	const end = start + limit;
	const paginated = filtered.slice(start, end);

	return new Response(
		JSON.stringify({
			data: paginated,
			meta: {
				total: filtered.length,
				page,
				limit,
				totalPages: Math.ceil(filtered.length / limit),
			},
		}),
		{ headers: { "Content-Type": "application/json" } }
	);
}
