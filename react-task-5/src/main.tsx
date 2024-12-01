import {createRoot} from 'react-dom/client'
import './index.css'
import json from './component.json'
import React from "react";

type componentProps = {
    tag: string;
    attrs?: Record<string, string | undefined>;
    children: string[] | componentProps[] | never[];
}


createRoot(document.getElementById('root')!).render(
    <>
        <Component {...json}/>
    </>
)

function Component({tag, attrs, children}: componentProps) {
    return (
        <> {!children || children.length == 0 ?
            React.createElement(tag, attrs) :
            children.map(el => {
                if (typeof el === 'string' || !el) {
                    return React.createElement(tag, attrs, el)
                }

                return React.createElement(tag, attrs, <Component tag={el.tag} attrs={el.attrs}
                                                                  children={el.children}/>)
            })
        }
        </>
    )
}
