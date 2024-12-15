import {Menu} from "./menu.tsx";
import "./header.scss"

export const Header= ()=>{
    return (
        <div className={'header'}>
            <div className={'header__title'}>'магаз'</div>
            <div className={'search'}>
                <input className={'search__input'} placeholder={'Поиск товаров'} />
            </div>
            <Menu/>
        </div>
    )
}