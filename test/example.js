// test/lab/lab-example.js

import {expect} from 'code'
import Lab from 'lab'
import React from 'react/addons'
import MyGame from './../src/scripts/my-game'

var TestUtils = React.addons.TestUtils
var lab = exports.lab = Lab.script()
var {describe, it, before} = lab


describe('Lab & Code', () => {

    var gameElement

    before('render and locate element', (done) => {

        var renderedComponent = TestUtils.renderIntoDocument(
            <MyGame />
        )

        var gameComponent = TestUtils.findRenderedDOMComponentWithTag(
            renderedComponent,
            'button'
        )

        gameElement = gameComponent.getDOMNode()
        done()
    })

    it('<button> should be of type "checkbox"', (done) => {

        var attr = gameElement.getAttribute('type')
        expect(attr).to.equal('button')
        done()
    })

    it('should pass standard test', (done) => {

        expect(1 + 1).to.equal(2)
        done()
    })

    /*it('should talks', (done) => {

        var game = new MyGame()
        expect(game.talk()).to.equal('yus')
        done()
    })*/
})
