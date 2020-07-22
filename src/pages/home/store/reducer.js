import { fromJS } from 'immutable'
import { GET_HOME_DATA, CHANGE_PAGE, TOGGLE_BACK_TOP } from './actionTypes'
const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    page: 1,
    isShow: false
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case GET_HOME_DATA:
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList),
                recommendList: fromJS(action.recommendList)
            })
        case CHANGE_PAGE:
            return state.merge({
                articleList: state.get('articleList').concat(fromJS(action.data)),
                page: action.page
            })
        case TOGGLE_BACK_TOP:
            return state.set('isShow', action.isShow)
        default: 
            return state;
    }
}