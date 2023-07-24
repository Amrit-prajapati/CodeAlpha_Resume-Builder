import react, { useRef, useState } from "react";
import  jsPDF from "jspdf";
import html2canvas from "html2canvas";


function Body(){

    const pdfRef = useRef();
    const downloadPDF = () => {
        const input = pdfRef.current;

        html2canvas (input).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
       
        const pdf = new jsPDF('p', 'mm', 'a3', true);
        
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        
        const imgWidth = canvas.width;
        const imgHeight =canvas.height; 
        const ratio = Math.min(pdfWidth/imgWidth, pdfHeight / imgHeight);
        const imgX= (pdfWidth - imgWidth * ratio) / 2;
        const imgY = 30;
        pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
        pdf.save('resume.pdf');
        });
    };
    const[personalInfo , setInfo]  = useState(
        {
            fname:"",
            lname:"",
            Role:"",
            phNo: "",
            address:"",
            personalInfoDesc:"",
        }
    )
    const[education , setEdu] = useState({
            Xpercent:"",
            Xschool:"",
            XIIpercent:"",
            XIIschool:"",
            CollPercent:"",
            Collname:"",
            
        })

        const[skillSets , setskill] = useState({
            skill1:"",
            skill2:"",
            skill3:"",
            skill4:"",
        })
        const [softwareSkill , setSSskill] = useState({
                ssSkill1: "",
                ssSkill2 : "",
                ssSkill3: "",
                ssSkill4: ""
        })

        const[projs, setProjs ] = useState({
            proj1Name:"",
            proj1tech:"",
            proj1Desc:"",
            
            proj2Name:"",
            proj2tech:"",
            proj2Desc:"",
            
            proj3Name:"",
            proj3tech:"",
            proj3Desc:"",
            
        })
        const[contact , setContact] = useState({
            linkedin : "",
            github: "",
            phone : "",
            gmail : "",
        })

    return <div className="body">
    <button className="save" onClick={downloadPDF}><b>Save</b> </button>
        <div className="left">
            
            <h1>
                Personal Informtion
            </h1>
            <input type ="text" placeholder="First Name" name="fname" onChange={e => setInfo( {...personalInfo , fname : e.target.value })}/> 
            <input type ="text" placeholder="Last Name" name="lname" onChange={e => setInfo( {...personalInfo , lname : e.target.value })}/>
            <input type = "text" placeholder="Role" name="Role" onChange={e => setInfo( {...personalInfo , Role : e.target.value })}/>
            <input type="number" placeholder="Phone Number" name="phNo" onChange={e => setInfo({...personalInfo , phNo : e.target.value})}/>
            <input type = "text" placeholder="address" name ="address"onChange={e => setInfo( {...personalInfo , address : e.target.value })}/>
            <input type = "text" placeholder="description" name="personalInfoDesc" onChange={e => setInfo( {...personalInfo , personalInfoDesc : e.target.value })} />
            
            
            <h1>
                     Education 
            </h1>
            <input type ="text" placeholder="Xth school name" name="Xschool" onChange={e => setEdu( {...education , Xschool : e.target.value })}/>
            <input type = "text" placeholder="if percent, then add '%' symbol otherwise add cgpa at last" name="Xpercent" onChange={e => setEdu( {...education , Xpercent : e.target.value })}/>  
            <input type ="text" placeholder=" XIIth school" name="XIIschool" onChange={e => setEdu( {...education , XIIschool : e.target.value })}/>
            <input type = "text" placeholder="if percent, then add '%' symbol otherwise add cgpa at last" name="XIIpercent" onChange={e=> setEdu({...education , XIIpercent : e.target.value})}/>
            <input type = "text" placeholder="Graduation College Name" name = "Collname" onChange={e => setEdu( {...education , Collname : e.target.value })}/>
            <input type = "text" placeholder="if percent, then add '%' symbol otherwise add cgpa at last" name = "CollPercent" onChange={e=> setEdu({...education ,CollPercent: e.target.value })}/>
            
            <h1> Skills </h1>
            <input type="text" placeholder="Skill1" name="skill1" onChange={e=> setskill({...skillSets , skill1: e.target.value})}/>
            <input type="text" placeholder="Skill2" name="skill2" onChange={e=> setskill({...skillSets , skill2: e.target.value})}/>
            <input type="text" placeholder="Skill3" name="skill3" onChange={e=> setskill({...skillSets , skill3: e.target.value})}/>
            <input type="text" placeholder="Skill4" name="skill4" onChange={e=> setskill({...skillSets , skill4: e.target.value})}/>
            <input type="text" placeholder="Skill5" name="skill5" onChange={e=> setskill({...skillSets , skill5: e.target.value})}/> 
            

            <h1>Projects</h1>
            <input type="text" placeholder="project name" name = "proj1Name" onChange={e=> setProjs({...projs , proj1Name:e.target.value})}/> 
            <input type="text" placeholder="tech used" name="proj1tech" onChange={e=> setProjs({...projs , proj1tech: e.target.value})}/>
            <input type="text" placeholder="description" name="proj1Desc" onChange={e=> setProjs({...projs, proj1Desc: e.target.value})}/>

            <input type="text" placeholder="project name" name = "proj2Name" onChange={e=> setProjs({...projs , proj2Name:e.target.value})}/> 
            <input type="text" placeholder="tech used" name="proj2tech" onChange={e=> setProjs({...projs , proj2tech: e.target.value})}/>
            <input type="text" placeholder="description" name="proj2Desc" onChange={e=> setProjs({...projs, proj2Desc: e.target.value})}/>

            
            <input type="text" placeholder="project name" name = "proj3Name" onChange={e=> setProjs({...projs , proj3Name:e.target.value})}/> 
            <input type="text" placeholder="tech used" name="proj3tech" onChange={e=> setProjs({...projs , proj3tech: e.target.value})}/>
            <input type="text" placeholder="description" name="proj3Desc" onChange={e=> setProjs({...projs, proj3Desc: e.target.value})}/>
            
            <h1>Software Skills</h1>
            <input type="text" placeholder="software name" name= "ssSkill1"  onChange={e=>setSSskill({...softwareSkill , ssSkill1: e.target.value})}/>
            <input type="text" placeholder="software name" name="ssSkill2" onChange={e=>setSSskill({...softwareSkill , ssSkill2: e.target.value})}/>
            <input type="text" placeholder="software name" name="ssSkill3" onChange={e=>setSSskill({...softwareSkill , ssSkill3: e.target.value})}/>
            <input type="text" placeholder="software name" name="ssSkill4" onChange={e=>setSSskill({...softwareSkill , ssSkill4: e.target.value})}/>
            
            <h1> Contact </h1>
            <input type = "url" placeholder="LinkedIn URL"  name = "linkedin" onChange ={e=> setContact({...contact , linkedin : e.target.value})}/> 
            <input type="url" placeholder="github URL" name = "github" onChange ={e=> setContact({...contact ,github : e.target.value})}/> 
            <input type="number" placeholder="Phone Number" name = "phone" onChange ={e=> setContact({...contact , phone : e.target.value})}/> 
            <input type="email" placeholder="Email" name = "gmail" onChange ={e=> setContact({...contact , gmail : e.target.value})}/> 
            
            </div>

            
        <div className="right" ref = {pdfRef}>
          <div className= "top">
                <h2 className="Name">{personalInfo.fname} &nbsp;
                {personalInfo.lname}</h2>
                <h3>{personalInfo.Role}</h3>
                <p>Phone Number : &nbsp; {personalInfo.phNo}</p>
                <p>Address : {personalInfo.address}</p>
                <p>{personalInfo.personalInfoDesc}</p>     
           </div>
           <div className ="heading"> Education </div>
           <hr />

      
            <div className="second">
                <table> 
                    <tr>
                        <th>  Xth</th>
                        <td> <p className="schoolname">
                            <b>School Name </b> :&nbsp;  {education.Xschool}
                        </p>
                        <p className="percent">
                          <b>Percentage/CGPA </b> :&nbsp;    {education.Xpercent}
                        </p>
                         </td>
                     </tr>
                     <tr>
                        <th>  XIIth</th>
                        <td> <p className="schoolname">
                            <b>School Name </b> :&nbsp;  {education.XIIschool}
                        </p>
                        <p className="percent">
                       <b>Percentage/ CGPA </b> :&nbsp;   {education.XIIpercent}
                        </p>
                         </td>
                     </tr>

                     <tr>
                        <th> Graduation</th>
                        <td> <p className="schoolname">
                            <b>College Name </b> : &nbsp;     {education.Collname}
                        </p>
                        <p className="percent">
                          <b>Percentage /CGPA </b>: &nbsp;  {education.CollPercent}
                        </p>
                         </td>
                     </tr>
                </table>
            </div>
            <br />

            <div className ="heading"> Skills </div>
            <hr />
            
         <div className="skill">
            <ul>         
                <li>{skillSets.skill1}</li>
                <li>{skillSets.skill2}</li>
                <li>{skillSets.skill3}</li>
                <li>{skillSets.skill4}</li>
                <li>{skillSets.skill5}</li>
            </ul>
         </div>

         <div className ="heading ss">Projects </div>
            <hr />
            <div className="projects">
             <table>
                <tr>
                    <th>{projs.proj1Name}</th>

                    <td> <p><b> <span className="tused"> Tech Used </span>:  </b>  
                    <span className="ans">{projs.proj1tech}</span></p>

                     <p><b><span className="desc">  Description: </span></b>
                     <span className="ans">{projs.proj1Desc}</span>
                     </p>
                      </td>
                </tr>


                <tr>
                    <th>{projs.proj2Name}</th>
                    <td><p> <b><span className="tused"> Tech Used :</span>  </b>  
                     <span className="ans">{projs.proj2tech}</span></p>

                    <p>
                     <b><span className="desc"> Description : </span></b>
                     <span className="ans">{projs.proj2Desc}</span>
                     </p>
                      </td>
                </tr>


                   <tr>
                    <th>{projs.proj3Name}</th>
                    <td> <p><b><span className="tused"> Tech Used  :</span></b>
                        <span className="ans">{projs.proj3tech}</span> </p>

                     <p><b><span className="desc"> Description: </span> </b>
                     <span className="ans">{projs.proj3Desc}</span>
                     </p>
                    </td>
                </tr>

             </table>
             </div>



         <div className ="heading ss">Software Skills </div>
            <hr />

         <div className="skill">
            <ul>         
                <li>{softwareSkill.ssSkill1}</li>
                <li>{softwareSkill.ssSkill2}</li>
                <li>{softwareSkill.ssSkill3}</li>
                <li>{softwareSkill.ssSkill4}</li>
            </ul>
         </div>

        
         <div className ="heading ss">Contact </div>
            <hr />

            <div className="contact">
              <a href={contact.github} target="_blank" >  Github </a><br />
               <a href="mailto:someone@example.com">  Gmail </a><br />
                <span className="phone">Phone : &nbsp; {contact.phone}</span><br />
                <a href={contact.linkedin} target="_blank">   LinkedIn </a>
             </div>
        </div>
        
     </div>
};

export default Body;