import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NavigationButton({ text, goto, selected, setSelected }) {
    const navigate = useNavigate();

    return <div onClick={() => {
        setSelected(goto);
        navigate(goto);
    }}>
        <p className={`
            ${selected === goto ? 'text-white font-bold' : 'text-white/50 hover:font-bold cursor-pointer '} 
            text-2xl select-none duration-1000 transition-
        `}>{text}</p>
    </div>
}

export default function Navbar() {
    const pages = [
        {
            text: 'Home',
            goto: '/'
        },
        {
            text: 'Programming',
            goto: '/programming'
        },
        {
            text: 'Content Areas',
            goto: '/contentareas'
        },
        {
            text: 'Projects',
            goto: '/projects'
        },
        {
            text: 'Industry Placement',
            goto: '/placement'
        }
    ]

    const [selected, setSelected] = useState(pages[0].goto);

    return <div className='w-screen h-24 bg-zinc-900 z-50 relative flex items-center p-5 space-x-5'>
        {pages.map((page, i) => <NavigationButton key={i}
            text={page.text}
            goto={page.goto}
            selected={selected}
            setSelected={setSelected}   
        />)}
    </div>
}