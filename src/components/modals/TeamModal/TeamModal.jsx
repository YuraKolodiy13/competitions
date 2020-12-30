import React, {useEffect, useState} from 'react';
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import {useDispatch} from "react-redux";
import {addTeamRequest} from "../../../actions/leagues";
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import Button from "../../buttons/Button/Button";
import TextField from "@material-ui/core/TextField";
import Slide from "@material-ui/core/Slide";

const TeamModal = ({title, open, setIsModalOpen, team}) => {
  const dispatch = useDispatch();

  const initialState = {
    name: '',
    settlement: '',
    logo: '',
    rep_id: '',
    captain_id: '',
    players: []
  };

  const [state, setState] = useState(team || initialState);

  useEffect(() => {
    if(team) setState(team);
  },[team]);

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      if(team) setState(team);
      else setState(initialState);
    }, 100);
  };

  const createTeam = () => {

    if(team){
      // dispatch(editTaskRequest(data, setIsModalOpen));
    }else {
      dispatch(addTeamRequest(state, closeModal))
    }
  };

  const onHandleChange = (e) => {
    setState({...state, [e.target.name]: e.target.value})
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
          <h3>{title}</h3>
          <ValidatorForm onSubmit={createTeam} className='modal__form'>
            <div className="modal__row">
              <div className="modal__field">
                <TextValidator
                  value={state.name}
                  name='name'
                  type="text"
                  label='Імя команди'
                  variant="outlined"
                  onChange={onHandleChange}
                  validators={['required']}
                  errorMessages={['Обовязкове поле']}
                />
              </div>
              <div className="modal__field">
                <TextValidator
                  value={state.settlement}
                  name='settlement'
                  type="text"
                  label='Місто/село'
                  variant="outlined"
                  onChange={onHandleChange}
                  validators={['required']}
                  errorMessages={['Обовязкове поле']}
                />
              </div>
            </div>
            <div className="modal__row">
              <div className="modal__field">
                <TextField
                  value={state.logo}
                  name='logo'
                  type="text"
                  label='Посилання на логотип'
                  variant="outlined"
                  onChange={onHandleChange}
                />
              </div>
              <div className="modal__field">
                <TextField
                  value={state.rep_id}
                  name='rep_id'
                  type="text"
                  label='Представник'
                  variant="outlined"
                  onChange={onHandleChange}
                />
              </div>
            </div>
            <div className="modal__row">
              <div className="modal__field">
                <TextField
                  value={state.captain_id}
                  name='captain_id'
                  type="text"
                  label='Капітан'
                  variant="outlined"
                  onChange={onHandleChange}
                />
              </div>
            </div>
            <div className="modal__btns">
              <Button
                type="button"
                title='cancel'
                color='primary-inverse'
                doAction={closeModal}
              />
              <Button
                type='submit'
                title='save'
                color='primary'
              />
            </div>
          </ValidatorForm>
        </div>
      </Slide>
    </Modal>
  )
};

export default TeamModal;