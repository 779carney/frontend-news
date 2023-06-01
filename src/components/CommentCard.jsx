import { getCommentsByArticleById } from "../../utils/api"
import { useEffect, useState } from "react";

function CommentCard({ article_id }) {
    const [commentsList, setCommentsList] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true)
        getCommentsByArticleById(article_id).then(({comments}) => {
            setCommentsList(comments)
            setIsLoading(false)
        })
    }, [])
    
    if (isLoading) {
        return <p>Loading ...</p>
    }

    else if (commentsList.length === 0) {
        
        return <>
            <section className="comments-list">
                <h3>Comments</h3>
                <p>No comments yet</p>
            </section>
        </>
    }
    
    else
        return <>
            <section className="comments-list">
                <h3>Comments</h3>
                <ul>
                
                    {commentsList.map(({ author, body, votes, comment_id}) => {
                        return (
                        <li key ={comment_id} className="comment">
                            <p >{author}</p>
                            <p >{body}</p>
                            <p> {votes}</p>
                            </li>
                    )
                        
                    })}
                </ul>
            </section>
        </>

}

export default CommentCard