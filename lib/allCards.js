const ALL_CARDS = [
  {
    name: 'Z. Ibrahimovic series',
    deliver_date: '2021-12-25 05:55:00',
    excerpt: '',
    year: '',
    image: 'zlatan.jpg',
    team: {},
    value: {},
    purchase: {},
  },
  {
    name: 'Ronaldo - Real Madrid',
    deliver_date: '',
    excerpt: 'Year 2012 presenting the glove at Santiago Bernabeus stadium.',
    year: '2012',
    image: 'ronaldo.jpg',
    team: {
      name: 'Real Madrid',
      color_1: '00519E',
      color_2: 'FEBD10',
      logo: 'real-madrid.png',
    },
    value: {
      emv: 0.04,
      evolution: 'down',
    },
    purchase: {
      date: '05/29/2013',
      paid: 0.06,
      wallet: '0x056...f93',
      billed: 'Joe Doe, 123 Evergreen Ave., 2942, London, United Kingdom.',
    }
  },
  {
    name: 'Messi - American Cup 2021',
    deliver_date: '',
    excerpt: 'Messi kissing the American Cup at Maracana stadium.',
    year: '2021',
    image: 'messi.jpg',
    team: {
      name: 'Argentina',
      color_1: '89CAF0',
      color_2: 'CBAF7F',
      logo: 'argentina.png',
    },
    value: {
      emv: 0.03,
      evolution: 'down',
    },
    purchase: {
      date: '11/20/2021',
      paid: 0.05,
      wallet: '0xcfa...f67',
      billed: 'Joe Doe, 123 Evergreen Ave., 2942, London, United Kingdom.',
    }
  },
  {
    name: 'Messi - Barcelona last match',
    deliver_date: '',
    excerpt: 'Messi says goodbye to Barcelona fans.',
    year: '2020',
    image: 'messi-barca.jpg',
    team: {
      name: 'Barcelona',
      color_1: '004D98',
      color_2: 'DB0030',
      logo: 'barca.png',
    },
    value: {
      emv: 1.24,
      evolution: 'up',
    },
    purchase: {
      date: '01/15/2021',
      paid: 1.00,
      wallet: '0x6dE...c84',
      billed: 'Joe Doe, 123 Evergreen Ave., 2942, London, United Kingdom.',
    }
  },
  {
    name: 'Gallardo - Libertadores 2018',
    deliver_date: '',
    excerpt: 'Gallardo holding the Libertadores Cup at Santiago Bernabeus stadium.',
    year: '2018',
    image: 'gallardo.jpg',
    team: {
      name: 'River Plate',
      color_1: 'FFFFFF',
      color_2: 'EB192E',
      logo: 'river.png',
    },
    value: {
      emv: 0.50,
      evolution: 'up',
    },
    purchase: {
      date: '07/18/2019',
      paid: 0.30,
      wallet: '0xf5a...2ad',
      billed: 'Joe Doe, 123 Evergreen Ave., 2942, London, United Kingdom.',
    }
  },
  {
    name: 'Mbappe - World Champion',
    deliver_date: '',
    excerpt: 'Mbappe with the World Cup at 2018 World Cup.',
    year: '2018',
    image: 'mbappe.jpg',
    team: {
      name: 'France',
      color_1: '1B4884',
      color_2: 'D91C1E',
      logo: 'france.png',
    },
    value: {
      emv: 1.04,
      evolution: '',
    },
    purchase: {
      date: '01/01/2019',
      paid: 1.04,
      wallet: '0x056...f93',
      billed: 'Joe Doe, 123 Evergreen Ave., 2942, London, United Kingdom.',
    }
  }
]

export default ALL_CARDS;
