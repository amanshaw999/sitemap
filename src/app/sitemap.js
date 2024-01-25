export default async function sitemap() {
    const { data } = await (
        await fetch('https://server-olth.vercel.app/blogs')
    ).json();

    return data.map(blog => ({
        url: `http://localhost:3000/blog/${blog.title}`,
        lastModified: new Date(blog.publishAt).toLocaleDateString(),
    }));
}
