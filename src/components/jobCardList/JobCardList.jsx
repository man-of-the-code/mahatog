import React from 'react'
import JobCard from '../jobCard/JobCard'
import styles from './jobCardList.module.css'
// import Pagination from '../pagination/Pagination'

function JobCardList() {
    let joblocation = [
    "Country : India",
    "State : Tamil Nadu",
    "District : Krishnagiri",
    "City : Hosur",
    "Village : Upparapally",
    "PinCode : 635114"
  ]
  let dutytime=[
    "1st Shift (7:30AM  to  3:30PM)",
    "2nd Shift (3:30PM  to  11:30PM)",
    "3rd Shift (11:30PM  to  7:30AM)"
  ]
  let documents=[
    "Qualification Certificate with marksheet",
    "Aadhar card",
    "Pan card",
    "Bank Account",
    "Password size photo"
  ]
  let benefits = [
    "PF & ESIC",
    "Canteen",
    "Uniform",
    "Social Security",
    "Transports(Only for female)",
    "Overtime as per company requirement",
    "On roll after 11 months for best performers",
    "Accommodation:-Security deposit and rent paid by candidate",
    
  ]
  return (
    // below container is a container of different jobs list
    <div className={styles.container}>
      <p><strong>Would you like to list your company's job openings?</strong></p>
      <p>Contact now : +91 9380879254</p>
      <br/>
      <h1 className={styles.title}>Recent Jobs</h1>
      
      <div className={styles.posts}>
        {/* Spritual post */}
        
        <JobCard 
        postImage={"/unoMinda.png"} 
        postCategory={"Automobile Production/Manufacturing Industry"} 
        postTitle={"Designation : Assembly Operator, CNC Operator, Store, Maintenance, PDC Operator, Quality"} 
        companyName={"UNO Mind Pvt. Ltd."} 
        joblocation={joblocation}
        jobtype={"full time"}
        dutyhours={"8hrs per day, 6 days a week, OT as per company requirement"}
        dutytime={dutytime} 
        salary={"INR 16,000 to INR 18,000"}
        contactperson={"Mr. Murli"}
        contact={"+91 9626349355"} 
        qualification={"10th,12th,ITI,Any Degree"} 
        age={"18yr to 30yr"} 
        languages={"Any Languages"}
        documents={documents}
        benefits={benefits}
        selection={"Final selection will be based on basic English reading and writting, Interview and Document verification"}  />
      
      </div>
      {/* <Pagination /> */}
    </div>
  )
}

export default JobCardList