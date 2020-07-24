import styled from 'styled-components'

export const QrBoxWrapper = styled.div`
    margin-bottom: 30px;
    padding: 10px 22px;
    width: 100%;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
    box-sizing: border-box;
    cursor: pointer;
    img{
        width: 60px;
        height: 60px;
        opacity: .85;
        vertical-align: middle;
    }
`
export const Info = styled.div`
    display: inline-block;
    vertical-align: middle;
    margin-left: 7px;
    vertical-align: middle;

`
export const Title = styled.div`
    font-size: 15px;
    color: #333;
`
export const Des = styled.div`
    margin-top: 4px;
    font-size: 13px;
    color: #999;
`