let form = document.getElementById('lobby__form');

let displayName = sessionStorage.getItem('display_name');
if (displayName) {
  form.name.value = displayName;
}

const selectedTopics = sessionStorage.getItem('selectedTopics')
  ? JSON.parse(sessionStorage.getItem('selectedTopics'))
  : [];

const topics = [
  'Tất cả',
  'Âm nhạc',
  'Anime',
  'Bảo tàng',
  'Board game',
  'Chơi game',
  'Chiêm tinh',
  'Chó',
  'Concert',
  'Công nghệ',
  'Đồ ăn',
  'Động vật',
  'Du lịch',
  'Hành động',
  'Hài hước',
  'Hát',
  'Hip hop',
  'Hoạt hình',
  'Học',
  'Huyền ảo',
  'Kinh dị',
  'Khoa học',
  'Lãng mạn',
  'Lịch sử',
  'Mèo',
  'Meme',
  'Metal',
  'Nấu ăn',
  'Nghệ thuật',
  'Ngoài trời',
  'Ngôn ngữ',
  'Nhiếp ảnh',
  'Nướng bánh',
  'Phim',
];

form.addEventListener('submit', (e) => {
  e.preventDefault();

  sessionStorage.setItem('display_name', e.target.name.value);

  window.location = `room.html`;
});

const topicSelectField = document.getElementById('topic-select');

topics.forEach((topic) => {
  let button = document.createElement('button');
  button.textContent = '#' + topic;

  button.classList.add('topic__button');

  if (selectedTopics.includes(topic)) {
    button.classList.add('topic__button--active');
  }

  button.addEventListener('click', (event) => {
    event.preventDefault();

    button.classList.toggle('topic__button--active');

    if (selectedTopics.includes(topic)) {
      selectedTopics.splice(selectedTopics.indexOf(topic), 1);
    } else {
      selectedTopics.push(topic);
    }

    sessionStorage.setItem('selectedTopics', JSON.stringify(selectedTopics));
  });

  topicSelectField.appendChild(button);
});
