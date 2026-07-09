'use client'

import { useContext } from 'react'
import { CoverContext } from '../components/coverContext'
import { getBackgroundStyle, shouldShowPattern } from '../tools/backgroundUtils'
import { getIconifyHost } from '../config/unsplash'

const iconifyHost = getIconifyHost()

const BasicTheme: React.FC<ThemeProps> = ({ config }) => {
  const { title, pattern, author, icon, font, customIcon, titleColor, titleSize, titleWrap, authorColor, authorSize } = config
  const { coverSetting } = useContext(CoverContext)

  const backgroundStyle = getBackgroundStyle(coverSetting.bg)
  const showPattern = shouldShowPattern(coverSetting.bg)

  return (
    <div className={`flex text-gray-800 justify-center items-center h-full p-16 relative`} style={backgroundStyle}>
      {showPattern && <div className={`absolute w-full h-full ${pattern.value} ${pattern.isOpacity ? 'opacity-40' : ''}`} />}
      <div
        className={`w-full h-full max-h-[360px] max-w-[640px] flex flex-col justify-center items-center gap-6 p-12 ${font.value} bg-white rounded-2xl relative z-10`}>
        <div
          className={`${font?.lineHeight || 'leading-14'} font-bold text-center`}
          style={{ fontSize: (titleSize ?? 48) + 'px', color: titleColor || undefined, whiteSpace: (titleWrap ?? true) ? 'pre-wrap' : 'nowrap', wordBreak: 'break-word' }}>
          {title}
        </div>
        <div className='w-full flex justify-center items-center gap-4'>
          <img className='w-10 h-10' src={customIcon || `${iconifyHost}/${icon.value}.svg`} alt={`${icon.label} icon`} />
          <div
            className={`font-semibold ${author.trim() === '' && 'hidden'}`}
            style={{ fontSize: (authorSize ?? 24) + 'px', color: authorColor || undefined }}>
            {author}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BasicTheme
