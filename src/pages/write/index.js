import React,{ PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Detail extends PureComponent {
    render () {
        const { isLogin } = this.props
        if (isLogin) {
            return (
                <div>写文章页面</div>
            )
        } else {
            return <Redirect to="/login"></Redirect>
        }
    }
}

const mapState = (state) => ({
    isLogin: state.getIn(['login','isLogin'])
})

export default connect(mapState, null)(Detail)