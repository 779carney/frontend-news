import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://back-end-news-server.onrender.com/api/",
});

function getTopics() {
  
    return newsApi.get("topics").then((result) => {
      return result.data;
    });
  }
  
  export default getTopics;