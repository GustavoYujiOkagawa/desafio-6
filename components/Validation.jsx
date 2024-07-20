function Validation(value){
    let error = {};

    if (!value.email) {
        error.email = "Valid email required";
    } else if (!/[^\s@]+@[^\s@]+\.[^\s@]+/.test(value.email)) {
        error.email = "Email Is Invalid";
    }

    return error;
}


export default Validation;

