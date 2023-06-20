import user from 'path/user.json';
import { Profile } from './profile/profile';

import data from 'path/data.json';
import { Statistics } from './statistic/statistic';

import friends from 'path/friends.json';
import { FriendsList } from './friends/friendsList';

import transactions from 'path/transactions.json';
import { TransactionHistory } from './transaction/transactionHistory';


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
    <FriendsList friends={friends} />
    <TransactionHistory items={transactions} />
    </>
    );
};