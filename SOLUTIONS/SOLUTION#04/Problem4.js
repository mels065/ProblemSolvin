const readline = require('readline');

(async () => {
  const OPERATION_PATTERN = ['+', '-', '*', '/'];
  const BAD_OPERATION = ':(';
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  try {
    const input = await new Promise((resolve, reject) => {
      rl.question('Enter a number:\n', (data) => {
        if (!/^\d+$/.test(data)) reject(new Error('Input must be number!'));
        resolve(data);
      });
    });
    if (input <= 0) console.log(BAD_OPERATION);
    else {
      let result = [];
      for (let i = 0; i < input; i++) {
        result = [...result, OPERATION_PATTERN[i % OPERATION_PATTERN.length]];
      }
      console.log(result.join(''));
    }
  } catch (err) {
    console.log(err.message);
  } finally {
    rl.close();
  }
})();
