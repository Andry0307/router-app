import React from 'react';
import {connect} from 'react-redux';
import {Link, useRouteMatch} from "react-router-dom";



function StudentsList({studentsList, groupList}) {

    const {url} = useRouteMatch();
    
    function getGroupName(groupId) {
        let groupName = groupList.find((item)=>{
            return  item.groupId === groupId ;
        });
        return groupName.name;
    }
    return (

        <ul className='list-group'>
            <form className='d-inline-flex'>
                <input className='form-control form-control-lg'  type='text' placeholder='search'/>
                <Link to={`${url}/new`}>
                    <button className='btn btn-success add-new'>Add</button>
                </Link>
            </form>
            {studentsList.map((item)=>
                <li className='list-group-item' key={item.id}>
                   <Link to={`${url}/${item.id}`}>
                       <span>student: {item.name}</span> { }
                       <span>group: {getGroupName(item.groupId)}</span>
                   </Link>

                </li>
            )}
        </ul>
    );
}

function mapStateToProps({students, groups}) {
    return {
        studentsList: students.list,
        groupList: groups.list
    }
}

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(StudentsList);