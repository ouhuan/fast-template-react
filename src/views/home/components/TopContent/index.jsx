import React from 'react';


export default class TopContent extends React.Component {
  constructor(props) {
    super(props)
    console.log('props', props)
    this.state = {
      
    }
  }

  getData = () => {
    console.log('调用了 getdata')
  }
  render() {
    return (
      <div>
        <div onClick={this.props.onSet}>TopContent</div>
      </div>
    )
  }
}