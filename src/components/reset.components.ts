import {Component, EventEmitter, Output} from "@angular/core";
@Component({
    selector:'app-reset',
    template:`
        <ion-row>
            <ion-col>
                <button 
                 ion-button 
                 color="danger" 
                 small 
                 block
                 (click)="onReset('all')" >重置所有</button>
            </ion-col>
            <ion-col>
                <button 
                 ion-button 
                 color="danger" 
                 small 
                 block
                 (click)="onReset('tsp')" >重置触摸</button>
            </ion-col>
            <ion-col>
                <button 
                 ion-button 
                 color="danger" 
                 small 
                 block
                 (click)="onReset('press')" >重置长按</button>
            </ion-col>
        </ion-row>
    `
})

export class ResetComponent{
    @Output() didReset = new EventEmitter<string>();

    onReset(type:string){
        this.didReset.emit(type);
    }
}