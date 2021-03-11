import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import s from './ContactForm.module.scss';

const INIITAL_STATE = {
  name: '',
  phone: '',
};

class ContactForm extends Component {
  state = INIITAL_STATE;

  handleChangeForm = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = e => {
    e.preventDefault();

    const { name, phone } = this.state;
    const { onAdd } = this.props;

    const isValidatedForm = this.validateForm();

    if (!isValidatedForm) return;

    onAdd({ id: uuidv4(), name, phone });
    this.resetForm();
  };

  validateForm = () => {
    const { name, phone } = this.state;
    const { onCheckUnique } = this.props;

    if (!name || !phone) {
      alert('Some filed is empty');
      return false;
    }
    return onCheckUnique(name);
  };

  resetForm = () => this.setState(INIITAL_STATE);

  render() {
    const { name, phone } = this.state;
    return (
      <form className={s.form} onSubmit={this.handleFormSubmit}>
        <h3>Name</h3>
        <input
          className={s.inputForm}
          type="text"
          name="name"
          placeholder="Enter name"
          value={name}
          onChange={this.handleChangeForm}
        />
        <h3>Number</h3>
        <input
          className={s.inputForm}
          type="tel"
          name="phone"
          placeholder="Enter phone number"
          value={phone}
          onChange={this.handleChangeForm}
        />
        <button className={s.formBtn} type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
