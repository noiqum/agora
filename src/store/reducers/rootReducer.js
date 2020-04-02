const initialState={
    
    formShow:false,
        title:'',
        hostName:'',
        date:'',
        address:'',
        description:''
    
}

const rootReducer=(state=initialState,action)=>{
    switch (action.type) {
        case 'FORMHANDLE' :
            return{...state,
                formShow:true}
        case 'FORMCLOSE' :
            return {
                ...state,
            formShow:false
            }
        case 'ONINPUTCHANGE-TITLE':
            return{
                ...state,
                title:action.value
            }
        case 'ONINPUTCHANGE-ADDRESS':
            return {
                ...state,
                address:action.value
            }
        case 'ONINPUTCHANGE-HOSTNAME':
            return {
                ...state,
                hostName:action.value
            }
        case   'ONINPUTCHANGE-DATE':
            return{
                ...state,
                date:action.value
            }
        case  'ONINPUTCHANGE-DESCRIPTION':
            return {
                ...state,
                description:action.value
            }
        default:
            break;
    }
    
    return state;
}

export default rootReducer;