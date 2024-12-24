// JavaScript Document
function calculatea() {

            var value = document.querySelectorAll('.nhap');
            var giatri
            var tonga = 0;
		 for (var i = 0; i < value.length; i++) {

                giatri = value[i].value.trim();

                if (giatri == "" || isNaN(giatri) || giatri < 1 || giatri > 5) {
                    alert(" bắt buộc nhập giá trị và phải nhập điểm từ 1 đến 5 ");
                    return false;
                    break;
                }
                tonga = tonga + parseInt(giatri);
				
            }
            document.getElementById('tonga').value = tonga;
        }
		   function calculateb() {

            var value = document.querySelectorAll('.nhapb');
            var giatri
           	var tongb = 0;
            for (var i = 0; i < value.length; i++) {

                giatri = value[i].value.trim();

                if (giatri == "" || isNaN(giatri) || giatri < 1 || giatri > 5) {
                    alert(" bắt buộc nhập giá trị và phải nhập điểm từ 1 đến 5 ");
                    return false;
                    break;
                }
                
				tongb = tongb + parseInt(giatri);
            }
            document.getElementById('tongb').value = tongb;
        }
		  function calculatec() {

            var value = document.querySelectorAll('.nhapc');
            var giatri
           	var tongc = 0;
            for (var i = 0; i < value.length; i++) {

                giatri = value[i].value.trim();

                if (giatri == "" || isNaN(giatri) || giatri < 1 || giatri > 5) {
                    alert(" bắt buộc nhập giá trị và phải nhập điểm từ 1 đến 5 ");
                    return false;
                    break;
                }
                
				tongc = tongc + parseInt(giatri);
            }
            document.getElementById('tongc').value = tongc;
        }
		 function calculated() {

            var value = document.querySelectorAll('.nhapd');
            var giatri
            var tongd = 0;
		 for (var i = 0; i < value.length; i++) {

                giatri = value[i].value.trim();

                if (giatri == "" || isNaN(giatri) || giatri < 1 || giatri > 5) {
                    alert(" bắt buộc nhập giá trị và phải nhập điểm từ 1 đến 5 ");
                    return false;
                    break;
                }
                tongd = tongd + parseInt(giatri);
				
            }
            document.getElementById('tongd').value = tongd;
        }
		  function calculatee() {

            var value = document.querySelectorAll('.nhape');
            var giatri
            var tonge = 0;
		 for (var i = 0; i < value.length; i++) {

                giatri = value[i].value.trim();

                if (giatri == "" || isNaN(giatri) || giatri < 1 || giatri > 5) {
                    alert(" bắt buộc nhập giá trị và phải nhập điểm từ 1 đến 5 ");
                    return false;
                    break;
                }
                tonge = tonge + parseInt(giatri);
				
            }
            document.getElementById('tonge').value = tonge;
        }
		  function calculatef() {

            var value = document.querySelectorAll('.nhapf');
            var giatri
            var tongf = 0;
		 for (var i = 0; i < value.length; i++) {

                giatri = value[i].value.trim();

                if (giatri == "" || isNaN(giatri) || giatri < 1 || giatri > 5) {
                    alert(" bắt buộc nhập giá trị và phải nhập điểm từ 1 đến 5 ");
                    return false;
                    break;
                }
                tongf = tongf + parseInt(giatri);
				
            }
            document.getElementById('tongf').value = tongf;
        }
		        function timphieulonnhat() {

            // Lấy giá trị điểm từ form
            var phieuA = parseInt(document.getElementById('tonga').value);
            var phieuB = parseInt(document.getElementById('tongb').value);
            var phieuC = parseInt(document.getElementById('tongc').value);
            var phieuD = parseInt(document.getElementById('tongd').value);
			var phieuE = parseInt(document.getElementById('tonge').value);
			var phieuF = parseInt(document.getElementById('tongf').value);


            // Tìm ra phiếu có điểm nhiều nhất
            var timsolonnhat = Math.max(phieuA, phieuB, phieuC, phieuD, phieuE, phieuF);

            var xuatketqua = "";

            if (timsolonnhat === phieuA) {
                xuatketqua = "R - Realistic. Bạn là người thực tế, bạn có khả năng về kỹ thuật, công nghệ hệ thống muốn làm việc với đồ vật máy móc,động thực vật. Bạn thích làm các công việc ngoài trời các ngành về kỹ thuật nông nghiệp, thủy lợi, lâm nghiệp, dầu khí, giao thông vận tải, quản lý đất đai môi trường,điều khiến máy móc thiết bị.";
            } else if (timsolonnhat === phieuB) {

                xuatketqua = "I - Investigative. Bạn là người nghiên cứu, bạn có khả năng về quan sát, khám phá, phân tích đánh giá và giải quyết các vấn đề.Các ngành về khoa học tự nhiên;khoa học xã hội, y - dược, toán học, thống kê, khảo cổ, công nghệ thông tin, kinh tế học...";
            } else if (timsolonnhat === phieuC) {

                xuatketqua = "A - Artistic. Bạn là người nghệ thuật, bạn có khả năng về nghệ thuật, trực giác, khả năng tưởng tượng cao, thích làm việc trong môi trường có tính ngẫu hứng, không khuôn mẫu.Các ngành về văn chương; báo chí, điện ảnh, sân khấu, mỹ thuật; ca nhạc, múa;kiến trúc, thời trang, hội họa,...";
            } else if (timsolonnhat === phieuD) {

                xuatketqua = "S - Social. Bạn là người xã hội. Bạn có khả năng về ngôn ngữ, giảng giải, thích làm việc với con người, thích trợ giúp, đào tạo. Các ngành về sư phạm, huấn luyện viên, tư vấn viên, hoạt động xã hội,..sư phạm mầm non";
            } else if (timsolonnhat === phieuE) {

                xuatketqua = "E - Enterprise. Bạn là người kinh doanh. Bạn có khả năng về kinh doanh, mạnh bạo, dám nghĩ dám làm, có thể gây ảnh hưởng, thuyết phục người khác; có khả năng quản lý. Các ngành về quản trị kinh doanh, thương mại, marketing dịch vụ khách hàng, báo chí; luật;..";
            } else if (timsolonnhat === phieuF) {

                xuatketqua = "C - Conventional.Bạn là Người quy củ. Bạn có khả năng về số học, thích thực hiện những công việc chi tiết, làm việc với dữ liệu hoặc thích làm theo chỉ dẫn của người khác, làm các công việc văn phòng.Các ngành về hành chính, quản trị văn phòng, kế toán, kiểm toán, thư ký,....";
            }

            // Hiển thị kết quả
            document.getElementById("hienthiketqua").innerHTML = `<div class="ketqua ">${xuatketqua}</div> `;
        }