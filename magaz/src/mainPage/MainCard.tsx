import {MagazData, MainContentItem} from "../App.tsx";
import useIsMobile from "../tools/isMobile.ts";


const imageTypes:{[key:string]:{num:number,className:string}} = {
    "1": {num: 1, className: "one"},
    "2": {num: 2, className: "duble"},
    "3/1": {num: 2, className: "three"},
    "4": {num: 4, className: "quadro"},

}

function Price(props: { cost: number }) {
    return (
        <div className="price">
            <div className="price__now">{props.cost}₽</div>
            <div className="price__old">{props.cost*2}₽</div>
        </div>

    );
}


export const MainCard = ({data, magazDta}: { data: MainContentItem, magazDta: MagazData }) => {
    const itemData = magazDta.items.find(el => el.name.startsWith(data.item))
    const ismobile = useIsMobile()
    const arr= [...Array(imageTypes[data.type]?.num)]


    if (!itemData) return null

    return (
        <div className='main-card'>
            <div className="main-card__discont">-50%</div>
            <div className="main-card__badge">осенний сейл</div>
            <div className={`main-card__pictures ${imageTypes[data.type]?.className}`}>
                {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    arr.map((u,i)=> <div className='main-card__image' key={i} style={{backgroundImage: `url("${itemData.name}.png")`, backgroundColor:data.background}}></div>)}
            </div>
            <div className="main-card__info">
                <div className='main-card__description'>
                    <div className='main-card__title'>
                        <span>{data.item}</span>
                        {!ismobile && <button className='main-card__toFavirites'></button>}
                    </div>
                    <div className='main-card__details'>{itemData.description}</div>
                </div>
                <div className='main-card__right'>
                    <div className='main-card__digit'>
                        <Price cost={itemData.price}/>
                        <div className='main-card__proof'>
                            <div className='main-card__rating'>{itemData.rating}</div>
                            <div className='main-card__like'>{itemData.like}</div>
                        </div>
                    </div>

                    {!ismobile && <button className='main-card__toChart'>В корзину</button>}
                </div>
                {ismobile && <div className="main-card__bottom-mobile">
                    <button className='main-card__toChart'>В корзину</button>
                    <button className='main-card__toFavirites'></button>
                </div>}

            </div>
        </div>
    )
}