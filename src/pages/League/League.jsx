import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCompetitionRequest} from "../../actions/leagues";
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


  return (
    <div className='home'>
      <h1>{competition.name}</h1>

      <ul>
        {competition.groups && competition.groups.map(item =>
          <li key={item._id}>
            <Link to={`/league/${competition._id}/groups/${item._id}`}>{item.name}</Link>
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