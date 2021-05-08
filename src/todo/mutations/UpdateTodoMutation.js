import { commitMutation, graphql } from "react-relay";

const mutation = graphql`
  mutation UpdateTodoMutation($input: UpdateTodoInput!) {
    updateTodo(input: $input) {
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
  });
}

export default {
  commit,
};