const schedule = [
  {
    id: 1,
    date: "2023-12-30",
    time: "19:00",
    homeTeam: 1,
    awayTeam: 5,
    group: "A",
    stadium: "Stadium A",
    matchDay: 1,
  },
  {
    id: 2,
    date: "2023-12-30",
    time: "19:00", // 7:30 PM
    homeTeam: 2,
    awayTeam: 6,
    group: "B",
    stadium: "Stadium B",
    matchDay: 1,
  },

  // Team 1 vs Team 9 matches
  {
    id: 3,
    date: "2023-12-30",
    time: "19:00",
    homeTeam: 3,
    awayTeam: 7,
    group: "C",
    stadium: "Stadium C",
    matchDay: 1,
  },
  {
    id: 4,
    date: "2023-12-30",
    time: "20:00",
    homeTeam: 4, // Team 9 vs Team 1 (Reverse fixture)
    awayTeam: 8,
    group: "D",
    stadium: "Stadium A",
    matchDay: 1,
  },

  // Team 1 vs Team 13 matches
  {
    id: 5,
    date: "2023-12-30",
    time: "20:00", // 7:15 PM
    homeTeam: 9, // Team 1 vs Team 13
    awayTeam: 13,
    group: "A",
    stadium: "Stadium B",
    matchDay: 1,
  },
  {
    id: 6,
    date: "2023-12-30",
    time: "20:00", // 7:45 PM
    homeTeam: 10, // Team 13 vs Team 1 (Reverse fixture)
    awayTeam: 14,
    group: "B",
    stadium: "Stadium C",
    matchDay: 1,
  },

  // Team 5 vs Team 9 matches
  {
    id: 7,
    date: "2023-12-31",
    time: "19:00", // 8:00 PM
    homeTeam: 11, // Team 5 vs Team 9
    awayTeam: 15,
    group: "C",
    stadium: "Stadium A",
    matchDay: 1,
  },
  {
    id: 8,
    date: "2023-12-31",
    time: "19:00", // 8:30 PM
    homeTeam: 12, // Team 9 vs Team 5 (Reverse fixture)
    awayTeam: 16,
    group: "D",
    stadium: "Stadium B",
    matchDay: 1,
  },

  // Team 5 vs Team 13 matches
  {
    id: 9,
    date: "2024-01-13",
    time: "19:00",
    homeTeam: 5,
    awayTeam: 1,
    group: "A",
    stadium: "Stadium C",
    matchDay: 2,
  },
  {
    id: 10,
    date: "2024-01-13",
    time: "19:00", // 7:30 PM
    homeTeam: 6,
    awayTeam: 2,
    group: "B",
    stadium: "Stadium A",
    matchDay: 2,
  },

  // Team 1 vs Team 9 matches
  {
    id: 11,
    date: "2024-01-13",
    time: "19:00",
    homeTeam: 7,
    awayTeam: 3,
    group: "C",
    stadium: "Stadium B",
    matchDay: 2,
  },
  {
    id: 12,
    date: "2024-01-13",
    time: "20:00",
    homeTeam: 8, // Team 9 vs Team 1 (Reverse fixture)
    awayTeam: 4,
    group: "D",
    stadium: "Stadium C",
    matchDay: 2,
  },

  // Team 1 vs Team 13 matches
  {
    id: 13,
    date: "2024-01-13",
    time: "20:00", // 7:15 PM
    homeTeam: 9, // Team 1 vs Team 13
    awayTeam: 13,
    group: "A",
    stadium: "Stadium A",
    matchDay: 2,
  },
  {
    id: 14,
    date: "2024-01-13",
    time: "20:00", // 7:45 PM
    homeTeam: 10, // Team 13 vs Team 1 (Reverse fixture)
    awayTeam: 14,
    group: "B",
    stadium: "Stadium B",
    matchDay: 2,
  },

  // Team 5 vs Team 9 matches
  {
    id: 15,
    date: "2024-01-14",
    time: "19:00", // 8:00 PM
    homeTeam: 15, // Team 5 vs Team 9
    awayTeam: 11,
    group: "C",
    stadium: "Stadium C",
    matchDay: 2,
  },
  {
    id: 16,
    date: "2024-01-14",
    time: "19:00", // 8:30 PM
    homeTeam: 16, // Team 9 vs Team 5 (Reverse fixture)
    awayTeam: 12,
    group: "D",
    stadium: "Stadium A",
    matchDay: 2,
  },

  // Team 2 vs Team 14 matches
  {
    id: 17,
    date: "2024-01-27",
    time: "19:00", // 7:15 PM
    homeTeam: 1, // Team 2 vs Team 14
    awayTeam: 9,
    stadium: "Stadium B",
    group: "A", // Group B
    matchDay: 3,
  },
  {
    id: 18,
    date: "2024-01-27",
    time: "19:00", // 7:45 PM
    homeTeam: 2, // Team 14 vs Team 2 (Reverse fixture)
    awayTeam: 10,
    stadium: "Stadium C",
    group: "B", // Group B
    matchDay: 3,
  },

  {
    id: 19,
    date: "2024-01-27",
    time: "19:00", // 8:00 PM
    homeTeam: 3, // Team 6 vs Team 10
    awayTeam: 11,
    stadium: "Stadium A",
    group: "C", // Group B
    matchDay: 3,
  },
  {
    id: 20,
    date: "2024-01-27",
    time: "20:00", // 8:30 PM
    homeTeam: 4, // Team 10 vs Team 6 (Reverse fixture)
    awayTeam: 12,
    stadium: "Stadium B",
    group: "D", // Group B
    matchDay: 3,
  },

  // Team 6 vs Team 14 matches
  {
    id: 21,
    date: "2024-01-27",
    time: "20:00", // 7:30 PM
    homeTeam: 5, // Team 6 vs Team 14
    awayTeam: 13,
    stadium: "Stadium C",
    group: "A", // Group B
    matchDay: 3,
  },
  {
    id: 22,
    date: "2024-01-27",
    time: "20:00", // 8:00 PM
    homeTeam: 6, // Team 14 vs Team 6 (Reverse fixture)
    awayTeam: 14,
    stadium: "Stadium A",
    group: "B", // Group B
    matchDay: 3,
  },

  // Team 10 vs Team 14 matches
  {
    id: 23,
    date: "2024-01-28",
    time: "19:00", // 7:15 PM
    homeTeam: 7, // Team 10 vs Team 14
    awayTeam: 15,
    stadium: "Stadium B",
    group: "C", // Group B
    matchDay: 3,
  },
  {
    id: 24,
    date: "2024-01-28",
    time: "19:00", // 7:45 PM
    homeTeam: 8, // Team 14 vs Team 10 (Reverse fixture)
    awayTeam: 16,
    stadium: "Stadium C",
    group: "D", // Group B
    matchDay: 3,
  },

  // GROUP C //
  {
    id: 25,
    date: "2024-02-10",
    time: "19:00", // 7:15 PM
    homeTeam: 9, // Team 2 vs Team 14
    awayTeam: 1,
    stadium: "Stadium A",
    group: "A", // Group B
    matchDay: 4,
  },
  {
    id: 26,
    date: "2024-02-10",
    time: "19:00", // 7:45 PM
    homeTeam: 10, // Team 14 vs Team 2 (Reverse fixture)
    awayTeam: 2,
    stadium: "Stadium B",
    group: "B", // Group B
    matchDay: 4,
  },

  {
    id: 27,
    date: "2024-02-10",
    time: "19:00", // 8:00 PM
    homeTeam: 11, // Team 6 vs Team 10
    awayTeam: 3,
    stadium: "Stadium C",
    group: "C", // Group B
    matchDay: 4,
  },
  {
    id: 28,
    date: "2024-02-10",
    time: "20:00", // 8:30 PM
    homeTeam: 12, // Team 10 vs Team 6 (Reverse fixture)
    awayTeam: 4,
    stadium: "Stadium A",
    group: "D", // Group B
    matchDay: 4,
  },

  // Team 6 vs Team 14 matches
  {
    id: 29,
    date: "2024-02-10",
    time: "20:00", // 7:30 PM
    homeTeam: 13, // Team 6 vs Team 14
    awayTeam: 5,
    stadium: "Stadium B",
    group: "A", // Group B
    matchDay: 4,
  },
  {
    id: 30,
    date: "2024-02-10",
    time: "20:00", // 8:00 PM
    homeTeam: 14, // Team 14 vs Team 6 (Reverse fixture)
    awayTeam: 6,
    stadium: "Stadium C",
    group: "B", // Group B
    matchDay: 4,
  },

  // Team 10 vs Team 14 matches
  {
    id: 31,
    date: "2024-02-11",
    time: "19:00", // 7:15 PM
    homeTeam: 15, // Team 10 vs Team 14
    awayTeam: 7,
    stadium: "Stadium A",
    group: "C", // Group B
    matchDay: 4,
  },
  {
    id: 32,
    date: "2024-02-11",
    time: "19:00", // 7:45 PM
    homeTeam: 16, // Team 14 vs Team 10 (Reverse fixture)
    awayTeam: 8,
    stadium: "Stadium B",
    group: "D", // Group B
    matchDay: 4,
  },

  // Team 7 vs Team 15 matches
  {
    id: 33,
    date: "2024-02-24",
    time: "19:00", // 7:30 PM
    homeTeam: 1, // Team 7 vs Team 15
    awayTeam: 13,
    stadium: "Stadium C",
    group: "A", // Group C
    matchDay: 5,
  },
  {
    id: 34,
    date: "2024-02-24",
    time: "19:00", // 8:00 PM
    homeTeam: 2, // Team 15 vs Team 7 (Reverse fixture)
    awayTeam: 14,
    stadium: "Stadium A",
    group: "B", // Group C
    matchDay: 5,
  },

  // Team 11 vs Team 15 matches
  {
    id: 35,
    date: "2024-02-24",
    time: "19:00", // 7:15 PM
    homeTeam: 3, // Team 11 vs Team 15
    awayTeam: 15,
    stadium: "Stadium B",
    group: "C", // Group C
    matchDay: 5,
  },
  {
    id: 36,
    date: "2024-02-24",
    time: "20:00", // 7:45 PM
    homeTeam: 4, // Team 15 vs Team 11 (Reverse fixture)
    awayTeam: 16,
    stadium: "Stadium C",
    group: "D", // Group C
    matchDay: 5,
  },
  // GROUP D //
  // Team 4 vs Team 8 matches
  {
    id: 37,
    date: "2024-02-24",
    time: "20:00", // 7:00 PM
    homeTeam: 5, // Team 4 vs Team 8
    awayTeam: 9,
    stadium: "Stadium A",
    group: "A", // Group D
    matchDay: 5,
  },
  {
    id: 38,
    date: "2024-02-24",
    time: "20:00", // 7:30 PM
    homeTeam: 6, // Team 8 vs Team 4 (Reverse fixture)
    awayTeam: 10,
    stadium: "Stadium B",
    group: "B", // Group D
    matchDay: 5,
  },

  // Team 4 vs Team 12 matches
  {
    id: 39,
    date: "2024-02-25",
    time: "19:00", // 8:00 PM
    homeTeam: 7, // Team 4 vs Team 12
    awayTeam: 11,
    stadium: "Stadium C",
    group: "C", // Group D
    matchDay: 5,
  },
  {
    id: 40,
    date: "2024-02-25",
    time: "19:00", // 8:30 PM
    homeTeam: 8, // Team 12 vs Team 4 (Reverse fixture)
    awayTeam: 12,
    stadium: "Stadium A",
    group: "D", // Group D
    matchDay: 5,
  },

  {
    id: 41,
    date: "2024-03-09",
    time: "19:00", // 7:30 PM
    homeTeam: 13, // Team 7 vs Team 15
    awayTeam: 1,
    stadium: "Stadium B",
    group: "A", // Group C
    matchDay: 6,
  },
  {
    id: 42,
    date: "2024-03-09",
    time: "19:00", // 8:00 PM
    homeTeam: 14, // Team 15 vs Team 7 (Reverse fixture)
    awayTeam: 2,
    stadium: "Stadium C",
    group: "B", // Group C
    matchDay: 6,
  },

  // Team 11 vs Team 15 matches
  {
    id: 43,
    date: "2024-03-09",
    time: "19:00", // 7:15 PM
    homeTeam: 15, // Team 11 vs Team 15
    awayTeam: 3,
    stadium: "Stadium A",
    group: "C", // Group C
    matchDay: 6,
  },
  {
    id: 44,
    date: "2024-03-09",
    time: "20:00", // 7:45 PM
    homeTeam: 16, // Team 15 vs Team 11 (Reverse fixture)
    awayTeam: 4,
    stadium: "Stadium B",
    group: "D", // Group C
    matchDay: 6,
  },
  // GROUP D //
  // Team 4 vs Team 8 matches
  {
    id: 45,
    date: "2024-03-09",
    time: "20:00", // 7:00 PM
    homeTeam: 9, // Team 4 vs Team 8
    awayTeam: 5,
    stadium: "Stadium C",
    group: "A", // Group D
    matchDay: 6,
  },
  {
    id: 46,
    date: "2024-03-09",
    time: "20:00", // 7:30 PM
    homeTeam: 10, // Team 8 vs Team 4 (Reverse fixture)
    awayTeam: 6,
    stadium: "Stadium A",
    group: "B", // Group D
    matchDay: 6,
  },

  // Team 4 vs Team 12 matches
  {
    id: 47,
    date: "2024-03-10",
    time: "19:00", // 8:00 PM
    homeTeam: 11, // Team 4 vs Team 12
    awayTeam: 7,
    stadium: "Stadium B",
    group: "C", // Group D
    matchDay: 6,
  },
  {
    id: 48,
    date: "2024-03-10",
    time: "19:00", // 8:30 PM
    homeTeam: 12, // Team 12 vs Team 4 (Reverse fixture)
    awayTeam: 8,
    stadium: "Stadium C",
    group: "D", // Group D
    matchDay: 6,
  },
];

export default schedule;
