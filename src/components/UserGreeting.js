import React, { Component } from 'react'

class UserGreeting extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false
    }
  }
  render() {
    return this.state.isLoggedIn ? (
        <div>Welcome Kennedy</div> 
      ) : (
      
      <div>Welcome Guest</div>
    )
   // if (this.state.isLoggedIn) {
    //  return <div>Welcome Kennedy</div>
   // } else {
   //   return <div>Welcome Guest</div>

   // }
  //  return (
   //   <div>
   //     <div>Welcome Kennedy</div>
  //      <div>Welcome Guest </div>
   //   </div>
   // )
   }
}

export default UserGreeting
