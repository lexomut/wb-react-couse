import { popupForm } from "./form.js";
import { example } from "./taskManager.js";
import { desk } from "./desk.js";
const important = { hard: 'важная', medium: 'средней важности', low: 'не важная' };
export class Card {
    constructor({ name, description, done, createTime, type, expirationDate, place, responsible }) {
        this.name = name || '';
        this.description = description || '';
        this.done = done;
        this.createTime = createTime;
        this.type = type || '';
        this.expirationDate = expirationDate;
        this.place = place || '';
        this.responsible = responsible || '';
        this.render();
    }
    update({ name, description, done, createTime, type, expirationDate, responsible }) {
        this.name = name;
        this.description = description;
        this.done = done;
        this.createTime = createTime;
        this.type = type;
        this.expirationDate = expirationDate;
        this.responsible = responsible;
        this.render();
        localStorage.setItem('tasks', JSON.stringify(desk.cards.map(card => card.get())));
    }
    render() {
        this.element = this.element || document.createElement('div');
        this.element.classList.add('card');
        this.element.innerHTML = ` 
        <div class="card__title">${this.name}</div>
        <div class="card__type"> важность: ${important[this.type]}</div>
        <div class="card__description">${this.description}</div>
        <div class="card__вщту">состояние: ${this.done ? 'выполнено' : 'не выполнено'}</div>
        <div class="card__create">создано: ${new Date(this.createTime).toLocaleDateString("en-GB")}</div>
        <div class="card__вщту">сделать до : ${this.expirationDate || ''}</div>`;
        this.element.classList.toggle('card--done', this.done);
        this.element.onclick = () => this.change();
        return this.element;
    }
    get() {
        return {
            name: this.name,
            description: this.description,
            done: this.done,
            createTime: this.createTime,
            type: this.type,
            responsible: this.responsible,
            expirationDate: this.expirationDate,
            place: this.place,
        };
    }
    change() {
        // @ts-ignore
        popupForm.open(example.map(field => ({ ...field, value: this[field.name] })), (obj) => {
            this.update({
                name: obj.name,
                description: obj.description,
                done: !!obj.done,
                type: obj.type,
                createTime: this.createTime,
                expirationDate: obj.expirationDate
            });
        });
    }
}
