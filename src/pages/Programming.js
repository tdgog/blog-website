import BlogBox from '../components/Blog';

export default function Programming() {
    return <div className='m-5'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2'>
            <BlogBox
                name='My Blog'
                preview='This is a preview of the text in my blog to hook the reader in'
                category='javascript'
            />
            <BlogBox
                name='My Blog'
                preview='This is a preview of the text in my blog to hook the reader in'
                category='luau'
            />
        </div>
    </div>
}
