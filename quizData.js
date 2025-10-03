const quizData = [
  {
    "question": "Câu 1: Có cần số điện thoại chính chủ để đăng ký không?",
    "options": {
      "a": "Không bắt buộc",
      "b": "Không cần",
      "c": "Tùy tình huống",
      "d": "Cần"
    },
    "answer": "d"
  },
  {
    "question": "Câu 2: Đăng ký tài khoản định danh điện tử ở đâu?",
    "options": {
      "a": "Cơ quan Công an",
      "b": "Qua điện thoại",
      "c": "Cổng dịch vụ công",
      "d": "UBND xã"
    },
    "answer": "a"
  },
  {
    "question": "Câu 3: Những yếu tố nào sau đây là trụ cột chính trong chuyển đổi số quốc gia?",
    "options": {
      "a": "Hạ tầng số, Dữ liệu số",
      "b": "Chính phủ số, Kinh tế số, Xã hội số",
      "c": "Công nghệ số, Nhân lực số",
      "d": "Thể chế số"
    },
    "answer": "b"
  },
  {
    "question": "Câu 4: Theo Quyết định 749/QĐ-TTg năm 2020 về Chương trình Chuyển đổi số quốc gia, những công nghệ số trọng tâm nào được khuyến khích phát triển?",
    "options": {
      "a": "Trí tuệ nhân tạo (AI), dữ liệu lớn (Big Data), Internet vạn vật (IoT)",
      "b": "Công nghệ thủ công truyền thống",
      "c": "Máy móc cơ khí, công nghệ in offset",
      "d": "Thiết bị điện gia dụng và nông cụ"
    },
    "answer": "a"
  },
  {
    "question": "Câu 5: Bị mất điện thoại đang sử dụng tài khoản định danh điện tử thì cần làm gì?",
    "options": {
      "a": "Không làm gì cả",
      "b": "Xóa tài khoản và đăng ký lại",
      "c": "Thay điện thoại mới và sử dụng bình thường",
      "d": "Cấp lại số điện thoại và khóa tài khoản định danh"
    },
    "answer": "d"
  },
  {
    "question": "Câu 6: Hệ thống nào giúp nhà trường quản lý học sinh và giáo viên hiệu quả hơn?",
    "options": {
      "a": "Sổ liên lạc giấy",
      "b": "Ứng dụng quản lý giáo dục",
      "c": "Phần mềm chỉnh sửa văn bản",
      "d": "Email"
    },
    "answer": "b"
  },
  {
    "question": "Câu 7: Chọn thiết bị mạng không dây (bộ phát wifi) như thế nào để đảm bảo an toàn thông tin khi sử dụng?",
    "options": {
      "a": "Chọn thiết bị có giá rẻ, mẫu mã đẹp",
      "b": "Chọn thiết bị có nguồn gốc xuất xứ, thương hiệu nổi tiếng của nước ngoài",
      "c": "Chọn thiết bị có nguồn gốc xuất xứ rõ ràng, thương hiệu uy tín, có khả năng bảo mật và loại bỏ mã độc, ngăn chặn sự thâm nhập bất hợp pháp từ bên ngoài",
      "d": "Chọn thiết bị có mẫu mã đẹp, độ phủ sóng rộng, không nhất thiết phải là thương hiệu nổi tiếng"
    },
    "answer": "c"
  },
  {
    "question": "Câu 8: Dấu hiệu nhận biết email lừa đảo là gì?",
    "options": {
      "a": "Có file đính kèm lạ",
      "b": "Đường link lạ đính kèm",
      "c": "Người gửi không rõ ràng",
      "d": "Nội dung cấp bách, khẩn cấp"
    },
    "answer": ["a","b","c","d"]
  },
  {
    "question": "Câu 9: Quy tắc ứng xử cho tổ chức, cá nhân được quy định tại Điều mấy Bộ Quy tắc ứng xử trên không gian mạng?",
    "options": {
      "a": "Điều 2",
      "b": "Điều 3",
      "c": "Điều 4",
      "d": "Điều 5"
    },
    "answer": "c"
  },
  {
    "question": "Câu 10: AI có thể được phân loại thành mấy nhóm chính?",
    "options": {
      "a": "4",
      "b": "5",
      "c": "2",
      "d": "3"
    },
    "answer": "d"
  },
  {
    "question": "Câu 11: AI có thể giúp chẩn đoán bệnh nào sau đây thông qua hình ảnh?",
    "options": {
      "a": "Suy thận",
      "b": "Ung thư phổi",
      "c": "Tim mạch",
      "d": "Tất cả đều đúng"
    },
    "answer": "d"
  },
  {
    "question": "Câu 12: AI được sử dụng trong lĩnh vực nào sau đây?",
    "options": {
      "a": "Giáo dục",
      "b": "Tài chính",
      "c": "Y tế",
      "d": "Tất cả đều đúng"
    },
    "answer": "d"
  },
  {
    "question": "Câu 13: Thành phần nào của điện thoại thông minh điều phối mọi hoạt động trên thiết bị?",
    "options": {
      "a": "Camera chính",
      "b": "Pin",
      "c": "Hệ điều hành (Android hoặc iOS)",
      "d": "Bộ xử lý đồ họa (GPU)"
    },
    "answer": "c"
  },
  {
    "question": "Câu 14: Mục đích chính của việc điều chỉnh múi giờ trên thiết bị là gì?",
    "options": {
      "a": "Tăng hiệu suất xử lý CPU",
      "b": "Giảm tiêu thụ pin",
      "c": "Kích hoạt bảo mật dữ liệu",
      "d": "Hiển thị đúng thời gian hệ thống và ứng dụng"
    },
    "answer": "d"
  },
  {
    "question": "Câu 15: Màn hình nào sử dụng đèn nền chiếu qua tinh thể lỏng để tạo hình ảnh?",
    "options": {
      "a": "CRT",
      "b": "LCD",
      "c": "Plasma",
      "d": "OLED"
    },
    "answer": "b"
  },
  {
    "question": "Câu 16: Tiêu chí nào yêu cầu thông tin không bị thiên lệch hoặc lái dư luận?",
    "options": {
      "a": "Độ chính xác",
      "b": "Tính khách quan",
      "c": "Tính cập nhật",
      "d": "Tính rõ ràng"
    },
    "answer": "b"
  },
  {
    "question": "Câu 17: Việc phân quyền người dùng trong truy xuất dữ liệu nhằm mục đích gì?",
    "options": {
      "a": "Giảm chi phí lưu trữ",
      "b": "Tăng tốc truy cập",
      "c": "Dễ dàng chia sẻ cho tất cả mọi người",
      "d": "Bảo mật dữ liệu và kiểm soát truy cập"
    },
    "answer": "d"
  },
  {
    "question": "Câu 18: Đặc điểm phổ biến của thông tin giả mạo là gì?",
    "options": {
      "a": "Chỉ phát tán nội bộ trong quân đội",
      "b": "Thường đi kèm các báo cáo chính thống",
      "c": "Được kiểm chứng rõ ràng",
      "d": "Mạo danh cán bộ, sử dụng hình ảnh, tên tuổi thật để tạo lòng tin"
    },
    "answer": "d"
  },
  {
    "question": "Câu 19: Nguyên tắc nào yêu cầu người dùng chỉ được cấp quyền đủ để thực hiện nhiệm vụ?",
    "options": {
      "a": "Phân tán dữ liệu",
      "b": "Tối thiểu quyền",
      "c": "Truy cập mở",
      "d": "Bảo mật nhiều lớp"
    },
    "answer": "b"
  },
  {
    "question": "Câu 20: Việc phân loại dữ liệu công vụ nhằm mục đích gì trong quản lý quyền truy cập?",
    "options": {
      "a": "Lưu trữ dễ dàng hơn",
      "b": "Tăng tốc độ truyền tải dữ liệu",
      "c": "Tối ưu bộ nhớ hệ thống",
      "d": "Xác định mức truy cập phù hợp"
    },
    "answer": "d"
  },
  {
    "question": "Câu 21: Lợi ích chính của khai báo trực tuyến là gì?",
    "options": {
      "a": "Giảm thủ tục, tiết kiệm thời gian",
      "b": "Tăng số lượng lao động sử dụng internet",
      "c": "Hạn chế giao tiếp xã hội",
      "d": "Giúp cơ quan nhà nước tăng thu ngân sách"
    },
    "answer": ["a","b"]
  },
  {
    "question": "Câu 22: Loại tác phẩm nào không thuộc danh mục được bảo vệ bản quyền theo luật hiện hành?",
    "options": {
      "a": "Tác phẩm nghe nhìn",
      "b": "Hình ảnh minh họa quảng cáo",
      "c": "Công thức nấu ăn truyền miệng",
      "d": "Tác phẩm viết như bài báo, sách"
    },
    "answer": "c"
  },
  {
    "question": "Câu 23: NotebookLM là công cụ do tổ chức nào phát triển?",
    "options": {
      "a": "OpenAI",
      "b": "Google",
      "c": "Microsoft",
      "d": "IBM"
    },
    "answer": "b"
  },
  {
    "question": "Câu 24: Vì sao cần thực hiện quy trình lặp khi làm việc với AI?",
    "options": {
      "a": "Vì AI có thể đoán chính xác mọi yêu cầu",
      "b": "Để tiết kiệm thời gian không cần kiểm tra lại",
      "c": "Để AI hiểu người dùng ngay từ đầu",
      "d": "Vì AI không thể luôn hiểu đúng ý ngay từ lần đầu"
    },
    "answer": "d"
  },
  {
    "question": "Câu 25: Hành vi cài mã độc qua USB để đánh cắp thông tin thuộc loại mối nguy nào?",
    "options": {
      "a": "Gây hoang mang nội bộ",
      "b": "Tăng khối lượng lưu trữ trái phép",
      "c": "Gây rò rỉ thông tin mật, ảnh hưởng an ninh thông tin",
      "d": "Gây ảnh hưởng dư luận"
    },
    "answer": "c"
  },
  {
    "question": "Câu 26: Mật khẩu mạnh nên có ít nhất bao nhiêu ký tự?",
    "options": {
      "a": "8 ký tự",
      "b": "6 ký tự",
      "c": "12 ký tự",
      "d": "16 ký tự"
    },
    "answer": "c"
  },
  {
    "question": "Câu 27: Nguyên nhân chính khiến ánh sáng xanh từ màn hình gây rối loạn giấc ngủ là gì?",
    "options": {
      "a": "Làm rối loạn nhịp sinh học tự nhiên của cơ thể",
      "b": "Làm mắt chói",
      "c": "Tăng sự tỉnh táo ban ngày",
      "d": "Làm khô giác mạc"
    },
    "answer": "a"
  },
  {
    "question": "Câu 28: Một trong các yếu tố quan trọng khi lựa chọn giải pháp công nghệ là gì?",
    "options": {
      "a": "Có nhiều tính năng phức tạp",
      "b": "Khả năng mở rộng và thích ứng với nhu cầu trong tương lai",
      "c": "Thời gian triển khai càng dài càng tốt",
      "d": "Sản phẩm được thiết kế bởi công ty nước ngoài"
    },
    "answer": "b"
  },
  {
    "question": "Câu 29: Sau khi triển khai giải pháp xử lý sự cố, việc kiểm tra lại hệ thống có mục đích gì?",
    "options": {
      "a": "Để chuẩn bị đưa vào bảo trì định kỳ",
      "b": "Để đảm bảo hoàn thành quy trình giấy tờ",
      "c": "Để viết báo cáo sự cố",
      "d": "Đảm bảo sự cố đã được xử lý triệt để và hệ thống hoạt động bình thường"
    },
    "answer": "d"
  },
  {
    "question": "Câu 30: Khi lựa chọn phần mềm BPM, yếu tố khả năng mở rộng có nghĩa là gì?",
    "options": {
      "a": "Đáp ứng được nhu cầu tăng trưởng trong tương lai",
      "b": "Tự động viết báo cáo khi hoàn thành quy trình",
      "c": "Khả năng tự cập nhật nội dung quy trình tự động",
      "d": "Tốc độ xử lý phần mềm nhanh hơn"
    },
    "answer": "a"
  },
  {
    "question": "Câu 31: Tổ chức có thể áp dụng chuyển đổi số vào những hoạt động nào?",
    "options": {
      "a": "Marketing, Kế toán – tài chính, Quản lý rủi ro, Bán hàng, Chăm sóc khách hàng, Nghiên cứu thị trường, Quản lý nhân sự, Chuỗi cung ứng",
      "b": "Tất cả các mục trên"
    },
    "answer": "b"
  },
  {
    "question": "Câu 32: Hệ thống nào giúp kết nối, chia sẻ dữ liệu giữa các cơ quan nhà nước?",
    "options": {
      "a": "Trục liên thông quốc gia, Nền tảng tích hợp chia sẻ dữ liệu (NDXP), Hệ thống dữ liệu dùng chung, Trung tâm dữ liệu quốc gia",
      "b": "Nền tảng tích hợp chia sẻ dữ liệu (NDXP)"
    },
    "answer": "b"
  },
  {
    "question": "Câu 33: Ứng dụng chính thức của Bảo hiểm xã hội Việt Nam trên nền tảng thiết bị di động là gì?",
    "options": {
      "a": "VNeID, VinID, VnID, VssID",
      "b": "VssID"
    },
    "answer": "b"
  },
  {
    "question": "Câu 34: Các hình thức thanh toán không dùng tiền mặt phổ biến hiện nay là gì?",
    "options": {
      "a": "Thanh toán bằng tiền mặt, Dùng ví điện tử, Quét mã QR, Chuyển khoản ngân hàng",
      "b": "Dùng ví điện tử, Quét mã QR, Chuyển khoản ngân hàng"
    },
    "answer": "b"
  },
  {
    "question": "Câu 35: Lợi ích của ứng dụng bản đồ số là gì?",
    "options": {
      "a": "Tra cứu địa điểm nhanh chóng, Xác định vị trí hiện tại, Gửi tiền trực tiếp, Chỉ đường thông minh",
      "b": "Tra cứu địa điểm nhanh chóng, Xác định vị trí hiện tại, Chỉ đường thông minh"
    },
    "answer": "b"
  },
  {
    "question": "Câu 36: Các kỹ thuật tấn công mạng hiện đại thường sử dụng?",
    "options": {
      "a": "Spear phishing, Tấn công bằng mã độc tàng hình, Tấn công bằng khai thác 0-day, Tấn công qua AI",
      "b": "Tất cả các đáp án trên"
    },
    "answer": "b"
  },
  {
    "question": "Câu 37: Để bảo vệ trẻ em trên không gian mạng, Chính phủ Việt Nam đã ban hành Nghị định nào quy định chi tiết một số điều của Luật An ninh mạng, trong đó có nội dung về bảo vệ trẻ em?",
    "options": {
      "a": "Nghị định số 15/2020/NĐ-CP",
      "b": "Nghị định số 64/2007/NĐ-CP",
      "c": "Nghị định số 53/2022/NĐ-CP",
      "d": "Nghị định số 72/2013/NĐ-CP"
    },
    "answer": "d"
  },
  {
    "question": "Câu 38: Các hình thức tấn công mạng phổ biến hiện nay là gì?",
    "options": {
      "a": "Tấn công mã độc, Tấn công trung gian (MITM), Tấn công phishing, Tấn công từ chối dịch vụ (DDoS)",
      "b": "Tất cả các đáp án trên"
    },
    "answer": "b"
  },
  {
    "question": "Câu 39: Ứng dụng AI trong quản trị hệ thống CNTT mang lại lợi ích gì?",
    "options": {
      "a": "Tự động cảnh báo sự cố, Tự động nâng cấp phần mềm, Phân tích hiệu suất hệ thống, Dự báo lỗi phần cứng",
      "b": "Tự động cảnh báo sự cố, Phân tích hiệu suất hệ thống, Dự báo lỗi phần cứng"
    },
    "answer": "b"
  },
  {
    "question": "Câu 40: AI yếu (Weak AI) là gì?",
    "options": {
      "a": "AI có khả năng tư duy như con người, AI điều khiển robot, AI thực hiện một nhiệm vụ cụ thể, AI có thể tự học mọi thứ",
      "b": "AI thực hiện một nhiệm vụ cụ thể"
    },
    "answer": "b"
  },
  {
    "question": "Câu 41: AI có thể làm gì trong lĩnh vực tài chính?",
    "options": {
      "a": "Tư vấn đầu tư, Tất cả các ý trên, Phát hiện gian lận, Phân tích dữ liệu",
      "b": "Tất cả các ý trên"
    },
    "answer": "b"
  },
  {
    "question": "Câu 42: Lý do cần kiểm soát dữ liệu khi dùng Hotspot là gì?",
    "options": {
      "a": "Để cải thiện sóng Wi-Fi, Để tăng tuổi thọ pin, Để làm sạch bộ nhớ RAM",
      "b": "Để tránh vượt giới hạn dung lượng di động"
    },
    "answer": "b"
  },
  {
    "question": "Câu 43: Khi tắt máy tính bằng Windows, bước đầu tiên là gì?",
    "options": {
      "a": "Gập màn hình lại, Ngắt kết nối Internet, Nhấn giữ nút nguồn trong 5 giây",
      "b": "Chọn “Start” trên giao diện hệ điều hành"
    },
    "answer": "b"
  },
  {
    "question": "Câu 44: Một hành vi giúp đồng chí kiểm soát hình ảnh cá nhân trên mạng xã hội là:",
    "options": {
        "a": "Gửi bài đăng cho nhiều nhóm khác nhau",
        "b": "Kết bạn với tất cả những người gửi lời mời",
        "c": "Cài đặt quyền riêng tư phù hợp và kiểm soát bài đăng",
        "d": "Đăng tải nội dung công khai để tăng lượt tương tác"
    },
    "answer": "c"
  },
  {
    "question": "Câu 45: Hành động nào sau đây giúp kéo dài vòng đời của thiết bị điện tử?",
    "options": {
      "a": "Luôn bật thiết bị kể cả khi không dùng, Chạy ứng dụng nặng liên tục, Vứt bỏ thiết bị sau 1-2 năm sử dụng",
      "b": "Sửa chữa, nâng cấp và bán lại thiết bị thay vì vứt đi"
    },
    "answer": "b"
  },
  {
    "question": "Câu 46: Ứng dụng công nghệ số nào được sử dụng phổ biến trong ngành ngân hàng?",
    "options": {
      "a": "Blockchain",
      "b": "Chatbot tư vấn tài chính",
      "c": "Ngân hàng số",
      "d": "Trí tuệ nhân tạo"
    },
    "answer": ["a", "b", "c", "d"]
  },
  {
    "question": "Câu 47: Khi nào được mở khóa tài khoản định danh?",
    "options": {
      "a": "Cơ quan có thẩm quyền yêu cầu",
      "b": "Khi hết căn cứ khóa",
      "c": "Theo yêu cầu công dân"
    },
    "answer": ["a", "b"]
  },
  {
    "question": "Câu 48: Tài khoản định danh mức 2 dùng để làm gì?",
    "options": {
      "a": "Xác minh giao dịch",
      "b": "Tất cả phương án trên",
      "c": "Nộp thuế",
      "d": "Ký số"
    },
    "answer": "b"
  },
  {
    "question": "Câu 49: Lợi ích của việc dùng dịch vụ lưu trữ đám mây?",
    "options": {
      "a": "Truy cập mọi nơi",
      "b": "Tự động sao lưu dữ liệu",
      "c": "Dễ chia sẻ tài liệu",
      "d": "Tăng tốc độ internet"
    },
    "answer": ["a", "b", "c"]
  },
  {
    "question": "Câu 50: Người dùng có thể sử dụng mã QR để làm gì?",
    "options": {
      "a": "Truy cập nhanh website",
      "b": "Gửi bưu phẩm",
      "c": "Đăng nhập ứng dụng",
      "d": "Thanh toán hóa đơn"
    },
    "answer": ["a", "c", "d"]
  },
  {
    "question": "Câu 51: Nguyên tắc kích hoạt tài khoản định danh điện tử?",
    "options": {
      "a": "Kích hoạt tối đa 2 tài khoản",
      "b": "Kích hoạt tối đa 3 tài khoản",
      "c": "1 số điện thoại chỉ kích hoạt 1 tài khoản",
      "d": "1 số có thể kích hoạt nhiều tài khoản"
    },
    "answer": "c"
  },
  {
    "question": "Câu 52: Tại sao cần cập nhật phần mềm thường xuyên?",
    "options": {
      "a": "Cả A và B đúng",
      "b": "Khắc phục lỗi bảo mật",
      "c": "Bổ sung tính năng mới",
      "d": "Tăng tốc độ thiết bị"
    },
    "answer": "a"
  },
  {
    "question": "Câu 53: Tại sao không nên sử dụng Wi-Fi công cộng không bảo mật?",
    "options": {
      "a": "Tin tặc có thể chặn thông tin truyền",
      "b": "Dễ bị nghe lén dữ liệu",
      "c": "Không có mã hóa dữ liệu truyền",
      "d": "Dễ bị tấn công giả mạo (fake AP)"
    },
    "answer": ["a", "b", "c", "d"]
  },
  {
    "question": "Câu 54: Khi nghi ngờ bị lộ thông tin, bạn nên làm gì trước tiên?",
    "options": {
      "a": "Xóa tài khoản",
      "b": "Báo cáo quản trị viên",
      "c": "Thay đổi mật khẩu",
      "d": "Tắt thiết bị"
    },
    "answer": "c"
  },
  {
    "question": "Câu 55: Vai trò của AI trong việc phòng thủ phi truyền thống là gì?",
    "options": {
      "a": "Theo dõi dịch bệnh",
      "b": "Dự đoán thảm họa tự nhiên",
      "c": "Phân tích mối đe dọa sinh học",
      "d": "Phân tích thông tin chiến lược đa chiều"
    },
    "answer": ["a", "b", "c", "d"]
  },
  {
    "question": "Câu 56: AI giúp gì trong đào tạo cá nhân hóa?",
    "options": {
      "a": "Xây dựng lộ trình học riêng",
      "b": "Phân tích điểm mạnh/yếu",
      "c": "Tất cả đúng",
      "d": "Đề xuất nội dung phù hợp"
    },
    "answer": "c"
  },
  {
    "question": "Câu 57: Một trong những nguyên nhân phần mềm khiến mất kết nối mạng là gì?",
    "options": {
      "a": "RAM yếu",
      "b": "Loa bị hỏng",
      "c": "Phần mềm diệt virus hoặc tường lửa chặn mạng",
      "d": "Ổ cứng bị đầy"
    },
    "answer": "c"
  },
  {
    "question": "Câu 58: Vì sao thông tin cần có nguồn gốc và thẩm quyền rõ ràng?",
    "options": {
      "a": "Để rút ngắn nội dung",
      "b": "Để xác minh tính đáng tin cậy của tác giả hoặc tổ chức",
      "c": "Để dễ chia sẻ lên mạng xã hội",
      "d": "Để tránh bị đạo văn"
    },
    "answer": "b"
  },
  {
    "question": "Câu 59: Khai báo bảo hiểm xã hội trực tuyến giúp người dân và đơn vị thực hiện gì?",
    "options": {
      "a": "Tra cứu điểm thi",
      "b": "Đăng ký, khai báo, đóng BHXH, BHYT, BHTN",
      "c": "Mua bảo hiểm du lịch",
      "d": "Tìm việc làm trực tuyến"
    },
    "answer": "b"
  },
  {
    "question": "Câu 60: Chức năng Briefing doc trong NotebookLM có tác dụng gì?",
    "options": {
      "a": "Tạo bản tóm tắt nội dung cho cuộc họp/thuyết trình",
      "b": "Tạo file âm thanh từ bài viết",
      "c": "Phân tích biểu đồ dữ liệu tài chính",
      "d": "Dịch nội dung sang nhiều ngôn ngữ khác nhau"
    },
    "answer": "a"
  },
  {
    "question": "Câu 61: Mối nguy nào thường xảy ra trước mùa tuyển quân do các thế lực thù địch gây ra?",
    "options": {
      "a": "Phát động phong trào thanh niên",
      "b": "Tuyên truyền thông tin xấu độc làm giảm tinh thần nhập ngũ",
      "c": "Tổ chức các buổi tư vấn tuyển sinh quân sự",
      "d": "Quảng bá hình ảnh quân đội bằng chiến dịch cộng đồng"
    },
    "answer": "b"
  },
  {
    "question": "Câu 62: Trình quản lý mật khẩu có tác dụng gì?",
    "options": {
      "a": "Đặt mật khẩu giống nhau cho tất cả tài khoản",
      "b": "Tự động thay đổi mật khẩu mỗi tuần",
      "c": "Hiển thị mật khẩu dưới dạng công khai",
      "d": "Lưu trữ và tự động điền mật khẩu một cách an toàn"
    },
    "answer": "d"
  },
  {
    "question": "Câu 63: Khái niệm tài khoản định danh điện tử?",
    "options": {
      "a": "Tài khoản số để xác thực cá nhân",
      "b": "Tài khoản đăng nhập mạng xã hội",
      "c": "Ứng dụng lưu CCCD",
      "d": "Không phải là gì cả"
    },
    "answer": "a"
  },
  {
    "question": "Câu 64: Tài khoản định danh bị khóa khi nào?",
    "options": {
      "a": "Tòa án yêu cầu",
      "b": "Có yêu cầu từ cơ quan chức năng",
      "c": "Chủ thể chết hoặc thu hồi CCCD"
    },
    "answer": ["b","c"]
  },
  {
    "question": "Câu 65: Chuyển đổi số trong y tế mang lại lợi ích nào?",
    "options": {
      "a": "Quản lý hồ sơ sức khỏe điện tử",
      "b": "Tất cả các phương án trên",
      "c": "Khám bệnh từ xa",
      "d": "Giảm tải bệnh viện"
    },
    "answer": "b"
  },
  {
    "question": "Câu 66: Người dân có thể thực hiện dịch vụ công nào qua VNeID?",
    "options": {
      "a": "Đăng ký thẻ tín dụng",
      "b": "Cấp lại CCCD",
      "c": "Gửi hàng qua bưu điện",
      "d": "Mua SIM điện thoại"
    },
    "answer": "b"
  },
  {
    "question": "Câu 67: Khi sử dụng ứng dụng mobile banking, người dùng nên làm gì để tăng bảo mật?",
    "options": {
      "a": "Lưu thông tin đăng nhập trong tin nhắn",
      "b": "Cài đặt mã PIN mạnh",
      "c": "Thoát ứng dụng sau khi dùng",
      "d": "Không dùng Wi-Fi công cộng"
    },
    "answer": ["b", "c", "d"]
  },
  {
    "question": "Câu 68: Ứng dụng công nghệ trong du lịch giúp du khách làm gì?",
    "options": {
      "a": "Mua vé máy bay",
      "b": "Đặt phòng khách sạn",
      "c": "Lập kế hoạch chi tiêu ngân sách quốc gia",
      "d": "Tìm điểm du lịch"
    },
    "answer": ["a", "b", "d"]
  },
  {
    "question": "Câu 69: Mã độc tấn công có thể được cài vào thiết bị quân sự bằng cách nào?",
    "options": {
      "a": "Phần mềm giả mạo",
      "b": "USB nhiễm virus",
      "c": "Mạng Wi-Fi công cộng",
      "d": "Tất cả các phương án trên"
    },
    "answer": "d"
  },
  {
    "question": "Câu 70: AI hỗ trợ giám sát mạng trong an toàn thông tin chủ yếu bằng cách nào?",
    "options": {
      "a": "Tạo báo cáo thủ công về các sự cố bảo mật trong hệ thống mạng",
      "b": "Phát hiện và ngăn chặn các cuộc tấn công mạng như DDoS hoặc xâm nhập trái phép",
      "c": "Tự động cài đặt bản vá bảo mật trên hệ thống mạng",
      "d": "Dự đoán các sự cố phần cứng của thiết bị mạng"
    },
    "answer": "b"
  },
  {
    "question": "Câu 71: Ứng dụng AI nào trong giáo dục giúp cải thiện kỹ năng ngôn ngữ?",
    "options": {
      "a": "Duolingo",
      "b": "Grammarly",
      "c": "All of them",
      "d": "Google Translate"
    },
    "answer": "c"
  },
  {
    "question": "Câu 72: AI có thể được tích hợp trong thiết bị nào?",
    "options": {
      "a": "Tivi",
      "b": "Đồng hồ thông minh",
      "c": "Điện thoại",
      "d": "Tất cả đều đúng"
    },
    "answer": "d"
  },
  {
    "question": "Câu 73: CPU điều phối hoạt động của các bộ phận nào sau đây?",
    "options": {
      "a": "RAM, ổ cứng, GPU và các thiết bị ngoại vi",
      "b": "Chỉ mạng và âm thanh",
      "c": "Chỉ card đồ họa và camera",
      "d": "Chỉ phần mềm và cảm biến"
    },
    "answer": "a"
  },
  {
    "question": "Câu 74: Kỹ thuật nào giúp nâng cao hiệu quả tìm kiếm dữ liệu quân sự?",
    "options": {
      "a": "Dùng tài khoản công cộng truy cập nhanh",
      "b": "Sử dụng từ khóa chính xác và phân loại thông tin theo cấp độ bảo mật",
      "c": "Sao chép tất cả dữ liệu vào ổ cứng",
      "d": "Gửi dữ liệu qua email cá nhân"
    },
    "answer": "b"
  },
  {
    "question": "Câu 75: Một điểm yếu của phương pháp kiểm chứng truyền thống là gì?",
    "options": {
      "a": "Không có công cụ trích dẫn",
      "b": "Không sử dụng được trong nghiên cứu",
      "c": "Tốn nhiều thời gian và công sức khi dữ liệu quá lớn",
      "d": "Phải có kết nối Internet"
    },
    "answer": "c"
  },
  {
    "question": "Câu 76: Hành vi nào sau đây thuộc quy tắc lành mạnh trên mạng xã hội?",
    "options": {
      "a": "Chia sẻ nội dung kích động, phản cảm",
      "b": "Tạo tài khoản ẩn danh để tránh trách nhiệm pháp lý",
      "c": "Đăng tải tin giả để thu hút tương tác",
      "d": "Ứng xử văn minh, phù hợp giá trị đạo đức và truyền thống dân tộc"
    },
    "answer": "d"
  },
  {
    "question": "Câu 77: Khi nhận được phản hồi chưa đạt yêu cầu từ AI, ta nên làm gì?",
    "options": {
      "a": "Bỏ qua và bắt đầu lại hoàn toàn",
      "b": "Lặp lại yêu cầu giống hệt lần đầu",
      "c": "Phân tích kết quả và điều chỉnh yêu cầu",
      "d": "Chuyển sang công cụ khác"
    },
    "answer": "c"
  },
  {
    "question": "Câu 78: Để bắt đầu sử dụng NotebookLM, người dùng cần thao tác đầu tiên là gì?",
    "options": {
      "a": "Viết đoạn chat tương tác đầu tiên với hệ thống",
      "b": "Tải tài liệu lên",
      "c": "Truy cập trang Discover",
      "d": "Đăng nhập tài khoản Google và tạo notebook mới"
    },
    "answer": "d"
  },
  {
    "question": "Câu 79: Việc dùng thiết bị điện tử sai tư thế lâu dài có thể gây ảnh hưởng gì đến cơ thể?",
    "options": {
      "a": "Rối loạn cơ xương khớp như đau cổ, vai, gáy",
      "b": "Cải thiện tuần hoàn máu",
      "c": "Tăng trí nhớ",
      "d": "Làm chắc xương hơn"
    },
    "answer": "a"
  },
  {
    "question": "Câu 80: Công nghệ nào hỗ trợ giám sát, điều hành tài chính công hiệu quả?",
    "options": {
      "a": "Tự động hóa báo cáo ngân sách",
      "b": "Hệ thống Dashboard trực quan",
      "c": "Phân tích dữ liệu thời gian thực",
      "d": "Excel offline"
    },
    "answer": ["a", "b", "c"]
  },
  {
    "question": "Câu 81: Những công nghệ nào được xem là cốt lõi trong chuyển đổi số?",
    "options": {
      "a": "Big Data",
      "b": "AR/VR",
      "c": "5G",
      "d": "AI",
      "e": "RPA",
      "f": "IoT",
      "g": "Blockchain",
      "h": "Cloud"
    },
    "answer": ["a", "b", "c", "d", "e", "f", "g", "h"]
  },
  {
    "question": "Câu 82: Khi đăng ký tài khoản định danh điện tử, có cần số điện thoại chính chủ không?",
    "options": {
      "a": "Sử dụng một số điện bất kỳ dù không sử dụng, miễn có là được",
      "b": "Không bắt buộc sử dụng số điện thoại chính chủ, nhưng khuyến khích sử dụng vì vấn đề an toàn bảo mật",
      "c": "Sử dụng số điện thoại của những người thân trong gia đình là được",
      "d": "Bắt buộc phải có số điện thoại chính chủ"
    },
    "answer": "b"
  },
  {
    "question": "Câu 83: Đâu là nền tảng giao tiếp trực tuyến phổ biến hiện nay?",
    "options": {
      "a": "Microsoft Teams",
      "b": "Zoom",
      "c": "Google Meet",
      "d": "Zalo"
    },
    "answer": ["a", "b", "c", "d"]
  },
  {
    "question": "Câu 84: Thông tin đăng ký trên VNeID được bảo mật bằng?",
    "options": {
      "a": "Tự động lưu trữ đám mây",
      "b": "Email xác nhận",
      "c": "Mã OTP và mật khẩu",
      "d": "Mã QR công khai"
    },
    "answer": "c"
  },
  {
    "question": "Câu 85: Các hành động nào giúp bảo vệ mạng nội bộ cơ quan?",
    "options": {
      "a": "Cài phần mềm bảo mật đáng tin cậy",
      "b": "Cập nhật hệ thống thường xuyên",
      "c": "Giới hạn quyền truy cập",
      "d": "Cấu hình firewall mạnh"
    },
    "answer": ["a", "b", "c", "d"]
  },
  {
    "question": "Câu 86: Yếu tố nào quan trọng nhất trong đào tạo nhân lực an ninh mạng quân sự?",
    "options": {
      "a": "Kỹ năng phân tích mã độc",
      "b": "Tư duy phản biện",
      "c": "Tổng hợp cả kỹ thuật và kỷ luật quân sự",
      "d": "Kiến thức bảo mật"
    },
    "answer": "c"
  },
  {
    "question": "Câu 87: Trình tự giám sát an ninh mạng của lực lượng chuyên trách bảo vệ an ninh mạng?",
    "options": {
      "a": "Gửi thông báo bằng văn bản yêu cầu triển khai biện pháp giám sát an ninh mạng tới chủ quản hệ thống thông tin; trong văn bản nêu rõ lý do, thời gian, nội dung và phạm vi tiến hành giám sát an ninh mạng; Triển khai biện pháp giám sát an ninh mạng; Định kỳ thống kê, báo cáo kết quả giám sát",
      "b": "Triển khai biện pháp giám sát an ninh mạng; Định kỳ thống kê, báo cáo kết quả giám sát; Gửi thông báo bằng văn bản yêu cầu triển khai biện pháp giám sát an ninh mạng tới chủ quản hệ thống thông tin; trong văn bản nêu rõ lý do, thời gian, nội dung và phạm vi tiến hành giám sát an ninh mạng",
      "c": "Định kỳ thống kê, báo cáo kết quả giám sát; Gửi thông báo bằng văn bản yêu cầu triển khai biện pháp giám sát an ninh mạng tới chủ quản hệ thống thông tin; trong văn bản nêu rõ lý do, thời gian, nội dung và phạm vi tiến hành giám sát an ninh mạng; Triển khai biện pháp giám sát an ninh mạng"
    },
    "answer": "a"
  },
  {
    "question": "Câu 88: AI có vai trò gì trong kiểm tra đầu vào sinh viên?",
    "options": {
      "a": "Dự đoán khả năng thành công",
      "b": "Phân tích bài kiểm tra",
      "c": "Tất cả đúng",
      "d": "Tự động xếp lớp"
    },
    "answer": "c"
  },
  {
    "question": "Câu 89: AI có thể giúp gì trong ngành y tế?",
    "options": {
      "a": "Chẩn đoán bệnh",
      "b": "Đo huyết áp bằng tay",
      "c": "Pha chế thuốc",
      "d": "Khám bệnh trực tiếp"
    },
    "answer": "a"
  },
  {
    "question": "Câu 90: Quy trình nào giúp tăng hiệu quả làm việc nhóm trên môi trường số?",
    "options": {
      "a": "Chia sẻ lịch làm việc",
      "b": "Giao nhiệm vụ rõ ràng",
      "c": "Trao đổi kết quả qua email",
      "d": "Sử dụng phần mềm quản lý dự án"
    },
    "answer": "d"
  },
  {
    "question": "Câu 91: Tác dụng của xác thực hai lớp là gì?",
    "options": {
      "a": "Tăng tính bảo mật cho tài khoản",
      "b": "Đăng nhập tự động",
      "c": "Dễ ghi nhớ mật khẩu",
      "d": "Tăng tốc truy cập"
    },
    "answer": "a"
  },
  {
    "question": "Câu 92: Theo quy định về an toàn thông tin mạng, hành vi nào sau đây là vi phạm?",
    "options": {
      "a": "Không đổi mật khẩu mặc định thiết bị truy cập",
      "b": "Cài phần mềm không rõ nguồn gốc",
      "c": "Dùng chung tài khoản nhiều người",
      "d": "Tất cả các đáp án trên"
    },
    "answer": "d"
  },
  {
    "question": "Câu 93: Tại sao nên thường xuyên cập nhật phần mềm?",
    "options": {
      "a": "Khắc phục lỗi bảo mật",
      "b": "Bổ sung tính năng mới",
      "c": "Cả A và B đúng",
      "d": "Làm đẹp giao diện"
    },
    "answer": "c"
  },
  {
    "question": "Câu 94: Điểm khác biệt giữa tài khoản định danh điện tử với tài khoản mạng xã hội là:",
    "options": {
      "a": "Có giá trị pháp lý và được luật pháp bảo vệ",
      "b": "Dùng để giao lưu kết bạn",
      "c": "Chủ yếu đăng ảnh, cập nhật trạng thái hàng ngày",
      "d": "Tự do lựa chọn thông tin đăng ký"
    },
    "answer": "a"
  },
  {
    "question": "Câu 95: Khi nhận được thông báo có phần mềm độc hại từ trình duyệt, bạn nên:",
    "options": {
      "a": "Bỏ qua thông báo và tiếp tục",
      "b": "Tắt máy tính ngay",
      "c": "Không tải/tắt trang có cảnh báo và quét lại phần mềm bảo mật trên thiết bị",
      "d": "Gửi cảnh báo cho bạn bè"
    },
    "answer": "c"
  },
  {
    "question": "Câu 96: Để bảo đảm an ninh mạng khi làm việc từ xa, việc nào sau đây cần thực hiện?",
    "options": {
      "a": "Không sử dụng thiết bị cá nhân để truy cập dữ liệu nội bộ",
      "b": "Sử dụng VPN",
      "c": "Sử dụng thiết bị đã được cấu hình an toàn",
      "d": "Tất cả các đáp án trên"
    },
    "answer": "d"
  },
  {
    "question": "Câu 97: Một giải pháp phổ biến để bảo vệ tài khoản cá nhân là gì?",
    "options": {
      "a": "Đặt mật khẩu mạnh và khác nhau cho các tài khoản",
      "b": "Chia sẻ tài khoản cho bạn bè, gia đình",
      "c": "Lưu mật khẩu trên giấy note để tiện tra cứu",
      "d": "Tắt xác thực hai lớp vì phức tạp"
    },
    "answer": "a"
  },
  {
    "question": "Câu 98: Sau khi triển khai giải pháp xử lý sự cố, việc kiểm tra lại hệ thống có mục đích gì?",
    "options": {
      "a": "Để viết báo cáo sự cố",
      "b": "Đảm bảo sự cố đã được xử lý triệt để và hệ thống hoạt động bình thường",
      "c": "Để chuẩn bị đưa vào bảo trì định kỳ",
      "d": "Để đảm bảo hoàn thành quy trình giấy tờ"
    },
    "answer": "b"
  },
  {
    "question": "Câu 99: Theo Quyết định số 749/QĐ-TTg ngày 03/6/2020 của Thủ tướng Chính phủ, đến năm 2030, trong Chương trình chuyển đổi số Quốc gia đến năm 2025, định hướng đến năm 2030, đặt ra mục tiêu tỷ lệ dân số có tài khoản thanh toán điện tử là bao nhiêu?",
    "options": {
      "a": "Trên 60%",
      "b": "Trên 70%",
      "c": "Trên 80%",
      "d": "Trên 90%"
    },
    "answer": "c"
  },
  {
    "question": "Câu 100: VNeID giúp người dân kiểm tra được gì?",
    "options": {
      "a": "Lịch sử tiêm chủng",
      "b": "Hóa đơn điện nước",
      "c": "Mức lương trung bình",
      "d": "Thành tích học tập"
    },
    "answer": "a"
  },
  {
    "question": "Câu 101: Khi truy cập internet công cộng cần lưu ý điều gì?",
    "options": {
      "a": "Không nhập mật khẩu cá nhân",
      "b": "Không đăng nhập tài khoản ngân hàng",
      "c": "Không cập nhật phần mềm từ mạng công cộng",
      "d": "Không tải file lạ"
    },
    "answer": ["a", "b", "c", "d"]
  },
  {
    "question": "Câu 102: Lực lượng nào chịu trách nhiệm chính về bảo vệ an ninh mạng trong Quân đội nhân dân Việt Nam?",
    "options": {
      "a": "Bộ Tổng Tham mưu",
      "b": "Tổng cục 2",
      "c": "Tổng cục Kỹ thuật",
      "d": "Bộ Tư lệnh 86"
    },
    "answer": "d"
  },
  {
    "question": "Câu 103: Đâu là hình thức tấn công mạng phổ biến trong quốc phòng?",
    "options": {
      "a": "Tất cả đều đúng",
      "b": "Đánh lừa qua mạng xã hội",
      "c": "Phishing email",
      "d": "Cài mã độc từ USB"
    },
    "answer": "a"
  },
  {
    "question": "Câu 104: AI giúp ích gì trong quản lý lớp học thông minh?",
    "options": {
      "a": "Tự động điểm danh",
      "b": "Tất cả các phương án trên",
      "c": "Gợi ý phương pháp giảng dạy phù hợp",
      "d": "Theo dõi hành vi học sinh"
    },
    "answer": "b"
  },
  {
    "question": "Câu 105: AI có giúp ích gì trong học tập?",
    "options": {
      "a": "Cả 3 đáp án",
      "b": "Chấm điểm tự động",
      "c": "Phân tích hành vi học",
      "d": "Tạo đề thi"
    },
    "answer": "a"
  },
  {
    "question": "Câu 106: Trên Android, thao tác tắt máy đúng là như thế nào?",
    "options": {
      "a": "Nhấn giữ nút nguồn, chọn 'Power off', rồi xác nhận",
      "b": "Nhấn nút giảm âm lượng và camera",
      "c": "Mở cài đặt và chọn “Tắt nguồn”",
      "d": "Gỡ pin ra khỏi máy"
    },
    "answer": "a"
  },
  {
    "question": "Câu 107: Thao tác nào thường dùng để mở ứng dụng hoặc chọn mục trên thiết bị cảm ứng?",
    "options": {
      "a": "Giữ nút nguồn trong vài giây",
      "b": "Kéo ngón tay theo chiều ngang",
      "c": "Nhấn đôi vào biểu tượng",
      "d": "Chạm nhẹ vào màn hình"
    },
    "answer": "d"
  },
  {
    "question": "Câu 108: Một trong những tác động tiêu cực của khoảng cách năng lực số là gì?",
    "options": {
      "a": "Tăng năng lực cạnh tranh của doanh nghiệp nội địa",
      "b": "Làm giảm nhu cầu sử dụng mạng xã hội",
      "c": "Hạn chế cơ hội tiếp cận thông tin và việc làm",
      "d": "Tạo điều kiện phát triển vùng sâu vùng xa"
    },
    "answer": "c"
  },
  {
    "question": "Câu 109: Nhóm tiện ích nào không thuộc Đề án 06?",
    "options": {
      "a": "Phục vụ TTHC và dịch vụ công trực tuyến",
      "b": "Phục vụ công dân số",
      "c": "Phục vụ kinh doanh, giải trí",
      "d": "Phục vụ phát triển KT-XH"
    },
    "answer": "c"
  },
  {
    "question": "Câu 110: Yếu tố nào là then chốt để chuyển đổi số thành công?",
    "options": {
      "a": "Thay đổi tư duy, văn hóa tổ chức",
      "b": "Ý chí chính trị",
      "c": "Nguồn lực tài chính",
      "d": "Hạ tầng công nghệ"
    },
    "answer": "a"
  },
  {
    "question": "Câu 111: Theo Nghị định 42, đơn vị nào giữ vai trò điều phối chuyển đổi số quốc gia?",
    "options": {
      "a": "Bộ Quốc phòng",
      "b": "Bộ Công an",
      "c": "Bộ Giao thông Vận tải",
      "d": "Bộ Thông tin và Truyền thông"
    },
    "answer": "d"
  },
  {
    "question": "Câu 112: Ứng dụng ngân hàng số giúp người dùng thực hiện giao dịch nào sau đây?",
    "options": {
      "a": "Gửi tiết kiệm online",
      "b": "Rút tiền tại ATM bằng QR code",
      "c": "Chuyển tiền",
      "d": "Thanh toán hóa đơn"
    },
    "answer": ["a", "b", "c", "d"]
  },
  {
    "question": "Câu 113: Yếu tố nào thúc đẩy chuyển đổi số trong kinh tế?",
    "options": {
      "a": "Giá thành thiết bị tăng",
      "b": "Chính sách hỗ trợ",
      "c": "Hạ tầng số",
      "d": "Ý thức doanh nghiệp"
    },
    "answer": ["b", "c", "d"]
  },
  {
    "question": "Câu 114: Mục tiêu của chuyển đổi số trong doanh nghiệp là gì?",
    "options": {
      "a": "Tăng hiệu quả vận hành",
      "b": "Tất cả các phương án trên",
      "c": "Tối ưu chi phí",
      "d": "Cải thiện trải nghiệm khách hàng"
    },
    "answer": "b"
  },
  {
    "question": "Câu 115: Tài chính thông minh (Smart Finance) sử dụng công nghệ nào?",
    "options": {
      "a": "Cloud",
      "b": "Thẻ từ truyền thống",
      "c": "AI",
      "d": "Big Data"
    },
    "answer": ["a", "c", "d"]
  },
  {
    "question": "Câu 116: Mô hình lớp học đảo ngược (Flipped Classroom) sử dụng công nghệ như thế nào?",
    "options": {
      "a": "Lớp học online 100%",
      "b": "Chỉ dùng trong đại học",
      "c": "Giáo viên dạy học sinh qua mạng",
      "d": "Học sinh học trước ở nhà qua video"
    },
    "answer": "d"
  },
  {
    "question": "Câu 117: Tại sao không nên cài ứng dụng không rõ nguồn gốc?",
    "options": {
      "a": "Gây hao pin thiết bị",
      "b": "Có thể chiếm quyền điều khiển thiết bị",
      "c": "Có thể chứa mã độc",
      "d": "Có thể đánh cắp thông tin"
    },
    "answer": ["b", "c", "d"]
  },
  {
    "question": "Câu 118: AI có thể giúp quản lý hồ sơ bệnh án như thế nào?",
    "options": {
      "a": "Tìm kiếm nhanh",
      "b": "Tất cả đúng",
      "c": "Gợi ý dữ liệu liên quan",
      "d": "Tự động lưu trữ"
    },
    "answer": "b"
  },
  {
    "question": "Câu 119: Mục tiêu chính của AI là gì?",
    "options": {
      "a": "Tự động hóa công việc",
      "b": "Điều khiển máy móc",
      "c": "Mô phỏng trí tuệ con người",
      "d": "Tạo ra phần mềm"
    },
    "answer": "c"
  },
  {
    "question": "Câu 120: AI hỗ trợ đánh giá năng lực học sinh bằng cách nào?",
    "options": {
      "a": "So sánh dữ liệu nhóm",
      "b": "Tất cả đều đúng",
      "c": "Phân tích hành vi học tập",
      "d": "Phân tích kết quả học tập"
    },
    "answer": "b"
  },
  {
    "question": "Câu 121: Một trong những thủ đoạn lừa đảo phổ biến là gì?",
    "options": {
      "a": "Cấp giấy chứng nhận không giá trị",
      "b": "Tổ chức hội thảo công khai",
      "c": "Gửi thư mời từ các cơ quan nhà nước",
      "d": "Giả danh sĩ quan quân đội để đặt hàng số lượng lớn"
    },
    "answer": "d"
  },
  {
    "question": "Câu 122: Khai báo bảo hiểm xã hội trực tuyến giúp người dân và đơn vị thực hiện gì?",
    "options": {
      "a": "Tra cứu điểm thi",
      "b": "Tìm việc làm trực tuyến",
      "c": "Mua bảo hiểm du lịch",
      "d": "Đăng ký, khai báo, đóng BHXH, BHYT, BHTN"
    },
    "answer": "d"
  },
  {
    "question": "Câu 123: Một trong các hậu quả pháp lý của hành vi vi phạm bản quyền là gì?",
    "options": {
      "a": "Phải xin lỗi công khai trên mạng xã hội",
      "b": "Bị chặn đăng bình luận",
      "c": "Bị kiện bởi chủ sở hữu bản quyền",
      "d": "Được yêu cầu tạo tác phẩm thay thế"
    },
    "answer": "c"
  },
  {
    "question": "Câu 124: Hành động nào sau đây giúp kéo dài vòng đời của thiết bị điện tử?",
    "options": {
      "a": "Vứt bỏ thiết bị sau 1-2 năm sử dụng",
      "b": "Chạy ứng dụng nặng liên tục",
      "c": "Sửa chữa, nâng cấp và bán lại thiết bị thay vì vứt đi",
      "d": "Luôn bật thiết bị kể cả khi không dùng"
    },
    "answer": "c"
  },
  {
    "question": "Câu 125: Phương pháp “5 Tại sao” (5 Why) dùng để làm gì trong xử lý sự cố?",
    "options": {
      "a": "Tìm nguyên nhân gốc rễ của sự cố",
      "b": "Đưa ra mô hình bảo trì mới",
      "c": "Đánh giá hiệu suất của thiết bị",
      "d": "Gợi ý cách sửa chữa tức thời"
    },
    "answer": "a"
  },
  {
    "question": "Câu 126: Mã QR trên thẻ CCCD gắn chip có thể chứa thông tin gì?",
    "options": {
      "a": "Không chứa gì.",
      "b": "Chỉ chứa tên người.",
      "c": "Số CMND, họ tên, ngày sinh, giới tính, nơi thường trú, ngày cấp thẻ CCCD.",
      "d": "Chỉ chứa mã định danh cá nhân."
    },
    "answer": "c"
  },
  {
    "question": "Câu 127: Theo Quyết định số 749/QĐ-TTg ngày 03/6/2020 của Thủ tướng Chính phủ, mục tiêu cơ bản đến năm 2025 trong Chương trình chuyển đổi số Quốc gia đến năm 2025, định hướng đến năm 2030 đặt ra mục tiêu Việt Nam thuộc nhóm bao nhiêu nước dẫn đầu về chỉ số cạnh tranh (GCI)?",
    "options": {
      "a": "60",
      "b": "40",
      "c": "30",
      "d": "50"
    },
    "answer": "d"
  },
  {
    "question": "Câu 128: Đối tượng được cấp thẻ CCCD theo quy định tại Luật CCCD năm 2014 gồm?",
    "options": {
      "a": "Từ đủ 14 tuổi, đủ 25 tuổi, đủ 40 tuổi.",
      "b": "Từ đủ 14 tuổi, đủ 25 tuổi, đủ 40 tuổi, đủ 60 tuổi.",
      "c": "Từ đủ 14 tuổi.",
      "d": "Từ đủ 25 tuổi, đủ 45 tuổi và đủ 60 tuổi."
    },
    "answer": "c"
  },
  {
    "question": "Câu 129: VNeID giúp người dân khai báo gì online?",
    "options": {
      "a": "Mở công ty",
      "b": "Đăng ký xe máy",
      "c": "Mua bán nhà",
      "d": "Lưu trú"
    },
    "answer": "d"
  },
  {
    "question": "Câu 130: Tài khoản định danh điện tử mức 1, mức 2 có giá trị thế nào?",
    "options": {
      "a": "Tài khoản định danh điện tử mức độ 1 có giá trị chứng minh thông tin trong các hoạt động, giao dịch có yêu cầu cung cấp thông tin cá nhân. Tài khoản định danh điện tử mức độ 2 có giá trị tương đương với sử dụng căn cước công dân trong các giao dịch có yêu cầu xuất trình căn cước công dân; ngoài ra, tài khoản định danh điện tử mức độ 2 còn cung cấp thông tin có trong các loại giấy tờ đã được đồng bộ vào tài khoản định danh điện tử như giấy phép lái xe, thẻ bảo hiểm y tế... để đối chiếu khi phải xuất trình giấy tờ đó",
      "b": "Tài khoản định danh điện tử mức độ 1 và 2 có giá trị tương đương với sử dụng căn cước công dân trong các giao dịch có yêu cầu xuất trình căn cước công dân; ngoài ra, tài khoản định danh điện tử mức độ 2 còn cung cấp thông tin có trong các loại giấy tờ đã được đồng bộ vào tài khoản định danh điện tử như giấy phép lái xe, thẻ bảo hiểm y tế... để đối chiếu khi phải xuất trình giấy tờ đó",
      "c": "Tài khoản định danh điện tử mức độ 1 và 2 có giá trị tương đương với sử dụng căn cước công dân trong các giao dịch có yêu cầu xuất trình căn cước công dân."
    },
    "answer": "a"
  },
  {
    "question": "Câu 131: Khi mua sắm online, người dùng nên lưu ý điều gì để đảm bảo an toàn?",
    "options": {
      "a": "Chỉ dùng Wi-Fi công cộng khi thanh toán",
      "b": "Sử dụng các sàn thương mại điện tử uy tín",
      "c": "Không chia sẻ OTP cho người khác",
      "d": "Kiểm tra đánh giá người bán"
    },
    "answer": ["b", "c", "d"]
  },
  {
    "question": "Câu 132: Dấu hiệu nhận biết email lừa đảo là gì?",
    "options": {
      "a": "Nội dung cấp bách, khẩn cấp",
      "b": "Có file đính kèm lạ",
      "c": "Người gửi không rõ ràng",
      "d": "Đường link lạ đính kèm"
    },
    "answer": ["a", "b", "c", "d"]
  },
  {
    "question": "Câu 133: Thiết bị lưu trữ ngoài (USB, ổ cứng) có thể gây mất ATTT nếu?",
    "options": {
      "a": "Không được quét virus",
      "b": "Mang ra ngoài đơn vị mà không xin phép",
      "c": "Cắm vào máy lạ",
      "d": "Tất cả đều đúng"
    },
    "answer": "d"
  },
  {
    "question": "Câu 134: Khi nhận được email có đường link lạ, cần phải?",
    "options": {
      "a": "Thực hiện xóa ngay email",
      "b": "Không click vào đường link và thông báo cho bộ phận ATTT đơn vị",
      "c": "Forward email cho những người khác",
      "d": "Truy cập đường link để nắm nội dung và thông báo cho bộ phận ATTT đơn vị"
    },
    "answer": "b"
  },
  {
    "question": "Câu 135: Các nền tảng học tập sử dụng AI thường có tính năng nào?",
    "options": {
      "a": "Phân tích kết quả học tập",
      "b": "Tất cả đúng",
      "c": "Cá nhân hóa bài học",
      "d": "Gợi ý nội dung theo tiến độ"
    },
    "answer": "b"
  },
  {
    "question": "Câu 136: AI giúp ích gì trong quản lý lớp học thông minh?",
    "options": {
      "a": "Theo dõi hành vi học sinh",
      "b": "Tự động điểm danh",
      "c": "Tất cả các phương án trên",
      "d": "Gợi ý phương pháp giảng dạy phù hợp"
    },
    "answer": "c"
  },
  {
    "question": "Câu 137: AI giúp gì trong kiểm soát truy cập hệ thống?",
    "options": {
      "a": "Xác thực sinh trắc học",
      "b": "Phát hiện đăng nhập lạ",
      "c": "Theo dõi hành vi người dùng",
      "d": "Giới hạn truy cập theo hành vi"
    },
    "answer": ["a", "b", "c", "d"]
  },
  {
    "question": "Câu 138: Đâu không phải là quy tắc ứng xử của cơ quan nhà nước trên mạng xã hội?",
    "options": {
        "a": "Không tham gia ý kiến bình luận, phản hồi thông tin trên mạng xã hội",
        "b": "Cung cấp thông tin trên mạng xã hội đồng bộ, thống nhất với thông tin đã được cung cấp trên phương tiện truyền thông chính thống khác",
        "c": "Có trách nhiệm quản lý, bảo mật tài khoản mạng xã hội và nhanh chóng thông báo nhà cung cấp dịch vụ khi tài khoản của cơ quan nhà nước, tổ chức bị mất quyền kiểm soát hoặc giả mạo",
        "d": "Thực hiện nội dung quy định cho cơ quan, tổ chức nêu tại Điều 4 Quyết định 874/QĐ-BTTTT"
    },
    "answer": "a"
  },
  {
    "question": "Câu 139: Chuyển đổi số là gì?",
    "options": {
        "a": "Chuyển đổi số là khai thác các dữ liệu có được từ quá trình số hoá, rồi áp dụng các công nghệ để phân tích, biến đổi các dữ liệu đó và tạo ra các giá trị mới hơn",
        "b": "Chuyển đổi số là bước phát triển tiếp theo của tin học hóa (ứng dụng công nghệ thông tin, số hóa quy trình nghiệp vụ đã có ở mức cao), có được nhờ sự tiến bộ vượt bậc của những công nghệ mới mang tính đột phá, nhất là công nghệ số",
        "c": "Chuyển đổi số là quá trình thay đổi tổng thể và toàn diện của cá nhân, tổ chức về cách sống, cách làm việc và phương thức sản xuất dựa trên các công nghệ số",
        "d": "Tất cả các đáp án"
    },
    "answer": "d"
  },
  {
    "question": "Câu 140: Kỹ năng quan trọng nhất cho cán bộ trong chuyển đổi số là gì?",
    "options": {
        "a": "Lái xe",
        "b": "Vận hành máy tính cơ bản",
        "c": "Ngoại ngữ",
        "d": "Kỹ năng số"
    },
    "answer": "d"
  },
  {
    "question": "Câu 141: Hệ thống thông tin liên lạc hiện đại của quân đội sử dụng công nghệ nào?",
    "options": {
        "a": "5G",
        "b": "Mạng radio mật mã",
        "c": "Vệ tinh quân sự",
        "d": "Tất cả các đáp án trên"
    },
    "answer": "d"
  },
  {
    "question": "Câu 142: Người dùng có thể dùng camera thông minh để làm gì?",
    "options": {
        "a": "Gửi dữ liệu livestream",
        "b": "Nhận diện khuôn mặt",
        "c": "Giám sát nhà cửa",
        "d": "Chơi trò chơi thực tế ảo"
    },
    "answer": ["a", "b", "c"]
  },
  {
    "question": "Câu 143: Phát biểu nào sau đây đúng về phòng chống tấn công mạng trong quân đội?",
    "options": {
        "a": "Chỉ cần khi có chiến tranh mới cần phòng chống",
        "b": "Chỉ liên quan đến đơn vị thông tin",
        "c": "Chỉ lực lượng kỹ thuật mới chịu trách nhiệm",
        "d": "Phòng chống là nhiệm vụ thường xuyên"
    },
    "answer": "d"
  },
  {
    "question": "Câu 144: Các hành vi nào sau đây là vi phạm an toàn thông tin cá nhân?",
    "options": {
        "a": "Tự ý thu thập dữ liệu cá nhân",
        "b": "Tự động gửi OTP khi chưa xin phép",
        "c": "Tấn công lừa đảo qua email",
        "d": "Bán thông tin cho bên thứ ba"
    },
    "answer": ["a", "c", "d"]
  },
  {
    "question": "Câu 145: Khi nhận được cuộc gọi lạ, xưng là cán bộ Công an yêu cầu cung cấp các thông tin cá nhân, tài khoản ngân hàng,... để cấp tài khoản định danh điện tử. Có nên thực hiện không?",
    "options": {
        "a": "Không. Vì người dân có thể đăng ký cấp tài khoản định danh điện tử qua ứng dụng VNeID hoặc ra trực tiếp cơ quan Công an để thực hiện. Cán bộ Công an sẽ không gọi điện yêu cầu công dân cung cấp thêm thông tin cá nhân hay bất kỳ loại giấy tờ nào khác.",
        "b": "Tùy vào nội dung cơ quan công an yêu cầu mà cân nhắc thực hiện theo hay không",
        "c": "Chỉ cung cấp thông tin về bảo hiểm y tế, giấy phép lái xe, đăng ký xe cho người gọi điện; không cung cấp thông tin tài khoản ngân hàng",
        "d": "Có. Vì cơ quan công an có thể cần bổ sung thêm giấy tờ tích hợp vào tài khoản định danh điện tử và liên hệ vì đã có số điện thoại lưu trong hệ thống"
    },
    "answer": "a"
  },
  {
    "question": "Câu 146: AI có thể tăng cường hiệu quả công tác chính trị như thế nào?",
    "options": {
        "a": "Phân tích phản hồi cán bộ",
        "b": "Dự báo xu hướng tư tưởng",
        "c": "Tự động hóa khảo sát",
        "d": "Tổng hợp báo cáo nhanh"
    },
    "answer": ["a", "b", "c", "d"]
  },
  {
    "question": "Câu 147: AI được ứng dụng trong giáo dục để làm gì?",
    "options": {
        "a": "Phát wifi",
        "b": "Dạy thay giáo viên",
        "c": "Mở cửa lớp học",
        "d": "Chấm điểm tự động"
    },
    "answer": "d"
  },
  {
    "question": "Câu 148: Ethernet là gì?",
    "options": {
        "a": "Bộ chuyển đổi tín hiệu Bluetooth",
        "b": "Phương thức kết nối mạng có dây dùng cáp RJ45",
        "c": "Ứng dụng giúp tăng sóng mạng",
        "d": "Một dạng Wi-Fi công suất cao"
    },
    "answer": "b"
  },
  {
    "question": "Câu 149: Ưu điểm nổi bật của mạng 5G so với 4G là gì?",
    "options": {
        "a": "Dễ triển khai hơn",
        "b": "Tốc độ cao, độ trễ thấp, hỗ trợ nhiều thiết bị",
        "c": "Giá thành rẻ hơn",
        "d": "Phù hợp với thiết bị cũ"
    },
    "answer": "b"
  },
  {
    "question": "Câu 150: Một hành vi giúp đồng chí kiểm soát hình ảnh cá nhân trên mạng xã hội là:",
    "options": {
        "a": "Đăng tải nội dung công khai để tăng lượt tương tác",
        "b": "Gửi bài đăng cho nhiều nhóm khác nhau",
        "c": "Kết bạn với tất cả những người gửi lời mời",
        "d": "Cài đặt quyền riêng tư phù hợp và kiểm soát bài đăng"
    },
    "answer": "d"
  },
  {
    "question": "Câu 151: Vì sao cần thực hiện quy trình lặp khi làm việc với AI?",
    "options": {
        "a": "Vì AI không thể luôn hiểu đúng ý ngay từ lần đầu",
        "b": "Để AI hiểu người dùng ngay từ đầu",
        "c": "Để tiết kiệm thời gian không cần kiểm tra lại",
        "d": "Vì AI có thể đoán chính xác mọi yêu cầu"
    },
    "answer": "a"
  },
  {
    "question": "Câu 152: Vì sao nên tinh chỉnh lại slide sau khi Gamma thiết kế tự động?",
    "options": {
        "a": "Để phù hợp với văn hóa tổ chức và nhận diện thương hiệu",
        "b": "Để thay đổi chủ đề của bài thuyết trình",
        "c": "Để thêm nội dung mới",
        "d": "Để xóa phần tóm tắt của Gamma"
    },
    "answer": "a"
  },
  {
    "question": "Câu 153: Việc dùng thiết bị điện tử sai tư thế lâu dài có thể gây ảnh hưởng gì đến cơ thể?",
    "options": {
        "a": "Tăng trí nhớ",
        "b": "Làm chắc xương hơn",
        "c": "Rối loạn cơ xương khớp như đau cổ, vai, gáy",
        "d": "Cải thiện tuần hoàn máu"
    },
    "answer": "c"
  },
  {
    "question": "Câu 154: Yếu tố nào thúc đẩy chuyển đổi số trong kinh tế?",
    "options": {
        "a": "Giá thành thiết bị tăng",
        "b": "Chính sách hỗ trợ",
        "c": "Hạ tầng số",
        "d": "Ý thức doanh nghiệp"
    },
    "answer": ["b", "c", "d"]
  },
  {
    "question": "Câu 155: Mục tiêu của chuyển đổi số trong doanh nghiệp là gì?",
    "options": {
        "a": "Tăng hiệu quả vận hành",
        "b": "Tất cả các phương án trên",
        "c": "Tối ưu chi phí",
        "d": "Cải thiện trải nghiệm khách hàng"
    },
    "answer": "b"
  },
  {
    "question": "Câu 156: Tài chính thông minh (Smart Finance) sử dụng công nghệ nào?",
    "options": {
        "a": "Cloud",
        "b": "Thẻ từ truyền thống",
        "c": "AI",
        "d": "Big Data"
    },
    "answer": ["a", "c", "d"]
  },
  {
    "question": "Câu 157: Mô hình lớp học đảo ngược (Flipped Classroom) sử dụng công nghệ như thế nào?",
    "options": {
        "a": "Lớp học online 100%",
        "b": "Chỉ dùng trong đại học",
        "c": "Giáo viên dạy học sinh qua mạng",
        "d": "Học sinh học trước ở nhà qua video"
    },
    "answer": "d"
  },
  {
    "question": "Câu 158: Tại sao không nên cài ứng dụng không rõ nguồn gốc?",
    "options": {
        "a": "Gây hao pin thiết bị",
        "b": "Có thể chiếm quyền điều khiển thiết bị",
        "c": "Có thể chứa mã độc",
        "d": "Có thể đánh cắp thông tin"
    },
    "answer": ["b", "c", "d"]
  },
  {
    "question": "Câu 159: AI có thể giúp quản lý hồ sơ bệnh án như thế nào?",
    "options": {
        "a": "Tìm kiếm nhanh",
        "b": "Tất cả đúng",
        "c": "Gợi ý dữ liệu liên quan",
        "d": "Tự động lưu trữ"
    },
    "answer": "b"
  },
  {
    "question": "Câu 160: Mục tiêu chính của AI là gì?",
    "options": {
        "a": "Tự động hóa công việc",
        "b": "Điều khiển máy móc",
        "c": "Mô phỏng trí tuệ con người",
        "d": "Tạo ra phần mềm"
    },
    "answer": "c"
  },
  {
    "question": "Câu 161: AI hỗ trợ đánh giá năng lực học sinh bằng cách nào?",
    "options": {
        "a": "So sánh dữ liệu nhóm",
        "b": "Tất cả đều đúng",
        "c": "Phân tích hành vi học tập",
        "d": "Phân tích kết quả học tập"
    },
    "answer": "b"
  },
  {
    "question": "Câu 162: Trên iPhone, để chia sẻ Internet qua Bluetooth, người dùng cần thao tác gì?",
    "options": {
        "a": "Vào Safari và nhập “Hotspot”",
        "b": "Kết nối qua AirDrop trước",
        "c": "Tắt Wi-Fi và bật Dữ liệu di động",
        "d": "Bật Điểm truy cập cá nhân và kết nối với laptop qua Bluetooth"
    },
    "answer": "d"
  },
  {
    "question": "Câu 163: Một trong những thủ đoạn lừa đảo phổ biến là gì?",
    "options": {
        "a": "Cấp giấy chứng nhận không giá trị",
        "b": "Tổ chức hội thảo công khai",
        "c": "Gửi thư mời từ các cơ quan nhà nước",
        "d": "Giả danh sĩ quan quân đội để đặt hàng số lượng lớn"
    },
    "answer": "d"
  },
  {
    "question": "Câu 164: Các công nghệ thúc đẩy chuyển đổi số trong lĩnh vực y tế là gì?",
    "options": {
        "a": "Khám chữa bệnh từ xa (Telemedicine)",
        "b": "Theo dõi từ xa (Remote Patient Monitoring - RPM)",
        "c": "Công nghệ thực tế ảo tăng cường (VR & AR)",
        "d": "Tất cả các đáp án"
    },
    "answer": "d"
  },
  {
    "question": "Câu 165: Những thách thức khi triển khai chuyển đổi số trong ngành giáo dục và đào tạo?",
    "options": {
        "a": "Thói quen giảng dạy và học tập truyền thống",
        "b": "Thách thức về phát triển hạ tầng số ở vùng khó khăn, vùng sâu, vùng xa, biên giới, hải đảo",
        "c": "Đòi hỏi thay đổi tư duy và năng lực quản lý, làm chủ công nghệ",
        "d": "Tất cả các đáp án"
    },
    "answer": "d"
  },
  {
    "question": "Câu 166: Ứng dụng trí tuệ nhân tạo (AI) trong y tế giúp thực hiện chức năng gì?",
    "options": {
        "a": "Phẫu thuật robot",
        "b": "Chẩn đoán hình ảnh",
        "c": "Dự đoán bệnh",
        "d": "Tất cả các đáp án trên"
    },
    "answer": "d"
  },
  {
    "question": "Câu 167: Tài khoản định danh điện tử có mấy mức độ?",
    "options": {
        "a": "1",
        "b": "2",
        "c": "3",
        "d": "4"
    },
    "answer": "b"
  },
  {
    "question": "Câu 168: Người dân cần cung cấp thông tin gì khi đăng ký tài khoản VNeID?",
    "options": {
        "a": "Tài khoản ngân hàng",
        "b": "Giấy khai sinh",
        "c": "CCCD và số điện thoại",
        "d": "Hộ khẩu photo"
    },
    "answer": "c"
  },
  {
    "question": "Câu 169: Nguyên nhân khiến nhiều người dễ bị hack mật khẩu?",
    "options": {
        "a": "Không đổi mật khẩu định kỳ",
        "b": "Không bật xác thực hai bước",
        "c": "Dùng mật khẩu yếu",
        "d": "Dùng chung mật khẩu nhiều nơi"
    },
    "answer": ["a", "b", "c", "d"]
  },
  {
    "question": "Câu 170: Vì sao mạng quân sự thường không kết nối Internet công cộng?",
    "options": {
        "a": "Bảo vệ dữ liệu mật",
        "b": "Để tránh bị dò quét",
        "c": "Hạn chế lây lan mã độc",
        "d": "Tất cả đều đúng"
    },
    "answer": "d"
  },
  {
    "question": "Câu 171: Ransomware là gì?",
    "options": {
        "a": "Một loại phần mềm hợp pháp",
        "b": "Một dạng mã độc tống tiền",
        "c": "Một phần mềm diệt virus",
        "d": "Một hình thức lừa đảo qua email"
    },
    "answer": "b"
  },
  {
    "question": "Câu 172: AI có thể hỗ trợ phát hiện các cuộc tấn công giả mạo thông tin như thế nào?",
    "options": {
        "a": "Xác định mâu thuẫn thông tin",
        "b": "Dự đoán nguồn phát tán",
        "c": "Tự động báo cáo cơ quan chức năng",
        "d": "So sánh nội dung với cơ sở dữ liệu chuẩn"
    },
    "answer": ["a", "b", "c", "d"]
  },
  {
    "question": "Câu 173: Ứng dụng trợ lý ảo nào sau đây là do AI tạo ra?",
    "options": {
        "a": "Photoshop",
        "b": "Paint",
        "c": "Siri",
        "d": "Excel"
    },
    "answer": "c"
  },
  {
    "question": "Câu 174: AI giúp hỗ trợ bệnh nhân như thế nào qua chatbot?",
    "options": {
        "a": "Tư vấn sức khỏe ban đầu",
        "b": "Giải đáp thắc mắc",
        "c": "Hướng dẫn dùng thuốc",
        "d": "Tất cả đều đúng"
    },
    "answer": "d"
  },
  {
    "question": "Câu 175: Đâu không phải là quy tắc ứng xử của cơ quan nhà nước trên mạng xã hội?",
    "options": {
        "a": "Không tham gia ý kiến bình luận, phản hồi thông tin trên mạng xã hội",
        "b": "Cung cấp thông tin trên mạng xã hội đồng bộ, thống nhất với thông tin đã được cung cấp trên phương tiện truyền thông chính thống khác",
        "c": "Có trách nhiệm quản lý, bảo mật tài khoản mạng xã hội và nhanh chóng thông báo nhà cung cấp dịch vụ khi tài khoản của cơ quan nhà nước, tổ chức bị mất quyền kiểm soát hoặc giả mạo",
        "d": "Thực hiện nội dung quy định cho cơ quan, tổ chức nêu tại Điều 4 Quyết định 874/QĐ-BTTTT"
    },
    "answer": "a"
	},
	{
		"question": "Câu 176: Chuyển đổi số là gì?",
		"options": {
			"a": "Chuyển đổi số là khai thác các dữ liệu có được từ quá trình số hoá, rồi áp dụng các công nghệ để phân tích, biến đổi các dữ liệu đó và tạo ra các giá trị mới hơn",
			"b": "Chuyển đổi số là bước phát triển tiếp theo của tin học hóa (ứng dụng công nghệ thông tin, số hóa quy trình nghiệp vụ đã có ở mức cao), có được nhờ sự tiến bộ vượt bậc của những công nghệ mới mang tính đột phá, nhất là công nghệ số",
			"c": "Chuyển đổi số là quá trình thay đổi tổng thể và toàn diện của cá nhân, tổ chức về cách sống, cách làm việc và phương thức sản xuất dựa trên các công nghệ số",
			"d": "Tất cả các đáp án"
		},
		"answer": "d"
	},
	{
		"question": "Câu 177: Kỹ năng quan trọng nhất cho cán bộ trong chuyển đổi số là gì?",
		"options": {
			"a": "Lái xe",
			"b": "Vận hành máy tính cơ bản",
			"c": "Ngoại ngữ",
			"d": "Kỹ năng số"
		},
		"answer": "d"
	},
	{
		"question": "Câu 178: Hệ thống thông tin liên lạc hiện đại của quân đội sử dụng công nghệ nào?",
		"options": {
			"a": "5G",
			"b": "Mạng radio mật mã",
			"c": "Vệ tinh quân sự",
			"d": "Tất cả các đáp án trên"
		},
		"answer": "d"
	},
	{
		"question": "Câu 179: Người dùng có thể dùng camera thông minh để làm gì?",
		"options": {
			"a": "Gửi dữ liệu livestream",
			"b": "Nhận diện khuôn mặt",
			"c": "Giám sát nhà cửa",
			"d": "Chơi trò chơi thực tế ảo"
		},
		"answer": ["a", "b", "c"]
	},
	{
		"question": "Câu 180: Phát biểu nào sau đây đúng về phòng chống tấn công mạng trong quân đội?",
		"options": {
			"a": "Chỉ cần khi có chiến tranh mới cần phòng chống",
			"b": "Chỉ liên quan đến đơn vị thông tin",
			"c": "Chỉ lực lượng kỹ thuật mới chịu trách nhiệm",
			"d": "Phòng chống là nhiệm vụ thường xuyên"
		},
		"answer": "d"
	},
	{
		"question": "Câu 181: Các hành vi nào sau đây là vi phạm an toàn thông tin cá nhân?",
		"options": {
			"a": "Tự ý thu thập dữ liệu cá nhân",
			"b": "Tự động gửi OTP khi chưa xin phép",
			"c": "Tấn công lừa đảo qua email",
			"d": "Bán thông tin cho bên thứ ba"
		},
		"answer": ["a", "c", "d"]
	},
	{
		"question": "Câu 182: Khi nhận được cuộc gọi lạ, xưng là cán bộ Công an yêu cầu cung cấp các thông tin cá nhân, tài khoản ngân hàng,... để cấp tài khoản định danh điện tử. Có nên thực hiện không?",
		"options": {
			"a": "Không. Vì người dân có thể đăng ký cấp tài khoản định danh điện tử qua ứng dụng VNeID hoặc ra trực tiếp cơ quan Công an để thực hiện. Cán bộ Công an sẽ không gọi điện yêu cầu công dân cung cấp thêm thông tin cá nhân hay bất kỳ loại giấy tờ nào khác.",
			"b": "Tùy vào nội dung cơ quan công an yêu cầu mà cân nhắc thực hiện theo hay không",
			"c": "Chỉ cung cấp thông tin về bảo hiểm y tế, giấy phép lái xe, đăng ký xe cho người gọi điện; không cung cấp thông tin tài khoản ngân hàng",
			"d": "Có. Vì cơ quan công an có thể cần bổ sung thêm giấy tờ tích hợp vào tài khoản định danh điện tử và liên hệ vì đã có số điện thoại lưu trong hệ thống"
		},
		"answer": "a"
	},
	{
		"question": "Câu 183: AI có thể tăng cường hiệu quả công tác chính trị như thế nào?",
		"options": {
			"a": "Phân tích phản hồi cán bộ",
			"b": "Dự báo xu hướng tư tưởng",
			"c": "Tự động hóa khảo sát",
			"d": "Tổng hợp báo cáo nhanh"
		},
		"answer": ["a", "b", "c", "d"]
	},
	{
		"question": "Câu 184: AI được ứng dụng trong giáo dục để làm gì?",
		"options": {
			"a": "Phát wifi",
			"b": "Dạy thay giáo viên",
			"c": "Mở cửa lớp học",
			"d": "Chấm điểm tự động"
		},
		"answer": "d"
	},
	{
		"question": "Câu 185: Phát biểu đúng nhất về lợi ích chuyển đổi số trong học tập là gì?",
		"options": {
			"a": "Giới hạn việc tìm kiếm thông tin",
			"b": "Tiếp cận nguồn tài liệu khổng lồ và phải trả chi phí nhiều hơn",
			"c": "Bị hạn chế khả năng tiếp cận nhiều tài liệu học tập",
			"d": "Giúp học tập mọi lúc, mọi nơi"
		},
		"answer": "d"
	},
	{
		"question": "Câu 186: Ứng dụng VNeID có chức năng gì?",
		"options": {
			"a": "Tất cả các đáp án trên.",
			"b": "Thông báo giấy tờ hết hạn.",
			"c": "Tích hợp giấy phép lái xe, BHYT.",
			"d": "Hiển thị CCCD gắn chip."
		},
		"answer": "a"
	},
	{
		"question": "Câu 187: Hiểu thế nào về khái niệm dịch vụ công trực tuyến của cơ quan nhà nước?",
		"options": {
			"a": "Dịch vụ công trực tuyến của cơ quan nhà nước là dịch vụ hành chính công và các dịch vụ khác của cơ quan nhà nước được cung cấp cho các tổ chức, cá nhân trên môi trường mạng",
			"b": "Dịch vụ công trực tuyến là dịch vụ hành chính công và các dịch vụ khác của cơ quan nhà nước được cung cấp cho các tổ chức, cá nhân",
			"c": "Dịch vụ công trực tuyến là giao dịch công được thực hiện trên môi trường trực tuyến",
			"d": "Dịch vụ công trực tuyến là các thủ tục hành chính của cơ quan nhà nước được cung cấp cho các tổ chức, cá nhân trên môi trường mạng"
		},
		"answer": "a"
	},
	{
		"question": "Câu 188: Thiết bị đeo thông minh (smartwatch, vòng đeo tay sức khỏe) có thể hỗ trợ theo dõi sức khỏe như thế nào?",
		"options": {
			"a": "Cảnh báo bất thường",
			"b": "Theo dõi giấc ngủ",
			"c": "Đo nồng độ oxy trong máu",
			"d": "Theo dõi nhịp tim"
		},
		"answer": "a"
	},
	{
		"question": "Câu 189: Khi nào thì tài khoản Định danh điện tử công dân bị khóa?",
		"options": {
			"a": "Chủ thể danh tính điện tử yêu cầu khóa tài khoản định danh điện tử; vi phạm điều khoản sử dụng ứng dụng; bị thu hồi thẻ CCCD; chết",
			"b": "Cơ quan tiến hành tố tụng, cơ quan chức năng hoặc bên sử dụng dịch vụ gửi đề nghị khóa tài khoản",
			"c": "Tòa án nhân dân các cấp ra quyết định khóa tài khoản",
			"d": "Đáp án 1 và 2"
		},
		"answer": "d"
	},
	{
		"question": "Câu 190: Công nghệ AI nào thường được dùng để phân tích hình ảnh y tế?",
		"options": {
			"a": "Xử lý ngôn ngữ tự nhiên",
			"b": "Học tăng cường",
			"c": "Robotic Process Automation",
			"d": "Computer Vision"
		},
		"answer": "d"
	},
	{
		"question": "Câu 191: AI có thể hỗ trợ bác sĩ như thế nào trong chẩn đoán bệnh?",
		"options": {
			"a": "Điều trị bệnh trực tiếp",
			"b": "Đưa ra chẩn đoán sơ bộ",
			"c": "Phân tích dữ liệu y tế lớn",
			"d": "Thay thế bác sĩ"
		},
		"answer": "c"
	},
	{
		"question": "Câu 192: Trên Android, thao tác tắt máy đúng là như thế nào?",
		"options": {
			"a": "Gỡ pin ra khỏi máy",
			"b": "Nhấn nút giảm âm lượng và camera",
			"c": "Mở cài đặt và chọn “Tắt nguồn”",
			"d": "Nhấn giữ nút nguồn, chọn 'Power off', rồi xác nhận"
		},
		"answer": "d"
	},
	{
		"question": "Câu 193: Chuyển đổi số trong kinh tế vi mô giúp gì cho người dân?",
		"options": {
			"a": "Tăng khả năng quản lý chi tiêu",
			"b": "Tiếp cận tài chính dễ hơn",
			"c": "Giao dịch thuận tiện hơn",
			"d": "Tăng thuế thu nhập"
		},
		"answer": ["a", "b", "c"]
	},
	{
		"question": "Câu 194: Ba trụ cột của chuyển đổi số là gì?",
		"options": {
			"a": "Chuyển đổi công nghệ, dữ liệu, mô hình",
			"b": "Chính phủ số, kinh tế số, xã hội số",
			"c": "Kết nối số, công nghệ số, quản trị số",
			"d": "Công nghiệp hóa, hiện đại hóa, tự động hóa"
		},
		"answer": "b"
	},
	{
		"question": "Câu 195: Đến năm 2030, mục tiêu tỷ lệ dân số có tài khoản thanh toán điện tử là bao nhiêu?",
		"options": {
			"a": "Trên 90%",
			"b": "Trên 70%",
			"c": "Trên 60%",
			"d": "Trên 80%"
		},
		"answer": "d"
	},
	{
		"question": "Câu 196: Công nghệ nào nâng cao hiệu quả quản lý cán bộ chiến sĩ trong quân đội?",
		"options": {
			"a": "Phần mềm quản lý hồ sơ",
			"b": "Hệ thống mã vạch",
			"c": "Camera an ninh",
			"d": "AI nhận diện khuôn mặt"
		},
		"answer": "d"
	},
	{
		"question": "Câu 197: Các loại hình thương mại điện tử phổ biến?",
		"options": {
			"a": "C2C (khách hàng với khách hàng)",
			"b": "B2C (doanh nghiệp với khách hàng)",
			"c": "B2B (doanh nghiệp với doanh nghiệp)",
			"d": "Giao dịch qua fax"
		},
		"answer": ["a", "b", "c"]
	},
	{
		"question": "Câu 198: Được phép truy cập thư điện tử nội bộ trên máy tính nào?",
		"options": {
			"a": "Máy tính tại Tập đoàn",
			"b": "Máy tính tại các cửa hàng Internet",
			"c": "Máy tính cá nhân",
			"d": "Máy tính công cộng"
		},
		"answer": "a"
	},
	{
		"question": "Câu 199: AI giúp gì khi huấn luyện sỹ quan chỉ huy?",
		"options": {
			"a": "Phân tích phản ứng quyết định",
			"b": "Đánh giá hiệu suất thực hành",
			"c": "Cung cấp phản hồi tự động",
			"d": "Giả lập tình huống chiến thuật"
		},
		"answer": ["a", "b", "c", "d"]
	},
	{
		"question": "Câu 200: AI giúp giảm thiểu gian lận bằng cách nào?",
		"options": {
			"a": "Tăng thuế",
			"b": "Phân tích hành vi",
			"c": "Khóa tài khoản tự động",
			"d": "Ẩn thông tin"
		},
		"answer": "b"
	},
	{
		"question": "Câu 201: AI thường xuất hiện trong ứng dụng nào?",
		"options": {
			"a": "Máy tính bỏ túi",
			"b": "Excel",
			"c": "Wordpad",
			"d": "Google Assistant"
		},
		"answer": "d"
	},
	{
		"question": "Câu 202: Trên iPhone, để chia sẻ Internet qua Bluetooth, cần thao tác gì?",
		"options": {
			"a": "Tắt Wi-Fi và bật Dữ liệu di động",
			"b": "Bật Điểm truy cập cá nhân, kết nối laptop qua Bluetooth",
			"c": "Kết nối qua AirDrop trước",
			"d": "Vào Safari và nhập 'Hotspot'"
		},
		"answer": "b"
	},
	{
		"question": "Câu 203: Nguyên tắc cấp quyền cho người dùng?",
		"options": {
			"a": "Phân tán dữ liệu",
			"b": "Tối thiểu quyền",
			"c": "Truy cập mở",
			"d": "Bảo mật nhiều lớp"
		},
		"answer": "b"
	},
    {
        "question": "Câu 204: Nhóm tiện ích nào không thuộc Đề án 06?",
        "options": {
            "a": "Phục vụ TTHC và dịch vụ công trực tuyến",
            "b": "Phục vụ công dân số",
            "c": "Phục vụ kinh doanh, giải trí",
            "d": "Phục vụ phát triển KT-XH"
        },
        "answer": "c"
    },
    {
        "question": "Câu 205: Yếu tố nào là then chốt để chuyển đổi số thành công?",
        "options": {
            "a": "Thay đổi tư duy, văn hóa tổ chức",
            "b": "Ý chí chính trị",
            "c": "Nguồn lực tài chính",
            "d": "Hạ tầng công nghệ"
        },
        "answer": "a"
    },
    {
        "question": "Câu 206: Theo Nghị định 42, đơn vị nào giữ vai trò điều phối chuyển đổi số quốc gia?",
        "options": {
            "a": "Bộ Quốc phòng",
            "b": "Bộ Công an",
            "c": "Bộ Giao thông Vận tải",
            "d": "Bộ Thông tin và Truyền thông"
        },
        "answer": "d"
    },
    {
        "question": "Câu 207: Ứng dụng ngân hàng số giúp người dùng thực hiện giao dịch nào sau đây?",
        "options": {
            "a": "Gửi tiết kiệm online",
            "b": "Rút tiền tại ATM bằng QR code",
            "c": "Chuyển tiền",
            "d": "Thanh toán hóa đơn"
        },
        "answer": ["a", "b", "c", "d"]
    },
    {
        "question": "Câu 208: Một trong các hậu quả pháp lý của hành vi vi phạm bản quyền là gì?",
        "options": {
            "a": "Phải xin lỗi công khai trên mạng xã hội",
            "b": "Bị chặn đăng bình luận",
            "c": "Bị kiện bởi chủ sở hữu bản quyền",
            "d": "Được yêu cầu tạo tác phẩm thay thế"
        },
        "answer": "c"
    },
    {
        "question": "Câu 209: Phương pháp “5 Tại sao” (5 Why) dùng để làm gì trong xử lý sự cố?",
        "options": {
            "a": "Tìm nguyên nhân gốc rễ của sự cố",
            "b": "Đưa ra mô hình bảo trì mới",
            "c": "Đánh giá hiệu suất của thiết bị",
            "d": "Gợi ý cách sửa chữa tức thời"
        },
        "answer": "a"
    }
];