//Parameters se values nikalna just like req.params
export default async function Page( { params }) {
    // throw new Error("Not implemented yet");
    let languages = ["python", "javascript", "java", "cpp", "csharp"];
    const resolvedParams = await params; // Await the params object
    if (languages.includes(resolvedParams.slug)) {        //Fetch your blog post by its slug
        return <div>My Post: {resolvedParams.slug}</div>
    }else {
        return <div>Post not found</div>
    }
}