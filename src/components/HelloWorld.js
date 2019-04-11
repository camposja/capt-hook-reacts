import React, { useState } from 'react'

const HelloWorld = () => {
    const [name, setName] = useState('World')

    return (
        <div>
            {/* <h1>Hello {name}</h1>
            <button onClick={() => setName('Ingeniero')}>
                Click Me
            </button>   */}
        </div>
    )
}

export default HelloWorld
