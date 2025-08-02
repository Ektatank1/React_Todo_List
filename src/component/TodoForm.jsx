import React from 'react'

function TodoForm({ handleChange, handleSubmit, editMode, formData }) {
    return (
        <section>
            <form className="d-flex flex-column flex-md-row align-items-stretch gap-2 mb-4" onSubmit={handleSubmit}>
                <div className="flex-grow-1">
                    <input
                        style={{ borderRadius: "10px", boxShadow: "2px 2px 5px rgba(0,0,0,0.1)" }}
                        type="text"
                        name="todocontent"
                        className="form-control"
                        placeholder="Enter Task"
                        value={formData.todocontent}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <button type="submit" className="btn btn-success w-100">
                        {editMode ? "Update Task" : "Add Task"}
                    </button>
                </div>
            </form>
        </section>

    )
}

export default TodoForm
