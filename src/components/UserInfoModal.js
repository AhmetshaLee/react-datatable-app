import React from 'react';

const UserModal = ({ user, closeModal }) => {
  return (
    <div className="modal" style={{ display: 'block', textAlign: 'left' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Профиль</h5>
            <button
              type="button"
              className="btn-close"
              onClick={closeModal}
            ></button>
          </div>
          <div className="modal-body">
            <p>
              ФИО: {user.firstName} {user.lastName} {user.maidenName}
            </p>
            <p>Возраст: {user.age}</p>
            <p>Город: {user.address.city}</p>
            <p>Адрес: {user.address.address}</p>
            <p>Рост: {user.height}</p>
            <p>Вес: {user.weight}</p>
            <p>Номер телефона: {user.phone}</p>
            <p>E-mail: {user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
