import CreateComment from "./CreateComment"
import CommentCard from "./CommentCard"
import { getCommentsByArticleById } from "../../utils/api"
import { useEffect, useState } from "react";

function CommentSection({article_id}){
const [commentsList, setCommentsList] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true)
        getCommentsByArticleById(article_id).then(({comments}) => {
            setCommentsList(comments)
            setIsLoading(false)
        })
    }, [])
    console.log(commentsList);
    if (isLoading) {
        return <p>Loading ...</p>
    }
   else
   
   
   
   return  <section>
    <CreateComment article_id={article_id} setCommentsList={setCommentsList}/>
    <CommentCard  commentsList={commentsList}/>
</section>
}

export default CommentSection