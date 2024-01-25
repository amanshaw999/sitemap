export default async function sitemap() {
    const data = await (
        await fetch('https://jsonplaceholder.typicode.com/users')
    ).json();

    return data.map(user => ({
        url: `${''}/product/${user.id}`,
        lastModified: new Date().toLocaleDateString(),
    }));
}
