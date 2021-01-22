import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCompetitionRequest, removeGroupRequest} from "../../actions/leagues";
import './League.scss'
import {Link, useParams} from "react-router-dom";
import Button from "../../components/buttons/Button/Button";
import GroupModal from "../../components/modals/GroupModal/GroupModal";

const League = (props) => {
  const dispatch = useDispatch();
  const competition = useSelector(state => state.leagues.competition);
  const user = useSelector(state => state.auth.user);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {leagueId} = useParams();

  useEffect(() => {
    dispatch(getCompetitionRequest(leagueId));
  }, [leagueId]); // eslint-disable-line

  const removeGroup = (e, groupId) => {
    e.preventDefault();
    dispatch(removeGroupRequest({leagueId, groupId}))
  };

  return (
    <div className='home'>
      <ul className='breadcrumbs'>
        <li><Link to='/'>Home</Link></li>
        <li>Ліга: {competition.name}</li>
      </ul>
      <h1>{competition.name}</h1>
      <ul>
        {competition.groups && competition.groups.map(item =>
          <li key={item._id}>
            <Link to={`/league/${competition._id}/groups/${item._id}`}>{item.name}</Link>
            {user && user.role === 'admin' && (
              <span className='remove-icon' onClick={(e) => removeGroup(e, item._id)}>x</span>
            )}
          </li>
        )}
      </ul>

      {user && user.role === 'admin' && (
        <Button
          type='button'
          title='Добавити групу'
          color='primary'
          doAction={() => setIsModalOpen(true)}
        />
      )}

      <GroupModal
        title='Нова група'
        open={isModalOpen}
        setIsModalOpen={() => setIsModalOpen(false)}
        leagueId={leagueId}
      />
    </div>
  )
};

export default League;