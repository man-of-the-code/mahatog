import React from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";

const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea placeholder="write a comment..." className={styles.input} />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        {/* 1st comment */}
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>MahatoG</span>
              <span className={styles.date}>03.02.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
            praesentium iure est atque facilis tenetur. Odio vero maiores
            blanditiis ea rem. Similique quod harum corporis tempore animi
            fugiat doloremque!
          </p>
        </div>
        {/* 2nd comment */}
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>MahatoG</span>
              <span className={styles.date}>03.02.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
            praesentium iure est atque facilis tenetur. Odio vero maiores
            blanditiis ea rem. Similique quod harum corporis tempore animi
            fugiat doloremque!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
