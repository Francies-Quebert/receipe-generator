type fetchIngredientDataParam = {
    type: 'list' | 'filter' | 'page';
    value: { filterBy: string, data?: string };
}

const defaultUrl = 'https://www.themealdb.com/api/json/v1/1'

async function fetchIngredientData({ type, value }: fetchIngredientDataParam) {

    let url: RequestInfo | URL = `${defaultUrl}/list.php?${value.filterBy}=list`

    if (type === 'filter' && value.data) url = `${defaultUrl}/filter.php?i=${value.data}`

    const data: any = await fetch(url).then(res => res.json());


    return data;
}

export default fetchIngredientData