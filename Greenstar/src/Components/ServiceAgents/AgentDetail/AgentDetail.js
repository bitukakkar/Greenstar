import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import { useStyles } from './styles'
import './styles.scss'
import clsx from 'clsx'
import icon from '../../../Assets/images/check.png'
import { TextField, Grid } from '@mui/material'
import ButtonCustom from '../../ButtonCustom/ButtonCustom'
import Button from '@mui/material/Button'
import '../../ButtonCustom/ButtonCustom.scss'
import { useDispatch, useSelector } from 'react-redux'
import { CircularProgress } from '@material-ui/core'
import { toast } from 'react-toastify'
import { createAgent } from '../../../APIs/services'
import {
  updateDialogueId,
  updateDeployStep,
  updateDeployedAgents
} from '../../../Redux/Reducers/agents'
import moment from "moment";
const AgentDetail = props => {
  const classes = useStyles()
  const activeAgent = useSelector(state => state.agents.selectedagent)
  const dialogueid = useSelector(state => state.agents.dialogueid)
  const deploystep = useSelector(state => state.agents.deploystep)
  const agentloader = useSelector(state => state.agents.loading)
  const deployedagents = useSelector(state => state.agents.deployedagents)
  const [agentid, setAgentid] = useState('')
  const [agentname, setAgentname] = useState('')
  const [agenttype, setAgentType] = useState('')
  const [agentservice, setAgentservice] = useState('')
  const [companyname, setCompanyname] = useState('')
  const [companyid, setCompanyid] = useState('')
  const [status, setStatus] = useState('')
  const [createdby, setCreatedby] = useState('')
  const [createdon, setCreatedon] = useState('')
  const [updatedby, setUpdatedby] = useState('')
  const [updatedon, setUpdatedon] = useState('')
  const [loading, setLoading] = useState(false)
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }))
  const dispatch = useDispatch()
  const handledata = () => {
    setAgentid(activeAgent.agentId)
    setAgentname(activeAgent.agentName)
    setAgentType(activeAgent.agentType)
    setAgentservice(activeAgent.agentService)
    setCompanyname(activeAgent.companyName)
    setCompanyid(activeAgent.companyId)
    setStatus(activeAgent.status)
    setCreatedby(activeAgent.createdBy)
    setCreatedon(activeAgent.createdOn)
    setUpdatedby(activeAgent.updatedBy)
    setUpdatedon(activeAgent.updatedOn)
    dispatch(updateDeployStep(2))
  }

  const handleBackstep = () => {
    dispatch(updateDeployStep(1))
  }

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
  const submitDeployAgent = async () => {
    if (
      agentname == '' ||
      agenttype == '' ||
      agentservice == '' ||
      companyname == '' ||
      companyid == '' ||
      createdby == '' ||
      createdon == '' ||
      updatedby == '' ||
      updatedon == ''
    ) {
      showNotification('error', 'Please fill all data')
    } else {
      let payload = {
        agentId: agentid,
        agentName: agentname,
        agentService: agentservice,
        agentType: agenttype,
        companyId: companyid,
        companyName: companyname,
        createdBy: createdby,
        status: status,
        updatedBy: updatedby,
        updatedOn: updatedon,
        createdOn: createdon
      }
      setLoading(true)
      await createAgent(payload)
        .then(res => {
          if (res) {
            showNotification(
              'Congrats',
              'Service Agent successfully Deployed. '
            )
            let AddDeployedAgent = {
              agentId: agentid,
              agentAddress:res.data.address,
              agentContainerid:res.data.container_id,
              agentName: agentname,
              agentService: agentservice,
              agentType: agenttype,
              companyId: companyid,
              companyName: companyname,
              createdBy: createdby,
              status: status,
              updatedBy: updatedby,
              updatedOn: moment().format("DD-MM-YYYY hh:mm:ss"),
              createdOn: moment().format("DD-MM-YYYY hh:mm:ss")
            }
            dispatch(updateDeployedAgents([...deployedagents, AddDeployedAgent]))
            setLoading(false)
            dispatch(updateDeployStep(3))
            dispatch(updateDialogueId(res.data.address))
          } else {
            setLoading(false)
            showNotification('error', 'Something went wrong. please try again')
          }
        })
        .catch(error => {
          console.log('error', error)
          setLoading(false)
          showNotification('error', error)

        })
    }
  }
  return (
    <div className={classes.agentDetail}>
      {activeAgent !== null && activeAgent !== '' ? (
        <div>
          {/* first page  */}
          {deploystep === 1 && (
            <div className={classes.sectionTop}>
              <div className={clsx(classes.block, classes.borderBtm)}>
                <h4>Agent Details:</h4>
                <ul>
                  <li className={clsx(classes.dFlex, classes.mb8)}>
                    <label className={classes.flex20}>Agent Name</label>
                    <p className={classes.flex1}>{activeAgent.agentName}</p>
                  </li>
                  <li className={clsx(classes.dFlex, classes.mb8)}>
                    <label className={classes.flex20}>Agent Service</label>
                    <p className={classes.flex1}>{activeAgent.agentService}</p>
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
                    <p className={classes.flex1}>{activeAgent.companyName}</p>
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
                    <p>{activeAgent.status}</p>
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
          )}
          {/* first page ends here... */}

          {/* second section start here */}
          {deploystep === 2 && (
            <div className={classes.sectionTop}>
              <div className={clsx(classes.block, classes.borderBtm)}>
                <h4>Agent Details:</h4>
                <div className='fldWrap'>
                  <TextField
                    required
                    id='standard-required'
                    label='Agent Name'
                    defaultValue={agentname}
                    value={agentname}
                    variant='standard'
                    onChange={e => {
                      setAgentname(e.target.value)
                    }}
                  />
                </div>
                <div className='fldWrap'>
                  <TextField
                    required
                    id='standard-required'
                    label='Agent Type'
                    variant='standard'
                    defaultValue={agenttype}
                    value={agenttype}
                    variant='standard'
                    onChange={e => {
                      setAgentType(e.target.value)
                    }}
                  />
                </div>
                <div className='fldWrap'>
                  <TextField
                    required
                    id='standard-required'
                    label='Agent Service'
                    defaultValue={agentservice}
                    value={agentservice}
                    variant='standard'
                    onChange={e => {
                      setAgentservice(e.target.value)
                    }}
                  />
                </div>
              </div>
              <div className={clsx(classes.block, classes.borderBtm)}>
                <h4>Company Details:</h4>
                <div className='fldWrap'>
                  <TextField
                    required
                    id='standard-required'
                    label='Company Name'
                    defaultValue={companyname}
                    value={companyname}
                    variant='standard'
                    onChange={e => {
                      setCompanyname(e.target.value)
                    }}
                  />
                </div>
                <div className='fldWrap'>
                  <TextField
                    required
                    id='standard-required'
                    label='Company ID'
                    defaultValue={companyid}
                    value={companyid}
                    variant='standard'
                    onChange={e => {
                      setCompanyid(e.target.value)
                    }}
                  />
                </div>
              </div>
              <div className={clsx(classes.block, classes.paddingBottom)}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Item>
                      <div className='fldWrap SizeAuto'>
                        <TextField
                          required
                          id='standard-required'
                          label='Created By'
                          defaultValue={createdby}
                          value={createdby}
                          variant='standard'
                          onChange={e => {
                            setCreatedby(e.target.value)
                          }}
                        />
                      </div>
                    </Item>
                  </Grid>
                  <Grid item xs={6}>
                    <Item>
                      <div className='fldWrap SizeAuto'>
                        <TextField
                          required
                          id='standard-required'
                          label='Created On'
                          defaultValue={createdon}
                          value={createdon}
                          variant='standard'
                          onChange={e => {
                            setCreatedon(e.target.value)
                          }}
                        />
                      </div>
                    </Item>
                  </Grid>
                  <Grid item xs={6}>
                    <Item>
                      <div className='fldWrap SizeAuto'>
                        <TextField
                          required
                          id='standard-required'
                          label='Updated By'
                          defaultValue={updatedby}
                          value={updatedby}
                          variant='standard'
                          onChange={e => {
                            setUpdatedby(e.target.value)
                          }}
                        />
                      </div>
                    </Item>
                  </Grid>
                  <Grid item xs={6}>
                    <Item>
                      <div className='fldWrap SizeAuto'>
                        <TextField
                          required
                          id='standard-required'
                          label='Updated On'
                          defaultValue={updatedon}
                          value={updatedon}
                          variant='standard'
                          onChange={e => {
                            setUpdatedon(e.target.value)
                          }}
                        />
                      </div>
                    </Item>
                  </Grid>
                </Grid>
              </div>
            </div>
          )}
          {/* second section end here... */}

          {/* Final step start here... */}
          {deploystep === 3 && (
            <div
              className={clsx(
                classes.sectionTop,
                classes.dFlex,
                classes.justifyContentCenter,
                classes.alignItemCenter
              )}
            >
              <div className={classes.Deployed}>
                <h3>Service Agent Deployed</h3>
                <div className={classes.CheckIcon}>
                  <img src={icon} alt='' className='check_img' />
                </div>
                <p>
                  <label>Agent ID: </label>
                  {agentid}
                </p>
                <p style={{ color: '#003308' }} className='BaseTxt'>
                  <label>Address: </label>
                  {dialogueid}
                </p>
              </div>
            </div>
          )}

          {/* Final step end here...  */}
          <div className={classes.sectionFooter}>
            {deploystep === 1 && (
              <Button
                className={`commonBtn `}
                disableElevation
                disabled={agentloader}
                onClick={() => {
                  handledata()
                }}
              >
                Autofill Form
              </Button>
            )}
            {/* <ButtonCustom
          buttontext='Autofill Form'
          onClick={() => {
            setStep1(false)
            setStep2(true)
            setStep3(false)
          }}
        /> */}
            {/* second section footer */}
            {deploystep === 2 && (
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Button
                    className={`commonBtn whiteBtn`}
                    disableElevation
                    onClick={() => {
                      handleBackstep()
                    }}
                  >
                    Back
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    className={`commonBtn`}
                    disableElevation
                    disabled={loading}
                    onClick={() => {
                      submitDeployAgent()
                    }}
                  >
                    {loading ? (
                      <CircularProgress
                        data-testid='circular-progress'
                        className={classes.circularProgress}
                        size={20}
                      />
                    ) : (
                      ' Deploy Agent'
                    )}
                  </Button>
                </Grid>
              </Grid>
            )}
            {deploystep === 3 && (
              <Button
                className={`commonBtn `}
                onClick={() => {
                  props.updateTab()
                }}
              >
                Communication
              </Button>
            )}
            {/* second section footer end here... */}
          </div>
        </div>
      ) : (
        <div className={classes.nocontent}> no records... </div>
      )}
    </div>
  )
}

export default AgentDetail
