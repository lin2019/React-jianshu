import { fromJS } from 'immutable'
import { CHANGE_LOGIN, CHANGE_LAYOUT, CHANGE_ACCOUNT, CHANGE_PASSWORD, RESET_VALUE } from './actionTypes'
const defaultState = fromJS({
    isLogin: false,
    account: '',
    password: ''
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case CHANGE_LOGIN:
            return state.set('isLogin', true);
        case CHANGE_LAYOUT:
            return state.set('isLogin', false);
        case CHANGE_ACCOUNT:
            return state.set('account', fromJS(action.account));
        case CHANGE_PASSWORD:
            return state.set('password', fromJS(action.password));
        case RESET_VALUE:
            return state.merge({
                account: '',
                password: ''
            })
        default: 
            return state;
    }
}