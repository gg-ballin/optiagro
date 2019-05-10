import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { reduxForm, Field } from 'redux-form';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });

class Form extends Component {
	handleSubmit = formValues => {
		console.log(JSON.stringify(formValues))
	};
	render() {
		const {classes, fields:{ name, quantity, description, ID}} = this.props;
		return(
			<div className='pa3 ba tc b--black bg-white'>
                <NavLink to='/'> 
                    <Button variant="contained" color="primary" className={classes.button}>
                        Lista de items
                    </Button>
                </NavLink>
			<form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
				<div>
					<label>Nombre</label>
					<Field name="name" type="text" component="input" {...name} />
				</div>
				<div>
					<label>Cantidad</label>
					<Field name="quantity" type="text" component="input" {...quantity}/>
				</div>
				<div>
					<label>Descripcion</label>
					<Field name="description" type="text" component="input" {...description}/>
				</div>
				<div>
					<label>ID</label>
					<Field name="ID" type="text" component="input" {...ID}/>
				</div>
				<button type="submit">Submit</button>
			</form>
			</div>
	);
	}
}

Form = reduxForm({
	form: 'Form',
	fields: ['name', 'quantity', 'description', 'ID']
})(Form)

export default withStyles(styles)(Form);
