"use client";
import Image from "next/image";
import styles from "./writePage.module.css";
import { useState } from "react";
// import ReactQuill from "react-quill";
// while importing "ReactQuill" in a normal way as above , it was throwing an error thats why it is imported dynamically as below
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });
//below function got while searching solution for error occuring of "ReactQuill" in "edge broeser copilot"
// export default function Editor() {
//     return <ReactQuill theme="bubble" />;
// }
import "react-quill/dist/quill.bubble.css";
import AddIcon from "@mui/icons-material/Add";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";

const WritePage = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.input} />
      <div className={styles.editor} onClick={() => setOpen(!open)}>
        <button className={styles.button}>
          {/* <Image src="/plus.png" alt="" width={16} height={16} /> */}
          <AddIcon />
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              {/* <Image src="/image.png" alt="" width={16} height={16} /> */}
              <ImageOutlinedIcon />
            </button>
            <button className={styles.addButton}>
              {/* <Image src="/external.png" alt="" width={16} height={16} /> */}
              <LinkOutlinedIcon />
            </button>
            <button className={styles.addButton}>
              {/* <Image src="/video.png" alt="" width={16} height={16} /> */}
              <PlayCircleOutlinedIcon />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  );
};

export default WritePage;
