import React from 'react';
import "./ClassContent.css";
import NoteCard from "../../Cards/NoteCard";
// import Grid from "@material-ui/core/Grid";

function ClassContent() {
    return (
        <div className="content__container">   
            <div className="content__header">        
                <h3> My Notes </h3>  
            </div>
            <div className="notes__container">
                <NoteCard />
                <NoteCard />
                <NoteCard />  
                <NoteCard />
                <NoteCard />
                <NoteCard />  
                <NoteCard />
                <NoteCard />
                <NoteCard />  
            </div>
            
        </div>         
    )
}

export default ClassContent;