import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const Blog = () => {
    const {id} = useParams()
    const {data : blog,isPending,error} = useFetch('http://localhost:8000/blogs/'+id)
    const history = useHistory()
    const handleDelete = () => { 
        fetch('http://localhost:8000/blogs/'+id,{
            method: "DELETE"
        }).then(()=> {
            history.push('/')
        })
    }
    return ( 
        <div className="blog">
            {isPending && <div>Loading...</div>}
            {error && <div>Error : {error.message};</div>}
            {blog &&
            <article>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <div>{blog.body}</div>
                <button onClick= {handleDelete}>Delete blog</button>
            </article>
            }
        </div>
     );
}
 
export default Blog;