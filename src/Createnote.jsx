import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


  const Createnote = (props) =>{

    const [expand, setExpand] = useState(false);

    const[note, setnote] = useState({
        title: '',
        content:'',
    });

    const inputEvent = (event) =>{
       // const value = event.target.value;
       // const name = event.target.name;

       const{name,value} = event.target

        setnote((predata) =>{
            return{
                ...predata,
                [name]:value,
            };
    });
    console.log(note);
    };
     
    const addevent = () =>{
         props.passnote(note);
    };

    const expandIt = () =>{
        setExpand(true);
    }

    return(
        <>
         <div className='main-note'>
            <form>
               { expand?
                <input type = "text"
                name='title'
                value = {note.title}
                onChange = {inputEvent}
                placeholder = 'Title'>    
                </input> : null}

                <textarea 
                type = 'text'
                name='content'
                value = {note.content}
                onChange = {inputEvent}
                placeholder = 'Write a note..'
                onClick={expandIt} >
                </textarea>

                { expand? <Button onClick={addevent}>
                     <AddIcon />
                 </Button> : null}

            </form>
         </div>
        </>
    );
};
export default Createnote;