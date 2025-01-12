import "./header.scss"
import {Panel} from "../panel/panel.tsx";
import useIsMobile from "../tools/isMobile.ts";

export const Header= ()=>{
    const isMobile=useIsMobile()
    return (
        <div className='header'>
            <div className="logo">магаз</div>
            <div className='search'>
                <div className='icon'></div>
                <input className='search__input' placeholder={'Поиск товаров'} />
            </div>
            {!isMobile &&   <Panel/> }

        </div>
    )
}