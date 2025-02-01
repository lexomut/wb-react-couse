import {MagazData} from "../App.tsx";

type AutocompleteProps = {
    items:string[]
    data?:MagazData
}
export const Autocomplete=({items}:AutocompleteProps)=>{
    return (
        <div className='autocomplete'>
            <div className="autocomplete__list">
                {items.map(item=>
                    <div className="autocomplete__item">
                        <div className="autocomplete__item-text">{item}</div>
                        <button className="autocomplete__item-remove">
                            <div className="cross-icon"></div>
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}