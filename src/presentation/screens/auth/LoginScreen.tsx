import { Alert, useWindowDimensions } from "react-native"
import { Input, Layout, Text, Button } from "@ui-kitten/components"
import { ScrollView } from "react-native-gesture-handler"
import { MyIcon } from "../../components/ui/MyIcon"
import { StackScreenProps } from "@react-navigation/stack"
import { RootStackParams } from "../../routes/StackNavigator"
import { useState } from "react"
import { useAuthStore } from "../../store/store/useAuthStore"


interface Props extends StackScreenProps<RootStackParams, 'LoginScreen'> { }

export default function LoginScreen({ navigation }: Props) {

  const { height } = useWindowDimensions()
  const { login } = useAuthStore()
  const [isLoding, setIsLoding] = useState<boolean>(false)
  const [form, setForm] = useState<{ email: string, password: string }>({
    email: '',
    password: '',
  })

  const onLogin = async () => {
    if (form.email.length === 0 || form.password.length === 0)
      Alert.alert('Error', 'Se deben llenar ambos campos')

    setIsLoding(true)
    let succes = await login(form.email, form.password)
    setIsLoding(false)
    if (succes)
      Alert.alert('Sucess', 'Todo correcto')
    else
      Alert.alert('Error', 'Usuario o clave incorrectos')
  }

  return (
    <Layout style={{ flex: 1 }}>
      <ScrollView style={{ marginHorizontal: 40 }}>
        <Layout style={{ paddingTop: height * .35 }}>
          <Text category="h1">Ingresar.</Text>
          <Text category="p2">Por favor ingrese sus datos para continuar.</Text>
        </Layout>
        {/* Inputs */}
        <Layout style={{ marginTop: 20 }}>
          <Input
            placeholder="Correo electrinico"
            keyboardType="email-address"
            autoCapitalize="none"
            style={{ marginBottom: 10 }}
            accessoryLeft={<MyIcon name="email-outline" />}
            value={form.email}
            onChangeText={(email) => { setForm({ ...form, email }) }}
          />
          <Input
            placeholder="Clave"
            secureTextEntry
            style={{ marginBottom: 10 }}
            accessoryLeft={<MyIcon name="lock-outline" />}
            value={form.password}
            onChangeText={(password) => { setForm({ ...form, password }) }}
          />
        </Layout>
        {/* <Text>{JSON.stringify(form, null, 2)}</Text> */}

        {/* Espacio */}
        <Layout style={{ height: 20 }} />
        {/* Boton de Submit */}
        <Layout>
          <Button
            onPress={onLogin}
            appearance="ghost"
            accessoryRight={<MyIcon name="arrow-forward-outline" />}
            disabled={isLoding}
          >
            Ingresar
          </Button>
        </Layout>
        {/* Informacion para crear cuenta */}
        <Layout style={{ height: 50 }} />
        <Layout style={{ alignItems: "flex-end", flexDirection: "row", justifyContent: 'center' }}>
          <Text>Aun no tienes cuenta ? </Text>
          <Text
            status="primary"
            category="s1"
            onPress={() => { navigation.navigate('RegisterScreen') }}
          >
            Crear  cuenta.
          </Text>
        </Layout>
      </ScrollView>
    </Layout>
  )
}
