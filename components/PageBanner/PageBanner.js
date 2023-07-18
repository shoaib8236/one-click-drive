import React from 'react'
import PropTypes from 'prop-types'

const PageBanner = (props) => {
    const {className = "", image = ""} = props
  return (
    <div className={`page_banner ${className}`}>
        <img src={image} alt="" />
    </div>
  )
}

export default PageBanner

PageBanner.propTypes = {
    className: PropTypes.string,
    image: PropTypes.string,
}