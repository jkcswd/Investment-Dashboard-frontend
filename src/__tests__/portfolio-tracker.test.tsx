import { render, screen } from '@testing-library/react'
import PortfolioTracker from '../pages/portfolio-tracker'
import '@testing-library/jest-dom'

describe('PortfolioTracker', () => {
  it('renders unchanged (Snapshot)', () => {
    const { container } = render(<PortfolioTracker />)
    expect(container).toMatchSnapshot()
  })


})
