const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];
  
  // Array.prototype.filter()
  // 1. Filter the list of inventors for those who were born between 1500's & 1700's
  seventeencentury = inventors.filter(i => (i.year>=1500 && i.year<1700))
  console.log("---------Inventors born between 1500 & 1700---------");
  console.table(seventeencentury);
  // for(i=0; i<seventeencentury.length; i++) console.log(seventeencentury[i].first+" "+seventeencentury[i].last);


  // Array.prototype.map()
  // 2. Give us an array of the inventors first and last names
  console.log("---------Inventors Names---------");
  names = inventors.map(i => `${i.first} ${i.last}`);
  console.table(names);
  // names = inventors.map(i => i.first + " " + i.last);
  // for(i=0; i<inventors.length; i++) console.log(inventors[i].first+" " +inventors[i].last);
  

  // Array.prototype.sort()
  // 3. Sort the inventors by birthdate, oldest to youngest
  console.log("---------Sorted by Birth---------");
  yearwise = inventors.sort((a,b) => (a.year > b.year) ? 1 : -1);
  console.table(yearwise);
  // yearwise = [];
  // for(i=0; i<inventors.length; i++) yearwise.push(inventors[i].year);
  // yearwise.sort();
  // for(i=0; i<yearwise.length; i++) console.log(yearwise[i]);


  // Array.prototype.reduce()
  // 4. How many years did all the inventors live all together?
  console.log("---------Years Lived Altogether---------");
  sum = 0;
  for(i=0; i<inventors.length; i++) sum += (inventors[i].passed - inventors[i].year + 1);
  console.log(sum);


  // 5. Sort the inventors by years lived
  console.log("---------Sorted by years lived---------");
  yearsum = inventors.sort((a,b)=>((a.passed-a.year+1)<(b.passed-b.year+1)?1:-1));
  console.table(yearsum);
  for(i=0; i<yearsum.length; i++){
    console.log(yearsum[i].first + " " + yearsum[i].last + " -> " + (yearsum[i].passed - yearsum[i].year + 1));
  }


  // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
  // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
  console.log("---------Website Text Finder---------");
  // links = [...document.querySelectorAll('.mw-category a')];
  // links = Array.from(document.querySelectorAll('.mw-category a'));
  // texts = links.map(i => i.textContent).filter(i => i.includes('de'));
  // texts.sort();
  // console.table(texts);
  // for(i=0; i<texts.length; i++) console.log(texts[i]);
  // texts = [];
  // for(i=0; i<links.length; i++){
  //   if(links[i].textContent.includes('de')){
  //     texts.push(links[i].textContent);
  //   }
  // }

  // 7. sort Exercise
  // Sort the people alphabetically by last name
  console.log("---------Sorted by last name---------");
  const lastname = people.sort((last,next) => ([one,two] = last.split(', '), [three,four] = next.split(', '), (one > three) ? 1 : -1));
  console.table(lastname);
  // for(i=0; i<lastname.length; i++){
  //   [a,b] = lastname[i].split(', ');
  //   console.log(i+1 + " -> " + b + " " + a);
  // } 


  // 8. Reduce Exercise
  // Sum up the instances of each of these
  const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
  console.log("---------Quantity of each item---------");
  item = [];
  for(i=0; i<data.length; i++){
    obj = data[i];
    if(!item[obj]) item[obj] = 0;
    item[obj]++;
  }
  console.table(item);
  // cnt = data.reduce(function(obj,item){
  //   if(!obj[item]) obj[item] = 0;
  //   obj[item]++;
  //   return obj;
  // },{});
  // console.table(cnt);