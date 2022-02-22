

let intialState = {
    skill1: '',
    skill2: '',
    skill3: '',
    skill4: '',
    skill5: '',
    skill6: '',
    skill7: ''

}
const skillsReducer = (state = intialState, action)=>{
    
    if (action.type == "skillsUpdate") {
        console.log(action.payload);
        return {
            ...state,
            skill1: action.payload.skill1,
            skill2: action.payload.skill2,
            skill3: action.payload.skill3,
            skill4: action.payload.skill4,
            skill5: action.payload.skill5,
            skill6: action.payload.skill6,
            skill7: action.payload.skill7
        }
    } else {
        return state
      }

}

export default skillsReducer;