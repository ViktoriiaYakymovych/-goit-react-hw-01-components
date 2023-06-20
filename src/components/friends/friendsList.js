import PropTypes from 'prop-types';
import { FriendsListItem } from "./friendsListItem";


export const FriendsList = ({ friends }) => {
    return (
    <ul className="friendList">
        {friends.map(friend => (
        <FriendsListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
        />
        ))}
    </ul>
    );
};

FriendsList.propTypes = {
    friends: PropTypes.array.isRequired,
}