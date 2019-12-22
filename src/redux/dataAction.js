
import {ACTION_FETCH_DATA,ACTION_FETCH_SUCCESS,ACTION_FETCH_ERR} from '../redux/dataType.js'
import axios from 'axios'





export const fetchUserRequest=()=>{

    return {
        type:ACTION_FETCH_DATA
    }


}

export const fetchUserSucess=userdata=>{

    return {
        type:ACTION_FETCH_SUCCESS,
        payload:userdata
    }


}


export const fetchUserError=(errData)=>{

    return{
        type:ACTION_FETCH_ERR,
        payload:errData
    }
}

export const fetchUrl = ()=>{

    return (dispatch)=>{
        dispatch(fetchUserRequest)
        axios
        .get('wss://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=UUnw-TdFO6KgTWTxBatPWDMw&key=AIzaSyDgrPBx3AMpJFPKlx5MkmkkLw7OaIBcrQU')
        .then(response =>{
                const user = response.data
                dispatch(fetchUserSucess(user))
            } )
        .catch(
                err=>{
                    const errror = err.data
                    dispatch(fetchUserError(errror))
                }
            )
    }
}
