import { Link } from 'react-router-dom'


function ArticleCard({articleList, singleArticle}){
    return <>
    <ul className="article-list">
        {articleList.map(({ title, topic, author, article_img_url, votes, article_id }) => {
            return (
              <Link to={`/articles/${article_id}`}>  <li className="article" key={article_id}>
                    <h2>{title}</h2><section className="article-info">
                    <p>topic:{topic}</p>
                    <p>author:{author}</p>
                    <p>votes:{votes}</p>
                    </section>
                    
                    <img src={article_img_url} alt={title}></img>
                </li></Link>
            )
        })}
    </ul>
</>
}

export default ArticleCard