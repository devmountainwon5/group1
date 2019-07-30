import React from 'react'
import './Tip.css'; 

export default function Tip(props) {
    return (
        <div>
            <div className='singleTips'>
                <a className='tip-name' href={props.tip.blog_link} target="_blank">
                <img className='tipPicture' src={props.tip.tip_picture} alt="tip picture"/>
                    <h2>
                        {props.tip.tip_name}
                    </h2>
                </a>
            </div>
        </div>
    )
}
