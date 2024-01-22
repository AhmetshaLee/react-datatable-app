import React from 'react';
import { useState, useEffect } from 'react';
import UserModal from './UserInfoModal';

import 'bootstrap/dist/css/bootstrap.min.css';
import './UsersDataTable.css';

function UsersDataTable() {
  const [userList, setUserList] = useState([]);
  const [searchItem, setSearchItem] = useState('');

  const [selectedUser, setSelectedUser] = useState(null);

  const UserRowClick = (user) => {
    setSelectedUser(user);
  };

  const closeModal = () => {
    setSelectedUser(null);
  };

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((res) => res.json())
      .then((data) => setUserList(data.users));
  }, []);

  const searchInTable = (event) => {
    setSearchItem(event.target.value);
    fetch(`https://dummyjson.com/users/search?q=${event.target.value}`)
      .then((res) => res.json())
      .then((data) => setUserList(data.users));
  };

  return (
    <div className="table-container">
      <input
        className="form-control custom-input"
        type="text"
        value={searchItem}
        onChange={searchInTable}
        placeholder="Поиск по пользователям"
      />
      <table className="table table-striped table-bordered custom-table">
        <thead>
          <tr>
            <th>ФИО</th>
            <th>Возраст</th>
            <th>Пол</th>
            <th>Номер телефона</th>
            <th>Адрес</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => (
            <tr key={user.id} onClick={() => UserRowClick(user)}>
              <td>
                {user.firstName} {user.lastName} {user.maidenName}
              </td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.phone}</td>
              <td>
                {user.address.address}, {user.address.city}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedUser && (
        <UserModal user={selectedUser} closeModal={closeModal} />
      )}
    </div>
  );
}

export default UsersDataTable;
