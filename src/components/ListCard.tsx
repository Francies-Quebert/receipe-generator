import { Link } from 'react-router-dom'
import { ingredientInterface } from '../store/useReceipe'

interface ListCardInterface {
    name: string,
    image: string,
    description?: string,
    to: string,
    btnname: string
}
function ListCard({ name, image, description, btnname, to }: ListCardInterface) {
    return (
        <Link to={to} className="group bg-white  rounded-sm cursor-pointer">
            <div className="recipe-item">
                <div className="relative rounded-t-sm transition-colors bg-gradient-from-l bg-gradient-to-b from-primary/20 to-primary/70 group-hover:to-primary">
                    <img
                        src={image}
                        alt=""
                        className="mx-auto z-0 py-10 h-[200px] w-[200px] object-contain" />
                    <div className="absolute inset-0 w-full h-full " />
                </div>
                <div className="p-5 border border-solid border-black/20">
                    <div className="recipes-title">
                        <h6 data-tooltip={name} className="text-primary font-semibold text-xl mb-5 line-clamp-1">{name}</h6>
                        <p className="line-clamp-3 text-black/70">{description}</p>
                    </div>
                    <button type="button" className="bg-primary text-white h-10 w-full rounded-sm mt-5">
                        {btnname}
                    </button>
                </div>

            </div>
        </Link>
    )
}

export default ListCard