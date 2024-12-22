import {Categories} from "../categories/Categories.tsx";
import {BannerData, MagazData} from "../App.tsx";
import './mainPage.scss'
import useIsMobile from "../tools/isMobile.ts";
import {MainContent} from "./MainContent.tsx";

function MainBanner({banner}: { banner: BannerData }) {
    const isMobile = useIsMobile()

    return (
        <div className="main-banner"
             style={{backgroundImage: `url("${isMobile ? banner.imageMobile : banner.imageDesktop}")`}}></div>
    )
}

export const MainPage = ({data}: { data: MagazData }) => {
    return (
        <>
            <div className={'banner'}></div>
            <MainBanner banner={data.banner}/>
            <Categories categories={data.categories}/>
            <MainContent data={data} mainContentData={data.mainContentData}/>
        </>
    )
}

