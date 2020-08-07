import React,{ PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import {
    WriterWrapper,
    WriterHeader,
    WriterMain,
    WriterFooter,
    WriterSwitch,
    AuthorItem
} from '../style'

class Writer extends PureComponent {
    render () {
        const { writersList, page, getMoreList } = this.props
        return (
            <WriterWrapper>
                <WriterHeader>
                    <span>推荐作者</span>
                    <WriterSwitch onClick={ () => getMoreList(page) }>
                        <span className="iconfont spin">&#xe600;</span>
                        换一批
                    </WriterSwitch>
                </WriterHeader>
                <WriterMain>
                    {
                        writersList.map((item, index) => {
                            return (
                                <AuthorItem key={index}>
                                    <a className="avatar" href="">
                                        <img src={item.get('imgUrl')} alt=""></img>
                                    </a>
                                    <a className="follow">
                                        + 关注
                                    </a>
                                    <a className="name">{item.get('name')}</a>
                                    <p>{item.get('des')}</p>
                                </AuthorItem>
                            )
                        })
                    }
                </WriterMain>
                <WriterFooter>
                    <a>查看全部 ></a>
                </WriterFooter>
            </WriterWrapper>
        )
    }
}

const mapState = (state) => ({
    writersList: state.getIn(['home', 'writersList']),
    page: state.getIn(['home', 'w_page'])
})

const mapDispatch = (dispatch) => ({
    getMoreList (page) {
        dispatch(actionCreators.getMoreAuthors(page+1))
    }
})

export default connect(mapState, mapDispatch)(Writer)