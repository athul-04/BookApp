import ResultItem from "./ResultItem";

import { books as staticBooks } from "../data/books";
import { useEffect, useState } from "react";


const fetchBooks=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(staticBooks);
        },1000);
    })
}





const BookResultList=()=>{

    const [books,setBooks]=useState<any>([]);
    useEffect(()=>{
        async function fetchPromiseBooks() {
            const response=await fetchBooks();
            setBooks(response);    
        }
        fetchPromiseBooks()
    },[])

    const ResultItems=books.map((book:any)=>{
        return(
            <ResultItem title={book.title} price={book.price} image_url={book.image_url}/>
        )
    })


    return (
        <>
            <div className="flex flex-wrap gap-5 w-4/5 mt-10">
                {ResultItems}
            </div>
        </>
    )
}

export default BookResultList;