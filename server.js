const http = require('http');
const { v4: uuidv4 } = require('uuid');
const errorHandler = require("./errorHandler")

const todos = [];
const hotel = {
  "info": "TAIPEI STATION",
  "user": "TEPB1",
  "rooms": [
    {
      "type": "ECD",
      "floor": 1,
      "roomName": "Speed",
      "number": "102",
      "price": 2500,
      "color": "red",
      "t12": false,
      "olo": false,
      "isDoubleBed": true,
      "id": "ba83882b-82c1-4f45-acdc-932232a4e039"
  },
  {
      "type": "ECD",
      "floor": 1,
      "roomName": "Speed",
      "number": "104",
      "price": 2500,
      "color": "red",
      "t12": false,
      "olo": false,
      "isDoubleBed": true,
      "id": "f3b1eb9b-f7b0-4ad2-ba21-71d61d4459ea"
  },
  {
      "type": "ECD",
      "floor": 2,
      "roomName": "Discovery",
      "number": "202",
      "price": 2500,
      "color": "blue",
      "t12": false,
      "olo": false,
      "isDoubleBed": true,
      "id": "c16160a7-56fa-45a0-abe8-cce74e592caa"
  },
  {
      "type": "ECD",
      "floor": 2,
      "roomName": "Discovery",
      "number": "204",
      "price": 2500,
      "color": "blue",
      "t12": false,
      "olo": false,
      "isDoubleBed": true,
      "id": "26c21dc8-7778-438d-94d3-3dcc53ae22e9"
  },
  {
      "type": "STD",
      "isDoubleBed": false,
      "floor": 2,
      "roomName": "Racing - Beyond",
      "number": "216",
      "price": 2800,
      "color": "green",
      "t12": false,
      "olo": false,
      "id": "bc7f0847-efa9-4696-887e-24db0ba2b95b"
  },
  {
      "type": "STD",
      "isDoubleBed": false,
      "floor": 2,
      "roomName": "Racing - Beyond",
      "number": "218",
      "price": 2800,
      "color": "green",
      "t12": false,
      "olo": false,
      "id": "ed0d4c02-0916-4313-b690-f8a05f04767f"
  },
  {
      "type": "STD",
      "isDoubleBed": false,
      "floor": 2,
      "roomName": "Racing - Beyond",
      "number": "220",
      "price": 2800,
      "color": "green",
      "t12": false,
      "olo": false,
      "id": "f24fd604-6bab-4c1d-80fd-3329d0d46892"
  },
  {
      "type": "STD",
      "isDoubleBed": false,
      "floor": 3,
      "roomName": "Racing - Suite",
      "number": "316",
      "price": 2800,
      "color": "blue",
      "t12": false,
      "olo": false,
      "id": "1613c2ad-0c5e-4a44-81fe-3cbcf35a61c6"
  },
  {
      "type": "STD",
      "isDoubleBed": false,
      "floor": 3,
      "roomName": "Racing - Suite",
      "number": "318",
      "price": 2800,
      "color": "blue",
      "t12": false,
      "olo": false,
      "id": "6eee421f-7df6-4f69-a421-8d847ec8645b"
  },
  {
      "type": "STD",
      "isDoubleBed": false,
      "floor": 3,
      "roomName": "Racing - Suite",
      "number": "320",
      "price": 2800,
      "color": "blue",
      "t12": false,
      "olo": false,
      "id": "e09cb805-56ba-4bb6-b010-86a94f0105ea"
  },
  {
      "type": "FAM",
      "isDoubleBed": true,
      "floor": 3,
      "roomName": "LineFriend - Delicious",
      "number": "301",
      "price": 3500,
      "color": "blue",
      "t12": true,
      "olo": true,
      "id": "a16c6819-5be7-489a-bfe9-3c6a64488dea"
  },
  {
      "type": "FAM",
      "isDoubleBed": true,
      "floor": 3,
      "roomName": "LineFriend - Sailing Adventure",
      "number": "303",
      "price": 3500,
      "color": "green",
      "t12": true,
      "olo": true,
      "id": "14c69d62-7daa-408c-a880-02f5f9c6aee4"
  },
  {
      "type": "FAM",
      "isDoubleBed": true,
      "floor": 3,
      "roomName": "LineFriend - Shining Station",
      "number": "305",
      "price": 3500,
      "color": "green",
      "t12": true,
      "olo": false,
      "id": "4039cc8e-2c4a-481e-a9d6-7e4e01c782ae"
  },
  {
      "type": "FAM",
      "isDoubleBed": true,
      "floor": 4,
      "roomName": "Racing - Legend",
      "number": "401",
      "price": 3500,
      "color": "red",
      "t12": true,
      "olo": false,
      "id": "22d4792a-0e26-492b-9062-7a4d2cc04004"
  },
  {
      "type": "FAM",
      "isDoubleBed": true,
      "floor": 4,
      "roomName": "Racing - Extreme",
      "number": "403",
      "price": 3500,
      "color": "blue",
      "t12": true,
      "olo": false,
      "id": "d6786102-2716-4c10-a4e2-e2cb1bab6ecf"
  },
  {
      "type": "FAM",
      "isDoubleBed": true,
      "floor": 4,
      "roomName": "Racing - Super",
      "number": "405",
      "price": 3500,
      "color": "blue",
      "t12": true,
      "olo": false,
      "id": "02be8360-11b3-49ed-8f70-e842ce5e3e6f"
  },
  {
      "type": "STE",
      "isDoubleBed": false,
      "floor": 6,
      "roomName": "Fullon",
      "number": "601",
      "price": 4800,
      "color": "red",
      "t12": true,
      "olo": false,
      "id": "4fe46941-0e4e-4ed4-93a2-fb6c2dd8e671"
  },
  {
      "type": "STE",
      "isDoubleBed": false,
      "floor": 6,
      "roomName": "Classical",
      "number": "603",
      "price": 4800,
      "color": "red",
      "t12": true,
      "olo": false,
      "id": "f0cec65f-94ff-4706-aa42-d4409f5d504d"
  },
  {
      "type": "STE",
      "isDoubleBed": false,
      "floor": 6,
      "roomName": "Deluxe",
      "number": "605",
      "price": 4800,
      "color": "red",
      "t12": true,
      "olo": false,
      "id": "ccb51ffb-de0c-498d-a77c-3b0f72541f16"
  }
  ],
  "roomStates": [
    {
        "date": "2024-05-18",
        "rooms": [
          {
            "type": "ECD",
            "floor": 1,
            "number": "102",
          },
        {
            "type": "ECD",
            "floor": 1,
            "number": "104",
          },
        {
            "type": "ECD",
            "floor": 2,
            "number": "202",
          },
        {
            "type": "ECD",
            "floor": 2,
            "number": "204",
          },
        {
            "type": "STD",
            "floor": 2,
            "number": "216",
          },
        {
            "type": "STD",
            "floor": 2,
            "number": "218",
          },
        {
            "type": "STD",
            "floor": 2,
            "number": "220",
          },
        {
            "type": "STD",
            "floor": 3,
            "number": "316",
          },
        {
            "type": "STD",
            "floor": 3,
            "number": "318",
          },
        {
            "type": "STD",
            "floor": 3,
            "number": "320",
          },
        {
            "type": "FAM",
            "floor": 3,
            "number": "301",
          },
        {
            "type": "FAM",
            "floor": 3,
            "number": "303",
          },
        {
            "type": "FAM",
            "floor": 3,
            "number": "305",
          },
        {
            "type": "FAM",
            "floor": 4,
            "number": "401",
          },
        {
            "type": "FAM",
            "floor": 4,
            "number": "403",
          },
        {
            "type": "FAM",
            "floor": 4,
            "number": "405",
          },
        {
            "type": "STE",
            "floor": 6,
            "number": "601",
          },
        {
            "type": "STE",
            "floor": 6,
            "number": "603",
          },
        {
            "type": "STE",
            "floor": 6,
            "number": "605",
          }
        ]
      },
    {
        "date": "2024-05-19",
        "rooms": [
          {
            "type": "ECD",
            "floor": 1,
            "number": "102",
          },
        {
            "type": "ECD",
            "floor": 1,
            "number": "104",
          },
        {
            "type": "ECD",
            "floor": 2,
            "number": "202",
          },
        {
            "type": "ECD",
            "floor": 2,
            "number": "204",
          },
        {
            "type": "STD",
            "floor": 2,
            "number": "216",
          },
        {
            "type": "STD",
            "floor": 2,
            "number": "218",
          },
        {
            "type": "STD",
            "floor": 2,
            "number": "220",
          },
        {
            "type": "STD",
            "floor": 3,
            "number": "316",
          },
        {
            "type": "STD",
            "floor": 3,
            "number": "318",
          },
        {
            "type": "STD",
            "floor": 3,
            "number": "320",
          },
        {
            "type": "FAM",
            "floor": 3,
            "number": "301",
          },
        {
            "type": "FAM",
            "floor": 3,
            "number": "303",
          },
        {
            "type": "FAM",
            "floor": 3,
            "number": "305",
          },
        {
            "type": "FAM",
            "floor": 4,
            "number": "401",
          },
        {
            "type": "FAM",
            "floor": 4,
            "number": "403",
          },
        {
            "type": "FAM",
            "floor": 4,
            "number": "405",
          },
        {
            "type": "STE",
            "floor": 6,
            "number": "601",
          },
        {
            "type": "STE",
            "floor": 6,
            "number": "603",
          },
        {
            "type": "STE",
            "floor": 6,
            "number": "605",
          }
        ]
      },
    {
        "date": "2024-05-20",
        "rooms": [
          {
            "type": "ECD",
            "floor": 1,
            "number": "102",
          },
        {
            "type": "ECD",
            "floor": 1,
            "number": "104",
          },
        {
            "type": "ECD",
            "floor": 2,
            "number": "202",
          },
        {
            "type": "ECD",
            "floor": 2,
            "number": "204",
          },
        {
            "type": "STD",
            "floor": 2,
            "number": "216",
          },
        {
            "type": "STD",
            "floor": 2,
            "number": "218",
          },
        {
            "type": "STD",
            "floor": 2,
            "number": "220",
          },
        {
            "type": "STD",
            "floor": 3,
            "number": "316",
          },
        {
            "type": "STD",
            "floor": 3,
            "number": "318",
          },
        {
            "type": "STD",
            "floor": 3,
            "number": "320",
          },
        {
            "type": "FAM",
            "floor": 3,
            "number": "301",
          },
        {
            "type": "FAM",
            "floor": 3,
            "number": "303",
          },
        {
            "type": "FAM",
            "floor": 3,
            "number": "305",
          },
        {
            "type": "FAM",
            "floor": 4,
            "number": "401",
          },
        {
            "type": "FAM",
            "floor": 4,
            "number": "403",
          },
        {
            "type": "FAM",
            "floor": 4,
            "number": "405",
          },
        {
            "type": "STE",
            "floor": 6,
            "number": "601",
          },
        {
            "type": "STE",
            "floor": 6,
            "number": "603",
          },
        {
            "type": "STE",
            "floor": 6,
            "number": "605",
          }
        ]
      },
    {
        "date": "2024-05-21",
        "rooms": [
          {
            "type": "ECD",
            "floor": 1,
            "number": "102",
          },
        {
            "type": "ECD",
            "floor": 1,
            "number": "104",
          },
        {
            "type": "ECD",
            "floor": 2,
            "number": "202",
          },
        {
            "type": "ECD",
            "floor": 2,
            "number": "204",
          },
        {
            "type": "STD",
            "floor": 2,
            "number": "216",
          },
        {
            "type": "STD",
            "floor": 2,
            "number": "218",
          },
        {
            "type": "STD",
            "floor": 2,
            "number": "220",
          },
        {
            "type": "STD",
            "floor": 3,
            "number": "316",
          },
        {
            "type": "STD",
            "floor": 3,
            "number": "318",
          },
        {
            "type": "STD",
            "floor": 3,
            "number": "320",
          },
        {
            "type": "FAM",
            "floor": 3,
            "number": "301",
          },
        {
            "type": "FAM",
            "floor": 3,
            "number": "303",
          },
        {
            "type": "FAM",
            "floor": 3,
            "number": "305",
          },
        {
            "type": "FAM",
            "floor": 4,
            "number": "401",
          },
        {
            "type": "FAM",
            "floor": 4,
            "number": "403",
          },
        {
            "type": "FAM",
            "floor": 4,
            "number": "405",
          },
        {
            "type": "STE",
            "floor": 6,
            "number": "601",
          },
        {
            "type": "STE",
            "floor": 6,
            "number": "603",
          },
        {
            "type": "STE",
            "floor": 6,
            "number": "605",
          }
        ]
      },
    {
        "date": "2024-05-22",
        "rooms": [
          {
            "type": "ECD",
            "floor": 1,
            "number": "102",
          },
        {
            "type": "ECD",
            "floor": 1,
            "number": "104",
          },
        {
            "type": "ECD",
            "floor": 2,
            "number": "202",
          },
        {
            "type": "ECD",
            "floor": 2,
            "number": "204",
          },
        {
            "type": "STD",
            "floor": 2,
            "number": "216",
          },
        {
            "type": "STD",
            "floor": 2,
            "number": "218",
          },
        {
            "type": "STD",
            "floor": 2,
            "number": "220",
          },
        {
            "type": "STD",
            "floor": 3,
            "number": "316",
          },
        {
            "type": "STD",
            "floor": 3,
            "number": "318",
          },
        {
            "type": "STD",
            "floor": 3,
            "number": "320",
          },
        {
            "type": "FAM",
            "floor": 3,
            "number": "301",
          },
        {
            "type": "FAM",
            "floor": 3,
            "number": "303",
          },
        {
            "type": "FAM",
            "floor": 3,
            "number": "305",
          },
        {
            "type": "FAM",
            "floor": 4,
            "number": "401",
          },
        {
            "type": "FAM",
            "floor": 4,
            "number": "403",
          },
        {
            "type": "FAM",
            "floor": 4,
            "number": "405",
          },
        {
            "type": "STE",
            "floor": 6,
            "number": "601",
          },
        {
            "type": "STE",
            "floor": 6,
            "number": "603",
          },
        {
            "type": "STE",
            "floor": 6,
            "number": "605",
          }
        ]
      },
    {
        "date": "2024-05-23",
        "rooms": [
          {
            "type": "ECD",
            "floor": 1,
            "number": "102",
          },
        {
            "type": "ECD",
            "floor": 1,
            "number": "104",
          },
        {
            "type": "ECD",
            "floor": 2,
            "number": "202",
          },
        {
            "type": "ECD",
            "floor": 2,
            "number": "204",
          },
        {
            "type": "STD",
            "floor": 2,
            "number": "216",
          },
        {
            "type": "STD",
            "floor": 2,
            "number": "218",
          },
        {
            "type": "STD",
            "floor": 2,
            "number": "220",
          },
        {
            "type": "STD",
            "floor": 3,
            "number": "316",
          },
        {
            "type": "STD",
            "floor": 3,
            "number": "318",
          },
        {
            "type": "STD",
            "floor": 3,
            "number": "320",
          },
        {
            "type": "FAM",
            "floor": 3,
            "number": "301",
          },
        {
            "type": "FAM",
            "floor": 3,
            "number": "303",
          },
        {
            "type": "FAM",
            "floor": 3,
            "number": "305",
          },
        {
            "type": "FAM",
            "floor": 4,
            "number": "401",
          },
        {
            "type": "FAM",
            "floor": 4,
            "number": "403",
          },
        {
            "type": "FAM",
            "floor": 4,
            "number": "405",
          },
        {
            "type": "STE",
            "floor": 6,
            "number": "601",
          },
        {
            "type": "STE",
            "floor": 6,
            "number": "603",
          },
        {
            "type": "STE",
            "floor": 6,
            "number": "605",
          }
        ]
      },
    {
        "date": "2024-05-24",
        "rooms": [
          {
            "type": "ECD",
            "floor": 1,
            "number": "102",
          },
        {
            "type": "ECD",
            "floor": 1,
            "number": "104",
          },
        {
            "type": "ECD",
            "floor": 2,
            "number": "202",
          },
        {
            "type": "ECD",
            "floor": 2,
            "number": "204",
          },
        {
            "type": "STD",
            "floor": 2,
            "number": "216",
          },
        {
            "type": "STD",
            "floor": 2,
            "number": "218",
          },
        {
            "type": "STD",
            "floor": 2,
            "number": "220",
          },
        {
            "type": "STD",
            "floor": 3,
            "number": "316",
          },
        {
            "type": "STD",
            "floor": 3,
            "number": "318",
          },
        {
            "type": "STD",
            "floor": 3,
            "number": "320",
          },
        {
            "type": "FAM",
            "floor": 3,
            "number": "301",
          },
        {
            "type": "FAM",
            "floor": 3,
            "number": "303",
          },
        {
            "type": "FAM",
            "floor": 3,
            "number": "305",
          },
        {
            "type": "FAM",
            "floor": 4,
            "number": "401",
          },
        {
            "type": "FAM",
            "floor": 4,
            "number": "403",
          },
        {
            "type": "FAM",
            "floor": 4,
            "number": "405",
          },
        {
            "type": "STE",
            "floor": 6,
            "number": "601",
          },
        {
            "type": "STE",
            "floor": 6,
            "number": "603",
          },
        {
            "type": "STE",
            "floor": 6,
            "number": "605",
          }
        ]
      },
    {
        "date": "2024-05-25",
        "rooms": [
          {
            "type": "ECD",
            "floor": 1,
            "number": "102",
          },
        {
            "type": "ECD",
            "floor": 1,
            "number": "104",
          },
        {
            "type": "ECD",
            "floor": 2,
            "number": "202",
          },
        {
            "type": "ECD",
            "floor": 2,
            "number": "204",
          },
        {
            "type": "STD",
            "floor": 2,
            "number": "216",
          },
        {
            "type": "STD",
            "floor": 2,
            "number": "218",
          },
        {
            "type": "STD",
            "floor": 2,
            "number": "220",
          },
        {
            "type": "STD",
            "floor": 3,
            "number": "316",
          },
        {
            "type": "STD",
            "floor": 3,
            "number": "318",
          },
        {
            "type": "STD",
            "floor": 3,
            "number": "320",
          },
        {
            "type": "FAM",
            "floor": 3,
            "number": "301",
          },
        {
            "type": "FAM",
            "floor": 3,
            "number": "303",
          },
        {
            "type": "FAM",
            "floor": 3,
            "number": "305",
          },
        {
            "type": "FAM",
            "floor": 4,
            "number": "401",
          },
        {
            "type": "FAM",
            "floor": 4,
            "number": "403",
          },
        {
            "type": "FAM",
            "floor": 4,
            "number": "405",
          },
        {
            "type": "STE",
            "floor": 6,
            "number": "601",
          },
        {
            "type": "STE",
            "floor": 6,
            "number": "603",
          },
        {
            "type": "STE",
            "floor": 6,
            "number": "605",
          }
        ]
      },
    {
        "date": "2024-05-26",
        "rooms": [
          {
            "type": "ECD",
            "floor": 1,
            "number": "102",
          },
        {
            "type": "ECD",
            "floor": 1,
            "number": "104",
          },
        {
            "type": "ECD",
            "floor": 2,
            "number": "202",
          },
        {
            "type": "ECD",
            "floor": 2,
            "number": "204",
          },
        {
            "type": "STD",
            "floor": 2,
            "number": "216",
          },
        {
            "type": "STD",
            "floor": 2,
            "number": "218",
          },
        {
            "type": "STD",
            "floor": 2,
            "number": "220",
          },
        {
            "type": "STD",
            "floor": 3,
            "number": "316",
          },
        {
            "type": "STD",
            "floor": 3,
            "number": "318",
          },
        {
            "type": "STD",
            "floor": 3,
            "number": "320",
          },
        {
            "type": "FAM",
            "floor": 3,
            "number": "301",
          },
        {
            "type": "FAM",
            "floor": 3,
            "number": "303",
          },
        {
            "type": "FAM",
            "floor": 3,
            "number": "305",
          },
        {
            "type": "FAM",
            "floor": 4,
            "number": "401",
          },
        {
            "type": "FAM",
            "floor": 4,
            "number": "403",
          },
        {
            "type": "FAM",
            "floor": 4,
            "number": "405",
          },
        {
            "type": "STE",
            "floor": 6,
            "number": "601",
          },
        {
            "type": "STE",
            "floor": 6,
            "number": "603",
          },
        {
            "type": "STE",
            "floor": 6,
            "number": "605",
          }
        ]
      },
    {
        "date": "2024-05-27",
        "rooms": [
          {
            "type": "ECD",
            "floor": 1,
            "number": "102",
          },
        {
            "type": "ECD",
            "floor": 1,
            "number": "104",
          },
        {
            "type": "ECD",
            "floor": 2,
            "number": "202",
          },
        {
            "type": "ECD",
            "floor": 2,
            "number": "204",
          },
        {
            "type": "STD",
            "floor": 2,
            "number": "216",
          },
        {
            "type": "STD",
            "floor": 2,
            "number": "218",
          },
        {
            "type": "STD",
            "floor": 2,
            "number": "220",
          },
        {
            "type": "STD",
            "floor": 3,
            "number": "316",
          },
        {
            "type": "STD",
            "floor": 3,
            "number": "318",
          },
        {
            "type": "STD",
            "floor": 3,
            "number": "320",
          },
        {
            "type": "FAM",
            "floor": 3,
            "number": "301",
          },
        {
            "type": "FAM",
            "floor": 3,
            "number": "303",
          },
        {
            "type": "FAM",
            "floor": 3,
            "number": "305",
          },
        {
            "type": "FAM",
            "floor": 4,
            "number": "401",
          },
        {
            "type": "FAM",
            "floor": 4,
            "number": "403",
          },
        {
            "type": "FAM",
            "floor": 4,
            "number": "405",
          },
        {
            "type": "STE",
            "floor": 6,
            "number": "601",
          },
        {
            "type": "STE",
            "floor": 6,
            "number": "603",
          },
        {
            "type": "STE",
            "floor": 6,
            "number": "605",
          }
        ]
      },
    {
        "date": "2024-05-28",
        "rooms": [
          {
            "type": "ECD",
            "floor": 1,
            "number": "102",
          },
        {
            "type": "ECD",
            "floor": 1,
            "number": "104",
          },
        {
            "type": "ECD",
            "floor": 2,
            "number": "202",
          },
        {
            "type": "ECD",
            "floor": 2,
            "number": "204",
          },
        {
            "type": "STD",
            "floor": 2,
            "number": "216",
          },
        {
            "type": "STD",
            "floor": 2,
            "number": "218",
          },
        {
            "type": "STD",
            "floor": 2,
            "number": "220",
          },
        {
            "type": "STD",
            "floor": 3,
            "number": "316",
          },
        {
            "type": "STD",
            "floor": 3,
            "number": "318",
          },
        {
            "type": "STD",
            "floor": 3,
            "number": "320",
          },
        {
            "type": "FAM",
            "floor": 3,
            "number": "301",
          },
        {
            "type": "FAM",
            "floor": 3,
            "number": "303",
          },
        {
            "type": "FAM",
            "floor": 3,
            "number": "305",
          },
        {
            "type": "FAM",
            "floor": 4,
            "number": "401",
          },
        {
            "type": "FAM",
            "floor": 4,
            "number": "403",
          },
        {
            "type": "FAM",
            "floor": 4,
            "number": "405",
          },
        {
            "type": "STE",
            "floor": 6,
            "number": "601",
          },
        {
            "type": "STE",
            "floor": 6,
            "number": "603",
          },
        {
            "type": "STE",
            "floor": 6,
            "number": "605",
          }
        ]
      },
    {
        "date": "2024-05-29",
        "rooms": [
          {
            "type": "ECD",
            "floor": 1,
            "number": "102",
          },
        {
            "type": "ECD",
            "floor": 1,
            "number": "104",
          },
        {
            "type": "ECD",
            "floor": 2,
            "number": "202",
          },
        {
            "type": "ECD",
            "floor": 2,
            "number": "204",
          },
        {
            "type": "STD",
            "floor": 2,
            "number": "216",
          },
        {
            "type": "STD",
            "floor": 2,
            "number": "218",
          },
        {
            "type": "STD",
            "floor": 2,
            "number": "220",
          },
        {
            "type": "STD",
            "floor": 3,
            "number": "316",
          },
        {
            "type": "STD",
            "floor": 3,
            "number": "318",
          },
        {
            "type": "STD",
            "floor": 3,
            "number": "320",
          },
        {
            "type": "FAM",
            "floor": 3,
            "number": "301",
          },
        {
            "type": "FAM",
            "floor": 3,
            "number": "303",
          },
        {
            "type": "FAM",
            "floor": 3,
            "number": "305",
          },
        {
            "type": "FAM",
            "floor": 4,
            "number": "401",
          },
        {
            "type": "FAM",
            "floor": 4,
            "number": "403",
          },
        {
            "type": "FAM",
            "floor": 4,
            "number": "405",
          },
        {
            "type": "STE",
            "floor": 6,
            "number": "601",
          },
        {
            "type": "STE",
            "floor": 6,
            "number": "603",
          },
        {
            "type": "STE",
            "floor": 6,
            "number": "605",
          }
        ]
      },
    {
        "date": "2024-05-30",
        "rooms": [
          {
            "type": "ECD",
            "floor": 1,
            "number": "102",
          },
        {
            "type": "ECD",
            "floor": 1,
            "number": "104",
          },
        {
            "type": "ECD",
            "floor": 2,
            "number": "202",
          },
        {
            "type": "ECD",
            "floor": 2,
            "number": "204",
          },
        {
            "type": "STD",
            "floor": 2,
            "number": "216",
          },
        {
            "type": "STD",
            "floor": 2,
            "number": "218",
          },
        {
            "type": "STD",
            "floor": 2,
            "number": "220",
          },
        {
            "type": "STD",
            "floor": 3,
            "number": "316",
          },
        {
            "type": "STD",
            "floor": 3,
            "number": "318",
          },
        {
            "type": "STD",
            "floor": 3,
            "number": "320",
          },
        {
            "type": "FAM",
            "floor": 3,
            "number": "301",
          },
        {
            "type": "FAM",
            "floor": 3,
            "number": "303",
          },
        {
            "type": "FAM",
            "floor": 3,
            "number": "305",
          },
        {
            "type": "FAM",
            "floor": 4,
            "number": "401",
          },
        {
            "type": "FAM",
            "floor": 4,
            "number": "403",
          },
        {
            "type": "FAM",
            "floor": 4,
            "number": "405",
          },
        {
            "type": "STE",
            "floor": 6,
            "number": "601",
          },
        {
            "type": "STE",
            "floor": 6,
            "number": "603",
          },
        {
            "type": "STE",
            "floor": 6,
            "number": "605",
          }
        ]
      },
    {
        "date": "2024-05-31",
        "rooms": [
          {
            "type": "ECD",
            "floor": 1,
            "number": "102",
          },
        {
            "type": "ECD",
            "floor": 1,
            "number": "104",
          },
        {
            "type": "ECD",
            "floor": 2,
            "number": "202",
          },
        {
            "type": "ECD",
            "floor": 2,
            "number": "204",
          },
        {
            "type": "STD",
            "floor": 2,
            "number": "216",
          },
        {
            "type": "STD",
            "floor": 2,
            "number": "218",
          },
        {
            "type": "STD",
            "floor": 2,
            "number": "220",
          },
        {
            "type": "STD",
            "floor": 3,
            "number": "316",
          },
        {
            "type": "STD",
            "floor": 3,
            "number": "318",
          },
        {
            "type": "STD",
            "floor": 3,
            "number": "320",
          },
        {
            "type": "FAM",
            "floor": 3,
            "number": "301",
          },
        {
            "type": "FAM",
            "floor": 3,
            "number": "303",
          },
        {
            "type": "FAM",
            "floor": 3,
            "number": "305",
          },
        {
            "type": "FAM",
            "floor": 4,
            "number": "401",
          },
        {
            "type": "FAM",
            "floor": 4,
            "number": "403",
          },
        {
            "type": "FAM",
            "floor": 4,
            "number": "405",
          },
        {
            "type": "STE",
            "floor": 6,
            "number": "601",
          },
        {
            "type": "STE",
            "floor": 6,
            "number": "603",
          },
        {
            "type": "STE",
            "floor": 6,
            "number": "605",
          }
        ]
      }
  ],
  "bookings": [
    {
      "userId": 1001,
      "bookingDate": "2023-11-15",
      "checkIn": "2023-12-10",
      "checkOut": "2023-12-12",
      "roomId": 51,
      "state": "已預訂",
      "quantity": 2,
      "price": 1600,
      "cats": [
          201
      ],
      "history": [
          901
      ],
      "remark": "飯後需要吃皮膚過敏的藥",
      "feedback": "服務棒，氣氛好",
      "admin": {
          "userId": 1052
      },
      "id": 401
    }
  ],
  "bookingHistorys": [
    {
        "id": 901,
        "updateTime": "2023-11-08 10:19:36 pm",
        "state": "已預訂",
        "quantity": 2,
        "roomType": "經典房",
        "price": 1600,
        "checkIn": "2023-12-10",
        "checkOut": "2023-12-12",
        "bookingsId": 401
    }
  ]
}



const requestListener = (req, res) => {
  const headers = {
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'PATCH, POST, GET,OPTIONS,DELETE',
    'Content-Type': 'application/json'
  }
  let body = ''
  req.on('data', chunk => {
    body += chunk;
  })
  
  if(req.url === '/todos' && req.method === 'GET') {
    res.writeHead(200, headers);
    res.write(JSON.stringify({
      'status': 'success',
      'data': todos
    }));
    res.end();
  }else if(req.url === '/hotel/rooms' && req.method === 'GET') {
    res.writeHead(200, headers);
    res.write(JSON.stringify({
      'status': 'success',
      'data': hotel.rooms
    }));
    res.end();
  }else if(req.url === '/hotel/info' && req.method === 'GET') {
    res.writeHead(200, headers);
    res.write(JSON.stringify({
      'status': 'success',
      'data': { 
        name:hotel.info,
        user:hotel.user
      }
    }));
    res.end();
  }else if(req.url === '/hotel/roomStates' && req.method === 'GET') {
    res.writeHead(200, headers);
    res.write(JSON.stringify({
      'status': 'success',
      'data': hotel.roomStates
    }));
    res.end();
  }else if(req.url === '/todos' && req.method === 'POST') {
    req.on('end', () => {
      try {
        const title = JSON.parse(body).title;
        if(title !== undefined) {
          const todo = {
            "title": title,
            "id": uuidv4()
          }
          todos.push(todo)
          res.writeHead(200, headers);
          res.write(JSON.stringify({
            'status': 'success',
            'data': todos
          }));
          res.end();
        }else {
          errorHandler(res, headers);
        }
      } catch (error) {
        errorHandler(res, headers);
      }
      
    })
  }else if(req.url === '/hotel/rooms' && req.method === 'POST') {
    req.on('end', () => {
      const {type, floor, roomName, number, price} = JSON.parse(body);
      const room = {
        "type": type,
        "floor": floor *1,
        "roomName": roomName,
        "number": number,
        "price": price *1,
        "id": uuidv4()
      }
      hotel.rooms.push(room)
      res.writeHead(200, headers);
      res.write(JSON.stringify({
        'status': 'success',
        'data': hotel.rooms
      }));
      res.end();
    })
  }
  else if(req.url === '/todos' && req.method === 'DELETE') {
    todos.length = 0;
    res.writeHead(200, headers);
    res.write(JSON.stringify({
      'status': 'success',
      'data': todos
    }));
    res.end();
  }else if(req.url === '/' && req.method === 'OPTIONS') {
    res.writeHead(200, headers);
    res.write(JSON.stringify({
      'status': 'test',
      'data': []
    }));
    res.end();
  }else {
    res.writeHead(404, headers);
    res.write(JSON.stringify({
      'status': 'failed',
      'message': '欄位填寫錯誤, 或路徑錯誤'
    }));
    res.end();
  }
}

const server = http.createServer(requestListener);
server.listen(process.env.PORT || 3005)


