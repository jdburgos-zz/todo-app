/** React core **/
import React from 'react';

/** Styles **/
import "./styles/styles.scss";

/** Components **/
import Wrapper from "./components/helpers/Wrapper/Wrapper";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import TodoForm from "./components/TodoForm/TodoForm";
import Container from "./components/layout/Container/Container";
import TodoFilter from "./components/TodoFilter/TodoFilter";

const App = () => (
  <Wrapper>
    <Header />
    <Container>
      <TodoForm />
      <TodoList />
      <TodoFilter />
    </Container>
  </Wrapper>
);

export default App;
