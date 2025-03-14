import { useEffect, useState } from "react"
import logoImg from "../assets/logo.png"
import { searchSliceActions } from "../store/searchSlice";
import { useDispatch} from "react-redux";

export default function Searchbar(){
    
    const dispatch=useDispatch();
    const searchTextUpdateHandler=(e:any)=>{
        dispatch(searchSliceActions.updateState({keyword:e.target.value}));
    }

    return(
        <>
            <input type="text"  onChange={searchTextUpdateHandler} className="w-3/4 h-12 my-auto p-2 border-3 border-white rounded-l-md  outline-none" placeholder="Search Books" />
            <button className="bg-red-100 h-12 my-auto rounded-r-md">
                <img className="h-12 my-auto rounded-r-md" src={logoImg} alt="" />
            </button>
        </>
    )
}