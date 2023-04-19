import { Button } from "antd";
import { Header } from "antd/es/layout/layout";


const SideRight = () => {
    return (
        <div>
            <Header className="header">
                <h1>Fee Setting</h1>
            </Header>

            <div className="content-side-right">
                <div className="btn-token">
                    <button>LP Token</button>
                    <button>Standard Token</button>
                </div>
                <div className="convert-fee">
                    <div>
                        <span className="title">Unlock Early Fees:</span>
                        <input className="input-token"/> <span className="text-token">%Token</span>
                        <input className="input-bnb"/> <span className="text-bnb">BNB</span>
                    </div>
                    <div>
                        <span className="title">Withdraw Fees:</span>
                        <input className="input-token"/> <span className="text-token">%Token</span>
                        <input className="input-bnb"/> <span className="text-bnb">BNB</span>
                    </div>
                    <div>
                        <span className="title">Relock Fees:</span>
                        <input className="input-token"/> <span className="text-token">%Token</span>
                        <input className="input-bnb"/> <span className="text-bnb">BNB</span>
                    </div>
                    <div>
                        <span className="title">Increase Lock Fees:</span>
                        <input className="input-token"/> <span className="text-token">%Token</span>
                        <input className="input-bnb"/> <span className="text-bnb">BNB</span>
                    </div>
                    <div>
                        <span className="title">Lock Fees:</span>
                        <input className="input-token"/> <span className="text-token">%Token</span>
                        <input className="input-bnb"/> <span className="text-bnb">BNB</span>
                    </div>
                </div>

                <Button type="primary" disabled>Update</Button>
            </div>
        </div>
    )
}
export default SideRight;