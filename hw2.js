//Read a file
// var fs = require('fs');
// var readline = require('readline')

// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Please input file name.", function(answer){
//     console.log(`filename: ${answer}`);
//     fs.readFile(answer, function (error, buffer){
//         if (error){
//             console.error(error.message);
//         return;
//         }
//         console.log(`File Data: ${buffer.toString()}`)
//     })
//     rl.close();
// });

//DNS lookup
// var dns = require('dns');
// var readline = require('readline')

// var rl = readline.createInterface({
//     input: process.stdin,
//     output:process.stdout
// });

// rl.question("Please input domain name. ", function(answer){
//     console.log(`Domain Name: ${answer}`);
//     dns.lookup(answer.toString(), (error, address, family) => {
//         if (error){
//             console.error(error.message);
//         return;
//         }
//         console.log(`Address: ${address}  Family: IPv${family}s`)
//     })
//     rl.close();
// });

//Read and write
// var readline = require('readline')
// var fs= require('fs')

// var rl = readline.createInterface({
//     input:process.stdin,
//     output: process.stdout
// });

// rl.question("Please input an input file name. ", function(answer){
//     rl.question("Please input output file name. ", function(answer2){
//         rl.close();
//         console.log(`Output file : ${answer}`)
//         console.log(`Output file : ${answer2}`)
//         fs.readFile(answer, function(error,buffer){
//             if (error){
//                 console.error(error.message);
//             return;
//             }
//             console.log(`Wrote to file ${answer2}`)
//             fs.writeFile(answer2, buffer, function(error){
//                 if (error){
//                     console.error(error.message);
//                 return;
//                 }
//                 console.log(`As a result, ${answer2} should now contain the text ${buffer}`)
//             })
//         })
//     })
// })

var readline = require('readline');
var request = require('request');
var fs = require('fs');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Please input URL for the webpage you want to save. ', function (answer){
    console.log(`URL: ${answer}`)
    request.get(answer, function(error, html){
        if (error){
            console.error(error.message);
        return;
        }
        rl.question(`File Name: `, function(filename){
            rl.close();
            fs.writeFile(filename, html, function(error){
                if(error){
                    console.error(error.message)
                return;
                }
                console.log(`Saved to ${filename}.`);
            })
        })
    })
})