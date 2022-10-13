import { yoshimura } from './index'

describe('yoshimura', () => {
  it('Should return 吉村家', () => {
    expect(yoshimura()).toEqual({ name: '吉村家', gu: ['ほうれん草', 'チャーシュー'] })
  })
})
