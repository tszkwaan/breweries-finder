import { isEqual } from 'lodash'
import storeBreweries from '@/store/breweries'
import dataBrewery from '../../mock/brewery.json'
import { expect } from 'chai'

describe('breweries store', () => {
  it('correctly update states when call showDetailDialog mutation', () => {
    const state = {
      brewery: {},
      isShowDetailDialog: false
    }

    storeBreweries.mutations.showDetailDialog(state, dataBrewery)

    expect(isEqual(state.brewery, dataBrewery)).equal(true)
    expect(state.isShowDetailDialog).equal(true)
  })

  it('correctly update states when call closeDetailDialog mutation', () => {
    const state = {
      brewery: dataBrewery,
      isShowDetailDialog: true
    }

    storeBreweries.mutations.closeDetailDialog(state)

    expect(state.isShowDetailDialog).equal(false)
  })
})
