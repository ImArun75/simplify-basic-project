import React from 'react';

const UserCard = ({ user }) => {
  const avatarUrl = `https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`;

  return (
    <div className="col-md-4 mb-4">
      <div className="card text-center shadow-sm">
        <div className="card-body">
          <img 
            src={avatarUrl} 
            alt={`${user.name}'s avatar`} 
            className="rounded-circle mb-3" 
            style={{ width: '120px', height: '120px', objectFit: 'cover' }}
          />
          <h5 className="card-title">{user.name}</h5>
          <p className="card-text text-muted mb-1">{user.email}</p>
          <p className="card-text">
            <small className="text-muted">
              <strong>Phone:</strong> {user.phone}
            </small>
          </p>
          <p className="card-text">
            <small className="text-muted">
              <strong>Website:</strong> {user.website}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;