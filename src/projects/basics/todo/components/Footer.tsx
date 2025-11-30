import styles from '../App.module.css';

interface FooterProps {
  completedCount: number;
}

export default function Footer({ completedCount }: FooterProps) {
  return <div className={styles.footer}>You have completed {completedCount} {completedCount === 1 ? 'task' : 'tasks'}</div>;
}