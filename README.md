![MIT LICENSE](https://img.shields.io/github/license/William-Krug/pod4-fs-react-shopping-list.svg?style=flat-square)
![REPO SIZE](https://img.shields.io/github/repo-size/William-Krug/pod4-fs-react-shopping-list.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/William-Krug/pod4-fs-react-shopping-list.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/William-Krug/pod4-fs-react-shopping-list.svg?style=social)

# Cullen Pod 4 Week 10 Group Project: React Shopping List

## Description

_Duration: 2 Day Sprint_

We created a Shopping List application that allows users to enter in their needed items (name, quantity, and units) and display all items (alphabetically). Users have the option to **Buy** or **Remove** individual items from their list. Similarly, users can **Reset** all purchased items back to an unpurchased state. Users can **Clear** all items from their list at any time.

The functionality for the app is performed utilizing a database to store all items, Express server to route DOM requests to and from the database and React front end for DOM manipulation.

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)
- [Express](https://expressjs.com/)
- [Axios](https://www.npmjs.com/package/axios)
- [Postico](https://eggerapps.at/postico/)

## Installation

1. Create a database named `fs-react-shopping`.
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries.
3. Open up your editor of choice and run an `npm install`.
4. Run `npm run server` in your terminal.
5. Run `npm run client` in your terminal.
6. The `npm run client` command will open up a new browser tab for you!

## Usage

1. Users will enter the Item, Quantity, and Units in the form field at the top of the page and click the **Save** button.
   (**Note**: Item and Quantity fields are required for adding an item.)
2. All items in the _Shopping List_ will be displayed below the form in alphabetical order.
   (Unpurchased items will be displayed first, followed by purchased items which will also be in alphabetical order.)
3. Clicking **Buy** will mark the item as purchased.
   (The **Buy** and **Remove** button will disappear, the item will become greyed out, and the list of items will reorder itself.)
4. Clicking **Remove** will remove the item from the _Shopping List_.
5. Clicking **Reset** will mark all _purchased_ items as unpurchased.
6. Clicking **Clear** will remove all items from the _Shopping List_.

## Built With

- HTML
- CSS
- JavaScript
- React
- Express
- Axios
- Postico
- PostgreSQL

## License

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) [2021] [Fowsia Elmi, Vada Karlen, William Krug, McKynlee Westman]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Acknowledgement

Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality.
A special thanks to Cullen Pod 4 for the great teamwork and effort into building this app:

- Fowsia Elmi
- Vada Karlen
- William Krug
- McKynlee Westman
