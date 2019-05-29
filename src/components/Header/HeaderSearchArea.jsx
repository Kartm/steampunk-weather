import React, { Component } from 'react'
import styled from 'styled-components'
import HeaderCityName from './HeaderCityName'
import HeaderCitySearch from './CitySearch/HeaderCitySearch'

const HeaderSearchAreaStyle = styled.span`
    font-size: 20px;
    width: calc(100vw - 56px - 56px - 50px);
    line-height: 56px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`

class HeaderSearchArea extends Component {
    state = { isActive: true }
    render() {
        return (
            <HeaderSearchAreaStyle>
                {this.state.isActive ? (
                    <HeaderCitySearch />
                ) : (
                    <HeaderCityName userData={this.props.userData} />
                )}
            </HeaderSearchAreaStyle>
        )
    }
}

export default HeaderSearchArea
