//build an articleReducer
import {articles} from '../data/data';

const GET_ARTICLES = 'article/getArticles'

export const getArticles = () => {
    return {
        type: GET_ARTICLES,
        articles: articles
    }
}


// const initialState = {articles:articles}

const articleReducer = (state = {articles:[], isLoading:false}, action) => {
    switch(action.type){
        case GET_ARTICLES:
        return {...state, articles:[...action.articles]}
        default:
    }
return state;


}

export default articleReducer;