import React, { useEffect, useState } from 'react'
import { useStyles } from './styles'
import clsx from 'clsx'
import handShakeWhite from '../../Assets/images/handShakeWhite.svg'
import handShakeActive from '../../Assets/images/handShakeActive.svg'
import './styles.css'
import { triggerFaultAgent, getDialogues } from '../../APIs/services'
import { CircularProgress } from '@material-ui/core'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useSelector } from 'react-redux'

const Communication = () => {
  const [dialgoues, setDialgoues] = useState([])
  const [loading, setLoading] = useState(false)
  const [agentregister, setAgentregister] = useState(false)
  const [options, setOptions] = useState([])
  const dialogueid = useSelector(state => state.agents.dialogueid)
  const [activedialoge, setActivedialoge] = React.useState('')

   let DialogArray = [
    {
        "message": "Requesting Service agent 0x8dCea732193acD1b41Ee7706B0807991c0669b6d for an offer.",
        "fault_code": "175",
        "fault_details": "175",
        "performative": "REQUEST_OFFER",
        "fault_agent": "0xA9D781E48aaF418F2b869088c2e5b90f543B72F9",
        "service_agent": "0x8dCea732193acD1b41Ee7706B0807991c0669b6d",
        "dialogue_id": "4a770e37a8093b482eaaccc75145e30be4fa58c7398227d17659b442ceaccae4",
        "component_agent": "",
        "sender": "FAULT AGENT",
        "receiver": "SERVICE AGENT",
        "uuid": "1bbd694d168d401cb77789c86b1ed6b7",
        "id": 1
    },
    {
      "message": "Requesting Service agent 0x8dCea732193acD1b41Ee7706B0807991c0669b6d second for an offer.",
      "fault_code": "175",
      "fault_details": "175",
      "performative": "REQUEST_OFFER",
      "fault_agent": "0xA9D781E48aaF418F2b869088c2e5b90f543B72F9",
      "service_agent": "0x8dCea732193acD1b41Ee7706B0807991c0669b6d",
      "dialogue_id": "4a770e37a8093b482eaaccc75145e30be4fa58c7398227d17659b442ceaccae4",
      "component_agent": "",
      "sender": "FAULT AGENT",
      "receiver": "SERVICE AGENT",
      "uuid": "1bbd694d168d401cb77789c86b1ed6b7",
      "id": 1
  },
    {
        "message": "Received fault repair component costing details.",
        "fault_code": "175",
        "fault_details": "175",
        "performative": "REQUESTING OFFER",
        "fault_agent": "0xA9D781E48aaF418F2b869088c2e5b90f543B72F9",
        "service_agent": "0x8dCea732193acD1b41Ee7706B0807991c0669b6d",
        "dialogue_id": "4a770e37a8093b482eaaccc75145e30be4fa58c7398227d17659b442ceaccae4",
        "component_agent": "",
        "sender": "SERVICE AGENT",
        "receiver": "COMPONENT AGENT",
        "uuid": "1bbd694d168d401cb77789c86b1ed6b7",
        "id": 2
    },
    {
        "message": "Sending fault repair component costing to service agent.",
        "fault_code": "0",
        "fault_details": "0",
        "performative": "REQUEST OFFER RECEIVED",
        "fault_agent": "",
        "service_agent": "0x8dCea732193acD1b41Ee7706B0807991c0669b6d",
        "dialogue_id": "3a3b5a16018cb9d9b2944394cb25d855025ebf491ee3465cabfb893604c4843a",
        "component_agent": "0x7de554FB3DBd0e000474035296f261Eb1eF7585f",
        "sender": "COMPONENT AGENT",
        "receiver": "SERVICE AGENT",
        "uuid": "1bbd694d168d401cb77789c86b1ed6b7",
        "id": 3
    },
    {
        "message": "Requesting service agent for negotiation. Negotiation Offer: {\"Negotiation Offer\": {\"actual_price\": 355.5, \"final_price\": 345.5, \"negotiation_amount\": \"10.0\"}}",
        "fault_code": "175",
        "fault_details": "175",
        "performative": "NEGOTIATION",
        "fault_agent": "0xA9D781E48aaF418F2b869088c2e5b90f543B72F9",
        "service_agent": "0x8dCea732193acD1b41Ee7706B0807991c0669b6d",
        "dialogue_id": "4a770e37a8093b482eaaccc75145e30be4fa58c7398227d17659b442ceaccae4",
        "component_agent": "",
        "sender": "FAULT AGENT",
        "receiver": "SERVICE AGENT",
        "uuid": "1bbd694d168d401cb77789c86b1ed6b7",
        "id": 4
    },
    {
        "message": "Counter Offer has been accepted. Asking for handshake.",
        "fault_code": "175",
        "fault_details": "175",
        "performative": "HANDSHAKE",
        "fault_agent": "0xA9D781E48aaF418F2b869088c2e5b90f543B72F9",
        "service_agent": "0x8dCea732193acD1b41Ee7706B0807991c0669b6d",
        "dialogue_id": "4a770e37a8093b482eaaccc75145e30be4fa58c7398227d17659b442ceaccae4",
        "component_agent": "",
        "sender": "SERVICE AGENT",
        "receiver": "FAULT AGENT",
        "uuid": "1bbd694d168d401cb77789c86b1ed6b7",
        "id": 5
    },
    {
        "message": "Accepting Handshake received from service agent. Handshake accept: {'Negotiation Offer': {'actual_price': 345.5, 'final_price': 335.5, 'negotiation_amount': '10.0'}}",
        "fault_code": "175",
        "fault_details": "175",
        "performative": "ACCEPT",
        "fault_agent": "0xA9D781E48aaF418F2b869088c2e5b90f543B72F9",
        "service_agent": "0x8dCea732193acD1b41Ee7706B0807991c0669b6d",
        "dialogue_id": "4a770e37a8093b482eaaccc75145e30be4fa58c7398227d17659b442ceaccae4",
        "component_agent": "",
        "sender": "FAULT AGENT",
        "receiver": "SERVICE AGENT",
        "uuid": "1bbd694d168d401cb77789c86b1ed6b7",
        "id": 6
    },
    {
        "message": "Accept received.",
        "fault_code": "175",
        "fault_details": "175",
        "performative": "SENDING FAULT REPAIR COMPONENT",
        "fault_agent": "0xA9D781E48aaF418F2b869088c2e5b90f543B72F9",
        "service_agent": "0x8dCea732193acD1b41Ee7706B0807991c0669b6d",
        "dialogue_id": "4a770e37a8093b482eaaccc75145e30be4fa58c7398227d17659b442ceaccae4",
        "component_agent": "",
        "sender": "SERVICE AGENT",
        "receiver": "COMPONENT AGENT",
        "uuid": "1bbd694d168d401cb77789c86b1ed6b7",
        "id": 7
    },
    {
        "message": "Release funds from contract, fault has been repaired",
        "fault_code": "175",
        "fault_details": "175",
        "performative": "FAULT_REPAIRED_AND_RELEASED_FUND",
        "fault_agent": "0xA9D781E48aaF418F2b869088c2e5b90f543B72F9",
        "service_agent": "0x8dCea732193acD1b41Ee7706B0807991c0669b6d",
        "dialogue_id": "4a770e37a8093b482eaaccc75145e30be4fa58c7398227d17659b442ceaccae4",
        "component_agent": "",
        "sender": "FAULT AGENT",
        "receiver": "SERVICE AGENT",
        "uuid": "1bbd694d168d401cb77789c86b1ed6b7",
        "id": 8
    },
    {
        "message": "Fault repaired and fund received.",
        "fault_code": "175",
        "fault_details": "175",
        "performative": "FAULT REPAIRED AND RELEASED FUND",
        "fault_agent": "0xA9D781E48aaF418F2b869088c2e5b90f543B72F9",
        "service_agent": "0x8dCea732193acD1b41Ee7706B0807991c0669b6d",
        "dialogue_id": "4a770e37a8093b482eaaccc75145e30be4fa58c7398227d17659b442ceaccae4",
        "component_agent": "",
        "sender": "SERVICE AGENT",
        "receiver": "COMPONENT AGENT",
        "uuid": "1bbd694d168d401cb77789c86b1ed6b7",
        "id": 9
    },
    {
        "message": "Requesting Service agent 0x8dCea732193acD1b41Ee7706B0807991c0669b6d for an offer.",
        "fault_code": "175",
        "fault_details": "175",
        "performative": "REQUEST_OFFER",
        "fault_agent": "0xe89A176f6020c3B41713a598bA32783431D130eb",
        "service_agent": "0x8dCea732193acD1b41Ee7706B0807991c0669b6d",
        "dialogue_id": "05b47f5643103b5dac955add64f3a66edbdfb91c880cfb8f478ee91bd07f30d6",
        "component_agent": "",
        "sender": "FAULT AGENT",
        "receiver": "SERVICE AGENT",
        "uuid": "127790470e9b4bce94300e700357e48d",
        "id": 10
    },
    {
        "message": "Received fault repair component costing details.",
        "fault_code": "175",
        "fault_details": "175",
        "performative": "REQUESTING OFFER",
        "fault_agent": "0xe89A176f6020c3B41713a598bA32783431D130eb",
        "service_agent": "0x8dCea732193acD1b41Ee7706B0807991c0669b6d",
        "dialogue_id": "05b47f5643103b5dac955add64f3a66edbdfb91c880cfb8f478ee91bd07f30d6",
        "component_agent": "",
        "sender": "SERVICE AGENT",
        "receiver": "COMPONENT AGENT",
        "uuid": "127790470e9b4bce94300e700357e48d",
        "id": 11
    },
    {
        "message": "Sending fault repair component costing to service agent.",
        "fault_code": "0",
        "fault_details": "0",
        "performative": "REQUEST OFFER RECEIVED",
        "fault_agent": "",
        "service_agent": "0x8dCea732193acD1b41Ee7706B0807991c0669b6d",
        "dialogue_id": "7a70a6eac393c6cf77640371017410d74fbba2262dc20a5832c99f919a8d75ea",
        "component_agent": "0x7de554FB3DBd0e000474035296f261Eb1eF7585f",
        "sender": "COMPONENT AGENT",
        "receiver": "SERVICE AGENT",
        "uuid": "127790470e9b4bce94300e700357e48d",
        "id": 12
    },
    {
        "message": "Requesting service agent for negotiation. Negotiation Offer: {\"Negotiation Offer\": {\"actual_price\": 355.5, \"final_price\": 345.5, \"negotiation_amount\": \"10.0\"}}",
        "fault_code": "175",
        "fault_details": "175",
        "performative": "NEGOTIATION",
        "fault_agent": "0xe89A176f6020c3B41713a598bA32783431D130eb",
        "service_agent": "0x8dCea732193acD1b41Ee7706B0807991c0669b6d",
        "dialogue_id": "05b47f5643103b5dac955add64f3a66edbdfb91c880cfb8f478ee91bd07f30d6",
        "component_agent": "",
        "sender": "FAULT AGENT",
        "receiver": "SERVICE AGENT",
        "uuid": "127790470e9b4bce94300e700357e48d",
        "id": 13
    },
    {
        "message": "Counter Offer has been accepted. Asking for handshake.",
        "fault_code": "175",
        "fault_details": "175",
        "performative": "HANDSHAKE",
        "fault_agent": "0xe89A176f6020c3B41713a598bA32783431D130eb",
        "service_agent": "0x8dCea732193acD1b41Ee7706B0807991c0669b6d",
        "dialogue_id": "05b47f5643103b5dac955add64f3a66edbdfb91c880cfb8f478ee91bd07f30d6",
        "component_agent": "",
        "sender": "SERVICE AGENT",
        "receiver": "FAULT AGENT",
        "uuid": "127790470e9b4bce94300e700357e48d",
        "id": 14
    },
    {
        "message": "Accepting Handshake received from service agent. Handshake accept: {'Negotiation Offer': {'actual_price': 345.5, 'final_price': 335.5, 'negotiation_amount': '10.0'}}",
        "fault_code": "175",
        "fault_details": "175",
        "performative": "ACCEPT",
        "fault_agent": "0xe89A176f6020c3B41713a598bA32783431D130eb",
        "service_agent": "0x8dCea732193acD1b41Ee7706B0807991c0669b6d",
        "dialogue_id": "05b47f5643103b5dac955add64f3a66edbdfb91c880cfb8f478ee91bd07f30d6",
        "component_agent": "",
        "sender": "FAULT AGENT",
        "receiver": "SERVICE AGENT",
        "uuid": "127790470e9b4bce94300e700357e48d",
        "id": 15
    },
    {
        "message": "Accept received.",
        "fault_code": "175",
        "fault_details": "175",
        "performative": "SENDING FAULT REPAIR COMPONENT",
        "fault_agent": "0xe89A176f6020c3B41713a598bA32783431D130eb",
        "service_agent": "0x8dCea732193acD1b41Ee7706B0807991c0669b6d",
        "dialogue_id": "05b47f5643103b5dac955add64f3a66edbdfb91c880cfb8f478ee91bd07f30d6",
        "component_agent": "",
        "sender": "SERVICE AGENT",
        "receiver": "COMPONENT AGENT",
        "uuid": "127790470e9b4bce94300e700357e48d",
        "id": 16
    },
    {
        "message": "Release funds from contract, fault has been repaired",
        "fault_code": "175",
        "fault_details": "175",
        "performative": "FAULT_REPAIRED_AND_RELEASED_FUND",
        "fault_agent": "0xe89A176f6020c3B41713a598bA32783431D130eb",
        "service_agent": "0x8dCea732193acD1b41Ee7706B0807991c0669b6d",
        "dialogue_id": "05b47f5643103b5dac955add64f3a66edbdfb91c880cfb8f478ee91bd07f30d6",
        "component_agent": "",
        "sender": "FAULT AGENT",
        "receiver": "SERVICE AGENT",
        "uuid": "127790470e9b4bce94300e700357e48d",
        "id": 17
    },
    {
        "message": "Fault repaired and fund received.",
        "fault_code": "175",
        "fault_details": "175",
        "performative": "FAULT REPAIRED AND RELEASED FUND",
        "fault_agent": "0xe89A176f6020c3B41713a598bA32783431D130eb",
        "service_agent": "0x8dCea732193acD1b41Ee7706B0807991c0669b6d",
        "dialogue_id": "05b47f5643103b5dac955add64f3a66edbdfb91c880cfb8f478ee91bd07f30d6",
        "component_agent": "",
        "sender": "SERVICE AGENT",
        "receiver": "COMPONENT AGENT",
        "uuid": "127790470e9b4bce94300e700357e48d",
        "id": 18
    }
];

  const handleChange = event => {
     setActivedialoge(event.target.value)
    // const filterdialgoue = DialogArray.filter(
    //                 item => item.uuid === activedialoge
    //               )
    //               setDialgoues(filterdialgoue)
    setLoading(true)
    let payload = {
      skip: 0,
      limit: 100
    }
    getDialogues(payload)
      .then(res => {
        if (res && res.length > 0 && res != undefined) {
          if (event.target.value !== 'All') {
            const filterdialgoue = res.filter(
              item => item.uuid === event.target.value
            )
            setDialgoues(filterdialgoue)
          } else {
            setDialgoues(res)
          }
          setLoading(false)
        } else {
          setLoading(false)
        }
      })
      .catch(error => {
        console.log('error', error)
        setLoading(false)
      })
  }
  useEffect(() => {
    
    // setDialgoues(DialogArray)
    // let dialogOption = DialogArray.map(function (data) {
    //               // get options from select
    //               return data.uuid
    //             })
    //             getUnique(dialogOption)
    setLoading(true)
    let payload = {
      dialogueid: dialogueid,
      skip: 0,
      limit: 100
    }
    getDialogues(payload)
      .then(res => {
        if (res && res.length > 0 && res != undefined) {
          setDialgoues(res)
          setLoading(false)
        } else {
          setLoading(false)
        }
      })
      .catch(error => {
        console.log('error', error)
        setLoading(false)
      })
   
  }, [])

  const getUniqueListBy = (arr, key) => {
    return [...new Map(arr.map(item => [item[key], item])).values()]
  }

  const getUnique = arr => {
    let uniqueArr = [...new Set(arr)]
    setOptions(uniqueArr)
  }

  useEffect(async () => {
    const interval = setInterval(() => {
      let payload = {
        dialogueid: dialogueid,
        skip: 0,
        limit: 100
      }
      getDialogues(payload)
        .then(res => {
          if (res && res.length > 0 && res != undefined) {
            let dialogOption = res.map(function (data) {
              // get options from select
              return data.uuid
            })
            getUnique(dialogOption)
            if (activedialoge !== "" && activedialoge !== 'All') {
              const filterdialgoue = res.filter(
                item => item.uuid === activedialoge
              )
              setDialgoues(filterdialgoue)
            } else {
              setDialgoues(res)
            }
           // setDialgoues(res)
            let total_dialog = 0
            if (res.length > 0) {
              total_dialog = res.length - 1
            }
            if (
              res[total_dialog].performative ==
              'FAULT REPAIRED AND RELEASED FUND'
            ) {
              clearInterval(interval)
            }
          } else {
            clearInterval(interval)
          }
        })
        .catch(error => {
          console.log('error', error)
        })
    }, 2000)
    return () => clearInterval(interval)
  }, [])
  const classes = useStyles()

  const messageObject = (type, message) => {
    if (type === 'NEGOTIATION' || type === 'ACCEPT') {
      let splitdata = message.split('.')
      return splitdata[0]
    } else {
      return message
    }
  }

  const offerDetail = (type, message) => {
    if (type === 'NEGOTIATION') {
       let splitdata_1 = message.split('{"Negotiation Offer": {')
       return splitdata_1[1].split(',')
    }
    if (type === 'ACCEPT') {
      let splitdata_1 = message.split("{'Negotiation Offer': {")
       return splitdata_1[1].split(',')
    }
  }

  const removeSpecailChar = string => {
    let newstring = string.replace(/["']/g, '')
    let newstring1 = newstring.replace(/["}}]/g, '')
    return newstring1
  }

  function groupByKey(array, key) {
    return array
      .reduce((hash, obj) => {
        if(obj[key] === undefined) return hash; 
        return Object.assign(hash, { [obj[key]]:( hash[obj[key]] || [] ).concat(obj)})
      }, {})
 }
  let UUIDArray= [];
 const showDialgoueHeading = (performative,uuid) => {
   if(performative === 'REQUEST_OFFER')
   {
     if(UUIDArray.indexOf(uuid) === -1)
     {
      UUIDArray.push(uuid);
      return true
     }
     else
     {
       return false
     }
   }
 }
  return (
    <div className={classes.box + ' maincontainer'}>
      <div className={classes.msg_contianer}>
        {options.length > 0 && (
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>
              UUID Filter
            </InputLabel>
            <Select
              labelId='demo-simple-select-label'
              className={clsx(classes.mb48, classes.dropdown)}
              id='combo-box-demo'
              value={activedialoge}
              label='Dialogue_ID Filter'
              onChange={handleChange}
            >
              <MenuItem value={'All'}>{'Show All'}</MenuItem>
              {options.length > 0 &&
                options.map(function (item, i) {
                  return (
                    <MenuItem value={item} key={i}>
                      {item}
                    </MenuItem>
                  )
                })}
            </Select>
          </FormControl>
        )}
        
        <div className={classes.containerInner}>
          {dialgoues.length > 0 ? (
            dialgoues.map((data, index) => (
              <div key={index}>
                {showDialgoueHeading(data.performative,data.uuid) &&  (
                  <div className={classes.blockBreakBorder}>
                    <span className={classes.BreakText}>Dialogue Selected </span>
                  </div>
                )}
                {data.performative === 'REQUESTING OFFER' && (
                  <div className={classes.blockBreakBorder}>
                    <span className={classes.BreakText}>
                      Service Provider Allocated
                    </span>
                  </div>
                )}
                 {data.performative === 'FAULT REPAIRED AND RELEASED FUND' && (
                  <div className={classes.blockBreakBorder}>
                    <span className={classes.BreakText}>
                      Fault Repaired and Fund Released
                    </span>
                  </div>
                )}
                <section
                  className={
                    data.sender === 'FAULT AGENT'
                      ? clsx(classes.block, classes.leftBlock)
                      : clsx(classes.block, classes.rightBlock)
                  }
                  key={index}
                >
                  
                  {data.sender === 'FAULT AGENT' && (
                    <div
                      className={clsx(
                        classes.left,
                        classes.wd60,
                        classes.dFlex
                      )}
                    >
                      <div className={classes.profile}></div>
                      <div className={classes.ml16}>
                        <div className={clsx(classes.headSec, classes.dFlex)}>
                          <label>{data.sender}</label>
                          <span>01/10/21 at 17:00 PM</span>
                        </div>

                        <div
                          className={clsx(
                            classes.borderedSec,
                            classes.common,
                            classes.pd24
                          )}
                        >
                          <p className={classes.text}>
                            {messageObject(data.performative, data.message)}
                          </p>
                        </div>
                        {data.performative === 'NEGOTIATION' && (
                          <div
                            className={clsx(
                              classes.borderedSec,
                              classes.common,
                              classes.pd24
                            )}
                          >
                            {offerDetail(data.performative, data.message)
                              .length > 0 &&
                              offerDetail(data.performative, data.message).map(
                                (item, key) => {
                                  return (
                                    <p key={key} className={'negtext'}>
                                      {removeSpecailChar(item)}
                                    </p>
                                  )
                                }
                              )}
                          </div>
                        )}
                        {data.performative === 'ACCEPT' && (
                          <div
                            className={clsx(
                              classes.borderedSec,
                              classes.common,
                              classes.pd24
                            )}
                          >
                            {offerDetail(data.performative, data.message)
                              .length > 0 &&
                              offerDetail(data.performative, data.message).map(
                                (item, key) => {
                                  return (
                                    <p key={key} className={'negtext'}>
                                      {removeSpecailChar(item)}
                                    </p>
                                  )
                                }
                              )}
                          </div>
                        )}
                        {data.performative === 'ACCEPT' && (
                          <div
                            className={clsx(
                              classes.borderedSec,
                              classes.common,
                              classes.pd24
                            )}
                          >
                            <img src={handShakeActive} />
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {data.sender != 'FAULT AGENT' && (
                    <div
                      className={clsx(
                        classes.right,
                        classes.wd50,
                        classes.dFlex
                      )}
                    >
                      <div
                        className={
                          data.sender === 'SERVICE AGENT'
                            ? classes.profile1
                            : classes.profile2
                        }
                      >
                        <img src='' />
                      </div>
                      <div className={classes.mr16}>
                        <div className={clsx(classes.headSec, classes.dFlex)}>
                          <label>{data.sender}</label>
                          <span>01/10/21 at 17:02 PM</span>
                        </div>
                        <div
                          className={clsx(
                            classes.filledSec,
                            classes.common,
                            classes.pd24
                          )}
                        >
                          <p className={classes.text}>
                            {messageObject(data.performative, data.message)}
                          </p>
                        </div>
                        {data.performative === 'HANDSHAKE' && (
                          <div
                            className={clsx(
                              classes.filledSec,
                              classes.common,
                              classes.pd24
                            )}
                          >
                            <img src={handShakeWhite} />
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </section>
                {data.performative === 'ACCEPT' && (
                  <div className={classes.blockBreakBorder}>
                    <span className={classes.BreakText}>
                      Handshake Complete{' '}
                    </span>
                  </div>
                )}
               
                {data.performative === 'FAULT REPAIRED AND RELEASED FUND' && (
                  <div className={classes.blockBreakBorder}>
                    <span className={classes.BreakText}>
                      Contract Payment Complete
                    </span>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div>
              {loading ? (
                <div className={classes.loader}>
                  <CircularProgress
                    data-testid='circular-progress'
                    className={classes.circularProgress}
                    size={20}
                  />
                  Loading dialogues...please wait
                </div>
              ) : (
                <div className={classes.loader}> No Dialogues...</div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Communication
