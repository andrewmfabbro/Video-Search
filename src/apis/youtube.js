import axios from "axios";

const KEY = "AIzaSyC9aBFQk6JRG8f139BymmC_bgTZPgD0Wgw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 10,
    key: KEY
  }
});
