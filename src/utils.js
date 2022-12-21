import routes from './routes'
import { generatePath } from 'react-router-dom'
import store from './store'
import { setUser } from './store/authSlice'
import dayjs from 'dayjs'

/**
 *
 * @param {Array} routeList
 * @param {String | false} prefix
 */
export const prepRoutes = (routeList = routes, prefix) => {
  return routeList
    .filter((route) => !route?.index)
    .map((route) => {
      if ('children' in route) {
        if (!('name' in route)) {
          return prepRoutes(route.children, route?.path)
        }
        return { ...route, children: prepRoutes(route.children) }
      }
      const path = [prefix, route.path].filter((item) => item).join('/')
      return { ...route, path }
    })
    .flat()
}

/**
 *
 * @param {string} path
 * @param {object} data
 */
export const getPath = (path, data = {}) => {
  const finalRoute = path
    .split('.')
    .reduce(
      (acc, value) => {
        if (acc.length === 1) {
          acc.push(prepRoutes().find((x) => x.name === value))
        } else {
          acc.push(acc[acc.length - 1].children.find((x) => x.name === value))
        }

        return acc
      },
      ['/']
    )
    .map((x) => x?.path)
    .join('/')

  return generatePath(finalRoute, data)
}

export const signOut = () => {
  store.dispatch(setUser(false))
}

export const dateFormat = (date) => dayjs(date).format('DD.MM.YYYY')
export const getDate = () => dayjs().format('DD.MM.YYYY')

export const hourFormat = (hour) => (hour < 10 ? '0' : '') + hour

export const getHour = (date) => dayjs(date).format('HH')