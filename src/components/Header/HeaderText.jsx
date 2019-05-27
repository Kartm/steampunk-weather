import React from 'react'
import styled from 'styled-components'

const HeaderTextStyle = styled.span`
    font-size: 20px;
    width: calc(100vw - 56px - 56px - 50px);
    line-height: 56px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`

const HeaderText = props => {
    return <HeaderTextStyle>{props.text}</HeaderTextStyle>
}

export default HeaderText
