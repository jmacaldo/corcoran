const db = require('../db')


 const seedPresidents = () => db.Promise.map([
   {
     president: "George Washington",
     birthday: "1732-2-22",
     birthplace: "Westmoreland Co., Va.",
     death_day: "1799-12-14",
     death_place: "Mount Vernon, Va."
   },
   {
     president: "John Adams",
     birthday: "1735-10-30",
     birthplace: "Quincy, Mass.",
     death_day: "1826-7-4",
     death_place: "Quincy, Mass."
   },
   {
     president: "Thomas Jefferson",
     birthday: "1743-4-13",
     birthplace: "Albemarle Co., Va.",
     death_day: "1826-7-4",
     death_place: "Albemarle Co., Va."
   },
   {
     president: "James Madison",
     birthday: "1751-3-16",
     birthplace: "Port Conway, Va.",
     death_day: "1836-6-28",
     death_place: "Orange Co., Va."
   },
   {
     president: "James Monroe",
     birthday: "1758-4-28",
     birthplace: "Westmoreland Co., Va.",
     death_day: "1831-7-4",
     death_place: "New York, New York"
   },
   {
     president: "John Quincy Adams",
     birthday: "1767-7-11",
     birthplace: "Quincy, Mass.",
     death_day: "1848-2-23",
     death_place: "Washington, D.C."
   },
   {
     president: "Andrew Jackson",
     birthday: "1767-3-15",
     birthplace: "Waxhaws, No./So. Carolina",
     death_day: "1845-6-8",
     death_place: "Nashville, Tennessee"
   },
   {
     president: "Martin Van Buren",
     birthday: "1782-12-5",
     birthplace: "Kinderhook, New York",
     death_day: "1862-7-24",
     death_place: "Kinderhook, New York"
   },
   {
     president: "William Henry Harrison",
     birthday: "1773-2-9",
     birthplace: "Charles City Co., Va.",
     death_day: "1841-4-4",
     death_place: "Washington, D.C."
   },
   {
     president: "John Tyler",
     birthday: "1790-3-29",
     birthplace: "Charles City Co., Va.",
     death_day: "1862-1-18",
     death_place: "Richmond, Va."
   },
   {
     president: "James K. Polk",
     birthday: "1795-11-2",
     birthplace: "Mecklenburg Co., N.C.",
     death_day: "1849-6-15",
     death_place: "Nashville, Tennessee"
   },
   {
     president: "Zachary Taylor",
     birthday: "1784-11-24",
     birthplace: "Orange County, Va.",
     death_day: "1850-7-9",
     death_place: "Washington, D.C"
   },
   {
     president: "Millard Fillmore",
     birthday: "1800-1-7",
     birthplace: "Cayuga Co., New York",
     death_day: "1874-3-8",
     death_place: "Buffalo, New York"
   },
   {
     president: "Franklin Pierce",
     birthday: "1804-11-23",
     birthplace: "Hillsborough, N.H.",
     death_day: "1869-10-8",
     death_place: "Concord, New Hamp."
   },
   {
     president: "James Buchanan",
     birthday: "1791-4-23",
     birthplace: "Cove Gap, Pa.",
     death_day: "1868-6-1",
     death_place: "Lancaster, Pa."
   },
   {
     president: "Abraham Lincoln",
     birthday: "1809-2-12",
     birthplace: "LaRue Co., Kentucky",
     death_day: "1865-4-15",
     death_place: "Washington, D.C."
   },
   {
     president: "Andrew Johnson",
     birthday: "1808-12-29",
     birthplace: "Raleigh, North Carolina",
     death_day: "1875-7-31",
     death_place: "Elizabethton, Tenn."
   },
   {
     president: "Ulysses S. Grant",
     birthday: "1822-4-27",
     birthplace: "Point Pleasant, Ohio",
     death_day: "1885-7-23",
     death_place: "Wilton, New York"
   },
   {
     president: "Rutherford B. Hayes",
     birthday: "1822-10-4",
     birthplace: "Delaware, Ohio",
     death_day: "1893-1-17",
     death_place: "Fremont, Ohio"
   },
   {
     president: "James A. Garfield",
     birthday: "1831-11-19",
     birthplace: "Cuyahoga Co., Ohio",
     death_day: "1881-9-19",
     death_place: "Elberon, New Jersey"
   },
   {
     president: "Chester Arthur",
     birthday: "1829-10-5",
     birthplace: "Fairfield, Vermont",
     death_day: "1886-11-18",
     death_place: "New York, New York"
   },
   {
     president: "Grover Cleveland",
     birthday: "1837-3-18",
     birthplace: "Caldwell, New Jersey",
     death_day: "1908-6-24",
     death_place: "Princeton, New Jersey"
   },
   {
     president: "Benjamin Harrison",
     birthday: "1833-8-20",
     birthplace: "North Bend, Ohio",
     death_day: "1901-3-13",
     death_place: "Indianapolis, Indiana"
   },
   {
     president: "William McKinley",
     birthday: "1843-1-29",
     birthplace: "Niles, Ohio",
     death_day: "1901-9-14",
     death_place: "Buffalo, New York"
   },
   {
     president: "Theodore Roosevelt",
     birthday: "1858-10-27",
     birthplace: "New York, New York",
     death_day: "1919-1-6",
     death_place: "Oyster Bay, New York"
   },
   {
     president: "William Howard Taft",
     birthday: "1857-9-15",
     birthplace: "Cincinnati, Ohio",
     death_day: "1930-3-8",
     death_place: "Washington, D.C."
   },
   {
     president: "Woodrow Wilson",
     birthday: "1856-12-28",
     birthplace: "Staunton, Virginia",
     death_day: "1924-2-3",
     death_place: "Washington, D.C."
   },
   {
     president: "Warren G. Harding",
     birthday: "1865-11-2",
     birthplace: "Morrow County, Ohio",
     death_day: "1923-8-2",
     death_place: "San Francisco, Cal."
   },
   {
     president: "Calvin Coolidge",
     birthday: "1872-7-4",
     birthplace: "Plymouth, Vermont",
     death_day: "1933-1-5",
     death_place: "Northampton, Mass."
   },
   {
     president: "Herbert Hoover",
     birthday: "1874-8-10",
     birthplace: "West Branch, Iowa",
     death_day: "1964-10-20",
     death_place: "New York, New York"
   },
   {
     president: "Franklin Roosevelt",
     birthday: "1882-1-30",
     birthplace: "Hyde Park, New York",
     death_day: "1945-4-12",
     death_place: "Warm Springs, Georgia"
   },
   {
     president: "Harry S. Truman",
     birthday: "1884-5-8",
     birthplace: "Lamar, Missouri",
     death_day: "1972-12-26",
     death_place: "Kansas City, Missouri"
   },
   {
     president: "Dwight Eisenhower",
     birthday: "1890-10-14",
     birthplace: "Denison, Texas",
     death_day: "1969-3-28",
     death_place: "Washington, D.C."
   },
   {
     president: "John F. Kennedy",
     birthday: "1917-5-29",
     birthplace: "Brookline, Mass.",
     death_day: "1963-11-22",
     death_place: "Dallas, Texas"
   },
   {
     president: "Lyndon B. Johnson",
     birthday: "1908-8-27",
     birthplace: "Gillespie Co., Texas",
     death_day: "1973-1-22",
     death_place: "Gillespie Co., Texas"
   },
   {
     president: "Richard Nixon",
     birthday: "1913-1-9",
     birthplace: "Yorba Linda, Cal.",
     death_day: "1994-4-22",
     death_place: "New York, New York"
   },
   {
     president: "Gerald Ford",
     birthday: "1913-7-14",
     birthplace: "Omaha, Nebraska",
     death_day: "2006-12-26",
     death_place: "Rancho Mirage, Cal."
   },
   {
     president: "Jimmy Carter",
     birthday: "1924-10-1",
     birthplace: "Plains, Georgia",
     death_day: "",
     death_place: ""
   },
   {
     president: "Ronald Reagan",
     birthday: "1911-2-6",
     birthplace: "Tampico, Illinois",
     death_day: "2004-6-5",
     death_place: "Los Angeles, Cal."
   },
   {
     president: "George Bush",
     birthday: "1924-6-12",
     birthplace: "Milton, Mass.",
     death_day: "",
     death_place: ""
   },
   {
     president: "Bill Clinton",
     birthday: "1946-8-19",
     birthplace: "Hope, Arkansas",
     death_day: "",
     death_place: ""
   },
   {
     president: "George W. Bush",
     birthday: "1646-7-6",
     birthplace: "New Haven, Conn.",
     death_day: "",
     death_place: ""
   },
   {
     president: "Barack Obama",
     birthday: "1961-8-4",
     birthplace: "Honolulu, Hawaii",
     death_day: "",
     death_place: ""
   },
   {
     president: "Donald Trump",
     birthday: "1946-6-14",
     birthplace: "New York, New York",
     death_day: "",
     death_place: ""
   }

], president => db.model('presidents').create(president));

 db.didSync
   .then(() => db.sync({force: true}))
   .then(seedPresidents)
   .then(presidents => console.log(`Seeded ${presidents.length} presidents OK`))
   .catch(error => console.error(error))
   .finally(() => db.close())
