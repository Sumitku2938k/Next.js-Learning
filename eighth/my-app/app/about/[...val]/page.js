//Array of values in params in dynamic routes
export default async function Page( { params }) {
    console.log(await params);
    return <div>I am about page check console</div>
}