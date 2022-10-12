import { takasago } from './index'

describe('takasago', () => {
  it('Should return たかさご家', () => {
    expect(takasago()).toEqual({ name: 'たかさご家' })
  })
})
