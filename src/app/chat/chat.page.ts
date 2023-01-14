import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IonContent } from '@ionic/angular';
import { Location } from '@angular/common';
import data from '../../assets/msg.json';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  info = data;
  @ViewChild(IonContent) content: IonContent;
  currentUserId = 0;
  scrollPercentage = 0;
  chatForm: FormGroup;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    public location: Location,) { 

  }

  ngOnInit() {
    setTimeout(() => {
      this.content.scrollToBottom(400);
    }, 300);
    this.chatForm = new FormGroup({
      chatText: new FormControl()
    });
  }

  scrollDown() {
    this.content.scrollToBottom(300);
  }


  async contentScrolled(ev) {
    const scrollElement = await this.content.getScrollElement();
    const scrollPosition = ev.detail.scrollTop;
    const totalContentHeight = scrollElement.scrollHeight;

    this.scrollPercentage = scrollPosition / (totalContentHeight - ev.target.clientHeight) + 0.001;
    this.changeDetectorRef.detectChanges();
  }

  goBack() {
    this.location.back();
  }
}
