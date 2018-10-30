const readline = require('readline');

const HEADER_ROW = ['Case', 'Input', 'Output'];
const COL_1_PAD = 5;
const COL_2_PAD = 6;

const getLastColLength = data => data.reduce((cur, next) => next.length > cur ? next.length : cur, 0);

const displayTable = (data, input) => {
  const COL_3_PAD = getLastColLength([...data, ...HEADER_ROW]);
  console.log(createHeader());
  input.forEach((item, i) => console.log(createRow(
    [`#${String(i+1).padStart(2, '0')}`, item, data[(Number(item) - 1) % data.length]]
  )))
  console.log(createTableHR());

  function createTableHR() {
    return `#${'-'.repeat(COL_1_PAD + COL_2_PAD + COL_3_PAD + 5)}#`;
  }
  function createRow(data) {
    return `| ${data[0].padEnd(COL_1_PAD)}| ${data[1].padEnd(COL_2_PAD)}| ${data[2].padEnd(COL_3_PAD)}|`;
  }
  function createHeader() {
    return `${createTableHR()}\n${createRow(['Case', 'Input', 'Output'])}\n${createTableHR()}`;
  }
};

const main = async () => {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

  const data = (await new Promise((resolve) => {
    rl.question('Enter an array of data separated by commas...\n', data => resolve(data));
  })).split(', ');

  let input = [];
  let nextInput;
  let errThrown;
  do {
    try {
      errThrown = false;
      nextInput = await new Promise((resolve, reject) => {
        rl.question(`Enter an index for Case #${input.length+1}. Press enter on blank line to finish\n`, data => {
          if (!/\d*/.test(data)) reject(new Error('Please only enter a number'));
          resolve(data);
        });
      });
      if (nextInput) input = [...input, nextInput];
    } catch (err) {
      console.log(err.message);
      errThrown = true;
    }
  } while (errThrown || nextInput);

  displayTable(data, input);

  rl.close();
};

main();
