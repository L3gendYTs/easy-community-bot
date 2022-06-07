module.exports = {
    name: "say",
    Staff: true,
    execute(message, client) {
        const sayMSG = message.content.slice(5).trim();
        message.delete();
        message.channel.send(sayMSG);
    }
}
