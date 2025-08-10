import styles from '../App.module.css';

export default function Footer({ completedCount }) {
  return <div className={styles.footer}>You have completed {completedCount} {completedCount === 1 ? 'task' : 'tasks'}</div>;
}