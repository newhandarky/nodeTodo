const http = require('http');
const { v4: uuidv4 } = require('uuid');
const errorHandler = require("./errorHandler")

function getTel() {
  return '09' + Math.floor(Math.random() * 100000000);
}
function getConf() {
  return Math.floor(Math.random() * 900000);
}
const todos = [];
const hotel = {
  "info": "TAIPEI STATION",
  "admin": "TEPB1",
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
      "price": 2500,
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
      "price": 2500,
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
      "price": 2500,
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
      "price": 2500,
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
      "price": 2500,
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
      "price": 2500,
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
          "price": 2500,
          "isUsed": false
        },
        {
          "type": "ECD",
          "floor": 1,
          "number": "104",
          "price": 2500,
          "isUsed": true
        },
        {
          "type": "ECD",
          "floor": 2,
          "number": "202",
          "price": 2500,
          "isUsed": false
        },
        {
          "type": "ECD",
          "floor": 2,
          "number": "204",
          "price": 2500,
          "isUsed": true
        },
        {
          "type": "STD",
          "floor": 2,
          "number": "216",
          "price": 2500,
          "isUsed": true
        },
        {
          "type": "STD",
          "floor": 2,
          "number": "218",
          "price": 2500,
          "isUsed": false
        },
        {
          "type": "STD",
          "floor": 2,
          "number": "220",
          "price": 2500,
          "isUsed": false
        },
        {
          "type": "STD",
          "floor": 3,
          "number": "316",
          "price": 2500,
          "isUsed": true
        },
        {
          "type": "STD",
          "floor": 3,
          "number": "318",
          "price": 2500,
          "isUsed": false
        },
        {
          "type": "STD",
          "floor": 3,
          "number": "320",
          "price": 2500,
          "isUsed": true
        },
        {
          "type": "FAM",
          "floor": 3,
          "number": "301",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "FAM",
          "floor": 3,
          "number": "303",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "FAM",
          "floor": 3,
          "number": "305",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "FAM",
          "floor": 4,
          "number": "401",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "FAM",
          "floor": 4,
          "number": "403",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "FAM",
          "floor": 4,
          "number": "405",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "STE",
          "floor": 6,
          "number": "601",
          "price": 4800,
          "isUsed": true
        },
        {
          "type": "STE",
          "floor": 6,
          "number": "603",
          "price": 4800,
          "isUsed": false
        },
        {
          "type": "STE",
          "floor": 6,
          "number": "605",
          "price": 4800,
          "isUsed": false
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
          "price": 2500,
          "isUsed": false
        },
        {
          "type": "ECD",
          "floor": 1,
          "number": "104",
          "price": 2500,
          "isUsed": true
        },
        {
          "type": "ECD",
          "floor": 2,
          "number": "202",
          "price": 2500,
          "isUsed": false
        },
        {
          "type": "ECD",
          "floor": 2,
          "number": "204",
          "price": 2500,
          "isUsed": true
        },
        {
          "type": "STD",
          "floor": 2,
          "number": "216",
          "price": 2500,
          "isUsed": true
        },
        {
          "type": "STD",
          "floor": 2,
          "number": "218",
          "price": 2500,
          "isUsed": true
        },
        {
          "type": "STD",
          "floor": 2,
          "number": "220",
          "price": 2500,
          "isUsed": true
        },
        {
          "type": "STD",
          "floor": 3,
          "number": "316",
          "price": 2500,
          "isUsed": true
        },
        {
          "type": "STD",
          "floor": 3,
          "number": "318",
          "price": 2500,
          "isUsed": true
        },
        {
          "type": "STD",
          "floor": 3,
          "number": "320",
          "price": 2500,
          "isUsed": true
        },
        {
          "type": "FAM",
          "floor": 3,
          "number": "301",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "FAM",
          "floor": 3,
          "number": "303",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "FAM",
          "floor": 3,
          "number": "305",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "FAM",
          "floor": 4,
          "number": "401",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "FAM",
          "floor": 4,
          "number": "403",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "FAM",
          "floor": 4,
          "number": "405",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "STE",
          "floor": 6,
          "number": "601",
          "price": 4800,
          "isUsed": true
        },
        {
          "type": "STE",
          "floor": 6,
          "number": "603",
          "price": 4800,
          "isUsed": false
        },
        {
          "type": "STE",
          "floor": 6,
          "number": "605",
          "price": 4800,
          "isUsed": false
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
          "price": 2500,
          "isUsed": true
        },
        {
          "type": "ECD",
          "floor": 1,
          "number": "104",
          "price": 2500,
          "isUsed": true
        },
        {
          "type": "ECD",
          "floor": 2,
          "number": "202",
          "price": 2500,
          "isUsed": false
        },
        {
          "type": "ECD",
          "floor": 2,
          "number": "204",
          "price": 2500,
          "isUsed": false
        },
        {
          "type": "STD",
          "floor": 2,
          "number": "216",
          "price": 2500,
          "isUsed": true
        },
        {
          "type": "STD",
          "floor": 2,
          "number": "218",
          "price": 2500,
          "isUsed": true
        },
        {
          "type": "STD",
          "floor": 2,
          "number": "220",
          "price": 2500,
          "isUsed": true
        },
        {
          "type": "STD",
          "floor": 3,
          "number": "316",
          "price": 2500,
          "isUsed": false
        },
        {
          "type": "STD",
          "floor": 3,
          "number": "318",
          "price": 2500,
          "isUsed": true
        },
        {
          "type": "STD",
          "floor": 3,
          "number": "320",
          "price": 2500,
          "isUsed": true
        },
        {
          "type": "FAM",
          "floor": 3,
          "number": "301",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "FAM",
          "floor": 3,
          "number": "303",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "FAM",
          "floor": 3,
          "number": "305",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "FAM",
          "floor": 4,
          "number": "401",
          "price": 3500,
          "isUsed": false
        },
        {
          "type": "FAM",
          "floor": 4,
          "number": "403",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "FAM",
          "floor": 4,
          "number": "405",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "STE",
          "floor": 6,
          "number": "601",
          "price": 4800,
          "isUsed": true
        },
        {
          "type": "STE",
          "floor": 6,
          "number": "603",
          "price": 4800,
          "isUsed": true
        },
        {
          "type": "STE",
          "floor": 6,
          "number": "605",
          "price": 4800,
          "isUsed": false
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
          "price": 2500,
          "isUsed": false
        },
        {
          "type": "ECD",
          "floor": 1,
          "number": "104",
          "price": 2500,
          "isUsed": false
        },
        {
          "type": "ECD",
          "floor": 2,
          "number": "202",
          "price": 2500,
          "isUsed": true
        },
        {
          "type": "ECD",
          "floor": 2,
          "number": "204",
          "price": 2500,
          "isUsed": true
        },
        {
          "type": "STD",
          "floor": 2,
          "number": "216",
          "price": 2500,
          "isUsed": false
        },
        {
          "type": "STD",
          "floor": 2,
          "number": "218",
          "price": 2500,
          "isUsed": true
        },
        {
          "type": "STD",
          "floor": 2,
          "number": "220",
          "price": 2500,
          "isUsed": true
        },
        {
          "type": "STD",
          "floor": 3,
          "number": "316",
          "price": 2500,
          "isUsed": true
        },
        {
          "type": "STD",
          "floor": 3,
          "number": "318",
          "price": 2500,
          "isUsed": true
        },
        {
          "type": "STD",
          "floor": 3,
          "number": "320",
          "price": 2500,
          "isUsed": true
        },
        {
          "type": "FAM",
          "floor": 3,
          "number": "301",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "FAM",
          "floor": 3,
          "number": "303",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "FAM",
          "floor": 3,
          "number": "305",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "FAM",
          "floor": 4,
          "number": "401",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "FAM",
          "floor": 4,
          "number": "403",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "FAM",
          "floor": 4,
          "number": "405",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "STE",
          "floor": 6,
          "number": "601",
          "price": 4800,
          "isUsed": true
        },
        {
          "type": "STE",
          "floor": 6,
          "number": "603",
          "price": 4800,
          "isUsed": true
        },
        {
          "type": "STE",
          "floor": 6,
          "number": "605",
          "price": 4800,
          "isUsed": true
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
          "price": 2500,
          "isUsed": false
        },
        {
          "type": "ECD",
          "floor": 1,
          "number": "104",
          "price": 2500,
          "isUsed": false
        },
        {
          "type": "ECD",
          "floor": 2,
          "number": "202",
          "price": 2500,
          "isUsed": true
        },
        {
          "type": "ECD",
          "floor": 2,
          "number": "204",
          "price": 2500,
          "isUsed": false
        },
        {
          "type": "STD",
          "floor": 2,
          "number": "216",
          "price": 2500,
          "isUsed": true
        },
        {
          "type": "STD",
          "floor": 2,
          "number": "218",
          "price": 2500,
          "isUsed": true
        },
        {
          "type": "STD",
          "floor": 2,
          "number": "220",
          "price": 2500,
          "isUsed": true
        },
        {
          "type": "STD",
          "floor": 3,
          "number": "316",
          "price": 2500,
          "isUsed": false
        },
        {
          "type": "STD",
          "floor": 3,
          "number": "318",
          "price": 2500,
          "isUsed": false
        },
        {
          "type": "STD",
          "floor": 3,
          "number": "320",
          "price": 2500,
          "isUsed": false
        },
        {
          "type": "FAM",
          "floor": 3,
          "number": "301",
          "price": 3500,
          "isUsed": false
        },
        {
          "type": "FAM",
          "floor": 3,
          "number": "303",
          "price": 3500,
          "isUsed": false
        },
        {
          "type": "FAM",
          "floor": 3,
          "number": "305",
          "price": 3500,
          "isUsed": false
        },
        {
          "type": "FAM",
          "floor": 4,
          "number": "401",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "FAM",
          "floor": 4,
          "number": "403",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "FAM",
          "floor": 4,
          "number": "405",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "STE",
          "floor": 6,
          "number": "601",
          "price": 4800,
          "isUsed": false
        },
        {
          "type": "STE",
          "floor": 6,
          "number": "603",
          "price": 4800,
          "isUsed": false
        },
        {
          "type": "STE",
          "floor": 6,
          "number": "605",
          "price": 4800,
          "isUsed": false
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
          "price": 2500,
          "isUsed": false
        },
        {
          "type": "ECD",
          "floor": 1,
          "number": "104",
          "price": 2500,
          "isUsed": false
        },
        {
          "type": "ECD",
          "floor": 2,
          "number": "202",
          "price": 2500,
          "isUsed": true
        },
        {
          "type": "ECD",
          "floor": 2,
          "number": "204",
          "price": 2500,
          "isUsed": true
        },
        {
          "type": "STD",
          "floor": 2,
          "number": "216",
          "price": 2800,
          "isUsed": true
        },
        {
          "type": "STD",
          "floor": 2,
          "number": "218",
          "price": 2800,
          "isUsed": false
        },
        {
          "type": "STD",
          "floor": 2,
          "number": "220",
          "price": 2800,
          "isUsed": true
        },
        {
          "type": "STD",
          "floor": 3,
          "number": "316",
          "price": 2800,
          "isUsed": true
        },
        {
          "type": "STD",
          "floor": 3,
          "number": "318",
          "price": 2800,
          "isUsed": true
        },
        {
          "type": "STD",
          "floor": 3,
          "number": "320",
          "price": 2800,
          "isUsed": true
        },
        {
          "type": "FAM",
          "floor": 3,
          "number": "301",
          "price": 3500,
          "isUsed": false
        },
        {
          "type": "FAM",
          "floor": 3,
          "number": "303",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "FAM",
          "floor": 3,
          "number": "305",
          "price": 3500,
          "isUsed": false
        },
        {
          "type": "FAM",
          "floor": 4,
          "number": "401",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "FAM",
          "floor": 4,
          "number": "403",
          "price": 3500,
          "isUsed": false
        },
        {
          "type": "FAM",
          "floor": 4,
          "number": "405",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "STE",
          "floor": 6,
          "number": "601",
          "price": 4800,
          "isUsed": true
        },
        {
          "type": "STE",
          "floor": 6,
          "number": "603",
          "price": 4800,
          "isUsed": false
        },
        {
          "type": "STE",
          "floor": 6,
          "number": "605",
          "price": 4800,
          "isUsed": true
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
          "price": 2500,
          "isUsed": true
        },
        {
          "type": "ECD",
          "floor": 1,
          "number": "104",
          "price": 2500,
          "isUsed": true
        },
        {
          "type": "ECD",
          "floor": 2,
          "number": "202",
          "price": 2500,
          "isUsed": true
        },
        {
          "type": "ECD",
          "floor": 2,
          "number": "204",
          "price": 2500,
          "isUsed": true
        },
        {
          "type": "STD",
          "floor": 2,
          "number": "216",
          "price": 2800,
          "isUsed": true
        },
        {
          "type": "STD",
          "floor": 2,
          "number": "218",
          "price": 2800,
          "isUsed": true
        },
        {
          "type": "STD",
          "floor": 2,
          "number": "220",
          "price": 2800,
          "isUsed": false
        },
        {
          "type": "STD",
          "floor": 3,
          "number": "316",
          "price": 2800,
          "isUsed": false
        },
        {
          "type": "STD",
          "floor": 3,
          "number": "318",
          "price": 2800,
          "isUsed": false
        },
        {
          "type": "STD",
          "floor": 3,
          "number": "320",
          "price": 2800,
          "isUsed": true
        },
        {
          "type": "FAM",
          "floor": 3,
          "number": "301",
          "price": 3500,
          "isUsed": false
        },
        {
          "type": "FAM",
          "floor": 3,
          "number": "303",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "FAM",
          "floor": 3,
          "number": "305",
          "price": 3500,
          "isUsed": false
        },
        {
          "type": "FAM",
          "floor": 4,
          "number": "401",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "FAM",
          "floor": 4,
          "number": "403",
          "price": 3500,
          "isUsed": false
        },
        {
          "type": "FAM",
          "floor": 4,
          "number": "405",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "STE",
          "floor": 6,
          "number": "601",
          "price": 4800,
          "isUsed": true
        },
        {
          "type": "STE",
          "floor": 6,
          "number": "603",
          "price": 4800,
          "isUsed": true
        },
        {
          "type": "STE",
          "floor": 6,
          "number": "605",
          "price": 4800,
          "isUsed": false
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
          "price": 2500,
          "isUsed": true
        },
        {
          "type": "ECD",
          "floor": 1,
          "number": "104",
          "price": 2500,
          "isUsed": true
        },
        {
          "type": "ECD",
          "floor": 2,
          "number": "202",
          "price": 2500,
          "isUsed": true
        },
        {
          "type": "ECD",
          "floor": 2,
          "number": "204",
          "price": 2500,
          "isUsed": true
        },
        {
          "type": "STD",
          "floor": 2,
          "number": "216",
          "price": 2800,
          "isUsed": true
        },
        {
          "type": "STD",
          "floor": 2,
          "number": "218",
          "price": 2800,
          "isUsed": true
        },
        {
          "type": "STD",
          "floor": 2,
          "number": "220",
          "price": 2800,
          "isUsed": false
        },
        {
          "type": "STD",
          "floor": 3,
          "number": "316",
          "price": 2800,
          "isUsed": false
        },
        {
          "type": "STD",
          "floor": 3,
          "number": "318",
          "price": 2800,
          "isUsed": false
        },
        {
          "type": "STD",
          "floor": 3,
          "number": "320",
          "price": 2800,
          "isUsed": true
        },
        {
          "type": "FAM",
          "floor": 3,
          "number": "301",
          "price": 3500,
          "isUsed": false
        },
        {
          "type": "FAM",
          "floor": 3,
          "number": "303",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "FAM",
          "floor": 3,
          "number": "305",
          "price": 3500,
          "isUsed": false
        },
        {
          "type": "FAM",
          "floor": 4,
          "number": "401",
          "price": 3500,
          "isUsed": false
        },
        {
          "type": "FAM",
          "floor": 4,
          "number": "403",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "FAM",
          "floor": 4,
          "number": "405",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "STE",
          "floor": 6,
          "number": "601",
          "price": 4800,
          "isUsed": true
        },
        {
          "type": "STE",
          "floor": 6,
          "number": "603",
          "price": 4800,
          "isUsed": true
        },
        {
          "type": "STE",
          "floor": 6,
          "number": "605",
          "price": 4800,
          "isUsed": false
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
          "price": 2500,
          "isUsed": true
        },
        {
          "type": "ECD",
          "floor": 1,
          "number": "104",
          "price": 2500,
          "isUsed": true
        },
        {
          "type": "ECD",
          "floor": 2,
          "number": "202",
          "price": 2500,
          "isUsed": false
        },
        {
          "type": "ECD",
          "floor": 2,
          "number": "204",
          "price": 2500,
          "isUsed": false
        },
        {
          "type": "STD",
          "floor": 2,
          "number": "216",
          "price": 2800,
          "isUsed": true
        },
        {
          "type": "STD",
          "floor": 2,
          "number": "218",
          "price": 2800,
          "isUsed": false
        },
        {
          "type": "STD",
          "floor": 2,
          "number": "220",
          "price": 2800,
          "isUsed": true
        },
        {
          "type": "STD",
          "floor": 3,
          "number": "316",
          "price": 2800,
          "isUsed": true
        },
        {
          "type": "STD",
          "floor": 3,
          "number": "318",
          "price": 2800,
          "isUsed": true
        },
        {
          "type": "STD",
          "floor": 3,
          "number": "320",
          "price": 2800,
          "isUsed": false
        },
        {
          "type": "FAM",
          "floor": 3,
          "number": "301",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "FAM",
          "floor": 3,
          "number": "303",
          "price": 3500,
          "isUsed": false
        },
        {
          "type": "FAM",
          "floor": 3,
          "number": "305",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "FAM",
          "floor": 4,
          "number": "401",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "FAM",
          "floor": 4,
          "number": "403",
          "price": 3500,
          "isUsed": false
        },
        {
          "type": "FAM",
          "floor": 4,
          "number": "405",
          "price": 3500,
          "isUsed": false
        },
        {
          "type": "STE",
          "floor": 6,
          "number": "601",
          "price": 4800,
          "isUsed": true
        },
        {
          "type": "STE",
          "floor": 6,
          "number": "603",
          "price": 4800,
          "isUsed": false
        },
        {
          "type": "STE",
          "floor": 6,
          "number": "605",
          "price": 4800,
          "isUsed": true
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
          "price": 2500,
          "isUsed": true
        },
        {
          "type": "ECD",
          "floor": 1,
          "number": "104",
          "price": 2500,
          "isUsed": true
        },
        {
          "type": "ECD",
          "floor": 2,
          "number": "202",
          "price": 2500,
          "isUsed": false
        },
        {
          "type": "ECD",
          "floor": 2,
          "number": "204",
          "price": 2500,
          "isUsed": false
        },
        {
          "type": "STD",
          "floor": 2,
          "number": "216",
          "price": 2800,
          "isUsed": false
        },
        {
          "type": "STD",
          "floor": 2,
          "number": "218",
          "price": 2800,
          "isUsed": true
        },
        {
          "type": "STD",
          "floor": 2,
          "number": "220",
          "price": 2800,
          "isUsed": false
        },
        {
          "type": "STD",
          "floor": 3,
          "number": "316",
          "price": 2800,
          "isUsed": false
        },
        {
          "type": "STD",
          "floor": 3,
          "number": "318",
          "price": 2800,
          "isUsed": false
        },
        {
          "type": "STD",
          "floor": 3,
          "number": "320",
          "price": 2800,
          "isUsed": false
        },
        {
          "type": "FAM",
          "floor": 3,
          "number": "301",
          "price": 3500,
          "isUsed": false
        },
        {
          "type": "FAM",
          "floor": 3,
          "number": "303",
          "price": 3500,
          "isUsed": false
        },
        {
          "type": "FAM",
          "floor": 3,
          "number": "305",
          "price": 3500,
          "isUsed": false
        },
        {
          "type": "FAM",
          "floor": 4,
          "number": "401",
          "price": 3500,
          "isUsed": false
        },
        {
          "type": "FAM",
          "floor": 4,
          "number": "403",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "FAM",
          "floor": 4,
          "number": "405",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "STE",
          "floor": 6,
          "number": "601",
          "price": 4800,
          "isUsed": false
        },
        {
          "type": "STE",
          "floor": 6,
          "number": "603",
          "price": 4800,
          "isUsed": true
        },
        {
          "type": "STE",
          "floor": 6,
          "number": "605",
          "price": 4800,
          "isUsed": false
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
          "price": 2500,
          "isUsed": false
        },
        {
          "type": "ECD",
          "floor": 1,
          "number": "104",
          "price": 2500,
          "isUsed": false
        },
        {
          "type": "ECD",
          "floor": 2,
          "number": "202",
          "price": 2500,
          "isUsed": false
        },
        {
          "type": "ECD",
          "floor": 2,
          "number": "204",
          "price": 2500,
          "isUsed": false
        },
        {
          "type": "STD",
          "floor": 2,
          "number": "216",
          "price": 2800,
          "isUsed": false
        },
        {
          "type": "STD",
          "floor": 2,
          "number": "218",
          "price": 2800,
          "isUsed": true
        },
        {
          "type": "STD",
          "floor": 2,
          "number": "220",
          "price": 2800,
          "isUsed": true
        },
        {
          "type": "STD",
          "floor": 3,
          "number": "316",
          "price": 2800,
          "isUsed": false
        },
        {
          "type": "STD",
          "floor": 3,
          "number": "318",
          "price": 2800,
          "isUsed": false
        },
        {
          "type": "STD",
          "floor": 3,
          "number": "320",
          "price": 2800,
          "isUsed": false
        },
        {
          "type": "FAM",
          "floor": 3,
          "number": "301",
          "price": 3500,
          "isUsed": false
        },
        {
          "type": "FAM",
          "floor": 3,
          "number": "303",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "FAM",
          "floor": 3,
          "number": "305",
          "price": 3500,
          "isUsed": false
        },
        {
          "type": "FAM",
          "floor": 4,
          "number": "401",
          "price": 3500,
          "isUsed": false
        },
        {
          "type": "FAM",
          "floor": 4,
          "number": "403",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "FAM",
          "floor": 4,
          "number": "405",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "STE",
          "floor": 6,
          "number": "601",
          "price": 4800,
          "isUsed": false
        },
        {
          "type": "STE",
          "floor": 6,
          "number": "603",
          "price": 4800,
          "isUsed": true
        },
        {
          "type": "STE",
          "floor": 6,
          "number": "605",
          "price": 4800,
          "isUsed": true
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
          "price": 2500,
          "isUsed": false
        },
        {
          "type": "ECD",
          "floor": 1,
          "number": "104",
          "price": 2500,
          "isUsed": false
        },
        {
          "type": "ECD",
          "floor": 2,
          "number": "202",
          "price": 2500,
          "isUsed": false
        },
        {
          "type": "ECD",
          "floor": 2,
          "number": "204",
          "price": 2500,
          "isUsed": false
        },
        {
          "type": "STD",
          "floor": 2,
          "number": "216",
          "price": 2800,
          "isUsed": false
        },
        {
          "type": "STD",
          "floor": 2,
          "number": "218",
          "price": 2800,
          "isUsed": false
        },
        {
          "type": "STD",
          "floor": 2,
          "number": "220",
          "price": 2800,
          "isUsed": false
        },
        {
          "type": "STD",
          "floor": 3,
          "number": "316",
          "price": 2800,
          "isUsed": false
        },
        {
          "type": "STD",
          "floor": 3,
          "number": "318",
          "price": 2800,
          "isUsed": false
        },
        {
          "type": "STD",
          "floor": 3,
          "number": "320",
          "price": 2800,
          "isUsed": false
        },
        {
          "type": "FAM",
          "floor": 3,
          "number": "301",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "FAM",
          "floor": 3,
          "number": "303",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "FAM",
          "floor": 3,
          "number": "305",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "FAM",
          "floor": 4,
          "number": "401",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "FAM",
          "floor": 4,
          "number": "403",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "FAM",
          "floor": 4,
          "number": "405",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "STE",
          "floor": 6,
          "number": "601",
          "price": 4800,
          "isUsed": true
        },
        {
          "type": "STE",
          "floor": 6,
          "number": "603",
          "price": 4800,
          "isUsed": false
        },
        {
          "type": "STE",
          "floor": 6,
          "number": "605",
          "price": 4800,
          "isUsed": false
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
          "price": 2500,
          "isUsed": false
        },
        {
          "type": "ECD",
          "floor": 1,
          "number": "104",
          "price": 2500,
          "isUsed": false
        },
        {
          "type": "ECD",
          "floor": 2,
          "number": "202",
          "price": 2500,
          "isUsed": false
        },
        {
          "type": "ECD",
          "floor": 2,
          "number": "204",
          "price": 2500,
          "isUsed": false
        },
        {
          "type": "STD",
          "floor": 2,
          "number": "216",
          "price": 2800,
          "isUsed": false
        },
        {
          "type": "STD",
          "floor": 2,
          "number": "218",
          "price": 2800,
          "isUsed": false
        },
        {
          "type": "STD",
          "floor": 2,
          "number": "220",
          "price": 2800,
          "isUsed": false
        },
        {
          "type": "STD",
          "floor": 3,
          "number": "316",
          "price": 2800,
          "isUsed": false
        },
        {
          "type": "STD",
          "floor": 3,
          "number": "318",
          "price": 2800,
          "isUsed": false
        },
        {
          "type": "STD",
          "floor": 3,
          "number": "320",
          "price": 2800,
          "isUsed": false
        },
        {
          "type": "FAM",
          "floor": 3,
          "number": "301",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "FAM",
          "floor": 3,
          "number": "303",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "FAM",
          "floor": 3,
          "number": "305",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "FAM",
          "floor": 4,
          "number": "401",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "FAM",
          "floor": 4,
          "number": "403",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "FAM",
          "floor": 4,
          "number": "405",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "STE",
          "floor": 6,
          "number": "601",
          "price": 4800,
          "isUsed": true
        },
        {
          "type": "STE",
          "floor": 6,
          "number": "603",
          "price": 4800,
          "isUsed": false
        },
        {
          "type": "STE",
          "floor": 6,
          "number": "605",
          "price": 4800,
          "isUsed": false
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
          "price": 2500,
          "isUsed": false
        },
        {
          "type": "ECD",
          "floor": 1,
          "number": "104",
          "price": 2500,
          "isUsed": false
        },
        {
          "type": "ECD",
          "floor": 2,
          "number": "202",
          "price": 2500,
          "isUsed": false
        },
        {
          "type": "ECD",
          "floor": 2,
          "number": "204",
          "price": 2500,
          "isUsed": false
        },
        {
          "type": "STD",
          "floor": 2,
          "number": "216",
          "price": 2800,
          "isUsed": false
        },
        {
          "type": "STD",
          "floor": 2,
          "number": "218",
          "price": 2800,
          "isUsed": false
        },
        {
          "type": "STD",
          "floor": 2,
          "number": "220",
          "price": 2800,
          "isUsed": false
        },
        {
          "type": "STD",
          "floor": 3,
          "number": "316",
          "price": 2800,
          "isUsed": false
        },
        {
          "type": "STD",
          "floor": 3,
          "number": "318",
          "price": 2800,
          "isUsed": false
        },
        {
          "type": "STD",
          "floor": 3,
          "number": "320",
          "price": 2800,
          "isUsed": false
        },
        {
          "type": "FAM",
          "floor": 3,
          "number": "301",
          "price": 3500,
          "isUsed": false
        },
        {
          "type": "FAM",
          "floor": 3,
          "number": "303",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "FAM",
          "floor": 3,
          "number": "305",
          "price": 3500,
          "isUsed": false
        },
        {
          "type": "FAM",
          "floor": 4,
          "number": "401",
          "price": 3500,
          "isUsed": false
        },
        {
          "type": "FAM",
          "floor": 4,
          "number": "403",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "FAM",
          "floor": 4,
          "number": "405",
          "price": 3500,
          "isUsed": true
        },
        {
          "type": "STE",
          "floor": 6,
          "number": "601",
          "price": 4800,
          "isUsed": false
        },
        {
          "type": "STE",
          "floor": 6,
          "number": "603",
          "price": 4800,
          "isUsed": true
        },
        {
          "type": "STE",
          "floor": 6,
          "number": "605",
          "price": 4800,
          "isUsed": false
        }
      ]
    }
  ],


  "bookings": [
    {
      "user": [
        "Eric, Hung"
      ],
      "tel": "0912345678",
      "rooms": [
        "202"
      ],
      "bookingDate": "2023-11-15",
      "checkIn": "2024-05-22",
      "checkOut": "2024-05-23",
      "checkInTime": "2024-05-22 16:00:00",
      "checkOutTime": "2024-05-23 10:00:00",
      "state": "future",
      "bookingType": "individual",
      "conf": "125688",
      "roomType": "ECD",
      "price": 2500,
      "total": 2500,
      "quantity": 1,
      "night": 1,
      "id": "e6783aea-81e5-47d0-b09e-f356e3e97471"
    },
    {
      "user": [
        "James, Chen",
        "Lulu, Lin",
        "Candy, Lee"
      ],
      "tel": "0912456789",
      "rooms": [
        "216",
        "218",
        "220"
      ],
      "bookingDate": "2023-11-15",
      "checkIn": "2024-05-22",
      "checkOut": "2024-05-23",
      "checkInTime": "2024-05-22 18:00:00",
      "checkOutTime": "2024-05-23 10:00:00",
      "state": "future",
      "bookingType": "group",
      "conf": "225678",
      "roomType": "STD",
      "price": 2500,
      "total": 8400,
      "quantity": 3,
      "night": 1,
      "id": "d0175acc-2388-48fa-a679-88434faa7042"
    },
    {
      "user": [
        "Lillie, Rivera"
      ],
      "rooms": [
        "204"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0991594103",
      "checkIn": "2024-05-18",
      "checkOut": "2024-05-20",
      "checkInTime": "2024-05-18 24:00:00",
      "checkOutTime": "2024-05-20 14:00:00",
      "bookingType": "individual",
      "roomType": "ECD",
      "state": "checkout",
      "conf": 394249,
      "quantity": 1,
      "price": 2500,
      "night": 2,
      "id": "22c7656b-68cf-4034-805f-e3bc285cf3e1"
    },
    {
      "user": [
        "Neil, Hart"
      ],
      "rooms": [
        "104"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0918714354",
      "checkIn": "2024-05-18",
      "checkOut": "2024-05-19",
      "checkInTime": "2024-05-18 24:00:00",
      "checkOutTime": "2024-05-19 15:00:00",
      "bookingType": "individual",
      "roomType": "ECD",
      "state": "checkout",
      "conf": 731287,
      "quantity": 1,
      "price": 2500,
      "night": 1,
      "id": "eb29ded6-e73e-4228-b7bc-f9f36e975d24"
    },
    {
      "user": [
        "Sarah, Mckinney"
      ],
      "rooms": [
        "216"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0940048125",
      "checkIn": "2024-05-18",
      "checkOut": "2024-05-20",
      "checkInTime": "2024-05-18 24:00:00",
      "checkOutTime": "2024-05-20 14:00:00",
      "bookingType": "individual",
      "roomType": "STD",
      "state": "checkout",
      "conf": 777289,
      "quantity": 1,
      "price": 2500,
      "night": 2,
      "id": "3f0348dc-7bca-45a5-8280-4c075dd7dc1b"
    },
    {
      "user": [
        "Evelyn, Reid"
      ],
      "rooms": [
        "316"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0985113151",
      "checkIn": "2024-05-18",
      "checkOut": "2024-05-20",
      "checkInTime": "2024-05-18 24:00:00",
      "checkOutTime": "2024-05-20 14:00:00",
      "bookingType": "individual",
      "roomType": "STD",
      "state": "checkout",
      "conf": 315216,
      "quantity": 1,
      "price": 2500,
      "night": 2,
      "id": "93f8efc1-f1b0-4f22-8b5f-87193a721a20"
    },
    {
      "user": [
        "Margie, Hunter"
      ],
      "rooms": [
        "320"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0952746403",
      "checkIn": "2024-05-18",
      "checkOut": "2024-05-19",
      "checkInTime": "2024-05-18 24:00:00",
      "checkOutTime": "2024-05-19 14:00:00",
      "bookingType": "individual",
      "roomType": "STD",
      "state": "checkout",
      "conf": 300218,
      "quantity": 1,
      "price": 2500,
      "night": 1,
      "id": "9c47adcb-abdc-4ae2-8087-46cf41bc6e13"
    },
    {
      "user": [
        "Shannon, Ray"
      ],
      "rooms": [
        "301"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0937289674",
      "checkIn": "2024-05-18",
      "checkOut": "2024-05-20",
      "checkInTime": "2024-05-18 24:00:00",
      "checkOutTime": "2024-05-20 14:00:00",
      "bookingType": "individual",
      "roomType": "FAM",
      "state": "checkout",
      "conf": 446891,
      "quantity": 1,
      "price": 3500,
      "night": 2,
      "id": "b53a3c93-7bec-42c9-9e12-9a25f44131ee"
    },
    {
      "user": [
        "Tara, Henry"
      ],
      "rooms": [
        "303"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0992513086",
      "checkIn": "2024-05-18",
      "checkOut": "2024-05-19",
      "checkInTime": "2024-05-18 24:00:00",
      "checkOutTime": "2024-05-19 14:00:00",
      "bookingType": "individual",
      "roomType": "FAM",
      "state": "checkout",
      "conf": 69197,
      "quantity": 1,
      "price": 3500,
      "night": 1,
      "id": "fbbc842c-5808-4bd1-9930-6787caa2e47e"
    },
    {
      "user": [
        "Albert, Henry"
      ],
      "rooms": [
        "305"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0931715076",
      "checkIn": "2024-05-18",
      "checkOut": "2024-05-19",
      "checkInTime": "2024-05-18 24:00:00",
      "checkOutTime": "2024-05-19 14:00:00",
      "bookingType": "individual",
      "roomType": "FAM",
      "state": "checkout",
      "conf": 252295,
      "quantity": 1,
      "price": 3500,
      "night": 1,
      "id": "0b729c2b-a125-491f-8d06-9942dba1cdf4"
    },
    {
      "user": [
        "Rene, Martinez"
      ],
      "rooms": [
        "401"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0937061635",
      "checkIn": "2024-05-18",
      "checkOut": "2024-05-20",
      "checkInTime": "2024-05-18 24:00:00",
      "checkOutTime": "2024-05-20 14:00:00",
      "bookingType": "individual",
      "roomType": "FAM",
      "state": "checkout",
      "conf": 486614,
      "quantity": 1,
      "price": 3500,
      "night": 2,
      "id": "be1d35af-cb32-45c4-9d6a-e14542f5cbcc"
    },
    {
      "user": [
        "Hunter, Duncan"
      ],
      "rooms": [
        "403"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0973772626",
      "checkIn": "2024-05-18",
      "checkOut": "2024-05-19",
      "checkInTime": "2024-05-18 24:00:00",
      "checkOutTime": "2024-05-19 14:00:00",
      "bookingType": "individual",
      "roomType": "FAM",
      "state": "checkout",
      "conf": 374432,
      "quantity": 1,
      "price": 3500,
      "night": 1,
      "id": "1dc79f69-5ad9-4e6c-8984-5ad4c88f0515"
    },
    {
      "user": [
        "Sarah, King"
      ],
      "rooms": [
        "405"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0929683978",
      "checkIn": "2024-05-18",
      "checkOut": "2024-05-19",
      "checkInTime": "2024-05-18 24:00:00",
      "checkOutTime": "2024-05-19 14:00:00",
      "bookingType": "individual",
      "roomType": "FAM",
      "state": "checkout",
      "conf": 445583,
      "quantity": 1,
      "price": 3500,
      "night": 1,
      "id": "45041d1e-9a62-45fa-9cd0-168b0f364d17"
    },
    {
      "user": [
        "Sonia, Turner"
      ],
      "rooms": [
        "601"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0971690628",
      "checkIn": "2024-05-18",
      "checkOut": "2024-05-20",
      "checkInTime": "2024-05-18 24:00:00",
      "checkOutTime": "2024-05-20 14:00:00",
      "bookingType": "individual",
      "roomType": "STE",
      "state": "checkout",
      "conf": 312868,
      "quantity": 1,
      "price": 4800,
      "night": 2,
      "id": "f79ff3e3-3ada-4adc-8267-065749f4cafd"
    },
    {
      "user": [
        "Clyde, Scott"
      ],
      "rooms": [
        "104"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0923674833",
      "checkIn": "2024-05-19",
      "checkOut": "2024-05-20",
      "checkInTime": "2024-05-19 24:00:00",
      "checkOutTime": "2024-05-20 14:00:00",
      "bookingType": "individual",
      "roomType": "ECD",
      "state": "checkout",
      "conf": 573174,
      "quantity": 1,
      "price": 2500,
      "night": 1,
      "id": "a6fd7995-b5f7-48a1-83e8-fa6f5bbc7a4d"
    },
    {
      "user": [
        "Felix, Medina"
      ],
      "rooms": [
        "218"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0994620745",
      "checkIn": "2024-05-19",
      "checkOut": "2024-05-20",
      "checkInTime": "2024-05-19 24:00:00",
      "checkOutTime": "2024-05-20 14:00:00",
      "bookingType": "individual",
      "roomType": "STD",
      "state": "checkout",
      "conf": 478002,
      "quantity": 1,
      "price": 2500,
      "night": 1,
      "id": "823feae5-85c1-431c-9a1b-8632b950d9e1"
    },
    {
      "user": [
        "Joann, Cruz"
      ],
      "rooms": [
        "220"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0939039207",
      "checkIn": "2024-05-19",
      "checkOut": "2024-05-20",
      "checkInTime": "2024-05-19 24:00:00",
      "checkOutTime": "2024-05-20 14:00:00",
      "bookingType": "individual",
      "roomType": "STD",
      "state": "checkout",
      "conf": 849223,
      "quantity": 1,
      "price": 2500,
      "night": 1,
      "id": "41a124cb-9ff2-4fc4-9a17-172c038e8172"
    },
    {
      "user": [
        "Meghan, Ortiz"
      ],
      "rooms": [
        "318"
      ],
      "bookingDate": "2023-11-15",
      "tel": "09923223",
      "checkIn": "2024-05-19",
      "checkOut": "2024-05-20",
      "checkInTime": "2024-05-19 24:00:00",
      "checkOutTime": "2024-05-20 14:00:00",
      "bookingType": "individual",
      "roomType": "STD",
      "state": "checkout",
      "conf": 667175,
      "quantity": 1,
      "price": 2500,
      "night": 1,
      "id": "67db1fd8-7079-4520-9f82-0cc8b680abbc"
    },
    {
      "user": [
        "Kelly, Hamilton"
      ],
      "rooms": [
        "320"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0915095944",
      "checkIn": "2024-05-19",
      "checkOut": "2024-05-20",
      "checkInTime": "2024-05-19 24:00:00",
      "checkOutTime": "2024-05-20 14:00:00",
      "bookingType": "individual",
      "roomType": "STD",
      "state": "checkout",
      "conf": 566558,
      "quantity": 1,
      "price": 2500,
      "night": 1,
      "id": "ddb102e9-a184-4969-a2df-1c68dadf30ae"
    },
    {
      "user": [
        "Kurt, Ross"
      ],
      "rooms": [
        "303"
      ],
      "bookingDate": "2023-11-15",
      "tel": "095996364",
      "checkIn": "2024-05-19",
      "checkOut": "2024-05-20",
      "checkInTime": "2024-05-19 24:00:00",
      "checkOutTime": "2024-05-20 14:00:00",
      "bookingType": "individual",
      "roomType": "FAM",
      "state": "checkout",
      "conf": 117131,
      "quantity": 1,
      "price": 3500,
      "night": 1,
      "id": "f264d521-3c3f-4f7b-9397-3bff1ffc0b78"
    },
    {
      "user": [
        "Nora, Kim"
      ],
      "rooms": [
        "305"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0923415971",
      "checkIn": "2024-05-19",
      "checkOut": "2024-05-20",
      "checkInTime": "2024-05-19 24:00:00",
      "checkOutTime": "2024-05-20 14:00:00",
      "bookingType": "individual",
      "roomType": "FAM",
      "state": "checkout",
      "conf": 215357,
      "quantity": 1,
      "price": 3500,
      "night": 1,
      "id": "0e1b6d01-3021-472c-8244-9da710bec74b"
    },
    {
      "user": [
        "Shannon, Crawford"
      ],
      "rooms": [
        "403"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0994701086",
      "checkIn": "2024-05-19",
      "checkOut": "2024-05-20",
      "checkInTime": "2024-05-19 24:00:00",
      "checkOutTime": "2024-05-20 14:00:00",
      "bookingType": "individual",
      "roomType": "FAM",
      "state": "checkout",
      "conf": 772169,
      "quantity": 1,
      "price": 3500,
      "night": 1,
      "id": "cc59623c-135a-4952-9e5a-17c5a63327e0"
    },
    {
      "user": [
        "Zoey, Richards"
      ],
      "rooms": [
        "405"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0997759495",
      "checkIn": "2024-05-19",
      "checkOut": "2024-05-20",
      "checkInTime": "2024-05-19 24:00:00",
      "checkOutTime": "2024-05-20 14:00:00",
      "bookingType": "individual",
      "roomType": "FAM",
      "state": "checkout",
      "conf": 228972,
      "quantity": 1,
      "price": 3500,
      "night": 1,
      "id": "457eddaa-eeb1-4284-bc68-deb4a1e430fe"
    },
    {
      "user": [
        "Dolores, Mccoy"
      ],
      "rooms": [
        "102"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0955704262",
      "checkIn": "2024-05-20",
      "checkOut": "2024-05-21",
      "checkInTime": "2024-05-20 20:00:00",
      "checkOutTime": "2024-05-21 13:00:00",
      "bookingType": "individual",
      "roomType": "ECD",
      "state": "future",
      "conf": 126687,
      "quantity": 1,
      "price": 2500,
      "night": 1,
      "id": "bc67114c-3416-4148-beea-a813be3207c3"
    },
    {
      "user": [
        "Phillip, Perkins"
      ],
      "rooms": [
        "104"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0920106811",
      "checkIn": "2024-05-20",
      "checkOut": "2024-05-21",
      "checkInTime": "2024-05-20 20:00:00",
      "checkOutTime": "2024-05-21 13:00:00",
      "bookingType": "individual",
      "roomType": "ECD",
      "state": "future",
      "conf": 654884,
      "quantity": 1,
      "price": 2500,
      "night": 1,
      "id": "3c0b055a-f95f-44ae-ae67-26194ece5e45"
    },
    {
      "user": [
        "Jerome, Barnett"
      ],
      "rooms": [
        "216"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0938264750",
      "checkIn": "2024-05-20",
      "checkOut": "2024-05-21",
      "checkInTime": "2024-05-20 20:00:00",
      "checkOutTime": "2024-05-21 13:00:00",
      "bookingType": "individual",
      "roomType": "STD",
      "state": "checkin",
      "conf": 233278,
      "quantity": 1,
      "price": 2500,
      "night": 1,
      "id": "0b862ee3-d554-404f-9943-e9487893704c"
    },
    {
      "user": [
        "Thomas, Clark"
      ],
      "rooms": [
        "218"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0970834195",
      "checkIn": "2024-05-20",
      "checkOut": "2024-05-21",
      "checkInTime": "2024-05-20 20:00:00",
      "checkOutTime": "2024-05-21 13:00:00",
      "bookingType": "individual",
      "roomType": "STD",
      "state": "future",
      "conf": 859088,
      "quantity": 1,
      "price": 2500,
      "night": 1,
      "id": "341724f3-4024-4a9a-9364-8c62ca4915b6"
    },
    {
      "user": [
        "Freddie, Welch"
      ],
      "rooms": [
        "220"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0956652341",
      "checkIn": "2024-05-20",
      "checkOut": "2024-05-21",
      "checkInTime": "2024-05-20 20:00:00",
      "checkOutTime": "2024-05-21 13:00:00",
      "bookingType": "individual",
      "roomType": "STD",
      "state": "checkin",
      "conf": 748636,
      "quantity": 1,
      "price": 2500,
      "night": 1,
      "id": "0a4dec81-7e5c-4cdd-94fc-0014ca0d1cef"
    },
    {
      "user": [
        "Delores, Peck"
      ],
      "rooms": [
        "318"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0983726854",
      "checkIn": "2024-05-20",
      "checkOut": "2024-05-21",
      "checkInTime": "2024-05-20 20:00:00",
      "checkOutTime": "2024-05-21 13:00:00",
      "bookingType": "individual",
      "roomType": "STD",
      "state": "checkin",
      "conf": 751342,
      "quantity": 1,
      "price": 2500,
      "night": 1,
      "id": "64885c52-1dbe-4e70-bc67-214e59da6b9f"
    },
    {
      "user": [
        "Leta, White"
      ],
      "rooms": [
        "320"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0968359406",
      "checkIn": "2024-05-20",
      "checkOut": "2024-05-22",
      "checkInTime": "2024-05-20 20:00:00",
      "checkOutTime": "2024-05-22 13:00:00",
      "bookingType": "individual",
      "roomType": "STD",
      "state": "future",
      "conf": 305355,
      "quantity": 1,
      "price": 2500,
      "night": 2,
      "id": "32e67173-8875-46ba-9011-ea1a4635a44a"
    },
    {
      "user": [
        "Tristan, Perry"
      ],
      "rooms": [
        "301"
      ],
      "bookingDate": "2023-11-15",
      "tel": "091177084",
      "checkIn": "2024-05-20",
      "checkOut": "2024-05-21",
      "checkInTime": "2024-05-20 20:00:00",
      "checkOutTime": "2024-05-21 13:00:00",
      "bookingType": "individual",
      "roomType": "FAM",
      "state": "checkin",
      "conf": 640771,
      "quantity": 1,
      "price": 3500,
      "night": 1,
      "id": "fbdf4275-30ba-4cb8-b188-56eeb3f2eeb6"
    },
    {
      "user": [
        "Jessie, Welch"
      ],
      "rooms": [
        "303"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0972940052",
      "checkIn": "2024-05-20",
      "checkOut": "2024-05-22",
      "checkInTime": "2024-05-20 20:00:00",
      "checkOutTime": "2024-05-22 13:00:00",
      "bookingType": "individual",
      "roomType": "FAM",
      "state": "future",
      "conf": 287339,
      "quantity": 1,
      "price": 3500,
      "night": 2,
      "id": "46ffa173-081b-4812-8d79-b9d638adc250"
    },
    {
      "user": [
        "Sue, Wheeler"
      ],
      "rooms": [
        "305"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0924155996",
      "checkIn": "2024-05-20",
      "checkOut": "2024-05-22",
      "checkInTime": "2024-05-20 20:00:00",
      "checkOutTime": "2024-05-22 13:00:00",
      "bookingType": "individual",
      "roomType": "FAM",
      "state": "future",
      "conf": 14484,
      "quantity": 1,
      "price": 3500,
      "night": 2,
      "id": "7482eb92-b3ee-449c-bee9-b3a7cc1f57b5"
    },
    {
      "user": [
        "Sergio, Green"
      ],
      "rooms": [
        "403"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0940255825",
      "checkIn": "2024-05-20",
      "checkOut": "2024-05-22",
      "checkInTime": "2024-05-20 20:00:00",
      "checkOutTime": "2024-05-22 13:00:00",
      "bookingType": "individual",
      "roomType": "FAM",
      "state": "checkin",
      "conf": 472872,
      "quantity": 1,
      "price": 3500,
      "night": 2,
      "id": "7de199ee-447d-4d84-aae4-01420ba2299b"
    },
    {
      "user": [
        "Felicia, Wood"
      ],
      "rooms": [
        "405"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0930303235",
      "checkIn": "2024-05-20",
      "checkOut": "2024-05-22",
      "checkInTime": "2024-05-20 20:00:00",
      "checkOutTime": "2024-05-22 13:00:00",
      "bookingType": "individual",
      "roomType": "FAM",
      "state": "checkin",
      "conf": 350321,
      "quantity": 1,
      "price": 3500,
      "night": 2,
      "id": "f8c53b01-8d09-4a85-8db1-ff407ffc37a6"
    },
    {
      "user": [
        "Stanley, Bailey"
      ],
      "rooms": [
        "601"
      ],
      "bookingDate": "2023-11-15",
      "tel": "09569882",
      "checkIn": "2024-05-20",
      "checkOut": "2024-05-21",
      "checkInTime": "2024-05-20 20:00:00",
      "checkOutTime": "2024-05-21 13:00:00",
      "bookingType": "individual",
      "roomType": "STE",
      "state": "future",
      "conf": 482846,
      "quantity": 1,
      "price": 4800,
      "night": 1,
      "id": "ad3a3c66-bc55-43e2-bcf5-649a7622a1b3"
    },
    {
      "user": [
        "Monica, Reed"
      ],
      "rooms": [
        "603"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0943422006",
      "checkIn": "2024-05-20",
      "checkOut": "2024-05-21",
      "checkInTime": "2024-05-20 20:00:00",
      "checkOutTime": "2024-05-21 13:00:00",
      "bookingType": "individual",
      "roomType": "STE",
      "state": "future",
      "conf": 529237,
      "quantity": 1,
      "price": 4800,
      "night": 1,
      "id": "e9251383-c734-4f6c-9c07-e937ccd97e94"
    },
    {
      "user": [
        "Brandie, Lee"
      ],
      "rooms": [
        "202"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0992017295",
      "checkIn": "2024-05-21",
      "checkOut": "2024-05-22",
      "checkInTime": "2024-05-21 20:00:00",
      "checkOutTime": "2024-05-22 13:00:00",
      "bookingType": "individual",
      "roomType": "ECD",
      "state": "future",
      "conf": 242292,
      "quantity": 1,
      "price": 2500,
      "night": 1,
      "id": "9a414eaf-68f5-49e3-be49-7393b47ffcb4"
    },
    {
      "user": [
        "Douglas, Ortiz"
      ],
      "rooms": [
        "204"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0981974381",
      "checkIn": "2024-05-21",
      "checkOut": "2024-05-22",
      "checkInTime": "2024-05-21 20:00:00",
      "checkOutTime": "2024-05-22 13:00:00",
      "bookingType": "individual",
      "roomType": "ECD",
      "state": "future",
      "conf": 445137,
      "quantity": 1,
      "price": 2500,
      "night": 1,
      "id": "bc6f7739-72cf-42de-aa1b-85e665a816cb"
    },
    {
      "user": [
        "Carolyn, Martin"
      ],
      "rooms": [
        "218"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0976037388",
      "checkIn": "2024-05-21",
      "checkOut": "2024-05-22",
      "checkInTime": "2024-05-21 20:00:00",
      "checkOutTime": "2024-05-22 13:00:00",
      "bookingType": "individual",
      "roomType": "STD",
      "state": "future",
      "conf": 671,
      "quantity": 1,
      "price": 2500,
      "night": 1,
      "id": "4d660d5e-54f6-4344-8990-91e188397347"
    },
    {
      "user": [
        "Jill, Baker"
      ],
      "rooms": [
        "220"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0914464818",
      "checkIn": "2024-05-21",
      "checkOut": "2024-05-22",
      "checkInTime": "2024-05-21 20:00:00",
      "checkOutTime": "2024-05-22 13:00:00",
      "bookingType": "individual",
      "roomType": "STD",
      "state": "future",
      "conf": 617133,
      "quantity": 1,
      "price": 2500,
      "night": 1,
      "id": "3a364792-d66a-45f4-b774-734beb73ae3d"
    },
    {
      "user": [
        "Toni, Fisher"
      ],
      "rooms": [
        "316"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0952839875",
      "checkIn": "2024-05-21",
      "checkOut": "2024-05-22",
      "checkInTime": "2024-05-21 20:00:00",
      "checkOutTime": "2024-05-22 13:00:00",
      "bookingType": "individual",
      "roomType": "STD",
      "state": "future",
      "conf": 514603,
      "quantity": 1,
      "price": 2500,
      "night": 1,
      "id": "56077d85-fc18-4bfb-8991-63c507de8241"
    },
    {
      "user": [
        "Lewis, Hawkins"
      ],
      "rooms": [
        "318"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0985303363",
      "checkIn": "2024-05-21",
      "checkOut": "2024-05-22",
      "checkInTime": "2024-05-21 20:00:00",
      "checkOutTime": "2024-05-22 13:00:00",
      "bookingType": "individual",
      "roomType": "STD",
      "state": "future",
      "conf": 151908,
      "quantity": 1,
      "price": 2500,
      "night": 1,
      "id": "727c5698-c6db-43d2-be94-aba06d76de37"
    },
    {
      "user": [
        "Michele, Herrera"
      ],
      "rooms": [
        "301"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0994807946",
      "checkIn": "2024-05-21",
      "checkOut": "2024-05-22",
      "checkInTime": "2024-05-21 20:00:00",
      "checkOutTime": "2024-05-22 13:00:00",
      "bookingType": "individual",
      "roomType": "FAM",
      "state": "future",
      "conf": 899234,
      "quantity": 1,
      "price": 3500,
      "night": 1,
      "id": "e2c61745-f8bd-4f6b-a925-b437ec083ba8"
    },
    {
      "user": [
        "Noelle, Freeman"
      ],
      "rooms": [
        "401"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0955846923",
      "checkIn": "2024-05-21",
      "checkOut": "2024-05-22",
      "checkInTime": "2024-05-21 20:00:00",
      "checkOutTime": "2024-05-22 13:00:00",
      "bookingType": "individual",
      "roomType": "FAM",
      "state": "future",
      "conf": 764388,
      "quantity": 1,
      "price": 3500,
      "night": 1,
      "id": "28761cd1-bb5b-4c12-8902-808e720df856"
    },
    {
      "user": [
        "Mathew, Simpson"
      ],
      "rooms": [
        "601"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0932679164",
      "checkIn": "2024-05-21",
      "checkOut": "2024-05-22",
      "checkInTime": "2024-05-21 20:00:00",
      "checkOutTime": "2024-05-22 13:00:00",
      "bookingType": "individual",
      "roomType": "STE",
      "state": "future",
      "conf": 129319,
      "quantity": 1,
      "price": 4800,
      "night": 1,
      "id": "e19364c1-f55b-4a41-a612-3c1f54b17355"
    },
    {
      "user": [
        "Beth, Ward"
      ],
      "rooms": [
        "603"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0969041440",
      "checkIn": "2024-05-21",
      "checkOut": "2024-05-22",
      "checkInTime": "2024-05-21 20:00:00",
      "checkOutTime": "2024-05-22 13:00:00",
      "bookingType": "individual",
      "roomType": "STE",
      "state": "future",
      "conf": 509337,
      "quantity": 1,
      "price": 4800,
      "night": 1,
      "id": "a120df3c-6905-401d-bfab-765307d52026"
    },
    {
      "user": [
        "Jimmy, Hudson"
      ],
      "rooms": [
        "605"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0965394169",
      "checkIn": "2024-05-21",
      "checkOut": "2024-05-22",
      "checkInTime": "2024-05-21 20:00:00",
      "checkOutTime": "2024-05-22 13:00:00",
      "bookingType": "individual",
      "roomType": "STE",
      "state": "future",
      "conf": 567313,
      "quantity": 1,
      "price": 4800,
      "night": 1,
      "id": "7d59d363-00ba-40de-bd39-e17b3d06d25e"
    },
    {
      "user": [
        "Debbie, Hughes",
        "Rachel, Lynch",
        "Ellen, Mills"
      ],
      "rooms": [
        "401",
        "403",
        "405"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0989233840",
      "checkIn": "2024-05-22",
      "checkOut": "2024-05-23",
      "checkInTime": "2024-05-22 18:00:00",
      "checkOutTime": "2024-05-23 12:30:00",
      "bookingType": "group",
      "roomType": "FAM",
      "state": "future",
      "conf": 249228,
      "quantity": 3,
      "price": 2500,
      "night": 1,
      "id": "766d50e4-656d-4ea7-ae4b-4a2d3d5bfd98"
    },
    {
      "user": [
        "Catherine, Stanley"
      ],
      "rooms": [
        "202"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0991887702",
      "checkIn": "2024-05-23",
      "checkOut": "2024-05-25",
      "checkInTime": "2024-05-23 16:00:00",
      "checkOutTime": "2024-05-25 11:00:00",
      "bookingType": "individual",
      "roomType": "ECD",
      "state": "future",
      "conf": 668167,
      "quantity": 1,
      "price": 2500,
      "night": 2,
      "id": "c18b078b-eb34-487d-b1d1-549854f25599"
    },
    {
      "user": [
        "Bertha, Howell"
      ],
      "rooms": [
        "204"
      ],
      "bookingDate": "2023-11-15",
      "tel": "097581118",
      "checkIn": "2024-05-23",
      "checkOut": "2024-05-25",
      "checkInTime": "2024-05-23 16:00:00",
      "checkOutTime": "2024-05-25 11:00:00",
      "bookingType": "individual",
      "roomType": "ECD",
      "state": "future",
      "conf": 43668,
      "quantity": 1,
      "price": 2500,
      "night": 2,
      "id": "35045af1-4f03-4cca-ba17-23d3b0430667"
    },
    {
      "user": [
        "Leah, Stanley"
      ],
      "rooms": [
        "216"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0990439583",
      "checkIn": "2024-05-23",
      "checkOut": "2024-05-24",
      "checkInTime": "2024-05-23 16:00:00",
      "checkOutTime": "2024-05-24 11:00:00",
      "bookingType": "individual",
      "roomType": "STD",
      "state": "future",
      "conf": 863593,
      "quantity": 1,
      "price": 2500,
      "night": 1,
      "id": "68966b3e-f485-4fe5-ab3b-211ff6077522"
    },
    {
      "user": [
        "Mia, Woods"
      ],
      "rooms": [
        "220"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0987602352",
      "checkIn": "2024-05-23",
      "checkOut": "2024-05-24",
      "checkInTime": "2024-05-23 16:00:00",
      "checkOutTime": "2024-05-24 11:00:00",
      "bookingType": "individual",
      "roomType": "STD",
      "state": "future",
      "conf": 240273,
      "quantity": 1,
      "price": 2500,
      "night": 1,
      "id": "64bd1f1b-bc99-4b0a-9d05-dd6affc5a3b3"
    },
    {
      "user": [
        "Phyllis, Craig"
      ],
      "rooms": [
        "316"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0996908084",
      "checkIn": "2024-05-23",
      "checkOut": "2024-05-24",
      "checkInTime": "2024-05-23 16:00:00",
      "checkOutTime": "2024-05-24 11:00:00",
      "bookingType": "individual",
      "roomType": "STD",
      "state": "future",
      "conf": 383174,
      "quantity": 1,
      "price": 2500,
      "night": 1,
      "id": "0e739156-1178-4476-8cc8-a82e2d1a2636"
    },
    {
      "user": [
        "Kitty, Thomas"
      ],
      "rooms": [
        "318"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0986006310",
      "checkIn": "2024-05-23",
      "checkOut": "2024-05-24",
      "checkInTime": "2024-05-23 16:00:00",
      "checkOutTime": "2024-05-24 11:00:00",
      "bookingType": "individual",
      "roomType": "STD",
      "state": "future",
      "conf": 322441,
      "quantity": 1,
      "price": 2500,
      "night": 1,
      "id": "b43e8ea0-4db5-4361-ad84-ec345920d1a3"
    },
    {
      "user": [
        "Veronica, Gonzalez"
      ],
      "rooms": [
        "320"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0954765976",
      "checkIn": "2024-05-23",
      "checkOut": "2024-05-25",
      "checkInTime": "2024-05-23 16:00:00",
      "checkOutTime": "2024-05-25 11:00:00",
      "bookingType": "individual",
      "roomType": "STD",
      "state": "future",
      "conf": 150953,
      "quantity": 1,
      "price": 2500,
      "night": 2,
      "id": "2dbcf967-6db8-4dcb-a093-688dd37b4a47"
    },
    {
      "user": [
        "Debbie, Phillips"
      ],
      "rooms": [
        "303"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0962822616",
      "checkIn": "2024-05-23",
      "checkOut": "2024-05-25",
      "checkInTime": "2024-05-23 16:00:00",
      "checkOutTime": "2024-05-25 11:00:00",
      "bookingType": "individual",
      "roomType": "FAM",
      "state": "future",
      "conf": 257386,
      "quantity": 1,
      "price": 3500,
      "night": 2,
      "id": "68e9b526-4982-4d98-8a7a-119f3d3b83c9"
    },
    {
      "user": [
        "Terrance, Baker"
      ],
      "rooms": [
        "401"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0959432893",
      "checkIn": "2024-05-23",
      "checkOut": "2024-05-25",
      "checkInTime": "2024-05-23 16:00:00",
      "checkOutTime": "2024-05-25 11:00:00",
      "bookingType": "individual",
      "roomType": "FAM",
      "state": "future",
      "conf": 69375,
      "quantity": 1,
      "price": 3500,
      "night": 2,
      "id": "ecfb113f-9e49-4009-ae87-6391aab0c32a"
    },
    {
      "user": [
        "Gertrude, Weaver"
      ],
      "rooms": [
        "405"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0952653623",
      "checkIn": "2024-05-23",
      "checkOut": "2024-05-25",
      "checkInTime": "2024-05-23 16:00:00",
      "checkOutTime": "2024-05-25 11:00:00",
      "bookingType": "individual",
      "roomType": "FAM",
      "state": "future",
      "conf": 827813,
      "quantity": 1,
      "price": 3500,
      "night": 2,
      "id": "21282fdf-7568-4ab6-a1b3-9ec3a78471a2"
    },
    {
      "user": [
        "Marjorie, Marshall"
      ],
      "rooms": [
        "601"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0962733349",
      "checkIn": "2024-05-23",
      "checkOut": "2024-05-24",
      "checkInTime": "2024-05-23 16:00:00",
      "checkOutTime": "2024-05-24 11:00:00",
      "bookingType": "individual",
      "roomType": "STE",
      "state": "future",
      "conf": 700129,
      "quantity": 1,
      "price": 4800,
      "night": 1,
      "id": "3042f214-b450-49fb-9e89-38e04f44be2c"
    },
    {
      "user": [
        "Chad, Diaz"
      ],
      "rooms": [
        "605"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0980312343",
      "checkIn": "2024-05-23",
      "checkOut": "2024-05-24",
      "checkInTime": "2024-05-23 16:00:00",
      "checkOutTime": "2024-05-24 11:00:00",
      "bookingType": "individual",
      "roomType": "STE",
      "state": "future",
      "conf": 666343,
      "quantity": 1,
      "price": 4800,
      "night": 1,
      "id": "d741ccd7-4784-43c8-9119-ec68e37225f5"
    },
    {
      "user": [
        "Milton, Howard"
      ],
      "rooms": [
        "102"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0969693512",
      "checkIn": "2024-05-24",
      "checkOut": "2024-05-26",
      "checkInTime": "2024-05-24 15:00:00",
      "checkOutTime": "2024-05-26 10:00:00",
      "bookingType": "individual",
      "roomType": "ECD",
      "state": "future",
      "conf": 743237,
      "quantity": 1,
      "price": 2500,
      "night": 2,
      "id": "d45c88d9-8dad-44ee-b0c3-5e56b1be5fdf"
    },
    {
      "user": [
        "Rick, Stanley"
      ],
      "rooms": [
        "104"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0991376823",
      "checkIn": "2024-05-24",
      "checkOut": "2024-05-26",
      "checkInTime": "2024-05-24 15:00:00",
      "checkOutTime": "2024-05-26 10:00:00",
      "bookingType": "individual",
      "roomType": "ECD",
      "state": "future",
      "conf": 710009,
      "quantity": 1,
      "price": 2500,
      "night": 2,
      "id": "c5d7f8ec-0210-4baf-a0aa-ca0a4502c186"
    },
    {
      "user": [
        "Sonia, Franklin"
      ],
      "rooms": [
        "216"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0925555841",
      "checkIn": "2024-05-24",
      "checkOut": "2024-05-26",
      "checkInTime": "2024-05-24 15:00:00",
      "checkOutTime": "2024-05-26 10:00:00",
      "bookingType": "individual",
      "roomType": "STD",
      "state": "future",
      "conf": 468779,
      "quantity": 1,
      "price": 2500,
      "night": 2,
      "id": "dd37a1a4-5543-45a3-a1b8-9954dcad75e2"
    },
    {
      "user": [
        "Rita, West"
      ],
      "rooms": [
        "218"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0994551947",
      "checkIn": "2024-05-24",
      "checkOut": "2024-05-26",
      "checkInTime": "2024-05-24 15:00:00",
      "checkOutTime": "2024-05-26 10:00:00",
      "bookingType": "individual",
      "roomType": "STD",
      "state": "future",
      "conf": 634486,
      "quantity": 1,
      "price": 2500,
      "night": 2,
      "id": "bb33266c-1523-4f14-bed9-b3f6bed7e32e"
    },
    {
      "user": [
        "Joanne, Scott"
      ],
      "rooms": [
        "601"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0946629991",
      "checkIn": "2024-05-24",
      "checkOut": "2024-05-26",
      "checkInTime": "2024-05-24 15:00:00",
      "checkOutTime": "2024-05-26 10:00:00",
      "bookingType": "individual",
      "roomType": "STE",
      "state": "future",
      "conf": 201466,
      "quantity": 1,
      "price": 4800,
      "night": 2,
      "id": "aaa8b434-26dc-49ca-b256-03f9be924c1c"
    },
    {
      "user": [
        "Morris, Porter"
      ],
      "rooms": [
        "603"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0969871079",
      "checkIn": "2024-05-24",
      "checkOut": "2024-05-26",
      "checkInTime": "2024-05-24 15:00:00",
      "checkOutTime": "2024-05-26 10:00:00",
      "bookingType": "individual",
      "roomType": "STE",
      "state": "future",
      "conf": 386737,
      "quantity": 1,
      "price": 4800,
      "night": 2,
      "id": "9fff176a-64b1-4dc7-b403-2a8b2ae81584"
    },
    {
      "user": [
        "Keith, Harrison"
      ],
      "rooms": [
        "202"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0994925892",
      "checkIn": "2024-05-25",
      "checkOut": "2024-05-26",
      "checkInTime": "2024-05-25 13:00:00",
      "checkOutTime": "2024-05-26 10:00:00",
      "bookingType": "individual",
      "roomType": "ECD",
      "state": "future",
      "conf": 841809,
      "quantity": 1,
      "price": 2500,
      "night": 1,
      "id": "920769d4-066b-4ffb-9127-81e479049897"
    },
    {
      "user": [
        "Eleanor, Brown"
      ],
      "rooms": [
        "204"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0990671348",
      "checkIn": "2024-05-25",
      "checkOut": "2024-05-26",
      "checkInTime": "2024-05-25 13:00:00",
      "checkOutTime": "2024-05-26 10:00:00",
      "bookingType": "individual",
      "roomType": "ECD",
      "state": "future",
      "conf": 684731,
      "quantity": 1,
      "price": 2500,
      "night": 1,
      "id": "8958c78f-a9af-45b6-8b41-b163ade6d406"
    },
    {
      "user": [
        "Katie, Lawrence"
      ],
      "rooms": [
        "320"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0953517110",
      "checkIn": "2024-05-25",
      "checkOut": "2024-05-26",
      "checkInTime": "2024-05-25 13:00:00",
      "checkOutTime": "2024-05-26 10:00:00",
      "bookingType": "individual",
      "roomType": "STD",
      "state": "future",
      "conf": 303577,
      "quantity": 1,
      "price": 2500,
      "night": 1,
      "id": "31af0123-05a7-4461-8e21-ddbcd72fe0a3"
    },
    {
      "user": [
        "Diana, Butler"
      ],
      "rooms": [
        "303"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0930744094",
      "checkIn": "2024-05-25",
      "checkOut": "2024-05-26",
      "checkInTime": "2024-05-25 13:00:00",
      "checkOutTime": "2024-05-26 10:00:00",
      "bookingType": "individual",
      "roomType": "FAM",
      "state": "future",
      "conf": 279259,
      "quantity": 1,
      "price": 3500,
      "night": 1,
      "id": "bc1b6ae5-1691-4157-9d1d-12d7c0bde3da"
    },
    {
      "user": [
        "Gail, Bradley"
      ],
      "rooms": [
        "403"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0962017579",
      "checkIn": "2024-05-25",
      "checkOut": "2024-05-26",
      "checkInTime": "2024-05-25 13:00:00",
      "checkOutTime": "2024-05-26 10:00:00",
      "bookingType": "individual",
      "roomType": "FAM",
      "state": "future",
      "conf": 700063,
      "quantity": 1,
      "price": 3500,
      "night": 1,
      "id": "e9ddfa45-aee4-4fc9-bb8d-e6123ead569e"
    },
    {
      "user": [
        "Aubrey, Hudson"
      ],
      "rooms": [
        "405"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0963002335",
      "checkIn": "2024-05-25",
      "checkOut": "2024-05-26",
      "checkInTime": "2024-05-25 13:00:00",
      "checkOutTime": "2024-05-26 10:00:00",
      "bookingType": "individual",
      "roomType": "FAM",
      "state": "future",
      "conf": 835599,
      "quantity": 1,
      "price": 3500,
      "night": 1,
      "id": "7148acc1-1230-4b9a-aef0-58cc3986d03c"
    },
    {
      "user": [
        "Alma, Garrett"
      ],
      "rooms": [
        "102"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0968952560",
      "checkIn": "2024-05-26",
      "checkOut": "2024-05-27",
      "checkInTime": "2024-05-26 12:30:00",
      "checkOutTime": "2024-05-27 09:00:00",
      "bookingType": "individual",
      "roomType": "ECD",
      "state": "future",
      "conf": 37931,
      "quantity": 1,
      "price": 2500,
      "night": 1,
      "id": "990420ce-a38f-45e7-84d1-951206d300c9"
    },
    {
      "user": [
        "Andrew, Mason"
      ],
      "rooms": [
        "104"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0989854065",
      "checkIn": "2024-05-26",
      "checkOut": "2024-05-27",
      "checkInTime": "2024-05-26 12:30:00",
      "checkOutTime": "2024-05-27 09:00:00",
      "bookingType": "individual",
      "roomType": "ECD",
      "state": "future",
      "conf": 827561,
      "quantity": 1,
      "price": 2500,
      "night": 1,
      "id": "4af10315-77a0-469a-8097-f81b38cf6cfa"
    },
    {
      "user": [
        "Nathan, Cole"
      ],
      "rooms": [
        "216"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0996995938",
      "checkIn": "2024-05-26",
      "checkOut": "2024-05-27",
      "checkInTime": "2024-05-26 12:30:00",
      "checkOutTime": "2024-05-27 09:00:00",
      "bookingType": "individual",
      "roomType": "STD",
      "state": "future",
      "conf": 872727,
      "quantity": 1,
      "price": 2500,
      "night": 1,
      "id": "1b64b0da-0732-477b-8c74-7c6d87ee1327"
    },
    {
      "user": [
        "Robin, Myers"
      ],
      "rooms": [
        "220"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0975658461",
      "checkIn": "2024-05-26",
      "checkOut": "2024-05-27",
      "checkInTime": "2024-05-26 12:30:00",
      "checkOutTime": "2024-05-27 09:00:00",
      "bookingType": "individual",
      "roomType": "STD",
      "state": "future",
      "conf": 858837,
      "quantity": 1,
      "price": 2500,
      "night": 1,
      "id": "a65ad748-291a-4867-95b7-750488778b9a"
    },
    {
      "user": [
        "Ian, Shaw"
      ],
      "rooms": [
        "316"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0967614204",
      "checkIn": "2024-05-26",
      "checkOut": "2024-05-27",
      "checkInTime": "2024-05-26 12:30:00",
      "checkOutTime": "2024-05-27 09:00:00",
      "bookingType": "individual",
      "roomType": "STD",
      "state": "future",
      "conf": 507652,
      "quantity": 1,
      "price": 2500,
      "night": 1,
      "id": "c1509fe3-a661-4345-a071-e66392a8b2c6"
    },
    {
      "user": [
        "Michele, Jenkins"
      ],
      "rooms": [
        "318"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0923842275",
      "checkIn": "2024-05-26",
      "checkOut": "2024-05-27",
      "checkInTime": "2024-05-26 12:30:00",
      "checkOutTime": "2024-05-27 09:00:00",
      "bookingType": "individual",
      "roomType": "STD",
      "state": "future",
      "conf": 734793,
      "quantity": 1,
      "price": 2500,
      "night": 1,
      "id": "b88e6442-e4de-427f-9f7b-1893e977b81f"
    },
    {
      "user": [
        "Lucille, Mills"
      ],
      "rooms": [
        "301"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0931055350",
      "checkIn": "2024-05-26",
      "checkOut": "2024-05-27",
      "checkInTime": "2024-05-26 12:30:00",
      "checkOutTime": "2024-05-27 09:00:00",
      "bookingType": "individual",
      "roomType": "FAM",
      "state": "future",
      "conf": 526605,
      "quantity": 1,
      "price": 3500,
      "night": 1,
      "id": "5712561a-5efb-4533-9187-cc61807cc0f7"
    },
    {
      "user": [
        "Levi, Miller"
      ],
      "rooms": [
        "305"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0920150195",
      "checkIn": "2024-05-26",
      "checkOut": "2024-05-27",
      "checkInTime": "2024-05-26 12:30:00",
      "checkOutTime": "2024-05-27 09:00:00",
      "bookingType": "individual",
      "roomType": "FAM",
      "state": "future",
      "conf": 642225,
      "quantity": 1,
      "price": 3500,
      "night": 1,
      "id": "a7c11b8c-0f2f-4da6-a890-76c2eeec0034"
    },
    {
      "user": [
        "Chloe, Lucas"
      ],
      "rooms": [
        "401"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0945171057",
      "checkIn": "2024-05-26",
      "checkOut": "2024-05-27",
      "checkInTime": "2024-05-26 12:30:00",
      "checkOutTime": "2024-05-27 09:00:00",
      "bookingType": "individual",
      "roomType": "FAM",
      "state": "future",
      "conf": 361277,
      "quantity": 1,
      "price": 3500,
      "night": 1,
      "id": "8adeb68b-8fd1-4191-b8a2-d2cd109313c2"
    },
    {
      "user": [
        "Jeremiah, Hawkins"
      ],
      "rooms": [
        "601"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0912300348",
      "checkIn": "2024-05-26",
      "checkOut": "2024-05-27",
      "checkInTime": "2024-05-26 12:30:00",
      "checkOutTime": "2024-05-27 09:00:00",
      "bookingType": "individual",
      "roomType": "STE",
      "state": "future",
      "conf": 306289,
      "quantity": 1,
      "price": 4800,
      "night": 1,
      "id": "87a03ae0-a369-45e8-8ce9-d2089d0464be"
    },
    {
      "user": [
        "Danielle, Young"
      ],
      "rooms": [
        "605"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0966140030",
      "checkIn": "2024-05-26",
      "checkOut": "2024-05-27",
      "checkInTime": "2024-05-26 12:30:00",
      "checkOutTime": "2024-05-27 09:00:00",
      "bookingType": "individual",
      "roomType": "STE",
      "state": "future",
      "conf": 631828,
      "quantity": 1,
      "price": 4800,
      "night": 1,
      "id": "64179ce2-defc-43ea-8235-98d054580c59"
    },
    {
      "user": [
        "Amber, Davidson"
      ],
      "rooms": [
        "102"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0944199674",
      "checkIn": "2024-05-27",
      "checkOut": "2024-05-28",
      "checkInTime": "2024-05-27 11:30:00",
      "checkOutTime": "2024-05-28 09:30:00",
      "bookingType": "individual",
      "roomType": "ECD",
      "state": "future",
      "conf": 788670,
      "quantity": 1,
      "price": 2500,
      "night": 1,
      "id": "29b0d43f-90d9-482d-bb07-a7ca9c5942cc"
    },
    {
      "user": [
        "Francis, Diaz"
      ],
      "rooms": [
        "104"
      ],
      "bookingDate": "2023-11-15",
      "tel": "091059324",
      "checkIn": "2024-05-27",
      "checkOut": "2024-05-28",
      "checkInTime": "2024-05-27 11:30:00",
      "checkOutTime": "2024-05-28 09:30:00",
      "bookingType": "individual",
      "roomType": "ECD",
      "state": "future",
      "conf": 367636,
      "quantity": 1,
      "price": 2500,
      "night": 1,
      "id": "58b7efb5-c63d-4815-bdd7-ceea26d6edc3"
    },
    {
      "user": [
        "Chris, Shelton"
      ],
      "rooms": [
        "218"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0961774622",
      "checkIn": "2024-05-27",
      "checkOut": "2024-05-29",
      "checkInTime": "2024-05-27 11:30:00",
      "checkOutTime": "2024-05-29 09:30:00",
      "bookingType": "individual",
      "roomType": "STD",
      "state": "future",
      "conf": 32712,
      "quantity": 1,
      "price": 2500,
      "night": 2,
      "id": "8c725143-0369-4e94-8e3a-6db17cb68a27"
    },
    {
      "user": [
        "Nina, Ellis"
      ],
      "rooms": [
        "403"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0996618346",
      "checkIn": "2024-05-27",
      "checkOut": "2024-05-28",
      "checkInTime": "2024-05-27 11:30:00",
      "checkOutTime": "2024-05-28 09:30:00",
      "bookingType": "individual",
      "roomType": "FAM",
      "state": "future",
      "conf": 375969,
      "quantity": 1,
      "price": 3500,
      "night": 1,
      "id": "830b9c8e-2ea7-427b-948b-44e8f535c241"
    },
    {
      "user": [
        "Laurie, Edwards"
      ],
      "rooms": [
        "405"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0958428597",
      "checkIn": "2024-05-27",
      "checkOut": "2024-05-28",
      "checkInTime": "2024-05-27 11:30:00",
      "checkOutTime": "2024-05-28 09:30:00",
      "bookingType": "individual",
      "roomType": "FAM",
      "state": "future",
      "conf": 284675,
      "quantity": 1,
      "price": 3500,
      "night": 1,
      "id": "c26bed2e-f6b3-47f1-b793-b5532c09f5d4"
    },
    {
      "user": [
        "Kenzi, Dean"
      ],
      "rooms": [
        "603"
      ],
      "bookingDate": "2023-11-15",
      "tel": "092465137",
      "checkIn": "2024-05-27",
      "checkOut": "2024-05-29",
      "checkInTime": "2024-05-27 11:30:00",
      "checkOutTime": "2024-05-29 09:30:00",
      "bookingType": "individual",
      "roomType": "STE",
      "state": "future",
      "conf": 855329,
      "quantity": 1,
      "price": 4800,
      "night": 2,
      "id": "8dfcd9b8-89d4-4819-9404-7e5cd2bcd270"
    },
    {
      "user": [
        "Kyle, Sullivan"
      ],
      "rooms": [
        "220"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0965803150",
      "checkIn": "2024-05-28",
      "checkOut": "2024-05-29",
      "checkInTime": "2024-05-28 11:00:00",
      "checkOutTime": "2024-05-29 04:00:00",
      "bookingType": "individual",
      "roomType": "STD",
      "state": "future",
      "conf": 841784,
      "quantity": 1,
      "price": 2500,
      "night": 1,
      "id": "330a3f3b-e211-46df-84c9-50d89a009bb2"
    },
    {
      "user": [
        "Irma, Phillips"
      ],
      "rooms": [
        "303"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0938465108",
      "checkIn": "2024-05-28",
      "checkOut": "2024-05-29",
      "checkInTime": "2024-05-28 11:00:00",
      "checkOutTime": "2024-05-29 04:00:00",
      "bookingType": "individual",
      "roomType": "FAM",
      "state": "future",
      "conf": 796120,
      "quantity": 1,
      "price": 3500,
      "night": 1,
      "id": "5708242b-b3c9-4c6b-b822-747ca9507803"
    },
    {
      "user": [
        "Isaiah, Fox"
      ],
      "rooms": [
        "403"
      ],
      "bookingDate": "2023-11-15",
      "tel": "097471890",
      "checkIn": "2024-05-28",
      "checkOut": "2024-05-29",
      "checkInTime": "2024-05-28 11:00:00",
      "checkOutTime": "2024-05-29 04:00:00",
      "bookingType": "individual",
      "roomType": "FAM",
      "state": "future",
      "conf": 800823,
      "quantity": 1,
      "price": 3500,
      "night": 1,
      "id": "b8cd2e1f-510d-4da4-bf62-15dbf9a3e5df"
    },
    {
      "user": [
        "Henry, Ward"
      ],
      "rooms": [
        "405"
      ],
      "bookingDate": "2023-11-15",
      "tel": "096991861",
      "checkIn": "2024-05-28",
      "checkOut": "2024-05-29",
      "checkInTime": "2024-05-28 11:00:00",
      "checkOutTime": "2024-05-29 04:00:00",
      "bookingType": "individual",
      "roomType": "FAM",
      "state": "future",
      "conf": 138624,
      "quantity": 1,
      "price": 3500,
      "night": 1,
      "id": "142358f3-e533-4139-9a47-b818bc18c7ae"
    },
    {
      "user": [
        "Andre, Hughes"
      ],
      "rooms": [
        "605"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0934829621",
      "checkIn": "2024-05-28",
      "checkOut": "2024-05-29",
      "checkInTime": "2024-05-28 10:30:00",
      "checkOutTime": "2024-05-29 04:00:00",
      "bookingType": "individual",
      "roomType": "STE",
      "state": "future",
      "conf": 33738,
      "quantity": 1,
      "price": 4800,
      "night": 1,
      "id": "831f7cf5-d3e2-439d-be5b-ff11a0b9f95e"
    },
    {
      "user": [
        "Elaine, Garcia"
      ],
      "rooms": [
        "301"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0952186764",
      "checkIn": "2024-05-29",
      "checkOut": "2024-05-31",
      "checkInTime": "2024-05-29 10:00:00",
      "checkOutTime": "2024-05-31 02:00:00",
      "bookingType": "individual",
      "roomType": "FAM",
      "state": "future",
      "conf": 644227,
      "quantity": 1,
      "price": 3500,
      "night": 2,
      "id": "c8fc2b8c-7ef7-4336-9c64-a217ccd94c24"
    },
    {
      "user": [
        "Ralph, Henry"
      ],
      "rooms": [
        "303"
      ],
      "bookingDate": "2023-11-15",
      "tel": "095085232",
      "checkIn": "2024-05-29",
      "checkOut": "2024-05-31",
      "checkInTime": "2024-05-29 10:00:00",
      "checkOutTime": "2024-05-31 02:00:00",
      "bookingType": "individual",
      "roomType": "FAM",
      "state": "future",
      "conf": 658135,
      "quantity": 1,
      "price": 3500,
      "night": 2,
      "id": "0a8f34cf-52b1-4c1e-9db9-df3d1c5078ea"
    },
    {
      "user": [
        "Duane, Banks"
      ],
      "rooms": [
        "305"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0981399456",
      "checkIn": "2024-05-29",
      "checkOut": "2024-05-31",
      "checkInTime": "2024-05-29 10:00:00",
      "checkOutTime": "2024-05-31 02:00:00",
      "bookingType": "individual",
      "roomType": "FAM",
      "state": "future",
      "conf": 360709,
      "quantity": 1,
      "price": 3500,
      "night": 2,
      "id": "6d4c718d-87b8-4552-8f30-6525d6be092d"
    },
    {
      "user": [
        "Judith, Payne"
      ],
      "rooms": [
        "403"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0927340542",
      "checkIn": "2024-05-29",
      "checkOut": "2024-05-31",
      "checkInTime": "2024-05-29 10:00:00",
      "checkOutTime": "2024-05-31 02:00:00",
      "bookingType": "individual",
      "roomType": "FAM",
      "state": "future",
      "conf": 730934,
      "quantity": 1,
      "price": 3500,
      "night": 2,
      "id": "0aa8b4e9-af25-46eb-b932-3cc575a2c237"
    },
    {
      "user": [
        "Jimmie, Hart"
      ],
      "rooms": [
        "405"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0997235065",
      "checkIn": "2024-05-29",
      "checkOut": "2024-05-31",
      "checkInTime": "2024-05-29 10:00:00",
      "checkOutTime": "2024-05-31 02:00:00",
      "bookingType": "individual",
      "roomType": "FAM",
      "state": "future",
      "conf": 123593,
      "quantity": 1,
      "price": 3500,
      "night": 2,
      "id": "636a0b6c-c1aa-470e-a087-6e2f307b0a23"
    },
    {
      "user": [
        "Christopher, Terry"
      ],
      "rooms": [
        "601"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0989895811",
      "checkIn": "2024-05-29",
      "checkOut": "2024-05-31",
      "checkInTime": "2024-05-29 08:00:00",
      "checkOutTime": "2024-05-31 02:00:00",
      "bookingType": "individual",
      "roomType": "STE",
      "state": "future",
      "conf": 643478,
      "quantity": 1,
      "price": 4800,
      "night": 2,
      "id": "e1969a5b-04b3-4c11-a35b-578859e2f01b"
    },
    {
      "user": [
        "Jacob, Gibson"
      ],
      "rooms": [
        "303"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0998901136",
      "checkIn": "2024-05-30",
      "checkOut": "2024-06-01",
      "checkInTime": "2024-05-31 19:00:00",
      "checkOutTime": "2024-06-01 14:00:00",
      "bookingType": "individual",
      "roomType": "FAM",
      "state": "future",
      "conf": 326344,
      "quantity": 1,
      "price": 3500,
      "night": 2,
      "id": "7968468c-4887-41da-8c9d-766da123eada"
    },
    {
      "user": [
        "Lydia, Stanley"
      ],
      "rooms": [
        "403"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0952425445",
      "checkIn": "2024-05-30",
      "checkOut": "2024-06-01",
      "checkInTime": "2024-05-31 19:00:00",
      "checkOutTime": "2024-06-01 14:00:00",
      "bookingType": "individual",
      "roomType": "FAM",
      "state": "future",
      "conf": 207911,
      "quantity": 1,
      "price": 3500,
      "night": 2,
      "id": "27e2bf27-cf82-40f9-be35-191a00f3ca85"
    },
    {
      "user": [
        "Meghan, Craig"
      ],
      "rooms": [
        "405"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0990190546",
      "checkIn": "2024-05-30",
      "checkOut": "2024-06-01",
      "checkInTime": "2024-05-31 19:00:00",
      "checkOutTime": "2024-06-01 14:00:00",
      "bookingType": "individual",
      "roomType": "FAM",
      "state": "future",
      "conf": 482383,
      "quantity": 1,
      "price": 3500,
      "night": 2,
      "id": "66dc2870-9516-4cb2-a01d-96b33ba597c7"
    },
    {
      "user": [
        "Daisy, Grant"
      ],
      "rooms": [
        "603"
      ],
      "bookingDate": "2023-11-15",
      "tel": "0929702736",
      "checkIn": "2024-05-30",
      "checkOut": "2024-05-31",
      "checkInTime": "2024-05-30 03:00:00",
      "checkOutTime": "2024-05-30 22:00:00",
      "bookingType": "individual",
      "roomType": "FAM",
      "state": "future",
      "conf": 144108,
      "quantity": 1,
      "price": 3500,
      "night": 1,
      "id": "f5f06395-8c4a-4afa-a373-35b605f24e41"
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

  if (req.url === '/todos' && req.method === 'GET') {
    res.writeHead(200, headers);
    res.write(JSON.stringify({
      'status': 'success',
      'data': todos
    }));
    res.end();
  } else if (req.url === '/hotel/rooms' && req.method === 'GET') {
    res.writeHead(200, headers);
    res.write(JSON.stringify({
      'status': 'success',
      'data': hotel.rooms
    }));
    res.end();
  } else if (req.url === '/hotel/info' && req.method === 'GET') {
    res.writeHead(200, headers);
    res.write(JSON.stringify({
      'status': 'success',
      'data': {
        name: hotel.info,
        admin: hotel.admin
      }
    }));
    res.end();
  } else if (req.url === '/hotel/roomStates' && req.method === 'GET') {
    res.writeHead(200, headers);
    res.write(JSON.stringify({
      'status': 'success',
      'data': hotel.roomStates
    }));
    res.end();
  } else if (req.url === '/hotel/bookings' && req.method === 'GET') {
    res.writeHead(200, headers);
    res.write(JSON.stringify({
      'status': 'success',
      'data': hotel.bookings
    }));
    res.end();
  } else if (req.url === '/todos' && req.method === 'POST') {
    req.on('end', () => {
      try {
        const title = JSON.parse(body).title;
        if (title !== undefined) {
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
        } else {
          errorHandler(res, headers);
        }
      } catch (error) {
        errorHandler(res, headers);
      }

    })
  } else if (req.url === '/hotel/rooms' && req.method === 'POST') {
    req.on('end', () => {
      const { type, floor, roomName, number, price } = JSON.parse(body);
      const room = {
        "type": type,
        "floor": floor * 1,
        "roomName": roomName,
        "number": number,
        "price": price * 1,
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
  } else if (req.url === '/hotel/bookings' && req.method === 'POST') {
    req.on('end', () => {
      const { user, bookingDate, checkIn, checkOut, rooms, state, night,
        quantity, bookingType, roomType, price } = JSON.parse(body);
      const book = {
        "user": user,
        "rooms": rooms,
        "bookingDate": bookingDate,
        "tel": getTel(),
        "checkIn": checkIn,
        "checkOut": checkOut,
        "bookingType": bookingType,
        "roomType": roomType,
        "state": state,
        "conf": getConf(),
        "quantity": quantity * 1,
        "price": price * 1,
        "night": night * 1,
        "id": uuidv4()
      }
      hotel.bookings.push(book)
      res.writeHead(200, headers);
      res.write(JSON.stringify({
        'status': 'success',
        'data': hotel.bookings
      }));
      res.end();
    })
  } else if (req.url === '/todos' && req.method === 'DELETE') {
    todos.length = 0;
    res.writeHead(200, headers);
    res.write(JSON.stringify({
      'status': 'success',
      'data': todos
    }));
    res.end();
  } else if (req.url === '/' && req.method === 'OPTIONS') {
    res.writeHead(200, headers);
    res.write(JSON.stringify({
      'status': 'test',
      'data': []
    }));
    res.end();
  } else {
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


