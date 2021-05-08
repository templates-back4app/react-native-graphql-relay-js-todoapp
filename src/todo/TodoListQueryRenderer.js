import React from 'react';
import { View, Text } from 'react-native';

import { graphql, QueryRenderer } from 'react-relay';

import environment from '../../relay/environment';

import TodoList from './TodoList';

const TodoListQueryRenderer = () => {
    return (
        <QueryRenderer
            environment={environment}
            query={graphql`
            query TodoListQueryRendererQuery {
              ...TodoList_query
            }
          `}
            variables={null}
            render={({ error, props }) => {
                if (error) {
                    return (
                        <View>
                            <Text>{error.message}</Text>
                        </View>
                    );
                } else if (props) {
                    return <TodoList query={props} />;
                }
                return (
                    <View>
                        <Text>loading</Text>
                    </View>
                );
            }}
        />
    );
}

export default TodoListQueryRenderer;