class Task {
  static incrementValue = 0;

  constructor(item) {
    this.name = item.name;
    this.done = false;
    this.id = Task.incrementValue++;
    this.editing = false;
  }
}

export default Task;
