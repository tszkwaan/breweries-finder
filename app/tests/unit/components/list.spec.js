import { shallowMount, createLocalVue } from '@vue/test-utils'
import { expect } from 'chai'
import List from '@/views/List'
import dataBreweries from '../../mock/breweries.json'

describe('List.vue', () => {
  const localVue = createLocalVue()

  it('getImageIndex() returns correct result when page is odd number', () => {
    const wrapper = shallowMount(List, {
      localVue,
      data () {
        return {
          breweries: dataBreweries,
          pageSize: 12,
          page: 1,
          size: {
            size: 'All',
            value: ''
          }
        }
      }
    })
    expect(wrapper.vm.getImageIndex(1)).equal(1)
  })

  it('getImageIndex() returns correct result when page is even number', () => {
    const wrapper = shallowMount(List, {
      localVue,
      data () {
        return {
          breweries: dataBreweries,
          pageSize: 12,
          page: 2,
          size: {
            size: 'All',
            value: ''
          }
        }
      }
    })
    expect(wrapper.vm.getImageIndex(2)).equal(10)
  })
})
