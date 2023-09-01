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

  export const getCommentsByArticleById=(article_id)=>{
    return newsApi.get(`articles/${article_id}/comments`).then((result)=>{
        return result.data
    })
  }
  
  export const patchVotes=(article_id, num)=>{
    return newsApi.patch(`articles/${article_id}`,{inc_votes:num})
  }
  
  
  
  export const postComment=(article_id, {author:username, body})=>{
    return newsApi.post(`articles/${article_id}/comments`,{username,body}).then((result)=>{
        return result.data
    })
  }
  