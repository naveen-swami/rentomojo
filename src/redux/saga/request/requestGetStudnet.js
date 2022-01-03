import axios from "axios";

export default function requestGetStudnet() {

   return axios.request(
        {
            method: "get",
            url: "https://my-json-server.typicode.com/naveen-swami/api-test-data/studnet",
        }
    )
}