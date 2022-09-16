import { NavigationContainer } from '@react-navigation/native'
import App from '../../App'

import { AppRoutes } from './app.routes'

export function Routes() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  )
}