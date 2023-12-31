import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Image from '../assets/banner.jpg'
import {  useReceipe } from '../store/useReceipe'
import CustomSelect from './CustomSelect'
import { useState, useEffect } from 'react'
import { DefaultOptionType } from 'rc-select/lib/Select'
import { fetchIngredientData } from '../lib/fetchIngredientData'

const Banner = () => {
    const filterReceipe = useReceipe.use.filterReceipe();
    const setFilterReceipe = useReceipe.use.setFilterReceipe();
    const setIngredient = useReceipe.use.setIngredient()
    const ingredients = useReceipe.use.ingredients();
    const filterBy = useReceipe.use.filterBy()

    const [options, setOptions] = useState<DefaultOptionType[]>(ingredients.slice(0, 10).map((ing: ingredientInterface) => ({
        label: ing.strIngredient,
        value: ing.strIngredient,
        desc: ing.strDescription,
    })));
    const [loading, setLoading] = useState<boolean>(false);

    const navigate = useNavigate();
    const location = useLocation();
    const { name } = useParams();


    useEffect(() => {

        if (location.pathname.includes('/meals') && !name) navigate('/')
        setLoading(true)
        getReceipeData()
    }, [])

    async function getReceipeData() {
        try {
            if (ingredients.length > 0) return;
            const { meals }: fetchIngredientsTypes = await fetchIngredientData({ value: { filterBy } });

            setIngredient(meals)
            const opt = await updateOptions(meals)
            setOptions(opt)
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false)
        }
    }

    function onFilterSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        navigate(`/meals/${filterReceipe}`)
        setFilterReceipe(null)
    }

    async function onSearchIngredient(val: string,ingredientsArr:ingredientInterface[]) {
        const data: DefaultOptionType[] = await updateOptions(ingredientsArr, val)
        setOptions(data);
        setFilterReceipe(val ? val : null)
    }

    function updateOptions(data: ingredientInterface[], filter?: string) {
        return new Promise<DefaultOptionType[]>(async (resolve, reject) => {
            try {
                
                const optiondata = data
                    .filter((fl) => filter ? `${fl.strIngredient} ${fl.strDescription}`.toLowerCase().includes(filter.toLowerCase()) : true)
                    .map((ing) => ({
                        label: ing.strIngredient,
                        value: ing.strIngredient,
                        desc: `${ing.strIngredient} ${ing.strDescription}`,

                    })).slice(0, 20)
                resolve(optiondata)
            } catch (error) {
                reject(error)
            }
        })

    }

    return (
        <section className="banner relative text-white">
            <img src={Image} alt='banner image' className="w-full object-cover absolute top-0 left-0 -z-10 h-full" loading="eager" />
            <div className="h-full text-center py-36">
                <h1 className="text-3xl font-bold pb-10">
                    Find Meals By Ingredient
                </h1>
                <p className="max-w-[550px] mx-auto pb-10">
                    Aenean tellus ligula, pellentesque sit amet luctus eget, posuere eget sapien. Proin ultricies vestibulum sem non lobortis.
                </p>
                <div className="w-full mx-auto sm:w-96 ">
                    <form onSubmit={onFilterSubmit} className='flex justify-center w-full'>
                        <CustomSelect
                            loading={ingredients.length <= 0 || loading}
                            placeholder='Find Ingredient...'
                            className='text-black'
                            style={{ minWidth: 300 }}
                            removeIcon={true}
                            optionFilterProp="desc"
                            defaultActiveFirstOption={false}
                            onSearch={(val)=>onSearchIngredient(val,ingredients)}
                            onChange={(val => setFilterReceipe(val))}
                            options={options}
                            notFoundContent='Ingredients Not Found'
                            value={filterReceipe}
                            showSearch
                            autoFocus
                        />
                        <button disabled={loading} type="submit" className="bg-primary text-white h-10 w-[100px] rounded-r-sm outline-none">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Banner