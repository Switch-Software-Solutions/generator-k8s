module.exports = {
  templateName: 'resources/ingress.yml',
  prompts: [
    {
      type: 'input',
      name: 'global-name',
      message: 'The file name (without extension): ',
      validate: input => !!!input ? 'Please enter a value' : true,
    },
    {
      type: 'input',
      name: 'ingress-name',
      message: 'The name of the ingress: ',
      validate: input => !!!input ? 'Please enter a value' : true,
    },
    {
      type: 'confirm',
      name: 'ingress-use-ssl',
      message: 'Should HTTPS be used?: ',
      default: true,
    },
    {
      type: 'confirm',
      name: 'ingress-frontend',
      message: 'Is it a frontend application?: ',
      default: false,
    },
    {
      type: 'confirm',
      name: 'ingress-backend',
      message: 'Is it a backend application?: ',
      default: false,
    },
    {
      type: 'input',
      name: 'ingress-tls-name',
      message: 'The name of the TLS: ',
    },
    {
      type: 'input',
      name: 'ingress-urls',
      message: 'Semicolon separated list of hosts (without http/https): ',
      validate: input => !!!input ? 'Please enter a value' : true,
    },
    {
      type: 'input',
      name: 'ingress-service-name',
      message: 'The name of the service (ClusterIP):',
    },
  ],
  transformAnswers(data) {
    if (typeof data['global-name'] === 'string') {
      data['global-name'] = data['global-name'].trim();
    }

    if (typeof data['ingress-name'] === 'string') {
      data['ingress-name'] = data['ingress-name'].trim();
    }

    if (typeof data['ingress-tls-name'] === 'string') {
      data['ingress-tls-name'] = data['ingress-tls-name'].trim();
    }

    if (typeof data['ingress-service-name'] === 'string') {
      data['ingress-service-name'] = data['ingress-service-name'].trim();
    }

    if (typeof data['ingress-urls'] === 'string') {
      data['ingress-urls'] = data['ingress-urls'].split(';').filter(Boolean);
    }
  },
};
