import React, { Component } from 'react'
import styled from 'styled-components'
import HeaderButton from './HeaderButton'
import HeaderSearchArea from './HeaderSearchArea'
import MenuIcon from '../../resources/icons/menu.svg'
import SearchIcon from '../../resources/icons/search.svg'

const HeaderStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #775447;
    color: #fff;
    box-shadow: 0px 2px 8px 4px #00000050;
`

class Header extends Component {
    render() {
        return (
            <HeaderStyle>
                <HeaderButton
                    onClick={() => {
                        alert('click')
                    }}
                    icon={MenuIcon}
                />
                <HeaderSearchArea
                    userData={this.props.userData}
                    onCitySelect={this.props.onCitySelect}
                />
                <HeaderButton icon={SearchIcon} />
            </HeaderStyle>
        )
    }
}

export default Header
