import { useParams } from "react-router-dom";
import {getSingleTopic} from "../../utils/api";
import { useEffect, useState } from "react";
import ArticleList from "./ArticleList";


function FilterTopics(){
     const [filteredArticleList, setFilteredArticleList] = useState([]);
     const [isLoading, setIsLoading] = useState(true);
    const {topic}=useParams()
useEffect(()=>{
    getSingleTopic(topic).then(({articles})=>{
        console.log(articles);
        setFilteredArticleList(articles)
        setIsLoading(false)
    })
},[topic])
if (isLoading){
    return <><div className="loader">  </div>
              <p className="loading">loading ...</p>  
              </> }
 return  <>
    <ArticleList filteredArticleList={filteredArticleList}/>
    
      </>

}

export default FilterTopics