import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import {
    Spinner
} from 'native-base'

export class Loader extends Component {
  static propTypes = {

  }

  render() {
    return (
        <View style={{ flex: 1, alignItems:'center', justifyContent:'center' }}>
            <Spinner/>
        </View>
    )
  }
}

export default Loader
