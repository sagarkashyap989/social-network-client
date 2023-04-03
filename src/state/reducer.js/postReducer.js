const initialState = {
    post:null,
    posts: [],
    errors:{},
    loading: true

}

export default function(state= initialState, action){
    const {type, payload} = action
 console.log(payload);
 let data = payload
    switch (type) {

        case "ADD_COMMENT":
            return{
                ...state,
                loading: false,
                post : {...state.post, comments: payload}
            }

        case "REMOVE_COMMENT":
            return{
                ...state,
                loading: false,
                post : {...state.post, comments: state.post.comments.filter(
                    comment => comment._id !== payload.comment_id
                )}
            }


        case "ADD_POST":
            return {
                ...state,
                posts:[payload, ...state.posts],
                loaidng:false
            }


        case "GET_POST":
            return {
                ...state,
                post: payload,
                loading: false
            }
        case "GET_POSTS":
            console.log(state);
            return {
                
                ...state, 
                posts: data,
                loading: false,
            }
        case "POST_ERROR":
            return {
                ...state, 
                errors: payload,
                loading:false
            }
        case "DELETE_POST":
            return {
                ...state,
                posts: state.posts.filter(post => post._id !== payload)
            }
        case "UPDATE_LIKE":
            return {
                ...state,
                posts : state.posts.map((post) => (post._id === payload.id ? {...post, likes: payload.likes}: post)    )
            }
        default:
            return state;
    }


}