import React,{ PureComponent } from 'react'
import {
    WriterWrapper,
    WriterHeader,
    WriterMain,
    WriterFooter,
    WriterSwitch
} from '../style'

class Writer extends PureComponent {
    render () {
        return (
            <WriterWrapper>
                <WriterHeader>
                    <span>推荐作者</span>
                    <WriterSwitch>
                        <span className="iconfont spin">&#xe600;</span>
                        换一批
                    </WriterSwitch>
                </WriterHeader>
                <WriterMain>
                    <a className="avatar">
                        <img src="https://upload.jianshu.io/users/upload_avatars/5796592/73837104-47e5-4fe9-a5be-054bd50b06f7.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt=""></img>
                    </a>
                    <a className="follow">
                        关注
                    </a>
                    <a className="name">乔汉童</a>
                    <p>写了356.7k字 · 2k喜欢</p>
                </WriterMain>
                <WriterFooter></WriterFooter>
            </WriterWrapper>
        )
    }
}

export default Writer