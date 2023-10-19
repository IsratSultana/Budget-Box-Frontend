import API from "../../API";

import { addPostAction,fetchPostAction,deletePostAction } from "./actions";

const api = new API()

export const fetchPosts = params =>{
    return dispatch =>{
        return api
           .getposts(params)
           .then(posts =>
             dispatch(fetchPostAction(posts)))
           .catch(error => 
            alert('Failed to connect API: /posts/'))
    }
}


export const addPosts = postbody =>{
    const {name,body} = postbody;

    return dispatch =>{
      
        if (name === '' || body === ''){
          alert('Please fill out name and body.');
        return false;
    }
        return api
           .addposts(postbody)
           .then(posts =>
             dispatch(addPostAction(posts)))
           .catch(error => 
            alert('Failed to connect API to add a post'))
    }
}



export const deletePosts = id =>{
    return dispatch =>{
        return api
           .deleteposts(id)
           .then(() =>
             dispatch(deletePostAction(id)))
           .catch(error => 
            alert('Failed to connect API to delete a post'))
    }
}
