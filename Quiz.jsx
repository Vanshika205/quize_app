import React, { useRef, useState } from 'react'
import './Quiz.css'
import { data } from '../../assets/data'


const Quiz = () => {

  let [index,setIndex] = useState(0);
  let [Question, setquestion] = useState(data[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result,setResult] = useState(false);

  let Option1=useRef(null);
  let Option2=useRef(null);
  let Option3=useRef(null);
  let Option4=useRef(null);

  let array=[Option1,Option2,Option3,Option4];
  

  const checkAns = (e, ans) =>{
    if(lock===false){
      if( Question.ans===ans){
         e.target.classList.add("correct");
         setLock(true);
         setScore(pre=>pre+1);
    }
    else{
       e.target.classList.add("wrong");
       setLock(true);
       array[Question.ans-1].current.classList.add("correct");
    }

    }
    
}



  const next =()=> {
    if(lock===true){
             if (index===data.length -1){
              setResult(true);
              return 0;
             }

    }
      if(lock===true) {
        setIndex(++index);
        setquestion(data[index]);
        setLock(false);

        array.map((option)=>{
          option.current.classList.remove("wrong");
           option.current.classList.remove("correct");
           return null;

        }

        )
            
          
      }
  }

  const Reset=()=>{
     setIndex(0);
     setLock(false);
     setResult(false);
     setScore(0);
      }
  

    return (
    <div className='container'>
        <h1>Quize App</h1>
        <hr/>
        {result?<></>:<><h2>{index+1}. {Question.Question}</h2>
        <ul>
          <li ref={Option1} onClick={(e)=>{checkAns(e,1)}}>{Question.Option1}</li>
          <li ref={Option2} onClick={(e)=>{checkAns(e,2)}}>{Question.Option2}</li>
          <li ref={Option3} onClick={(e)=>{checkAns(e,3)}}>{Question.Option3}</li>
          <li ref={Option4} onClick={(e)=>{checkAns(e,4)}}>{Question.Option4}</li>
          </ul>

          <button onClick={next}>Next</button>
          <div className='index'> {index+1}  of  {data.length}  Questions</div> 
           
      </>
      
      }
      {result?<><h2>Your score is {score} out of {data.length} </h2>
      <button onClick={Reset}>Reset</button></>:<></>}
      
    </div>
  )
}

export default Quiz
