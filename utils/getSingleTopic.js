import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://back-end-news-server.onrender.com/api/",
});

function getSingleTopic(slug) {

    return newsApi.get(`articles?topic=${slug}`).then((result) => {
      console.log(result);
      return result.data;
    });
  }
  
  export default getSingleTopic;