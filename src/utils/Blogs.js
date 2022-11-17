export default function importAll(dir) {
    return dir.keys().map(item => {
        const diritem = dir(item);
        return {
            name: item.replace('./', '').replace('.js', ''),
            config: diritem.config,
            default: diritem.default
        }
    })
}

export function getAllBlogsOfCategory(category) {
    let array = [];
    let allBlogs = importAll(require.context('../blogs', false, /\.js$/));

    allBlogs.forEach(blog => {
        if(blog.config.category === category)
            array.push(blog);
    });

    return array;
}