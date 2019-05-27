import React, { Component } from 'react'
import styled from 'styled-components'
import GridElement from './GridElement'
import TempGauge from './GridElements/TempGauge'

const WeatherGridStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 30vmin);
    grid-template-rows: repeat(4, 30vmin);

    @media (min-width: 425px) {
        grid-template-columns: repeat(4, 30vmin);
        grid-template-rows: repeat(3, 30vmin);
    }
`

class WeatherGrid extends Component {
    state = {}
    render() {
        return (
            <WeatherGridStyle>
                <TempGauge />
                <GridElement />
                <GridElement />
                <GridElement />
                <GridElement />
                <GridElement />
                <GridElement />
                <GridElement />
                <GridElement />
                <GridElement />
                <GridElement />
                <GridElement />
            </WeatherGridStyle>
        )
    }
}

export default WeatherGrid
