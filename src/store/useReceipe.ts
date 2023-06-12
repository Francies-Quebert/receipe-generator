import { create } from 'zustand'
import createSelectors from '../lib/createSelectors';


interface ReceipeStoreInterface {
    receipe: any;
    setReceipe: (receipe: any) => void;
}


const useReceipeBase = create<ReceipeStoreInterface>()((set) => ({
    receipe: [],
    setReceipe: (receipe) => set({ receipe }),
}))

export const useReceipe = createSelectors(useReceipeBase)