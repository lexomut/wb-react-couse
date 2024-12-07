import React, { useState } from 'react';
import "./App.css"
import {ItemComp} from "./Item.tsx";

export type Item = {
    name: string;
    width: number;
    height: number;
};

type Button={
    id: number;
    name: string;
}

const buttons:Button[] = [
    { id: 1, name: 'певый json'},
    { id: 2, name: 'второй json'},
    { id: 3, name: 'третий json'}
];

type Cell = {
    item: Item|null
    image?:string
};

const FIELD_WIDTH = 12;
const FIELD_HEIGHT = 8;

export const App: React.FC = () => {


    const [field, setField] = useState<Cell[][]>(
        Array.from({ length: FIELD_HEIGHT }, () =>
            Array.from({ length: FIELD_WIDTH }, () => ({ item: null }))
        )
    );

    let _field:Cell[][] = field
    const [error, setError] = useState<string | null>(null);

    const canPlaceItem = (item: Item): { x: number; y: number } | null => {
        for (let y = 0; y <= FIELD_HEIGHT - item.height; y++) {
            for (let x = 0; x <= FIELD_WIDTH - item.width; x++) {
                let fits = true;

                for (let i = 0; i < item.height; i++) {
                    for (let j = 0; j < item.width; j++) {
                        if (_field[y + i][x + j].item !== null) {
                            fits = false;
                            break;
                        }
                    }
                    if (!fits) break;
                }

                if (fits) return { x, y };
            }
        }
        return null;
    };


    const placeItem = (item: Item) => {
        const position = canPlaceItem(item);
        if (!position) {
            setError(`веши больше некуда складывать`);
            return true;
        }

        const { x, y } = position;
        const newField = _field.map(row => row.map(cell => ({ ...cell })));

        for (let i = 0; i < item.height; i++) {
            for (let j = 0; j < item.width; j++) {
                const cell:Cell =  {item}
                if(i===0&&j===0){
                    cell.image = item.name
                }
                newField[y + i][x + j] = cell;
            }
        }

        _field = newField
    };

    const placeItems = (button: Button) => {
        fetch(`/${button.id}.json`)
            .then(response => response.json())
            .then((items: Item[]) => {
                items.find(item => placeItem(item));
                setField(_field)
            })
            .catch(error => {
                console.error('Error fetching items:', error);
            });
    }

    return (
        <div>
            <h1>Полезные вещи</h1>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${FIELD_WIDTH}, 50px)` }}>
                {field.map((row, y) =>
                    row.map((cell, x) => (
                        <div onClick={()=>console.log(x,y,cell)}
                            key={`${x}-${y}`}
                            className={'cell'}
                        >{cell.item && cell.image?<ItemComp item={cell.item}/>:''}
                        </div>
                    ))
                )}
            </div>
            <div>
                {buttons.map(button => (
                    <button
                        disabled={!!error}
                        key={button.id}
                        onClick={() => placeItems(button)}
                        style={{ margin: '5px' }}
                    >
                        {button.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

