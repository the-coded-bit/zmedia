import React from 'react'
import { data } from '../utils/constants';
import Card from './Card';
import './components.css';

function Charts() {
  return (
    <section className='charts-container'>
        <article className='analytics'>
            {
                data.map(({heading, price, percentage, bgcolor}) =>(
                    <Card heading={heading} price={price} percentage = {percentage} bgcolor={bgcolor}/>
                ))
            }
        </article>
        <div>another charts</div>
    </section>
  )
}

export default Charts