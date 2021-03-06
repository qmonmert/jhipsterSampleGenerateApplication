import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiParseLinks, JhiAlertService } from 'ng-jhipster';

import { Activity } from './activity.model';
import { ActivityService } from './activity.service';
import { ITEMS_PER_PAGE, Principal, ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-activity',
    templateUrl: './activity.component.html'
})
export class ActivityComponent implements OnInit, OnDestroy {
activities: Activity[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private activityService: ActivityService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.activityService.query().subscribe(
            (res: ResponseWrapper) => {
                this.activities = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInActivities();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: Activity) {
        return item.id;
    }
    registerChangeInActivities() {
        this.eventSubscriber = this.eventManager.subscribe('activityListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
