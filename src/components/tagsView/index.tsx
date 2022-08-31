import type { ReactElement } from 'react'
import TagList from './components/TagList'

import './index.less'

const TagsView = (): ReactElement => {
    return (
        <div className="tagsView-container">
            <TagList />
        </div>
    )
}

export default TagsView
