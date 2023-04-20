import { UserOutlined } from '@ant-design/icons';
import { Avatar } from "antd"
const LeftSide = () => {
    return (
        <div className='left-side'>
            <div className='user'>
                <Avatar size={60} icon={<UserOutlined/>} style={{background:"#bfbfbf"}}/> 
                Admin
            </div>
            <div className='setting-icon ticket'>
                <i class="fa-solid fa-ticket-simple"></i>
                <span>Setting Fee</span>
            </div>
            <div className='setting-icon'>
                <i className="fa-solid fa-gear"></i>
                <span>Setting Fee Receiver</span>
            </div>
            <div className='setting-icon'>
                <i className="fa-solid fa-gear"></i>
                <span>Log Out</span>
            </div>
        </div>
    )
}
export default LeftSide;