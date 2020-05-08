import theme from '../styles/theme'

const categories = [
  {
    name: "Mother's Day Specials",
    slug: 'mothersday',
    colour: '#F5A5BD',
    icon: 'Flower',
  },
  {
    name: 'Retail',
    slug: 'retail',
    colour: theme.colour.red,
    icon: 'Groceries',
  },
  {
    name: 'Health and wellness',
    slug: 'health',
    colour: theme.colour.violet,
    icon: 'Health',
  },
  {
    name: 'Beauty',
    slug: 'beauty',
    colour: theme.colour.teal,
    icon: 'Beauty',
  },
  {
    name: 'Consulting',
    slug: 'services',
    colour: theme.colour.greyDark,
    icon: 'Briefcase',
  },
  {
    name: 'Home and Car',
    slug: 'home',
    colour: theme.colour.lime,
    icon: 'Car',
  },
  {
    name: 'Food and Drink',
    slug: 'hospitality',
    colour: theme.colour.purple,
    icon: 'Food',
  },
  {
    name: 'Other',
    slug: 'other',
    colour: theme.colour.blueDark,
    icon: 'Rocketship',
  },
]

export const getCategoryFromSlug = slug =>
  categories.find(cat => cat.slug === slug.toLowerCase())

export default categories
