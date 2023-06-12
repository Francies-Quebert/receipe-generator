import { useEffect } from "react"
import { useLoaderData } from "react-router";
import { useReceipe } from "../store/useReceipe";

function ReceipeList() {
    const setReceipe = useReceipe.use.setReceipe()
    const receipe = useReceipe.use.receipe()
    useEffect(() => {
        console.log(receipe)
        async function getReceipeData() {
            const data: any = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list').then(res => res.json());
            setReceipe(data)
        }
        if (receipe.length <= 0) getReceipeData()

    }, [])

    return (
        <div>Receipe List</div>
    )
}

export default ReceipeList