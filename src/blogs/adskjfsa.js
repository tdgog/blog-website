import { BlogPage, Contents, Image } from "../components/Blog"

export const config = {
    name: 'QQQQQQQQQQQQQ',
    preview: 'lemon',
    category: 'javascript',
    tags: ['programming']
}

export default function Page() {
    return <div className='p-5'>
        <BlogPage config={config}>
            <h1>the w</h1>
            <Image alt='header image' src='https://hsdc-cdn.s3.amazonaws.com/uploads/2019/12/T-Level-Landing-Page-Banner-v3.jpg' />
            <Contents />
            <hr />
            <h2>yeet</h2>
            
        </BlogPage>
    </div>
}
