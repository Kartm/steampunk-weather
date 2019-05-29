import React, { Component } from 'react'
import CitySuggestions from './CitySuggestions'
import styled from 'styled-components'

const SearchStyle = styled.input`
    position: relative;
    z-index: 101;
    border-radius: 4px;
    border-width: 1px;
    border-color: grey;
    padding: 8px;
    max-width: calc(100vw - 56px - 56px - 70px);
`

const API_KEY = `${process.env.REACT_APP_CITY_API_KEY}`

class HeaderCitySearch extends Component {
    state = { value: null }

    onInput = e => {
        this.setState({ value: e.target.value })
        //todo call api
    }

    render() {
        return (
            <React.Fragment>
                <SearchStyle
                    onInput={this.onInput}
                    type={'text'}
                    placeholder={'Enter a city name...'}
                />
                <CitySuggestions value={this.state.value} />
            </React.Fragment>
        )
    }
}

export default HeaderCitySearch
