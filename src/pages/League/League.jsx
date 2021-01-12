import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCompetitionRequest, getScorersRequest, getTableRequest} from "../../actions/leagues";
import './League.scss'
import {Link} from "react-router-dom";

const League = (props) => {
  const dispatch = useDispatch();
  const table = useSelector(state => state.leagues.table);
  const competition = useSelector(state => state.leagues.competition);

  useEffect(() => {
    dispatch(getCompetitionRequest(props.match.params.id));
    // dispatch(getTableRequest(props.match.params.id));
    // dispatch(getScorersRequest(props.match.params.id));
  }, [props.match.params.id]); // eslint-disable-line


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
    </div>
  )
};

export default League;