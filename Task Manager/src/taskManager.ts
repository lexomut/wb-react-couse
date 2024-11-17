import {Field, popupForm} from "./form.js";
import {ShareType, TaskBase} from "./app.js";
import {Card} from "./card.js";
import {desk} from "./desk.js";

export const example: Field[] = [
    {
        name: 'name',
        label: 'название задачи',
        placeholder: 'Например: сделать домашку',
        isRequired: true,
        type: 'text',
    },
    {
        name: 'description',
        label: 'опишите задачу',
        isRequired: true,
        type: 'textarea'
    },
    {
        name: 'expirationDate',
        label: 'срок',
        isRequired: false,
        type: 'date'
    },
    {
        name: 'type',
        label: 'важность',
        isRequired: true,
        type: 'select',
        options: [
            {label: 'важная', value: 'hard'},
            {label: 'средней важности', value: 'medium'},
            {label: 'не важная', value: 'low'}
        ]
    },
    {
        name: 'done',
        value:"",
        label: 'выполнено',
        isRequired: true,
        type: 'select',
        options: [
            {label: 'не выполнено', value:false },
            {label: 'выполнено', value: true},

        ]
    },
    {
        name: 'place',
        label: 'место',
        isRequired: false,
        type: 'text'
    },

]

class TaskManager {
    constructor() {
        const btn = document.getElementById("openModal")!;
const filter = document.getElementById("radioForm") as HTMLFormElement;
        btn.onclick = () => this.create()
        filter.onclick = (e:MouseEvent) => this.filter(e)
    }

    restore() {
        (JSON.parse(localStorage.getItem('tasks') || '[]') as TaskBase[]).forEach((task) => {
            const card = new Card(task)
            desk.cards.push(card)
        })
        desk.render()
    }


    private create() {
        popupForm.open(example, (obj) => this.save(obj))
    }

    save(obj: ShareType) {

        const newCard = new Card({
            name: obj.name,
            description: obj.description,
            done: false,
            type: obj.type as 'hard'|'low'|'medium' ,
            createTime: Date.now()
        })
        desk.add(newCard)
        localStorage.setItem('tasks', JSON.stringify(desk.cards.map(card => card.get())))
    }


    private filter(e:MouseEvent) {
        const inputValue = (e.target as HTMLInputElement).value
        if(inputValue){
            switch (inputValue) {
                case 'no done':
                    desk.render(desk.cards.filter(card => !card.done))
                    break
                case 'done':
                    desk.render(desk.cards.filter(card => card.done))
                    break
                default:
                    desk.render()
            }
        }


    }
}

export const taskManager = new TaskManager();