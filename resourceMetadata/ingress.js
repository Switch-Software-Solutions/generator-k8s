module.exports = {
  templateName: 'resources/ingress.yml',
  prompts: [
    {
      type: 'input',
      name: 'global-name',
      message: 'The file name (without extension)',
      validate: input => !!!input ? 'Please enter a value' : true,
    },
    {
      type: 'input',
      name: 'ingress-name',
      message: 'The name of the ingress',
      validate: input => !!!input ? 'Please enter a value' : true,
    },
    {
      type: 'confirm',
      name: 'ingress-use-ssl',
      message: 'Should HTTPS be used?',
      default: true,
    },
    {
      type: 'confirm',
      name: 'ingress-frontend',
      message: 'Is it a frontend application?',
      default: true,
    },
    {
      type: 'confirm',
      name: 'ingress-backend',
      message: 'Is it a backend application?',
      default: false,
    },
    {
      type: 'input',
      name: 'tls-name',
      message: 'The name of the TLS',
    },
    {
      type: 'input',
      name: 'ingress-urls',
      message: 'Semicolon separated list of hosts (without http/https):',
      validate: input => !!!input ? 'Please enter a value' : true,
    },
    {
      type: 'input',
      name: 'service-name',
      message: 'The name of the service (ClusterIP)',
    },
  ],
  transformAnswers(data) {
    if (typeof data['ingress-urls'] === 'string') {
      data['ingress-urls'] = data['ingress-urls'].split(';').filter(Boolean);
    }
  },
};
