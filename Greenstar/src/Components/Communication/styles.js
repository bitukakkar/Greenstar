import { makeStyles } from '@material-ui/core/styles'
import border from '../../Assets/images/Line.png'
import profileimg1 from '../../Assets/images/customerAgentProfile.png'
import profileimg2 from '../../Assets/images/profile-image2.png'
import profileimg3 from '../../Assets/images/profile-image3.png'

export const useStyles = makeStyles(theme => ({
  box: {},
  msg_contianer: {
    maxWidth: '100%',

    padding: '28px 35px',
    background: '#FFFFFF',
    boxSizing: 'border-box'
  },
  loader: {
    paddingBottom: '28px'
  },
  containerInner: {
    border: 'none',
    borderRadius: '10px',
    padding: '32px 32px 0'
  },

  dropdown: {},
  mb48: { marginBottom: '48px' },
  block: {
    display: 'flex',
    width: '100%',
    paddingBottom: '32px',
    '& ul': {
      margin: '0',
      width: '417px',
      boxSizing: 'border-box',
      '& li': {
        marginBottom: '8px',
        display: 'flex',
        justifyContent: 'space-between',

        '&:last-child': {
          marginBottom: '0'
        }
      },
      '& label': {
        fontSize: '20px',
        lineHeight: '25px',
        flex: '0 0 40%',
        paddingRight: 5
      },
      '& span': {
        fontSize: '20px',
        lineHeight: '25px',
        fontWeight: 600,
        flex: '1',
        textAlign: 'right'
      }
    }
  },
  leftBlock: {
    justifyContent: 'flex-start'
  },
  rightBlock: {
    justifyContent: 'flex-end'
  },
  right: {
    justifyContent: 'end',
    flexDirection: 'row-reverse'
  },
  left: {
    justifyContent: 'flex-start'
  },

  wd60: {
    width: '60%'
  },
  profile: {
    width: 48,
    height: 48,
    borderRadius: '100px',
    boxSizing: 'border-box',
    filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.05))',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#eeeeee',
    backgroundImage: `url(${profileimg1})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    flex: '0 0 48px',
    '& img': {
      maxWidth: '100%'
    }
  },
  profile1: {
    width: 48,
    height: 48,
    borderRadius: '100px',
    boxSizing: 'border-box',
    filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.05))',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#eeeeee',
    backgroundImage: `url(${profileimg2})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    flex: '0 0 48px',
    '& img': {
      maxWidth: '100%'
    }
  },
  profile2: {
    width: 48,
    height: 48,
    borderRadius: '100px',
    boxSizing: 'border-box',
    filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.05))',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#eeeeee',
    backgroundImage: `url(${profileimg3})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    flex: '0 0 48px',
    '& img': {
      maxWidth: '100%'
    }
  },
  ml16: {
    marginLeft: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  mr16: {
    marginRight: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'end',
    alignItems: 'end'
  },
  headSec: {
    marginBottom: '8px',
    '& label': {
      fontFamily: 'Gilroy',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: '16px',
      lineHeight: '20px'
    },
    '& span': {
      fontFamily: 'Gilroy',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: '16px',
      lineHeight: '20px',
      color: '#898989',
      marginLeft: '24px'
    }
  },
  borderedSec: {
    background: '#FFFFFF',
    border: '1px solid #008015',
    borderRadius: '0px 10px 10px 10px',
    padding: '24px',
    '& p': {
      fontFamily: 'Gilroy',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '16px',
      lineHeight: '20px',
      fontWeight: '400'
    }
  },
  borderedSec: {
    background: '#FFFFFF',
    border: '1px solid #008015',
    borderRadius: '0px 10px 10px 10px',

    '& p': {
      fontFamily: 'Gilroy',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '16px',
      lineHeight: '20px',
      fontWeight: '400',
      wordWrap: 'anywhere'
    },
    '& negtext': {
      fontWeight: 'bold',
      textTransform: 'capitalize'
    }
  },
  pd24: {
    padding: 24
  },
  border: {
    borderBottom: '1px solid #B6B6B6',
    margin: '16px 0',
    width: '100%',
    display: 'block'
  },

  dFlex: {
    display: 'flex'
  },
  blockBreakBorder: {
    margin: '32px 0px 64px',
    position: 'relative',
    background: `url(${border})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    width: '100%',
    height: ' 3px',
    backgroundRepeat: 'repeat'
  },
  BreakText: {
    color: '#008A17',
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '25px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: '#fff',
    padding: '0 10px',
    textAlign: 'center',
    whiteSpace: 'nowrap'
  },
  filledSec: {
    background: '#008A17',
    borderRadius: '10px 0px 10px 10px',
    '& p': {
      fontFamily: 'Gilroy',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '16px',
      lineHeight: '20px',
      fontWeight: '400',
      color: '#ffffff'
    },
    '& span': {
      color: '#ffffff'
    },
    '& label': {
      color: '#ffffff'
    },
    '& > hr': {
      border: '1px solid #B6B6B6',
      margin: '16px 0'
    }
  },
  common: {
    boxShadow: '0px 4px 8px rgba(0, 138, 23, 0.1)',

    boxSizing: 'border-box',
    marginBottom: 8,
    '&:last-child': {
      marginBottom: '0'
    }
  },
  quoted: {
    fontWeight: 600
  },
  confirmationHead: {
    background: 'rgba(0, 138, 23, 0.41)',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',
    padding: '24px',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    justifyContent: 'space-between',
    '& span': {
      fontWeight: '600',
      fontSize: '20px',
      lineHeight: '25px'
    },
    '& label': {
      fontWeight: '600',
      fontSize: '20px',
      lineHeight: '25px'
    }
  },
  confirmation: {
    borderRadius: 10
  }
}))
