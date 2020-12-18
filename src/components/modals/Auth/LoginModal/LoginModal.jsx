import React, {useEffect, useState} from 'react';
import Button from "@material-ui/core/Button";
import {useDispatch, useSelector} from "react-redux";
import {loginRequest, resetErrors} from "../../../../actions/auth";
import {useHistory} from "react-router-dom";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Slide from "@material-ui/core/Slide";

const LoginModal = ({open, setIsModalOpen}) => {

  const admin = useSelector(state => state.auth.admin);
  const dispatch = useDispatch();
  const history = useHistory();

  const [state, setState] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {
    if(admin) history.push('/');
  }, [admin, history]);

  const submitLogin = () => {
    dispatch(loginRequest(state))
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
      email: '',
      password: ''
    })
  };


  return (
    <Modal
      className='modal modal-wide'
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
          <h2 className="heading">Вхід до системи</h2>
          <ValidatorForm onSubmit={submitLogin} onError={submitLoginError} className='login__form'>
            <div className="login__field modal__field">
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
            <div className="login__field modal__field">
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

export default LoginModal;