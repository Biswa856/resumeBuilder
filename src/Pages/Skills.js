import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from "../Styles/skills.module.css"
import{useDispatch,useSelector}from"react-redux"
import skillsfill from '../Actions/skillsAction'

export default function Skills() {
  const{skillsReducer}=useSelector((state)=>state)
  const dispatch = useDispatch();
  const[form,setForm]=useState({
    skill1:skillsReducer.skill1,
    skill2:skillsReducer.skill2,
    skill3:skillsReducer.skill3,
    skill4:skillsReducer.skill4,
    skill5:skillsReducer.skill5,
    skill6:skillsReducer.skill6,
    skill7:skillsReducer.skill7
    
  })

  let obj={};
  function handleChange(e){
    let{id,value}=e.target;
    setForm({
      ...form,
      [id]:value
    })
  }

  function submit(){
    obj.skill1=form.skill1
    obj.skill2= form.skill2
    obj.skill3= form.skill3
    obj.skill4 = form.skill4
    obj.skill5 = form.skill5
    obj.skill6= form.skill6
    obj.skill7 = form.skill7

    dispatch(skillsfill(obj))
  }
  return (
    <div>
        <div className={styles.container}>
         <div className={styles.Skills}>
                    <span>Skills</span>
                </div>
                <div className={styles.headertitle}>Add a few skills to show employers what you're good at.</div>
                <div className={styles.inputbox}><input type='text'placeholder='Skill1'onChange={handleChange} id='skill1' value={form.skill1}/></div>
                <div className={styles.inputbox}><input type='text'placeholder='Skill2'onChange={handleChange} id='skill2' value={form.skill2}/></div>
                <div className={styles.inputbox}><input type='text'placeholder='Skill3'onChange={handleChange} id='skill3' value={form.skill3}/></div>
                <div className={styles.inputbox}><input type='text'placeholder='Skill4'onChange={handleChange} id='skill4' value={form.skill4}/></div>
                <div className={styles.inputbox}><input type='text'placeholder='Skill5'onChange={handleChange} id='skill5' value={form.skill5}/></div>
                <div className={styles.inputbox}><input type='text'placeholder='Skill6'onChange={handleChange} id='skill6' value={form.skill6}/></div>
                <div className={styles.inputbox}><input type='text'placeholder='Skill7'onChange={handleChange} id='skill7' value={form.skill7}/></div>

                <div className={styles.submit}>
                    <Link to='/summary'><input type="submit" onClick={submit} value="SAVE & CONTINUE"/></Link>
                    </div>
                    <div className={styles.back}>
                    <Link to='/education' style={{ textDecoration: "none" }}><a style={{color:'#03acbb',fontWeight:'bold'}}> Back </a></Link>
                    </div>
                </div>
    </div>
  )
}
