import { useEffect } from 'react'
import { fetchUsers } from '../redux/user/userActions'
import { useDispatch, useSelector } from 'react-redux'
import "./styles.css"
function UserList() {
    const dispatch = useDispatch();
    const { isLoading, data: users, error } = useSelector(state => state.users)
    useEffect(() => { dispatch(fetchUsers()) }, [dispatch])

    if (isLoading) return <p>Data is loading...</p>
    if (!users.length) return <p>Data not found.</p>
    if (error) return <p>{error}</p>
    return (
        <div className='user-list'>
            {
                users.map(user => <UserItem key={user.id} user={user} />)
            }
        </div>
    )
}

export default UserList

function UserItem({ user }) {
    return (
        <div key={user.id} className='user-list__item'>
            <h2>{user.name} <span className='muted'>@{user.username}</span></h2>
            <p><strong>Company:</strong> <span>{user.company.name}</span></p>
            <p><strong>Email:</strong> <span>{user.email}</span></p>
            <p><strong>Phone:</strong> <span>{user.phone}</span></p>
            <p><strong>Website:</strong> <span>{user.website}</span></p>
        </div>
    )
}