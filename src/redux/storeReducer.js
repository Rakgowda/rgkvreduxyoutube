import {ACTION_FETCH_DATA,ACTION_FETCH_SUCCESS,ACTION_FETCH_ERR} from './dataType'
const initialState ={

    loading:true,
    data:[],
    err:null

}


const reducer=(state=initialState,action)=>{


    switch (action.type) {
        case ACTION_FETCH_DATA:
            return{
                ...state,
                loading:true
            }

            
            case ACTION_FETCH_SUCCESS:
                return{
                    ...state,
                    loading:false,
                    data:action.payload,
                    err:""
                }
              
                case ACTION_FETCH_ERR:
                return{
                    ...state,
                    loading:false,
                    data:[],
                    err:action.payload
                }
               
        default:
            return state
    }


}

export default reducer
