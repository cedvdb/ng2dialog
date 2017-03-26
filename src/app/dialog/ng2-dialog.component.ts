import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'ng2-dialog',
	template: `
		<div (click)="close()" *ngIf="open" class="modal">
			<div class="dlg" (click)="$event.stopPropagation()">
				<div class="closeIc" (click)="close()" *ngIf="closeable">&#10005;</div>
				<div class="ctnr">
					<div class="header"><ng-content select="header"></ng-content></div>
					<div class="footer"><ng-content select="footer"></ng-content></div>
					<div class="content"><ng-content></ng-content></div>
				</div>
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
			position: relative;
		}
		.ctnr{
			display:flex;
			flex-direction: column;
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
			margin: 0.4rem 0.4rem 0 0;
			float: right;
			position: absolute;
			top: 0;
			right: 0;
			background: #fff;
			border-radius: 50%;
			height: 1.5rem;
			width: 1.5rem;
			box-shadow: 0px 1px 4px #787878;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.closeIc:hover{
			color: #555;
		}
		.header{
			order: 1;
		}
		.content{
			margin: 1rem;
			order: 2;
		}
		.footer{
			order: 3;
		}
	`]
})
export class Ng2DialogComponent implements OnInit {
	@Input() open:boolean;
	@Input() closeable = true;
	@Output() closed = new EventEmitter<boolean>();

	constructor() { }

	ngOnInit() { }

	close(){
		this.open = false;
		this.closed.emit(true);
	}

}