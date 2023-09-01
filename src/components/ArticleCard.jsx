import { Link } from 'react-router-dom'


function ArticleCard({articleList, singleArticle}){
    
    return <>
  
    
    <ul className="article-list">
    <div class='flex-container'>
        {articleList.map(({ title, topic, author, article_img_url, votes, article_id }) => {
            return (
                <div class='article-div'>
              <Link to={`/articles/${article_id}`}key={article_id}>  <li className="article" >
                    <h2>{title}</h2><section className="article-info">
                    <p className='bullets'>topic:  {topic}</p>
                    <p className='bullets'>author: {author}</p>
                    <p className='bullets'>votes:  {votes}</p>
                    </section>
                    
                    <img src={article_img_url} alt={title}></img>
                   
                </li></Link>
                </div>
               )
        })}
           </div>
    </ul>

   
</>
}

export default ArticleCard