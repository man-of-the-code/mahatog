import Link from "next/link";
import styles from "./homepage.module.css";
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/Menu/Menu";
import Greetings from "@/components/greetings/Greetings";
import JobCardList from "@/components/jobCardList/jobCardList";


export default function Home() {
  return (
    <div className={styles.container}>
      <Greetings />
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <JobCardList/>
        {/* <CardList /> */}
        <Menu />
      </div>
    </div>
  );
}
