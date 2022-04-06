import axios from "axios";

async function getData(userId) {
  let { data: user } = await axios(
    "https://jsonplaceholder.typicode.com/users/" + userId
  );
  let { data: post } = await axios(
    "https://jsonplaceholder.typicode.com/posts?userId=" + userId
  );

  console.log(user, "Posts:", post);
}

export default getData;
