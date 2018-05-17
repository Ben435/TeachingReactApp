
class StudentService {
    static getStudents = async () => {
        const response = await fetch('/api/students');
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        return body;
    };
}

export default StudentService;