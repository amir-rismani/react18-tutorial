import "./NoteItems.css"
import { TfiTrash } from "react-icons/tfi";

const NoteItems = () => {
    return (
        <div className="note-items">
            <div className="states">
                <div className="state-item">All <span className="badge">2</span></div>
                <div className="state-item">Completed <span className="badge">1</span></div>
                <div className="state-item">Open <span className="badge">1</span></div>
            </div>
            <div className="notes">
                <div className="note">
                    <div className="note__content">
                        <div className="meta">
                            <h3>title</h3>
                            <span className="description">description</span>
                        </div>
                        <div className="action">
                            <TfiTrash style={{ color: 'red' }} />
                            <input type="checkbox" name="" id="" />
                        </div>
                    </div>
                    <div className="note__footer">                        july 21, 2023
                    </div>
                </div>
                <div className="note">
                    <div className="note__content">
                        <div className="meta">
                            <h3>title</h3>
                            <span className="description">description</span>
                        </div>
                        <div className="action">
                            <TfiTrash style={{ color: 'red' }} />
                            <input type="checkbox" name="" id="" />
                        </div>
                    </div>
                    <div className="note__footer">                        july 21, 2023
                    </div>
                </div>
                <div className="note">
                    <div className="note__content">
                        <div className="meta">
                            <h3>title</h3>
                            <span className="description">description</span>
                        </div>
                        <div className="action">
                            <TfiTrash style={{ color: 'red' }} />
                            <input type="checkbox" name="" id="" />
                        </div>
                    </div>
                    <div className="note__footer">
                        july 21, 2023
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NoteItems;