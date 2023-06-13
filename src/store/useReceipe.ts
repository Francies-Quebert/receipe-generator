import { create } from 'zustand'
import createSelectors from '../lib/createSelectors';
import { MealDataInterface } from '../lib/cleanMealData';


export interface ingredientInterface {
    "idIngredient": string,
    "strIngredient": string,
    "strDescription": string,
    "strType": null | string
}

interface categoryInterface {
    "strCategory": string,
}

interface areaInterface {
    "strArea": string,
}

interface IngredientMeals {
    [key: string]: {
        "strMeal": string,
        "strMealThumb": string,
        "idMeal": string
    }[]
}

interface ReceipeStoreInterface {
    ingredients: ingredientInterface[],
    setIngredient: (ingredients: any) => void,

    category: categoryInterface[],
    setCategory: (category: categoryInterface) => void,

    area: areaInterface[],
    setArea: (area: areaInterface) => void,

    ingredientMeals: IngredientMeals,
    setIngredientMeals: (ingredientMeals: IngredientMeals) => void,

    meals: MealDataInterface[],
    setMeals: (meals: MealDataInterface[]) => void,

    filterReceipe: string;
    setFilterReceipe: (filterReceipe: string) => void;

    filterBy: string;
    setFilterBy: (filterBy: string) => void;

}


const useReceipeBase = create<ReceipeStoreInterface>()((set, get) => ({
    ingredients: [],
    setIngredient: (ingredients: any) => set(ingredients),

    category: [],
    setCategory: (category: any) => set(category),

    area: [],
    setArea: (area: any) => set(area),

    ingredientMeals: {},
    setIngredientMeals: (ingredientMeals: any) => set({ ingredientMeals }),

    meals: [],
    setMeals: (meals: any) => set({ meals }),

    filterReceipe: '',
    setFilterReceipe: (filterReceipe: string) => set({ filterReceipe }),

    filterBy: 'i',
    setFilterBy: (filterBy: string) => set({ filterBy }),

}))

export const useReceipe = createSelectors(useReceipeBase)

