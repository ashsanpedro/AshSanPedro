import { Component, AfterViewInit, ElementRef } from "@angular/core";

@Component({
  selector: 'techstack',
  imports: [],
  standalone: true,
  template: `
    <div class="flex flex-col w-full h-full">

      <div class="logos h-[70%] w-full rounded-xl p-2 shadow-lg
      backdrop-blur bg-gunsmoke-50 bg-opacity-40 dark:bg-gunsmoke-500 dark:bg-opacity-20">
        <div class="wrapper w-full h-full relative overflow-hidden ">
          <div class="item item1"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"/></div>
          <div class="item item2"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"/></div>
          <div class="item item3"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" /></div>
          <div class="item item4"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" /></div>
          <div class="item item5"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg"/></div>
          <div class="item item6"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"/></div>
          <div class="item item7"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"/></div>
          <div class="item item8"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"/></div>
          <div class="item item9"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"/></div>
          <div class="item item10"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" /></div>
          <div class="item item11"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg" /></div>
          <div class="item item12"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trello/trello-original.svg" /></div>
          <div class="item item13"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"/></div>
          <div class="item item14"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"/></div>
          <div class="item item15"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" /></div>
          <div class="item item16"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" /></div>
        </div>

        <!-- <h1 class="h-[30%] w-full mt-4 text-center">TECH I <i class="fa-solid fa-heart text-red-600"></i></h1> -->
      </div>

    </div>
  `,
  styles: `
  
.wrapper {
  mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1) 20%,
    rgba(0, 0, 0, 1) 80%,
    rgba(0, 0, 0, 0)
  );
}

@keyframes scrollLeft {
  to {
    left: -200px;
  }
}

.item {
  width: 48px;
  height: 48px;
  position: absolute;
  left: max(calc(200px * 8), 100%);
  animation: scrollLeft 30s linear infinite;
}

.item1 { animation-delay: calc(30s / 8 * (8 - 0.5) * -1); }
.item2 { animation-delay: calc(30s / 8 * (8 - 1) * -1); }
.item3 { animation-delay: calc(30s / 8 * (8 - 1.5) * -1); }
.item4 { animation-delay: calc(30s / 8 * (8 - 2) * -1); }
.item5 { animation-delay: calc(30s / 8 * (8 - 2.5) * -1); }
.item6 { animation-delay: calc(30s / 8 * (8 - 3) * -1); }
.item7 { animation-delay: calc(30s / 8 * (8 - 3.5) * -1); }
.item8 { animation-delay: calc(30s / 8 * (8 - 4) * -1); }
.item9 { animation-delay: calc(30s / 8 * (8 - 4.5) * -1); }
.item10 { animation-delay: calc(30s / 8 * (8 - 5) * -1); }
.item11 { animation-delay: calc(30s / 8 * (8 - 5.5) * -1); }
.item12 { animation-delay: calc(30s / 8 * (8 - 6) * -1); }
.item13 { animation-delay: calc(30s / 8 * (8 - 6.5) * -1); }
.item14 { animation-delay: calc(30s / 8 * (8 - 7) * -1); }
.item15 { animation-delay: calc(30s / 8 * (8 - 7.5) * -1); }
.item16 { animation-delay: calc(30s / 8 * (8 - 8) * -1); }
  `,

})
export class TechStack {}









