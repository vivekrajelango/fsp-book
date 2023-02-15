import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import data from "../data";
import { addItem } from "../Redux/Reducers/user";

const Post=()=>{
    const postRef = useRef(null);
    const navigate = useNavigate();
    const [dropDown, setDropDown] = useState(data);
    const dispatch = useDispatch();
    const [listItems, setListItems] = useState([]);
    const [form, setForm] = useState({
        id: '',
        comments: ''
    })
    // console.log('xx', list)
    const handleSubmit=(e)=>{
        e.preventDefault();
        const newData = [...data];
        const filterVal = newData.filter((item)=>item.id==form.id);
        // listItems.push(newVal, form.comments)
        const val = filterVal.reduce((prev,curr, i)=>{
            prev[i] = curr
            return prev
        }, {})
        const comments = form.comments;
        const timestamp = new Date();
        const date = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp);
        const newVal = {...val[0], comments, date}
        dispatch(addItem(newVal));
        postRef.current.style.display = 'block'
        const showToast = document.getElementById('liveToast');
        showToast.classList.add('show');
        setTimeout(()=>{
            navigate('/')
        },3000)
        // 
        // listItems.push(newVal);
        // localStorage.setItem('items', JSON.stringify(listItems));
    }

    const changeHandler=(e)=>{
        const {name, value} = e.target;
        setForm({...form, [name]: value});
    }

    return(
        <div>
            <h1 className="text-center">Create Post</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <p>Post on behalf of: </p>
                    <select onChange={changeHandler} name="id">
                    {dropDown.length 
                        ? dropDown.map((item, index)=>{
                           return <option key={index} value={item.id}>{item.firstName} {item.lastName}</option>
                        })
                        : ''}
                    </select>
                </div>
                <div className="my-3">
                    <p>What's on your mind?</p>
                    <textarea rows='4' name="comments" cols='50' onChange={changeHandler}>
                    </textarea>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary px-4">Post</button>
                </div>
                <div className="toast-container position-fixed top-0 end-0 p-3" style={{display:'none'}} ref={postRef}>
                    <div id="liveToast" className="toast bg-danger text-white" role="alert" aria-live="assertive" aria-atomic="true">
                        <div className="toast-header">
                        <strong className="me-auto">Message </strong>
                        <small>2 seconds ago</small>
                        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div className="toast-body">
                        Hello, your message has been successfully posted!!!.
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Post;