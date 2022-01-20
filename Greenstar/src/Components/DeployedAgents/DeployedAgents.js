import React from 'react'
import { Grid } from '@mui/material'
import { useStyles } from './styles'
import Paper from '@mui/material/Paper'
import clsx from 'clsx'
import { styled } from '@mui/material/styles'
import Form from './Form/Form'
import './styles.scss'
import Agent from '../DeployedAgents/Agent/Agent.js'
import { useSelector,useDispatch } from 'react-redux'
import DeleteIcon from '@mui/icons-material/Delete';
import {
  updateDeployedAgents,
  UpdateActiveDeployedSgent
} from '../../Redux/Reducers/agents'
import { stopDeployedAgent } from '../../APIs/services'
import { toast } from 'react-toastify'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}))
const DeployedAgents = () => {
  const classes = useStyles()
  const activeAgent = useSelector(state => state.agents.activedeployedagent)
  const allAgents = useSelector(state => state.agents.deployedagents)
  const dispatch = useDispatch()


  const showNotification = (type, msg) => {
    if (type === 'error') {
      toast.error(msg, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    } else {
      toast.success(msg, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    }
  }

  const stopAgent = async (agent)  => {
    if (window.confirm('Want To Stop Agent?') == true) {
       let payload = {
        address : agent.agentAddress
       }

      await stopDeployedAgent(payload)
      .then(res => {
        if (res == null) {
          const updatedAgents = allAgents.filter( item => item.agentId !== agent.agentId );
          dispatch(UpdateActiveDeployedSgent(null))
          dispatch(updateDeployedAgents(updatedAgents))
          showNotification(
            'Congrats',
            'Agent successfully Stoped. '
          )
        } else {
          showNotification('error', 'Something went wrong. please try again')

        }
      })
      .catch(error => {
        console.log('error', error)
      })
    
    }
  
  }
  return (
    <div className={classes.agentDetail + ' deployed scrollBarHide'}>
      <Form />
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Item>
            <Agent />
          </Item>
        </Grid>
        <Grid item xs={8}>
          {activeAgent !== null && activeAgent !== '' ? (
            <div>
              <Item>
                <div
                  className={
                    classes.sectionTop + ' deployedDetail scrollBarHide'
                  }
                >

                  <div className={clsx(classes.block, classes.borderBtm)}>
                     <DeleteIcon className={classes.deleteicon}  onClick={() => {
                stopAgent(activeAgent)
              }}/>

                    <h4>Fault Details:</h4>
                    
                    <ul>
                      <li className={clsx(classes.dFlex, classes.mb8)}>
                        <label className={classes.flex20}>Fault ID</label>
                        <p className={classes.flex1}>NA</p>
                      </li>
                      <li className={clsx(classes.dFlex, classes.mb8)}>
                        <label className={classes.flex20}>Fault Name</label>
                        <p className={classes.flex1}>NA</p>
                      </li>
                      <li className={clsx(classes.dFlex, classes.mb8)}>
                        <label className={classes.flex20}>Dialogue ID</label>
                        <p
                          style={{ color: '#003308' }}
                          className={clsx(classes.flex1)}
                        >
                          {activeAgent.agentAddress}
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className={clsx(classes.block, classes.borderBtm)}>
                    <h4>Agent Details:</h4>
                    <ul>
                      <li className={clsx(classes.dFlex, classes.mb8)}>
                        <label className={classes.flex20}>Agent Name</label>
                        <p className={classes.flex1}>{activeAgent.agentName}</p>
                      </li>
                      <li className={clsx(classes.dFlex, classes.mb8)}>
                        <label className={classes.flex20}>Agent ID</label>
                        <p className={classes.flex1}>{activeAgent.agentId}</p>
                      </li>
                      <li className={clsx(classes.dFlex, classes.mb8)}>
                        <label className={classes.flex20}>Agent Service</label>
                        <p className={classes.flex1}>
                          {activeAgent.agentService}
                        </p>
                      </li>
                      <li className={clsx(classes.dFlex, classes.mb8)}>
                        <label className={classes.flex20}>Agent Type</label>
                        <p className={classes.flex1}>{activeAgent.agentType}</p>
                      </li>
                    </ul>
                  </div>
                  <div className={clsx(classes.block, classes.borderBtm)}>
                    <h4>Company Details:</h4>
                    <ul>
                      <li className={clsx(classes.dFlex, classes.mb8)}>
                        <label className={classes.flex20}>Company Name</label>
                        <p className={classes.flex1}>
                          {activeAgent.companyName}
                        </p>
                      </li>
                      <li className={clsx(classes.dFlex, classes.mb8)}>
                        <label className={classes.flex20}>Company ID</label>
                        <p className={classes.flex1}>{activeAgent.companyId}</p>
                      </li>
                    </ul>
                  </div>

                  <div className={classes.block}>
                    <ul className={classes.dFlex}>
                      <li className={clsx(classes.mb16, classes.flex100)}>
                        <label>Status</label>
                        <p> {activeAgent.status}</p>
                      </li>
                      <li className={clsx(classes.mb16, classes.flex50)}>
                        <label>Created By</label>
                        <p>{activeAgent.createdBy}</p>
                      </li>
                      <li className={clsx(classes.mb16, classes.flex50)}>
                        <label>Created On</label>
                        <p>{activeAgent.createdOn}</p>
                      </li>
                      <li className={clsx(classes.mb16, classes.flex50)}>
                        <label>Update By</label>
                        <p>{activeAgent.updatedBy}</p>
                      </li>
                      <li className={clsx(classes.mb16, classes.flex50)}>
                        <label>Updated On</label>
                        <p>{activeAgent.updatedOn}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </Item>
            </div>
          ) : (
            <div className={classes.nocontent}> no records... </div>
          )}
        </Grid>
      </Grid>
    </div>
  )
}
export default DeployedAgents
