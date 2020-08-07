import { fromJS } from 'immutable'
import { GET_HOME_DATA, CHANGE_PAGE, TOGGLE_BACK_TOP, MORE_WRITERS } from './actionTypes'
const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    page: 1,
    isShow: false,
    writersList: [],
    w_page: 1
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case GET_HOME_DATA:
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList),
                writersList: fromJS(action.writersList)
            })
        case CHANGE_PAGE:
            return state.merge({
                articleList: state.get('articleList').concat(fromJS(action.data)),
                page: action.page
            })
        case TOGGLE_BACK_TOP:
            return state.set('isShow', action.isShow)
        case MORE_WRITERS:
            return state.merge({
                writersList: fromJS(action.data),
                w_page: action.page
            })
        default: 
            return state;
    }
}