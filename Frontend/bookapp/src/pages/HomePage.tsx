import BestSellingBooks from "../components/BestSellingBooks";
import BookResultList from "../components/BookResultList";
import Navbar from "../components/Navbar";
// import Weather from "../components/Weather";

const HomePage=()=>{
    return (
        <>
           <Navbar/>
           {/* <Weather /> */}
           <div className="flex">
                <div className="w-1/5">
                    <BestSellingBooks />
                </div>
                <BookResultList />   
           </div>
           
     
        </>
        
    )
}

export default HomePage;