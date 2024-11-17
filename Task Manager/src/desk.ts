import {Card} from "./card.js";

type SortBy = 'createTime' | 'name'


class Desk {
    htmlElement: HTMLElement = document.getElementById('desk')!
    cards: Card[] = []

    sort(sortBy: SortBy) {
        if (this.cards.every(card => typeof card[sortBy] === 'string')) {
            const compare = new Intl.Collator().compare
            this.cards.sort((a, b) => compare((a[sortBy] as string), (a[sortBy] as string)))
        } else {
            this.cards.sort((a, b) => {
                if (typeof a[sortBy] === 'number' && typeof b[sortBy] === 'number') {
                    return (a[sortBy] as unknown as number) - (a[sortBy] as unknown as number)
                }
                return 0
            })
        }
    }

    add(task: Card) {
        this.cards.push(task)
        this.render()
    }

    render(cards?:Card[]) {
        this.htmlElement.innerHTML = '';
        (cards || this.cards).forEach(card => {
            this.htmlElement.append(card.render())
        })
    }
}

export const desk = new Desk()

