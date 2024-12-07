import {Item} from "./App.tsx";
interface ItemProps {
    item:Item
}
 export const ItemComp =  ({item}:ItemProps) =>{
    return(
        <div className={'item'} style={{height:item.height*50,width:item.width*50, backgroundImage: `url(${item.name}.png)`,backgroundSize:'cover'}}>

        </div>
    )

}