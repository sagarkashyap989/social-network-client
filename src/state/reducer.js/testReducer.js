const initialState = {
    name:null,
    age: null
}


function setName(state= initialState, action){


    const {type, payload} =action;

    if(type === "A"){
        return{
            ...state,
            name:payload
        }
    }else{
        return state
    }
}


export default setName;