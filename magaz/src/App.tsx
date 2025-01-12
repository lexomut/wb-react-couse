import {useState} from "react";
import {Header} from "./header/header.tsx";
import {MainPage} from "./mainPage/mainPage.tsx";
import useIsMobile from "./tools/isMobile.ts";
import {Panel} from "./panel/panel.tsx";

export type MagazData = {
    banner: BannerData,
    categories: CategoryData[],
    items: Item[],
    mainContentData: MainContentItem[]
}
export type BannerData = {
    imageDesktop: string
    imageMobile: string
}
export type CategoryData = {
    tag: string,
    name: string,
    image: string,
}
export type Item = {
    name: string,
    price: number,
    rating: number,
    like: number,
    description: string
    tags: string[]
    background_color: string
}
export type MainContentItem = {
    item: string
    type: string
    background: string
    section: string
}


function App() {
    const [data, setData] = useState<MagazData>()
    const isMobile=useIsMobile()
    if (!data) {
        fetch('magaz.json').then(res => res.json()).then(data => setData(data)).catch(err => console.log(err));
    }

    if (!data) {
        return null
    }

    return (
        <div className='main-wrapper'>
            <Header/>
            <MainPage data={data}/>
            {isMobile && <div className="mobile-panel"><Panel/></div>}
            <div className="footer">
                <div className="footer__logo">© 2023 Магаз</div>
                <div className="footer__links">
                    <a href="mailto:support@magaz.ru" >support@magaz.ru</a>
                    <div className="footer__social-wrap">
                        <a className="footer__social footer__social--telegram"></a>
                        <a className="footer__social footer__social--dzen"></a>
                        <a className="footer__social footer__social--youtube"></a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default App
