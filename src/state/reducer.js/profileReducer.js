const initialState = {
    profile: null,
    profiles: [],
    repos:[],
    loading:true,
    errors: {} 
}

function profileReducer(state= initialState, action){
     const {type, payload} = action;
     console.log(payload)
     switch(type){
        case "GET_PROFILE":
        case "UPDATE_PROFILE":

            return {...state,
                profile: payload,
                loading:false
            };
        case "UPDATE_PROFILES":
            return {
                ...state, 
                profiles: payload,
                loading: false
            }
        case "PROFILE_ERROR":
            return {
                ...state,
                errors:payload,
                loading:false
            };
        case "CLEAR_PROFILE":
            return {
                ...state,
                profile:null,
                repos:[]
            }
        default:
            return state    
     }
     
}

export default profileReducer;