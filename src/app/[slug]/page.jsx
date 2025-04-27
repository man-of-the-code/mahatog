import React from 'react'
import styles from "./singlePage.module.css"
import Menu from '@/components/Menu/Menu'
import Image from 'next/image'
import Comments from '@/components/comments/Comments'

// 02:12:30

const SinglePage = () => {
  return (
    <div className={styles.container} >
      <div className={styles.infoContainer} >
        <div className={styles.textContainer}>
          <h1 className={styles.title} >Lorem ipsum dolor sit amet.</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt='' fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username} >MahatoG</span>
              <span className={styles.date} >01.02.2025</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content} >
        <div className={styles.post} >
          <div className={styles.description}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad rem id atque, dolorum nemo maxime illum delectus incidunt accusantium velit iusto deserunt? Quaerat dicta dolores reprehenderit vero laboriosam placeat ipsum nisi, laudantium.
          </p>
          <h2>Lorem ipsum dolor sit amet consectetur.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad rem id atque, dolorum nemo maxime illum delectus incidunt accusantium velit iusto deserunt? Quaerat dicta dolores reprehenderit vero laboriosam placeat ipsum nisi, laudantium.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad rem id atque, dolorum nemo maxime illum delectus incidunt accusantium velit iusto deserunt? Quaerat dicta dolores reprehenderit vero laboriosam placeat ipsum nisi, laudantium.
          </p>
          </div>
          <div className={styles.comment}>
            <Comments/>
          </div>
        </div>
        <Menu/>
      </div>
    </div>
  )
}

export default SinglePage