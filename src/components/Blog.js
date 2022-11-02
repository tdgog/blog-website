import { useEffect, useRef } from "react";

const colours = {
    javascript: '#f7df1e'
}

export default function BlogBox({ blog }) {
    const container = useRef();
    const category = useRef();

    useEffect(() => {
        const colour = colours[blog.subcategory];

        container.current.style.borderColor = colour;
        category.current.style.color = colour;
    });

    return <div ref={container} className={`w-96 h-60 shadow-2xl rounded-md border-t-4 p-5`}>
        <p ref={category} className={`text-md tracking-widest`}>
            {blog.subcategory.toUpperCase()}
        </p>
        <p className={`text-4xl tracking-widest text-white pb-2`}>
            {blog.name}
        </p>
        <p className={`text-lg tracking-widest text-zinc-400`}>
            {blog.name}
        </p>
    </div>
}
