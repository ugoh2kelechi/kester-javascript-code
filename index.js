// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `
 <h3>Part 1 – HTML/CSS </h3>
  <p> Construct this UI using HTML and CSS, matching the visual design as closely as possible. </p>
  <!--COMMENT: table to represent our data -->
	<table class='table'>
	  <!--COMMENT: table head containing heading title of data -->
	<thead>
	<th id='left'>Account</th><th id='right'> <span class='caret blue'>&#94;</span> Available Cash<br/><span class='grey-sub'>Today's Change</span></th>
	</thead>
	  <!--COMMENT: table body contains all data left and right table cells and rows -->
	<tbody>
	<tr><td class='left'>IRA - 5200</td><td class='right'>$5,763.36<p class='sub red'>-0.08% / $8,916.69</p></td></tr>
	<tr><td class='left'>AAA - 1812</td><td class='right'>$20,10,926.10<p class='sub green'>+0.21% / $38,881.63</p></td></tr>
	<tr><td class='left'>AAA - 3810</td><td class='right'>$10,50,054.07<p class='sub green'>+0.07% / $8,916.69</p></td></tr>
	<tr><td></td><td></td></tr>
	</tbody>
	  <!--COMMENT: end of table body -->
	  <!--COMMENT: table caption -->
	<caption><a href='#'>Load more</a></caption>
	  <!--COMMENT: end of table caption -->
	</table>
	  <!--COMMENT: end of table -->

 <h3> Part 2 - JavaScript </h3>
  <p> This is a separate JavaScript coding exercise with no UI interaction.
  <br/><br/>   1.  Given values for acctData and balances below, write a function that returns only an array of account numbers, and accepts the following optional parameters:<br/><br/>  - user <br/> - sortBy (accepts "acctNum" or "balance")<br/> - sortDirection (accepts "asc" or "desc"; default to asc)<br/><br/> 2.  Execute your function and output the results as an array in console log for the following scenarios:<br/><br/>  a) filtered by Bob<br/>  b) filtered by Charlie<br/> c) sorted by acctNum<br/> d) filtered by Alice; sorted by balance ascending </p>
  <h5> Open console to see results. </h5>
  <h6> Note: Data in given questions were missing, so I have assumed data to solve the question. </h6>
`;

/*
** Data assumed by me, two data objects array acctData and balance are created with two elements aactNum(account number) and user (User name) for acctData and balance containing 
* account number and their balance are created.  
*/
const acctData = [{
    acctNum: "AAA - 1812",
    user: "Alice"
  },
  {
    acctNum: "AAA - 3810",
    user: "Bob"
  },
  {
    acctNum: "AAA - 2020",
    user: "Charlie"
  },
  {
    acctNum: "AAA - 5200",
    user: "Alice"
  },
  {
    acctNum: "AAA - 1820",
    user: "Charlie"
  },
  {
    acctNum: "AAA - 3811",
    user: "Bob"
  },
   {
    acctNum: "AAA - 1920",
    user: "Charlie"
  },
  {
    acctNum: "AAA - 1000",
    user: "Alice"
  }
];

const balance = {
  "AAA - 1812": 2324.22,
  "AAA - 3810": 11,
  "AAA - 2020": 34355.5,
  "AAA - 5200": 3435467,
  "AAA - 1920": 464646,
  "AAA - 1000": 97868.5,
  "AAA - 1820": 500.5,
  "AAA - 3811": 10
};

/** Function that accepts user,sortBy and sortDirection and outputs array of account numbers
* getAccountNumbers() is the javascript function which accepts three parameters of which two (sortBy and sortDirection) are optional as has been asked in question
* We have used here switch case to detect sortBy term.
*/

let getAccountNumbers = (filterByUser, sortBy='', sortDirection='') => {
  // return filtered account number. To get filtered and sort, we have usded javascript functions sort() and filter().
  return acctData
    .filter(acc => acc.user === filterByUser)
    .sort((a, b) => {
	  // Switch case is used that accepts sortBy  value (balance or acctNum)by user and outputs sorted accountNumbers in array format 
    switch(sortBy) {
    // If sort by acctNum, then case first
    case ('acctNum'):
      // For sortDirection desc
      if(sortDirection === 'desc') {
      // to  return sorted data, we find the difference of two values to check which one is greater. By default, ascending order is outputed
      // return if sortDirection is given desc (descending)
        return acctData[b.acctNum] - acctData[a.acctNum]; 
      } else {
      // return default ascending order sorted ARRAY
        return acctData[a.acctNum] - acctData[b.acctNum]; //sorting
      }
      break;

      //sort by balance
      case ('balance'):
      //sortDirection desc
      if(sortDirection === 'desc'){
      // return default ascending order sorted ARRAY
        return balance[b.acctNum] - balance[a.acctNum]; //sorting
      } else {
      // return default ascending order sorted ARRAY
        return balance[a.acctNum] - balance[b.acctNum]; //sorting
      }
      break;

      // handling default 
      default:
      // Default output, here no preference is given for sortedBy variable, so default sorted by balance is outputed in ascending
      return balance[a.acctNum] - balance[b.acctNum]; 
      
    }
  })
  .map(fa => {
    return fa.acctNum;  // i will return output of account numbers in array
  });
};

// a) filtered by Bob
console.log('Result 1 when Filter by Bob: ', getAccountNumbers('Bob'));

// b) filtered by Charlie
console.log('Result 2 when Filter by Charlie: ', getAccountNumbers('Charlie'));

// c) Sorted by acctNum
console.log('Result 3 when Sorted by acctNum using Charlie as example: ', getAccountNumbers('Charlie','acctNum'));

// d) filtered by Alice, sorted by balance, ascending
console.log('Result 4 when filtered by Alice and sorted by balance in ascending: ', getAccountNumbers('Alice','balance','asc'));