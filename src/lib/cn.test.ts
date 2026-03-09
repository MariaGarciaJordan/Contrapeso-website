import { describe, expect, it } from 'vitest'
import { cn } from './cn'

describe('cn', () => {
  it('concatena clases válidas', () => {
    expect(cn('a', 'b', 'c')).toBe('a b c')
  })

  it('ignora valores falsy', () => {
    expect(cn('base', false, null, undefined, 'active')).toBe('base active')
  })

  it('resuelve conflictos de Tailwind dejando la última clase', () => {
    expect(cn('px-2', 'px-4')).toBe('px-4')
  })

  it('devuelve cadena vacía cuando no hay clases válidas', () => {
    expect(cn(false, null, undefined)).toBe('')
  })
})
