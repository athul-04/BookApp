import { useEffect, useState } from "react";
import { getCurrentTimeZone } from "../utils/utilFunctions";

export default function Weather(){

    const currentHour=new Date().getHours();
    const [currentTimeZone,setCurrentTimeZone]=useState("");
    const [imageSrc,setImageSrc]=useState<string>("");
    
    useEffect(() => {
        setCurrentTimeZone(getCurrentTimeZone(currentHour));
    }, [currentHour]);

    useEffect(() => {
        if (!currentTimeZone) return; 
        import(`../assets/${currentTimeZone}.png`)
            .then((module) => setImageSrc(module.default))
            .catch((error) => {
                console.log("Error loading image:", error);
                setImageSrc(""); 
            });
    }, [currentTimeZone]);
    
    console.log(currentTimeZone);
    return (
        <>

            <div className="h-20 text-center">
                <img className="h-35" src={imageSrc} alt="" />
                
            </div>

        </>
    )
}
