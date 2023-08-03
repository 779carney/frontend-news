import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../../utils/api";
import CommentCard from "./CommentCard";
import UpvoteArticle from "./UpvoteArticle";
import CreateComment from "./CreateComment";
import CommentSection from "./CommentSection";

function SingleArticle() {
    const [singleArticle, setSingleArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const [currVotes, setCurrVotes] = useState(0);
    const { article_id } = useParams()
    useEffect(() => {
        setIsLoading(true)
        getArticleById(article_id).then(({ article }) => {
            setCurrVotes(article.votes)
            setSingleArticle(article)
            setIsLoading(false)

        })
    }, [])
    if (isLoading){
        return <><div className="loader">  </div>
                  <p className="loading">loading ...</p>  
                  </> }
    return <>
        <section id='single-article'>
            <h2>{singleArticle.title}</h2>
            <img src={singleArticle.article_img_url} alt={setSingleArticle.title} />
            <p>{singleArticle.body}</p>
            <h3>{singleArticle.topic}</h3>
            <p><strong>Votes: {currVotes}</strong> </p>
            <UpvoteArticle currVotes={currVotes} setCurrVotes={setCurrVotes} article_id={article_id}/>
        </section>
       <CommentSection article_id={article_id}/>
    </>
}

export default SingleArticle