import dotenv from 'dotenv';
dotenv.config({ path: '.env' });
import yargs from 'yargs';
 
const config = {
    app: {
      port: parseInt(process.env.PORT) || 3000,
      base: parseInt(process.env.BASE) || "http://localhost:" + (parseInt(process.env.PORT) || 3000),
      mongo: parseInt(process.env.MONGO_URI) || "",
    },
}
const argv = yargs(process.argv.slice(2))
  .options('mongo', {
    type: 'string',
    describe: 'The mongo connection url'
  })
  .options('base', {
    type: 'string',
    describe: 'The baseurl to of the server'
  })
  .options('port', {
    type: 'number',
    describe: 'The port to start the server on. By default 3000 is used'
  })
  .argv;
 
if (argv.port) {
  config.app.port = argv.port;
}
if (argv.mongo) {
  config.app.mongo = argv.mongo;
}
if (argv.base) {
  config.app.base = argv.base;
}
if (argv.help) {
  yargs.help();
  process.exit(1);
}
export default config