import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Createnote from "./Createnote";
import Note from "./Note";

const Apps = () => {

  const[additem,setadditem] = useState([]);

  const addnote = (note) => {
        setadditem((predata)=>{
          return[...predata,
          note];
        });
  };
  
  const ondelete = (id) =>{
      setadditem((olddata) =>
      olddata.filter((currdata, index) =>{
          return index !== id;
      } )
    );
  };

   return(
        <>
          <Header />
          <Createnote passnote={addnote}/>

          {additem.map((val,index)=>{
            return <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteitem={ondelete}>
            </Note>
          })};
           <br />
          <Footer />
        </>
    );
};
export default Apps;