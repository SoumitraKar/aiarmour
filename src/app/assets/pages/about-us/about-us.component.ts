import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  public aboutUsKpi = [
    {
      heading : "We Are Registered And Certified",
      bodyList : [
        {
          head: "",
          body: "Incorporated with the Ministry of Corporate Affairs, we operate with full compliance and transparency."
        }
      ]
    },
    {
      heading : "About Our Co-working Place",
      bodyList : [
        {
          head: "Startup India Recognition:",
          body: "As a recognized startup by Startup India, we are committed to fostering innovation and entrepreneurship."
        },
        {
          head: "ISO 9001:2015 Certification:",
          body: "Our ISO certification reflects our dedication to maintaining the highest standards of quality in our processes and services."
        },
        {
          head: "MSME Registration:",
          body: "As a registered MSME, we adhere to ethical business practices and contribute to the economic development of the community."
        },
        {
          head: "AICTE Internship Approval:",
          body: "We are approved by AICTE to offer internships, ensuring we provide valuable learning experiences and contribute to skill development."
        },
        {
          head: "Ministry of Corporate Affairs Incorporation:",
          body: "Incorporated with the Ministry of Corporate Affairs, we operate with full compliance and transparency."
        }
      ]
    }
  ];
  public cardClass = "";
  constructor() {
    console.log('Component initialized');
    const numberOfCources = this.aboutUsKpi.length;
    if (numberOfCources <= 3) {
      this.cardClass = "col-md-" + (12/numberOfCources)
    }
    else this.cardClass = "col-md-4";
    console.log(this.cardClass)
  }
}
