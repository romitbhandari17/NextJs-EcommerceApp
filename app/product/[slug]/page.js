export default async function Product({ params }) {
    const { slug } = params;
    //const blog = await getBlogData(params);
    //if (loading) return <p>Loading...</p>;
    return (
        <div>{slug}</div>
    )
}