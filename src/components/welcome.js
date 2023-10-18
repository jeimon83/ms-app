
import React from 'react';
import { useEffect } from 'react';

function Welcome() {

  const userStorage = JSON.parse(localStorage.getItem('user'));
  
  useEffect(() => {
    if (localStorage.getItem("reload") === "1") {
      window.location.reload();
    }
    localStorage.setItem("reload", 0);
  }, []);

  return (
    <section className="section">
      <div className="box">
        <h2 className="title">Welcome {userStorage.email}</h2>
      </div>
    </section>
  );
}

export default Welcome;