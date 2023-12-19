import AccordionDanger from '../blocks/AccordionDanger';

export const ACCORDIONDANGER = {
  html: `<details class="accordion accordion-danger">
  <summary class="accordion-title">
    What's an accordion?
    <div class="chevron-icon"></div>
  </summary>
  <div class="content-wrapper">
    <p class="accordion-desc">
      An accordion is a list of headers that hide or reveal additional content
      when selected/opened. You may see them often on FAQ pages, where it makes
      it easy for users to scan the list of questions without getting distracted
      by answers and a lot of text, and giving them control by clicking on the
      questions that pertain to them.
    </p>
  </div>
</details>`,
  css: `.accordion {
  width: 500px;
  margin: 0 auto;
  background-color: #bbe1ff;
  border-left: 10px solid #4ba3e3;
  border-radius: 9px;
}

.accordion + .accordion {
  margin-top: 16px;
}

.chevron-icon {
  height: 48px;
  width: 48px;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE1LjUgMTEuMjk5OEw5Ljg5OTk1IDUuNTk5OEM5LjQ5OTk1IDUuMTk5OCA4Ljg5OTk1IDUuMTk5OCA4LjQ5OTk1IDUuNTk5OEM4LjA5OTk1IDUuOTk5OCA4LjA5OTk1IDYuNTk5OCA4LjQ5OTk1IDYuOTk5OEwxMy40IDExLjg5OThMOC40OTk5NSAxNi43OTk4QzguMjk5OTUgMTYuOTk5OCA4LjE5OTk1IDE3LjE5OTggOC4xOTk5NSAxNy40OTk4QzguMTk5OTUgMTguMDk5OCA4LjU5OTk1IDE4LjQ5OTggOS4xOTk5NSAxOC40OTk4QzkuNDk5OTUgMTguNDk5OCA5LjY5OTk1IDE4LjM5OTggOS44OTk5NSAxOC4xOTk4TDE1LjYgMTIuNDk5OEMxNS45IDEyLjI5OTggMTUuOSAxMS42OTk4IDE1LjUgMTEuMjk5OFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=');
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 150ms ease-in;
}

.accordion[open] .chevron-icon {
  transform: rotate(90deg);
}

.content-wrapper {
  padding: 16px;
}

.accordion-desc {
  max-width: 100%;
  line-height: 1.5;
}

.accordion-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0 8px 16px;
  cursor: pointer;
  list-style: none;
}

.accordion-title::-webkit-details-marker {
  display: none;
}

.accordion-danger {
  background-color: #ffb9b9;
  border-color: #e03131;
}`,
  element: AccordionDanger,
};
