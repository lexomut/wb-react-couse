import {Item} from "../App.tsx";
import {Price} from "../mainPage/MainCard.tsx";
import './catalogCart.scss'

export const CatalogCard = ({item}: { item: Item }) => {
    return (
        <div className='card'>
            <button className='card__toFavirites'></button>

            <div className='card__image'
                 style={{backgroundImage: `url("${item.name}.png")`, backgroundColor: item.background_color}}></div>
            <div className="card__info">
                <Price cost={item.price}/>
                <div className='card__proof'>
                    <div className='card__rating'>{item.rating}</div>
                    <div className='card__like'>{item.like}</div>
                </div>
                <div className='card__title'>
                    <span>{item.name}</span>
                </div>
            </div>
            <button className='card__toChart'>В корзину</button>
        </div>
    )
}