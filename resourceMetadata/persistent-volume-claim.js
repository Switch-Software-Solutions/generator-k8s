module.exports = {
  templateName: 'resources/persistent-volume-claim.yml',
  prompts: [
    {
      type: 'input',
      name: 'global-name',
      message: 'The file name (without extension)?: ',
      validate: input => !!!input ? 'Please enter a value' : true,
    },
    {
      type: 'input',
      name: 'pvc-name',
      message: 'The name of the volume claim: ',
    },
    {
      type: 'checkbox',
      name: 'pvc-access-mode',
      message: 'Which access mode?: ',
      choices: ['ReadWriteOnce', 'ReadOnlyMany', 'ReadWriteMany'],
      default: ['ReadWriteMany'],
      validate: input => input.length === 1 ? true : 'Please select one.',
    },
    {
      type: 'confirm',
      name: 'pvc-db',
      message: 'It PVC for database?: ',
      default: false,
    },
    {
      type: 'confirm',
      name: 'pvc-server',
      message: 'It PVC for server (backend)?: ',
      default: false,
    },
    {
      type: 'input',
      name: 'pvc-size',
      message: 'How big should the PVC be?: ',
      default: '500Mi',
      validate: input => !!!input ? 'Please enter a value' : true,
    },
  ],
  transformAnswers(data) {
    if (typeof data['global-name'] === 'string') {
      data['global-name'] = data['global-name'].trim();
    }

    if (typeof data['pvc-name'] === 'string') {
      data['pvc-name'] = data['pvc-name'].trim();
    }

    if (typeof data['pvc-size'] === 'string') {
      data['pvc-size'] = data['pvc-size'].trim();
    }
  },
};
