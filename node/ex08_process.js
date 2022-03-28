function temParam(param){
   return process.argv.indexOf(param) !== -1 
}

// if (temParam('--producao')) {
//     console.log('Atenção total!')
// } else { 
//     console.log('Tranquilo')
// }

temParam('--producao') ?
    console.log('Atenção total!')
:
    console.log('Tranquilo')