# Task Management Dashboard (Angular 16)

This is a simple and responsive **Task Management Dashboard** built with **Angular 16**, **Bootstrap**, and **ng-bootstrap**. The app uses a **Kanban-style board** with columns for **To Do**, **In Progress**, and **Done** tasks.

## ✨ Features

- 📝 View tasks categorized in a 3-column Kanban board
- ➕ Add new tasks using a modal form
- 🔄 Drag & drop tasks between statuses
- 🔌 API integration with [JSONPlaceholder Todos](https://jsonplaceholder.typicode.com/todos)
- ✅ Responsive layout using Bootstrap 5

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- Angular CLI

### Installation

```bash
git clone https://github.com/nadeem-github/TaskManagementDashboard.git
cd task-dashboard
npm install
ng serve

### Project Structure
src/
│
├── app/
│   ├── pages/
│   │   └── board/         → Kanban board UI
│   ├── services/
│   │   └── task.service.ts → API calls and task data
│
├── assets/
├── environments/


### Architecture & Approach
Component-based design: Clean separation of the board UI and task service logic
Reactive Forms: Used for task creation form
CDK Drag & Drop: Provides native drag & drop experience
Service abstraction: Handles all data interactions with API

### Technologies 
Angular 16
ng-bootstrap
Angular CDK (DragDropModule)
JSONPlaceholder API


---

### ✅ 2. `SELF-EVALUATION.md`

### 📄 `SELF-EVALUATION.md`

```markdown
### Self-Evaluation – Task Management Dashboard

### 📃 Half-Page Summary

The Task Management Dashboard is an Angular 16 project that allows users to view, add, and organize tasks in a Kanban-style board. The app fetches tasks from a mock API and supports drag-and-drop functionality using Angular CDK. The task creation uses a reactive form inside a Bootstrap modal. The dashboard is responsive and provides a clean, minimal UI using Bootstrap.

### ✅ What went well:

- Seamless drag-and-drop functionality with CDK
- Clean form handling using Angular ReactiveForms
- Reusable service for all task-related API calls
- Easy-to-use and responsive layout with Bootstrap

### What could be better:

- JSONPlaceholder API doesn't support full persistence (used mock PATCH logic)
- No edit/delete functionality implemented
- No unit testing included

---

### Self-Criticism

- The project doesn’t implement full CRUD (no edit or delete options)
- The use of a fake API means status updates are simulated, not persistent
- Lack of UI feedback (e.g., toasts, loading indicators)
- Could have added model classes or enums to enforce consistency

---

### Improvements with More Time

- Implement full CRUD with a real backend (like Firebase or Express+MongoDB)
- Add task editing inline or in a modal
- Show toast messages for actions (using ng-bootstrap toast)
- Include unit and integration tests (Jasmine/Karma)
- Add pagination or filters for long task lists

---

### Technology Rating

| Technology        | Rating (out of 10) |
|-------------------|--------------------|
| Angular 16        | 7                  |
| Bootstrap         | 9                  |
| ng-bootstrap      | 9                  |
| Angular CDK DnD   | 9                  |
| API Integration   | 7                  |
