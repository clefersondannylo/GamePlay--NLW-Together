import React from 'react';
import { Text,
  View,
  Image,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native'

import { styles} from './styles'

import DiscordImage from '../../assets/discord.png'

type Props = TouchableOpacityProps & {
  title:string
}
export function ButtonIcon({title, ...rest}:Props){
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image style={styles.icon} source={DiscordImage} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}