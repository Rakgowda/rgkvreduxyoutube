import {SUB_FETCH_DATA,SUB_FETCH_SUCCESS,SUB_FETCH_ERR} from './subScriberType'
const initialState ={

    loading:true,
    data:[],
    err:null

}


const subreducer=(state=initialState,action)=>{


    switch (action.type) {
        case SUB_FETCH_DATA:
            return{
                ...state,
                loading:true
            }

            
            case SUB_FETCH_SUCCESS:
                return{
                    ...state,
                    loading:false,
                    data:action.payload,
                    err:""
                }
              
                case SUB_FETCH_ERR:
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

export default subreducer
