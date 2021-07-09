import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  View,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { Brand } from '../../Components'
import FetchOne from '../../Store/User/FetchOne'
// import ChangeTheme from '../../Store/Theme/ChangeTheme'
import { useTranslation } from 'react-i18next'
import { UserState } from '../../Store/User'
// import { ThemeState } from '../../Store/Theme'

const IndexExampleContainer = () => {
  // const { t } = useTranslation()
 
  // const dispatch = useDispatch()

  // const user = useSelector((state: { user: UserState }) => state.user.item)
  // const fetchOneUserLoading = useSelector(
  //   (state: { user: UserState }) => state.user.fetchOne.loading,
  // )
  // const fetchOneUserError = useSelector(
  //   (state: { user: UserState }) => state.user.fetchOne.error,
  // )

  // const [userId, setUserId] = useState('1')

  // const fetch = (id: string) => {
  //   setUserId(id)
  //   if (id) {
  //     dispatch(FetchOne.action(id))
  //   }
  // }

  // const changeTheme = ({ theme, darkMode }: Partial<ThemeState>) => {
  //   dispatch(ChangeTheme.action({ theme, darkMode }))
  // }

  return (
    <View 
    // style={[Layout.fill, Layout.colCenter, Gutters.smallHPadding]}
    >
      <Text>Example hininiininij 
        gfgcghgchgc</Text>
    </View>
  )
}

export default IndexExampleContainer
