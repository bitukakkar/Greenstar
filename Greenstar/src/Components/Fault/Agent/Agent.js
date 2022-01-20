import React, { useEffect } from 'react'
import { useStyles } from './styles'
import clsx from 'clsx'
import { CircularProgress } from '@material-ui/core'
import {
  UpdateActiveFaultgent,
  updateFaultAgents,
  updateLoading
} from '../../../Redux/Reducers/agents'
import { useDispatch, useSelector } from 'react-redux'
import { getFaults } from '../../../APIs/services'

const Agent = () => {
  const classes = useStyles()

  const dispatch = useDispatch()
  const activeAgent = useSelector(state => state.agents.activefaultagent)
  const allAgents = useSelector(state => state.agents.faultagents)
  const agentloader = useSelector(state => state.agents.loading)

  useEffect(() => {
    dispatch(updateLoading(true))
    getFaults()
      .then(res => {
        if (res && res.length > 0 && res != undefined) {
           dispatch(updateFaultAgents(res))
           dispatch(UpdateActiveFaultgent(res[0]))
           dispatch(updateLoading(false))
        } else {
          dispatch(updateLoading(false))
        }
      })
      .catch(error => {
        console.log('error', error)
        dispatch(updateLoading(false))
      })
  }, [])
  const setActiveAgent = data => {
    dispatch(UpdateActiveFaultgent(data))
  }

  return (
    <div className={classes.AgentSection + ' deployedAgent scrollBarHide'}>
      <h2>Agents</h2>
      <div className={classes.agentBody}>
        {allAgents.length > 0 ? (
          allAgents.map((data, index) => (
            <div
              className={
                data.id == activeAgent?.id
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
                  <p>{data.serviceInformation.length > 0 ? data.serviceInformation[0].techName : 'NA'}</p>
                </li>
                <li className={classes.agentType}>
                  <label>Type</label>
                  <p>{data.serviceInformation.length > 0 ? data.serviceInformation[0].techType : 'NA'}</p>
                </li>
              </ul>
              <div className={classes.textBottom}>
                <label>Location</label>
                <p>{data.serviceInformation.length > 0 ? data.serviceInformation[0].techLocation : 'NA'}</p>
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
