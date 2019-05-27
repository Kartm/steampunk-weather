import React from 'react'
import styled from 'styled-components'

const HeaderButtonStyle = styled.button`
    height: 56px;
    width: 56px;
    background: none;
    border: none;
    color: #fff;
    padding: 0;
`

const HeaderButton = props => {
    return (
        <HeaderButtonStyle onClick={props.onClick}>
            <img src={props.icon} alt={'Button icon'} />
        </HeaderButtonStyle>
    )
}

export default HeaderButton
