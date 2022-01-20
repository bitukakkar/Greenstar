import React from 'react'
import { Grid } from '@mui/material'
import { useStyles } from './styles'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import './styles.scss'
import Agent from '../Fault/Agent/Agent.js'
import { useSelector } from 'react-redux'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
          color: theme.palette.text.secondary
}))
const Fault = () => {
  const classes = useStyles()
  const activeAgent = useSelector(state => state.agents.activefaultagent)

  return (
    <div className={classes.agentDetail + ' deployed scrollBarHide'}>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Item>
            <Agent />
          </Item>
        </Grid>
        <Grid item xs={8}>
          <div>
          {activeAgent !== null && activeAgent !== '' ?
            <div
              className={classes.sectionTop + ' deployedDetail scrollBarHide'}
            >
              <h3>Fault JSON:</h3>

              <p>
                <pre className={classes.pre}>
                  {JSON.stringify(activeAgent, null, 2)}
                </pre>
              </p>
            </div>
            : <div className={classes.nocontent}> no records... </div>}
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
export default Fault
