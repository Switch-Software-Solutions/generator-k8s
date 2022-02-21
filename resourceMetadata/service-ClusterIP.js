module.exports = {
  templateName: 'resources/service-ClusterIP.yml',
  prompts: [
    {
      type: 'input',
      name: 'global-name',
      message: 'The file name (without extension)',
      validate: input => !!!input ? 'Please enter a value' : true,
    },
    {
      type: 'input',
      name: 'service-name',
      message: 'The name of the service',
      validate: input => !!!input ? 'Please enter a value' : true,
    },
    {
      type: 'input',
      name: 'selector-component',
      message: 'The selector of the service',
      validate: input => !!!input ? 'Please enter a value' : true,
    },
  ],
};
