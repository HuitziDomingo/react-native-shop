import { Icon, useTheme } from "@ui-kitten/components"
import { StyleSheet } from "react-native"

interface Props {
    name: string
    color?: string
    white?: boolean
}

export function MyIcon({ name, color, white = false }: Props) {

    let theme = useTheme()

    if (white)
        color = theme['color-info-100']
    else if (!color) color = theme['text-basic-color']
    else color = theme[color] ?? theme['text-basic-color']

    return (
        <Icon
            style={styles.icon}
            fill={color}
            name={name}
        />
    )
}


const styles = StyleSheet.create({
    icon: {
        width: 32,
        height: 32,
    }
})