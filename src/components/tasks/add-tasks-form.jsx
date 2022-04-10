import React, { useState } from 'react';
import addSvg from '../../assets/img/add-task.svg';

function AddTaskForm({ lists, onAddTask }) {

    const [visibleForm, setVisibleForm] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const handleVisibleForm = () => {
        setVisibleForm(!visibleForm);
        setInputValue('');
    };
    const addTask = () => {
        const obj = {
            "listId": lists.id,
            "text": inputValue,
            "completed": false
        }
        onAddTask(lists.id, obj)
        handleVisibleForm();
    };

    return (
        <div className="tasks__form">
            {!visibleForm ?
                (
                    <div onClick={handleVisibleForm} className='tasks__form-new'>
                        <img src={addSvg} alt="Добавить" />
                        <span >Новая задача</span>
                    </div>
                ) :
                (
                    <div className="tasks__form-block">
                        <input
                            value={inputValue}
                            className="field"
                            type="text"
                            placeholder="Текст задачи"
                            onChange={e => setInputValue(e.target.value)}
                        />
                        <button onClick={addTask} className="button">
                            Добавить задачу
                        </button>
                        <button onClick={handleVisibleForm} className="button button--grey">Отмена</button>
                    </div>
                )}
        </div>
    );
}

export default AddTaskForm;
