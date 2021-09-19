import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import './ChatWindow.css';
import { Search } from '@material-ui/icons';
import { AttachFile } from '@material-ui/icons';
import { MoreVert } from '@material-ui/icons';
import { EmojiEmotions } from '@material-ui/icons';
import { listenerCount } from 'process';
import MessageItem from './MessageItem';
 

export default ({user}) =>{

    const [emojiOpen, setEmojiOpen] = useState (false);
    const [text, setText] = useState ('');
    const [list, setList] = useState ([
        {body:'bla bla bla'}, 
        {body: 'bla, bla'},
        {body: 'bla bla bla'},
    ]);

    const handleEmojiClick = (e, emojiObject) => {
        setText( text + emojiObject.emoji);
    }

    const handleOpenEmoji = () => {
        setEmojiOpen(true);
    }

    const handleCloseEmoji = () => {
        setEmojiOpen(false);
    
    }

    const handleMicClick = () => {

    }

    const handleSendClick = () => {

    }
    

    return(
        <div className="chatWindow">
            <div className="chatWindow-header">
                <div className="chatWindow-headerinfo">
                    <img className="chatWindow-avatar" src="https://pbs.twimg.com/profile_images/1437958381202026500/Bj1m7sax_400x400.png" alt="" />
                    <div className="chatWindow-name">Rihanna</div>
                </div>
                <div className="chatWindow-headerButtons">
                    <div className="chatWindow-btn">
                        <Search/>
                        <AttachFile/>
                        <MoreVert/>

                    </div>
                </div>

            </div>
            <div className="chatWindow-body">
                {list.map((item, key) => (
                    <MessageItem
                    key={key}
                    data={item} 
                    user={user}
                    />

                
                ))};

                <div className="chatWindow-emojiArea" 
                style={{height: emojiOpen ? '200px' : '0px'}}>
                    <EmojiPicker
                    onEmojiClick={handleEmojiClick}
                    disableSearchBar
                    disableSkinTonePicker

                    />
                </div>


            </div>
            <div className="chatWindow-footer">

                <div className="chatWindow-pre">



                 <div className="chatWindow-btn"
                    onClick={handleCloseEmoji}
                    style={{width: emojiOpen ? 40:0}}
                
                 >
                    <CloseIcon/>

                </div>
                <div className="chatWindow-btn"
                    onClick={handleOpenEmoji}
                 >
                    {/* <EmojiEmotions/> */}
                    <InsertEmoticonIcon style={{color: emojiOpen ? '#009688':'#919191'}}/>
                </div>

                </div>
                <div className="chatWindow-inputArea">
                    <input 
                    className="chatWindow-input" 
                    type="text" 
                    placeholder="Digite uma mensagem"
                    value={text}
                    onChange={e=>setText(e.target.value)}
                    />
                </div>
                <div className="chatWindow-pos">

                    {text === '' &&
                      <div onClick={handleMicClick} className="chatWindow-btn">
                      <MicIcon/>
                      </div>
                    }
                    {text !== '' &&
                     <div onClick={handleSendClick} className="chatWindow-btn">
                      <SendIcon/>
                     </div>
                    }


                </div>

            </div>

        </div>

       
        );
}