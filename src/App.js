import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react';

import gameOfThrones from './gameOfThrones'

import './App.css'

import Houses from './components/pages/Houses'
import House from './components/pages/House'
import Member from './components/pages/Member'

export default function App() {
  const [favHouses, setFaveHouses] = useState([])
  const [favMembers, setFaveMembers] = useState([])
  const handleToggleHouse = (house) => {
    const favHouseIds = favHouses.map(house => house.id)
    const index = favHouseIds.indexOf(house.id)
    if (index >= 0) {
      const newFavHouses = [...favHouses]
      newFavHouses.splice(index, 1)
      setFaveHouses(newFavHouses)
    } else {
      const newFavHouses = [...favHouses, house]
      setFaveHouses(newFavHouses)
    }
  }
  const handleToggleMember = (member) => {
    const favMemberIds = favMembers.map(member => member.id)
    const index = favMemberIds.indexOf(member.id)
    if (index >= 0) {
      const newFavMembers = [...favMembers]
      newFavMembers.splice(index, 1)
      setFaveMembers(newFavMembers)
    } else {
      const newFavMembers = [...favMembers, member]
      setFaveMembers(newFavMembers)
    }
  }
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path='/houses' element={<Houses data={gameOfThrones} onFav={handleToggleHouse} favs={favHouses} />} />
        <Route path='/houses/:id' element={<House data={gameOfThrones} onFav={handleToggleMember} favs={favMembers} />} />
        <Route path='/houses/:houseId/members/:memberId' element={<Member data={gameOfThrones} />} />
      </Routes>
    </BrowserRouter>
  )
}