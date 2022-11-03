import { useEffect, useRef } from "react";

const categories = {
    javascript: {
        colour: '#f7df1e',
        logo: require('../assets/images/logos/JavaScript.png')
    },
    luau: {
        logo: require('https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Luau_Logo_%28Programming_Language%29.svg/2048px-Luau_Logo_%28Programming_Language%29.svg.png')
    }
}

export default function BlogBox({ name, preview, previewImage, goto, category }) {
    const categoryData = categories[category];
    const containerRef = useRef();
    const categoryTextRef = useRef();

    return <div ref={containerRef} className={`w-full bg-zinc-700 shadow-2xl rounded-md border-${category} border-t-4 p-5`}>
        <div className='flex space-x-3 items-center'>
            <img className='h-5' src={categoryData.logo} />
            <p ref={categoryTextRef} className={`text-md tracking-[.4em] text-${category} font-bold`}>
                {category.toUpperCase()}
            </p>
        </div>
        <p className='text-4xl tracking-widest text-white pb-2'>
            {name}
        </p>
        <p className='text-lg tracking-widest text-zinc-400'>
            {preview}
        </p>
    </div>
}
