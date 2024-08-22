import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: 'Kennedy'
    }
    console.log('LifecycleA constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('lifecycleA getDerivedStateFromProps')
    return null
  }
  
  componentDidMount() {
    console.log('LifecycleA componentDidMount')
  }

  render() {
    console.log('Lifecycle A render')
    return ( <div>
       <div>Lifecycle A</div>
       < LifecycleB />
    </div>
     
    ) 
    
  } 
}

export default LifecycleA
