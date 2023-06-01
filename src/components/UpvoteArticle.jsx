import { useEffect, useState } from "react";
import { patchVotes , patchVotesDown} from "../../utils/api";


function UpvoteArticle({currVotes, setCurrVotes, article_id}){
    const [hasUpVoted, setHasUpVoted]=useState(false)
    const [hasDownVoted, setHasDownVoted]=useState(false)

function handleClick(){
    setCurrVotes((currVotes)=> currVotes +1)
    setHasUpVoted(true)
patchVotes(article_id).then((data)=>{
   
return data
    }).catch(()=>{
        setCurrVotes((currVotes)=> currVotes -1)
        setHasUpVoted(false)
    })

}

function handleClickDown(){
    setCurrVotes((currVotes)=> currVotes -1)
    setHasDownVoted(true)
patchVotesDown(article_id).then((data)=>{
   
return data
    }).catch(()=>{
        setCurrVotes((currVotes)=> currVotes -1)
        
        setHasDownVoted(false)
       
    })

}




   return <>
     <button className='upvoteButton' onClick={handleClick} disabled={hasUpVoted} > upvote👍 </button>
     <button className='downvoteButton' onClick={handleClickDown} disabled={hasDownVoted} > downvote👎 </button>
     </>
}

export default UpvoteArticle