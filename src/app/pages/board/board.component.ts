import { Component } from '@angular/core';
import { Task } from 'src/app/models/task/task.module';
import { TaskService } from 'src/app/services/task.service';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  tasks: Task[] = [];
  todo: Task[] = [];
  inProgress: Task[] = [];
  done: Task[] = [];

  showAddForm = false;
  taskForm!: FormGroup;

  constructor(
    private taskService: TaskService,
    private fb: FormBuilder,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    // Initialize the task form with validation
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      status: ['To Do', Validators.required]
    });

    // Fetch tasks from the API and categorize them
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
      this.categorizeTasks();
    });
  }

  // Categorize tasks by status
  categorizeTasks() {
    this.todo = this.tasks.filter(t => t.status === 'To Do');
    this.inProgress = this.tasks.filter(t => t.status === 'In Progress');
    this.done = this.tasks.filter(t => t.status === 'Done');
  }

  // Add a new task via the form
  addTask(modal: any) {
    if (this.taskForm.invalid) return;

    const newTask: Task = {
      id: 0,
      title: this.taskForm.value.title,
      completed: this.taskForm.value.status === 'Done',
      status: this.taskForm.value.status
    };

    this.taskService.addTask(newTask).subscribe(task => {
      this.tasks.push(task);
      this.categorizeTasks();
      modal.close(); // close the modal
    });
  }

  // Handle drag & drop between columns
  drop(event: CdkDragDrop<Task[]>, newStatus: 'To Do' | 'In Progress' | 'Done') {
    if (event.previousContainer === event.container) return;

    const task = event.previousContainer.data[event.previousIndex];
    task.status = newStatus;
    task.completed = newStatus === 'Done';

    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );

    this.taskService.updateTask(task).subscribe();
  }
  openAddTaskModal(content: any) {
    this.taskForm.reset({ status: 'To Do' });
    this.modalService.open(content, { centered: true });
  }

}
