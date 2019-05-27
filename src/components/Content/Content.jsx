import React, { Component } from 'react'
import styled from 'styled-components'
import WeatherGrid from './WeatherGrid'

const ContentStyle = styled.section`
    background-color: #4a2b20;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: -100;
`

class Content extends Component {
    render() {
        return (
            <ContentStyle>
                <WeatherGrid />
            </ContentStyle>
        )
    }
}

export default Content
