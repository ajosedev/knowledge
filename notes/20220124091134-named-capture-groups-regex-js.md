# Named capture groups for Regular Expressions in JS

You can name capture groups for regex in angle brackets, and they are returned under `.groups`

Without named groups:
```javascript
const re = /(\d{4})-(\d{2})-(\d{2})/;
const match = re.exec('2021-03-04');

console.log(match[1]); // 2021 (year)
console.log(match[2]); // 03 (month)
```

With names groups:
```javascript
const re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const match = re.exec('2021-03-04');

console.log(match.groups.year); // 2021
console.log(match.groups.month); // 03

const [match, year, month] = re.exec('2021-03-04');
```

[[js]]