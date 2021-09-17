import React from 'react';
import './ChatListItem.css';



export default ({onClick, active, data}) =>{
    return (
        <div 
        className={ "chatListItem {active?'active':''}"} 
        onClick ={onClick}>
            <img className="chatList-Avatar" src={data.img} alt=""/>
             <div className="chatListItem-lines">
                 <div className="chatListItem-line">
                     <div className="chatListItem-name">{data.title}</div>
                     <div className="chatListItem-date">19:00</div>

                 </div>
                 <div className="chatListItem-line">
                     <div className="chatListItem-lastMsg">
                     <p>Oi,tudo bem??A Dudu sim
                      Eu não muito, claro vamos sim, quando você quiser miga, bjs</p>
                     </div>
                     
                     
                 </div>
             </div>
        </div>
    )
}