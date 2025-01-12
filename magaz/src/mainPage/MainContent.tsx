import {MagazData, MainContentItem} from "../App.tsx";
import {MainCard} from "./MainCard.tsx";
import {useState} from "react";
import {CatalogCard} from "../CatalogCard/catalogCart.tsx";

const fonts: { [kes: string]: string } = {
    'Sale': "Rubik Beastly",
    'Для дома': "Rubik Dirt",
    "Для сна": "Rubik Dirt,",
    "Сокровища": "Rubik Doodle Triangles"
}

export const MainContent = ({mainContentData, data}: { mainContentData: MainContentItem[], data: MagazData }) => {
    const [sections] = useState(mainContentData?.reduce((map, card) => {
        if (!map.has(card.section)) {
            return map.set(card.section, [card]);
        }
        map.get(card.section).push(card);
        return map
    }, new Map()));

    return (
        <div className='mainContent'>
            {[...sections.values()].map((section, index) => <MainSection key={index} cards={section} data={data}/>)}
        </div>
    )
}

const MainSection = ({cards, data}: { cards: MainContentItem[], data: MagazData }) => {
    if (cards.length === 0) {
        return null
    }
    return (
        <div className='main-section'>
            <div className='main-section__bage' style={{fontFamily: fonts[cards[0].section]}}>{cards[0].section}</div>
            {cards?.map((good, index) => {
                if (good.type === 'many') {
                    return <MainSet card={good} data={data}/>
                }
                return <MainCard key={index} magazDta={data} data={good}/>
            })}
        </div>
    )
}

const MainSet = ({card, data}: { card: MainContentItem, data: MagazData }) => {
    const items = data.items.filter((item) => item.tags.includes(card.section)).slice(0, 10)
    return (
        <div className="main-set">
            {items.map((item, index) => <CatalogCard item={item} key={index}/>)}
        </div>
    )

}