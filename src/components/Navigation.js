import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function DropdownButton({ text, goto }) {
    return <Link to={goto} className=''>{text}</Link>
}

function Dropdown({ children }) {
    return <>
        <div className='dropdown'>
            {children.map((child, i) => <DropdownButton text={child.text} goto={child.goto} key={i} />)}
        </div>
    </>
}

function NavigationButton({ text, goto, selected, setSelected, children }) {
    const navigate = useNavigate();

    return <div className='relative flex justify-center group h-full items-center'>
        <div onClick={() => {
            setSelected(goto);
            navigate(goto);
        }}>
            <p className={`
                ${selected === goto ? 'text-white' : 'text-white/50 hover:text-white/75 cursor-pointer '} 
                text-2xl select-none duration-500 transition-all
            `}>{text}</p>
        </div>
        {children}
    </div>
}

export default function Navbar() {
    const pages = [
        {
            text: 'Home',
            goto: '/'
        },
        {
            text: 'Programming ▾',
            goto: '/programming',
            dropdown: [
                {
                    text: 'C',
                    goto: '/programing/c',
                },
                {
                    text: 'Python',
                    goto: '/programming/py',
                },
                {
                    text: 'JavaScript',
                    goto: '/programming/js',
                }
            ]
        },
        {
            text: 'Content Areas ▾',
            goto: '/contentareas',
            dropdown: [
                {
                    text: 'CA1 - CA4',
                    goto: '/content/1-4',
                },
                {
                    text: 'CA5 - CA8',
                    goto: '/content/5-8',
                },
                {
                    text: 'User Experience',
                    goto: '/content/ux',
                }
            ]
        },
        {
            text: 'Projects',
            goto: '/projects'
        },
        {
            text: 'Industry Placement',
            goto: '/blogs/yandiyaapp'
        }
    ]

    const [selected, setSelected] = useState(pages[0].goto);

    return <div className='w-screen h-24 bg-zinc-900 z-50 relative flex items-center p-5 space-x-5'>
        {pages.map((page, i) => <NavigationButton key={i}
            text={page.text}
            goto={page.goto}
            selected={selected}
            setSelected={setSelected}   
        >
            {page.dropdown && <Dropdown>
                {page.dropdown}
            </Dropdown>}
        </NavigationButton>)}
    </div>
}