import { BackendMainModule } from './backend-main.module';

describe('BackendMainModule', () => {
  let backendMainModule: BackendMainModule;

  beforeEach(() => {
    backendMainModule = new BackendMainModule();
  });

  it('should create an instance', () => {
    expect(backendMainModule).toBeTruthy();
  });
});
