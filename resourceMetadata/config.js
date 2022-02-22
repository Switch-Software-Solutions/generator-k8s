module.exports = {
  templateName: 'resources/config.yml',
  prompts: [
    {
      type: 'input',
      name: 'global-name',
      message: 'The file name (without extension)?',
      validate: input => !!!input ? 'Please enter a value' : true,
    },
    {
      type: 'input',
      name: 'config-name',
      message: 'The name of the config map?',
      validate: input => !!!input ? 'Please enter a value' : true,
    },
    {
      type: 'confirm',
      name: 'config-db',
      message: 'It config for database?',
      default: false,
    },
    {
      type: 'confirm',
      name: 'config-server',
      message: 'It config for server (backend)?',
      default: false,
    },
    {
      type: 'confirm',
      name: 'config-client',
      message: 'It config for client (frontend)?',
      default: false,
    },
    {
      type: 'confirm',
      name: 'config-enter-values',
      message: 'Do you wish to preenter values into the config?',
      default: false,
    },
    {
      type: 'editor',
      name: 'config-values',
      message: 'Enter the values in the editor, description is given in the editor.',
      default: '# Enter values in the following format: NAME: VALUE\n# Lines with # are ignored.\n\n',
      when: answers => answers['config-enter-values']
    },
  ],
  transformAnswers(data) {
    if (!data['config-values']) {
      data['config-values'] = ['CONFIG: DATA'];
    } else if (typeof data['config-values'] === 'string') {
      data['config-values'] = data['config-values']
        .split('\n')
        .filter(Boolean)
        .filter(line => !line.trim().startsWith('#'))
    }
  },
};
