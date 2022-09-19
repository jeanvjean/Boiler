import amqp from 'amqplib/callback_api';

export const SendEmailQueue = (channelName) => {
  amqp.connect('amqp://localhost', (err, conn) => {
    if (err) { throw err; }
    conn.createChannel((e, channel) => {
      if (e) { throw e; }
      const QUEUE = channelName;
      channel.assertQueue(QUEUE);
      channel.consume(QUEUE, (msg) => {
        console.log(`message received: ${msg.content}`);
      }, {
        noAck: true,
      });
    });
  });
};
