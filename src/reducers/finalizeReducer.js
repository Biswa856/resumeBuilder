const initialState ={
    document: {
        color: 1,
        fontsize: 1,
        fontfamily: 1,
    }
};

const finalizeReducer = (state=initialState, action)=>{
    switch(action.type){
        case 'DOCUMENT_STYLE_CHANGE': 
        return {
            ...state,
           document: action.payload
        };
    
        default : return state;
    }
}
export default finalizeReducer;