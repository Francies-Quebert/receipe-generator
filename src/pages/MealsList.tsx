import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useReceipe } from '../store/useReceipe';
import fetchIngredientData from '../lib/fetchIngredientData';
import ListCard from '../components/ListCard';
import Banner from '../components/Banner';

function MealsList() {
    let { name = '' } = useParams();
    const setIngredientMeals = useReceipe.use.setIngredientMeals()
    const ingredientMeals = useReceipe.use.ingredientMeals()
    const filterBy = useReceipe.use.filterBy()
    const navigate = useNavigate();


    useEffect(() => {
        async function getMealData() {
            if (!name) navigate('/')
            const data: any = await fetchIngredientData({ type: 'filter', value: { filterBy, data: name } });
            console.log({ [name]: data.meals || [] })
            setIngredientMeals({ ...ingredientMeals, [name]: data.meals || {} })
        }

        if (!ingredientMeals[name]) getMealData()
    }, [])

    return (
        ingredientMeals[name]?.length > 0 ? <div className="grid grid-flow-row grid-cols-1 md:grid-cols-4 max-w-6xl mx-auto  md:gap-5 py-24 px-8 ms:px-0">
            {ingredientMeals[name].map(data =>
                <ListCard key={data.idMeal} name={data.strMeal} image={`${data.strMealThumb}/preview`} to={`/receipe-page/${data.idMeal}`} btnname={`Preview Recipe`} />
            )}
        </div> : <><Banner /><div className='w-full h-[400px] flex items-center justify-center flex-col'>
            <div className='text-2xl'>{name} Not Found </div>
            <Link to='/' className='text-primary underline '>
                Click here to go back
            </Link>
        </div></>
    )
}

export default MealsList