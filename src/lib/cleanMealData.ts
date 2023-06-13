export interface MealDataInterface {
    ingredients: Ingredient[]
    idMeal: string
    strMeal: string
    strDrinkAlternate: string | null
    strCategory: string
    strArea: string
    strInstructions: string
    strMealThumb: string
    strTags: string
    strYoutube: string
    strSource: string | null
    strImageSource: string | null
    strCreativeCommonsConfirmed: string | null
    dateModified: string | null
}

export interface Ingredient {
    name: string
    measure: string
}

export default function cleanMealData(data: any) {
    const newData: MealDataInterface = {
        ingredients: [],
        idMeal: '',
        strMeal: '',
        strDrinkAlternate: null,
        strCategory: '',
        strArea: '',
        strInstructions: '',
        strMealThumb: '',
        strTags: '',
        strYoutube: '',
        strSource: null,
        strImageSource: null,
        strCreativeCommonsConfirmed: null,
        dateModified: null,
    }
    for (const key in data) {
        const match = key.match(/\d+/)
        const num = match ? match[0] : ''
        if (key.includes('strIngredient')) {
            if (data[key]) newData['ingredients'].push({ name: data[key], measure: data[`strMeasure${num}`] })
        }
        else {
            if (!key.includes('strMeasure')) (newData as any)[key]  = data[key]
        }
    }
    return newData

}

// {
//     "ingredients": [
//         {
//             "name": "Salmon",
//             "measure": "1 lb"
//         },
//         {
//             "name": "Olive oil",
//             "measure": "1 tablespoon"
//         },
//         {
//             "name": "Soy Sauce",
//             "measure": "2 tablespoons"
//         },
//         {
//             "name": "Sake",
//             "measure": "2 tablespoons"
//         },
//         {
//             "name": "Sesame Seed",
//             "measure": "4 tablespoons"
//         }
//     ],
//     "idMeal": "52773",
//     "strMeal": "Honey Teriyaki Salmon",
//     "strDrinkAlternate": null,
//     "strCategory": "Seafood",
//     "strArea": "Japanese",
//     "strInstructions": "Mix all the ingredients in the Honey Teriyaki Glaze together. Whisk to blend well. Combine the salmon and the Glaze together.\r\n\r\nHeat up a skillet on medium-low heat. Add the oil, Pan-fry the salmon on both sides until it’s completely cooked inside and the glaze thickens.\r\n\r\nGarnish with sesame and serve immediately.",
//     "strMealThumb": "https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg",
//     "strTags": "Fish,Breakfast,DateNight",
//     "strYoutube": "https://www.youtube.com/watch?v=4MpYuaJsvRw",
//     "strSource": null,
//     "strImageSource": null,
//     "strCreativeCommonsConfirmed": null,
//     "dateModified": null
// }