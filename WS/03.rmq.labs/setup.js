module.exports.Init = function(example){
    console.log('');
    console.log('');
    console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -');
    console.log('- Instant RabbitMQ Messaging Application Development How-to.  -');
    console.log('- ' + example + '                                                -');
    console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -');
    console.log('');

    console.log("+---+   +---+");
    console.log("|   |   |   |");
    console.log("|   |   |   |");
    console.log("|   |   |   |");
    console.log("|   +---+   +-------+");
    console.log("|                   |");
    console.log("| RabbitMQ  +---+   |");
    console.log("|           |   |   |");
    console.log("|           +---+   |");
    console.log("|                   |");
    console.log("+-------------------+");

    process.on('SIGINT', function() {
        process.exit(1);
    });

    process.on('SIGTSTP', function() {
        process.exit(1);
    });

    process.on('SIGTERM', function(){
        process.exit(1);
    });
};
