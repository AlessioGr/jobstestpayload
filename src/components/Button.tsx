import { Payload } from 'payload'
import React from 'react'

export const Button = ({ payload }: { payload: Payload }) => {
  async function handleClick() {
    await payload.jobs.queue({
      task: 'createPost',
      input: {
        title: 'current date: ' + Date.now().toString(),
      },
    })
    console.log('Job queued')
  }
  return <button onClick={handleClick}>Click me</button>
}

export default Button
