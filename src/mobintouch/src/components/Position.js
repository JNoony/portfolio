import React, { Component } from 'react';

class Position extends Component{
    constructor(props){
        super(props);
        this.state={
            ClientBanner:[
                { src:'#!', img:'./images/client/banner-09.png' },
                { src:'#!', img:'./images/client/banner-10.png' },
                { src:'#!', img:'./images/client/banner-11.png' },
                { src:'#!', img:'./images/client/banner-12.png' },
                { src:'#!', img:'./images/client/banner-14.png' },
                { src:'#!', img:'./images/client/banner-02.png' },
                { src:'#!', img:'./images/client/banner-03.png' },
                { src:'#!', img:'./images/client/banner-04.png' },
                { src:'#!', img:'./images/client/banner-13.png' },
                { src:'#!', img:'./images/client/banner-06.png' },
                { src:'#!', img:'./images/client/banner-07.png' },
                { src:'#!', img:'./images/client/banner-08.png' },
            ]
        }
    }

    render(){
        return(
            <div className="section section-client">
                <div className="wid center-align">
                    <h2 className="content-title pc">모비인터치는 다양한 기업의 마케터 채용을 지원하고 있습니다.</h2>
                    <h2 className="content-title mobile">모비인터치는 다양한 기업의 마케터 채용을<br/>지원하고 있습니다.</h2>
                    <div className="flexBox">
                    {this.state.ClientBanner.map( (con, i) => {
                        return( <FlexBox src={con.src}
                                         img={con.img}
                                         key={i}
                                         alt={`img${i}`} /> );
                    })}
                    </div>
                </div>
            </div>
        )
    }
}

const FlexBox = (props) => {
    return(
        <p className="flexBox-img">
            <a href={props.src}>
                <img src={props.img} alt={props.alt}/>
            </a>
        </p>
    )
  }

export default Position;
// ReactDOM.render( <Client />, document.querySelector('.') );