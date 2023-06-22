import PropTypes from 'prop-types';
import { FriendsListItem } from "../FriendsListItem/FriendsListItem";
import css from './FriendsList.module.css'


export const FriendsList = ({ friends }) => {
    return (
    <ul className={css.friendList}>
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
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    )
}