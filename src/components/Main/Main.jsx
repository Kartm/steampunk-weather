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
    state = {
        userData: null
    }
    render() {
        return (
            <MainStyle>
                <Header userData={this.state.userData} />
                <Content />
            </MainStyle>
        )
    }
}

export default Main
