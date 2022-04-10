import AddTaskForm from './add-tasks-form';
import './tasks.scss';

function Tasks({ lists, onAddTask }) {
    return (
        <div className="tasks">
            <h2 className="tasks__title">
                {lists}
                <img alt="Edit icon" />
            </h2>

            <div className="tasks__items">
                <h2>Задачи отсутствуют</h2>
                <AddTaskForm lists={lists} onAddTask={onAddTask} />
            </div>
        </div>
    );
}

export default Tasks;
