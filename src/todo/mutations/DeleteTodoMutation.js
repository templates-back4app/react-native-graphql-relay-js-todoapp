import { commitMutation, graphql } from "react-relay";
import { ROOT_ID, ConnectionHandler } from 'relay-runtime';

const connectionDeleteEdgeUpdater = (store, nodeId) => {
  const parentProxy = store.get(ROOT_ID);
  const connection = ConnectionHandler.getConnection(parentProxy, 'TodoList_todos');

  const newCount = connection.getValue('count');
  connection.setValue(newCount - 1, 'count');

  ConnectionHandler.deleteNode(connection, nodeId);
}

const mutation = graphql`
  mutation DeleteTodoMutation($input: DeleteTodoInput!) {
    deleteTodo(input: $input) {
      todo {
        id
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
      connectionDeleteEdgeUpdater(store, input.id)
    }
  });
}

export default {
  commit,
};