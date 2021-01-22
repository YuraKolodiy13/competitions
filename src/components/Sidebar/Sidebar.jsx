import React, {Fragment, useEffect, useState} from 'react';
import {getCompetitionsRequest, removeCompetitionRequest} from "../../actions/leagues";
import {useDispatch, useSelector} from "react-redux";
import './Sidebar.scss'
import {Link} from "react-router-dom";
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import Button from "../buttons/Button/Button";
import CompetitionModal from "../modals/CompetitionModal/CompetitionModal";
import ActionButton from "../buttons/ActionButton/ActionButton";

const Sidebar = () => {

  const competitions = useSelector(state => state.leagues.competitions);
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [competition, setCompetition] = useState({});

  useEffect(() => {
    dispatch(getCompetitionsRequest());
  }, []); // eslint-disable-line

  const removeCompetition = (e, id) => {
    e.preventDefault();
    dispatch(removeCompetitionRequest(id))
  };

  const toggleModal = (competition) => {
    setCompetition(competition);
    setIsModalOpen(true);
  };

  const treeTableWrapper = (taskTree) => {
    return taskTree && taskTree.map((item, index) => {
      return (
        <Fragment key={item._id}>
          <TreeItem
            nodeId={index.toString()}
            label={
              <div className='league-name'>
                <Link to={`/league/${item._id}`}>{item.name}</Link>
                {user && user.role === 'admin' && (
                  <>
                    <ActionButton edit doAction={() => toggleModal(item)}/>
                    <ActionButton remove doAction={(e) => removeCompetition(e, item._id)}/>
                  </>
                  // <span className='remove-icon' onClick={(e) => removeCompetition(e, item._id)}>x</span>
                )}
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
    <div>
      <TreeView
        className='sidebar'
        defaultCollapseIcon={<span className='arrow'/>}
        defaultExpandIcon={<span className='arrow'/>}
        multiSelect
      >{treeTableWrapper(competitions)}</TreeView>

      {user && user.role === 'admin' && (
        <Button
          type='button'
          title='Добавити змагання'
          color='primary'
          doAction={() => setIsModalOpen(true)}
        />
      )}

      <CompetitionModal
        open={isModalOpen}
        setIsModalOpen={() => setIsModalOpen(false)}
        competition={competition}
      />
    </div>
  )
};

export default Sidebar;