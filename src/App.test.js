// app.test.js
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
import App from './App'
import {BrowserRouter, MemoryRouter} from 'react-router-dom'

test('full app rendering/navigating', async () => {
  render(<App/>, {wrapper: BrowserRouter})
  const user = userEvent.setup()

  // verify page content for default route
  

  // verify page content for expected route after navigating
  await user.click(screen.getByText(/Home/i))
  expect(screen.getByText(/This is a simple React Todo App/i)).toBeInTheDocument()
})



 