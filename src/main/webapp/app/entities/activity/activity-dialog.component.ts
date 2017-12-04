import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Activity } from './activity.model';
import { ActivityPopupService } from './activity-popup.service';
import { ActivityService } from './activity.service';

@Component({
    selector: 'jhi-activity-dialog',
    templateUrl: './activity-dialog.component.html'
})
export class ActivityDialogComponent implements OnInit {

    activity: Activity;
    isSaving: boolean;

    constructor(
        public activeModal: NgbActiveModal,
        private jhiAlertService: JhiAlertService,
        private activityService: ActivityService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.activity.id !== undefined) {
            this.subscribeToSaveResponse(
                this.activityService.update(this.activity));
        } else {
            this.subscribeToSaveResponse(
                this.activityService.create(this.activity));
        }
    }

    private subscribeToSaveResponse(result: Observable<Activity>) {
        result.subscribe((res: Activity) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: Activity) {
        this.eventManager.broadcast({ name: 'activityListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(error: any) {
        this.jhiAlertService.error(error.message, null, null);
    }
}

@Component({
    selector: 'jhi-activity-popup',
    template: ''
})
export class ActivityPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private activityPopupService: ActivityPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.activityPopupService
                    .open(ActivityDialogComponent as Component, params['id']);
            } else {
                this.activityPopupService
                    .open(ActivityDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
