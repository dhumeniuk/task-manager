import { resolvers, tasks } from '../resolvers';

describe('Task Resolvers', () => {
  const initialTasks = [
    { id: '1', title: 'Test Task 1', completed: false },
    { id: '2', title: 'Test Task 2', completed: true },
  ];

  beforeEach(() => {
    // Reset tasks before each test to ensure isolation
    tasks.splice(0, tasks.length);
    initialTasks.forEach(task => tasks.push({ ...task }));
  });

  it('should return all tasks', () => {
    const result = resolvers.Query.tasks();
    expect(result).toEqual(tasks);
  });

  it('should return a task by ID', () => {
    const result = resolvers.Query.task(null, { id: '1' });
    expect(result).toEqual({ id: '1', title: 'Test Task 1', completed: false });
  });

  it('should add a new task', () => {
    const newTaskTitle = 'New Test Task';
    const result = resolvers.Mutation.addTask(null, { title: newTaskTitle });
    expect(result.title).toBe(newTaskTitle);
    expect(result.completed).toBe(false);
    expect(tasks.length).toBe(3);
    expect(tasks[2].title).toBe(newTaskTitle);
  });

  it('should toggle task completion', () => {
    const taskId = '1';
    const result = resolvers.Mutation.toggleTask(null, { id: taskId });
    expect(result).not.toBeNull();
    expect(result?.completed).toBe(true);
  });

  it('should delete a task', () => {
    const taskId = '1';
    const initialLength = tasks.length;
    const deletedTask = resolvers.Mutation.deleteTask(null, { id: taskId });
    expect(deletedTask).not.toBeNull();
    expect(tasks.length).toBe(initialLength - 1);
    expect(tasks.find(task => task.id === taskId)).toBeUndefined();
  });

  it('should return null if task to delete is not found', () => {
    const taskId = '999';
    const result = resolvers.Mutation.deleteTask(null, { id: taskId });
    expect(result).toBeNull();
  });
});