import getArticleList from "../../utils/getArticleList"
import axios from "axios";
import { useEffect, useState } from "react";

function ArticleList() {
    const [articleList, setArticleList] = useState([])
    useEffect(() => {
        getArticleList().then(({ articles }) => {
            setArticleList(articles)
        })
    }, [])
    console.log(articleList);
    return <>
        <ul className="article-list">
            {articleList.map(({ title, topic, author, article_img_url, votes, article_id }) => {
                return (
                    <li className="article" key={article_id}>
                        <h2>{title}</h2><section className="article-info">
                        <p>topic:{topic}</p>
                        <p>author:{author}</p>
                        <p>votes:{votes}</p>
                        </section>
                        
                        <img src={article_img_url} alt={title}></img>
                    </li>
                )
            })}
        </ul>
    </>
}


export default ArticleList