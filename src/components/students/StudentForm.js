import React, {useState} from 'react';
import {connect} from 'react-redux';

import {saveStudent} from '../../store/actions/studentActions';
import {useHistory} from "react-router";

function StudentForm({onSave, item, groups}) {

    const [studentItem, setStudentItem] = useState(item);
    const history = useHistory();

    function onSaveClick(e) {
        e.preventDefault();
        onSave(studentItem);
        history.goBack();
    }

    function onChangeValue(target) {
        console.log('groupId', [target.name], target.value);
        setStudentItem({
            ...studentItem,
            ...{[target.name]: target.value}
        })
    }

    return (
        <form className='form-group'>
            <input className='form-control form-control-lg' type='text'
                   placeholder='name'
                   name='name'
                   value={studentItem.name}
                   onChange={({target})=> onChangeValue(target)}
            />
            {/*<input className='form-control form-control-lg' type='text'*/}
            {/*       placeholder='groupId'*/}
            {/*       name='groupId'*/}
            {/*       value={studentItem.groupId}*/}
            {/*       onChange={({target}) => onChangeValue(target)}*/}
            {/*/>*/}
            <select name='groupId' className='form-control form-control-lg'
                    onChange={({target})=> onChangeValue(target)}>
                <option>{}</option>
                {groups.map(item =>
                    <option key={item.id} value={item.groupId}>{item.name}</option>
                )}
            </select>
            <button className='btn btn-success' onClick={onSaveClick}>Add</button>
        </form>
    );
}

function mapStateToProps({students, groups}, {id}) {
    console.log('students', students.list, 'id', id);
    return {
        item: id !== 'new'
            ? students.list.find(item => item.id == id)
            : {name: '', groupId: ''},
        groups: groups.list
    }
}

const mapDispatchToProps = {
    onSave: saveStudent
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentForm);