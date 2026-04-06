import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
// import HelloWorld from '../HelloWorld.vue'
import MediaLinks from '../socialMedia/MediaLinks.vue'

describe('MediaLinks', () => {
  it('renders properly', () => {
    const wrapper = mount(MediaLinks)
    expect(wrapper.exists()).toBe(true)
  })
})
