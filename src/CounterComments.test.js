import commentCount from './commentsCounter';

const comments = () => Promise.resolve([{
  comment: 'lol',
  creation_date: '2021-12-24',
  username: 'angela',
},
{
  comment: 'look',
  creation_date: '2021-12-24',
  username: 'lyirics',
},
{
  comment: 'Awesome',
  creation_date: '2021-12-24',
  username: 'richard',
},
]);

test('should count comments', async () => {
  const comment = await comments();
  expect(commentCount(comment)).toBe(3);
});