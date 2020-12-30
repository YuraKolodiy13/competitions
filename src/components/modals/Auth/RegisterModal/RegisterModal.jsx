import React, {useEffect, useState} from 'react';
import Button from "@material-ui/core/Button";
import {useDispatch, useSelector} from "react-redux";
import {registerRequest, resetErrors} from "../../../../actions/auth";
import {useHistory} from "react-router-dom";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Slide from "@material-ui/core/Slide";

const RegisterModal = ({open, setIsModalOpen}) => {

  const admin = useSelector(state => state.auth.admin);
  const dispatch = useDispatch();
  const history = useHistory();

  const [state, setState] = useState({
    name: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    if(admin) history.push('/');
  }, [admin, history]);

  const submitLogin = () => {
    dispatch(registerRequest(state, closeModal))
  };

  const submitLoginError = () => {
    dispatch(resetErrors());
  };

  const onHandleChange = (e) => {
    setState({...state, [e.target.name]: e.target.value})
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setState({
      name: '',
      email: '',
      password: ''
    })
  };


  return (
    <Modal
      className='modal'
      open={open}
      onClose={closeModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Slide direction="down" in={open}>
        <div className='modal__content'>
          <h3 className="heading">Створити новий аккаунт</h3>
          <ValidatorForm onSubmit={submitLogin} onError={submitLoginError} className='login__form'>
            <div className="modal__row">
              <div className="login__field modal__field w100">
                <TextValidator
                  value={state.name}
                  name='name'
                  type="text"
                  label="Ім'я"
                  variant="outlined"
                  onChange={onHandleChange}
                  validators={['required']}
                  errorMessages={['Обовязкове поле']}
                />
              </div>
            </div>
            <div className="modal__row">
              <div className="login__field modal__field w100">
                <TextValidator
                  value={state.email}
                  name='email'
                  type="email"
                  label='Email'
                  variant="outlined"
                  onChange={onHandleChange}
                  validators={['required']}
                  errorMessages={['Обовязкове поле']}
                />
              </div>
            </div>
            <div className="modal__row">
              <div className="login__field modal__field w100">
                <TextValidator
                  value={state.password}
                  name='password'
                  type='password'
                  label='Пароль'
                  variant="outlined"
                  onChange={onHandleChange}
                  validators={['required']}
                  errorMessages={['Обовязкове поле']}
                />
              </div>
            </div>
            <Button
              variant="contained"
              type='submit'
              className='button'
            >
              Увійти
            </Button>
          </ValidatorForm>
        </div>
      </Slide>
    </Modal>
  )
};

export default RegisterModal;