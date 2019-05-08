const initState = {
    authError: null
};

const authReducer = ( state= initState , action)=>{
    if(action.type === 'LOGIN_ERROR')
    {
        console.log('Login error')
        return {
            ...state,
            authError: 'Login Failed'
        }
    }
    else if( action.type === 'LOGIN_SUCCESS')
    {
        console.log('Login Success')
        return {
            ...state,
            authError: null
        }
    }
    else if( action.type === 'SIGNOUT_SUCCESS')
    {
        console.log('Sign Out Success');
        return state;
    }
    else if( action.type === 'SIGNUP_SUCCESS')
    {
        console.log('Sign Up Success')
        return{
            ...state,
            authError:null
        }
    }
    else if( action.type === 'SIGNUP_ERROR')
    {
        console.log('Sign Up Error')
        return {
            ...state,
           authError: action.err.message
        }
    }
    return state;
}

export default authReducer;