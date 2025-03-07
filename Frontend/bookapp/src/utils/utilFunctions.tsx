
export function getCurrentTimeZone(CurrentHour:number){
    let currentTimeZone="";
    if(CurrentHour>=5 && CurrentHour<12){
        currentTimeZone="morning";
    }
    else if(CurrentHour>=12 && CurrentHour<17){
        currentTimeZone="afternoon";
    }
    else if(CurrentHour>=17 && CurrentHour<21){
        currentTimeZone="evening";
    }
    else{
        currentTimeZone="night";
    }
    return currentTimeZone;

}