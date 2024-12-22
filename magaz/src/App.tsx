import {useState} from "react";
import {Header} from "./header/header.tsx";
import {MainPage} from "./mainPage/mainPage.tsx";

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
}
export type MainContentItem = {
    item: string
    type: string
    label?: string
    background:string
}


function App() {
    const [data, setData] = useState<MagazData>()
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

        </div>

    )
}

export default App
