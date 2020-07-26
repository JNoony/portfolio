import React from 'react';
import M from "materialize-css";

export default function Location (props){
    return(
        <section className={`section section-location scrollspy ${props.class}`} id="location">
            <div className=" container ">
                <h2 className="section-title font-transform">Location</h2>
                <div className="section-con">
                    <div className="section-con-map">
                        <img src={props.imgSrc} alt={props.imgAlt} />
                    </div>
                    <div className="section-con-address row">
                        {props.data.map((con,i)=>{
                            return(<>
                                <p className="col s2 add-title b">{con.title}</p>
                                <p className="col s10 ">{con.text}</p>
                            </>)
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
