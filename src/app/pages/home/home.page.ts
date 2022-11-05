import { Component } from '@angular/core';
import { HackathonInterface } from '../../interfaces';
import { HackathonService } from '../../services/hackathon.service';

@Component({
  templateUrl: './home.page.html',
})
export class HomePage {
  public hackathon?: HackathonInterface;

  constructor(private hackathonService: HackathonService) {}

  public onGenerate(): void {
    this.hackathonService.generate$().subscribe({
      next: (hackathon: HackathonInterface) => {
        this.hackathon = hackathon;
      },
      error: (error: unknown) => console.error(error),
    });
  }
}
