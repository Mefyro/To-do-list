import { Card, CardContent, Typography, IconButton, Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import LoopIcon from '@mui/icons-material/Loop';

export default function TaskCard({ task, onDelete, onStatusChange }) {
  return (
    <Card variant="outlined" sx={{ mb: 1 }}>
      <CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography>{task.title}</Typography>
          <div>
            <IconButton onClick={() => onStatusChange(task)}>
              <LoopIcon />
            </IconButton>
            <IconButton color="error" onClick={() => onDelete(task._id)}>
              <DeleteIcon />
            </IconButton>
          </div>
        </Stack>
      </CardContent>
    </Card>
  );
}