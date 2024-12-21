import {Categories} from "../categories/Categories.tsx";
import {MagazData} from "../App.tsx";

export const MainPage = ({data}: {data: MagazData })=>{
    return(
        <>
            <div className={'banner'}></div>
            <Categories categories={data.categories}/>
        </>
    )
}