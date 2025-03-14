import ResultItem from "./ResultItem";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import axios, { all } from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const fetchBooks = ({ pageParam }: { pageParam: number }) => {
  return axios.get(`http://localhost:3001/books?_page=${pageParam}`);
};

const BookResultList = () => {
  const searchKeyword=useSelector((state:any)=>state.search.keyword);
  const { data, hasNextPage, fetchNextPage, error, isError, isLoading } = useInfiniteQuery({
    queryKey: ["books", "page"],
    queryFn: fetchBooks,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if(allPages.length<100){
        return allPages.length+1;
      } 
      else{
        return undefined;
      }
    },
  });

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);
  console.log(data?.pages[0].data.data);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  const ResultItems=data?.pages.flatMap((page:any)=>{
    return(
      page.data.data.map((book:any)=>{
        if(searchKeyword.length===0){
          return (
            <ResultItem
                    key={book.id}
                    title={book.title}
                    price={book.price}
                    image_url={book.image_url}
              />
      
          )
        }
        else if(book.title.toLowerCase().includes(searchKeyword.toLowerCase())){
          return (
            <ResultItem
                    key={book.id}
                    title={book.title}
                    price={book.price}
                    image_url={book.image_url}
              />
      
          )
        }
      })
    )
  })


  

  return (
    <>
      <div className="flex flex-wrap gap-10 w-4/5 mt-10">
        {ResultItems}
        <div ref={ref} className="h-10 flex flex-col justify-center items-center">
        {hasNextPage ? "" : "No more books to load."}
      </div>
      </div>
      
    </>
  );
};

export default BookResultList;
