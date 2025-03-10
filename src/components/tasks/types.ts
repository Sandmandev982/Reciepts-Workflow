
export interface Task {
  id: string;
  title: string;
  description: string;
  priority: TaskPriority;
  status: TaskStatus;
  dueDate: Date | null;
  dueTime?: string;
  reminderSet?: boolean;
  reminderTime?: string;
  progress?: number;
  assignedTo?: {
    id: string;
    name: string;
    avatar?: string;
    initials: string;
  };
  tags?: string[];
  teamId?: string;
}

export type TaskStatus = 'pending' | 'in-progress' | 'complete';
export type TaskPriority = 'high' | 'medium' | 'low';
