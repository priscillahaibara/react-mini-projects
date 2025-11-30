import styles from "./Contact.module.css";
import PageNav from "../components/PageNav";
import img from '../assets/message.jpg';

function Contact() {
  return (
    <main className={styles.main}>
      <PageNav />
      <section className={styles.section}>
        <div>
          <h1>Contact me</h1>
          <p>
            Thank you for taking the time to visit my portfolio! I’m always open to networking, collaborating, or chatting about healthcare and technology.
          </p>
          <div className={styles.icons}>
            <a
              href="https://www.linkedin.com/in/priscillahaibara/"
              target="_blank"
              rel="noreferrer"
            >
              <ion-icon name="logo-linkedin" className={styles.icon}></ion-icon>
            </a>
            <a
              href="https://github.com/priscillahaibara"
              target="_blank"
              rel="noreferrer"
            >
              <ion-icon name="logo-github" className={styles.icon}></ion-icon>
            </a>
            <a
              href="mailto:priscillahaibara@email.com?subject=Contact%20from%20website&body=Hello%20Priscilla,"
              target="_blank"
              rel="noreferrer"
            >
              <ion-icon name="mail-outline" className={styles.icon}></ion-icon>
            </a>
          </div>
        </div>
        <img src={img} alt="card with thank you message"/>
      </section>
    </main>
  );
}

export default Contact;
