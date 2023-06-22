import user from 'path/user.json';
import { Profile } from './Profile/Profile';

import data from 'path/data.json';
import { Statistics } from './Statistic/Statistic';

import friends from 'path/friends.json';
import { FriendsList } from './Friends/FriendsList/FriendsList.jsx'

import transactions from 'path/transactions.json';
import { TransactionHistory } from './Transaction/TransactionHistory';


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