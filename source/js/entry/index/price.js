import '../../../less/login.less'
import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

function ff() {
    console.log(888)
}
export default class Hello extends React.Component{
    static contextTypes = {
        data: PropTypes.object
    }
    render(){
        return <div className='box' onClick={ff}>{this.context.data.title}</div>
    }
}