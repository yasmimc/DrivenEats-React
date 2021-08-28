import TopBar from "./TopBar";
import Content from "./Content";
import BottomBar from "./BottomBar";

import "../css/reset.css";
import "../css/style.css";

export default function App() {
    return (
        <div>
            <TopBar />
            <Content />
            <BottomBar />
            <div className="confirmation-screen disabled"></div>
        </div>
    );
}