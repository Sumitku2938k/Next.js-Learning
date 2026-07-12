
export default async function Home() {
  // console.log("Home page rendered");

  //data is stored in cache and does'nt fetches every time instead stored in cache
  // let data = await fetch('https://api.vercel.app/blog') 
  
  //fetches every time
  // let data = await fetch('https://api.vercel.app/blog', { cache: 'no-store' }) 
  
  //Revalidates the data after 3600 seconds (1 hour) and fetches new data after that time
  let data = await fetch('https://api.vercel.app/blog', { next: { revalidate: 3600 } })  
  let posts = await data.json()
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

//this will force the page to be dynamic and fetches the data every time
export const dynamic = 'force-dynamic' 