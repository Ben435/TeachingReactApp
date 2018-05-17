const express = require('express');

const app = express();
const port = 5000;

const students = [
    {
        student_id: "12345678",
        name: "abob",
        course: "arts"
    },{
        student_id: "22345678",
        name: "bbob",
        course: "barts"
    },{
        student_id: "32345678",
        name: "cbob",
        course: "carts"
    },{
        student_id: "42345678",
        name: "dbob",
        course: "darts"
    },{
        student_id: "52345678",
        name: "ebob",
        course: "earts"
    }
];

app.get('/api/students', (req, res) => {
    res.send({students: students});
});

app.listen(port, () => console.log(`Listening on port ${port}`));