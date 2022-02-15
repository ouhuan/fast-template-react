import React from 'react';
import { connect } from 'react-redux';
import TopContent from './components/TopContent';
import BottomContent from './components/BottomContent';
import { myAppAction1, myAppAction2 } from '@/store/actions/app'
class Home extends React.Component {
  constructor(props) {
    super(props)
    console.log('constructor')
    this.myRef = React.createRef();
    this.state = {
      date: new Date()
    };
  }
  static getDerivedStateFromProps() {
    console.log('getDerivedStateFromProps')
    return null;
  }
  componentDidMount() {
    
  }

  divClick = () => {
    console.log(this.myRef)
  }
  divSet = () => {
    console.log('divset')
  }
  render() {
    return (
      <div>
        <TopContent onSet={this.divSet} ref={this.myRef} type="digit" />
        <div onClick={this.divClick}>home</div>
        <BottomContent />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStateToProps, { myAppAction1, myAppAction2 })(Home);
