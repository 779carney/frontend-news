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
<<<<<<< HEAD
    
     if (isLoading){
        return <><div className="loader">  </div>
                  <p className="loading">loading ...</p>  
                  </> }
=======
    console.log(commentsList);
    if (isLoading) {
        return <p>Loading ...</p>
    }
>>>>>>> 15525b266fa6cd5a9352b2f9d682c4687891bc44
   else
   
   
   
   return  <section>
    <CreateComment article_id={article_id} setCommentsList={setCommentsList}/>
    <CommentCard  commentsList={commentsList}/>
</section>
}

export default CommentSection