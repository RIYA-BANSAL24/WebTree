import React, { useEffect, useState } from 'react';

const UserProfile = () => {
  const [user, setUser ] = useState(null);

  useEffect(() => {
    // Simulating an API call
    const fetchData = async () => {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      setUser (data.results[0]);
    };

    fetchData();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
  <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg flex items-center">
    <img
      className="w-28 h-28 mr-6"
      src={user.picture.large}
      alt={`${user.name.first} ${user.name.last}`}
    />
    <div>
      <h2 className="text-2xl font-bold">{`${user.name.title} ${user.name.first} ${user.name.last}`}</h2>
      <p className="text-gray-600">{user.gender}</p>
      <p className="text-gray-600">{user.phone}</p>
    </div>
  </div>
</div>
  );
};

export default UserProfile;