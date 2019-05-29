import React, { Component } from 'react'
import styled from 'styled-components'
import Header from '../Header/Header'
import Content from '../Content/Content'

const MainStyle = styled.div`
    height: 100%;
    display: grid;
    grid-template-rows: 56px 1fr;
`

class Main extends Component {
    /*
    userData.cityName
    userData.countryName
    userData.tempUnits
    weatherData.current.temp
    weatherData.current.weather
    weatherData.forecast[].temp
    weatherData.forecast[].weather
    */

    state = {
        userData: null,
        //weatherData: null
        weatherData: {
            temp: 10
        }
    }
    render() {
        return (
            <MainStyle>
                <Header userData={this.state.userData} />
                <Content weatherData={this.state.weatherData} />
            </MainStyle>
        )
    }
}

export default Main
