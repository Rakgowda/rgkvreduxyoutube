import {SUB_FETCH_DATA,SUB_FETCH_SUCCESS,SUB_FETCH_ERR} from './subScriberType'
import axios from 'axios'





export const fetchsubRequest=()=>{

    return {
        type:SUB_FETCH_DATA
    }


}

export const fetchsubSucess=subdata=>{

    return {
        type:SUB_FETCH_SUCCESS,
        payload:subdata
    }


}


export const fetchsubError=(errData)=>{

    return{
        type:SUB_FETCH_ERR,
        payload:errData
    }
}

const fetchSub= ()=>{

    return (dispatch)=>{
        dispatch(fetchsubRequest)
        axios
        .get('https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCnw-TdFO6KgTWTxBatPWDMw&key=AIzaSyDgrPBx3AMpJFPKlx5MkmkkLw7OaIBcrQU')
        .then(response =>{
                const sub = response.data
                dispatch(fetchsubSucess(sub))
            } )
        .catch(
                err=>{
                    const errror = err.data
                    dispatch(fetchsubError(errror))
                }
            )
    }
}
export default fetchSub
