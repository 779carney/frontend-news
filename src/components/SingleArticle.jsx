import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../../utils/api";

function SingleArticle(){
    const[singleArticle, setSingleArticle]= useState({})
 const {article_id}=useParams()
 console.log(article_id);
 useEffect(()=>{
getArticleById(article_id).then(({article})=>{
setSingleArticle(article)
})
 }, [])
 return <>
 <section id='single-article'>
 <h2>{singleArticle.title}</h2>
 <img src={singleArticle.article_img_url} alt={setSingleArticle.title}/>
 <p>{singleArticle.body}</p>
 <p>{singleArticle.topic}</p>
 <p>{singleArticle.votes}</p>
 </section>
 </>
}

export default SingleArticle