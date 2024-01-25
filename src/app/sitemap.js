export default async function sitemap() {
    const { data } = await (await fetch('http://localhost:4000/blogs')).json();

    return data.map(blog => ({
        url: `${window.location.host}/blog/${blog.title}`,
        lastModified: new Date(blog.publishAt).toLocaleDateString(),
    }));
}
