import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
    const [title, setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('zezo');
    const [isPending,setIsPending] = useState(false);
    const history = useHistory()
    const handleSubmit = (e) =>{
        e.preventDefault()
        setIsPending(true)
        const blog = {title, body, author}
        setTimeout(() => {
            fetch('http://localhost:8000/blogs',{
            method : "POST",
            headers : {"Content-Type": "application/json"},
            body : JSON.stringify(blog)

        }).then( ()=>{
            console.log("new blog added")
            setIsPending(false)
            history.push('/')
        
        })
        },1000)
        
    }
    return ( 
        <div className="create">
            <h2>Create your own blog</h2>

            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input type="text" value={title} required onChange={(e) => setTitle(e.target.value)}/>
                <label>Blog body</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <label>Blog Author</label>
                <select value={author} onChange={(e)=> setAuthor(e.target.value)}>
                    <option value="zezo">zezo</option>
                    <option value="mido">mido</option>
                </select>
                {!isPending && <button>Add blog</button>}
                {isPending && <button disabled>Adding blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;