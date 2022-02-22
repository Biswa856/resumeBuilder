import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from "../Styles/skills.module.css"
import {useDispatch,useSelector} from "react-redux"
import { summaryFill } from '../Actions/summaryAction'

export default function Summary() {
  const{summaryUpdate}=useSelector((State)=>State);
  const dispatch = useDispatch();
  const[form,setForm]=useState({
    value:summaryUpdate.value
  })

  let obj ={};

  function handleChange(e){
    let{id,value}= e.target;
    setForm({
      ...form,
      [id]:value
    })
  }

  function submit(){
    obj.value = form.value
    dispatch(summaryFill(obj))
  }


  return (
    <div>
        
        <div className={styles.container}>
         <div className={styles.Skills}>
                    <span>Summary</span>
                </div>
                <div className={styles.headertitle}>Briefly describe the value that you bring through your skills, background and experience.</div>

                <textarea rows="15" cols="85" name="comment" onChange={handleChange} id='value' value={form.value} placeholder="Sell yourself for the job.Include 3-5 sentences.Customize your summary for the job you're applying to." style={{paddingTop:'10px',paddingLeft:'5px'}}>
                 </textarea>
                    
                    <div className={styles.submit}>
                    <Link to='/finalpage'><input type="submit" value="SAVE & CONTINUE" onClick={submit}/></Link>
                    </div>
                    <div className={styles.back}>
                    <Link to='/skills' style={{ textDecoration: "none" }}><a style={{color:'#03acbb',fontWeight:'bold'}}> Back </a></Link>
                    </div>
                </div>
    </div>
  )
}
