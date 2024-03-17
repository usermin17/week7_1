document.getElementById('taskForm').addEventListener('submit', addTask);

function addTask(event) {
    event.preventDefault();

    const courseId = document.getElementById('courseId').value;
    const taskName = document.getElementById('taskName').value;
    const dueDate = document.getElementById('dueDate').value;
    const additionalDetails = document.getElementById('additionalDetails').value;

    const taskData = {
        courseId: courseId,
        taskName: taskName,
        dueDate: dueDate,
        additionalDetails: additionalDetails
    };

    // Send task data to backend (not implemented here)
    console.log(taskData);

    // Clear form fields
    document.getElementById('courseId').value = '';
    document.getElementById('taskName').value = '';
    document.getElementById('dueDate').value = '';
    document.getElementById('additionalDetails').value = '';
}
