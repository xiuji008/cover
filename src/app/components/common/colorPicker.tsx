'use client'

import { Check } from 'lucide-react'

// 内置常用颜色快速选择器
export const COMMON_COLORS = [
  '#1f2937',
  '#000000',
  '#ffffff',
  '#ef4444',
  '#f97316',
  '#eab308',
  '#22c55e',
  '#10b981',
  '#06b6d4',
  '#3b82f6',
  '#6366f1',
  '#8b5cf6',
  '#a855f7',
  '#ec4899',
  '#f43f5e',
  '#64748b'
]

interface ColorPickerProps {
  color: string
  onChange: (color: string) => void
  placeholder?: string
}

const ColorPicker = ({ color, onChange, placeholder = '默认' }: ColorPickerProps) => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex items-center gap-2'>
        <label className='relative w-8 h-8 rounded-md border border-input overflow-hidden cursor-pointer shrink-0'>
          <span className='block w-full h-full' style={{ backgroundColor: color || '#cccccc' }} />
          <input
            type='color'
            value={color || '#000000'}
            onChange={(e) => onChange(e.target.value)}
            className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
          />
        </label>
        <span className='text-sm text-gray-500'>{color ? color.toUpperCase() : placeholder}</span>
        {color && (
          <button
            type='button'
            className='text-xs underline text-gray-400 hover:text-gray-600 cursor-pointer'
            onClick={() => onChange('')}>
            清除
          </button>
        )}
      </div>
      <div className='flex flex-wrap gap-1.5'>
        {COMMON_COLORS.map((c) => (
          <button
            key={c}
            type='button'
            title={c}
            onClick={() => onChange(c)}
            className='w-6 h-6 rounded-md border border-input relative cursor-pointer hover:scale-110 transition-transform'
            style={{ backgroundColor: c }}>
            {color && color.toLowerCase() === c.toLowerCase() && (
              <Check className='w-3.5 h-3.5 absolute inset-0 m-auto text-white mix-blend-difference' />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

export default ColorPicker
