import styles from "./homepage.module.css";
import Greetings from "@/components/greetings/Greetings";
import JobCardList from "@/components/jobCardList/JobCardList.jsx";


export default function Home() {
  return (
    <div className={styles.container}>
      <Greetings />
      <JobCardList/>
    </div>
  );
}
