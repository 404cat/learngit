import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }
  /* 添加一个public属性，当MessagesComponent 实例被创建是，MessageService的实例会注入到这个属性中 */

  ngOnInit() { }

}
