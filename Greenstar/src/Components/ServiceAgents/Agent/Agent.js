import React, { useEffect } from 'react'
import { useStyles } from './styles'
import clsx from 'clsx'
import { CircularProgress } from '@material-ui/core'
import {
  updateSelectedAgent,
  updateDeployStep
} from '../../../Redux/Reducers/agents'
import { useDispatch, useSelector } from 'react-redux'

const Agent = () => {
  const classes = useStyles()

  const dispatch = useDispatch()
  const activeAgent = useSelector(state => state.agents.selectedagent)
  const allAgents = useSelector(state => state.agents.agents)
  const agentloader = useSelector(state => state.agents.loading)

  useEffect(() => {
    dispatch(updateDeployStep(1))
  }, [])
  const setActiveAgent = data => {
    dispatch(updateSelectedAgent(data))
    dispatch(updateDeployStep(1))
  }

  return (
    <div className={classes.AgentSection + ' deployedAgent scrollBarHide'}>
      <h2>Agents</h2>
      <div className={classes.agentBody}>
        {allAgents.length > 0 ? (
          allAgents.map((data, index) => (
            <div
              className={
                data.agentId == activeAgent?.agentId
                  ? clsx(classes.block, classes.active)
                  : clsx(classes.block)
              }
              key={index}
              onClick={() => {
                setActiveAgent(data)
              }}
            >
              <ul>
                <li className={classes.agentName}>
                  <label>Agent Name</label>
                  <p>{data.agentName}</p>
                </li>
                <li className={classes.agentType}>
                  <label>Type</label>
                  <p>{data.agentType}</p>
                </li>
              </ul>
              <div className={classes.textBottom}>
                <label>Service</label>
                <p>{data.agentService}</p>
              </div>
            </div>
          ))
        ) : (
          <div>
            {agentloader ? (
              <div className={classes.loader}>
                <CircularProgress
                  data-testid='circular-progress'
                  className={classes.circularProgress}
                  size={20}
                />
                <div> Loading agents... </div>
              </div>
            ) : (
              <div className={classes.loader}> No Agents...</div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Agent
