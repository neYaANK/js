import React, { Component } from 'react';
import styles from './SignUpForm.module.css';
import cx from 'classnames';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  password: '',
  passwordConfirm: '',
  firstNameIsInvalid: false,
  lastNameIsInvalid: false,
  emailIsInvalid: false,
  phoneIsInvalid: false,
  passwordIsInvalid: false,
  passwordConfirmIsInvalid: false,
};

class SignUpForm extends Component {

  constructor(props) {
    super(props);
    this.state = { ...initialState }
  }

  handleForm = (event) => {
    event.preventDefault();
    event.target.reset();
    this.setState({ ...initialState })
  }

  handleName = ({ target: { value, name } }) => {
    this.setState(
      {
        [name]: value,
        [`${name}IsInvalid`]: !/^[a-zA-Z]+$/.test(value)
      }
    );
  }
  handleEmail = ({ target: { value, name } }) => {
    this.setState(
      {
        [name]: value,
        [`${name}IsInvalid`]: (!value.includes('@') || value.includes(' '))
      }
    );
  }
  handlePhone = ({ target: { value, name } }) => {
    this.setState(
      {
        [name]: value,
        [`${name}IsInvalid`]: !/^[\+]?[0-9]+$/.test(value)
      }
    );
  }
  handlePassword = ({ target: { value, name } }) => {
    const length = value.length > 5;
    this.setState(
      {
        [name]: value,
        [`${name}IsInvalid`]: (!length || value.includes(' '))
      }
    );
  }

  handleConfirmation = ({ target: { value, name } }) => {
    this.setState(
      {
        [name]: value,
        [`${name}IsInvalid`]: this.state.password !== value
      }
    );
  }


  render() {
    const { firstName, lastName, email, phone, password, passwordConfirm, firstNameIsInvalid, lastNameIsInvalid, emailIsInvalid, phoneIsInvalid, passwordIsInvalid, passwordConfirmIsInvalid } = this.state;
    // const emailClass = `${styles.input} ${emailIsInvalid ? styles.invalid : ''}`;
    // const passwordClass = `${styles.input} ${passwordIsInvalid ? styles.invalid : ''}`;

    // const emailClass = [styles.input];
    // if (emailIsInvalid === true) {
    //   emailClass.push(styles.invalid);
    // }
    // const passwordClass = [styles.input];
    // if (passwordIsInvalid === true) {
    //   passwordClass.push(styles.invalid);
    // }

    // const emailClass = cx({
    //   [styles.input]: true,
    //   [styles.invalid]: emailIsInvalid
    // });
    // const passwordClass = cx({ [styles.input]: true, [styles.invalid]: passwordIsInvalid });
    const firstNameClass = cx(styles.input, { [styles.invalid]: firstNameIsInvalid });
    const lastNameClass = cx(styles.input, { [styles.invalid]: lastNameIsInvalid });
    const emailClass = cx(styles.input, { [styles.invalid]: emailIsInvalid });
    const phoneClass = cx(styles.input, { [styles.invalid]: phoneIsInvalid });
    const passwordClass = cx(styles.input, { [styles.invalid]: passwordIsInvalid });
    const passwordConfirmClass = cx(styles.input, { [styles.invalid]: passwordConfirmIsInvalid });

    return (
      <form className={styles.form} onSubmit={this.handleForm}>
        <input className={firstNameClass}
          value={firstName}
          onChange={this.handleName}
          type="text"
          name="firstName"
          placeholder="First name"
        />
        <input className={lastNameClass}
          value={lastName}
          onChange={this.handleName}
          type="text"
          name="lastName"
          placeholder="Last name"
        />
        <input className={emailClass}
          value={email}
          onChange={this.handleEmail}
          type="text"
          name="email"
          placeholder="email"
        />
        <input className={phoneClass}
          value={phone}
          onChange={this.handlePhone}
          type="text"
          name="phone"
          placeholder="Phone number"
        />
        <input className={passwordClass}
          value={password}
          onChange={this.handlePassword}
          type="text"
          name="password"
          placeholder="Password"
        />
        <input className={passwordConfirmClass}
          value={passwordConfirm}
          onChange={this.handleConfirmation}
          type="text"
          name="passwordConfirm"
          placeholder="Type your password again"
        />

        <input className={styles.input}
          type="submit"
          value="send"
        />

      </form>
    );
  }
}

export default SignUpForm;

// function cx(objStyles) {
//   return Object.entries(objStyles)
//     .filter(([className, check]) => check)
//     .map(([className, check]) => className)
//     .join(' ');
// }