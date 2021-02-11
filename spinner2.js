process.stdout.write('hello from spinner1.js... \rheyyy\n');

let spinner = setTimeout((symbol) => {
  process.stdout.write(`\r${symbol} `);
}, time);

for (let i = 100; i <= 1700; i += 200){
  console.log(i);
  if (i === 100 || i === 900 || i === 1700 ){
    spinner('|', i);
  } else if (i === 300 || i === 1100 ){
    spinner('/', i);
  } else if (i === 500 || i === 1300 ){
    spinner('-', i);
  } else if (i === 700 || i === 1500 ){
    spinner('\\', i);
  }
}
          

process.stdout.write('hello from spinner1.js... \rheyyy\n');

/*spinner = setTimeout((symbol, time) => {
    process.stdout.write(`\r${symbol} `);
  }, time);
  
  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, 300);
  
  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, 500);
  
  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\\   '); 
  }, 700);

  setTimeout(() => {
    process.stdout.write('\r|   '); 
  }, 900);

  setTimeout(() => {
    process.stdout.write('\r/   '); 
  }, 1100);

  setTimeout(() => {
    process.stdout.write('\r-   '); 
  }, 1300);

  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\\   '); 
  }, 1500);

  setTimeout(() => {
    process.stdout.write('\r|   '); 
  }, 1700);

 /* setTimeout(() => {
    process.stdout.write('\r-   ');
  }, 500);
  
  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\\   '); 
  }, 700);

  setTimeout(() => {
    process.stdout.write('\r|   '); 
  }, 900);

  setTimeout(() => {
    process.stdout.write('\r/   '); 
  }, 1100);

  setTimeout(() => {
    process.stdout.write('\r-   '); 
  }, 1300);

  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\\   '); 
  }, 1500);

  setTimeout(() => {
    process.stdout.write('\r|   '); 
  }, 1700);*/