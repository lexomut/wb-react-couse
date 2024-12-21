import {CategoryData} from "../App.tsx";

export const CategoryItem = ({category}:{category:CategoryData}) => {
    return (
        <div className='category-item'>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="90"
                height="90"
                viewBox="0 0 90 90"
                fill="none"
            >
                <defs>
                    <pattern
                        id={`${category.tag}`}
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                    >
                        <image
                            xlinkHref={`${category.image}`} // Динамическая ссылка на изображение
                            width="1"
                            height="1"
                            preserveAspectRatio="xMidYMid slice"
                        />
                    </pattern>
                </defs>
                <path
                    d="M90 45C90 64.7249 90 74.5873 84.5523 81.2254C83.5549 82.4407 82.4407 83.5549 81.2254 84.5523C74.5873 90 64.7249 90 45 90C25.2751 90 15.4127 90 8.77456 84.5523C7.55934 83.5549 6.44505 82.4407 5.44775 81.2254C0 74.5873 0 64.7249 0 45C0 25.2751 0 15.4127 5.44775 8.77456C6.44505 7.55934 7.55934 6.44505 8.77456 5.44775C15.4127 0 25.2751 0 45 0C64.7249 0 74.5873 0 81.2254 5.44775C82.4407 6.44505 83.5549 7.55934 84.5523 8.77456C90 15.4127 90 25.2751 90 45Z"
                    fill={`url(#${category.tag})`} // Используем паттерн с изображением
                />
            </svg>
            <div className='category-item__name'>{category.name}</div>
        </div>
    )
}