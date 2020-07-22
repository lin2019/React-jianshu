import axios from 'axios'
import { GET_DETAIL } from './actionTypes'

const getArticle = (title, content) => ({
    type: GET_DETAIL,
    title,
    content
})

export const getDetail = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id='+id).then(res => {
            const { title, content } = res.data.data
            dispatch(getArticle(title, content))
        })
    }
}