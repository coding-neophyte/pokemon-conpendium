import { screen, render } from '@testing-library/react'
import Compendium from './Compendium'

it('should render all elements in compendium', () =>{
   render(<Compendium  />)
    const isLoading = screen.getByText('Loading...')

    expect(isLoading).toBeInTheDocument()
    

})
