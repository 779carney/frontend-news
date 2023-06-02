import { useEffect, useState } from "react";
import { postComment } from "../../utils/api";

function CreateComment({ article_id, setCommentsList }) {

    const [body, setBody] = useState("")
    const [username, setUsername] = useState('grumpy19')
    const [hasCommented, setHasCommented] = useState(false)

    function handleSubmit(event) {
        
        event.preventDefault();
        const commentToPost = {
            author: username,
            body: body,
            votes: 0
        }

        setCommentsList((currComments) => [commentToPost, ...currComments])
        setBody('')
        setHasCommented(true)
        postComment(article_id, commentToPost)


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
        {hasCommented ? <p>comment posted</p> : null}

    </section>
    </>
}

export default CreateComment