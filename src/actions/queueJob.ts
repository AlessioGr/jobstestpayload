'use server'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '../payload.config.js'

export const queueJob = async () => {
  'use server'

  const payload = await getPayloadHMR({ config })

  console.log('queuing...')

  await payload.jobs.queue({
    task: 'createPost',
    input: {
      title: 'current date: ' + Date.now().toString(),
    },
  })
  console.log('Job queued')
}
