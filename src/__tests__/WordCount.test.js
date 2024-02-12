const { render, screen } = require("@testing-library/react")
const { default: WordCounter } = require("../components/WordCounter")

const mockData='i love react . i love react ' ;
test('Word count in filecontent is show', () => { 
    render(<WordCounter fileContent={mockData}></WordCounter>)
    const element=screen.getByText(/react/i);
   //
    expect(element).toBeInTheDocument();
 })