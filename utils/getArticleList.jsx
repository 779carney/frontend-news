import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://back-end-news-server.onrender.com/api/",
});

function getArticleList() {
    return newsApi.get("articles").then((result) => {
      return result.data;
    });
  }
  
  export default getArticleList;