import React from 'react'
import LeftPanel from './LeftPanel'
import Posts from './Posts'
import RightPanel from './RightPanel'

const Feed = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-3 border'>
          <LeftPanel />
        </div>
        <div className='col-6'>
          <Posts />
        </div>
        <div className='col-3 border'>
          <RightPanel />
        </div>
      </div>
      
    </div>
  )
}

export default Feed