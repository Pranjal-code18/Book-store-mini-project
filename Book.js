import React from "react";

const Book=(props)=>{
    const{img,title,author}=props;
    const clickHandler=()=>{
        alert("Are you Sure,you wants to read me");   
    }
    const ex=(author)=>{
        console.log(author);
    }
    return(
     <article className='book'>
        <img src={img} alt="" />
        <h1>{title}</h1>
        <h4>{author}</h4> 
        <button type="button" onClick={clickHandler}>Read Me?</button>
        <button type ="button" onClick={()=>ex(author)}>Detailed</button>
     </article>
    );
}

export default Book;
