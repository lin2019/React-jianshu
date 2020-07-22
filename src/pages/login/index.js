import React,{ PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { actionCreators } from './store'
import {
    LoginWrapper,
    LoginBox,
    Input,
    Button
} from './style'

class Detail extends PureComponent {
    constructor (props) {
        super(props)
        this.handleAccountInput = this.handleAccountInput.bind(this)
        this.handlePassWordInput = this.handlePassWordInput.bind(this)
    }
    render () {
        const { isLogin } = this.props
        if (!isLogin) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input 
                            placeholder="账号"
                            onInput={(e) => this.handleAccountInput(e)}>
                        </Input>
                        <Input 
                            placeholder="密码" 
                            type="password"
                            onChange={(e) => this.handlePassWordInput(e)}>
                        </Input>
                        <Button onClick={() => this.props.handleSubmit()}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        } else {
            return <Redirect to="/"></Redirect>
        }
    }

    handleAccountInput (e) {
        this.props.changeAccount(e.target.value)
    }

    handlePassWordInput (e) {
        this.props.changePwd(e.target.value)
    }

    componentWillUnmount () {
        this.props.resetLogin()
    }
}

const mapState = (state) => ({
    isLogin: state.getIn(['login','isLogin']),
    account: state.getIn(['login','account']),
    password: state.getIn(['login','password'])
})

const mapDispatch = (dispatch) => ({
    changeAccount (account) {
        dispatch(actionCreators.changeAccountVal(account))
    },
    changePwd (password) {
        dispatch(actionCreators.changePwdVal(password))
    },
    resetLogin () {
        dispatch(actionCreators.resetValue())
    },
    handleSubmit () {
        dispatch(actionCreators.submit(this.account, this.password))
    }
})

export default connect(mapState, mapDispatch)(Detail)