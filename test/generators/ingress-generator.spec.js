const IngressGenerator = require('../../generators/ingress');
const { readFile, pathExists } = require('fs-extra');
const { join } = require('path');
const helpers = require('yeoman-test');

const defaultPrompts = {
  'global-name': 'resource',
  'ingress-name': '${CI_PROJECT_PATH_SLUG}',
  'ingress-tls-name': '${CI_PROJECT_PATH_SLUG}',
  'ingress-url': 'smartive.ch;www.smartive.ch',
  'ingress-service-port': 80,
};

describe('Resource Generator: Ingress', () => {

  it('should generate a resource file', async () => {
    const folder = await helpers
      .run(IngressGenerator)
      .withPrompts(defaultPrompts);
    expect(await pathExists(join(folder, 'resource.yml'))).toBe(true);
  });

  it('should generate a host for a single url', async () => {
    const folder = await helpers
      .run(IngressGenerator)
      .withPrompts({
        ...defaultPrompts,
        'ingress-url': 'smartive.ch',
      });
    const content = await readFile(join(folder, 'resource.yml'), 'utf8');
    expect(content).toMatchSnapshot();
  });

//  it('should generate a host for multiple urls', async () => {
//    const folder = await helpers
//      .run(IngressGenerator)
//      .withPrompts({
//        ...defaultPrompts,
//        'ingress-url': 'smartive.ch;www.smartive.ch',
//      });
//    const content = await readFile(join(folder, 'resource.yml'), 'utf8');
//    expect(content).toMatchSnapshot();
//  });

//  it('should not generate a host for an empty url', async () => {
//    const folder = await helpers
//      .run(IngressGenerator)
//      .withPrompts({
//        ...defaultPrompts,
//        'ingress-url': 'smartive.ch;www.smartive.ch;;',
//      });
//    const content = await readFile(join(folder, 'resource.yml'), 'utf8');
//    expect(content).toMatchSnapshot();
//  });

});
