import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import dummyData from "../dummyData";
import { consolidatedList, getItem } from "../Redux/Reducers/user";
import moment from 'moment';


const Home=()=>{
    const dispatch = useDispatch();
    const getList = useSelector((state)=>state.user.getList);
    const getNewList = useSelector((state)=>state.user.list);
    const [sortData, setSortData] = useState([]);
    const [data, setData] = useState(dummyData);
    const [news, setNews] = useState();

    // const [newData, setNewData] = useState();
    // const [list, setList] = useState();

    useEffect(()=>{
        dispatch(getItem(data))
        if(getList.length){
            const mergerData = [...getList, ...getNewList];
            const sortedVal = mergerData.sort((a,b)=>{
                return new Date(b.date) - new Date(a.date)
            })
            setSortData(sortedVal);
            // dispatch(consolidatedList(sortData))
            // console.log('xx', sortedVal)
        }
    },[data])

    useEffect(()=>{ 
        fetch('https://api.thenewsapi.com/v1/news/top?api_token=srWMAUnuzQ2FmrvQci5dQCuODqbbVbHO2aPIz1qm')
            .then(res=>res.json())
            .then(res=>{  console.log('news', res.data)
                setNews(res.data)
            });
    },[])
    
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm-3">
                    {/* {news? news.map((item, index)=><div key={index}>{item.title}</div>) : 'Loading...'} */}
                    {news? news.map((item, index)=>{
                        return <div className="card" key={index}>
                        <div className="card-header">
                            <span className="text-left">
                                <a href={item.url} target="_blank">
                                    {item.title}
                                </a>  <br />
                            {moment(new Date(item.published_at)).fromNow()}

                                {/* {item.published_at} */}
                            </span>

                        </div>
                        <div className="card-body">
                            <img src={item.image_url} alt="newsimage" height="50" width="50" />
                            {item.description}
                        </div>
                    </div>
                    }) : 'Loading...'}

                </div>
                {/* <div className="col-sm-1"></div> */}
                <div className="col-sm-9">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <td>Full Name</td>
                                <td>Title</td>
                                <td>Comments</td>
                                <td>Date</td>
                            </tr>
                        </thead>
                        <tbody>
                            {sortData ? 
                                sortData.map((item,index)=>{
                                    return <tr key={index}>
                                        <td>
                                            <Link to={'/profile/:'+item.id}>
                                                {item.firstName} {item.lastName}
                                            </Link>
                                        </td>
                                        <td>{item.jobTitle}</td>
                                        <td>{item.comments}</td>
                                        <td>{moment(new Date(item.date)).fromNow()}</td>
                                    </tr>
                                }) 
                                : getList.map((item,index)=>{
                                    return <tr key={index}>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.jobTitle}</td>
                                        <td>{item.comments}</td>
                                        <td>{moment(new Date(item.date)).fromNow()}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home