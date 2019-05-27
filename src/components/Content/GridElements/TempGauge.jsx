import React, { Component } from 'react'
import styled from 'styled-components'
import GaugeImage from '../../../resources/images/gauge.svg'
import './test.css'

const TempGaugeStyle = styled.div`
    background-color: grey;
    & > svg {
        width: 100%;
        height: 100%;
    }
`

class TempGauge extends Component {
    render() {
        return (
            <TempGaugeStyle>
                <object data={GaugeImage} type='image/svg+xml'>
                    Temperature gauge
                </object>
                {/* <img src={GaugeImage} alt={'Gauge'} /> */}
            </TempGaugeStyle>
        )
    }
}

export default TempGauge
