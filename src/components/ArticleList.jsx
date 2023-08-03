import {getArticleList} from "../../utils/api"
import axios from "axios";
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";

function ArticleList() {
    const [articleList, setArticleList] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true)
        getArticleList().then(({ articles }) => {
            setArticleList(articles)
            setIsLoading(false)
        })
    }, [])
if (isLoading){
    return <><div className="loader">  </div>
              <p className="loading">loading ...</p>  
              </> }
    return  <>
    <ArticleCard articleList={articleList}/>
      </>
}


export default ArticleList