import './styles.css'
import { useStyles } from './styles'
import React, { useEffect } from 'react'

import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Header from '../Header/Header'
import Fault from '../Fault/Fault'
import ServiceAgents from '../ServiceAgents/ServiceAgents'
import DeployedAgents from '../DeployedAgents/DeployedAgents'
import Communication from '../Communication'
import { getDeployedAgents } from '../../APIs/services'

import {
  updateServiceAgents,
  updateSelectedAgent,
  updateDeployStep,
  updateLoading
} from '../../Redux/Reducers/agents'
import { useDispatch } from 'react-redux'

function TabPanel (props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
}

function a11yProps (index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  }
}

export default function Home () {
  const [value, setValue] = React.useState(0)
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  useEffect(() => {
    // setLoading(true)
    dispatch(updateLoading(true))
    dispatch(updateDeployStep(1))
    getDeployedAgents()
      .then(res => {
        if (res && res.length > 0 && res != undefined) {
          // setAgents(res)
          dispatch(updateServiceAgents(res))
          dispatch(updateSelectedAgent(res[0]))
          dispatch(updateDeployStep(1))
          // setLoading(false)
          dispatch(updateLoading(false))
        } else {
          // setLoading(false)
          dispatch(updateLoading(false))
        }
      })
      .catch(error => {
        console.log('error', error)
        // setLoading(false)
        dispatch(updateLoading(false))
      })
  }, [])
  const updateTab = () => {
    setValue(0)
  }

  return (
    <>
      <Header />
      <Box sx={{ width: '100%' }} className={classes.maincontainer}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label='basic tabs example'
          >
            <Tab label='Communication' {...a11yProps(0)} />
            <Tab label='Fault' {...a11yProps(1)} />
            <Tab label='Service Agents' {...a11yProps(2)} />
            <Tab label='Deployed Agents' {...a11yProps(3)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Communication />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Fault />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ServiceAgents updateTab={updateTab} />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <DeployedAgents />
        </TabPanel>
      </Box>
    </>
  )
}
