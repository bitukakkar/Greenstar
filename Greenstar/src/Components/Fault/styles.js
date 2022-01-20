import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  maincontainer: {
    padding: '18px 40px',
    boxSizing: 'border-box',
    margin: '0px auto',
    marginBottom: 2,
    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)'
  },
  AgentSection: {
    height: 'calc(100vh - 230px)'
  },
  agentDetail: {
    height: 'calc(100vh - 137px)',
    '& label': {
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '20px',
      color: '#898989'
    },
    '& p': {
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '20px',
      color: '#000000'
    }
  },
  maincontainer: {
    padding: '6px 40px',
    boxSizing: 'border-box',
    margin: '0px auto'
  },
  pre: {
    textAlign: 'left',
    padding: '10px',
    width: '100%',
    fontSize: '18px',
    lineHeight: '30px'
    // overflowY: 'scroll'
  },
  loader: {
    paddingBottom: '28px'
  },
  containerInner: {
    border: '1px solid #009C19',
    borderRadius: '10px',
    padding: '32px 32px 0'
  },
  sectionTop: {
    height: 'calc(100% - 144px)',
    overflow: 'auto',
    paddingBottom: '24px',
    padding: '6px 40px',
    boxSizing: 'border-box',
    margin: '0px auto'
  },

  block: {
    background: '#FFFFFF',
    boxSizing: 'border-box',
    padding: '24px 40px',

    '& h4': {
      fontWeight: '600',
      fontSize: '16px',
      lineHeight: '20px',
      color: '#000000',
      textAlign: 'left',
      marginBottom: '8px',
      margin: 0
    },

    '& ul': {
      margin: '0',
      '& li ': {
        textAlign: 'left'
      },
      '& li:last-child': {
        marginBottom: '0'
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
    marginRight: '24px'
  },
  textBottom: {
    textAlign: 'left'
  },
  dFlex: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  nocontent: {
    padding: '20px',
    textAlign: 'center'
  },
  justifyContentbetween: {
    justifyContent: 'space-between'
  },
  justifyContentCenter: {
    justifyContent: 'center'
  },
  alignItemCenter: {
    alignItems: 'center'
  },
  flex20: {
    flex: '0 0 20%'
  },
  flex1: {
    flex: '1 1 auto'
  },
  mb16: {
    marginBottom: 16
  },
  flex100: {
    flex: ' 0 0 100%'
  },
  mb8: {
    marginBottom: '8px'
  },
  flex50: {
    flex: '0 0 50%'
  },
  borderBtm: {
    borderBottom: '1px solid #D9D9D9'
  },
  paddingBottom: {
    paddingBottom: 0
  },
  pdt0: {
    paddingTop: 0
  },
  CheckIcon: {
    marginBottom: '24px',
    background: 'linear-gradient(46.14deg, #1c8a2d 0.01%, #26bd3f 102.08%)',
    boxShadow: '0px 8px 24px rgba(0, 138, 23, 0.15)',
    borderRadius: '10px',
    padding: 30,
    margin: 'auto',
    display: 'inline-block',
    maxWidth: '160px',
    maxHeight: '160px',
    '& img': {
      maxWidth: '100px'
    }
  },
  Deployed: {
    textAlign: 'center',
    '& h3': {
      fontWeight: 600,
      fontSize: '20px',
      lineHeight: '25px',
      color: '#000000'
    },
    '& p': {
      marginBottom: '4px',
      fontWeight: '600'
    },
    '& label': {
      fontWeight: '600'
    }
  }
}))
