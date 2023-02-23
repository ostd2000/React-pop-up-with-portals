import { useState } from "react";
import "./App.css";

import PopupC from "./PopupC";

function App() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="app">
            <button className="app_btn" onClick={() => setIsOpen(true)}>
                Open pupup
            </button>

            <PopupC id="popup" isOpen={isOpen}>
                <div className="app_popup">
                    <div className="app_popup-title">What a pop up !</div>

                    <div className="app_popup-description">
                        This is for testing purposes.
                    </div>

                    <button onClick={() => setIsOpen(false)}>
                        Close pop up
                    </button>
                </div>
            </PopupC>
        </div>
    );
}

export default App;
