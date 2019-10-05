/* eslint-disable strict */
// testando upload para o github//
//mais um teste//
//Teste de alteração online//

const twillio = require('twillio');

const client = twillio(process.env.TQ_TWILLIO_ACCOUNT_SID, process.env.TQ_TWILLIO_AUTH_TOKEN);

client.messages.create({
    from:'',
    to:'',
    body:'',
    mediaUrl:''
})
    .then(message=>{
        console.log(''),
        console.log('${message.sid}');
    })
    .catch(error=>{
        console.error('');
        console.error(error);
    });
