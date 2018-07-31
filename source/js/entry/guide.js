import '../../less/login.less'
import React from 'react'
import PropTypes from 'prop-types'

export default class Go extends React.Component{
    static contextTypes = {
        data: PropTypes.object
    }
    render(){
        return <div>{this.context.data.title}</div>
    }
}