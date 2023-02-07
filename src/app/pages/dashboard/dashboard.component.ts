import {Component, ElementRef, OnInit} from '@angular/core';
import {Chart, registerables } from "chart.js";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public chart: any;
  calendarStyle : any = {
    color: '#707683',
    fontSize: '14px',
    textAlign: 'center',
  }

  calendarStyleHover: any = {
    color: '#FFFFFF',
    fontSize: '14px',
    fontWeight: 400,
    textAlign: 'center',
    borderRadius: '60%',
    background: '#109CF1',
  }

  month24Calendar: any = {

  }

  tableTitle: any = [
    'Link ID', 'Campaign ID', 'Source', 'Medium' , 'Orgirinal link' , 'Shorten link' , 'Clicks'
  ]

  listOfData: any = [
    {
      key: '1',
      linkId: 'FB0054',
      campaignId: 'HN035',
      source: 'Google form',
      medium: 'Email',
      originalLink: 'https://balsamiq.cloud/snde9ov/pc47mky/r...',
      shortenLink: 'https://bit.ly/3YnO',
      clicks: 374,
    },
    {
      key: '2',
      linkId: 'FB0054',
      campaignId: 'HN035',
      source: 'Google form',
      medium: 'Email',
      originalLink: 'https://balsamiq.cloud/snde9ov/pc47mky/r...',
      shortenLink: 'https://bit.ly/3YnO',
      clicks: 374,
    },
    {
      key: '3',
      linkId: 'FB0054',
      campaignId: 'HN035',
      source: 'Google form',
      medium: 'Email',
      originalLink: 'https://balsamiq.cloud/snde9ov/pc47mky/r...',
      shortenLink: 'https://bit.ly/3YnO',
      clicks: 374,
    },
    {
      key: '4',
      linkId: 'FB0054',
      campaignId: 'HN035',
      source: 'Google form',
      medium: 'Email',
      originalLink: 'https://balsamiq.cloud/snde9ov/pc47mky/r...',
      shortenLink: 'https://bit.ly/3YnO',
      clicks: 374,
    },
    {
      key: '5',
      linkId: 'FB0054',
      campaignId: 'HN035',
      source: 'Google form',
      medium: 'Email',
      originalLink: 'https://balsamiq.cloud/snde9ov/pc47mky/r...',
      shortenLink: 'https://bit.ly/3YnO',
      clicks: 374,
    },
    {
      key: '6',
      linkId: 'FB0054',
      campaignId: 'HN035',
      source: 'Google form',
      medium: 'Email',
      originalLink: 'https://balsamiq.cloud/snde9ov/pc47mky/r...',
      shortenLink: 'https://bit.ly/3YnO',
      clicks: 374,
    },
  ];

  calendar: any = [
    {
      weekDay: 'Sun',
      monthDay: 23,
      monthDayHover: true,
    },
    {
      weekDay: 'Mon',
      monthDay: 24
    },
    {
      weekDay: 'Tue',
      monthDay: 25
    },
    {
      weekDay: 'Wed',
      monthDay: 26
    },
    {
      weekDay: 'Thu',
      monthDay: 27,
    },
    {
      weekDay: 'Fri',
      monthDay: 28,
    },
    {
      weekDay: 'Sat',
      monthDay: 29,
    }

  ]

  constructor(private elementRef: ElementRef) {
    Chart.register(...registerables);
  }

  ngAfterViewInit(): void {
    this.createChart()
  }

  createChart(){
    let htmlRef = this.elementRef.nativeElement.querySelector(`.ant-card-body #myChart`);
    this.chart = new Chart(htmlRef, {
      type: 'line',
      data: {
        labels: ['1 Dec', '8 Dec', '16 Dec', '31 Dec'],
        datasets: [
          {
            label: "Close Detail",
            data: ['200', '150',
              '100', '0'],
            borderColor: '#109CF1',
            tension: 0.1,
            backgroundColor: '#109CF1'
          },
        ]
      },


    });
  }

  ngOnInit(): void {
  }

}
