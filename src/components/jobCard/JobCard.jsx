import React from 'react'
import styles from './jobCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

function JobCard({
  postImage,
  postCategory,
  postTitle,
  companyName,
  joblocation,
  jobtype,
  dutyhours,
  dutytime,
  salary,
  contactperson,
  contact,
  qualification,
  age,
  languages,
  documents,
  benefits,
  selection
}) {
  return (
    // below container is a container of job post.
    // This component is used to display a single job post with its image and text content.
    <div className={styles.container}>
      <div className={styles.detailTitleContainerOne}>
        <div className={styles.detail}>
          {/* <span className={styles.date}>{postDate} - </span> */}
          <span className={styles.category}>{postCategory}</span>
        </div>
        <Link href="/">
          <h3>{postTitle}</h3>
        </Link>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={postImage}
          alt="postImage"
          width={0}
          height={0}
          sizes="100vw"
          className={styles.image}
        />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detailTitleContainerTwo}>
          <div className={styles.detail}>
            {/* <span className={styles.date}>{postDate} </span> */}
            <span className={styles.category}>{postCategory}</span>
          </div>
          <Link href="/">
            <h1>{postTitle}</h1>
          </Link>
        </div>
        <p><strong>Company Name :- </strong> {companyName}</p>
        <h2>Job Details</h2>
        <p><strong>Salary :- </strong> {salary}</p>
        <p><strong>Job Location</strong>{joblocation.map((item,index)=>{
          return <span key={index}><li>{item}</li></span>;
        })}</p>
        <p><strong>Job Type :- </strong> {jobtype}</p>
        <p><strong>Duty Hours :- </strong>{dutyhours}</p>
        <p><strong>Duty Time</strong>{dutytime.map((item,index)=>{
          return <span key={index}><li>{item}</li></span>;
        })}</p>
        <h2>Job Candidate Criteria</h2>
        <p><strong>Qualification :- </strong> {qualification}</p>
        <p><strong>Age :- </strong> {age}</p>
        <p><strong>Languages :- </strong> {languages}</p>
        <p><strong>Documents</strong>{documents.map((item,index)=>{
          return <span key={index}><li>{item}</li></span>;
        })}</p>
        <h2>Job Candidate Benefits</h2>
        <p>{benefits.map((item,index)=>{
          return <span key={index}><li>{item}</li></span>;
        })}</p>
        <h2>Job Candidate Selection</h2>
        <p>{selection}</p>
        <h2>How to apply/contact</h2>
        <p><strong>Contact Person :- </strong> {contactperson}</p>
        <p><strong>Mobile Number/WhatsApp</strong><br/> {contact}</p>
        {/* <Link href="/" className={styles.link}>
          Read More
        </Link> */}
      </div>
    </div>
  )
}

export default JobCard