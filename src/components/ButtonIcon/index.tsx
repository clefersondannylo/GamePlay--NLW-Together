import React from 'react'
import { Text, View, Image } from 'react-native'

import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { styles } from './styles'

import DiscordImage from '../../assets/discord.png'

type Props = RectButtonProps & {
  title: string
}
export function ButtonIcon({ title, ...rest }: Props) {
  return (
    <RectButton style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image style={styles.icon} source={DiscordImage} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </RectButton>
  )
}
