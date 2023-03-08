import React from 'react'
import SnsButton from './SnsButton'

const Snsbox = () => {
  const snsNames = [
    'Instagram',
    'Facebook',
    'Twitter',
    'LinkedIn',
    'YouTube',
    'Github',
  ]
  return (
    <section>
      <div className="wrapper">
        {snsNames.map((snsName) => (
          <SnsButton snsName={snsName} />
        ))}
      </div>
    </section>
  )
}

export default Snsbox
