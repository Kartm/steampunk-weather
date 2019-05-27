import React, { Component } from 'react'
import styled from 'styled-components'
import HeaderButton from './HeaderButton'
import HeaderText from './HeaderText'
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
        const headerCityText = ({ userData }) => {
            if (userData === null) return false
            return `${userData.cityName}, ${userData.countryName}`
        }
        return (
            <HeaderStyle>
                <HeaderButton
                    onClick={() => {
                        alert('click')
                    }}
                    icon={MenuIcon}
                />
                <HeaderText
                    text={
                        headerCityText({ ...this.props }) ||
                        'Please choose a city.'
                    }
                />
                <HeaderButton icon={SearchIcon} />
            </HeaderStyle>
        )
    }
}

export default Header
