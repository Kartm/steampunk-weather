import React from 'react'

const headerCityText = ({ userData }) => {
    if (userData === null) return false
    return `${userData.cityName}, ${userData.countryName}`
}

const HeaderCityName = props => {
    return (
        <React.Fragment>
            {headerCityText({ ...props }) || 'Please choose a city.'}
        </React.Fragment>
    )
}

export default HeaderCityName
