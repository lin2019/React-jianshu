import axios from 'axios'
import { GET_HOME_DATA, CHANGE_PAGE, TOGGLE_BACK_TOP } from './actionTypes'

const changeHomeData = ({topicList, articleList, recommendList}) => ({
    type: GET_HOME_DATA,
    topicList,
    articleList,
    recommendList
})

const getMoreArticle = (data, page) => ({
    type: CHANGE_PAGE,
    data,
    page
})

export const getHomeData = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then(res => {
            dispatch(changeHomeData(res.data.data))
        })
    }
}

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/loadList.json?page='+ page).then(res => {
            dispatch(getMoreArticle(res.data.data, page+1))
        })
    }
}

export const toggleBackTop = (isShow) => ({
    type: TOGGLE_BACK_TOP,
    isShow
})