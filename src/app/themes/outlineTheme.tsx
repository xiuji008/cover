'use client'

import { useContext } from 'react'
import { CoverContext } from '../components/coverContext'
import { getBackgroundStyle, shouldShowPattern } from '../tools/backgroundUtils'
import { getIconifyHost } from '../config/unsplash'

const iconifyHost = getIconifyHost()

const OutlineTheme: React.FC<ThemeProps> = ({ config }) => {
  const { title, pattern, author, icon, font, customIcon, titleColor, titleSize, titleWrap, authorColor, authorSize } = config
  const { coverSetting } = useContext(CoverContext)

  const backgroundStyle = getBackgroundStyle(coverSetting.bg)
  const showPattern = shouldShowPattern(coverSetting.bg)

  return (
    <div className={`w-full h-full text-white relative`} style={backgroundStyle}>
      {showPattern && <div className={`absolute w-full h-full ${pattern.value} ${pattern.isOpacity ? 'opacity-40' : ''}`} />}
      <div className={`w-full h-full p-24 pb-34 flex flex-col gap-6 justify-center relative z-10`}>
        <div className='items-center flex'>
          <img className='w-18 h-18' src={customIcon || `${iconifyHost}/${icon.value}.svg?color=%23fff`} alt={`${icon.label} icon`} />
        </div>
        <div className={`${font.value} flex flex-col gap-6`}>
          <div
            className={`${font?.lineHeight || 'leading-14'} font-bold text-shadow-lg text-shadow-black`}
            style={{ fontSize: (titleSize ?? 48) + 'px', color: titleColor || undefined, whiteSpace: (titleWrap ?? true) ? 'pre-wrap' : 'nowrap', wordBreak: 'break-word' }}>
            {title}
          </div>
          <div
            className={`font-semibold text-shadow-sm text-shadow-black ${author.trim() === '' && 'hidden'}`}
            style={{ fontSize: (authorSize ?? 24) + 'px', color: authorColor || undefined }}>
            {author}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OutlineTheme
