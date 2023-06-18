import { getImageData } from "./getImageData";

type fetchIngredientDataParam = {
    value: { filterBy: string, data?: string };
}


const defaultUrl = 'https://www.themealdb.com/api/json/v1/1'

async function fetchIngredientData({ value }: fetchIngredientDataParam) {

    let url: RequestInfo | URL = `${defaultUrl}/list.php?${value.filterBy}=list`
    let { meals }: { meals: ingredientInterface[] } = await fetch(url).then(res => res.json());

    return { meals }
}

async function fetchingredientFiltersData({ value }: fetchIngredientDataParam) {

    let url: RequestInfo | URL = `${defaultUrl}/filter.php?i=${value.data}`


    let { meals }: { meals: MealsListData[] } = await fetch(url).then(res => res.json());
    // let imgUrl: { name: string, url: string }[] = []

    // for (const key in meals) {
    //     imgUrl.push({ name: meals[key].idMeal, url: `${meals[key].strMealThumb}/preview` })
    // }
   
    return { meals }
}

export { fetchIngredientData, fetchingredientFiltersData }