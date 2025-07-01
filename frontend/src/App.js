import { Container } from '@mui/material';
import Header from './components/Header';
import TodoApp from './pages/Todo';



function App() {
  return (
    <Container maxWidth="lg">
      <Header />
      <TodoApp />
    </Container>
  );
}

export default App;
