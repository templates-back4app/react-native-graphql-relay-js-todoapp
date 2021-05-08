import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';

import TodoListQueryRenderer from './src/todo/TodoListQueryRenderer'

const App = () => {
  return (
    <PaperProvider>
      <TodoListQueryRenderer />
    </PaperProvider>
  )
};

export default App;
