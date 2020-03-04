import React from 'react';
import {connect} from 'react-redux';
import {Link, useRouteMatch} from "react-router-dom";

import {searchStudent, deleteStudent} from '../../store/actions/studentActions';



function StudentsList({studentsList, groupList, search, onSearch, onDelete}) {

    const {url} = useRouteMatch();

    function onDeleteStudent(e, id) {
        e.preventDefault();
        onDelete(id)
    }
    
    function getGroupName(groupId) {
        let group = groupList.find((item)=>{
            return  item.groupId === groupId ;
        });
        return group ? group.name : '';
    }
    return (
        <ul className='list-group'>
            <h2>students of all groups </h2>
            <form className='d-inline-flex'>
                <input className='form-control form-control-lg'  type='text' placeholder='search'
                       value={search}
                       onChange={({target})=> onSearch(target.value)}
                />
                <Link to={`${url}/new`}>
                    <button className='btn btn-success add-new'>Add</button>
                </Link>
            </form>
            {studentsList.map((item)=>
                <li className='list-group-item' key={item.id}>
                    <span><b>name:</b> {item.name}</span> <br/>
                    <span><b>group:</b> {getGroupName(item.groupId)}</span>
                    <form className='float-right'>
                        <Link to={`${url}/${item.id}`}>
                        <button className='btn btn-secondary'>Edit</button>
                        </Link>
                        <button className='btn btn-danger' onClick={(e)=>onDeleteStudent(e, item.id)}>delete</button>
                    </form>
                </li>
            )}
        </ul>
    );
}

function mapStateToProps({students, groups}) {
    return {
        studentsList: students.list.filter(item=>{
            return  item.name.toUpperCase().includes(students.search.toUpperCase())
        }),
        groupList: groups.list,
        search: students.search
    }
}

const mapDispatchToProps = {
    onSearch: searchStudent,
    onDelete: deleteStudent
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentsList);