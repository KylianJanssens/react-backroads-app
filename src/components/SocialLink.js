import React from 'react'

const SocialLink = ({ href, icons, itemClass }) => {
  return (
    <li>
    <a href={href}
      target="_blank"
      rel="noreferrer"
      className={itemClass}
      >
      <i className={icons}></i>
      </a>
    </li>
  )
}

export default SocialLink
