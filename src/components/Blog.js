import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Highlight, { defaultProps } from "prism-react-renderer";
import { theme } from "../assets/VSCodeTheme";
import importAll from '../utils/ImportAll';

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
    }
}

export default function BlogBox({ name, preview, previewImage, goto, category }) {
    const categoryData = categories[category];
    const navigate = useNavigate();

    return <div 
        className={`w-full transition-all duration-300 hover:bg-zinc-600 bg-zinc-700 hover:shadow-2xl shadow-xl rounded-md border-${category.replace(' ', '')} border-t-4 p-5 cursor-pointer`}
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
    console.log(blogs)

    return <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'>
        {blogs.map((blog, i) => {
            if(blog.config.tags.includes(tag)) {
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

        this.category = props.category;

        this.state = {
            codeblockDimensions: []
        }

        // Binds (necessary if I want to access component props such as this.color)
        this.h2 = this.h2.bind(this);
        this.Contents = this.Contents.bind(this);
        this.Link = this.Link.bind(this);
        this.hr = this.hr.bind(this);
        this.h3 = this.h3.bind(this);
        this.Image = this.Image.bind(this);
        this.ul = this.ul.bind(this);
        this.CodeBlock = this.CodeBlock.bind(this);
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
                    type: child.type.name,
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

    h1(props) {
        const customClassName = props.className || '';
        return <h1
            {...props}
            className={`text-white text-6xl my-7 font-bold ${customClassName}`}
        >{props.children || null}</h1>
    }

    h2(props) {
        const customClassName = props.className || '';
        return <h1
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
        return <div className='pt-3'>
            {props.children.map((child, i) => {
                return <div key={i} className='flex space-x-5 pb-3 items-center'>
                    <div className={`ml-5 bg-${this.color} rounded-full h-2 aspect-square`} />
                    <this.p {...child.props} />
                </div>
            })}
        </div>
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
                        <this.Link to={`#${subtitle.props.children}`}>{subtitle.props.children}</this.Link>
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
            <Highlight {...defaultProps} theme={theme} code={props.code} language={props.language}>
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

    render() {
        const children = this.formattedChildren;
        console.log(children)

        return <div className={`w-2/3 p-5 border-zinc-600 border-t-${this.color} border-t-[6px] border-2`}>
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
    }

}

// Placeholder components
export function Contents() { return null }
export function CodeBlock() { return null }
export function Image() { return null }
