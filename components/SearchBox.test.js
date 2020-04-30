import React from 'react'
import { render, fireEvent } from '@testing-library/react';
import SearchBox from './SearchBox';

it('renders component correctly', () => {
    const { queryByTestId, queryByPlaceholderText } = render(<SearchBox />)
    expect(queryByTestId('search-button')).toBeTruthy()
    expect(queryByPlaceholderText('Add Input....')).toBeTruthy()
});
describe('Input value', () => {
    it('updates on change', () => {
        const { queryByPlaceholderText } = render(<SearchBox />)
        const searchInput = queryByPlaceholderText('Add Input....')
        fireEvent.change(searchInput, { target: { value: 'test' } })
        expect(searchInput.value).toBe('test')
    });
});

describe('Search Button', () => {
    describe('with empty query', () => {
        it('does not requestSearch', () => {
            const requestSearch = jest.fn();
            const { queryByTestId } = render(<SearchBox requestSearch={requestSearch} />)
            fireEvent.click(queryByTestId('search-button'))
            expect(requestSearch).not.toHaveBeenCalled();
        });
    });
    describe('with non-empty query', () => {
        it('does requestSearch', () => {
            const requestSearch = jest.fn();
            const { queryByTestId, queryByPlaceholderText } = render(<SearchBox requestSearch={requestSearch} />)
            const searchInput = queryByPlaceholderText('Add Input....')
            fireEvent.change(searchInput, { target: { value: 'test' } })

            fireEvent.click(queryByTestId('search-button'))
            expect(requestSearch).toHaveBeenCalled();
        });
    });
});