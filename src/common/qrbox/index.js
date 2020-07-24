import React, { Component } from 'react'
import {
    QrBoxWrapper,
    Info,
    Title,
    Des
} from './style'

class QrBox extends Component {
    render () {
        return (
            <QrBoxWrapper>
                <img src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-4130a7a6521701c4cb520ee6997d5fdb.png" alt=""></img>
                <Info>
                    <Title>下载简书手机App ></Title>
                    <Des>随时随地发现和创作内容</Des>
                </Info>
            </QrBoxWrapper>
        )
    }
}

export default QrBox