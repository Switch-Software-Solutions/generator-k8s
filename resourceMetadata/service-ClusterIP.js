module.exports = {
  templateName: 'resources/service-ClusterIP.yml',
  prompts: [
    {
      type: 'input',
      name: 'global-name',
      message: 'The file name (without extension): ',
      validate: input => !!!input ? 'Please enter a value' : true,
    },
    {
      type: 'input',
      name: 'service-name',
      message: 'The name of the service: ',
      validate: input => !!!input ? 'Please enter a value' : true,
    },
    {
      type: 'input',
      name: 'service-port',
      message: 'The port of the service?: ',
      default: '80',
    },
    {
      type: 'confirm',
      name: 'service-db',
      message: 'It service for database?: ',
      default: false,
    },
    {
      type: 'confirm',
      name: 'service-server',
      message: 'It service for server (backend)?: ',
      default: false,
    },
    {
      type: 'confirm',
      name: 'service-client',
      message: 'It service for client (frontend)?: ',
      default: false,
    }
  ],
  transformAnswers(data) {
    if (typeof data['global-name'] === 'string') {
      data['global-name'] = data['global-name'].trim();
    }

    if (typeof data['service-name'] === 'string') {
      data['service-name'] = data['service-name'].trim();
    }

    if (typeof data['service-port'] === 'string') {
      data['service-port'] = data['service-port'].trim();
    }
  },
};
