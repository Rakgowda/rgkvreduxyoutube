import * as news from './newsType'
import axios from 'axios'


export const fetchnewsRequest=()=>{

    return {
        type:news.NEWS_FETCH_DATA
    }


}

export const fetchnewsSucess=newsdata=>{

    return {
        type:news.NEWS_FETCH_SUCCESS,
        payload:newsdata
    }


}


export const fetchnewsError=(errData)=>{

    return{
        type:news.NEWS_FETCH_ERR,
        payload:errData
    }
}


const fetchNews= (category)=>{

    return (dispatch)=>{
        dispatch(fetchnewsRequest)
        axios
        .get('https://newsapi.org/v2/top-headlines?country=in&apiKey=ca7d50b835c14c3bb800898d1f2e91c0&category='+category)
        .then(response =>{
                const news = response.data
                dispatch(fetchnewsSucess(news))
            } )
        .catch(
                err=>{
                    const errror = err.data
                    dispatch(fetchnewsError(errror))
                }
            )
    }
}
export default fetchNews