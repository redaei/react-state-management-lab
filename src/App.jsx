import './App.css'
import { useState } from 'react'

const App = () => {
  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952'
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796'
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355'
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776'
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4'
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2'
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2'
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc'
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537'
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e'
    }
  ])

  const [totalStrength, setTotalStrength] = useState(0)
  const [totalAgility, setTotalAgility] = useState(0)

  const handleAddFighter = (fighter) => {
    if (fighter.price > money) {
      alert('Not enough money')
    } else {
      setTeam([...team, fighter])
      setMoney(money - fighter.price)
      calculateTotalStrength('add', fighter.strength)
      calculateTotalAgility('add', fighter.agility)
    }
  }
  const handleRemoveFighter = (ind) => {
    setMoney(money + team[ind].price)
    calculateTotalStrength('sub', team[ind].strength)
    calculateTotalAgility('sub', team[ind].agility)
    const updatedTeam = [...team.slice(0, ind), ...team.slice(ind + 1)]
    setTeam(updatedTeam)
  }

  const calculateTotalStrength = (op, strength) => {
    if (op == 'add') setTotalStrength(totalStrength + strength)
    if (op == 'sub') setTotalStrength(totalStrength - strength)
  }
  const calculateTotalAgility = (op, agility) => {
    if (op == 'add') setTotalAgility(totalAgility + agility)
    if (op == 'sub') setTotalAgility(totalAgility - agility)
  }

  return (
    <div>
      <h2>Zombies Fighters</h2>
      <h3>Money: {money}</h3>
      <h3>Team Strength: {totalStrength}</h3>
      <h3>Team Agility: {totalAgility}</h3>
      <h3>Team </h3>
      <ul>
        {team.length > 0 ? (
          team.map((member, ind) => (
            <li>
              <img src={member.img} alt={member.name} />
              <p>{member.name}</p>
              <p>Price: {member.price}</p>
              <p>Strength: {member.strength}</p>
              <p>Agility: {member.agility}</p>
              <button onClick={(e) => handleRemoveFighter(ind)}>Remove</button>
            </li>
          ))
        ) : (
          <li>Pick some team members</li>
        )}
      </ul>

      <h3>Fighters</h3>
      <ul>
        {zombieFighters.map((zom) => (
          <li>
            <img src={zom.img} alt={zom.name} />
            <p>{zom.name}</p>
            <p>Price: {zom.price}</p>
            <p>Strength: {zom.strength}</p>
            <p>Agility: {zom.agility}</p>
            <button onClick={(e) => handleAddFighter(zom)}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
