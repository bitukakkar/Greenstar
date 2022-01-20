import { of } from 'await-of'

import APIClient from './APIClient'

export const get = async url => {
  const [res, error] = await of(APIClient.get(url))
  if (error || !res.data) {
    return null
  }
  return res.data
}

export const post = async (url, params, header = postHeader.urlEncode) => {
  const [res, error] = await of(
    APIClient.post(url, params, {
      headers: {
        'Content-Type': header
      }
    })
  )
  if (error || !res.data) {
    return null
  }
  console.log('res', res)
  return res
}

export const postHeader = {
  urlEncode: 'application/x-www-form-urlencoded',
  json: 'application/json'
}
