import axios from "axios";


const newsApi = axios.create({
    baseURL: "https://back-end-news-server.onrender.com/api/",
});

export const getArticleList = () => {
    return newsApi.get("articles").then((result) => {
        return result.data;
    });
}

export const getSingleTopic = (slug) => {

    return newsApi.get(`articles?topic=${slug}`).then((result) => {
        console.log(result);
        return result.data;
    })
}

export const getTopics =()=> {
  
    return newsApi.get("topics").then((result) => {
      return result.data;
    });
  }

  export const getArticleById=(article_id)=>{
    return newsApi.get(`articles/${article_id}`).then((result)=>{
        return result.data
    })
  }
  