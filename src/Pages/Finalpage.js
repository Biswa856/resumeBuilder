import React, { useState } from 'react'
import styles from '../Styles/finalpage.module.css'
import { useSelector, useDispatch } from "react-redux"
import { finalizeAction } from '../Actions/finalizeAction'
import finalizeReducer from '../reducers/finalizeReducer'
import reactDom from 'react-dom'

export default function Finalpage() {
  const { ContactUpdate } = useSelector((state) => state)
  const { workExpReducer } = useSelector((state) => state)
  const finalizeReducer = useSelector((state) => state.finalizeReducer);
  const [document, setDocument] = useState(finalizeReducer.document)
  const colorClass = "color" + document.color;


  const dispatch = useDispatch();

  function handleChange(e) {
    const { name, value } = e.target;
    console.log(name, value);
    setDocument({
      ...document,
      [name]: value,

    })
    console.log(document);

    dispatch(finalizeAction(document))
  }
  React.useEffect(() => {

  }, [document])

  let colorArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return (
    <div>
      <div className={styles.left}>
        <div className={styles.leftcontainer}>
          {/* contactinfo */}
          {ContactUpdate.name &&
            (<div><div style={{ display: 'flex' }}><div className={`${styles.box} ${colorClass}`
            }></div>
              <h1>{ContactUpdate.name}</h1></div>
              <p style={{ fontSize: "small" }}>{ContactUpdate.streetAddress},{ContactUpdate.city},{ContactUpdate.country},{ContactUpdate.phonenumber},{ContactUpdate.phonenumber2}</p>
              <p style={{ fontSize: "small" }}>{ContactUpdate.email}</p></div>)
          }

          {/* experience */}
          {/* render this section  if  experience containg company name */}

          {workExpReducer.company &&
            (<div className={styles.experience}>
              <p style={{ marginLeft: "0px", fontWeight: 'bolder', paddingTop: "25px" }}>EXPERIENCE</p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p style={{ fontSize: "small" }}>{workExpReducer.jobTitle}</p>
                <p style={{ fontSize: "small" }}>{workExpReducer.startMonth} {workExpReducer.startYear} - {workExpReducer.endMonth} {workExpReducer.endYear}</p>
              </div>
              <p style={{ fontSize: "small", marginTop: "0px" }}>{workExpReducer.company} | {workExpReducer.city}, {workExpReducer.country}</p>
              <p>{workExpReducer.description}</p>
            </div>)
          }


        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.rightcontainertop}>
          <h1 className={styles.header}>Here's Your Resume</h1>
          <p className={styles.headertitle}>What do you want to do next?</p>
          <h4 style={{ marginLeft: "20px" }}>Export Options</h4>
          <div className={styles.button}>
            <div><button className={styles.btn1} style={{ background: "#8cc53e" }}>Download</button></div>
            <div><button className={styles.btn1} >Print</button></div>
            <div><button className={styles.btn1}>Email</button></div>
            <hr></hr>


          </div>
          <div className={styles.formatting}>
            <h4 style={{ marginBottom: "10px" }}>Formatting Options</h4>
            <div className={styles.layout}>
              <div>Layout</div>
              <button className={styles.layoutbutton}>CONDENSED</button>
              <button className={styles.layoutbutton}>STANDARD</button>
              <button className={styles.layoutbutton}>EXPANDADE</button>


            </div>

            <div className={styles.font}>
              <div>
                <p style={{ marginBottom: "5px" }}>Font Style</p>

                <select className={styles.drop}>

                  <option value="fs1">Raleway</option>
                  <option value="fs2">Ubuntu</option>
                  <option value="fs3">Montserrat</option>
                  <option value="fs4">Source Sans Pro</option>
                  <option value="fs5">Hind</option>
                  <option value="fs6">Times New Roman</option>
                  <option value="fs7">Roboto</option>
                </select>
              </div>
              <div><p style={{ marginBottom: "5px" }}>Font Size</p>
                <select className={styles.drop}>

                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </div>
            </div>
            <div className={styles.color}>
              <p style={{ marginBottom: "5px" }}>Colors</p>
              <div className={styles.font}>
                {
                   
                  colorArr.map(ele => (
                    <div><input type='checkbox' name="color" value={ele}  onClick={handleChange} className={`${styles.ckbx} color${ele}`} /></div>
                  ))
                }
                {/* <div><input type='checkbox' onClick={handleChange} name='color' value={1} className={styles.ckbx} style={{ background: "green" }} /></div>
                <div><input type='checkbox' onClick={handleChange} name='color' value={2} className={styles.ckbx} style={{ background: "aqua" }} /></div>
                <div><input type='checkbox' className={styles.ckbx} style={{ background: "hotpink" }} /></div>
                <div><input type='checkbox' className={styles.ckbx} style={{ background: "mediumspringgreen" }} /></div>
                <div><input type='checkbox' className={styles.ckbx} style={{ background: "darkturquoise" }} /></div>
                <div><input type='checkbox' className={styles.ckbx} style={{ background: "orange" }} /></div>
                <div><input type='checkbox' className={styles.ckbx} style={{ background: "lightblue" }} /></div>
                <div><input type='checkbox' className={styles.ckbx} style={{ background: "lightgreen" }} /></div>
                <div><input type='checkbox' className={styles.ckbx} style={{ background: "yellow" }} /></div>
                <div><input type='checkbox' className={styles.ckbx} style={{ background: "#305fec" }} /></div> */}

              </div>

            </div>

          </div>
          <hr></hr>
          <div><button className={styles.btn1} >+Add New Section</button></div>
          <div><button className={styles.btn1}>Change Template</button></div>
        </div>

      </div>
    </div>
  )
}
