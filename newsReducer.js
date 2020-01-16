import * as news from "./newsType";

const newsinitialState = {
  newsloading: true,
  newsdata: [],
  newserr: null,
  newsend: false
};

const newsreducer = (state = newsinitialState, action) => {
  switch (action.type) {
    case news.NEWS_FETCH_END:
      return {
        ...state,
        newsend: true
      };
    case news.NEWS_FETCH_DATA:
      return {
        ...state,
        loadinnewsloadingg: true
      };

    case news.NEWS_FETCH_SUCCESS:
      return {
        ...state,
        newsloading: false,
        newsdata: state.newsdata.concat(action.payload),
        newserr: ""
      };

    case news.NEWS_FETCH_ERR:
      return {
        ...state,
        newsloading: false,
        newsdata: [],
        newserr: action.payload
      };

    default:
      return state;
  }
};

export default newsreducer;
