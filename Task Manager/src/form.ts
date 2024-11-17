import {ShareType} from "./app.js";

export type Field = {
    name: string;
    label: string;
    placeholder?: string;
    isRequired?: boolean;
    type: "text" | "textarea" | "date" | "select";
    value?: string | number;
    options?: { value: string|boolean, label: string }[];

}

export class FormPopup {
    htmlElement: HTMLElement = document.getElementById('formPopup')!
    form: HTMLFormElement = document.getElementById('taskForm') as HTMLFormElement
    fieldsContainer: HTMLElement = document.querySelector('#taskForm-fields') as HTMLElement


    private fields: Field[] = [];
    private submitCb: ((obj: ShareType) => void) | undefined;

    constructor() {
        const closeBtn = document.getElementById("closeBtn")!;
        const btn = document.getElementById("openModal")!;
        const cancelBtn = document.getElementById("cancelBtn")!;
        cancelBtn.onclick = () => this.close()
        closeBtn.onclick = () => this.close()
        this.form.onsubmit = (e) => this.submit(e)
    }

    open(fields: Field[], submitCb: (obj: ShareType) => void) {
        this.htmlElement.style.display = 'block'
        this.submitCb = submitCb

        const form = this.htmlElement.querySelector('form') as HTMLElement
        this.fieldsContainer.append(...fields.map(field => this.createField(field)))
        this.fields = fields

    }

    close() {
        this.htmlElement.style.display = 'none';
        this.fieldsContainer.innerHTML = ''

    }

    submit(e: SubmitEvent) {
        e.preventDefault()
        const result: ShareType = {}
        this.fields.forEach((field) => {
            for (const el of this.form.elements) {
                if ((el as HTMLInputElement).name === field.name) {
                    result[field.name] = (el as HTMLInputElement).value || ''
                }
            }
        })
        this.submitCb?.(result)
        this.close()
    }

    createField(field: Field) {
        const element = document.createElement('div')
        element.classList.add('field')
        if (field.type === 'textarea') {
            element.innerHTML = `<label class="field__label" for="name">${field.label}:</label>
        <textarea value="${field.value || ''}" placeholder="${field.placeholder}" class="field__input"  name="${field.name}" ${field.isRequired?'required':''}> </textarea>`
        } else if (field.type === 'select') {
            element.innerHTML = `<label class="field__label" for="name">${field.label}:</label>
        <select value="${field.value || ''}" placeholder="${field.placeholder}" class="field__input"  name="${field.name}" ${field.isRequired?'required':''}>${field.options?.map(option => '<option value="' + option.value + '">' + option.label + '</option>')}</select>`

        } else {
            element.innerHTML = `<label class="field__label" for="name">${field.label}:</label>
        <input value="${field.value || ''}" placeholder="${field.placeholder}" class="field__input"  type="${field.type}" name="${field.name}" ${field.isRequired?'required':''}> `
        }
        return element
    }

}

export const popupForm = new FormPopup()