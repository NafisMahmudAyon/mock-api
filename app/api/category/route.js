import { categories } from "./categoryList";

export async function GET(request) {
	const url = new URL(request.url);
	// const page = parseInt(url.searchParams.get("page")) || 1;
	const limit = parseInt(url.searchParams.get("limit")) || 5;
	const categoryParam = url.searchParams.get("category");
	// const userCategories = categoryParam ? categoryParam.split(",") : [];
	const categoryModel = url.searchParams.get("model");
  const userModel = categoryModel ? categoryModel.split(",") : [] 
	const filteredModel = categories.filter((category,i) => {
		const categoryModels = Array.isArray(userModel) ? userModel : [userModel];
		if (categoryModels.includes(category.model)) {
			return category;
		}
	});
  const allCategories = filteredModel.flatMap((element) => element.categories);
	// const filteredCategories = categories.filter((category) =>
	// 	userCategories.includes(category.name)
	// );
	// console.log(filteredModel);

  const shuffled = [...allCategories].sort(() => 0.5 - Math.random());
	let randomCategories = shuffled.slice(0, limit);

  randomCategories = randomCategories.map((category,i) => ({
    id: i+1,
		name: category.name,
		slug: category.slug,
		description: category.name + " " + "description",
	}));

	return new Response(JSON.stringify(randomCategories), {
		headers: { "Content-Type": "application/json" },
	});
}
