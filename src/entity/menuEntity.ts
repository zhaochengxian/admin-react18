import { ReactElement } from 'react'

export interface MenuEntity {
    key: string
    icon?: ReactElement
    label: string
    children?: Array<MenuEntity>
}
