

function CommentCard({ commentsList }) {
  

   if (commentsList.length === 0) {
        
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
                
                    {commentsList.map(({ author, body, votes, comment_id},index) => {
                        return (
                        <li key ={index} className="comment">
                            <p ><strong>{author}</strong></p>
                            <p >{body}</p>
                            <p> <strong>Votes: {votes}</strong></p>
                            </li>
                    )
                        
                    })}
                </ul>
            </section>
        </>

}

export default CommentCard