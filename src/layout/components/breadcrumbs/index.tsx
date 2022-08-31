import { Breadcrumb } from 'antd'
const Breadcrumbs = () => {
    return (
        <div>
            <Breadcrumb
                style={{
                    margin: '16px 0'
                }}
            >
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
        </div>
    )
}

export default Breadcrumbs
