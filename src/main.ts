import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
// export { AppServerModule } from './app/app.server.module';
// export { renderModule } from '@angular/platform-server';


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
