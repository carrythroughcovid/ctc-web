import React from 'react'

import beauty from '../../assets/categoryIcons/beauty.svg'
import flower from '../../assets/categoryIcons/flower.svg'
import briefcase from '../../assets/categoryIcons/briefcase.svg'
import car from '../../assets/categoryIcons/car.svg'
import food from '../../assets/categoryIcons/food.svg'
import groceries from '../../assets/categoryIcons/groceries.svg'
import health from '../../assets/categoryIcons/health.svg'
import rocketship from '../../assets/categoryIcons/rocketship.svg'

const categoryIcons = {
  flower,
  beauty,
  briefcase,
  car,
  food,
  groceries,
  health,
  rocketship,
}

const CategoryIcon = ({ icon }) => {
  const iconName = icon.toLowerCase()

  if (!categoryIcons.hasOwnProperty(iconName)) {
    return ''
  }

  const Icon = categoryIcons[iconName]

  return <Icon />
}

export default CategoryIcon
