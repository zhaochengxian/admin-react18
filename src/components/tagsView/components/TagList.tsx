import React, { useEffect, useState, useRef } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { useNavigate, useLocation } from 'react-router-dom'
import { Tag } from 'antd'

import { useDispatch, useSelector } from 'react-redux'
import { deleteTag, emptyTaglist, closeOtherTags } from '@/store/actions/tagsView'

import type { ReactElement } from 'react'
import type { StateModel, TagModel } from '@/store/model'

import 'animate.css'

const TagList = (): ReactElement => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()

    const tagListContainer = useRef(null)
    const contextMenuContainer = useRef(null)

    const [left, setLeft] = useState<number>(0)
    const [top, setTop] = useState<number>(0)
    const [menuVisible, setMenuVisible] = useState<boolean>(false)
    const [currentTag, setCurrentTag] = useState<any>('')

    const taglist: TagModel[] = useSelector((state: StateModel) => state.tagsView.taglist)

    const handleClose = (tag: TagModel): void => {
        const path: string = tag.path
        const currentPath: string = location.pathname
        const length: number = taglist.length

        if (path === currentPath) {
            navigate(taglist[length - 1].path)
        }

        if (path === taglist[length - 1].path && currentPath === taglist[length - 1].path) {
            if (length - 2 > 0) {
                navigate(taglist[length - 2].path)
            } else if (length === 2) {
                navigate(taglist[0].path)
            }
        }

        dispatch(deleteTag(tag))
    }
    const handleClick = (path: string): void => {
        navigate(path)
    }
    const openContextMenu = (event: { preventDefault: () => void; clientX: any; clientY: any }, tag: TagModel) => {
        event.preventDefault()
        const menuMinWidth = 105
        const clickX: number = event.clientX
        const clickY: number = event.clientY
        const clientWidth = tagListContainer?.current?.clientWidth
        alert(clientWidth)
        const maxLeft: number = clientWidth - menuMinWidth

        if (clickX > maxLeft) {
            setLeft(clickX - menuMinWidth + 15)
            setTop(clickY)
            setMenuVisible(true)
            setCurrentTag(tag)
        } else {
            setLeft(clickX)
            setTop(clickY)
            setMenuVisible(true)
            setCurrentTag(tag)
        }
    }
    const closeContextMenu = (): void => {
        setMenuVisible(false)
    }
    const handleClickOutside = (event: any) => {
        const isOutside = !(contextMenuContainer.current && contextMenuContainer.current?.contains(event.target))
        if (isOutside && menuVisible) {
            closeContextMenu()
        }
    }

    useEffect(() => {
        document.body.addEventListener('click', handleClickOutside)
        return () => {
            document.body.removeEventListener('click', handleClickOutside)
        }
    }, [])

    const handleCloseAllTags = (): void => {
        dispatch(emptyTaglist)
        navigate('/dashboard')
        closeContextMenu()
    }
    const handleCloseOtherTags = (): void => {
        const { path } = currentTag
        dispatch(closeOtherTags(currentTag))
        navigate(path)
        closeContextMenu()
    }

    const currentPath: string = location.pathname
    return (
        <>
            <Scrollbars
                autoHide
                autoHideTimeout={1000}
                autoHideDuration={200}
                hideTracksWhenNotNeeded={true}
                renderView={(props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>) => (
                    <div {...props} className="scrollbar-container" />
                )}
                renderTrackVertical={(
                    props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement>
                ) => <div {...props} className="scrollbar-track-vertical" />}
            >
                <ul className="tags-wrap" ref={tagListContainer}>
                    {taglist.map((tag: TagModel) => (
                        <li key={tag.path}>
                            <Tag
                                className="animate__animated animate__backInLeft"
                                onClose={() => handleClose(tag)}
                                closable={tag.path !== '/dashboard'}
                                color={currentPath === tag.path ? 'gold' : 'blue'}
                                onClick={() => handleClick(tag.path)}
                                onContextMenu={e => openContextMenu(e, tag)}
                            >
                                {tag.title}
                            </Tag>
                        </li>
                    ))}
                </ul>
            </Scrollbars>
            {menuVisible ? (
                <ul className="contextmenu" style={{ left: `${left}px`, top: `${top}px` }} ref={contextMenuContainer}>
                    <li onClick={handleCloseOtherTags}>关闭其他</li>
                    <li onClick={handleCloseAllTags}>关闭所有</li>
                </ul>
            ) : null}
        </>
    )
}

export default TagList
