const sendBtn = document.querySelector("#p_modal_button3");
const surveyButtons = document.querySelectorAll(".survey_button");
const formEl = document.querySelector("#comment-form");
const commentsList = document.querySelector(".comments-list");

// ====Get answers====
const userData = {};

surveyButtons.forEach((button) =>
  button.addEventListener("click", (event) => {
    const button = event.currentTarget;
    const questionId = button.dataset.bq;

    const text = button.firstElementChild.textContent;

    const question = [...button.getAttribute("class").split(" ")][1];

    userData[question] = { buttonId: questionId, text };
  })
);

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();

  console.log(userData);
});

// ====Add comment====

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const newComment = e.target.comment.value;

  addNewComment(newComment);
  formEl.reset();
});

function addNewComment(comment, userName = "Anonymous") {
  const markup = `<div class="comments" id="comment1" style="display: block">
                  <div class="profile">
                    <img src="/assets/img/avatars/anon.png" />
                  </div>
                  <div class="comment-content">
                    <p class="name">
                        <font style="vertical-align: inherit"
                          >${userName}</font
                        >
                    </p>
                    <p>
                        <font style="vertical-align: inherit"
                          >${comment}</font
                        >
                    </p>
                  </div>
                  <div class="clr"></div>
                  <div class="comment-status">
                    <span>
                        <font style="vertical-align: inherit"
                          >Curte·comente</font
                        >
                      <img
                        src="/assets/img/icons/like.png"
                        width="15px"
                        height="15px"
                      />
                        <font style="vertical-align: inherit">0</font>
                    </span>
                    <small>
                        <font style="vertical-align: inherit">·</font>
                      <u>
                          <font style="vertical-align: inherit"
                            > &lt; minuto antes</font
                          >
                      </u>
                    </small>
                  </div>
                </div>`;

  commentsList.insertAdjacentHTML("beforebegin", markup);
}
