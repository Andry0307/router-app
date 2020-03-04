import React from 'react';
import {connect} from 'react-redux';
import {searchGroup, deleteGroup} from '../../store/actions/groupActions';
import {deleteGroupStudent} from '../../store/actions/studentActions';
import {Link, useRouteMatch} from "react-router-dom";

function Groups({groupList, search, onSearch, deleteGroupItem, deleteStudent, studentsList}) {

    const { url } = useRouteMatch();

    function onDeleteGroup(e, item) {
        e.preventDefault();
        deleteGroupItem(item.id);
        deleteStudent(item.groupId);
    }

    function getAmountStudent(group) {
        let amount = studentsList.filter(item => {
            return  item.groupId === group.groupId
        });

        return amount.length;
    }

    return (
            <ul className='list-group'>
                <h2>school groups</h2>
                <form className='d-inline-flex'>
                    <input className='form-control form-control-lg' type='text' placeholder='search'
                           value={search}
                           onChange={({target})=> onSearch(target.value)}
                    />
                    <Link to={`${url}/new`}>
                        <button className='btn btn-success add-new'>Add</button>
                    </Link>
                </form>
                {groupList.map((item)=>
                    <li className='list-group-item' key={item.id}>
                        <span>{item.name} { } ( {getAmountStudent(item)}  ) </span>
                        <form className='float-right'>
                        <Link to={`${url}/${item.id}`}>
                            <button className='btn btn-secondary'>Edit</button>
                        </Link>
                            <button className='btn btn-danger' onClick={(e)=>{onDeleteGroup(e, item)}}>Delete</button>
                        </form>
                    </li>)}
            </ul>
    );
}

function mapStateToProps({groups, students}) {
    return {
        groupList: groups.list.filter(item => {
            return  item.name.toUpperCase().includes(groups.search.toUpperCase())
        }),
        studentsList: students.list,
        search: groups.search
    }
}

const mapDispatchToProps = {
    onSearch: searchGroup,
    deleteGroupItem: deleteGroup,
    deleteStudent: deleteGroupStudent
};

export default connect(mapStateToProps, mapDispatchToProps)(Groups);