import React from 'react';
import style from './about.module.css';

export default function About() {
  return (
    <div className='text-center'>
        <h2 className="test">About Page</h2>
        <p>This is a test page.</p>
        <p className={style['custom-css']}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa magni accusamus minus nemo possimus, eveniet mollitia neque aspernatur delectus debitis. </p>
    </div>
  )
}
