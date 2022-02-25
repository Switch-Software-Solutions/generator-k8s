const metadata = require('../../resourceMetadata/ingress');

describe('Resource Metadata: Ingress', () => {

//  it('should transform the urls to an array', async () => {
//    const data = {
//      'ingress-url': 'foo;bar',
//    };
//    metadata.transformAnswers(data);
//    expect(data['ingress-url']).toBeInstanceOf(Array);
//    expect(data['ingress-url']).toContain('foo');
//    expect(data['ingress-url']).toContain('bar');
//  });

//  it('should transform a single url to an array', async () => {
//    const data = {
//      'ingress-url': 'foo',
//    };
//    metadata.transformAnswers(data);
//    expect(data['ingress-url']).toBeInstanceOf(Array);
//    expect(data['ingress-url']).toContain('foo');
//    expect(data['ingress-url']).not.toContain('bar');
//  });

  it('should not throw on non string elements', () => {
    const data = {
      'ingress-url': ['foo'],
    };
    const fn = () => metadata.transformAnswers(data);
    expect(fn).not.toThrow();
  });

});
