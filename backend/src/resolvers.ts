interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export let tasks: Task[] = [
  { id: '1', title: 'Learn GraphQL', completed: false },
  { id: '2', title: 'Build a Task Manager', completed: false },
];

export const resolvers = {
  Query: {
    tasks: () => tasks,
    task: (parent: any, { id }: { id: string }) => tasks.find(task => task.id === id),
  },
  Mutation: {
    addTask: (parent: any, { title }: { title: string }) => {
      const newTask: Task = {
        id: String(tasks.length + 1),
        title,
        completed: false,
      };
      tasks.push(newTask);
      return newTask;
    },
    toggleTask: (parent: any, { id }: { id: string }) => {
      const task = tasks.find(task => task.id === id);
      if (task) {
        task.completed = !task.completed;
        return task;
      }
      return null;
    },
    deleteTask: (parent: any, { id }: { id: string }) => {
      const index = tasks.findIndex(task => task.id === id);
      if (index > -1) {
        const [deletedTask] = tasks.splice(index, 1);
        return deletedTask;
      }
      return null;
    },
  },
};
