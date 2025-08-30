import PageNav from "../components/PageNav";
import styles from "./About.module.css";
import img from "../assets/cat.jpg";

function About() {
  return (
    <main className={styles.main}>
      <PageNav />
      <section className={styles.section}>
        <div>
          <h1>About me</h1>
          <p>
            Hello! My name is Priscilla Haibara, I am a 4th year Software
            Engineering student and a permanent resident of Canada. With a
            unique combination of expertise in front-end development and a
            background as a medical doctor, I strive to create impactful web
            applications that blend technology and user-centric design.
          </p>
        </div>
        <img src={img} alt="cat near a laptop" />
      </section>
    </main>
  );
}

export default About;
