import { useNavigate } from 'react-router-dom'
import Image from '../assets/banner.jpg'
import fetchReceipeData from '../lib/fetchIngredientData'
import { useReceipe } from '../store/useReceipe'

const Banner = () => {
    const filterReceipe = useReceipe.use.filterReceipe()
    const setFilterReceipe = useReceipe.use.setFilterReceipe()
    const navigate = useNavigate();
{/* commented incase data is filtered accoring to  filter type*/}
    // const filterBy = useReceipe.use.filterBy()
    // const setFilterBy = useReceipe.use.setFilterBy()

    function onFilterSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        navigate(`/meals/${filterReceipe}`)
        setFilterReceipe('')
        // async function getFilteredReceipe() {
        //     const data: any = await fetchReceipeData({ type: 'filter', value: { filterBy:'i', data: filterReceipe } });;
        // }
        // getFilteredReceipe()
    }

    const filterType = [
        { name: 'Category', value: 'c' },
        { name: 'Main Ingredient', value: 'i' },
        { name: 'Area', value: 'a' },
    ]

    return (
        <section className="banner relative text-white">
            <img src={Image} alt='banner image' className="w-full object-cover absolute top-0 left-0 -z-10 h-full" />
            <div className="h-full text-center py-36">
                <h1 className="text-3xl font-bold pb-10">
                    Find Ingredient
                </h1>
                <p className="max-w-[550px] mx-auto pb-10">
                    Aenean tellus ligula, pellentesque sit amet luctus eget, posuere eget sapien. Proin ultricies vestibulum sem non lobortis.
                </p>
                <div className="w-full mx-auto sm:w-96 ">
                    <form onSubmit={onFilterSubmit} className='flex justify-center w-full'>
                        {/* commented incase data is filtered accoring to  filter type*/}
                        {/* <div className=''>
                            <select
                                title='filter by'
                                value={filterBy}
                                className="px-8 h-10 rounded-sm outline-none my-4 text-black/70 "
                                placeholder='Filter By'
                                onChange={e => setFilterBy(e.target.value)}
                            >
                                {filterType.map(({ name, value }) => <option key={value} value={value}>{name}</option>)}
                            </select>
                        </div> */}
                        <input
                            type="text"
                            placeholder="Find Ingredient..."
                            className="px-5 h-10 rounded-l-sm outline-none text-black"
                            value={filterReceipe}
                            onChange={(e) => setFilterReceipe(e.target.value)} />
                        <button type="submit" className="bg-primary text-white h-10 w-[100px] rounded-r-sm outline-none">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Banner