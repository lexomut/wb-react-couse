import "./header.scss"
import "./searchPopup.scss"
import {Panel} from "../panel/panel.tsx";
import useIsMobile from "../tools/isMobile.ts";
import {useEffect, useRef, useState} from "react";
import {Autocomplete} from "./Autocomplete.tsx";
import {MagazData} from "../App.tsx";
import {Categories} from "../categories/Categories.tsx";
import * as React from "react";

export const Header = ({data}:{data:MagazData}) => {
    const isMobile = useIsMobile()
    const [searchPopupVisible, showSearch] = useState(false)
    const [inputWidth, setInputWidth] = useState(0)
    const openSearchPopup = (e:React.FocusEvent<HTMLInputElement>) => {
        setInputWidth((e.target.parentElement as HTMLElement).offsetWidth)
        showSearch(true)
    }

    return (
        <div className='header'>
            <div className="logo">магаз</div>
            {!isMobile &&
                <div className='search'>
                    <div className='icon'></div>
                    <input className='search__input' placeholder={'Поиск товаров'} onFocus={(e) => openSearchPopup(e)}/>
                </div>
            }
            {isMobile && <div onClick={() => showSearch(true)} className='header__mobile-search-icon'></div>}
            {!isMobile && <Panel/>}
            {searchPopupVisible && <div className='overlay'><SearchPopup inputWidth={inputWidth} data={data} close={()=>showSearch(false)}/></div>}
        </div>

    )
}

type SearchPopupProps = {
close:()=>void;
data:MagazData;
    inputWidth:number

}

const SearchPopup = ({close,data,inputWidth}:SearchPopupProps) => {
const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        console.log(inputWidth)
        if(inputRef.current){
            inputRef.current.focus()
        }
    }, []);

    return (
        <div className='overlay' onClick={(e)=>{
            if((e.target as HTMLElement) .className==='overlay') close()}}>
            <div className="search-popup-contnet" style={{width:`${inputWidth}px`}}>
                <div className='search'>
                    <div className='icon'></div>
                    <input className='search__input' ref={inputRef} placeholder={'Поиск товаров'}/>
                </div>
                <Autocomplete data={data} items={['маска гая фокса', 'циркониевый браслет', 'нефритовый стержень']}/>
                <Categories categories={data.categories}/>
            </div>

        </div>

    )
}