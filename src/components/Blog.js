import { useEffect, useRef } from "react";

const subcategories = {
    javascript: {
        colour: '#f7df1e',
        logo: require('../assets/images/logos/JavaScript.png')
    }
}

export default function BlogBox({ blog }) {
    const category = subcategories[blog.subcategory];
    
    const containerRef = useRef();
    const categoryTextRef = useRef();

    useEffect(() => {
        const colour = subcategories[blog.subcategory].colour;

        containerRef.current.style.borderColor = colour;
        categoryTextRef.current.style.color = colour;
    });

    return <div ref={containerRef} className={`w-1/3 h-60 bg-zinc-700 shadow-2xl rounded-md border-t-4 p-5`}>
        <div className='flex space-x-3 items-center'>
            <img className='h-5' src={category.logo} />
            <p ref={categoryTextRef} className={`text-md tracking-[.4em] font-bold`}>
                {blog.subcategory.toUpperCase()}
            </p>
        </div>
        <p className={`text-4xl tracking-widest text-white pb-2`}>
            {blog.name}
        </p>
        <p className={`text-lg tracking-widest text-zinc-400`}>
            {blog.name}
        </p>
    </div>
}
