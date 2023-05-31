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
    return <p className="loader">loading ...</p>
}
    return  <>
    <ArticleCard articleList={articleList}/>
      </>
}


export default ArticleList