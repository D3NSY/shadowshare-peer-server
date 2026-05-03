import { PeerServer } from 'peer';

const port = process.env.PORT || 9000;

PeerServer({
  port,
  path: '/',
  proxied: true
});
