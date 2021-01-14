import React, {useEffect, useState} from 'react';
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import {useDispatch} from "react-redux";
import {addCompetitionRequest} from "../../../actions/leagues";
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import Button from "../../buttons/Button/Button";
import Slide from "@material-ui/core/Slide";
import DatePicker from "../../DatePicker/DatePicker";
import {getFullDate} from "../../../helpers/utils";

const CompetitionModal = ({title, open, setIsModalOpen, team}) => {
  const dispatch = useDispatch();

  const initialState = {
    name: '',
    location: '',
    startDate: new Date()
  };

  const [state, setState] = useState(team || initialState);

  useEffect(() => {
    if(team) setState(team);
  },[team]);

  const closeModal = () => {
    setIsModalOpen(false);
    if(team) setState(team);
    else setState(initialState);
  };

  const createTeam = () => {

    if(team){
      // dispatch(editTaskRequest(data, setIsModalOpen));
    }else {
      dispatch(addCompetitionRequest(state, closeModal))
    }
  };

  const onHandleChange = (e) => {
    setState({...state, [e.target.name]: e.target.value})
  };

  const changeStartDate = (date) => {
    setState({...state, startDate: getFullDate(date)})
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
                  label='Імя змагання'
                  variant="outlined"
                  onChange={onHandleChange}
                  validators={['required']}
                  errorMessages={['Обовязкове поле']}
                />
              </div>
              <div className="modal__field">
                <TextValidator
                  value={state.location}
                  name='location'
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
                <DatePicker
                  selected={state.startDate}
                  name='startDate'
                  label='Початок турніру'
                  onChange={changeStartDate}
                  format="yyyy/MM/dd"
                  validators={['required']}
                  errorMessages={['Обовязкове поле']}
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

export default CompetitionModal;