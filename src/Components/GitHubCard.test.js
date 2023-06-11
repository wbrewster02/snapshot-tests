import renderer from 'react-test-renderer'
import GithubCard from './GitHubCard'

test('renders a snapshot', () => {
    const card = renderer.create(<GithubCard/>).toJSON()
    expect(card).toMatchSnapshot()
  })