import React from 'react';
import './ChatWindow.css';
import { Search } from '@material-ui/icons';
import { AttachFile } from '@material-ui/icons';
import { MoreVert } from '@material-ui/icons';
import { EmojiEmotions } from '@material-ui/icons';


export default () =>{
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


            </div>
            <div className="chatWindow-footer">

                <div className="chatWindow-pre">
                <div className="chatWindow-btn">
                    <EmojiEmotions/>
                        

                    </div>
                    
                </div>
                <div className="chatWindow-inputArea">
                    
                </div>
                <div className="chatWindow-pos">
                    
                </div>

            </div>

        </div>

       
        );
}