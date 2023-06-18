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

