let initialState={
    name:'Kingsuk',
    email:'kingsuk@gmail.com',
    streetAddress:'',
    city:'Kolkata',
    country:'',
    phonenumber:'',
    phonenumber2:'',

} 

const ContactUpdate=(state=initialState,action)=>{
    if(action.type=="ContactFill"){
        console.log(action.payload);
        return {
            ...state,
            name:action.payload.name,
            email:action.payload.email,
            streetAddress:action.payload.streetAddress,
            city:action.payload.city,
            country:action.payload.country,
            phonenumber:action.payload.phonenumber,
            phonenumber2:action.payload.phonenumber2,
        }
    }else{
        return state
    }
}
export default ContactUpdate;