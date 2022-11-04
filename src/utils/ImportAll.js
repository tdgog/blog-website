export default function importAll(dir) {
    return dir.keys().map(item => {
        const diritem = dir(item);
        console.log(diritem);
        return {
            name: item.replace('./', '').replace('.js', ''),
            config: diritem.config,
            default: diritem.default
        }
    })
}
