import TopBar from "./TopBar";
import Content from "./Content";
import BottomBar from "./BottomBar";

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