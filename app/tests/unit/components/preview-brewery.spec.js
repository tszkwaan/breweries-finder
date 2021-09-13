import { shallowMount, createLocalVue } from '@vue/test-utils'
import { expect } from 'chai'
import PreviewBrewery from '@/components/PreviewBrewery'
import dataBrewery from '../../mock/brewery.json'

describe('SelectSize.vue', () => {
  const localVue = createLocalVue()

  it('getImageIndex() returns correct result when page is odd number', () => {
    const wrapper = shallowMount(PreviewBrewery, {
      localVue,
      propsData: {
        brewery: dataBrewery,
        index: 1,
        page: 1
      }
    })
    expect(wrapper.vm.getImageIndex()).equal(1)
  })

  it('getImageIndex() returns correct result when page is even number', () => {
    const wrapper = shallowMount(PreviewBrewery, {
      localVue,
      propsData: {
        brewery: dataBrewery,
        index: 5,
        page: 2
      }
    })
    expect(wrapper.vm.getImageIndex()).equal(13)
  })
})
