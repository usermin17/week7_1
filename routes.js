const express = require('express');
const router = express.Router();
const db = require('./db');

router.get('/courses/:courseId/tasks', async (req, res) => {
    const courseId = req.params.courseId;

    try {
        const tasks = await db.getTasksByCourse(courseId);
        if (!tasks || tasks.length === 0) {
            return res.status(404).json({ message: 'No tasks found for the specified course.' });
        }
        res.json(tasks);
    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.post('/tasks', async (req, res) => {
    const { courseId, taskName, dueDate, additionalDetails } = req.body;

    try {
        const task = await db.createTask(courseId, taskName, dueDate, additionalDetails);
        res.status(201).json(task);
    } catch (error) {
        console.error('Error creating task:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
