import React from 'react';

export default function CardListImg(props){
    return(
        <div className={props.class}>
        {props.data.map((con,i)=>{
            return(<div className={`awrad-con-box ${con.class}`}>
                        <p className="box-title-img "><span>{con.awardName}</span></p>
                        <div className="award-box">
                            <p className="award-day">{con.day}</p>
                            <p className="award-logo"><img src={con.src} alt={con.name}/></p>
                            <p className="award-name">{con.name}</p>
                        </div>
                    </div>)
        })}
        </div>
    )
}