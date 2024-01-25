export default async function sitemap() {
    const data = await (
        await fetch('https://jsonplaceholder.typicode.com/posts')
    ).json();

    return data.map(user => ({
        url: `${''}/product/${user.id}`,
        lastModified: new Date().toLocaleDateString(),
    }));
}
