import React from 'react'

const WidthWrapper = ({children}) => {
  return (
    <section>
        <div className = "px-5 py-3  mx-auto rounded-md">
            {children}
        </div>
    </section>
  )
}

export default WidthWrapper