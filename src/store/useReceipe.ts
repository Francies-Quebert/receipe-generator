import { create } from 'zustand'
import createSelectors from '../lib/createSelectors';


const useReceipeBase = create<ReceipeStoreInterface>()((set) => ({
    ingredients: [],
    setIngredient: (ingredients: ingredientInterface[]) => set({ ingredients }),

    ingredientMeals: {},
    setIngredientMeals: (ingredientMeals: IngredientMeals) => set({ ingredientMeals }),

    meals: [],
    setMeals: (meals: MealDataInterface[]) => set({ meals }),

    filterReceipe: null,
    setFilterReceipe: (filterReceipe: string | null) => set({ filterReceipe }),

    filterBy: 'i',
    setFilterBy: (filterBy: string) => set({ filterBy }),

}))


export const useReceipe = createSelectors(useReceipeBase)

