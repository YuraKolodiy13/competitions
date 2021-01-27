import React, {useEffect, useState} from 'react';
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import {useDispatch, useSelector} from "react-redux";
import {addGameRequest, getTeamsRequest} from "../../../actions/leagues";
import {ValidatorForm, TextValidator, SelectValidator} from 'react-material-ui-form-validator';
import Button from "../../buttons/Button/Button";
import Slide from "@material-ui/core/Slide";
import MenuItem from "@material-ui/core/MenuItem";
import DatePicker from "../../DatePicker/DatePicker";
import {getFullDate} from "../../../helpers/utils";

const GameModal = ({title, open, setIsModalOpen, game, leagueId, groupId}) => {
  const dispatch = useDispatch();

  const initialState = {
    status: '',
    homeTeam: '',
    awayTeam: '',
    referees: ['5fea02df1052b962df9d77e7'],
    matchDay: '',
    startDate: new Date(),
    utcDate: new Date(),
    fullTime: {
      homeTeam: '',
      awayTeam: '',
    },
  };

  const [state, setState] = useState(game || initialState);
  const teams = useSelector(state => state.leagues.teams);

  useEffect(() => {
    if(game) setState(game);
    dispatch(getTeamsRequest())
  },[game]);

  const closeModal = () => {
    setIsModalOpen(false);
    if(game) setState(game);
    else setState(initialState);
  };

  const createTeam = () => {

    if(game){
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
                  value={state.referees}
                  name='referees'
                  type="text"
                  label='Суддя'
                  variant="outlined"
                  // onChange={onHandleChange}
                  // validators={['required']}
                  // errorMessages={['Обовязкове поле']}
                  disabled
                />
              </div>
            </div>
            <div className="modal__row">
              <div className="modal__field">
                <SelectValidator
                  value={state.homeTeam}
                  name='homeTeam'
                  type="text"
                  label='Домашня команда'
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
                  {teams.map(item =>
                    <MenuItem key={item._id} value={item._id}>{item.name}</MenuItem>
                  )}
                </SelectValidator>
              </div>
              <div className="modal__field">
                <SelectValidator
                  value={state.awayTeam}
                  name='awayTeam'
                  type="text"
                  label='Гостьова команда'
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
                  {teams.map(item =>
                    <MenuItem key={item._id} value={item._id}>{item.name}</MenuItem>
                  )}
                </SelectValidator>
              </div>
            </div>
            <div className="modal__row">
              <div className="modal__field">
                <TextValidator
                  value={state.fullTime.homeTeam}
                  name='homeTeam'
                  type="text"
                  label='Голи господарів'
                  variant="outlined"
                  onChange={e => setState({...state, fullTime: {...state.fullTime, homeTeam: +e.target.value}})}
                  validators={['required']}
                  errorMessages={['Обовязкове поле']}
                />
              </div>
              <div className="modal__field">
                <TextValidator
                  value={state.fullTime.awayTeam}
                  name='awayTeam'
                  type="text"
                  label='Голи гостів'
                  variant="outlined"
                  onChange={e => setState({...state, fullTime: {...state.fullTime, awayTeam: +e.target.value}})}
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
                  label='Початок гри'
                  onChange={changeStartDate}
                  format="yyyy/MM/dd"
                  validators={['required']}
                  errorMessages={['Обовязкове поле']}
                />
              </div>
              <div className="modal__field">
                <TextValidator
                  value={state.matchDay}
                  name='matchDay'
                  type="text"
                  label='Тур'
                  variant="outlined"
                  onChange={e => setState({...state, matchDay: +e.target.value})}
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