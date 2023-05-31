import { useParams } from "react-router-dom";
import getSingleTopic from "../../utils/getSingleTopic";
import { useEffect, useState } from "react";


function FilterTopics({articleList, setArticleList}){
    const {slug}=useParams()
useEffect(()=>{
    getSingleTopic(slug).then((data)=>{
        console.log(data);
    })
})
}

export default FilterTopics