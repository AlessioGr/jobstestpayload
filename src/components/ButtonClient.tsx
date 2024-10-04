'use client'
import { queueJob } from '@/actions/queueJob.js'
import React from 'react'

export const ButtonClient = () => {
  async function handleClick() {
    await queueJob()
    console.log('Job queued on client')
  }
  return <button onClick={handleClick}>Click me</button>
}
