import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
import { Message } from 'src/Message';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  name: string;
  subject: string;
  message: string;

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (!this.name) {
      alert('Please add your name');
      return;
    } else if (!this.subject) {
      alert('Please add a subject');
      return;
    } else if (!this.message) {
      alert('Please add a message');
      return;
    }

    let mail = {
      name: this.name,
      subject: this.subject,
      message: this.message,
    };

    this.messageService.addMessage(mail).subscribe();

    this.name = '';
    this.subject = '';
    this.message = '';
  }
}
