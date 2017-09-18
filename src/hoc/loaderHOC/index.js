import React, { Component } from 'react'

import Loader from '../../components/loader'

const loaderHOC = (propName) => (WrappedComponent) => {
    
    return class LoaderHOC extends Component {
        constructor(props) {
            super(props)
            this.state = { props }
        }

        isEmpty(prop) {
            return (
                prop === null ||
                prop === undefined ||
                (prop.hasOwnProperty('length') && prop.length === 0) ||
                (prop.constructor === Object && Object.keys(prop).length === 0)
            );
        }

        componentWillReceiveProps = (nextProps) => {
          if(nextProps[propName]) {
              this.setState({ props: nextProps })
          }
        }
        

        render() {
            const { props } = this.state
            console.log('hoc props', {...props})
            return props[propName].length <= 0 ? <Loader/> : <WrappedComponent {...props}/>
        }
    } 
}

export default loaderHOC