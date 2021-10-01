import { useState, useEffect } from "react"


const useFetch = (url) => {

    const [data,setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error , setError] = useState(false)

    useEffect( () => {
        const abortCont = new AbortController();
        setTimeout(() => {
         fetch(url, {signal : abortCont.signal})

         .then(res => {
             if(!res.ok) {
                 throw Error("Response is not ok , couldn't fetch the resource");
             }
             return res.json();
         })
         .then(data => {
            
             setData(data)
             setIsPending(false)
             setError(null);
         })
         .catch(err => {
             if(err.name === 'AbortError'){
                console.log("Abort fetch"+err.message)
             }
            else{
             setError(err.message)
             console.log(err.message)
             setIsPending(null)
            }
         })
        },1000)

        return () => abortCont.abort();
     } , [url])

     return {data,isPending,error}
}
export default useFetch