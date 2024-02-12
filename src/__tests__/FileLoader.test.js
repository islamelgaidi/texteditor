import { render, screen, waitFor } from "@testing-library/react"
import FileLoader from "../components/FileLoader"
import userEvent from '@testing-library/user-event'

const mockData='File is for testing.'
test('File Load with valid file', async () => {
    const OnfileLoaded = jest.fn();
    const blob=new Blob([mockData]);
    const file=new File([blob],'sample.txt',{type: "text/plain"});
    
    render(<FileLoader OnfileLoaded={OnfileLoaded}></FileLoader>);
    userEvent.click(screen.getByRole('button'));
    userEvent.upload(screen.getByPlaceholderText('uploadtxtfile'),file);       
    await waitFor(() => {   expect(OnfileLoaded).toHaveBeenCalled();});
})