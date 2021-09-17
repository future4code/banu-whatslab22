import { DonutLarge } from '@material-ui/icons';
import {Chat} from '@material-ui/icons'
import { MoreVert } from '@material-ui/icons';
import { Search } from '@material-ui/icons';
import React, {useState,useEffect} from 'react';
import './App.css';
import ChatListItem from './componets/ChatListItem';
import ChatIntro from './componets/ChatIntro';
import ChatWindow from './componets/ChatWindow';


export default ()=> {
  const [chatlist, setchatlist]= useState([
    {chatId:1, title: 'Rihanna', img: 'https://pbs.twimg.com/profile_images/1437958381202026500/Bj1m7sax_400x400.png'},
    {chatId:2, title: 'Beyonce', img: 'https://ogimg.infoglobo.com.br/in/25149803-9ab-ac0/FT1086A/beyonce-2.jpg'},
    {chatId:3, title: 'Fulano Legal', img: 'https://avatarfiles.alphacoders.com/257/thumb-257791.jpg'},
    {chatId:4, title: 'Fulano Legal', img: 'https://avatarfiles.alphacoders.com/257/thumb-257791.jpg'}

  ]);
  const [activeChat, setActiveChat]= useState ({});


  return(
    <div className= 'app-window'> 
    <div className = 'sidebar'>
      <header>
        <img className="header-avatar"  src="https://avatarfiles.alphacoders.com/257/thumb-257791.jpg" alt="" />
        <div className ="header-buttons">
          <div className="header-btn">
            <DonutLarge />
          </div>
          <div className="header-btn">
            <Chat/>
          </div>
          <div className="header-btn">
            <MoreVert/>
          </div>
          

        </div>
      </header>
      <div className = "search">
        <div className="search-input">
          <Search/>
          <input type="search"placeholder="Procurar ou começar uma nova conversa"/>

        </div>

      </div>
      <div className = "chatlist">

        {chatlist.map((item, key)=>(
          <ChatListItem
                key={key} 
                data= {item}
                active={activeChat.chatId === chatlist[key].chatId}
                onClick={()=>setActiveChat(chatlist[key])}/>
                

        ))}

      

      </div>

    </div>
    <div className= 'contentarea'>
      {activeChat.chatId !== undefined && 
      <ChatWindow/>}
      {activeChat.chatId === undefined &&
      <ChatIntro/>
      }

    </div>
    
    </div>
  )
}



























