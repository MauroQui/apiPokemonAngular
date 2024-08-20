import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';

import { appConfig } from './app.config';
import { provideHttpClient, withFetch } from '@angular/common/http';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideHttpClient(withFetch())
    
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);

function provideServerRendering(): import("@angular/core").Provider | import("@angular/core").EnvironmentProviders {
  throw new Error('Function not implemented.');
}
