import React,{ Component } from 'react'
import {CSSTransition} from 'react-transition-group'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { actionCreators } from './store'
import { actionCreators as loginAactionCreators } from '../../pages/login/store'
import {
    HeaderWrapper,
    HeaderInner,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Addition,
    Button
} from './style'

class Header extends Component {
    constructor(props) {
        super(props)
        this.spin = React.createRef()
    }
    getListArea () {
        const { focusd, 
                mouseIn, 
                list, 
                page, 
                totalPage, 
                handleMouseEnter, 
                handleMouseLeave,
                handleChangePage } = this.props
        const newList = list.toJS()
        const pageList = []
        if (newList.length) {
            for (let i = (page - 1) * 10; i < page * 10; i++) {
                if (newList[i]) {
                    pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
                }
            }
        }
        if (focusd || mouseIn) {
            return (
                <SearchInfo 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch 
                            onClick={() => handleChangePage(page, totalPage, this.spin)}>
                                <span ref={this.spin} className="iconfont spin">&#xe600;</span>
                                换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>{pageList}</SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null
        }
    }
    render () {
        const { focusd, list, isLogin, handleInputFocus, handleInputBlur, handleLayout} = this.props
        return (
            <HeaderWrapper>
                <HeaderInner>
                    <Link to="/"><Logo /></Link>
                    <Nav>
                        <NavItem className='left active'>首页</NavItem>
                        <NavItem className='left'>下载APP</NavItem>
                        { isLogin
                                ? <NavItem className='right' onClick={handleLayout}>退出</NavItem> 
                                : <Link to="/login"><NavItem className='right'>登陆</NavItem> </Link>
                        }
                        <NavItem className='right'>
                            <span className="iconfont">&#xe636;</span>
                        </NavItem>
                        <SearchWrapper>
                            <CSSTransition 
                                in={focusd}
                                timeout={200}
                                classNames='slide'>
                                <NavSearch 
                                    className={focusd ? 'focusd' : ''}
                                    onFocus={() => handleInputFocus(list)}
                                    onBlur={handleInputBlur}>
                                </NavSearch>
                            </CSSTransition>
                            <span className={focusd ? 'focusd iconfont zoom' : 'iconfont zoom'}>&#xe650;</span>
                            {this.getListArea()}
                        </SearchWrapper>
                    </Nav>
                    <Addition>
                        <Button className='reg'>注册</Button>
                        <Link to="/write">
                            <Button className='write'>
                                <span className="iconfont">&#xe605;</span>
                                写文章
                            </Button>
                        </Link>
                    </Addition>
                </HeaderInner>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        focusd: state.getIn(['header','focusd']),
        list: state.getIn(['header','list']),
        page: state.getIn(['header','page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header','mouseIn']),
        isLogin: state.getIn(['login','isLogin'])
    }
}

const mapDispathToProps = (dispath) => {
    return {
        handleInputFocus (list) {
            (list.size === 0) && dispath(actionCreators.getList())
            dispath(actionCreators.searchFocus())
        },
        handleInputBlur () {
            dispath(actionCreators.searchBlur())
        },
        handleMouseEnter () {
            dispath(actionCreators.mouseEnter())
        },
        handleMouseLeave () {
            dispath(actionCreators.mouseLeave())
        },
        handleChangePage (page, totalPage, spin) {
            let originAngle = spin.current.style.transform.replace(/[^0-9]/ig,'')
            if (originAngle) {
                originAngle = parseInt(originAngle, 10)
            } else {
                originAngle = 0
            }
            spin.current.style.transform = 'rotate('+ (originAngle + 360) +'deg)'
            if (page < totalPage) {
                dispath(actionCreators.changePage(page + 1))
            } else {
                dispath(actionCreators.changePage(1))
            }
        },
        handleLayout () {
            dispath(loginAactionCreators.layout())
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Header)