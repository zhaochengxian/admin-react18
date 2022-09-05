import { Form, InputNumber } from 'antd'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { ConfigTip } from '../../constants'

const EditableContext = React.createContext(null)
const EditableRow = ({ ...props }) => {
    const [form] = Form.useForm()
    return (
        <Form form={form} component={false}>
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/* @ts-ignore */}
            <EditableContext.Provider value={form}>
                <tr {...props} />
            </EditableContext.Provider>
        </Form>
    )
}

const EditableCell = ({ title, editable, children, dataIndex, record, handleSave, ...restProps }: any) => {
    const [editing, setEditing] = useState(false)
    const inputRef: any = useRef(null)
    const form: any = useContext(EditableContext)
    useEffect(() => {
        if (editing) {
            inputRef && inputRef?.current?.focus()
        }
    }, [editing])

    const toggleEdit = () => {
        setEditing(!editing)
        form?.setFieldsValue({
            [dataIndex]: record[dataIndex]
        })
    }

    const save = async () => {
        try {
            const values = await form?.validateFields()
            toggleEdit()
            restProps?.type ? handleSave({ ...record, ...values, integralType: restProps?.type }) : handleSave({ ...record, ...values })
        } catch (errInfo) {
            console.log('Save failed:', errInfo)
        }
    }

    let childNode = children

    if (editable) {
        childNode = editing ? (
            <Form.Item
                style={{
                    margin: 0
                }}
                name={dataIndex}
                rules={[
                    {
                        required: true,
                        message: `${title}${ConfigTip}`
                    }
                ]}
            >
                <InputNumber ref={inputRef} onPressEnter={save} onBlur={save} min={0} max={10000000} precision={0} bordered autoFocus />
            </Form.Item>
        ) : (
            <div
                className="editable-cell-value-wrap"
                style={{
                    paddingRight: 24
                }}
                onClick={toggleEdit}
            >
                {children}
            </div>
        )
    }

    return <td {...restProps}>{childNode}</td>
}

export { EditableCell, EditableRow }
