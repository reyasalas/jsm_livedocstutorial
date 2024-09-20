import Image from 'next/image'
import React from 'react'

const Loader = () => {
  return (
    <div className="loader">
        <Image
            src="/assets/icons/loader.svg"
            alt="loader"
            width={32}
            height={32}
            className="animate-spin" //this className is provided by tailwind    
        />
        Loading...
    </div>
  )
}

export default Loader