function switchStatus(tasks, item) {
  const replacement = tasks.map((t) => {
    if (t.id === item.id) {
      t.done = !t.done;
      return t;
    }
    return t;
  });

  return replacement;
}

function openEditMode(tasks, item) {
  const replacement = tasks.map((t) => {
    if (t.id === item.id) {
      t.editing = !t.editing;
      return t;
    }
    return t;
  });

  return replacement;
}

function changeTaskName(tasks, item) {
  let newValue = document.querySelector(`#taskNewName${item.id}`).value;

  if (!newValue) {
    newValue = item.name;
  }

  const replacement = tasks.map((t) => {
    if (t.id === item.id) {
      t.name = newValue;
      t.editing = !t.editing;
      return t;
    }
    return t;
  });

  return replacement;
}

export { changeTaskName, switchStatus, openEditMode };
