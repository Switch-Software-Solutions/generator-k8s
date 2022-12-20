module.exports = {
  templateName: 'resources/cronjob.yml',
  prompts: [
    {
      type: 'input',
      name: 'global-name',
      message: 'The file name (without extension): ',
      validate: input => !!!input ? 'Please enter a value' : true,
    },
    {
      type: 'input',
      name: 'cronjob-name',
      message: 'The name of the cronjob: ',
      validate: input => !!!input ? 'Please enter a value' : true,
    },
    {
      type: 'confirm',
      name: 'cronjob-server',
      message: 'It cronjob for server (backend)?: ',
      default: true,
    },
    {
      type: 'input',
      name: 'cronjob-image',
      message: 'The dockerimage to use: ',
      validate: input => !!!input ? 'Please enter a value' : true,
    },
    {
      type: 'input',
      name: 'cronjob-port',
      message: 'The port of the container: ',
      default: 5000,
    },
  ],
  transformAnswers(data) {
    if (typeof data['global-name'] === 'string') {
      data['global-name'] = data['global-name'].trim();
    }

    if (typeof data['cronjob-name'] === 'string') {
      data['cronjob-name'] = data['cronjob-name'].trim();
    }

    if (typeof data['cronjob-image'] === 'string') {
      data['cronjob-image'] = data['cronjob-image'].trim();
    }

    if (typeof data['cronjob-port'] === 'string') {
      data['cronjob-port'] = data['cronjob-port'].trim().split(';').filter(Boolean);
    }
  },
};
