import React from 'react';


export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div onClick={() => this.divClick()}>这个是user</div>
      </div>
    )
  }
}