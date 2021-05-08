import React from 'react'
import { Title, MenuBar, Content, Footer } from './component'

const App = () => {
    return (
        <>
            <div>
                <Title />
            </div>
            <div>
                <MenuBar />
            </div>
            <div>
                <Content />
            </div>
            <div><Footer /></div>
        </>
    )
}

export default App