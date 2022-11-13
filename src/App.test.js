import { render, screen } from '@testing-library/react';

import BookmarkedFreelancerFindById from './components/bookmarked_freelancer/BookmarkedFreelancerFindById';
import PostJob from './components/job/PostJob';


// test('renders learn react link', () => {
//   // render(<App />);
//   // const linkElement = screen.getByText(/learn react/i);
//   // expect(linkElement).toBeInTheDocument();
// });

describe('true is truthly', () => {
  test('true is thruthly', () => {
  expect(true).toBe(true);
});
test('false is false', () => {
  expect(false).toBe(false);
});
});

describe('Form Rendering', () => {
  test('form renders properly', () => {
    const {getByText, getByLabelText} = render(<PostJob/>);

    const freelancerIdLabel = getByText(/Freelancer ID:/i);
    const skillIdLabel = getByText(/Skill ID:/i);
  });

  test('Bookmarked Freelancer Find By ID', () => {
    const {getByText, getByLabelText} = render(<BookmarkedFreelancerFindById/>);

    const freelancerIdLabel = getByText(/Bookmarked Freelancer ID/i);
    expect(freelancerIdLabel).toBeInTheDocument();

    // const input1 = getByLabelText(/Bookmarked Freelancer ID/i);
    // expect(input1).toHaveValue('type', 'number');

  });
} );