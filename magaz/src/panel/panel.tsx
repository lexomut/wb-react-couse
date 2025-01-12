import "./panel.scss"
export const Panel =()=>{
    return(
        <div className='panel'>
            <button className='panel_button panel_button--chart'></button>
            <button className='panel_button panel_button--delivery'></button>
            <button className='panel_button panel_button--favorites'></button>
            <button className='panel_button panel_button--login'></button>
        </div>
    )
}