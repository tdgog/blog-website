import data from '../assets/data'
import BlogBox from '../components/Blog'

export default function Programming() {
    return <div className='m-5'>
        {data.blogs.map((blog, i) => {
            if(blog.category === 'programming') {
                return <BlogBox key={i} blog={blog} />
            }
            return null;
        })}
    </div>
}
