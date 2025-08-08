export default function Footer({ completedCount }) {
  return <div className="footer">You have completed {completedCount} {completedCount === 1 ? 'task' : 'tasks'}</div>;
}