import { Button, Typography } from 'antd'
import React from 'react'

const Hero = () => {

    const { Title, Paragraph } = Typography
    return (
        <>

            <div className="container py-5">
                <div className="row">
                    <div className="col">
                        <h1>Home1</h1>

                        <Title level={1}>Home1 from antd</Title>
                        <Title level={2}>Home2 from antd</Title>
                        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas corporis fugiat beatae maiores, possimus aspernatur voluptate tempore sint nam laudantium non. Officia, blanditiis et. Et alias corrupti error placeat aspernatur!</Paragraph>
                        <Button type='primary'>click me</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
