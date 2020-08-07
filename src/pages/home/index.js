import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import * as components from './components'
import QrBox from '../../common/qrbox'
import { 
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style'

class Home extends Component {
    constructor (props) {
        super(props)
        this.time = null
        this.handleBackTop = this.handleBackTop.bind(this)
    }

    handleBackTop () {
        if (this.time) clearInterval(this.time)
        this.time = setInterval(() => {
            var scrollHigh = document.documentElement.scrollTop
            if (scrollHigh) {
                window.scroll(0, scrollHigh - scrollHigh / 5)
            } else {
                clearInterval(this.time)
            }
        }, 20)
    }

    bindEvents () {
        window.addEventListener('scroll', this.props.ToggelBackTop)
    }

    componentDidMount () {
        this.props.getHomeData()
        this.bindEvents()
    }

    componentWillUnmount () {
        window.removeEventListener('scroll', this.props.ToggelBackTop)
    }

    render () {
        const { isShow } = this.props
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" alt="" src='https://upload.jianshu.io/admin_banners/web_images/4993/421ec96ccef8aea708c84ba2972b5be484695f25.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'></img>
                    <components.Topic></components.Topic>
                    <components.List></components.List>
                </HomeLeft>
                <HomeRight>
                    <components.Recommend></components.Recommend>
                    <QrBox></QrBox>
                    <components.Writer></components.Writer>
                </HomeRight>
                {isShow ? 
                    (<BackTop onClick={this.handleBackTop}>
                        <span className="iconfont">&#xe608;</span>
                    </BackTop>) 
                : null}
            </HomeWrapper>
        )
    }
}

const mapState = (state) => ({
    isShow: state.getIn(['home','isShow'])
})

const mapDispatch = (dispatch) => ({
    getHomeData () {
        dispatch(actionCreators.getHomeData())
    },
    ToggelBackTop () {
        if (document.documentElement.scrollTop > 600) {
            dispatch(actionCreators.toggleBackTop(true))
        } else {
            dispatch(actionCreators.toggleBackTop(false))
        }
    }
})

export default connect(mapState, mapDispatch)(Home)