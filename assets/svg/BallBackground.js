import * as React from 'react'

const SvgBallBackground = (props) => (
  <svg width={88} height={88} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M44 4C21.905 4 4 21.905 4 44s17.905 40 40 40" fill="#D2E3FC" />
    <path d="M44 84c22.095 0 40-17.905 40-40S66.095 4 44 4" fill="#669DF6" />
    <path d="M44 66c12.152 0 22-9.848 22-22s-9.848-22-22-22" fill="#D2E3FC" />
    <path d="M44 22c-12.152 0-22 9.848-22 22s9.848 22 22 22" fill="#669DF6" />
  </svg>
)

export default SvgBallBackground
