import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { MdDelete, MdEdit } from 'react-icons/md';

function TaskList({ submittedData, handleDelete, handleEdit, handleToggleCheck }) {
    return (
        <section className='container px-0'>
            <ul style={{ listStyleType: "none", padding: 0 }}>
                {submittedData.map((curTask, idx) => (
                    <li
                        className='row g-0 p-3 my-3 mx-1 border bg-white align-items-center'
                        style={{ borderRadius: "15px", boxShadow: "4px 4px 10px rgba(0,0,0,0.1)" }}
                        key={idx}
                    >
                        <div
                            className="col-12 col-md-8 mb-2 mb-md-0"
                            style={{ textDecoration: curTask.checked ? "line-through" : "none", wordBreak: "break-word" }}
                        >
                            {curTask.todocontent}
                        </div>
                        <div className="col-12 col-md-4 d-flex justify-content-md-end gap-2">
                            <button
                                className='btn btn-sm btn-outline-success'
                                title="Mark as Done"
                                onClick={() => handleToggleCheck(idx)}
                            >
                                <FaCheck />
                            </button>
                            <button
                                className='btn btn-sm btn-outline-primary'
                                title="Edit"
                                onClick={() => handleEdit(idx)}
                            >
                                <MdEdit />
                            </button>
                            <button
                                className='btn btn-sm btn-outline-danger'
                                title="Delete"
                                onClick={() => handleDelete(idx)}
                            >
                                <MdDelete />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default TaskList;
