import React, { useState } from 'react'
import TaskList from './TaskList';
import TodoForm from './TodoForm';

function TodoList() {
    const [formData, setFormData] = useState({
        todocontent: "",
        checked: false
    });

    const [submittedData, setSubmittedData] = useState(() => {
        const stored = localStorage.getItem("LocalTodos");
        return stored ? JSON.parse(stored) : [];
    });
    const [editMode, setEditMode] = useState(false);
    const [editIndex, setEditIndex] = useState(null);


    localStorage.setItem("LocalTodos", JSON.stringify(submittedData));


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleDelete = (index) => {

        const check = confirm("Are you sure to delete the task");

        if (check) {
            const filteredData = submittedData.filter((curdata, idx) => {
                return idx !== index;
            })

            setSubmittedData(filteredData)

        }
        else {
            return;
        }
    }

    const handleEdit = (index) => {
        const dataToEdit = submittedData[index];
        setFormData(dataToEdit);
        setEditMode(true);
        setEditIndex(index);
    }

    const handleToggleCheck = (index) => {
        const updatedData = [...submittedData];
        updatedData[index].checked = !updatedData[index].checked;
        setSubmittedData(updatedData);
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if (editMode) {
            const updatedData = [...submittedData];
            updatedData[editIndex] = formData;
            setSubmittedData(updatedData);
            setEditIndex(null);
            setEditMode(false);
        }
        else {
            setSubmittedData([...submittedData, formData]);
        }

        setFormData({
            todocontent: "",
            checked: false
        })
    }


    const handleClearAll = () => {
        const check = confirm("Are you sure to delete all tasks");

        if (check) {
            setSubmittedData([])
        }
        else {
            return;
        }
    }

    localStorage.setItem("LocalTodos", JSON.stringify(submittedData));

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <section
                    className="col-12 col-md-10 col-lg-8 p-4 bg-light"
                    style={{ borderRadius: "10px", boxShadow: "4px 4px 10px rgba(0,0,0,0.1)" }}
                >
                    <header className="mb-4 text-center">
                        <h1 className="h3">TODO List</h1>
                    </header>

                    <TodoForm
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        editMode={editMode}
                        formData={formData}
                    />

                    <TaskList
                        submittedData={submittedData}
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                        handleToggleCheck={handleToggleCheck}
                    />

                    {submittedData.length >= 2 && (
                        <div className="text-center mt-4">
                            <button className="btn btn-danger" onClick={handleClearAll}>
                                Clear All
                            </button>
                        </div>
                    )}
                </section>
            </div>
        </div>
    )
}

export default TodoList
