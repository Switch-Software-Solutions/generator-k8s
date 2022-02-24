module.exports = {
  templateName: 'resources/deployment.yml',
  prompts: [
    {
      type: 'input',
      name: 'global-name',
      message: 'The file name (without extension): ',
      validate: input => !!!input ? 'Please enter a value' : true,
    },
    {
      type: 'input',
      name: 'deployment-name',
      message: 'The name of the deployment: ',
      validate: input => !!!input ? 'Please enter a value' : true,
    },
    {
      type: 'input',
      name: 'deployment-replicas',
      message: 'How many replicas?: ',
      validate: input => !!!input ? 'Please enter a value' : true,
      default: 1,
    },
    {
      type: 'confirm',
      name: 'deployment-db',
      message: 'It deployment for database?: ',
      default: false,
    },
    {
      type: 'confirm',
      name: 'deployment-db-mysql',
      message: 'It deployment for mysql database?: ',
      default: false,
    },
    {
      type: 'confirm',
      name: 'deployment-server',
      message: 'It deployment for server (backend)?: ',
      default: false,
    },
    {
      type: 'confirm',
      name: 'deployment-client',
      message: 'It deployment for client (frontend)?: ',
      default: false,
    },
    {
      type: 'input',
      name: 'deployment-image',
      message: 'The dockerimage to use: ',
      validate: input => !!!input ? 'Please enter a value' : true,
    },
    {
      type: 'input',
      name: 'deployment-ports',
      message: 'The ports (semicolon separated) of the deployment?',
      default: '5000',
    },
  ],
  transformAnswers(data) {
    if (typeof data['global-name'] === 'string') {
      data['global-name'] = data['global-name'].trim();
    }

    if (typeof data['deployment-name'] === 'string') {
      data['deployment-name'] = data['deployment-name'].trim();
    }

    if (typeof data['deployment-image'] === 'string') {
      data['deployment-image'] = data['deployment-image'].trim();
    }

    if (typeof data['deployment-ports'] === 'string') {
      data['deployment-ports'] = data['deployment-ports'].trim().split(';').filter(Boolean);
    }
  },
};
