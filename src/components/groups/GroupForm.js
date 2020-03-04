import React, {useState} from 'react';
import {connect} from 'react-redux';

import {saveGroup} from '../../store/actions/groupActions'
import {useHistory} from "react-router-dom";

function GroupForm({item, onSave}) {

    const [groupItem, setGroupItem] = useState(item);

    const  history  = useHistory();

    function onSaveClick(e) {
        e.preventDefault();
        onSave(groupItem);
        history.goBack();
    }

    function onChangeValue(target) {
        setGroupItem({
            ...groupItem,
            ...{[target.name]: target.value}
        })
    }

    return (
        <form className='form-group add-group'>
            <input className='form-control form-control-lg' type='text'
                   placeholder='name'
                   name='name'
                   value={groupItem.name}
                   onChange={({target})=> onChangeValue(target)}
            />
            <button className='btn btn-success float-right' onClick={onSaveClick}>Add</button>
        </form>
    );
}

function mapStateToProps({groups},{id}) {
    console.log('groups', groups.list);
    return {
        item: id !== 'new'
        ? groups.list.find(item => item.id == id)
        : { name: '', groupId: ''}

    }
}

const mapDispatchToProps = {
    onSave: saveGroup
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupForm);