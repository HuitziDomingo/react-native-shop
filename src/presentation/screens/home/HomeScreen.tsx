import { Button, Icon, Layout, Text } from "@ui-kitten/components";

export default function HomeScreen() {
    return (
        <Layout style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
            <Text>Inicia con FB</Text>
            <Button accessoryLeft={
                <Icon name='facebook' />
            }>
                Login with Facebook
            </Button>
        </Layout>
    )
}
