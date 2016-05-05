import React from 'react';

class TodosListHeader extends React.Component {
    render() {
        return (
            <thead>
                <tr>
                    <th>Tarea</th>
                    <th>Acción</th>
                </tr>
            </thead>
        );
    }
}

export default TodosListHeader;