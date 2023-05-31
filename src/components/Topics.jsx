import { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom'
import getTopics from "../../utils/getTopics";
import { TopicContext } from "../../TopicContext";




function Topics(){
const {topic, setTopic}= useContext(TopicContext)
const [isLoading, setIsLoading] = useState(true);
useEffect(()=>{
    setIsLoading(true)
    getTopics().then(({topics})=>{
        setTopic(topics)
        setIsLoading(false)
    })
}, [])
if(isLoading){
    return <p>loading...</p>
}
return <>
{topic.map(({slug})=>{
return <ul className="topics-list">
<li key={slug}><Link to= {`/topics/${slug}`}> <h2>{slug}</h2></Link>
</li>
</ul>
})}
</>

}

export default Topics