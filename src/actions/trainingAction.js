export const trainingRequest = (request) => {
    return (dispatch, getState, {getFirebase, getFirestore})=> {
        // make async call to database
        const firestore = getFirestore()
        firestore.collection('training_request').add({
            ...request,
        }).then(()=> {
            dispatch({ type: 'TRAINING_LIST', request})
        }).catch((err)=> {
            dispatch({ type: 'TRAINING_LIST_ERROR', err})
        })
    }
};