export default async function sitemap() {
    const { data } = await (
        await fetch('https://server-olth.vercel.app/blogs', {
            cache: 'no-store',
        })
    ).json();

    return data.map(blog => ({
        url: `http://localhost:3000/blog/${blog.title}`,
        lastModified: new Date(blog.publishAt).toLocaleDateString(),
    }));
}
export const dynamic = 'force-dynamic';
export const revalidate = 0;
