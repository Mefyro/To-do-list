import { Box, Stack, TextField, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import TaskColumn from '../components/TaskColumn';
import api from '../services/api';

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const fetchTasks = async () => {
    const res = await api.get('/tasks');
    setTasks(res.data);
  };

  const createTask = async () => {
    if (newTask.trim()) {
      await api.post('/tasks', { title: newTask });
      setNewTask('');
      fetchTasks();
    }
  };

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    fetchTasks();
  };

  const updateStatus = async (task) => {
    const nextStatus = task.status === 'pending'
      ? 'in_progress' : task.status === 'in_progress'
      ? 'done' : 'pending';
    await api.put(`/tasks`, { status: nextStatus, id: task._id });
    fetchTasks();
  };

  const filterByStatus = (status) => tasks.filter(t => t.status === status);

  useEffect(() => { fetchTasks(); }, []);

  return (
    <Box>
      <Stack direction="row" spacing={2} justifyContent="space-between" sx={{ mb: 4 }}>
        <TaskColumn title="To Do" tasks={filterByStatus('pending')} onDelete={deleteTask} onStatusChange={updateStatus} />
        <TaskColumn title="In Progress" tasks={filterByStatus('in_progress')} onDelete={deleteTask} onStatusChange={updateStatus} />
        <TaskColumn title="Completed" tasks={filterByStatus('done')} onDelete={deleteTask} onStatusChange={updateStatus} />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="Ajouter une tâche"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          fullWidth
        />
        <Button variant="contained" onClick={createTask}>Ajouter</Button>
      </Stack>
    </Box>
  );
}
