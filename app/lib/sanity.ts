import { createClient } from 'next-sanity'

const projectId = '51s38emp'
const dataset = 'production'
const apiVersion = 'v2022-03-07'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true
})