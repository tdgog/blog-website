import { BlogPage, CodeBlock, Contents, Image } from "../components/Blog"

export const config = {
    name: 'Yandiya App',
    preview: 'This is a preview of the text in my blog to hook the reader in',
    category: 'react native',
    tags: ['programming']
}

export default function() {
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
