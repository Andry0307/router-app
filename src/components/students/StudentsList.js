import React from 'react';
import {connect} from 'react-redux';
import {getGroupToStudent} from '../../store/actions/studentActions'



function StudentsList({studentsList, groupList}) {

    function getGroupName(groupId) {
        let groupName = groupList.find((item)=>{
            return  item.groupId === groupId ;
        });
        return groupName.name || '';
    }
    return (
        <ul className='list-group'>
            {studentsList.map((item)=>
                <li className='list-group-item' key={item.id}>
                    <span>student: {item.name}</span> { }
                    <span>group: {getGroupName(item.groupId)}</span>
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
    getGroup: getGroupToStudent
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentsList);