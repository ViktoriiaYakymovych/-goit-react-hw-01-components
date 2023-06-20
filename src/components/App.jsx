import user from 'path/user.json';
import { Profile } from './profile/profile';

import data from 'path/data.json';
import { Statistics } from './statistic/statistic';

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
        stats={user.stats}
    />
    <Statistics title='Upload stats' datas={data}/>
        {/* <FriendListItem friends={Friends} />
        <TransactionHistory items={Transactions} /> */}
    </>
    );
};