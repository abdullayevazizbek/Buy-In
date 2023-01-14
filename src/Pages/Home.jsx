import React from 'react'
import { Banner, ProductListSlider } from '../components'
import Page from '../components/page/Page'

function Home() {

    return (
        <Page>
            <Banner />
            <ProductListSlider />
        </Page>
    )
}

export default Home