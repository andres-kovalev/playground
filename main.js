async function run() {
  const devices = await navigator.mediaDevices.enumerateDevices();

  const root = document.getElementById('container');

  for(const device of devices) {
    root.appendChild(createDescriptionDiv(device));
  }

  const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });

  for(const track of stream.getTracks()) {
    root.appendChild(createDescriptionDiv(track));
  }
}

function createDescriptionDiv(object) {
  const objectDiv = document.createElement('div');
  objectDiv.style.border = '1px solid black';
  objectDiv.style.margin = '5px';

  for(const field in object) {
    const b = document.createElement('b');
    b.textContent = `${field}:`;
    const span = document.createElement('span');
    span.textContent = object[field];

    const fieldDiv = document.createElement('div');
    fieldDiv.appendChild(b);
    fieldDiv.appendChild(span);
    objectDiv.appendChild(fieldDiv);
  }

  return objectDiv;
}

run();
