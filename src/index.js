import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render( 
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const FriendsListItem = () => {
//   return friends.map((friend) => {
//     return (
//       <li key = {friend.id} className="item">
//         <span className="status">{friend.isOnline}</span>
//         <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
//         <p className="name">{friend.name}</p>
//       </li>
//     )
//   })
// }

// const FriendsList = () => {return (<ul className="friend-list">
//     <FriendsListItem />
//   </ul>
// )};

// ReactDOM.createRoot(document.getElementById('root')).render(<FriendsList />);