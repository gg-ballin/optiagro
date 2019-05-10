import {CHANGE_SEARCH_FIELD, FORM_ADD} from '../consts/consts'

export function addForm(Form) {
	return {
	   type: FORM_ADD ,
	   data: {
		 INPUT_NAME: Form.name, 
		 INPUT_QUANTITY: Form.quantity,
		 INPUT_DESCRIPTION: Form.description,
		 INPUT_ID: Form.ID
	   }
	}
  }

  export const setSearchField = (text) => {
	console.log(text);
	return{  
	  type: CHANGE_SEARCH_FIELD,
	  payload: text
	}
 }