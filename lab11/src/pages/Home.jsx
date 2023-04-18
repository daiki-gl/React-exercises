import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { getData } from '../redux/middleware/api'

import DrinkInventory from '../container/DrinkInventory'
import SnackInventory from '../container/SnackInventory'

const Home = () => {
  const dispatch = useDispatch()
  const [order, setOrder] = useState('created_at')

  useEffect(() => {
    dispatch(getData(order))
  }, [order])

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-end items-center my-8">
        <div className="flex items-center gap-5">
          <span>Order by:</span>
          <div className="tabs tabs-boxed bg-transparent">
            <button
              onClick={() => setOrder('name')}
              className={`tab ${order === 'name' ? 'tab-active' : ''}`}
            >
              Name
            </button>
            <button
              onClick={() => setOrder('quantity')}
              className={`tab ${order === 'quantity' ? 'tab-active' : ''}`}
            >
              Quantity
            </button>
            <button
              onClick={() => setOrder('created_at')}
              className={`tab ${order === 'created_at' ? 'tab-active' : ''}`}
            >
              Recent
            </button>
          </div>
        </div>
      </div>
      <div className="prose max-w-none">
        <SnackInventory />
        <DrinkInventory />
      </div>
    </div>
  )
}

export default Home
