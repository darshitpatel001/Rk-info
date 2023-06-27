import React from 'react'
import Carousel from './component/home/Carousel'
import Card from './component/home/Card'
import Services from './component/home/Services'
import Quickrepairs from './component/home/Quickrepairs'
import Ourshop from './component/home/Ourshop'
import Ourclients from './component/home/Ourclients'
import Repair from './component/home/Repair'
import Social from './component/home/Social'
import Testimonials from './component/home/Testimonials'
import Updates from './component/home/Updates'



export default function Home() {
    return (
        <>
            <Carousel />
            <Services />
            <Card />
            <Quickrepairs />
            <Ourshop />
            {/* <Testimonials /> */}
            <Ourclients />
            <Repair />
            <Social />
            <Updates />
        </>
    )
}
