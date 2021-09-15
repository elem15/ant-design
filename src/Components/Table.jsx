import { Avatar, Table, Typography } from "antd"
import { pokemons } from "../data"

const columns = [
{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <Typography.Text copyable>{text}</Typography.Text>
},
{
    title: 'Number',
    dataIndex: 'number',
    key: 'number'
},
{
    title: 'Class',
    dataIndex: 'classification',
    key: 'classification',
    filters: [
        {
            text: 'Seed Pokemon', 
            value: 'Seed Pokemon'
        },
        {
            text: 'Fire', 
            value: 'Fire'
        },
        {
            text: 'Grass Poison', 
            value: 'Grass Poison'
        },
    ],
    onFilter: (value, item) => item.classification.includes(value)
},
{
    title: 'Rate',
    dataIndex: 'fleeRate',
    key: 'fleeRate',
    sorter: (a,b) => a.fleeRate - b.fleeRate
},
{
    title: 'Picture',
    dataIndex: 'image',
    key: 'image',    
    render: (dataIndex) => <Avatar size="medium" src={dataIndex} />
},
]
const _Table = () => {
    return (
        <> 
        <Table
            dataSource={pokemons}
            columns={columns}
        />
        </>
    )
}

export default _Table