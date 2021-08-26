import { useState } from "react";

const Home = () => {
    const[name,setName] = useState('elzoz');
    const[age,setAge] = useState('22')
    const handleClick = (name,e) =>{
        setAge(18);
        setName("Dejango");
        console.log(`Hello ${name} :D`);
    }
    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <p>{name} is {age} years old</p>
            <button onClick={(e) => {handleClick('zezo',e)}}>Click Me</button>
        </div>
     );
}
 
export default Home;