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
