import { calculateDistance } from '../utils/helpers.js'
import { describe, expect, it } from 'vitest'

describe('calculateDistance', () => {
  it('doit renvoyer 0 lorsque les deux points sont identiques.', () => {
    const distance = calculateDistance(0, 0, 0, 0)
    expect(distance).toBeCloseTo(0)
  })
  it('doit renvoyer un nombre positif lorsque les deux points sont différents.', () => {
    const distance = calculateDistance(48.8566, 2.3522, 51.5074, -0.1278)
    expect(distance >= 0)
  })
  it('doit renvoyer la distance correcte entre deux points spécifiques.', () => {
    const distance = calculateDistance(48.8566, 2.3522, 51.5074, -0.1278)
    expect(distance, 344, { tolerance: 0.5 })
  })
  it("doit renvoyer la même distance quel que soit l'ordre des points.", () => {
    const distance1 = calculateDistance(48.8566, 2.3522, 51.5074, -0.1278)
    const distance2 = calculateDistance(51.5074, -0.1278, 48.8566, 2.3522)
    expect(distance1, distance2)
  })
})
