import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { Field, reduxForm } from "redux-form";
import { postUsers } from "../actions";
import { connect } from "react-redux";
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';



class CustomerForm extends Component {

  handleChange = name => event => {
   this.setState({
     [name]: event.target.value
   });
   console.log(this.state);
 };


// render(){
//   const { classes } = this.props;
//   return (
//       <form className={classes.container} noValidate autoComplete="off">
//         <TextField
//           required
//           id="required"
//           label="First Name"
//           margin="normal"
//           className={classes.textField}
//           onChange={this.handleChange("firstName")}
//         />
//         <TextField
//           required
//           id="required"
//           label="Last Name"
//           margin="normal"
//           className={classes.textField}
//           onChange={this.handleChange("lastName")}
//         />
//         <Button mini variant="fab" color="primary" aria-label="Add" className={classes.button}>
//           <AddIcon />
//         </Button>
//       </form>
//     );
//   }
// }

  renderTextField(field){
    return (
          <TextField
            required
            margin="normal"
            {...field}
            {...field.input}
          />
      );
  }
  onSubmit(values){
    console.log(values);
    this.props.postUsers(values);
  }
  render(){
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
        key="firstName"
        type="text"
        component={this.renderTextField}
        label="First Name"
        name="firstName"
        />

        <Field
        key="lastName"
        type="text"
        component={this.renderTextField}
        label="Last Name"
        name="lastName"/>

        <Button type="submit" mini variant="fab" color="primary" aria-label="Add" className="button-submit">
          <AddIcon />
        </Button>
      </form>


    )
  }
}

// CustomerForm.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default reduxForm({
  form: "customerForm"
})(
  connect(null, { postUsers })(CustomerForm)
);
//
// export default reduxForm({
//   form: "CustomerForm"
// })(CustomerForm);
