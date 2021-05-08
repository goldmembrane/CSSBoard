import React from 'react'
import { Title, MenuBar, Content } from './component'

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
            <div>footer</div>
        </>
    )
}

export default App