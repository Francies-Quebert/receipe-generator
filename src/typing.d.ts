declare interface IngredientMeals {
    [key: string]: MealsListData[]
}


declare interface ingredientInterface {
    "idIngredient": string,
    "strIngredient": string,
    "strDescription": string,
    "strType": null | string,
    'src'?: string | null
}

declare interface MealsListData {
    "strMeal": string,
    "strMealThumb": string,
    "idMeal": string
}


declare type fetchIngredientsTypes = {
    meals: ingredientInterface[];
}

declare type fetchMealsTypes = {
    meals: MealsListData[];
}

declare interface ReceipeStoreInterface {
    ingredients: ingredientInterface[],
    setIngredient: (ingredients: ingredientInterface[]) => void,

    ingredientMeals: IngredientMeals,
    setIngredientMeals: (ingredientMeals: IngredientMeals) => void,

    meals: MealDataInterface[],
    setMeals: (meals: MealDataInterface[]) => void,

    filterReceipe: string | null;
    setFilterReceipe: (filterReceipe: string | null) => void;

    filterBy: string;

}


declare interface MealDataInterface {
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

declare interface Ingredient {
    name: string
    measure: string
}


declare interface ListCardInterface {
    name: string,
    image: string,
    description?: string,
    to: string,
    btnname: string,
    titleLineClamp?: string
    minHeight?: string
}

declare interface ImageStoreInterface {
    imgData: imgDataType;
    setImgData: (imgData: imgDataType) => void
}