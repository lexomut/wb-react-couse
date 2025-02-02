

type AutocompleteProps = {
    autocompleteItems:string[]
    deleteCb:(str:string)=>void
}
export const Autocomplete=({autocompleteItems,deleteCb}:AutocompleteProps)=>{
// const [items,setItems]=useState<string[]>(autocompleteItems);
// const deleteItem=(el:string)=>{
//     setItems(items.filter(item=>item!==el));
// }

    return (
        <div className='autocomplete'>
            <div className="autocomplete__list">
                {autocompleteItems.map(item=>
                    <div className="autocomplete__item">
                        <div className="autocomplete__item-text">{item}</div>
                        <button className="autocomplete__item-remove" onClick={()=>deleteCb(item)}>
                            <div className="cross-icon"></div>
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}