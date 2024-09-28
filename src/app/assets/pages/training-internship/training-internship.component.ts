import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-training-internship',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './training-internship.component.html',
  styleUrl: './training-internship.component.css'
})
export class TrainingInternshipComponent {
  public courceDetails = [
    {
      name : "Generative AI Developer",
      description : "Learn the Fundamentals and Grow Your Generative AI (GenAI) Skill Set.",
      icon: "assets/artificial-intelligence.png",
      badges: [
        {
          date: "02 Sep 24",
          days: "Mon - Fri",
          badgeType: "Regular",
          type: "Online",
          bookingStatus: "Closed",
          timing: "01:30PM to 05:30PM"
        },
        {
          date: "02 Sep 24",
          days: "Mon - Fri",
          badgeType: "Regular",
          type: "Offline",
          bookingStatus: "Now Open",
          timing: "01:30PM to 05:30PM"
        },
        {
          date: "02 Sep 24",
          days: "Mon - Fri",
          badgeType: "Regular",
          type: "Online",
          bookingStatus: "Now Open",
          timing: "01:30PM to 05:30PM"
        }
      ]
    },
    {
      name : "Cyber security",
      description : "Dive into the world of Python, versatile and powerful programming language.",
      icon: "assets/cyber-security.png",
      badges: [
        {
          date: "02 Sep 24",
          days: "Mon - Fri",
          badgeType: "Regular",
          type: "Online",
          bookingStatus: "Closed",
          timing: "01:30PM to 05:30PM"
        },
        {
          date: "02 Sep 24",
          days: "Mon - Fri",
          badgeType: "Regular",
          type: "Offline",
          bookingStatus: "Now Open",
          timing: "01:30PM to 05:30PM"
        },
        {
          date: "02 Sep 24",
          days: "Mon - Fri",
          badgeType: "Regular",
          type: "Online",
          bookingStatus: "Now Open",
          timing: "01:30PM to 05:30PM"
        }
      ]
    },
    {
      name : "Data Analyst",
      description : "Become proficient in Java, a robust and widely-used programming language.",
      icon: "assets/data-analyst.png",
      badges: [
        {
          date: "02 Sep 24",
          days: "Mon - Fri",
          badgeType: "Regular",
          type: "Online",
          bookingStatus: "Closed",
          timing: "01:30PM to 05:30PM"
        },
        {
          date: "02 Sep 24",
          days: "Mon - Fri",
          badgeType: "Regular",
          type: "Offline",
          bookingStatus: "Now Open",
          timing: "01:30PM to 05:30PM"
        },
        {
          date: "02 Sep 24",
          days: "Mon - Fri",
          badgeType: "Regular",
          type: "Online",
          bookingStatus: "Now Open",
          timing: "01:30PM to 05:30PM"
        }
      ]
    }
  ];
  public cardClass = "";
  constructor() {
    console.log('Component initialized');
    const numberOfCources = this.courceDetails.length;
    if (numberOfCources <= 3) {
      this.cardClass = "col-md-" + (12/numberOfCources)
    }
    else this.cardClass = "col-md-4";
    console.log(this.cardClass)
  }
}
