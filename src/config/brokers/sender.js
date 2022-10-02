import amqp from 'amqplib/callback_api';
import { SendEmailConsumer, SendSmsConsumer } from './consumer';
import config from '../setup';

console.log(`amqp://${config.BROKER_USER}:${config.BROKER_PASSWORD}@${config.BROKER_URL}:${config.BROKER_PORT}`);

export const SendEmailPublisher = (message, channelName) => {
  amqp.connect(`amqp://${config.BROKER_USER}:${config.BROKER_PASSWORD}@${config.BROKER_URL}:${config.BROKER_PORT}`,
    (err, conn) => {
      if (err) { throw err; }
      conn.createChannel((e, channel) => {
        if (e) { throw e; }
        const QUEUE = channelName;
        channel.assertQueue(QUEUE, { durable: true });
        channel.sendToQueue(QUEUE, Buffer.from(message));
        SendEmailConsumer(QUEUE);
      });
    });
};

export const SendSmsPublisher = (message, channelName) => {
  amqp.connect(`amqp://${config.BROKER_USER}:${config.BROKER_PASSWORD}@${config.BROKER_URL}:${config.BROKER_PORT}`,
    (err, conn) => {
      if (err) { throw err; }
      conn.createChannel((e, channel) => {
        if (e) { throw e; }
        const QUEUE = channelName;
        channel.assertQueue(QUEUE, { durable: true });
        channel.sendToQueue(QUEUE, Buffer.from(message));
        SendSmsConsumer(QUEUE);
      });
    });
};
