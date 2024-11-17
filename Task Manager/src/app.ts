import {taskManager} from "./taskManager.js";


export type TaskBase = {
    name: string;
    description: string;
    done: boolean;
    createTime: number;
    type: 'hard'|'low'|'medium';
    expirationDate?: string;
    responsible?: string;
    place?: string
}


export type ShareType ={ [key: string]: string }




taskManager.restore()