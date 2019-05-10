import React, { Component } from 'react';
import CardList from '../CardList/CardList';
import SearchBox from '../SearchBox/SearchBox';
import Scroll from '../Scroll/Scroll';
import './Home.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });

class Home extends Component {

  constructor() {
    super();
    this.state={
      items:[],
      searchField: ''
    }
  }
  // filteredItems = () => {
  //   // if(this.props.searchField.length > 0) {
  //   //   return this.props.items.filter(item=> item.name.toLowerCase().includes(this.props.searchField.toLowerCase()))
  //   // }
  //   if(this.props.searchField.length) {
  //     return this.props.items.filter(item => item.name === item.name.toLowerCase().includes(this.props.searchField.toLowerCase()))
  //   }
  //   return this.props.items
  // }

  render() {
    const {  onSearchChange, classes } = this.props;
      return(
        <section className='tc'>
          <h1 className='f1'>Filtro de Items</h1>
           <NavLink to='/Form'> 
            <Button variant="contained" className={classes.button}>
                  Formulario
              </Button> 
            </NavLink>
          <SearchBox searchChange={onSearchChange}/>
          
          <Scroll>
            <CardList  />
          </Scroll>
        </section>
        
      );
  }
}


Home.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(Home);