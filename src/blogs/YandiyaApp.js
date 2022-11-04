import { BlogPage, CodeBlock, Contents, Image } from "../components/Blog"

export const config = {
    name: 'Yandiya App',
    preview: 'This is a preview of the text in my blog to hook the reader in',
    category: 'react native',
    tags: ['programming']
}

export default function() {
    const code = `export default function() {
    return <div className='p-5'>
        <BlogPage category='react native'>
            <h1>Title</h1>
            <Image src='https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img/https://jacekjeznach.com/wp-content/uploads/2022/02/co-to-jest-responsive-web-design-e1643791537179.jpg' />
            <Contents />
            <hr />
            <h2>Subtitle</h2>
            <h3>Subheading</h3>
            <p>Content</p>
            <p>Content</p>
            <Image border src='https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img/https://jacekjeznach.com/wp-content/uploads/2022/02/co-to-jest-responsive-web-design-e1643791537179.jpg' />
            <p>Content</p>
            <ul>
                <li>List item</li>
                <li>List item</li>
                <li>List item</li>
            </ul>
            <CodeBlock code={code} language='jsx'/>
        </BlogPage>
    </div>
}`

    return <div className='p-5'>
        <BlogPage category={config.category}>
            <h1>Yandiya Technologies Ltd. Mobile App</h1>
            <Image src='https://sp-ao.shortpixel.ai/client/to_webp,q_lossy,ret_img/https://jacekjeznach.com/wp-content/uploads/2022/02/co-to-jest-responsive-web-design-e1643791537179.jpg' />
            <Contents />
            <hr />
            <h2>Front End</h2>
            <p>Content</p>
            <h2>Back End</h2>
        </BlogPage>
    </div>
}
