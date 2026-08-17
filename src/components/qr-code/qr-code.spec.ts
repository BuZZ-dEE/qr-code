import { SpecPage, newSpecPage } from '@stencil/core/testing';
import { BpQRCode } from './qr-code';

describe('qr-code', () => {
  it('should build', () => {
    expect(new BpQRCode()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: BpQRCode;
    let testWindow: SpecPage;
    beforeEach(async () => {
      testWindow = await newSpecPage({
        components: [BpQRCode],
        html: '<qr-code></qr-code>',
      });
      element = testWindow.rootInstance;
    });

    it('should work without parameters', () => {
      expect(element.data).toContain('<svg');
    });
  });
});
