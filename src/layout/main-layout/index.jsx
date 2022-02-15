import React from 'react';
// import './index.less';

export default class MainLayout extends React.Component {

  render() {
    return (
      <div className='main-layout'>
        main-layout
        { this.props.children }
      </div>
    );
  }
}