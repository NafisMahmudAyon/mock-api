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

	const firstNames = [
		"Alice",
		"Ravi",
		"Fatima",
		"Liam",
		"Sakura",
		"Marie",
		"Carlos",
		"Chen",
		"John",
		"Jane",
	];
	const lastNames = [
		"Johnson",
		"Kumar",
		"Al-Sayed",
		"Smith",
		"Tanaka",
		"Dupont",
		"Rivera",
		"Wei",
		"Doe",
		"Smith",
	];
	const nationalities = [
		"American",
		"Indian",
		"Saudi",
		"British",
		"Japanese",
		"French",
		"Mexican",
		"Chinese",
		"Canadian",
		"German",
	];
	const occupations = [
		"Software Engineer",
		"Teacher",
		"Marketing Manager",
		"Photographer",
		"UI Designer",
		"Doctor",
		"Chef",
		"Architect",
		"Writer",
		"Pilot",
	];
	const statuses = ["active", "inactive"];
	const genders = ["Male", "Female"];
	const streets = [
		"123 Main St",
		"45 MG Road",
		"Al Olaya St",
		"22 High St",
		"3-14-5 Minato",
		"Rue de Rivoli",
		"King Street",
		"Sunset Plaza",
		"Central Heights",
		"Maple Residency",
	];
	const cities = [
		"San Francisco",
		"Delhi",
		"Riyadh",
		"London",
		"Tokyo",
		"Paris",
		"Mexico City",
		"Shanghai",
		"Toronto",
		"Berlin",
	];
	const states = [
		"CA",
		"Delhi",
		"Riyadh",
		"England",
		"Tokyo",
		"Île-de-France",
		"CDMX",
		"Shanghai",
		"ON",
		"Berlin",
	];
	const zips = [
		"94105",
		"110001",
		"11564",
		"SW1A 1AA",
		"105-0001",
		"75004",
		"06600",
		"200001",
		"M5V 1J5",
		"10115",
	];
	const countries = [
		"USA",
		"India",
		"Saudi Arabia",
		"UK",
		"Japan",
		"France",
		"Mexico",
		"China",
		"Canada",
		"Germany",
	];

	// Use randomuser.me for avatars
	// const genderPath = gender === "Female" ? "women" : "men";
	// return `https://randomuser.me/api/portraits/${genderPath}/${index % 100}.jpg`;

	const getRandomImageUrl = async (gender, index) => {
		try {
			const query = gender === "Female" ? `woman portrait ${index}` : `man portrait ${index}`;
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
				return data.photos[0].src.medium;
			}
			return `https://placehold.co/400x400?text=${query.replace(/ /g, "+")}+${
				index + 1
			}`;
		} catch (err) {
			return `https://placehold.co/400x400?text=${gender}+${index + 1}`;
		}
	};

	const url = new URL(request.url);
	const pageParam = url.searchParams.get("page");
	const isAll = pageParam === "all";
	const page = isAll ? 1 : parseInt(pageParam) || 1;
	const limit = parseInt(url.searchParams.get("limit")) || 10;

	// Filters
	const firstNameParam = url.searchParams.get("first_name") || "";
	const lastNameParam = url.searchParams.get("last_name") || "";
	const emailParam = url.searchParams.get("email") || "";
	const phoneParam = url.searchParams.get("phone") || "";
	const genderParam = url.searchParams.get("gender") || "";
	const nationalityParam = url.searchParams.get("nationality") || "";
	const occupationParam = url.searchParams.get("occupation") || "";
	const statusParam = url.searchParams.get("status") || "";
	const cityParam = url.searchParams.get("city") || "";
	const countryParam = url.searchParams.get("country") || "";

	const generatePerson = async (id, index) => {
		const gender = genders[generateRandomNumber(0, genders.length - 1)];
		const first_name =
			firstNames[generateRandomNumber(0, firstNames.length - 1)];
		const last_name = lastNames[generateRandomNumber(0, lastNames.length - 1)];
		const nationality =
			nationalities[generateRandomNumber(0, nationalities.length - 1)];
		const occupation =
			occupations[generateRandomNumber(0, occupations.length - 1)];
		const status = statuses[generateRandomNumber(0, statuses.length - 1)];
		const dobYear = generateRandomNumber(1970, 2000);
		const dobMonth = ("0" + generateRandomNumber(1, 12)).slice(-2);
		const dobDay = ("0" + generateRandomNumber(1, 28)).slice(-2);
		const dob = `${dobYear}-${dobMonth}-${dobDay}`;
		const age = new Date().getFullYear() - dobYear;
		const city = cities[generateRandomNumber(0, cities.length - 1)];
		const state = states[generateRandomNumber(0, states.length - 1)];
		const zip = zips[generateRandomNumber(0, zips.length - 1)];
		const country = countries[generateRandomNumber(0, countries.length - 1)];
		const street = streets[generateRandomNumber(0, streets.length - 1)];
		const email = `${first_name.toLowerCase()}.${last_name.toLowerCase()}@example.com`;
		const phone = `+1-202-555-${generateRandomNumber(1000, 9999)}`;
		const avatar = await getRandomImageUrl(gender, id);
		return {
			id,
			first_name,
			last_name,
			email,
			phone,
			gender,
			dob,
			age,
			nationality,
			occupation,
			address: {
				street,
				city,
				state,
				zip,
				country,
			},
			avatar,
			status,
		};
	};

	const personPromises = Array.from({ length: limit }, (_, index) =>
		generatePerson(index + 1 + (page - 1) * limit, index)
	);
	const allPersons = await Promise.all(personPromises);

	const filteredPersons = allPersons.filter((person) => {
		return (
			(firstNameParam
				? person.first_name.toLowerCase() === firstNameParam.toLowerCase()
				: true) &&
			(lastNameParam
				? person.last_name.toLowerCase() === lastNameParam.toLowerCase()
				: true) &&
			(emailParam
				? person.email.toLowerCase() === emailParam.toLowerCase()
				: true) &&
			(phoneParam ? person.phone === phoneParam : true) &&
			(genderParam
				? person.gender.toLowerCase() === genderParam.toLowerCase()
				: true) &&
			(nationalityParam
				? person.nationality.toLowerCase() === nationalityParam.toLowerCase()
				: true) &&
			(occupationParam
				? person.occupation.toLowerCase() === occupationParam.toLowerCase()
				: true) &&
			(statusParam
				? person.status.toLowerCase() === statusParam.toLowerCase()
				: true) &&
			(cityParam
				? person.address.city.toLowerCase() === cityParam.toLowerCase()
				: true) &&
			(countryParam
				? person.address.country.toLowerCase() === countryParam.toLowerCase()
				: true)
		);
	});

	const paginatedPersons = isAll
		? filteredPersons
		: filteredPersons.slice((page - 1) * limit, page * limit);

	return new Response(
		JSON.stringify({
			data: paginatedPersons,
			meta: {
				total: filteredPersons.length,
				page: isAll ? "all" : page,
				limit: isAll ? filteredPersons.length : limit,
				totalPages: isAll ? 1 : Math.ceil(filteredPersons.length / limit),
			},
		}),
		{ headers: { "Content-Type": "application/json" } }
	);
}
