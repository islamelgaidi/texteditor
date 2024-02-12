import { render, screen } from "@testing-library/react"
import FileContentDisplay from "../components/FileContentDisplay"

const mockData='today is a good day';
test('Display file content', () => { 
    render(<FileContentDisplay fileContent={mockData} ></FileContentDisplay>)
    const element=screen.getByText(mockData);
    expect(element).toBeInTheDocument();
 })