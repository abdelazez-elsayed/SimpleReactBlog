import { useState , useEffect} from "react";
import BlogList from "./BlogsList";
import useFetch from "./useFetch";

const Home = () => {
    const {data : blogs ,isPending,error} = useFetch('http://localhost:8000/blogs'); 


    

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            {error && <div>error {error}</div>}
            {isPending &&<div>loading...</div>}
            {blogs && <BlogList blogs={blogs}/>}
        </div>
     );
    
}
 
export default Home;