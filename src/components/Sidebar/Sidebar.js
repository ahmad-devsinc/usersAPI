import { useState } from "react";
import Albums from "../Albums/Albums";
import Posts from "../Posts/Posts";
import Todos from "../Todos/Todos";
import './Sidebar.css';

const Sidebar = () => {
    const [currentTab, setCurrentTab] = useState(0);

    const selectedStyle = {
        color: '#fff',
        backgroundColor: 'skyblue'
    };
    const nonSelectedStyle = {};

    return (
        <div className="sidebar">
            <div className="tabs">
                <div className="title-style" style={(currentTab === 0) ? selectedStyle : nonSelectedStyle} onClick={() => setCurrentTab(0)}>Posts</div>
                <div className="title-style" style={(currentTab === 1) ? selectedStyle : nonSelectedStyle} onClick={() => setCurrentTab(1)}>Todos</div>
                <div className="title-style" style={(currentTab === 2) ? selectedStyle : nonSelectedStyle} onClick={() => setCurrentTab(2)}>Albums</div>
            </div>
            <div className="sidebar-body">
                {(currentTab === 0) ?
                    <div className="posts-block">
                        <Posts />
                    </div> :
                    (currentTab === 1) ?
                        <div className="todos-block">
                            <Todos />
                        </div> :
                        <div className="album-block">
                            <Albums />
                        </div>
                }
            </div>
        </div>
    )
}

export default Sidebar;