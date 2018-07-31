import React from 'react'
export default function (fn) {
    class lazy extends React.Component{
        constructor(){
            super();
            this.state={
                component:null
            }
            fn.then(m=>{
                const M=m.default;
                this.setState({
                    component:<M/>
                })
            })
        }
        render(){
            return this.state.component;
        }
    }
    return lazy
}