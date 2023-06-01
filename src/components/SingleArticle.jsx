import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../../utils/api";
import CommentCard from "./CommentCard";

function SingleArticle(){
    const[singleArticle, setSingleArticle]= useState({})
    const [isLoading, setIsLoading] = useState(true);
 const {article_id}=useParams()
 useEffect(()=>{
    setIsLoading(true)
getArticleById(article_id).then(({article})=>{
setSingleArticle(article)
setIsLoading(false)
})
 }, [])
 if(isLoading){
    return <p>Loading...</p>
 }
 return <>
 <section id='single-article'>
 <h2>{singleArticle.title}</h2>
 <img src={singleArticle.article_img_url} alt={setSingleArticle.title}/>
 <p>{singleArticle.body}</p>
 <p>{singleArticle.topic}</p>
 <p>{singleArticle.votes}</p>
 </section>
 <section>
    <CommentCard article_id={article_id}/>
 </section>
 </>
}

export default SingleArticle