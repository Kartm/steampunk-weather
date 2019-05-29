import React, { Component } from 'react'
import styled from 'styled-components'

const CitySuggestionsStyle = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 100;
    top: 50px;
    background-color: transparent;
    width: calc(100vw - 56px - 56px - 52px);
`

const SuggestionStyle = styled.button`
    color: #000;
    background-color: whitesmoke;
    border-color: lightgray;
    border-radius: 4px;
    text-align: left;
    padding: 8px 4px;
`

const createSuggestions = cityList => {
    let suggestions = []
    cityList.forEach((cityName, index) => {
        suggestions.push(
            <SuggestionStyle key={index}>{cityName}</SuggestionStyle>
        )
    })
    return suggestions
}

class CitySuggestions extends Component {
    state = { cityList: ['Czestochowa', 'Warsaw'] }

    //static getDerivedStateFromProps(props, state) {}

    render() {
        console.log(API_KEY)
        return (
            <CitySuggestionsStyle>
                {createSuggestions(this.state.cityList)}
            </CitySuggestionsStyle>
        )
    }
}

export default CitySuggestions
