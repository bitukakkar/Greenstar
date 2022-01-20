import APIConfig from './config'
import { get, post } from './helpers'

/**
 * get Dialogues
 *
 * @param params
 * @returns {Promise<null|*>}
 */
// export const getDialogues = async payload => {
//   return await get(`${APIConfig.BASE_URL}/dialogues/` + payload.dialogueid)
//     .then(response => response)
//     .catch(error => error)
// }
export const getDialogues = async payload => {
  return await get(`${APIConfig.BASE_URL}/dialogues`)
    .then(response => response)
    .catch(error => error)
}

/**
 * Trigger Fault agents
 *
 * @param params
 * @returns {Promise<null|*>}
 */
export const triggerFaultAgent = async payload => {
  return await post(`${APIConfig.AGENT_BASE_URL}/trigger_fault`, payload)
    .then(response => response)
    .catch(error => error)
}

/**
 * Get Deployed Agents
 *
 * @param params
 * @returns {Promise<null|*>}
 */
export const getDeployedAgents = async payload => {
  return await get(`${APIConfig.BASE_URL}/agent_profiles`)
    .then(response => response)
    .catch(error => error)
}

/**
 * Deploy Agent
 *
 * @param params
 * @returns {Promise<null|*>}
 */
export const createAgent = async payload => {
  return await post(`${APIConfig.BASE_URL}/create_agent`, payload)
    .then(response => response)
    .catch(error => error)
}

/**
 * Get Faults
 *
 * @param params
 * @returns {Promise<null|*>}
 */
 export const getFaults = async payload => {
  return await get(`${APIConfig.BASE_URL}/faults`)
    .then(response => response)
    .catch(error => error)
}

/**
 * Stop Deploy Agent
 *
 * @param params
 * @returns {Promise<null|*>}
 */
 export const stopDeployedAgent = async payload => {
  return await post(`${APIConfig.BASE_URL}/stop_agent`, payload)
    .then(response => response)
    .catch(error => error)
}