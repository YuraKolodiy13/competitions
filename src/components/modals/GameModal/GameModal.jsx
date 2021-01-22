import React, {useEffect, useState} from 'react';
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import {useDispatch} from "react-redux";
import {addGameRequest} from "../../../actions/leagues";
import {ValidatorForm, TextValidator, SelectValidator} from 'react-material-ui-form-validator';
import Button from "../../buttons/Button/Button";
import Slide from "@material-ui/core/Slide";
import MenuItem from "@material-ui/core/MenuItem";
import DatePicker from "../../DatePicker/DatePicker";
import {getFullDate} from "../../../helpers/utils";
const GameModal = ({title, open, setIsModalOpen, team, leagueId, groupId}) => {
  const dispatch = useDispatch();

  const initialState = {
    status: '',
    homeTeam: '',
    awayTeam: '',
    startDate: new Date(),
    utcDate: new Date(),
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
      dispatch(addGameRequest({body: state, leagueId, groupId}, closeModal))
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
                <SelectValidator
                  value={state.status}
                  name='status'
                  type="text"
                  label='Статус гри'
                  variant="outlined"
                  onChange={onHandleChange}
                  validators={['required']}
                  errorMessages={['Обовязкове поле']}
                  SelectProps={{
                    MenuProps: {
                      anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "left"
                      },
                      transformOrigin: {
                        vertical: "top",
                        horizontal: "left"
                      },
                      getContentAnchorEl: null}
                  }}
                >
                  <MenuItem value={'sheduled'}>sheduled</MenuItem>
                  <MenuItem value={'finished'}>finished</MenuItem>
                  <MenuItem value={'in_play'}>триває</MenuItem>
                </SelectValidator>
              </div>
              <div className="modal__field">
                <TextValidator
                  value={state.homeTeam}
                  name='homeTeam'
                  type="text"
                  label='Домашня команда'
                  variant="outlined"
                  onChange={onHandleChange}
                  validators={['required']}
                  errorMessages={['Обовязкове поле']}
                />
              </div>
            </div>
            <div className="modal__row">
              <div className="modal__field">
                <TextValidator
                  value={state.awayTeam}
                  name='awayTeam'
                  type="text"
                  label='Гостьова команда'
                  variant="outlined"
                  onChange={onHandleChange}
                  validators={['required']}
                  errorMessages={['Обовязкове поле']}
                />
              </div>
              <div className="modal__field">
                <DatePicker
                  selected={state.startDate}
                  name='startDate'
                  label='Початок гри'
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

export default GameModal;