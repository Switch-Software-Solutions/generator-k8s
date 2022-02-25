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
      name: 'ingress-db',
      message: 'It ingress for database?: ',
      default: false,
    },
    {
      type: 'confirm',
      name: 'ingress-server',
      message: 'It ingress for server (backend)?: ',
      default: false,
    },
    {
      type: 'confirm',
      name: 'ingress-client',
      message: 'It ingress for client (frontend)?: ',
      default: false,
    },
    {
      type: 'input',
      name: 'ingress-tls-name',
      message: 'The name of the TLS: ',
    },
    {
      type: 'input',
      name: 'ingress-url',
      message: 'Hosts (without http/https): ',
      validate: input => !!!input ? 'Please enter a value' : true,
    },
    {
      type: 'input',
      name: 'ingress-service-port',
      message: 'The port of the service (ClusterIP): ',
      default: 80,
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

    if (typeof data['ingress-service-port'] === 'string') {
      data['ingress-service-port'] = data['ingress-service-port'].trim();
    }

    if (typeof data['ingress-url'] === 'string') {
      data['ingress-url'] = data['ingress-url'].trim();
    }
  },
};
