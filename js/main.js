window.onload = () => {
  document.getElementById('home').style.display = 'flex';
  document.getElementById('options').style.display = 'none';
  document.getElementById('result').style.display = 'none';
};

const play = document.getElementById('play').addEventListener('click', () => {
  document.getElementById('home').style.display = 'none';
  document.getElementById('options').style.display = 'flex';
  document.getElementById('result').style.display = 'none';
});

const selection = document.getElementById('min30').addEventListener('click', () => {
  document.getElementById('home').style.display = 'none';
  document.getElementById('options').style.display = 'none';
  document.getElementById('result').style.display = 'block';
});
