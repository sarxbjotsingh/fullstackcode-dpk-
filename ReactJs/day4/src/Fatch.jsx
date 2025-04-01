import { useEffect, useState } from "react";
function Fatch() {
 const [data, setData] = useState([]);
 useEffect(() => {
 fetch("https://jsonplaceholder.typicode.com/posts")
 .then((response) => response.json())
 .then((json) => setData(json));
 }, []);
 return (
 <div>
 <h2>Posts</h2>
 {data.slice(0, 5).map((post) => (
 <p key={post.id}>{post.title}</p>
 ))}
 </div>
 );
}
export default Fatch;