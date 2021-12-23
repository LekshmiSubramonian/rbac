import React,{useEffect} from 'react'
import './ViewAsset.css'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

function ViewAsset() {


    const toogleState = useSelector(state => state.toogleState)

    useEffect(() => {
        let cls=document.getElementsByClassName('view-asset')[0];
        if(toogleState){
            cls.style.left="260px";
            cls.style.transition="all 0.5s ease";
            cls.style.width="calc(100% - 260px)";
        }
        if(!toogleState){
            cls.style.left="68px"
            cls.style.width="calc(100% - 68px)";
        }
    }, [toogleState])

    return (
        <div className='view-asset'>
            <div className='create-asset'>
                <Link className='btn btn-success' to='/createasset'>Add
                    {/* <a className='btn btn-success'>Add</a> */}
                </Link>
            </div>
            <table className='table'>
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Code</th>
                    <th scope="col">Entity Type</th>
                    <th scope="col">Entity Name</th>
                    <th scope="col">Previleges</th>
                    <th scope="col">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td><button className='btn btn-primary' >Add Previlege</button></td>
                    <td><button className='btn btn-danger'>Delete</button></td>
                    </tr>
                </tbody>
            </table>

            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Understood</button>
                        </div>
                    </div>
                </div>
            </div>


            {/* <form className='previlege close' id='previlege'>
                <h3>Add Previleges</h3>
                <div className="form-group">
                    <label>Entity ID</label>
                    <input type="text" className="form-control" id="enid" placeholder="Enter entity ID"/>
                </div>
                <div className="form-group">
                    <label>Feature</label>
                    <input type="text" className="form-control" id="feature" placeholder="Feature"/>
                </div>
                <div className="form-group">
                    <label>Functions</label>
                    <input type="text" className="form-control" id="functions" placeholder="Functions"/>
                </div>
                <div className='btns'>
                    <button type="button" className="btn btn-success">Create</button>
                </div>
            </form> */}
        </div>
    )
}

export default ViewAsset
