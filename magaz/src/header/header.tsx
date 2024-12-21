import "./header.scss"
import {Panel} from "./panel.tsx";

export const Header= ()=>{
    return (
        <div className='header'>
            <div className="logo">магаз</div>
            <div className='search'>
                <div className='icon'></div>
                <input className='search__input' placeholder={'Поиск товаров'} />
            </div>
            <Panel/>
        </div>
    )
}