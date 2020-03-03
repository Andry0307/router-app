import React from 'react';
import {connect} from 'react-redux';
import {searchGroup} from '../../store/actions/groupActions';
import {Link, useRouteMatch} from "react-router-dom";

function Groups({groupList, search, onSearch}) {

    const { url } = useRouteMatch();

    return (
            <ul className='list-group'>
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
                        <Link to={`${url}/${item.id}`}>{item.name}</Link>
                    </li>)}
            </ul>
    );
}

function mapStateToProps({groups}) {
    return {
        groupList: groups.list.filter(item => {
            return  item.name.includes(groups.search)
        }),
        search: groups.search
    }
}

const mapDispatchToProps = {
    onSearch: searchGroup
};

export default connect(mapStateToProps, mapDispatchToProps)(Groups);