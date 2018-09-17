import React, { Component } from "react";
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


const styles = theme => ({
  container: {
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});


class CustomerForm extends Component {

  handleChange = name => event => {
   this.setState({
     [name]: event.target.value
   });
   console.log(this.state);
 };
render(){
  const { classes } = this.props;
  return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          required
          id="required"
          label="First Name"
          margin="normal"
          className={classes.textField}
          onChange={this.handleChange("firstName")}
        />
        <TextField
          required
          id="required"
          label="Last Name"
          margin="normal"
          className={classes.textField}
          onChange={this.handleChange("lastName")}
        />
        <Button mini variant="fab" color="primary" aria-label="Add" className={classes.button}>
          <AddIcon />
        </Button>
      </form>
    );
  }
}

CustomerForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomerForm);
