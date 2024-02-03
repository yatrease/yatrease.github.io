import React from 'react'

function Footer(props) {
  return (
    <div className={`transition-all ease-linear text-center p-4 ${props.isLight ? "" : "bg-black text-white"} h-[10vh]`}>
      &copy; 2024 Praphulla. All rights reserved
    </div>
  )
}

export default Footer
