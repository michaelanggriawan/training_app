const initState = {
    training: [
        {id:'1', pengelola_training:'Michael Anggriawan', topik:'Belajar java 8', lokasi:'Tangerang', tanggal_mulai: '12-07-2018', tanggal_berakhir:new Date().toDateString(), harga:'Rp 150.000'},
        {id:'2', pengelola_training:'Alicia Amanda', topik:'Belajar Python', lokasi:'Tangerang', tanggal_mulai: '12-07-2018', tanggal_berakhir:new Date().toDateString(), harga:'Rp 160.000'},
        {id:'3', pengelola_training:'Kayla Hutagalung', topik:'Belajar C++', lokasi:'Tangerang', tanggal_mulai: '12-07-2018', tanggal_berakhir:new Date().toDateString(), harga:'Rp 170.000'}
    ]
}

const trainingReducer = (state = initState, action) => {
    if(action.type === 'TRAINING_LIST')
    {
        console.log('Training List', action.request)
        return state;
    }
    else if( action.type === 'TRAINING_LIST_ERROR')
    {
        console.log('Training List Error', action.err)
        return state;
    }
    return state;
}

export default trainingReducer;