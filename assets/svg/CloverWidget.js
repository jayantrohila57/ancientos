import * as React from 'react'

const SvgCloverWidget = (props) => (
  <svg
    width={40}
    height={40}
    xmlns="http://www.w3.org/2000/svg"
    className="cloverWidget_svg__clover"
    {...props}
  >
    <path
      d="M.887 14.467C-2.845 5.875 5.875-2.845 14.467.887l1.42.617a10.323 10.323 0 0 0 8.225 0l1.42-.617c8.593-3.732 17.313 4.988 13.581 13.58l-.617 1.42a10.323 10.323 0 0 0 0 8.225l.617 1.42c3.732 8.593-4.989 17.313-13.58 13.581l-1.42-.617a10.323 10.323 0 0 0-8.225 0l-1.42.617C5.874 42.845-2.846 34.125.886 25.533l.617-1.42a10.323 10.323 0 0 0 0-8.225l-.617-1.42Z"
      fill="#D3E3FD"
    />
  </svg>
)

export default SvgCloverWidget
