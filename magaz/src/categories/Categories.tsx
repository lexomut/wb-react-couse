import {CategoryItem} from "./categoryItem.tsx";
import {CategoryData} from "../App.tsx";
import './categories.scss'

export function Categories({categories}:{categories:CategoryData[]}) {
    return (
        <div className='categories'>
            {categories.map((category,index)=><CategoryItem category={category} key={index} />)}

        </div>
    )
}
