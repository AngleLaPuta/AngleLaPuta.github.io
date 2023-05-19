* {
  box-sizing: border-box;
}

/* Set a background color */
body {
  font-family: "Comic Sans MS", sans-serif;
  background: linear-gradient(90deg, #ff69b4 0%, #ffb6c1 25%, #d3a6d1 50%, #add8e6 75%, #9ac0cd 100%);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

.timeline::after {
  content: '';
  position: absolute;
  width: 6px;
  background-color: white;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
  z-index: 0;
}

.container {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
  margin-top: 50px;
  z-index: 1;
}

.container[data-year] {
  --year-diff: calc(var(--current-year) - attr(data-year));
  margin-top: calc((var(--year-diff) - 1) * 100px);
}

.container::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  background-color: white;
  border: 4px solid #FF9F55;
  top: calc(50% - 12.5px); /* Adjust the positioning */
  transform: translateY(-50%);
  border-radius: 50%;
  z-index: 2;
  left: 50%;
  margin-left: -12px; /* Adjust the positioning */
}



.left::before,
.right::before {
  content: '';
  position: absolute;
  top: 50%;
  width: 50%;
  height: 2px; /* Adjust the height to match the line thickness */
  background-color: white;
}

.left::after{
  left:200px;
}

.content {
  padding: 20px 30px;
  background-color: white;
  position: relative;
  border-radius: 6px;
}

/* Auto-alternate positioning */
.container:nth-child(even) {
  left: 50%;
}

.container:nth-child(even) .left::before {
  right: auto;
  left: 30px;
  border-color: transparent white transparent transparent;
}

.container:nth-child(even) .right::before {
  left: auto;
  right: 30px;
  border-color: transparent transparent transparent white;
}

.container:nth-child(even) .right::after {
  left: auto;
  right: -16px;
}

.container:nth-child(even) .content {
  text-align: right;
}

@media screen and (max-width: 600px) {
  .timeline::after {
    left: 31px;
  }

  .container {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
    margin-top: calc((var(--year-diff) - 1) * 100px);
  }

  .container::before {
    left: 60px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
  }

  .left::after,
  .right::after {
    left: 15px;
  }

  .right {
    left: 0%;
  }
}
