import { Paper, Typography, Box } from '@mui/material';
import TaskCard from './TaskCard';

export default function TaskColumn({ title, tasks, onDelete, onStatusChange }) {
  return (
    <Paper elevation={2} sx={{ p: 2, minHeight: 300, flex: 1 }}>
      <Typography variant="h6" gutterBottom>{title}</Typography>
      {tasks.map(task => (
        <TaskCard key={task._id} task={task} onDelete={onDelete} onStatusChange={onStatusChange} />
      ))}
    </Paper>
  );
}