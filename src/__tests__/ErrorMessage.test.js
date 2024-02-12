import { render, screen } from "@testing-library/react"
import  '@testing-library/jest-dom'
import ErrorMessage from '../components/ErrorMessage'
const mockData='file is empty';
test('Error Message shown', () => { 
    render(<ErrorMessage message={mockData}></ErrorMessage>);
    const element=screen.getByText(mockData);
    expect(element).toBeInTheDocument();
 })

