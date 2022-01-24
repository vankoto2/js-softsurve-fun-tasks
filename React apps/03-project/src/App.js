import React, { useState } from "react";

import UserList from "./components/UserList/UserList";

function App() {
  const [users, setUsers] = useState([
    { id: 1, userName: "Ivan Georgiev", age: 33 },
    { id: 2, userName: "Stanislav Monev", age: 36 },
    { id: 3, userName: "Julian Vatkovski", age: 34 },
  ]);

  return (
    <div>
      <UserList users={users}></UserList>
    </div>
  );
}

export default App;
