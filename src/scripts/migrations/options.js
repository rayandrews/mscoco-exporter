const options = yarg =>
  yarg
    .option('--file', {
      alias: 'file',
      describe: 'Normalized JSON file',
      default: '',
    })
    .option('--folder', {
      alias: 'folder',
      describe: 'Output folder',
      default: 'data',
    });

module.exports = options;
