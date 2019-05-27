import React, { Component } from 'react'
import styled from 'styled-components'

const GridElementStyle = styled.div`
    background-color: grey;
`

class GridElement extends Component {
    render() {
        return <GridElementStyle />
    }
}

export default GridElement
