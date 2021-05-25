/** Styles **/
import './styles/styles.scss';

/** Components **/
import Wrapper from './components/helpers/Wrapper/Wrapper';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import TodoForm from './components/TodoForm/TodoForm';
import Container from './components/layout/Container/Container';
import TodoFilter from './components/TodoFilter/TodoFilter';

/** Providers **/
import TodosProvider from './store/TodosProvider';

const App = () => (
  <Wrapper>
    <Header />
    <Container>
      <TodosProvider>
        <TodoForm />
        <TodoList />
        <TodoFilter />
      </TodosProvider>
    </Container>
  </Wrapper>
);

export default App;
