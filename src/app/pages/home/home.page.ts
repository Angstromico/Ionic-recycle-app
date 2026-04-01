import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonList,
  IonItem,
  IonAvatar,
  IonLabel,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonIcon,
} from '@ionic/angular/standalone';

interface IContributors {
  id: string;
  name: string;
  image?: string;
  contributions: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonCardHeader,
    IonCard,
    IonList,
    IonButtons,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonMenuButton,
    IonItem,
    IonAvatar,
    IonLabel,
    IonCardContent,
  ],
})
export class HomePage implements OnInit {
  constructor() {}

  ngOnInit() {}

  defaultImg =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5jTKo4WuNTHYrShmskUJXipMid-jcnrAfAQ&s';

  contributors = signal<IContributors[]>([
    {
      id: '1',
      name: 'Manuel Morales',
      contributions: 100,
    },
    {
      id: '2',
      name: 'John Doe',
      contributions: 50,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_0J2y_uPRMQZHAUsgEBjKUjRKIO5BiGd5FQ&s',
    },
    {
      id: '3',
      name: 'Jane Smith',
      contributions: 75,
    },
  ]);
}
