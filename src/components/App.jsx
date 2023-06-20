import user from 'path/user.json';
import { Profile } from './profile/profile';

// import data from 'path/data.json';
// import { Statistics } from './statistic/statistic';

// import friends from 'path/friends.json';

// import transactions from 'path/transactions.json';


export const App = () => {
    return (
    <>
    <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}/>
        {/* <Profile
        urlAvatar={User.avatar}
        userName={User.username}
        tag={User.tag}
        location={User.location}
        followers={User.stats.followers}
        views={User.stats.views}
        likes={User.stats.likes}
        />
        <Statistics title="Upload stats" stats={Data} />
        <FriendListItem friends={Friends} />
        <TransactionHistory items={Transactions} /> */}
    </>
    );
};