import { useEffect } from "react";
import { useState } from "react";

const useProduct=()=>{
    const [courses,setCourses] = useState([]);
    useEffect(()=>{
        fetch('./fack_data.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[]);
    return [courses,setCourses];
}
export default useProduct;