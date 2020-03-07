import React from 'react';
import CourseList from './CourseList'

import { CountDown } from './CountDown'

export default () => {
  return (
    <>
      <CourseList />
      <CountDown endTime='2020-03-07 17:00:00'/>
    </>
  )
}