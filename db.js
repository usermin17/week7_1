const mongoose = require('mongoose');
const Course = require('./models/course');
const Task = require('./models/task');

mongoose.connect('mongodb://localhost:27017/student_tasks', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

async function createTask(courseId, taskName, dueDate, additionalDetails) {
    try {
        const task = new Task({
            courseId: courseId,
            taskName: taskName,
            dueDate: dueDate,
            additionalDetails: additionalDetails
        });
        await task.save();
        return task;
    } catch (error) {
        console.error('Error creating task:', error);
        throw error;
    }
}

async function getTasksByCourse(courseId) {
    try {
        const tasks = await Task.find({ courseId: courseId }).exec();
        return tasks;
    } catch (error) {
        console.error('Error getting tasks by course:', error);
        throw error;
    }
}

module.exports = {
    createTask,
    getTasksByCourse
};
