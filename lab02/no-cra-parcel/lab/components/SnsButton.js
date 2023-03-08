import React from 'react'

const SnsButton = ({ snsName }) => {
  return (
    <div className="button">
      <div className="icon">
        <i className={`fa fa-${snsName.toLowerCase()}`}></i>
      </div>
      <span>{snsName}</span>
    </div>
  )
}

export default SnsButton
