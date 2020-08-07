import styled from 'styled-components'

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    overflow: hidden;
`
export const HomeLeft = styled.div`
    float: left;
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    .banner-img{
        width: 100%;
        height: 270px;
    }
`
export const HomeRight = styled.div`
    float: right;
    width: 280px;
`
export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    margin-left: -18px;
    overflow: hidden;
    border-bottom: 1px solid #dcdcdc;
`
export const TopicItem = styled.div`
    float: left;
    height: 32px;
    line-height: 32px;
    background: #f7f7f7;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    padding-right: 10px;
    margin-left: 18px;
    margin-bottom: 18px;
    .topic-pic{
        display: block;
        float: left;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
`
export const ListItem = styled.div`
    padding: 20px 0;
    overflow: hidden;
    border-bottom: 1px solid #dcdcdc;
    .list-pic{
        float: right;
        display: block;
        width: 125px;
        height: 100px;
        border-radius: 10px;
    }
`
export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title{
        font-size: 18px;
        line-height: 27px;
        color: #333;
        font-weight: bold;
    }
    .desc{
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
`
export const RecommendWrapper = styled.div`
    width: 280px;
    margin: 30px 0;
`
export const RecommendItem = styled.div`
    width: 100%;
    height: 50px;
    background-image: url(${(props) => (props.imgUrl)});
    background-size: contain;
`
export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    margin: 30px 0;
    background: #a5a5a5;
    color: #fff;
    border-radius: 20px;
    text-align: center;
    cursor: pointer;
`
export const BackTop = styled.div`
    position: fixed;
    right: 40px;
    bottom: 40px;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border: 1px solid #ccc;
    cursor: pointer;
`
export const WriterWrapper = styled.div`
    font-size: 14px;
    color: #333;
    box-sizing: border-box;
`
export const WriterHeader = styled.div`
    font-size: 14px;
    color: #969696;
    line-height: 28px;
    overflow: hidden;
    span {
        float: left;
    }
`
export const WriterMain = styled.div`
    margin-bottom: 20px;
`
export const WriterFooter = styled.div`
    position: relative;
    text-align: center;
    cursor: pointer;
    a {
        position: absolute;
        padding: 7px 7px 7px 12px;
        left: 0;
        width: 100%;
        font-size: 13px;
        color: #787878;
        background-color: #f7f7f7;
        border: 1px solid #dcdcdc;
        border-radius: 4px;
        box-sizing: border-box;
    }
`
export const WriterSwitch = styled.div`
    float: right;
    cursor: pointer;
    .spin {
        margin-right: 5px;
    }
`
export const AuthorItem = styled.div`
    margin-top: 15px;
    line-height: 20px;
    height: 48px;
    .avatar {
        float: left;
        width: 48px;
        height: 48px;
        margin-right: 10px;
        cursor: pointer;
        img {
            width: 100%;
            height: 100%;
            border: 1px solid #ddd;
            border-radius: 50%;
        }
    }
    .follow {
        float: right;
        margin-top: 5px;
        padding: 0;
        font-size: 13px;
        color: #42c02e;
        cursor: pointer;
    }
    .name {
        padding-top: 5px;
        margin-right: 60px;
        font-size: 14px;
        cursor: pointer;
    }
    p {
        margin-top: 2px;
        font-size: 12px;
        color: #969696;
    }
`