import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = ({postImage,postDate,postCategory,postTitle,postDesc}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={postImage} alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>{postDate} - </span>
          <span className={styles.category}>{postCategory}</span>
        </div>
        <Link href="/">
          <h1>{postTitle}</h1>
        </Link>
        <p className={styles.desc}>
          {postDesc}
        </p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
