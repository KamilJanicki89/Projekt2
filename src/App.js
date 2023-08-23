import logo from './logo.svg';
import './App.css';
import {StreamChat} from "stream-chat";
import {Chat} from "stream-chat-react";
import Cookies from "universal-cookie";

const apiKey='8ycwk57wmbs6';
const client =StreamChat.getInstance(apiKey)
function App() {
  return (
    <div className="app_inside">
      <Chat client={client} theme={"team light"}>
        <ChannelListContainer/>
        <ChanelContainer/>
      </Chat>
    </div>
  );
}
export default App;
