import axios from "axios";

//add your youtube api key here from google developer dashboard
const KEY = "AIzaSyCclqU7RnwJ-5R6L2OeWiRAaLiFaY3iz34";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 10,
    key: KEY
  }
});
