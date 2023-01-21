import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Icon} from 'native-base'

interface IconProps {
    name: string,
    color?: string,
    size?: number
}

export function FontAwesomeIcon({name, color ="inherit", size = 12}: IconProps) {
    return <Icon as={FontAwesome} name={name} color={color} size={size}/>
}

export function IonIcon({name, color ="inherit", size = 12}: IconProps) {
    return <Icon as={Ionicons} name={name} color={color} size={size}/>
}
