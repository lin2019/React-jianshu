import axios from 'axios'
import { GET_HOME_DATA, CHANGE_PAGE, TOGGLE_BACK_TOP, MORE_WRITERS } from './actionTypes'

const changeHomeData = ({topicList, articleList, recommendList, writersList}) => ({
    type: GET_HOME_DATA,
    topicList,
    articleList,
    recommendList,
    writersList
})

const getMoreArticle = (data, page) => ({
    type: CHANGE_PAGE,
    data,
    page
})

const getMoreWriters = (data, page) => ({
    type: MORE_WRITERS,
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

export const getMoreAuthors = (page) => {
    return (dispatch) => {
        axios.get('/api/moreWriter.json?page=' + page).then(res => {
            dispatch(getMoreWriters(res.data.data, page))
        })
    }
}