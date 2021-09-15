import { PageHeader, Divider } from "antd"
import { pokemons, results } from "../data"
const Header = () => {

    console.log(pokemons)
    return (
        <>
        <PageHeader title='AntDesign Demo' />
        <Divider />

        </>
    )
}

export default Header