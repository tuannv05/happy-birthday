# 🎂 No-Code Birthday Studio ✨ 3D Interactive Greeting Platform

> **Nền tảng Tạo & Gửi Thiệp Sinh Nhật Tương Tác 3D Trực Tuyến** đạt chuẩn điện ảnh 60FPS. Tự động hóa trải nghiệm từ khâu tạo thiệp (No-Code Studio) đến khâu gửi tặng và thưởng thức thiệp với hiệu ứng 3D đỉnh cao.

[![GitHub Pages](https://img.shields.io/badge/Demo-Live%20Preview-brightgreen?style=for-the-badge&logo=github)](https://tuannv05.github.io/happy-birthday/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![HTML5 / CSS3 / Vanilla JS](https://img.shields.io/badge/Tech-Single%20File%20%7C%20Zero%20Build-orange?style=for-the-badge)](https://developer.mozilla.org/)

---

## 🌟 TÍNH NĂNG NỔI BẬT

### 1. 🛠️ Creator Studio Wizard (Bảng Tạo Thiệp 1 Màn Hình)
- **4 Thẻ cấu hình trực quan**:
  - **Thẻ 1 — Thông tin & Chủ đề:** Nhập tên người nhận, tuổi mới, tên người gửi; chọn 1 trong 3 bảng màu điện ảnh (*Đêm Sao Hoàng Kim*, *Hồng Ngọc Lãng Mạn*, *Cực Quang Huyền Ảo*).
  - **Thẻ 2 — Hình ảnh sắc nét (Lossless Media Engine):** Upload ảnh chân dung chính và thư viện ảnh kỷ niệm (1–8 ảnh) trực tiếp từ điện thoại/máy tính lên Cloudinary với chất lượng Retina nguyên bản, không bị nén vỡ hình.
  - **Thẻ 3 — Nhạc nền nguyên bản:** Chọn file `.mp3` / `.m4a` từ máy tính với bitrate gốc 100%, hoặc chọn 1 trong 3 giai điệu *Happy Birthday* không lời tạo sinh bằng Web Audio API.
  - **Thẻ 4 — Lời chúc trong thiệp:** Khung soạn thảo tự do kèm 4 mẫu lời chúc chèn 1-click (*Bạn thân*, *Người yêu*, *Gia đình*, *Đồng nghiệp*).
- **Thanh công cụ cố định (Sticky Action Bar):** Xem trước hiệu ứng ngay lập tức và tạo đường link chia sẻ nén bằng thuật toán `LZ-String` (`?c=...`) cực ngắn gọn, an toàn khi gửi qua Zalo / Messenger.

---

### 2. 🎬 Recipient Journey (Hành Trình Điện Ảnh 4 Màn 60FPS)
Khi người nhận mở đường link có `?c=...`, hệ thống tự động ẩn Studio và đưa người nhận vào hành trình:
1. **ACT 1 — Hộp Quà 3D & Cơ Chế Phát Nhạc Chuẩn Autoplay:**
   - Hộp quà 3D lơ lửng, gắn thẻ tên người nhận/người gửi.
   - Khi chạm vào hộp quà, âm nhạc tự động bật ngay lập tức trong luồng sự kiện click đồng bộ (vượt qua mọi chính sách chặn Autoplay của Safari iOS, Chrome, Zalo/Messenger WebView), kèm hiệu ứng tăng dần âm lượng (Fade-in 1.5s).
2. **ACT 2 — Chùm Bóng Bay Kéo Ảnh Chân Dung Bay Lên & Bánh Kem 3D:**
   - Cụm 7 quả bóng bay 3D căng bóng kéo khung ảnh chân dung sắc nét bay vút từ đáy màn hình (`y: 120vh` $\rightarrow$ `0vh`) trong `2.6s` (`power2.out`) rồi lơ lửng bồng bềnh giữa bầu trời đêm đầy pháo hoa canvas.
   - Bánh kem 3 tầng lung linh, hỗ trợ thổi nến bằng **Microphone thực tế** hoặc chạm trực tiếp vào nến.
3. **ACT 3 — Bức Thư 3D Hologram & Vòng Xoay Ảnh Kỷ Niệm HD:**
   - Bức thư nghiêng 3D theo cử chỉ chuột/cảm ứng, chạy chữ máy tính siêu tốc (`16ms` / ký tự, chạm thiệp để hiện toàn bộ tức thì).
   - Vòng xoay ảnh kỷ niệm 3D Cylindrical Carousel mượt mà, chạm ảnh mở Lightbox HD toàn màn hình.
4. **ACT 4 — Thả Đèn Trời Ước Nguyện & Đại Tiệc Pháo Hoa:**
   - Nhập điều ước tuổi mới và thả đèn trời khổng lồ bay lên bầu trời đêm rực rỡ các chùm pháo hoa nghệ thuật.

---

## 🚀 HƯỚNG DẪN SỬ DỤNG & CÀI ĐẶT

### 1. Chạy trực tiếp (Không cần build tool)
- Tải mã nguồn về máy và nhấp đúp vào file `index.html` để mở ngay trên trình duyệt bất kỳ (Chrome, Safari, Edge, Firefox, Cốc Cốc).

### 2. Triển khai miễn phí lên GitHub Pages
1. Fork hoặc Push mã nguồn lên repository GitHub của bạn: `https://github.com/tuannv05/happy-birthday`.
2. Vào tab **Settings** của repository $\rightarrow$ chọn mục **Pages** ở thanh menu bên trái.
3. Tại phần **Build and deployment** > **Branch**: chọn branch `main` (hoặc `master`), thư mục `/(root)` và nhấn **Save**.
4. Sau 1 phút, trang web của bạn sẽ được xuất bản tại:
   ```
   https://tuannv05.github.io/happy-birthday/
   ```

---

## ☁️ CẤU HÌNH CLOUDINARY (TÙY CHỌN)
File `index.html` đã được cấu hình sẵn với preset:
```javascript
const CLOUD_CONFIG = {
  cloudName: "lnxwubhk",
  uploadPreset: "thiep_sinh_nhat"
};
```
Mọi hình ảnh và bài hát tải lên từ thiết bị sẽ tự động được lưu trữ và truyền phát qua CDN tốc độ cao của Cloudinary hoàn toàn miễn phí.

---

## 🛠️ CÔNG NGHỆ SỬ DỤNG
- **Single-File Architecture:** 100% tự chứa HTML5, CSS3 và Vanilla JavaScript.
- **GSAP (GreenSock 3.12.5):** Điều phối timeline chuyển cảnh 3D mượt mà.
- **Canvas-Confetti:** Bắn pháo giấy vật lý rực rỡ.
- **HTML5 Canvas 2D Engine:** Bầu trời sao Parallax, đom đóm, pháo hoa nghệ thuật và hạt bụi tiên.
- **Web Audio API:** Bộ tổng hợp âm thanh tạo sinh (Synthesizer) không bao giờ lỗi link và bộ phân tích âm lượng Micro thổi nến.
- **LZ-String 1.5.0:** Thuật toán nén dữ liệu URL State Encoding siêu nhỏ gọn.

---

## 📄 LICENSE
Phát hành theo giấy phép [MIT License](LICENSE). Dự án hoàn toàn mã nguồn mở và miễn phí cho cộng đồng!
