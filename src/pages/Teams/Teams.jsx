import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getTeamsRequest} from "../../actions/leagues";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './Teams.scss'
import {Link} from "react-router-dom";
import Button from "../../components/buttons/Button/Button";
import TeamModal from "../../components/modals/TeamModal/TeamModal";

const Teams = () => {
  const dispatch = useDispatch();
  const teams = useSelector(state => state.leagues.teams);
  const user = useSelector(state => state.auth.user);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getTeamsRequest());
  }, [dispatch]);

  return (
    <div className='teams'>
      {user && user.role === 'admin' && (
        <Button
          type='button'
          title='Добавити команду'
          color='primary'
          doAction={() => setIsModalOpen(true)}
        />
      )}
      {teams && teams.map(item => (
        <div className='teams__item' key={item._id}>
          <Link to={`/team/${item._id}`}>{item.name}</Link>
        </div>
      ))}

      <TeamModal
        title='Нова команда'
        open={isModalOpen}
        setIsModalOpen={() => setIsModalOpen(false)}
      />
    </div>
  )
};

export default Teams;