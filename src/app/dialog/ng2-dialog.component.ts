import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'ng2-dialog',
	template: `<div (click)="close()" *ngIf="open" class="modal">
								<div class="dlg" (click)="$event.stopPropagation()">
									<div class="closeIc" (click)="close()" *ngIf="closeable">&#10005;</div>
									<div class="content"><ng-content></ng-content></div>
								</div>
						 <div>
	`,
	styles: [`
		.dlg{
			margin: auto;
			padding: 0;
			z-index: 9999;
			background: #fff;
			display:inline-block;
			border-radius: 0.3rem;
    	box-shadow: -1px 2px 9px #787878;
		}
		.modal{
			z-index: 9998;
			background: rgba(0,0,0,0.3);
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			display: flex;
		}
		.closeIc{
			color: #aaa;
			text-align: right;
			cursor: pointer;
			margin-right: 0.4rem;
			float: right;
		}
		.closeIc:hover{
			color: #555;
		}
		.content{
			margin: 1rem;
		}
	`]
})
export class Ng2DialogComponent implements OnInit {
	@Input() private _open:boolean;
	@Output() private closed = new EventEmitter<boolean>();
	@Input() private closeable = true;

	constructor() { }

	ngOnInit() { }

	close(){
		this.closed.emit(true);
	}

}