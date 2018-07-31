import React from 'react'
import PropTypes from 'prop-types'

export default class Provider extends React.Component{
    static childContextTypes = {
        data: PropTypes.object
    }
    getChildContext () {
        return {data:this.props.data}
    }
    render(){
       return this.props.children||null
    }
}