import { Stack } from 'expo-router';

import TaskManager from '@/components/TaskManager';

export default function TaskManagerScreen() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <TaskManager />
    </>
  );
}
