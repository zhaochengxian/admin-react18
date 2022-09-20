import { CSSProperties, ReactElement } from 'react'

interface ImageProps {
    width?: string
    height?: string
    src: string
    className: string
}
import './index.less'

const Image = (props: ImageProps): ReactElement => {
    const { width, height, src, className } = props
    const style: CSSProperties = {
        width: width + 'px',
        height: height + 'px'
    }
    return <img style={style} src={src} className={className} />
}

export default Image
