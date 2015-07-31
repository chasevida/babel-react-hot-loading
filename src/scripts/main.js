// src/app.js

import React from 'react'
import MyGame from './my-game'


React.render(
    <MyGame />,
    document.body
)

var currentTime = 0
var duration = 500

setInterval(() => {
    currentTime += duration
    console.log('Timer: ' + currentTime)
}, 500)
