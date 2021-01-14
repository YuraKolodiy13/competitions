import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getGroupRequest, getGroupTableRequest} from "../../../actions/leagues";
import '../League.scss'
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Standings from "../Standings";
import Matches from "../../../components/Matches/Matches";
import TabPanel from "../../../components/TabPanel/TabPanel";
import Loader from "../../../components/Loader/Loader";
import { Bar } from 'react-chartjs-2';
import {useParams} from "react-router-dom";

const Group = (props) => {
  const dispatch = useDispatch();
  const {leagueId} = useParams();
  const table = useSelector(state => state.leagues.table);
  const scorers = useSelector(state => state.leagues.scorers);
  const schedule = useSelector(state => state.leagues.schedule);
  const loading = useSelector(state => state.leagues.loading);
  const group = useSelector(state => state.leagues.group);
  const [value, setValue] = useState(0);

  useEffect(() => {
    dispatch(getGroupRequest({leagueId, groupId: props.match.params.id}));
    dispatch(getGroupTableRequest({leagueId, groupId: props.match.params.id}));
    // dispatch(getScorersRequest(props.match.params.id));
  }, [props.match.params.id]); // eslint-disable-line

  const data = {
    labels: [...table.map(item => item.team.name)],
    datasets: [
      {
        label: 'Scored goals',
        backgroundColor: 'rgba(8, 95, 0, .8)',
        data: [...table.map(item => item.goalsFor)]
      }
    ]
  };
  const data2 = {
    labels: [...table.map(item => item.team.name)],
    datasets: [
      {
        label: 'Missed goals',
        backgroundColor: 'rgb(204, 0, 0, .8)',
        data: [...table.map(item => item.goalsAgainst)]
      }
    ]
  };
  const data3 = {
    labels: [...table.map(item => item.team.name)],
    datasets: [
      {
        label: 'Difference',
        backgroundColor: 'rgba(75,192,192, .8)',
        data: [...table.map(item => item.goalDifference)]
      }
    ]
  };

  const options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true,
          min:0
        }
      }]
    }
  };


  return (
    <div className='home'>

      {loading
        ? <Loader/>
        : <>
          <h1>{group.name}</h1>
            <Tabs
              value={value}
              onChange={(e, newValue) => setValue(newValue)}
            >
              <Tab label='Standings'/>
              <Tab label='Results' />
              <Tab label='Top scorers' />
              <Tab label='Statistics' />
              <Tab label='Schedule' />
            </Tabs>
            {group
              ? <>
                <TabPanel value={value} index={0}>
                  <Standings table={table}/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <Matches matches={group.games}/>
                </TabPanel>
                <TabPanel value={value} index={2}>
                  {!!scorers.length
                    ?<ul>
                      {scorers.map(item =>
                        <li key={item.player.id}>{item.player.name} {item.numberOfGoals}</li>
                      )}
                    </ul>
                    : <p>no info about scorers</p>
                  }
                </TabPanel>
                <TabPanel value={value} index={3}>
                  <Bar data={data} options={options}/>
                  <Bar data={data2} options={options}/>
                  <Bar data={data3}/>
                </TabPanel>
              </>
              : <p>no info about this league</p>
            }
          </>
      }
    </div>
  )
};

export default Group;