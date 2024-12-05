class Desk {
    constructor() {
        this.htmlElement = document.getElementById('desk');
        this.cards = [];
    }
    sort(sortBy) {
        if (this.cards.every(card => typeof card[sortBy] === 'string')) {
            const compare = new Intl.Collator().compare;
            this.cards.sort((a, b) => compare(a[sortBy], a[sortBy]));
        }
        else {
            this.cards.sort((a, b) => {
                if (typeof a[sortBy] === 'number' && typeof b[sortBy] === 'number') {
                    return a[sortBy] - a[sortBy];
                }
                return 0;
            });
        }
    }
    add(task) {
        this.cards.push(task);
        this.render();
    }
    render(cards) {
        this.htmlElement.innerHTML = '';
        (cards || this.cards).forEach(card => {
            this.htmlElement.append(card.render());
        });
    }
}
export const desk = new Desk();
