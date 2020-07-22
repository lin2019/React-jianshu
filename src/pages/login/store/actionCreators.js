import axios from 'axios'
import { CHANGE_LOGIN, CHANGE_LAYOUT, CHANGE_ACCOUNT, CHANGE_PASSWORD, RESET_VALUE } from './actionTypes'

const changeLogin = () => ({
    type: CHANGE_LOGIN
})

export const changeAccountVal = (account) => ({
    type: CHANGE_ACCOUNT,
    account
})

export const changePwdVal = (password) => ({
    type: CHANGE_PASSWORD,
    password
})

export const resetValue = () => ({
    type: RESET_VALUE
})

export const submit = (account, password) => {
    return (dispatch) => {
        axios.get('/api/login.json?account=' + account + '&pwd=' + password).then(res => {
            if (res.data.data) {
                dispatch(changeLogin())
                dispatch(resetValue())
            } else {
                alert('登录失败')
            }
        })
    }
}

export const layout = () => ({
    type: CHANGE_LAYOUT
})