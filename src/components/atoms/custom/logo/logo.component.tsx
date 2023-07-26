import React from 'react'
import Image from 'next/image'
export const Logo = () => {
    return (
        <div>
            <Image
                src="../../assets/logos/logo.svg"
                width={180}
                height={44}
                alt="Picture of the author"
            />
        </div>
    )
}

export default Logo