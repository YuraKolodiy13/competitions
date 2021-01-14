import React, {Fragment, useEffect} from 'react';
import {getCompetitionsRequest, removeCompetitionRequest} from "../../actions/leagues";
import {useDispatch, useSelector} from "react-redux";
import './Sidebar.scss'
import {Link} from "react-router-dom";
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';

const Sidebar = () => {

  const competitions = useSelector(state => state.leagues.competitions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompetitionsRequest());
  }, []); // eslint-disable-line

  const removeCompetition = (e, id) => {
    e.preventDefault();
    dispatch(removeCompetitionRequest(id))
  };

  const treeTableWrapper = (taskTree) => {
    return taskTree && taskTree.map((item, index) => {
      return (
        <Fragment key={item._id}>
          <TreeItem
            nodeId={index.toString()}
            label={
              <div>
                <Link to={`/league/${item._id}`}>{item.name}</Link>
                <span onClick={(e) => removeCompetition(e, item._id)}> x</span>
              </div>
            }
            // style={{backgroundImage: `url(${item.logo})`}}
          >
            {item.length > 1 && treeTable(item)}
          </TreeItem>
        </Fragment>
      )
    });
  };

  const treeTable = (taskTree) => {
    return taskTree && taskTree.map(league => {
      return (
        <li key={league._id}>{row(league)}</li>
      )
    });
  };


  const row = (league) => {
    return (
      <Link to={`/league/${league._id}`}>{league.name}</Link>
    )
  };


  return (
    <TreeView
      className='sidebar'
      defaultCollapseIcon={<span className='arrow'/>}
      defaultExpandIcon={<span className='arrow'/>}
      multiSelect
    >{treeTableWrapper(competitions)}</TreeView>
  )
};

export default Sidebar;