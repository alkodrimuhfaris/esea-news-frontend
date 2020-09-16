import React from 'react'

class Sapa2 extends React.Component{
  constructor(props){
    super(props)
    console.log('pertama')
  }
  componentDidMount(){
    console.log('after mounting')
  }
  componentWillUnmount(){
    console.log('before mounting')
  }
  render(){
    console.log('rendering....')
    return(
      <div>
        Bonjour {this.props.name}
      </div>
    )
  }
}

export default Sapa2