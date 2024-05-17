import React from 'react'
import coverImg from '../../assets/cover.png';
import logo from '../../assets/logo.png';
import postImg1 from '../../assets/post1.jpeg';
import postImg2 from '../../assets/post2.jpeg';

const LeftPanel = () => {
  return (
    <div className='container'>
      <div className='mt-5'>
        <img src={coverImg} className='img-fluid cover-img' />
        <div className='lp-logo d-flex justify-content-center bg-white'>
          <img src={logo}  className='img-fluid' />
        </div>
      </div>
      <div className='text-center lp-profile'>
        <h4>SRM UNIVERSITY</h4>
        <p>Freelance UX/UI designer, 80+ projects  in web design, mobile apps (iOS & android) and creative projects. Open to offers.</p>
      </div>
      <div className='lp-hashtag mt-3'>
        <h6 className='my-4'>FOLLOWED HASHTAG</h6>
        <div className='d-flex justify-content-start flex-wrap'>
          <div className=' rounded p-2 me-2 mb-2'bg-warning>
            #research
          </div>
          <div className='bg-warning rounded p-2 me-2 mb-2'>
            #research_forum
          </div>
          <div className='bg-warning rounded p-2 me-2 mb-2'>
            #hr
          </div>
          <div className='bg-warning rounded p-2 me-2 mb-2'>
            #userinterface
          </div>
          <div className='bg-warning rounded p-2 me-2 mb-2'>
            #digital
          </div>
          <div className='bg-warning rounded p-2 me-2 mb-2'>
            #userexperience
          </div>
        </div>
      </div>
      <div className='lp-posts mt-3'>
        <h6 className='my-4'>MY POSTS</h6>
        <div className='row mb-4'>
          <div className='col-4'>
            <img src={postImg1} className='img-fluid' />
          </div>
          <div className='col-8'>
            <b className='mt-1'>How I make cool designs?</b>
            <p className='mt-1'>Description...</p>
          </div>
        </div>
        <div className='row mb-4'>
          <div className='col-4'>
            <img src={postImg2} className='img-fluid' />
          </div>
          <div className='col-8'>
            <b className='mt-1'>Advices for young HR-manager</b>
            <p className='mt-1'>Description...</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftPanel