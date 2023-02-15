import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import moment from 'moment';

const Profile=()=>{
    const getList = useSelector((state)=>state.user.getList);
    const getNewList = useSelector((state)=>state.user.list);
    
    const params = useParams();
    const [id, setId] = useState(params.id);
    const [profile, setProfile] = useState();
    
    useEffect(()=>{
        const consolidated = [...getList, ...getNewList];
        const newVal = consolidated.filter((item)=>item.id==id.replace(/:/,''));
        const sortedVal = newVal.sort((a,b)=>{
            return new Date(b.date) - new Date(a.date)
        })
        setProfile(sortedVal);
        // console.log('xxy',newVal);
    },[])
    // console.log('xx',param.id )
    return(
        <div className="m-3 col-sm-3">
            {
                profile?.length ? 
                    profile.map((item,index)=>{
                        return <div key={index} className="card text-center my-5">
                            <div className="card-header">
                            {item.firstName} {item.lastName}
                            </div>
                            <div className="card-body">
                            <h5 className="card-title">{item.jobTitle}</h5>
                            <p className="card-text">{item.comments}</p>
                            </div>
                            <div className="card-footer text-muted">
                            {moment(new Date(item.date)).fromNow()}
                            </div>
                      </div>
                    }) : 'No record found'
            }
        </div>
    )
}

export default Profile