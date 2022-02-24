module.exports = {
  templateName: 'resources/persistent-volume.yml',
  prompts: [
    {
      type: 'input',
      name: 'global-name',
      message: 'The file name (without extension)?: ',
      validate: input => !!!input ? 'Please enter a value' : true,
    },
    {
      type: 'input',
      name: 'pv-name',
      message: 'The name of the volume claim: ',
    },
    {
      type: 'checkbox',
      name: 'pv-access-mode',
      message: 'Which access mode?',
      choices: ['ReadWriteOnce', 'ReadOnlyMany', 'ReadWriteMany'],
      default: ['ReadWriteMany'],
      validate: input => input.length === 1 ? true : 'Please select one.',
    },
    {
      type: 'confirm',
      name: 'pv-db',
      message: 'It PV for database?: ',
      default: false,
    },
    {
      type: 'confirm',
      name: 'pv-server',
      message: 'It PV for server (backend)?: ',
      default: false,
    },
    {
      type: 'input',
      name: 'pv-size',
      message: 'How big should the PV be?: ',
      default: '500Mi',
      validate: input => !!!input ? 'Please enter a value' : true,
    },
    {
      type: 'input',
      name: 'pv-path',
      message: 'Enter volume path: ',
      validate: input => !!!input ? 'Please enter a value' : true,
    },
    {
      type: 'checkbox',
      name: 'pv-nodeAffinity',
      message: 'Which Node?: ',
      choices: ['mfrklxsbuwbt01 (scrum)', 'mfrklxsbuwbd02 (kanban)'],
      default: ['mfrklxsbuwbt01 (scrum)'],
      validate: input => input.length === 1 ? true : 'Please select one.',
    },
  ],
  transformAnswers(data) {
    if (typeof data['global-name'] === 'string') {
      data['global-name'] = data['global-name'].trim();
    }
    if (typeof data['pv-name'] === 'string') {
      data['pv-name'] = data['pv-name'].trim();
    }
    if (typeof data['pv-size'] === 'string') {
      data['pv-size'] = data['pv-size'].trim();
    }
    if (typeof data['pv-path'] === 'string') {
      data['pv-path'] = data['pv-path'].trim();
    }

    if (data['pv-nodeAffinity'] == 'mfrklxsbuwbt01 (scrum)') {
      data['pv-nodeAffinity'] = 'mfrklxsbuwbt01';
    }
    else if(data['pv-nodeAffinity'] == 'mfrklxsbuwbd02 (kanban)') {
      data['pv-nodeAffinity'] = 'mfrklxsbuwbd02';
    }
  },
};
