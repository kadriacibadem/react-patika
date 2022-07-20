import axios from "axios";
const getData = (userID) =>{
    return new Promise (async (resolve,reject) =>{
      const {data : user} = await axios(
          "https://jsonplaceholder.typicode.com/users/" + userID
      )
      resolve(user)
  
      const posts = () =>{
          return new Promise (async (resolve,reject) =>{
            const {data : post} = await axios(
                "https://jsonplaceholder.typicode.com/posts?userId=" + userID
            )
            resolve(post)
          })  
      }
    })
  }

  export default getData