import { useEffect } from 'react'
import { useReceipe } from '../store/useReceipe';
import { useParams } from 'react-router-dom';
import fetchReceipeData from '../lib/fetchReceipeData';
import cleanMealData, { MealDataInterface } from '../lib/cleanMealData';
import Image from '../assets/yt.png'


function ReceipePage() {
  let { receipeId = '' } = useParams();
  const setMeals = useReceipe.use.setMeals()
  const meals = useReceipe.use.meals()

  async function getMealData() {
    if (!receipeId) return;
    const data: any = await fetchReceipeData(receipeId)
    const cData: MealDataInterface = await cleanMealData(data.meals[0])
    console.log(cData, 'cData')
    setMeals([...meals, cData])
  }

  useEffect(() => {
    getMealData()
  }, [])

  const meal = meals.find(data => data.idMeal === receipeId)
  return (
    meal ?
      <section id='meal'>
        <div className=' grid grid-flow-row md:grid-cols-2 max-w-6xl mx-auto gap-16 my-10 px-8 ms:px-0'>
          <div className='my-auto'>
            <a href={meal.strYoutube} target='_blank' className='w-full h-[500px] relative '>
              <img
                alt='meal image'
                src={meal.strMealThumb}
                className='rounded-md object-cover w-full h-[500px] ' />
              <div className='absolute inset-0 bg-gradient-from-l bg-black/40'>
                <img
                  src={Image}
                  alt='youtube'
                  className='absolute text-center mx-auto w-20 top-[50%] left-[50%] tra -translate-x-2/4 -translate-y-2/4'
                />

                <h1 className='absolute top-5 left-5 text-xl pb-8 text-white'>{meal.strMeal}</h1>
              </div>

            </a>
            <div className='flex w-full pb-5 mt-10'>
              <div className='font-bold text-primary/70 w-32'>Area</div>
              <div className='flex-1 text-left'>{meal.strArea}</div>
            </div>
            <div className='flex w-full pb-5'>
              <div className='font-bold text-primary/70 w-32'>Category</div>
              <div className='flex-1 text-left'>{meal.strCategory}</div>
            </div>
            {meal.strTags && <div className='flex w-full  pb-5'>
              <div className='font-bold text-primary/70 w-32'>Tags</div>
              <div className='flex-1 flex flex-row gap-6 flex-wrap'>
                {meal.strTags ? meal.strTags.split(',').map(val => val ?
                  <div className='bg-accent-bg rounded-md px-5 py-2'>{val}</div> : '') : ''}
              </div>
            </div>}
          </div>
          <div className=''>
            <h1 className='text-4xl pb-8'>Recipe Instructions</h1>
            <p className='text-black/70 border-b-2 border-solid border-accent-bg pb-8 mb-8'>{meal.strInstructions}</p>

          </div>
          <div>
            <h2 className='text-4xl pb-8'>Ingredients</h2>
            <div>
              <ul className=''>
                {meal.ingredients.map(ing =>
                  <li>
                    <div className='flex'>
                      <div className='text-black/70'>{ing.name}</div>
                      <div className='flex-1 text-right text-primary font-bold'>{ing.measure}</div>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

      </section> : <>'Not Found'</>
  )
}

export default ReceipePage