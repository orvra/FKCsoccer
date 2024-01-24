const schedule = [
  // GROUP A //
  {
    id: 1,
    date: "2023-12-30",
    time: "19:00", // 7:00 PM
    homeTeam: 1, // Team 1 vs Team 5
    awayTeam: 5,
    group: "A",
    stadium: "Stadium A",
    matchDay: 1,
  },
  {
    id: 2,
    date: "2024-03-02",
    time: "19:30", // 7:30 PM
    homeTeam: 5, // Team 5 vs Team 1 (Reverse fixture)
    awayTeam: 1,
    group: "A",
    stadium: "Stadium E",
  },

  // Team 1 vs Team 9 matches
  {
    id: 3,
    date: "2024-02-12",
    time: "20:00", // 8:00 PM
    homeTeam: 1, // Team 1 vs Team 9
    awayTeam: 9,
    group: "A",
    stadium: "Stadium B",
  },
  {
    id: 4,
    date: "2024-03-11",
    time: "20:30", // 8:30 PM
    homeTeam: 9, // Team 9 vs Team 1 (Reverse fixture)
    awayTeam: 1,
    group: "A",
    stadium: "Stadium F",
  },

  // Team 1 vs Team 13 matches
  {
    id: 5,
    date: "2024-02-19",
    time: "19:15", // 7:15 PM
    homeTeam: 1, // Team 1 vs Team 13
    awayTeam: 13,
    group: "A",
    stadium: "Stadium C",
  },
  {
    id: 6,
    date: "2024-03-17",
    time: "19:45", // 7:45 PM
    homeTeam: 13, // Team 13 vs Team 1 (Reverse fixture)
    awayTeam: 1,
    group: "A",
    stadium: "Stadium G",
  },

  // Team 5 vs Team 9 matches
  {
    id: 7,
    date: "2024-02-26",
    time: "20:00", // 8:00 PM
    homeTeam: 5, // Team 5 vs Team 9
    awayTeam: 9,
    group: "A",
    stadium: "Stadium D",
  },
  {
    id: 8,
    date: "2024-03-25",
    time: "20:30", // 8:30 PM
    homeTeam: 9, // Team 9 vs Team 5 (Reverse fixture)
    awayTeam: 5,
    group: "A",
    stadium: "Stadium H",
  },

  // Team 5 vs Team 13 matches
  {
    id: 9,
    date: "2024-03-02",
    time: "19:30", // 7:30 PM
    homeTeam: 5, // Team 5 vs Team 13
    awayTeam: 13,
    group: "A",
    stadium: "Stadium E",
  },
  {
    id: 10,
    date: "2024-04-29",
    time: "20:00", // 8:00 PM
    homeTeam: 13, // Team 13 vs Team 5 (Reverse fixture)
    awayTeam: 5,
    group: "A",
    stadium: "Stadium I",
  },

  // Team 9 vs Team 13 matches
  {
    id: 11,
    date: "2024-03-11",
    time: "19:15", // 7:15 PM
    homeTeam: 9, // Team 9 vs Team 13
    awayTeam: 13,
    group: "A",
    stadium: "Stadium F",
  },
  {
    id: 12,
    date: "2024-05-06",
    time: "19:45", // 7:45 PM
    homeTeam: 13, // Team 13 vs Team 9 (Reverse fixture)
    awayTeam: 9,
    group: "A",
    stadium: "Stadium J",
  },

  // GROUP B //
  {
    id: 13,
    date: "2024-02-04",
    time: "19:00", // 7:00 PM
    homeTeam: 2, // Team 2 vs Team 6
    awayTeam: 6,
    stadium: "Stadium A",
    group: "B", // Group B
  },
  {
    id: 14,
    date: "2024-03-02",
    time: "19:30", // 7:30 PM
    homeTeam: 6, // Team 6 vs Team 2 (Reverse fixture)
    awayTeam: 2,
    stadium: "Stadium E",
    group: "B", // Group B
  },

  // Team 2 vs Team 10 matches
  {
    id: 15,
    date: "2024-02-12",
    time: "20:00", // 8:00 PM
    homeTeam: 2, // Team 2 vs Team 10
    awayTeam: 10,
    stadium: "Stadium B",
    group: "B", // Group B
  },
  {
    id: 16,
    date: "2024-03-11",
    time: "20:30", // 8:30 PM
    homeTeam: 10, // Team 10 vs Team 2 (Reverse fixture)
    awayTeam: 2,
    stadium: "Stadium F",
    group: "B", // Group B
  },

  // Team 2 vs Team 14 matches
  {
    id: 17,
    date: "2024-02-19",
    time: "19:15", // 7:15 PM
    homeTeam: 2, // Team 2 vs Team 14
    awayTeam: 14,
    stadium: "Stadium C",
    group: "B", // Group B
  },
  {
    id: 18,
    date: "2024-03-17",
    time: "19:45", // 7:45 PM
    homeTeam: 14, // Team 14 vs Team 2 (Reverse fixture)
    awayTeam: 2,
    stadium: "Stadium G",
    group: "B", // Group B
  },

  // Team 6 vs Team 10 matches
  {
    id: 19,
    date: "2024-02-26",
    time: "20:00", // 8:00 PM
    homeTeam: 6, // Team 6 vs Team 10
    awayTeam: 10,
    stadium: "Stadium D",
    group: "B", // Group B
  },
  {
    id: 20,
    date: "2024-04-22",
    time: "20:30", // 8:30 PM
    homeTeam: 10, // Team 10 vs Team 6 (Reverse fixture)
    awayTeam: 6,
    stadium: "Stadium H",
    group: "B", // Group B
  },

  // Team 6 vs Team 14 matches
  {
    id: 21,
    date: "2024-01-31",
    time: "19:30", // 7:30 PM
    homeTeam: 6, // Team 6 vs Team 14
    awayTeam: 14,
    stadium: "Stadium E",
    group: "B", // Group B
  },
  {
    id: 22,
    date: "2024-02-28",
    time: "20:00", // 8:00 PM
    homeTeam: 14, // Team 14 vs Team 6 (Reverse fixture)
    awayTeam: 6,
    stadium: "Stadium I",
    group: "B", // Group B
  },

  // Team 10 vs Team 14 matches
  {
    id: 23,
    date: "2024-02-08",
    time: "19:15", // 7:15 PM
    homeTeam: 10, // Team 10 vs Team 14
    awayTeam: 14,
    stadium: "Stadium F",
    group: "B", // Group B
  },
  {
    id: 24,
    date: "2024-03-06",
    time: "19:45", // 7:45 PM
    homeTeam: 14, // Team 14 vs Team 10 (Reverse fixture)
    awayTeam: 10,
    stadium: "Stadium J",
    group: "B", // Group B
  },

  // GROUP C //
  {
    id: 25,
    date: "2023-12-31",
    time: "19:00", // 7:00 PM
    homeTeam: 3, // Team 3 vs Team 7
    awayTeam: 7,
    stadium: "Stadium A",
    group: "C", // Group C
    homeTeamScore: 3,
    awayTeamScore: 2,
  },
  {
    id: 26,
    date: "2024-01-28",
    time: "19:30", // 7:30 PM
    homeTeam: 7, // Team 7 vs Team 3 (Reverse fixture)
    awayTeam: 3,
    stadium: "Stadium E",
    group: "C", // Group C
  },

  // Team 3 vs Team 11 matches
  {
    id: 27,
    date: "2024-01-07",
    time: "20:00", // 8:00 PM
    homeTeam: 3, // Team 3 vs Team 11
    awayTeam: 11,
    stadium: "Stadium B",
    group: "C", // Group C
    homeTeamScore: 4,
    awayTeamScore: 5,
  },
  {
    id: 28,
    date: "2024-02-04",
    time: "20:30", // 8:30 PM
    homeTeam: 11, // Team 11 vs Team 3 (Reverse fixture)
    awayTeam: 3,
    stadium: "Stadium F",
    group: "C", // Group C
  },

  // Team 3 vs Team 15 matches
  {
    id: 29,
    date: "2024-01-14",
    time: "19:15", // 7:15 PM
    homeTeam: 3, // Team 3 vs Team 15
    awayTeam: 15,
    stadium: "Stadium C",
    group: "C", // Group C
    homeTeamScore: 1,
    awayTeamScore: 2,
  },
  {
    id: 30,
    date: "2024-02-11",
    time: "19:45", // 7:45 PM
    homeTeam: 15, // Team 15 vs Team 3 (Reverse fixture)
    awayTeam: 3,
    stadium: "Stadium G",
    group: "C", // Group C
  },

  // Team 7 vs Team 11 matches
  {
    id: 31,
    date: "2024-01-21",
    time: "20:00", // 8:00 PM
    homeTeam: 7, // Team 7 vs Team 11
    awayTeam: 11,
    stadium: "Stadium D",
    group: "C", // Group C
  },
  {
    id: 32,
    date: "2024-02-18",
    time: "20:30", // 8:30 PM
    homeTeam: 11, // Team 11 vs Team 7 (Reverse fixture)
    awayTeam: 7,
    stadium: "Stadium H",
    group: "C", // Group C
  },

  // Team 7 vs Team 15 matches
  {
    id: 33,
    date: "2024-02-28",
    time: "19:30", // 7:30 PM
    homeTeam: 7, // Team 7 vs Team 15
    awayTeam: 15,
    stadium: "Stadium E",
    group: "C", // Group C
  },
  {
    id: 34,
    date: "2024-03-26",
    time: "20:00", // 8:00 PM
    homeTeam: 15, // Team 15 vs Team 7 (Reverse fixture)
    awayTeam: 7,
    stadium: "Stadium I",
    group: "C", // Group C
  },

  // Team 11 vs Team 15 matches
  {
    id: 35,
    date: "2024-02-04",
    time: "19:15", // 7:15 PM
    homeTeam: 11, // Team 11 vs Team 15
    awayTeam: 15,
    stadium: "Stadium F",
    group: "C", // Group C
  },
  {
    id: 36,
    date: "2024-03-02",
    time: "19:45", // 7:45 PM
    homeTeam: 15, // Team 15 vs Team 11 (Reverse fixture)
    awayTeam: 11,
    stadium: "Stadium J",
    group: "C", // Group C
  },
  // GROUP D //
  // Team 4 vs Team 8 matches
  {
    id: 37,
    date: "2024-01-04",
    time: "19:00", // 7:00 PM
    homeTeam: 4, // Team 4 vs Team 8
    awayTeam: 8,
    stadium: "Stadium A",
    group: "D", // Group D
    homeTeamScore: 4,
    awayTeamScore: 4,
  },
  {
    id: 38,
    date: "2024-02-01",
    time: "19:30", // 7:30 PM
    homeTeam: 8, // Team 8 vs Team 4 (Reverse fixture)
    awayTeam: 4,
    stadium: "Stadium E",
    group: "D", // Group D
  },

  // Team 4 vs Team 12 matches
  {
    id: 39,
    date: "2024-01-11",
    time: "20:00", // 8:00 PM
    homeTeam: 4, // Team 4 vs Team 12
    awayTeam: 12,
    stadium: "Stadium B",
    group: "D", // Group D
    homeTeamScore: 2,
    awayTeamScore: 0,
  },
  {
    id: 40,
    date: "2024-02-08",
    time: "20:30", // 8:30 PM
    homeTeam: 12, // Team 12 vs Team 4 (Reverse fixture)
    awayTeam: 4,
    stadium: "Stadium F",
    group: "D", // Group D
  },

  // Team 4 vs Team 16 matches
  {
    id: 41,
    date: "2024-01-18",
    time: "19:15", // 7:15 PM
    homeTeam: 4, // Team 4 vs Team 16
    awayTeam: 16,
    stadium: "Stadium C",
    group: "D", // Group D
  },
  {
    id: 42,
    date: "2024-02-15",
    time: "19:45", // 7:45 PM
    homeTeam: 16, // Team 16 vs Team 4 (Reverse fixture)
    awayTeam: 4,
    stadium: "Stadium G",
    group: "D", // Group D
  },

  // Team 8 vs Team 12 matches
  {
    id: 43,
    date: "2024-01-25",
    time: "20:00", // 8:00 PM
    homeTeam: 8, // Team 8 vs Team 12
    awayTeam: 12,
    stadium: "Stadium D",
    group: "D", // Group D
  },
  {
    id: 44,
    date: "2024-02-22",
    time: "20:30", // 8:30 PM
    homeTeam: 12, // Team 12 vs Team 8 (Reverse fixture)
    awayTeam: 8,
    stadium: "Stadium H",
    group: "D", // Group D
  },

  // Team 8 vs Team 16 matches
  {
    id: 45,
    date: "2024-02-01",
    time: "19:30", // 7:30 PM
    homeTeam: 8, // Team 8 vs Team 16
    awayTeam: 16,
    stadium: "Stadium E",
    group: "D", // Group D
  },
  {
    id: 46,
    date: "2024-02-29",
    time: "20:00", // 8:00 PM
    homeTeam: 16, // Team 16 vs Team 8 (Reverse fixture)
    awayTeam: 8,
    stadium: "Stadium I",
    group: "D", // Group D
  },

  // Team 12 vs Team 16 matches
  {
    id: 47,
    date: "2024-02-08",
    time: "19:15", // 7:15 PM
    homeTeam: 12, // Team 12 vs Team 16
    awayTeam: 16,
    stadium: "Stadium F",
    group: "D", // Group D
  },
  {
    id: 48,
    date: "2024-03-06",
    time: "19:45", // 7:45 PM
    homeTeam: 16, // Team 16 vs Team 12 (Reverse fixture)
    awayTeam: 12,
    stadium: "Stadium J",
    group: "D", // Group D
  },
];

export default schedule;
