import { commitMutation, graphql } from "react-relay";
import { ROOT_ID, ConnectionHandler } from 'relay-runtime';

const connectionCreateEdgeUpdater = (store, nodeId) => {
  const parentProxy = store.get(ROOT_ID);
  const todoConnection = ConnectionHandler.getConnection(parentProxy, 'TodoList_todos');

  const newTodo = store.get(nodeId);
  const edge = ConnectionHandler.createEdge(store, todoConnection, newTodo, 'TodoEdge');
  
  // No cursor provided, append the edge at the end.
  ConnectionHandler.insertEdgeAfter(todoConnection, edge);
}

const mutation = graphql`
  mutation CreateTodoMutation($input: CreateTodoInput!) {
    createTodo(input: $input) {
      todo {
        id
        title
        done
      }
    }
  }
`;

function commit({ environment, input, onCompleted, onError }) {
  const variables = { input };

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted,
    onError,
    updater: (store) => {
      const todoId = store.getRootField('createTodo').getLinkedRecord('todo').getValue('id');

      connectionCreateEdgeUpdater(store, todoId)
    }
  });
}

export default {
  commit,
};