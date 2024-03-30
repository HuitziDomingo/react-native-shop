import { useWindowDimensions } from "react-native"
import { Input, Layout, Text, Button } from "@ui-kitten/components"
import { ScrollView } from "react-native-gesture-handler"
import { MyIcon } from "../../components/ui/MyIcon"
import { StackScreenProps } from "@react-navigation/stack"
import { RootStackParams } from "../../routes/StackNavigator"


interface Props extends StackScreenProps<RootStackParams, 'RegisterScreen'> { }

export default function RegisterScreen({ navigation }: Props) {

    const { height, width } = useWindowDimensions()

    return (
        <Layout style={{ flex: 1 }}>
            <ScrollView style={{ marginHorizontal: 40 }}>
                <Layout style={{ paddingTop: height * .30 }}>
                    <Text category="h1">Crear cuenta.</Text>
                    <Text category="p2">Por favor crea una cuenta para continuar.</Text>
                </Layout>
                {/* Inputs */}
                <Layout style={{ marginTop: 20 }}>
                    <Input
                        placeholder="Nimbre completo"
                        style={{ marginBottom: 10 }}
                        accessoryLeft={<MyIcon name="person-outline" />}
                    />
                    <Input
                        placeholder="Correo electrinico"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        style={{ marginBottom: 10 }}
                        accessoryLeft={<MyIcon name="email-outline" />}
                    />
                    <Input
                        placeholder="Clave"
                        keyboardType="email-address"
                        secureTextEntry
                        style={{ marginBottom: 10 }}
                        accessoryLeft={<MyIcon name="lock-outline" />}
                    />
                </Layout>
                {/* Espacio */}
                <Layout style={{ height: 20 }} />
                {/* Boton de Submit */}
                <Layout>
                    <Button
                        onPress={() => { }}
                        appearance="ghost"
                        accessoryRight={<MyIcon name="arrow-forward-outline" />}
                    >
                        Crear
                    </Button>
                </Layout>
                {/* Informacion para crear cuenta */}
                <Layout style={{ height: 50 }} />
                <Layout style={{ alignItems: "flex-end", flexDirection: "row", justifyContent: 'center' }}>
                    <Text
                        status="primary"
                        category="s1"
                        onPress={() => { navigation.goBack() }}
                    >
                        Ya tienes una cuenta ?
                    </Text>
                </Layout>
            </ScrollView>
        </Layout>
    )
}
