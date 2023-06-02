import { useEffect, useState } from "react";
import { patchVotes } from "../../utils/api";


function UpvoteArticle({currVotes, setCurrVotes, article_id}){
    const [hasUpVoted, setHasUpVoted]=useState(false)
    const [hasDownVoted, setHasDownVoted]=useState(false)
//if has down voted true set it backj to flase 
// same for other but opposite 
function handleClick(){
    setCurrVotes((currVotes)=> currVotes +1)
    setHasUpVoted(true)
patchVotes(article_id, 1).then((data)=>{
   
return data
    }).catch(()=>{
        setCurrVotes((currVotes)=> currVotes -1)
        setHasUpVoted(false)
    })
if(hasDownVoted){
    setHasDownVoted(false)
}
}

function handleClickDown(){
    setCurrVotes((currVotes)=> currVotes -1)
    setHasDownVoted(true)
patchVotes(article_id,-1).then((data)=>{
   
return data
    }).catch(()=>{
        setCurrVotes((currVotes)=> currVotes +1)
        
        setHasDownVoted(false)
       
    })
    if(hasUpVoted){
        setHasDownVoted(false)
    }
}




   return <>
     <button className='upvoteButton' onClick={handleClick} disabled={hasUpVoted} > upvote👍 </button>
     <button className='downvoteButton' onClick={handleClickDown} disabled={hasDownVoted} > downvote👎 </button>
     </>
}

export default UpvoteArticle