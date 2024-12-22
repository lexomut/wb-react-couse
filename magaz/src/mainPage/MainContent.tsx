import {MagazData, MainContentItem} from "../App.tsx";
import {MainCard} from "./MainCard.tsx";

export const MainContent=({mainContentData,data}:{mainContentData:MainContentItem[],data:MagazData})=>{
    console.log("mainContentData",mainContentData);
    if (!mainContentData)return null;

    return (
        <div className='mainContent'>
            {mainContentData.map((good,index)=>{
                // if(good.type==='many') {
                //     return <ItemsSet item={good.item}/ />
                // }
                return <MainCard key={index} magazDta={data} data={good}/>
            })}
        </div>
    )
}