const Validation =(values) =>{
    let errors={};
    //for name
    if(!values.fname){
        errors.fname='name is required'; 
    }
    if(!values.password){
        errors.password='password is required';
    }
}
export default Validation;