/**
 * Import React Dependencies
 */
import React, { Component } from 'react'
import { View, Text } from 'react-native'
import axios from 'axios'

import Contact from './container/Contact'

/**
 * App Component
 */
export class App extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    componentWillMount = () => {
        axios.get('https://randomuser.me/api/?seed=foobar&results=20&nat=us')
            .then(response => {
                const data = response.data.results
                this.setState({ data })
            })
    }
    
    render() {
        const { data } = this.state
        console.log('render data', data)
        return (
            <Contact data={ this.state.data }/>
        )
    }
}

export default App;