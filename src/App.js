import React from 'react';
import { connect } from 'react-redux';
import { setSearchField } from '../../redux/actions/actions';
import Home from './components/Home/Home'

class App extends Component {
  
	render() {
	  return <Home {...this.props}/>
	}
  }

const mapStateToProps = state => {
	return{
	  searchField: state.searchItems.searchField
	}
  }
  
  const mapDispatchToProps = (dispatch) => {
	return {
	  onSearchChange: (event) => dispatch(setSearchField(event.target.value))
	}
  }


export default connect(mapDispatchToProps, mapStateToProps)(App);
