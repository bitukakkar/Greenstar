import React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Agent from './Agent/Agent'
import AgentDetail from './AgentDetail/AgentDetail'
import { useDispatch, useSelector } from 'react-redux'

const ServiceAgents = props => {
  const { updateTab } = props
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }))
  return (
    <div className='serviceAgents'>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Item>
            <Agent />
          </Item>
        </Grid>
        <Grid item xs={8}>
          <Item>
            <AgentDetail updateTab={updateTab} />
          </Item>
        </Grid>
      </Grid>
    </div>
  )
}

export default ServiceAgents
