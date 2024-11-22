import React from 'react'

const Copyright = () => {

    const year = new Date().getFullYear()
    return (
        <>
            <div className="container-fluid bg-primary">
                <div className="row">
                    <div className="col">
                        <p className='text-white text-center mb-0 p-2'>&copy; {year}. All rights reserved</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Copyright
