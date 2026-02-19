function generateCard() {
    // 1. Random ID 9 số
    const randomId = Math.floor(100000000 + Math.random() * 900000000);
    document.getElementById('displayId').innerText = randomId;

    // 2. Set ngày giờ hiện tại
    const now = new Date();
    const timeString = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    document.getElementById('displayTime').innerText = timeString;

    // 3. Lấy dữ liệu từ input
    document.getElementById('displayName').innerText = document.getElementById('inputName').value || "Chưa nhập";
    document.getElementById('displayGender').innerText = document.getElementById('inputGender').value;
    document.getElementById('displayDob').innerText = document.getElementById('inputDob').value || "11/11";
    document.getElementById('displayZodiac').innerText = document.getElementById('inputZodiac').value || "N/A";
    document.getElementById('displayHobby').innerText = document.getElementById('inputHobby').value || "N/A";

    // 4. Xử lý Ảnh đại diện
    const avatarInput = document.getElementById('inputAvatar');
    if (avatarInput.files && avatarInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('displayAvatar').src = e.target.result;
        }
        reader.readAsDataURL(avatarInput.files[0]);
    }

    // 5. Xử lý Nền Card
    const bgInput = document.getElementById('inputBg');
    const cardElement = document.getElementById('artistCard');
    if (bgInput.files && bgInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            cardElement.style.backgroundImage = `url('${e.target.result}')`;
        }
        reader.readAsDataURL(bgInput.files[0]);
    } else {
        cardElement.style.backgroundImage = "none";
        cardElement.style.backgroundColor = "white";
    }
}

// 6. Hàm tải card về máy
function downloadCard() {
    const area = document.getElementById('captureArea');
    html2canvas(area).then(canvas => {
        const link = document.createElement('a');
        link.download = 'artist-card.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
}

