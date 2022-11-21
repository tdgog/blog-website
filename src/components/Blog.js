import React, { useLayoutEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import Highlight, { defaultProps } from "prism-react-renderer";
import importAll, { getAllBlogsOfCategory } from '../utils/Blogs';
import theme from "../theme";
import codeTheme from '../assets/VSCodeTheme'
const module = require('./Blog');

const categories = {
    javascript: {
        colour: '#f7df1e',
        logo: require('../assets/images/logos/JavaScript.png')
    },
    luau: {
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Luau_Logo_%28Programming_Language%29.svg/2048px-Luau_Logo_%28Programming_Language%29.svg.png'
    },
    'react native': {
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/539px-React-icon.svg.png'
    },
    't-level': {
        logo: require('../assets/images/logos/TLevel.png')
    }
}

export default function BlogBox({ name, preview, previewImage, goto, category }) {
    const categoryData = categories[category];
    const navigate = useNavigate();

    return <div 
        className={`w-full transition-all duration-300 hover:bg-zinc-700 bg-zinc-800 hover:shadow-2xl shadow-xl rounded-md border-${category.replace(' ', '')} border-t-4 p-5 cursor-pointer`}
        onClick={() => {
            navigate('/blogs/' + goto);
        }}
    >
        <div className='flex space-x-3 items-center'>
            <img className='h-5' src={categoryData.logo} alt={category} />
            <p className={`text-md tracking-[.4em] text-${category.replace(' ', '')} font-bold`}>
                {category.toUpperCase()}
            </p>
        </div>
        <h1 className='text-4xl text-white py-2'>
            {name}
        </h1>
        <p className='text-lg text-zinc-400'>
            {preview}
        </p>
    </div>
}

export function BlogPreviewGrid({ tag }) {
    const blogs = importAll(require.context('../blogs', false, /\.js$/));

    return <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'>
        {blogs.map((blog, i) => {
            if(blog.config.tags.includes(tag) || blog.config.category === tag) {
                return <BlogBox key={i}
                    name={blog.config.name}
                    preview={blog.config.preview}
                    category={blog.config.category}
                    goto={blog.name}
                />
            }
            return null;
        })}
    </div>
}

export class BlogPage extends React.Component {

    constructor(props) {
        super();
        this.props = props;

        this.config = props.config;
        this.category = props.config.category;

        this.state = {
            codeblockDimensions: []
        }

        this.functionIDs = {};

        // Binds (necessary if I want to access component props such as this.color)
        this.h2 = this.h2.bind(this);
        this.Contents = this.Contents.bind(this);
        this.Link = this.Link.bind(this);
        this.hr = this.hr.bind(this);
        this.h3 = this.h3.bind(this);
        this.Image = this.Image.bind(this);
        this.ul = this.ul.bind(this);
        this.CodeBlock = this.CodeBlock.bind(this);
        this.Box = this.Box.bind(this);
        this.SimilarBlogs = this.SimilarBlogs.bind(this);
        this.ContactForm = this.ContactForm.bind(this);
        this.table = this.table.bind(this);

        // Add custom components to the registry
        this.addId('Contents');
        this.addId('Image');
        this.addId('CodeBlock');
    }

    get formattedChildren() {
        return this.props.children.map(child => {
            const type = typeof child.type;
            if(type === 'string') {
                return {
                    type: child.type,
                    child: child
                }
            } else if(type === 'function') {
                return {
                    type: this.getNameFromID(child.type.name),
                    child: child
                }
            } else {
                console.log("Something went wrong if this is printed, child is", child);
            }
        })
    }
    
    get subtitles() {
        return this.formattedChildren.map(child => {
            if(child.type === 'h2') {
                return child.child;
            }
        })
    }

    get color() {
        return this.category.replace(' ', '');
    }

    getNameFromID(id) {
        let found = undefined;
        Object.keys(this.functionIDs).map(name => {
            if(name === id) {
                found = this.functionIDs[name];
            }
        });
        return found;
    }

    addId(name) {
        this.functionIDs[module[name].name] = name;
    }

    h1(props) {
        const customClassName = props.className || '';
        return <h1
            {...props}
            className={`text-white text-6xl my-7 font-bold ${customClassName}`}
        >{props.children || null}</h1>
    }

    h2(props) {
        const customClassName = props.className || '';
        return <h1 id={props.children.replace(/\s+/g, '-').toLowerCase()}
            {...props}
            className={`text-${this.color} text-4xl my-7 font-bold ${customClassName}`}
        >{props.children || null}</h1>
    }

    h3(props) {
        const customClassName = props.className || '';
        return <h1
            {...props}
            className={`text-${this.color} text-2xl my-7 font-bold ${customClassName}`}
        >{props.children || null}</h1>
    }

    p(props) {
        const customClassName = props.className || '';
        return <p 
            {...props}
            className={`text-white text-xl ${customClassName}`}
        />
    }

    Link(props) {
        return <Link
            {...props}
            className={`text-xl text-${this.color} hover:brightness-75 transition-all`}
        />
    }

    hr(props) {
        return <hr className={`my-5 border-${this.color}`} />
    }

    Image(props) {
        const customClassName = props.className || '';
        if(props.border) {
            let alteredprops = {...props};
            delete alteredprops.border;
            return <img alt={props.alt || null} {...alteredprops} className={`my-5 border-2 border-${this.color} ${customClassName}`} />
        }
        return <img alt={props.alt || null} {...props} className={`my-5 ${customClassName}`} />
    }

    ul(props) {
        const customClassName = props.className || '';
        return <div className={`pt-3 ${customClassName}`}>
            {props.children.map((child, i) => {
                if(child.type === 'ul') {
                    return <this.ul key={i} className='pl-12' children={child.props.children} />
                }
                return <div key={i} className='flex space-x-5 pb-3'>
                    <div className={`ml-5 mt-3 bg-${this.color} rounded-full h-2 aspect-square`} />
                    <this.p {...child.props} />
                </div>
            })}
        </div>
    }

    table(props) {
        return <table className='table'>
            {props.children}
        </table>
    }

    Contents(props) {
        let numberOfSubtitles = 0;
        return <>
            <this.p className='font-bold mt-5'>Article Contents</this.p>
            {this.subtitles.map(subtitle => {
                if(subtitle) {
                    numberOfSubtitles++;
                    return <div key={numberOfSubtitles} className='flex space-x-3 items-center'>
                        <this.p>{numberOfSubtitles}: </this.p>
                        <this.Link to={`#${subtitle.props.children.replace(/\s+/g, '-').toLowerCase()}`}>{subtitle.props.children}</this.Link>
                    </div>
                }
            })}
        </>
    }

    CodeBlock(props) {
        return <div className='relative group'>
            <div className='absolute right-5 top-3 select-none text-transparent group-hover:text-white transition-all'>
                <p className='text-xl'>{props.language}</p>
            </div>
            <Highlight {...defaultProps} theme={codeTheme} code={props.code} language={props.language}>
                {({ className, style, tokens, getLineProps, getTokenProps }) => {
                    return <pre className={`${className} px-5 py-3 rounded-lg border-2 border-${this.color} overflow-x-scroll no-scrollbar`} style={style}>
                        {tokens.map((line, i) => <div {...getLineProps({ line, key: i })}>
                            {line.map((token, key) => <span {...getTokenProps({ token, key })} />)}
                        </div>)}
                    </pre>
                }}
            </Highlight>
        </div>
    }

    Box({ children }) {
        return <div className={`w-full p-5 mb-5 border-zinc-600 border-t-${this.color} border-t-[6px] border-2 flex flex-col`}>
            {children}
        </div>
    }

    SimilarBlogs() {
        const blogsOfCategory = getAllBlogsOfCategory(this.category);
        let blogsToShow = [];
        blogsOfCategory.forEach((blog, key) => {
            if(blog.config.name !== this.config.name)
                blogsToShow.push(<this.Link 
                    key={key}
                    to={'/blogs/' + blog.name}
                    children={blog.config.name}
                />)
        });

        if(blogsToShow.length >= 1) {
            return <this.Box>
                <h2 className='text-3xl text-white'>Similar Blogs</h2>
                {blogsToShow}
            </this.Box>
        }
        return null;
    }

    ContactForm() {
        return <this.Box>
            <h2 className='text-3xl text-white mb-2'>Contact Me</h2>
            <ContactFormComponent colour={this.color} />
        </this.Box>
    }

    render() {
        const children = this.formattedChildren;

        return <div className='w-full h-full flex space-x-3'>
            <div className={`w-2/3 p-5 border-zinc-600 border-t-${this.color} border-t-[6px] border-2`}>
                <p className={`text-md tracking-[.4em] text-${this.category.replace(' ', '')} font-bold`}>
                    {this.category.toUpperCase()}
                </p>
                {children.map((child, i) => {
                    const LocalComponent = this[child.type];
                    if(LocalComponent) 
                        return <LocalComponent key={i} {...child.child.props} />
                    return child.child;
                })}
            </div>
            <div className='w-1/3 h-full flex flex-col'>
                <this.SimilarBlogs />
                <this.ContactForm />
            </div>
        </div>
    }

}

function CoolSquareBackgroundThing() {
    return <ul className='circles'>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
}

function ContactFormComponent({ colour }) {
    //eslint-disable-next-line
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const emailChanged = (event) => {
        setEmail(event.target.value);
        if(regex.test(event.target.value)) {
            setEmailError(false);
        } else {
            setEmailError(true);
        }
    }

    const [subject, setSubject] = useState('');
    const [subjectError, setSubjectError] = useState(false);
    const subjectChanged = (event) => {
        setSubject(event.target.value)
        if(event.target.value.length < 1) {
            setSubjectError(true);
        } else {
            setSubjectError(false);
        }
    }

    const [message, setMessage] = useState('');
    const [messageError, setMessageError] = useState(false);
    const messageChanged = (event) => {
        setMessage(event.target.value)
        if(event.target.value.length < 1) {
            setMessageError(true);
        } else {
            setMessageError(false);
        }
    }

    const [textColour, setTextColour] = useState('black');
    const ref = useRef();
    useLayoutEffect(() => {
        const [ hexR, hexG, hexB ] = theme[ref.current.className.match(/bg-[\w-]+/)[0].substr(3)].substr(1).match(/.{2}/g);
        
        const red = parseInt(hexR, 16);
        const green = parseInt(hexG, 16);
        const blue = parseInt(hexB, 16);

        if ((red*0.299 + green*0.587 + blue*0.114) > 186) {
            setTextColour('black')
        } else {
            setTextColour('white')
        }
    })

    const [submitText, setSubmitText] = useState('Submit');
    const formref = useRef();
    const onSubmit = (event) => {
        event.preventDefault()

        if(emailError || subjectError || messageError) {
            setSubmitText('One or more fields are invalid')
            setTimeout(() => {
                setSubmitText('Submit')
            }, 3000);
            return;
        }

        const email = event.target.elements.email.value;
        const subject = event.target.elements.subject.value
        const message = event.target.elements.message.value

        if(!(email && subject && message)) {
            setSubmitText('One or more fields are empty')
            setTimeout(() => {
                setSubmitText('Submit')
            }, 2000);
            return;
        }

        const link = 'mailto:tgoggin004@fareham.ac.uk'
            + "?subject=" + encodeURIComponent(subject)
            + "&body=" + encodeURIComponent(`Sent by ${email}\n\n${message}`)
        
        window.location.href = link;
    }

    return <form className='flex flex-col' ref={formref} onSubmit={onSubmit}>
        <input
            type='text'
            placeholder='Email'
            name='email'
            value={email}
            onChange={emailChanged}
            className={`
                form-input border-zinc-700
                ${emailError ? 'border-b-red-700' : null}
                focus:border-b-${colour}
            `}
        />
        <input
            type='text'
            placeholder='Subject'
            name='subject'
            value={subject}
            onChange={subjectChanged}
            className={`
                form-input border-zinc-700
                ${subjectError ? 'border-b-red-700' : null}
                focus:border-b-${colour}
            `}
            
        />
        <textarea
            type='text'
            placeholder='Your message'
            name='message'
            value={message}
            onChange={messageChanged}
            className={`
                form-input border-zinc-700
                ${messageError ? 'border-b-red-700' : null}
                focus:border-b-${colour} resize-y h-52
            `}
        />
        <button
            className={`
                border-[3px] border-${colour} 
                p-2
                text-${colour} font-bold text-lg
                flex flex-center
                cursor-pointer [&>*]:cursor-pointer
                relative overflow-hidden group
                
            `}
            type='submit'
        >
            <p
                className={`z-50 group-hover:text-${textColour} transition-all duration-1000`}
                children={submitText}
            />
            <div ref={ref} className={`
                bg-${colour} h-[500%] w-[110%] absolute transition-all duration-1000
                -translate-x-[100%] group-hover:translate-x-0 rotate-12
            `}>
                <CoolSquareBackgroundThing />
            </div>
        </button>
    </form>
}

// Placeholder components
export function Contents() { return null }
export function CodeBlock() { return null }
export function Image() { return null }
