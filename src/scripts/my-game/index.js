// src/my-game/index.jsx

import React from 'react'

export default class MyGame extends React.Component {

    constructor(props) {
        super(props)
        this.state = { play: 'Play' }
    }

    talk() {
        return 'yus'
    }

    render() {

        return (
            <div>
                <h1>Yo'</h1>
                <p>React n' Hot Loading</p>
                <button type='button'>{this.state.play}</button>
            </div>
        )
    }
}
