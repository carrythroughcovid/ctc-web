import React from 'react'

import Beauty from '../../assets/categoryIcons/beauty.svg'
import Briefcase from '../../assets/categoryIcons/briefcase.svg'
import Car from '../../assets/categoryIcons/car.svg'
import Food from '../../assets/categoryIcons/food.svg'
import Groceries from '../../assets/categoryIcons/groceries.svg'
import Health from '../../assets/categoryIcons/health.svg'
import Rocketship from '../../assets/categoryIcons/rocketship.svg'

const categoryIcons = {
  Beauty,
  Briefcase,
  Car,
  Food,
  Groceries,
  Health,
  Rocketship,
}

const CategoryIcon = ({ icon }) => {
  if (!categoryIcons.hasOwnProperty(icon)) {
    return ''
  }

  const Icon = categoryIcons[icon]

  return <Icon />
}

export default CategoryIcon
