import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  maincontainer: {
    padding: '8px 40px',
    background: 'linear-gradient(89.49deg, #008A17 -0.12%, #007013 100%)',
    boxSizing: 'border-box',
    margin: '0px auto'
  },

  AgentSection: {
    background: '#FCFCFC',
    boxShadow: '2px 0px 8px rgba(0, 0, 0, 0.05)',
    overflow: 'auto',
    height: 'calc(100vh - 137px)',
    '& h2': {
      fontWeight: '600',
      fontSize: '20px',
      lineHeight: '24px',
      color: '#000000',
      borderBottom: '1px solid #D9D9D9;',
      padding: '16px 40px',
      textAlign: 'left',
      margin: 0
    },
    '& p': {
      fontWeight: '400'
    }
  },
  agentBody: {
    padding: '24px 40px'
  },
  block: {
    background: '#FFFFFF',
    border: '1px solid #878787',
    boxSizing: 'border-box',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.15)',
    borderRadius: '10px',
    padding: 16,
    cursor: 'pointer',
    marginBottom: 16,
    '& label': {
      fontWeight: 'normal',
      fontSize: '16px',
      lineHeight: '20px',
      color: '#898989'
    },
    '& p': {
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '20px',
      color: '#000000'
    },
    '& ul': {
      display: 'flex',
      borderBottom: '1px solid #D9D9D9',
      paddingBottom: 16,
      '& li ': {
        textAlign: 'left'
      }
    }
  },
  active: {
    background: ' #B7D3BC',
    border: '2px solid #008A17',
    '& ul': {
      borderColor: '#008A17',
      '& li': {
        borderColor: '#008A17'
      }
    }
  },
  agentName: {
    borderRight: 'solid 1px #D9D9D9',
    paddingRight: '24px',
    marginRight: '24px',
    '& p': {
      fontWeight: '600',
      fontSize: '20px'
    }
  },
  textBottom: {
    textAlign: 'left'
  }
}))
