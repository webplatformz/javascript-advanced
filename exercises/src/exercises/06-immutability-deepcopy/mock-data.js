export const DATA = {
  name: 'Todo-list',
  items: [
    {
      summary: 'Gardening',
      checklist: {
        open: ['Cut roses', 'Cut cypresses', 'Water lawn'],
        closed: ['Cut the Lawn']
      },
      status: 'IN_PROGRESS'
    },
    {
      summary: 'Do groceries',
      status: 'OPEN',
      checklist: {
        open: ['Bananas', 'Carrots', 'Apples', 'Bread', 'Milk', 'Cookies', 'Popcorn'],
        closed: []
      }
    },
    {
      summary: 'Cook dinner',
      status: 'OPEN'
    },
    {
      summary: 'Organize Fred\'s Birthday party',
      dueDate: '2018-09-09T14:36:19.769Z',
      status: 'OPEN'
    },
    {
      summary: 'Get hair cut',
      urgency: 'HIGH',
      status: 'CLOSED'
    },
    {
      summary: 'Repair bicycle',
      urgency: 'LOW',
      status: 'CLOSED'
    },
  ],
};