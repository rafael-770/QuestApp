import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/question';
import { Answers } from 'src/app/answers';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  QuestList: Question[];
  AnswerList: Answers[];

  constructor() {
    this.QuestList[0].QId = 1;
    this.QuestList[0].AnswId = 1;
    this.QuestList[0].QText = "q1";

    this.QuestList[1].QId = 2;
    this.QuestList[1].AnswId = 3;
    this.QuestList[1].QText = "q2";

    this.QuestList[2].QId = 3;
    this.QuestList[2].AnswId = 2;
    this.QuestList[2].QText = "q3";

    this.QuestList[3].QId = 4;
    this.QuestList[3].AnswId = 4;
    this.QuestList[3].QText = "q4";

    this.AnswerList[0].AnswerId = 1;
    this.AnswerList[0].AnswerText = "Ans-q1";
    this.AnswerList[0].RightQId = 1;

    this.AnswerList[1].AnswerId = 2;
    this.AnswerList[1].AnswerText = "Ans-q2";
    this.AnswerList[1].RightQId = 3;

    this.AnswerList[2].AnswerId = 3;
    this.AnswerList[2].AnswerText = "Ans-q3";
    this.AnswerList[2].RightQId = 2;

    this.AnswerList[3].AnswerId = 4;
    this.AnswerList[3].AnswerText = "Ans-q4";
    this.AnswerList[3].RightQId = 4;
  }




  ngOnInit() {
  }

}
