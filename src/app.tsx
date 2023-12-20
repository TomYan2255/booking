import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { IRoom } from './component/room';
import styled from 'styled-components';
import RoomAllocation from './component/roomAllocation';
const Home = () => {

  const Text = styled.text`
  color: rgb(134,190,221);
  font-size: 16px;

`
  const guest = 10;
  const room = 3;
  console.warn = () => { };
  const handleAllRoomChange = (roomsInfo: IRoom[]) => {
    let _total = 0;
    roomsInfo.forEach(function (room) {
      _total = _total + room.adult + room.child

    });
    setTotal(_total);
  }
  const [total, setTotal] = useState(3);

  return (
    <div>
      <Text>
        {`住客人數 ${guest} / ${room}房`}
      </Text>
      <Text>
        {`尚未分配人數: ${guest - total}人`}
      </Text>
      <RoomAllocation
        guest={guest}
        room={room}
        onChange={handleAllRoomChange}
      />
    </div>

  )
}



function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route element={<Home />} path={'/'}></Route>
        </Routes>
      </Router>
    </div>
  )
}
export default App