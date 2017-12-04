import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';

import { JhipsterSampleGenerateApplicationSharedModule, UserRouteAccessService } from './shared';
import { JhipsterSampleGenerateApplicationAppRoutingModule} from './app-routing.module';
import { JhipsterSampleGenerateApplicationHomeModule } from './home/home.module';
import { JhipsterSampleGenerateApplicationAdminModule } from './admin/admin.module';
import { JhipsterSampleGenerateApplicationAccountModule } from './account/account.module';
import { JhipsterSampleGenerateApplicationEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';
import { MyComponentComponent } from './my-component/my-component.component';

@NgModule({
    imports: [
        BrowserModule,
        JhipsterSampleGenerateApplicationAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        JhipsterSampleGenerateApplicationSharedModule,
        JhipsterSampleGenerateApplicationHomeModule,
        JhipsterSampleGenerateApplicationAdminModule,
        JhipsterSampleGenerateApplicationAccountModule,
        JhipsterSampleGenerateApplicationEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent,
        MyComponentComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class JhipsterSampleGenerateApplicationAppModule {}
