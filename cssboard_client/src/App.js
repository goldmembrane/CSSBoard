import React from 'react'
import { Title, MenuBar } from './component'

const App = () => {
    return (
        <>
            <div>
                <Title />
            </div>
            <div>
                <MenuBar />
            </div>
            <div>content</div>
            <div>footer</div>
        </>
    )
}

export default App