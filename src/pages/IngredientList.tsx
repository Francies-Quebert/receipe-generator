import { useEffect, useState } from "react"
import { useReceipe } from "../store/useReceipe";
import fetchIngredientData from "../lib/fetchIngredientData";
import Banner from "../components/Banner";
import ListCard from "../components/ListCard";
import Loading from "../components/Loading";

function IngredientList() {
    const setIngredient = useReceipe.use.setIngredient()
    const ingredients = useReceipe.use.ingredients()
    const filterBy = useReceipe.use.filterBy()
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true)
        getReceipeData()

    }, [])

    async function getReceipeData() {
        try {
            if (ingredients.length > 0) return;
            const data: any = await fetchIngredientData({ type: 'list', value: { filterBy } });
            setIngredient({ ingredients: data.meals })
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false)
        }

    }

    if (loading) return <Loading />;

    return (
        <div>
            <Banner />
            <section id="ingredient-list" className="grid grid-flow-row grid-cols-1 md:grid-cols-4 max-w-6xl mx-auto md:gap-5 py-24 px-8 ms:px-0">
                {ingredients.map(data =>
                    <ListCard
                        key={data.idIngredient}
                        to={`/meals/${data.strIngredient}`}
                        name={data.strIngredient}
                        image={`https://www.themealdb.com/images/ingredients/${data.strIngredient}-Small.png`}
                        description={data.strDescription}
                        btnname={"Find Meals"} />)}
            </section>

        </div >
    )
}

export default IngredientList