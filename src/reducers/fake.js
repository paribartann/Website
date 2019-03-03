let initialState=false;

export const fake=(state=initialState,action)=>{

    switch(action.type){
        case "TRUE":
        {
            return true;
        }
        case "FALSE":{
            return false;
        }
        default:
        {
            return state;
        }
    }

}