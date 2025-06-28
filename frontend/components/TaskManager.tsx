import React from 'react';
import { gql, useQuery, useMutation } from '@apollo/client';
import { View, Text, FlatList, Button, TextInput, StyleSheet } from 'react-native';

// GraphQL Queries and Mutations
const GET_TASKS = gql`
  query GetTasks {
    tasks {
      id
      title
      completed
    }
  }
`;

const ADD_TASK = gql`
  mutation AddTask($title: String!) {
    addTask(title: $title) {
      id
      title
      completed
    }
  }
`;

const TOGGLE_TASK = gql`
  mutation ToggleTask($id: ID!) {
    toggleTask(id: $id) {
      id
      title
      completed
    }
  }
`;

const DELETE_TASK = gql`
  mutation DeleteTask($id: ID!) {
    deleteTask(id: $id) {
      id
    }
  }
`;

// Task Item Component
interface Task {
  id: string;
  title: string;
  completed: boolean;
}

const TaskItem = ({ task }: { task: Task }) => {
  const [toggleTask] = useMutation(TOGGLE_TASK, {
    refetchQueries: [{ query: GET_TASKS }],
  });
  const [deleteTask] = useMutation(DELETE_TASK, {
    refetchQueries: [{ query: GET_TASKS }],
  });

  return (
    <View style={styles.taskItem}>
      <Text
        style={[styles.taskTitle, task.completed && styles.completedTask]}
        onPress={() => toggleTask({ variables: { id: task.id } })}
      >
        {task.title}
      </Text>
      <Button title="Delete" onPress={() => deleteTask({ variables: { id: task.id } })} />
    </View>
  );
};

// TaskManager Component
const TaskManager = () => {
  const { loading, error, data } = useQuery(GET_TASKS);
  const [addTask] = useMutation(ADD_TASK, {
    refetchQueries: [{ query: GET_TASKS }],
  });
  const [newTaskTitle, setNewTaskTitle] = React.useState('');
  const [inputError, setInputError] = React.useState('');

  const validateInput = (title: string) => {
    if (!title.trim()) {
      setInputError('Task title cannot be empty.');
      return false;
    }
    setInputError('');
    return true;
  };

  const handleAddTask = () => {
    if (validateInput(newTaskTitle)) {
      addTask({ variables: { title: newTaskTitle.trim() } });
      setNewTaskTitle('');
    }
  };

  if (loading) return <Text>Loading tasks...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Manager</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add new task"
          value={newTaskTitle}
          onChangeText={(text) => {
            setNewTaskTitle(text);
            if (inputError) validateInput(text);
          }}
        />
        <Button
          title="Add Task"
          onPress={handleAddTask}
          disabled={!newTaskTitle.trim()}
        />
      </View>
      {inputError ? <Text style={{ color: 'red', marginBottom: 10 }}>{inputError}</Text> : null}
      <FlatList
        data={data.tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskItem task={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  taskTitle: {
    fontSize: 18,
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
});

export default TaskManager;
