import { useEffect, useState } from "react";
import { postComment } from "../../utils/api";

function CreateComment({ article_id, setCommentsList }) {
    const [isValidComment, setIsValidComment] = useState(true)
    const [body, setBody] = useState("")
    const [username, setUsername] = useState('grumpy19')
    
    const [isSuccessful, setIsSuccessful]=useState('')

    function handleSubmit(event) {
        event.preventDefault();
        if (!body.length) {
            setIsSuccessful('invalid')
            setIsValidComment(false)
        } else {
            setIsValidComment(true)
            const commentToPost = {
                author: username,
                body: body,
                votes: 0
            }

            setCommentsList((currComments) => [commentToPost, ...currComments])
            postComment(article_id, commentToPost).then(() => {
                setIsSuccessful('comment posted')
            }).catch(()=>{
                setCommentsList((currComments) => {
                    let newComments =[...currComments]
                     newComments.shift()
                     return newComments
                 } )
                 
                
            })
            setBody('')



        }
    }


    return <> <section>
        <form className="create-comment" onSubmit={handleSubmit} method="post" action="" >
            <input id='comment-box' type="text" placeholder="write your comment here ..." value={body} onChange={(event) => {
                setBody(event.target.value)
            }} />
            <button id="submit_button" type="submit">
                Post
            </button>
     
         
        </form>
        {isSuccessful }

    </section>
    </>
}

export default CreateComment