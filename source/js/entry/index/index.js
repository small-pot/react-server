import '../../../less/my.css'
import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

axios.get('/mnst/api/wx/js/config').then((res)=>{
    console.log(res)
})
function ff() {
    console.log(1234000)
}
export default class Hello extends React.Component{
    static contextTypes = {
        data: PropTypes.object
    }
    render(){
        return <div onClick={ff} style={{color:'red',background:'url(/static/img/gg.jpg)'}}>{this.context.data.title}</div>
    }
}

