const quizData = [
  {
    "question": "1. Có cần số điện thoại chính chủ để đăng ký không?",
    "options": {
      "a": "Không bắt buộc",
      "b": "Không cần",
      "c": "Tùy tình huống",
      "d": "Cần"
    },
    "answer": "d"
  },
  {
    "question": "2. Đăng ký tài khoản định danh điện tử ở đâu?",
    "options": {
      "a": "Cơ quan Công an",
      "b": "Qua điện thoại",
      "c": "Cổng dịch vụ công",
      "d": "UBND xã"
    },
    "answer": "a"
  },
  {
    "question": "3. Những yếu tố nào sau đây là trụ cột chính trong chuyển đổi số quốc gia?",
    "options": {
      "a": "Hạ tầng số",
      "b": "Dữ liệu số",
      "c": "Chính phủ số, Kinh tế số, Xã hội số",
      "d": "Công nghệ số, Nhân lực số, Thể chế số"
    },
    "answer": "c"
  },
  {
    "question": "4. Theo Quyết định 749/QĐ-TTg năm 2020 về Chương trình Chuyển đổi số quốc gia, những công nghệ số trọng tâm nào được khuyến khích phát triển?",
    "options": {
      "a": "Trí tuệ nhân tạo (AI), dữ liệu lớn (Big Data), Internet vạn vật (IoT)",
      "b": "Công nghệ thủ công truyền thống",
      "c": "Máy móc cơ khí, công nghệ in offset",
      "d": "Thiết bị điện gia dụng và nông cụ"
    },
    "answer": "a"
  },
  {
    "question": "5. Bị mất điện thoại đang sử dụng tài khoản định danh điện tử thì cần làm gì?",
    "options": {
      "a": "Không làm gì cả",
      "b": "Xóa tài khoản và đăng ký lại",
      "c": "Thay điện thoại mới và sử dụng bình thường",
      "d": "Cấp lại số điện thoại và khóa tài khoản định danh"
    },
    "answer": "d"
  },
  {
    "question": "6. Hệ thống nào giúp nhà trường quản lý học sinh và giáo viên hiệu quả hơn?",
    "options": {
      "a": "Sổ liên lạc giấy",
      "b": "Ứng dụng quản lý giáo dục",
      "c": "Phần mềm chỉnh sửa văn bản",
      "d": "Email"
    },
    "answer": "b"
  },
  {
    "question": "7. Chọn thiết bị mạng không dây (bộ phát wifi) như thế nào để đảm bảo an toàn thông tin khi sử dụng?",
    "options": {
      "a": "Chọn thiết bị có giá rẻ, mẫu mã đẹp",
      "b": "Chọn thiết bị có nguồn gốc xuất xứ, thương hiệu nổi tiếng của nước ngoài",
      "c": "Chọn thiết bị có nguồn gốc xuất xứ rõ ràng, thương hiệu uy tín, có khả năng bảo mật và loại bỏ mã độc, ngăn chặn sự thâm nhập bất hợp pháp từ bên ngoài",
      "d": "Chọn thiết bị có mẫu mã đẹp, độ phủ sóng rộng, không nhất thiết phải là thương hiệu nổi tiếng"
    },
    "answer": "c"
  },
  {
    "question": "8. Dấu hiệu nhận biết email lừa đảo là gì?",
    "options": {
      "a": "Có file đính kèm lạ",
      "b": "Đường link lạ đính kèm",
      "c": "Người gửi không rõ ràng",
      "d": "Nội dung cấp bách, khẩn cấp",
      "e": "Cả 4 đáp án trên"
    },
    "answer": ["a","b","c","d"]
  },
  {
    "question": "9. Quy tắc ứng xử cho tổ chức, cá nhân được quy định tại Điều mấy Bộ Quy tắc ứng xử trên không gian mạng?",
    "options": {
      "a": "Điều 2",
      "b": "Điều 3",
      "c": "Điều 4",
      "d": "Điều 5"
    },
    "answer": "c"
  },
  {
    "question": "10. AI có thể được phân loại thành mấy nhóm chính?",
    "options": {
      "a": "4",
      "b": "5",
      "c": "2",
      "d": "3"
    },
    "answer": "d"
  },
  {
    "question": "11. AI có thể giúp chẩn đoán bệnh nào sau đây thông qua hình ảnh?",
    "options": {
      "a": "Suy thận",
      "b": "Ung thư phổi",
      "c": "Tim mạch",
      "d": "Tất cả đều đúng"
    },
    "answer": "d"
  },
  {
    "question": "12. AI được sử dụng trong lĩnh vực nào sau đây?",
    "options": {
      "a": "Giáo dục",
      "b": "Tài chính",
      "c": "Y tế",
      "d": "Tất cả đều đúng"
    },
    "answer": "d"
  },
  {
    "question": "13. Thành phần nào của điện thoại thông minh điều phối mọi hoạt động trên thiết bị?",
    "options": {
      "a": "Camera chính",
      "b": "Pin",
      "c": "Hệ điều hành (Android hoặc iOS)",
      "d": "Bộ xử lý đồ họa (GPU)"
    },
    "answer": "c"
  },
  {
    "question": "14. Mục đích chính của việc điều chỉnh múi giờ trên thiết bị là gì?",
    "options": {
      "a": "Tăng hiệu suất xử lý CPU",
      "b": "Giảm tiêu thụ pin",
      "c": "Kích hoạt bảo mật dữ liệu",
      "d": "Hiển thị đúng thời gian hệ thống và ứng dụng"
    },
    "answer": "d"
  },
  {
    "question": "15. Màn hình nào sử dụng đèn nền chiếu qua tinh thể lỏng để tạo hình ảnh?",
    "options": {
      "a": "CRT",
      "b": "LCD",
      "c": "Plasma",
      "d": "OLED"
    },
    "answer": "b"
  },
  {
    "question": "16. Tiêu chí nào yêu cầu thông tin không bị thiên lệch hoặc lái dư luận?",
    "options": {
      "a": "Độ chính xác",
      "b": "Tính khách quan",
      "c": "Tính cập nhật",
      "d": "Tính rõ ràng"
    },
    "answer": "b"
  },
  {
    "question": "17. Việc phân quyền người dùng trong truy xuất dữ liệu nhằm mục đích gì?",
    "options": {
      "a": "Giảm chi phí lưu trữ",
      "b": "Tăng tốc truy cập",
      "c": "Dễ dàng chia sẻ cho tất cả mọi người",
      "d": "Bảo mật dữ liệu và kiểm soát truy cập"
    },
    "answer": "d"
  },
  {
    "question": "18. Đặc điểm phổ biến của thông tin giả mạo là gì?",
    "options": {
      "a": "Chỉ phát tán nội bộ trong quân đội",
      "b": "Thường đi kèm các báo cáo chính thống",
      "c": "Được kiểm chứng rõ ràng",
      "d": "Mạo danh cán bộ, sử dụng hình ảnh, tên tuổi thật để tạo lòng tin"
    },
    "answer": "d"
  },
  {
    "question": "19. Nguyên tắc nào yêu cầu người dùng chỉ được cấp quyền đủ để thực hiện nhiệm vụ?",
    "options": {
      "a": "Phân tán dữ liệu",
      "b": "Tối thiểu quyền",
      "c": "Truy cập mở",
      "d": "Bảo mật nhiều lớp"
    },
    "answer": "b"
  },
  {
    "question": "20. Việc phân loại dữ liệu công vụ nhằm mục đích gì trong quản lý quyền truy cập?",
    "options": {
      "a": "Lưu trữ dễ dàng hơn",
      "b": "Tăng tốc độ truyền tải dữ liệu",
      "c": "Tối ưu bộ nhớ hệ thống",
      "d": "Xác định mức truy cập phù hợp"
    },
    "answer": "d"
  },
  {
    "question": "21. Lợi ích chính của khai báo trực tuyến là gì?",
    "options": {
      "a": "Giảm thủ tục, tiết kiệm thời gian",
      "b": "Tăng số lượng lao động sử dụng internet",
      "c": "Hạn chế giao tiếp xã hội",
      "d": "Giúp cơ quan nhà nước tăng thu ngân sách"
    },
    "answer": "a"
  },
  {
    "question": "22. Loại tác phẩm nào không thuộc danh mục được bảo vệ bản quyền theo luật hiện hành?",
    "options": {
      "a": "Tác phẩm nghe nhìn",
      "b": "Hình ảnh minh họa quảng cáo",
      "c": "Công thức nấu ăn truyền miệng",
      "d": "Tác phẩm viết như bài báo, sách"
    },
    "answer": "c"
  },
  {
    "question": "23. NotebookLM là công cụ do tổ chức nào phát triển?",
    "options": {
      "a": "OpenAI",
      "b": "Google",
      "c": "Microsoft",
      "d": "IBM"
    },
    "answer": "b"
  },
  {
    "question": "24. Vì sao cần thực hiện quy trình lặp khi làm việc với AI?",
    "options": {
      "a": "Vì AI có thể đoán chính xác mọi yêu cầu",
      "b": "Để tiết kiệm thời gian không cần kiểm tra lại",
      "c": "Để AI hiểu người dùng ngay từ đầu",
      "d": "Vì AI không thể luôn hiểu đúng ý ngay từ lần đầu"
    },
    "answer": "d"
  },
  {
    "question": "25. Hành vi cài mã độc qua USB để đánh cắp thông tin thuộc loại mối nguy nào?",
    "options": {
      "a": "Gây hoang mang nội bộ",
      "b": "Tăng khối lượng lưu trữ trái phép",
      "c": "Gây rò rỉ thông tin mật, ảnh hưởng an ninh thông tin",
      "d": "Gây ảnh hưởng dư luận"
    },
    "answer": "c"
  },
  {
    "question": "26. Mật khẩu mạnh nên có ít nhất bao nhiêu ký tự?",
    "options": {
      "a": "8 ký tự",
      "b": "6 ký tự",
      "c": "12 ký tự",
      "d": "16 ký tự"
    },
    "answer": "c"
  },
  {
    "question": "27. Nguyên nhân chính khiến ánh sáng xanh từ màn hình gây rối loạn giấc ngủ là gì?",
    "options": {
      "a": "Làm rối loạn nhịp sinh học tự nhiên của cơ thể",
      "b": "Làm mắt chói",
      "c": "Tăng sự tỉnh táo ban ngày",
      "d": "Làm khô giác mạc"
    },
    "answer": "a"
  },
  {
    "question": "28. Một trong các yếu tố quan trọng khi lựa chọn giải pháp công nghệ là gì?",
    "options": {
      "a": "Có nhiều tính năng phức tạp",
      "b": "Khả năng mở rộng và thích ứng với nhu cầu trong tương lai",
      "c": "Thời gian triển khai càng dài càng tốt",
      "d": "Sản phẩm được thiết kế bởi công ty nước ngoài"
    },
    "answer": "b"
  },
  {
    "question": "29. Sau khi triển khai giải pháp xử lý sự cố, việc kiểm tra lại hệ thống có mục đích gì?",
    "options": {
      "a": "Để chuẩn bị đưa vào bảo trì định kỳ",
      "b": "Để đảm bảo hoàn thành quy trình giấy tờ",
      "c": "Để viết báo cáo sự cố",
      "d": "Đảm bảo sự cố đã được xử lý triệt để và hệ thống hoạt động bình thường"
    },
    "answer": "d"
  },
  {
    "question": "30. Khi lựa chọn phần mềm BPM, yếu tố khả năng mở rộng có nghĩa là gì?",
    "options": {
      "a": "Đáp ứng được nhu cầu tăng trưởng trong tương lai",
      "b": "Tự động viết báo cáo khi hoàn thành quy trình",
      "c": "Khả năng tự cập nhật nội dung quy trình tự động",
      "d": "Tốc độ xử lý phần mềm nhanh hơn"
    },
    "answer": "a"
  },
  {
    "question": "1. Tổ chức có thể áp dụng chuyển đổi số vào những hoạt động nào?",
    "options": {
      "a": "Marketing, Kế toán – tài chính, Quản lý rủi ro, Bán hàng, Chăm sóc khách hàng, Nghiên cứu thị trường, Quản lý nhân sự, Chuỗi cung ứng",
      "b": "Tất cả các mục trên"
    },
    "answer": "b"
  },
  {
    "question": "2. Hệ thống nào giúp kết nối, chia sẻ dữ liệu giữa các cơ quan nhà nước?",
    "options": {
      "a": "Trục liên thông quốc gia, Nền tảng tích hợp chia sẻ dữ liệu (NDXP), Hệ thống dữ liệu dùng chung, Trung tâm dữ liệu quốc gia",
      "b": "Nền tảng tích hợp chia sẻ dữ liệu (NDXP)"
    },
    "answer": "b"
  },
  {
    "question": "3. Ứng dụng chính thức của Bảo hiểm xã hội Việt Nam trên nền tảng thiết bị di động là gì?",
    "options": {
      "a": "VNeID, VinID, VnID, VssID",
      "b": "VssID"
    },
    "answer": "b"
  },
  {
    "question": "4. Các hình thức thanh toán không dùng tiền mặt phổ biến hiện nay là gì?",
    "options": {
      "a": "Thanh toán bằng tiền mặt, Dùng ví điện tử, Quét mã QR, Chuyển khoản ngân hàng",
      "b": "Dùng ví điện tử, Quét mã QR, Chuyển khoản ngân hàng"
    },
    "answer": "b"
  },
  {
    "question": "5. Lợi ích của ứng dụng bản đồ số là gì?",
    "options": {
      "a": "Tra cứu địa điểm nhanh chóng, Xác định vị trí hiện tại, Gửi tiền trực tiếp, Chỉ đường thông minh",
      "b": "Tra cứu địa điểm nhanh chóng, Xác định vị trí hiện tại, Chỉ đường thông minh"
    },
    "answer": "b"
  },
  {
    "question": "6. Bị mất điện thoại đang sử dụng tài khoản định danh điện tử thì cần làm gì?",
    "options": {
      "a": "Không làm gì cả., Xóa tài khoản và đăng ký lại., Cấp lại số điện thoại và khóa tài khoản định danh., Thay điện thoại mới và sử dụng bình thường.",
      "b": "Cấp lại số điện thoại và khóa tài khoản định danh."
    },
    "answer": "b"
  },
  {
    "question": "7. Các kỹ thuật tấn công mạng hiện đại thường sử dụng?",
    "options": {
      "a": "Spear phishing, Tấn công bằng mã độc tàng hình, Tấn công bằng khai thác 0-day, Tấn công qua AI",
      "b": "Spear phishing, Tấn công bằng mã độc tàng hình, Tấn công bằng khai thác 0-day, Tấn công qua AI"
    },
    "answer": "b"
  },
  {
    "question": "8. Để bảo vệ trẻ em trên không gian mạng, Chính phủ Việt Nam đã ban hành Nghị định nào quy định chi tiết một số điều của Luật An ninh mạng, trong đó có nội dung về bảo vệ trẻ em?",
    "options": {
      "a": "Nghị định số 15/2020/NĐ-CP, Nghị định số 64/2007/NĐ-CP, Nghị định số 53/2022/NĐ-CP, Nghị định số 72/2013/NĐ-CP",
      "b": "Nghị định số 72/2013/NĐ-CP"
    },
    "answer": "b"
  },
  {
    "question": "9. Các hình thức tấn công mạng phổ biến hiện nay là gì?",
    "options": {
      "a": "Tấn công mã độc, Tấn công trung gian (MITM), Tấn công phishing, Tấn công từ chối dịch vụ (DDoS)",
      "b": "Tấn công mã độc, Tấn công trung gian (MITM), Tấn công phishing, Tấn công từ chối dịch vụ (DDoS)"
    },
    "answer": "b"
  },
  {
    "question": "10. Ứng dụng AI trong quản trị hệ thống CNTT mang lại lợi ích gì?",
    "options": {
      "a": "Tự động cảnh báo sự cố, Tự động nâng cấp phần mềm, Phân tích hiệu suất hệ thống, Dự báo lỗi phần cứng",
      "b": "Tự động cảnh báo sự cố, Phân tích hiệu suất hệ thống, Dự báo lỗi phần cứng"
    },
    "answer": "b"
  },
  {
    "question": "11. AI yếu (Weak AI) là gì?",
    "options": {
      "a": "AI có khả năng tư duy như con người, AI điều khiển robot, AI thực hiện một nhiệm vụ cụ thể, AI có thể tự học mọi thứ",
      "b": "AI thực hiện một nhiệm vụ cụ thể"
    },
    "answer": "b"
  },
  {
    "question": "12. AI có thể làm gì trong lĩnh vực tài chính?",
    "options": {
      "a": "Tư vấn đầu tư, Tất cả các ý trên, Phát hiện gian lận, Phân tích dữ liệu",
      "b": "Tất cả các ý trên"
    },
    "answer": "b"
  },
  {
    "question": "13. Lý do cần kiểm soát dữ liệu khi dùng Hotspot là gì?",
    "options": {
      "a": "Để cải thiện sóng Wi-Fi, Để tăng tuổi thọ pin, Để làm sạch bộ nhớ RAM, Để tránh vượt giới hạn dung lượng di động",
      "b": "Để tránh vượt giới hạn dung lượng di động"
    },
    "answer": "b"
  },
  {
    "question": "14. Thành phần nào của điện thoại thông minh điều phối mọi hoạt động trên thiết bị?",
    "options": {
      "a": "Pin, Camera chính, Hệ điều hành (Android hoặc iOS), Bộ xử lý đồ họa (GPU)",
      "b": "Hệ điều hành (Android hoặc iOS)"
    },
    "answer": "b"
  },
  {
    "question": "15. Khi tắt máy tính bằng Windows, bước đầu tiên là gì?",
    "options": {
      "a": "Gập màn hình lại, Ngắt kết nối Internet, Nhấn giữ nút nguồn trong 5 giây, Chọn “Start” trên giao diện hệ điều hành",
      "b": "Chọn “Start” trên giao diện hệ điều hành"
    },
    "answer": "b"
  },
  {
    "question": "16. Tại sao cần xác minh nguồn và tác giả thông tin?",
    "options": {
      "a": "Để biết người viết có nhiều người theo dõi không, Để đảm bảo tác giả là người có chuyên môn và đáng tin cậy, Để biết nguồn có nổi tiếng không, Để biết người viết có thường xuyên đăng không",
      "b": "Để đảm bảo tác giả là người có chuyên môn và đáng tin cậy"
    },
    "answer": "b"
  },
  {
    "question": "17. Đặc điểm phổ biến của thông tin giả mạo là gì?",
    "options": {
      "a": "Được kiểm chứng rõ ràng, Chỉ phát tán nội bộ trong quân đội, Thường đi kèm các báo cáo chính thống, Mạo danh cán bộ, sử dụng hình ảnh, tên tuổi thật để tạo lòng tin",
      "b": "Mạo danh cán bộ, sử dụng hình ảnh, tên tuổi thật để tạo lòng tin"
    },
    "answer": "b"
  },
  {
    "question": "18. Nguồn dữ liệu quân sự nào sau đây là không phù hợp để sử dụng?",
    "options": {
      "a": "Báo cáo tình báo, Dữ liệu trinh sát, Trang web không xác thực ngoài quân đội, Hệ thống tác chiến số hóa",
      "b": "Trang web không xác thực ngoài quân đội"
    },
    "answer": "b"
  },
  {
    "question": "19. Người dùng có trách nhiệm gì khi tham gia mạng xã hội?",
    "options": {
      "a": "Tự do phát ngôn không cần kiểm soát, Không cần phối hợp khi có hành vi vi phạm, Chịu trách nhiệm về hành vi, phối hợp xử lý khi có vi phạm, Chia sẻ mọi thông tin cá nhân để chứng minh minh bạch",
      "b": "Chịu trách nhiệm về hành vi, phối hợp xử lý khi có vi phạm"
    },
    "answer": "b"
  },
  {
    "question": "21. Thông tin nào đồng chí không nắm quyền kiểm soát trên mạng xã hội?",
    "options": {
      "a": "Cài đặt hiển thị trên tài khoản, Họ tên, số điện thoại, Bình luận, đánh giá từ người khác về nội dung đồng chí chia sẻ, Hình ảnh cá nhân đồng chí tự đăng",
      "b": "Bình luận, đánh giá từ người khác về nội dung đồng chí chia sẻ"
    },
    "answer": "b"
  },
  {
    "question": "22. Hành vi nào sau đây được coi là vi phạm bản quyền?",
    "options": {
      "a": "Tạo nội dung mới có cảm hứng từ tác phẩm gốc, Sao chép, chia sẻ nội dung mà chưa xin phép hoặc trả phí, Trích dẫn tác phẩm có ghi rõ nguồn, Bình luận nội dung trên mạng xã hội",
      "b": "Sao chép, chia sẻ nội dung mà chưa xin phép hoặc trả phí"
    },
    "answer": "b"
  },
  {
    "question": "23. Điều gì là quan trọng nhất trong quá trình thuyết trình, theo nội dung bài học?",
    "options": {
      "a": "Có slide thiết kế đẹp, Có đầy đủ dữ liệu minh họa, Người trình bày nắm chắc nội dung, luyện tập kỹ lưỡng và ứng biến tốt, Dùng đúng công cụ AI phù hợp",
      "b": "Người trình bày nắm chắc nội dung, luyện tập kỹ lưỡng và ứng biến tốt"
    },
    "answer": "b"
  },
  {
    "question": "25. Hội chứng thị giác màn hình thường xảy ra khi dùng thiết bị trên bao lâu mỗi ngày?",
    "options": {
      "a": "1 giờ, 3 giờ, 5 giờ, 30 phút",
      "b": "3 giờ"
    },
    "answer": "b"
  },
  {
    "question": "26. Hành động nào sau đây giúp kéo dài vòng đời của thiết bị điện tử?",
    "options": {
      "a": "Luôn bật thiết bị kể cả khi không dùng, Chạy ứng dụng nặng liên tục, Vứt bỏ thiết bị sau 1-2 năm sử dụng, Sửa chữa, nâng cấp và bán lại thiết bị thay vì vứt đi",
      "b": "Sửa chữa, nâng cấp và bán lại thiết bị thay vì vứt đi"
    },
    "answer": "b"
  },
  {
    "question": "27. Hành vi cài mã độc qua USB để đánh cắp thông tin thuộc loại mối nguy nào?",
    "options": {
      "a": "Tăng khối lượng lưu trữ trái phép, Gây ảnh hưởng dư luận, Gây hoang mang nội bộ, Gây rò rỉ thông tin mật, ảnh hưởng an ninh thông tin",
      "b": "Gây rò rỉ thông tin mật, ảnh hưởng an ninh thông tin"
    },
    "answer": "b"
  },
  {
    "question": "28. Khi lựa chọn phần mềm BPM, yếu tố khả năng mở rộng có nghĩa là gì?",
    "options": {
      "a": "Tự động viết báo cáo khi hoàn thành quy trình, Đáp ứng được nhu cầu tăng trưởng trong tương lai, Khả năng tự cập nhật nội dung quy trình tự động, Tốc độ xử lý phần mềm nhanh hơn",
      "b": "Đáp ứng được nhu cầu tăng trưởng trong tương lai"
    },
    "answer": "b"
  },
  {
    "question": "29. Tại sao cần đánh giá rủi ro khi xác định nhu cầu công nghệ?",
    "options": {
      "a": "Để so sánh với các đơn vị khác, Giúp chuẩn bị trước các tình huống bất lợi có thể xảy ra, Để tăng tính bảo mật trong khâu triển khai, Để biết giải pháp nào đắt hơn",
      "b": "Giúp chuẩn bị trước các tình huống bất lợi có thể xảy ra"
    },
    "answer": "b"
  },
  {
    "question": "30. SAVIS BPM Paperless phù hợp với đơn vị có đặc thù gì?",
    "options": {
      "a": "Cần tích hợp ERP đa quốc gia, Chỉ sử dụng nội bộ cho đào tạo, Cần bảo mật cao và tuân thủ pháp luật về giao dịch điện tử, Ưa chuộng thiết kế giao diện hoạt hình",
      "b": "Cần bảo mật cao và tuân thủ pháp luật về giao dịch điện tử"
    },
    "answer": "b"
  },
  {
    "question": "1. Ứng dụng công nghệ số nào được sử dụng phổ biến trong ngành ngân hàng?",
    "options": {
      "a": "Blockchain",
      "b": "Chatbot tư vấn tài chính",
      "c": "Ngân hàng số",
      "d": "Trí tuệ nhân tạo"
    },
    "answer": ["a", "b", "c", "d"]
  },
  {
    "question": "2. Khi nào được mở khóa tài khoản định danh?",
    "options": {
      "a": "Cơ quan có thẩm quyền yêu cầu",
      "b": "Khi hết căn cứ khóa",
      "c": "Theo yêu cầu công dân"
    },
    "answer": ["a", "b"]
  },
  {
    "question": "3. Tài khoản định danh mức 2 dùng để làm gì?",
    "options": {
      "a": "Xác minh giao dịch",
      "b": "Tất cả phương án trên",
      "c": "Nộp thuế",
      "d": "Ký số"
    },
    "answer": "b"
  },
  {
    "question": "4. Lợi ích của việc dùng dịch vụ lưu trữ đám mây?",
    "options": {
      "a": "Truy cập mọi nơi",
      "b": "Tự động sao lưu dữ liệu",
      "c": "Dễ chia sẻ tài liệu",
      "d": "Tăng tốc độ internet"
    },
    "answer": ["a", "b", "c"]
  },
  {
    "question": "5. Người dùng có thể sử dụng mã QR để làm gì?",
    "options": {
      "a": "Truy cập nhanh website",
      "b": "Gửi bưu phẩm",
      "c": "Đăng nhập ứng dụng",
      "d": "Thanh toán hóa đơn"
    },
    "answer": ["a", "c", "d"]
  },
  {
    "question": "6. Nguyên tắc kích hoạt tài khoản định danh điện tử?",
    "options": {
      "a": "Kích hoạt tối đa 2 tài khoản",
      "b": "Kích hoạt tối đa 3 tài khoản",
      "c": "1 số điện thoại chỉ kích hoạt 1 tài khoản",
      "d": "1 số có thể kích hoạt nhiều tài khoản"
    },
    "answer": "c"
  },
  {
    "question": "7. Tại sao cần cập nhật phần mềm thường xuyên?",
    "options": {
      "a": "Cả A và B đúng",
      "b": "Khắc phục lỗi bảo mật",
      "c": "Bổ sung tính năng mới",
      "d": "Tăng tốc độ thiết bị"
    },
    "answer": "a"
  },
  {
    "question": "8. Tại sao không nên sử dụng Wi-Fi công cộng không bảo mật?",
    "options": {
      "a": "Tin tặc có thể chặn thông tin truyền",
      "b": "Dễ bị nghe lén dữ liệu",
      "c": "Không có mã hóa dữ liệu truyền",
      "d": "Dễ bị tấn công giả mạo (fake AP)"
    },
    "answer": ["a", "b", "c", "d"]
  },
  {
    "question": "9. Khi nghi ngờ bị lộ thông tin, bạn nên làm gì trước tiên?",
    "options": {
      "a": "Xóa tài khoản",
      "b": "Báo cáo quản trị viên",
      "c": "Thay đổi mật khẩu",
      "d": "Tắt thiết bị"
    },
    "answer": "c"
  },
  {
    "question": "11. Vai trò của AI trong việc phòng thủ phi truyền thống là gì?",
    "options": {
      "a": "Theo dõi dịch bệnh",
      "b": "Dự đoán thảm họa tự nhiên",
      "c": "Phân tích mối đe dọa sinh học",
      "d": "Phân tích thông tin chiến lược đa chiều"
    },
    "answer": ["a", "b", "c", "d"]
  },
  {
    "question": "12. AI giúp gì trong đào tạo cá nhân hóa?",
    "options": {
      "a": "Xây dựng lộ trình học riêng",
      "b": "Phân tích điểm mạnh/yếu",
      "c": "Tất cả đúng",
      "d": "Đề xuất nội dung phù hợp"
    },
    "answer": "c"
  },
  {
    "question": "15. Một trong những nguyên nhân phần mềm khiến mất kết nối mạng là gì?",
    "options": {
      "a": "RAM yếu",
      "b": "Loa bị hỏng",
      "c": "Phần mềm diệt virus hoặc tường lửa chặn mạng",
      "d": "Ổ cứng bị đầy"
    },
    "answer": "c"
  },
  {
    "question": "16. Vì sao thông tin cần có nguồn gốc và thẩm quyền rõ ràng?",
    "options": {
      "a": "Để rút ngắn nội dung",
      "b": "Để xác minh tính đáng tin cậy của tác giả hoặc tổ chức",
      "c": "Để dễ chia sẻ lên mạng xã hội",
      "d": "Để tránh bị đạo văn"
    },
    "answer": "b"
  },
  {
    "question": "19. Việc phân loại dữ liệu công vụ nhằm mục đích gì trong quản lý quyền truy cập?",
    "options": {
      "a": "Tối ưu bộ nhớ hệ thống",
      "b": "Xác định mức truy cập phù hợp",
      "c": "Lưu trữ dễ dàng hơn",
      "d": "Tăng tốc độ truyền tải dữ liệu"
    },
    "answer": "b"
  },
  {
    "question": "20. Nguyên tắc nào yêu cầu người dùng chỉ được cấp quyền đủ để thực hiện nhiệm vụ?",
    "options": {
      "a": "Truy cập mở",
      "b": "Phân tán dữ liệu",
      "c": "Tối thiểu quyền",
      "d": "Bảo mật nhiều lớp"
    },
    "answer": "c"
  },
  {
    "question": "21. Khai báo bảo hiểm xã hội trực tuyến giúp người dân và đơn vị thực hiện gì?",
    "options": {
      "a": "Tra cứu điểm thi",
      "b": "Đăng ký, khai báo, đóng BHXH, BHYT, BHTN",
      "c": "Mua bảo hiểm du lịch",
      "d": "Tìm việc làm trực tuyến"
    },
    "answer": "b"
  },
  {
    "question": "22. Chức năng Briefing doc trong NotebookLM có tác dụng gì?",
    "options": {
      "a": "Tạo bản tóm tắt nội dung cho cuộc họp/thuyết trình",
      "b": "Tạo file âm thanh từ bài viết",
      "c": "Phân tích biểu đồ dữ liệu tài chính",
      "d": "Dịch nội dung sang nhiều ngôn ngữ khác nhau"
    },
    "answer": "a"
  },
  {
    "question": "25. Mối nguy nào thường xảy ra trước mùa tuyển quân do các thế lực thù địch gây ra?",
    "options": {
      "a": "Phát động phong trào thanh niên",
      "b": "Tuyên truyền thông tin xấu độc làm giảm tinh thần nhập ngũ",
      "c": "Tổ chức các buổi tư vấn tuyển sinh quân sự",
      "d": "Quảng bá hình ảnh quân đội bằng chiến dịch cộng đồng"
    },
    "answer": "b"
  },
  {
    "question": "27. Trình quản lý mật khẩu có tác dụng gì?",
    "options": {
      "a": "Đặt mật khẩu giống nhau cho tất cả tài khoản",
      "b": "Tự động thay đổi mật khẩu mỗi tuần",
      "c": "Hiển thị mật khẩu dưới dạng công khai",
      "d": "Lưu trữ và tự động điền mật khẩu một cách an toàn"
    },
    "answer": "d"
  },
  {
    "question": "28. Khoảng cách năng lực số là gì?",
    "options": {
      "a": "Khác biệt giữa người sử dụng tốt công nghệ số và người không có điều kiện tiếp cận",
      "b": "Khác biệt giữa người già và người trẻ",
      "c": "Sự chênh lệch thu nhập giữa người làm CNTT và người lao động phổ thông",
      "d": "Khoảng cách về mức sống giữa nông thôn và thành thị"
    },
    "answer": "a"
  },
  {
    "question": "29. Phương pháp “5 Tại sao” (5 Why) dùng để làm gì trong xử lý sự cố?",
    "options": {
      "a": "Đưa ra mô hình bảo trì mới",
      "b": "Tìm nguyên nhân gốc rễ của sự cố",
      "c": "Gợi ý cách sửa chữa tức thời",
      "d": "Đánh giá hiệu suất của thiết bị"
    },
    "answer": "b"
  },
  {
    "question": "30. Phần mềm BPM hỗ trợ chức năng nào sau đây?",
    "options": {
      "a": "Tự động hóa thiết kế phần cứng",
      "b": "Thiết kế, thực hiện, theo dõi và tối ưu hóa quy trình",
      "c": "Ghi nhận điểm danh hàng ngày",
      "d": "Lập kế hoạch tài chính"
    },
    "answer": "b"
  },
  {
    "question": "1. Khái niệm tài khoản định danh điện tử?",
    "options": {
      "a": "Tài khoản số để xác thực cá nhân",
      "b": "Tài khoản đăng nhập mạng xã hội",
      "c": "Ứng dụng lưu CCCD",
      "d": "Không phải là gì cả"
    },
    "answer": "a"
  },
  {
    "question": "2. Tài khoản định danh bị khóa khi nào?",
    "options": {
      "a": "Tòa án yêu cầu",
      "b": "A và B đúng",
      "c": "Có yêu cầu từ cơ quan chức năng",
      "d": "Chủ thể chết hoặc thu hồi CCCD"
    },
    "answer": "b"
  },
  {
    "question": "3. Chuyển đổi số trong y tế mang lại lợi ích nào?",
    "options": {
      "a": "Quản lý hồ sơ sức khỏe điện tử",
      "b": "Tất cả các phương án trên",
      "c": "Khám bệnh từ xa",
      "d": "Giảm tải bệnh viện"
    },
    "answer": "b"
  },
  {
    "question": "4. Người dân có thể thực hiện dịch vụ công nào qua VNeID?",
    "options": {
      "a": "Đăng ký thẻ tín dụng",
      "b": "Cấp lại CCCD",
      "c": "Gửi hàng qua bưu điện",
      "d": "Mua SIM điện thoại"
    },
    "answer": "b"
  },
  {
    "question": "5. Khi sử dụng ứng dụng mobile banking, người dùng nên làm gì để tăng bảo mật?",
    "options": {
      "a": "Lưu thông tin đăng nhập trong tin nhắn",
      "b": "Cài đặt mã PIN mạnh",
      "c": "Thoát ứng dụng sau khi dùng",
      "d": "Không dùng Wi-Fi công cộng"
    },
    "answer": ["b", "c", "d"]
  },
  {
    "question": "6. Ứng dụng công nghệ trong du lịch giúp du khách làm gì?",
    "options": {
      "a": "Mua vé máy bay",
      "b": "Đặt phòng khách sạn",
      "c": "Lập kế hoạch chi tiêu ngân sách quốc gia",
      "d": "Tìm điểm du lịch"
    },
    "answer": ["a", "b", "d"]
  },
  {
    "question": "7. Mã độc tấn công có thể được cài vào thiết bị quân sự bằng cách nào?",
    "options": {
      "a": "Phần mềm giả mạo",
      "b": "USB nhiễm virus",
      "c": "Mạng Wi-Fi công cộng",
      "d": "Tất cả các phương án trên"
    },
    "answer": "d"
  },
  {
    "question": "9. Các hình thức tấn công mạng phổ biến hiện nay là gì?",
    "options": {
      "a": "Tấn công phishing",
      "b": "Tấn công mã độc",
      "c": "Tấn công từ chối dịch vụ (DDoS)",
      "d": "Tấn công trung gian (MITM)",
      "e": "Cả 4 đáp án đều đúng"
    },
    "answer": "e"
  },
  {
    "question": "10. AI hỗ trợ giám sát mạng trong an toàn thông tin chủ yếu bằng cách nào?",
    "options": {
      "a": "Tạo báo cáo thủ công về các sự cố bảo mật trong hệ thống mạng",
      "b": "Phát hiện và ngăn chặn các cuộc tấn công mạng như DDoS hoặc xâm nhập trái phép",
      "c": "Tự động cài đặt bản vá bảo mật trên hệ thống mạng",
      "d": "Dự đoán các sự cố phần cứng của thiết bị mạng"
    },
    "answer": "b"
  },
  {
    "question": "11. Ứng dụng AI nào trong giáo dục giúp cải thiện kỹ năng ngôn ngữ?",
    "options": {
      "a": "Duolingo",
      "b": "Grammarly",
      "c": "All of them",
      "d": "Google Translate"
    },
    "answer": "c"
  },
  {
    "question": "12. AI có thể được tích hợp trong thiết bị nào?",
    "options": {
      "a": "Tivi",
      "b": "Đồng hồ thông minh",
      "c": "Điện thoại",
      "d": "Tất cả đều đúng"
    },
    "answer": "d"
  },
  {
    "question": "13. CPU điều phối hoạt động của các bộ phận nào sau đây?",
    "options": {
      "a": "RAM, ổ cứng, GPU và các thiết bị ngoại vi",
      "b": "Chỉ mạng và âm thanh",
      "c": "Chỉ card đồ họa và camera",
      "d": "Chỉ phần mềm và cảm biến"
    },
    "answer": "a"
  },
  {
    "question": "16. Kỹ thuật nào giúp nâng cao hiệu quả tìm kiếm dữ liệu quân sự?",
    "options": {
      "a": "Dùng tài khoản công cộng truy cập nhanh",
      "b": "Sử dụng từ khóa chính xác và phân loại thông tin theo cấp độ bảo mật",
      "c": "Sao chép tất cả dữ liệu vào ổ cứng",
      "d": "Gửi dữ liệu qua email cá nhân"
    },
    "answer": "b"
  },
  {
    "question": "17. Một điểm yếu của phương pháp kiểm chứng truyền thống là gì?",
    "options": {
      "a": "Không có công cụ trích dẫn",
      "b": "Không sử dụng được trong nghiên cứu",
      "c": "Tốn nhiều thời gian và công sức khi dữ liệu quá lớn",
      "d": "Phải có kết nối Internet"
    },
    "answer": "c"
  },
  {
    "question": "19. Hành vi nào sau đây thuộc quy tắc lành mạnh trên mạng xã hội?",
    "options": {
      "a": "Chia sẻ nội dung kích động, phản cảm",
      "b": "Tạo tài khoản ẩn danh để tránh trách nhiệm pháp lý",
      "c": "Đăng tải tin giả để thu hút tương tác",
      "d": "Ứng xử văn minh, phù hợp giá trị đạo đức và truyền thống dân tộc"
    },
    "answer": "d"
  },
  {
    "question": "20. Khai báo bảo hiểm xã hội trực tuyến giúp người dân và đơn vị thực hiện gì?",
    "options": {
      "a": "Đăng ký, khai báo, đóng BHXH, BHYT, BHTN",
      "b": "Tra cứu điểm thi",
      "c": "Mua bảo hiểm du lịch",
      "d": "Tìm việc làm trực tuyến"
    },
    "answer": "a"
  },
  {
    "question": "22. Khi nhận được phản hồi chưa đạt yêu cầu từ AI, ta nên làm gì?",
    "options": {
      "a": "Bỏ qua và bắt đầu lại hoàn toàn",
      "b": "Lặp lại yêu cầu giống hệt lần đầu",
      "c": "Phân tích kết quả và điều chỉnh yêu cầu",
      "d": "Chuyển sang công cụ khác"
    },
    "answer": "c"
  },
  {
    "question": "24. Để bắt đầu sử dụng NotebookLM, người dùng cần thao tác đầu tiên là gì?",
    "options": {
      "a": "Viết đoạn chat tương tác đầu tiên với hệ thống",
      "b": "Tải tài liệu lên",
      "c": "Truy cập trang Discover",
      "d": "Đăng nhập tài khoản Google và tạo notebook mới"
    },
    "answer": "d"
  },
  {
    "question": "26. Việc dùng thiết bị điện tử sai tư thế lâu dài có thể gây ảnh hưởng gì đến cơ thể?",
    "options": {
      "a": "Rối loạn cơ xương khớp như đau cổ, vai, gáy",
      "b": "Cải thiện tuần hoàn máu",
      "c": "Tăng trí nhớ",
      "d": "Làm chắc xương hơn"
    },
    "answer": "a"
  },
  {
    "question": "1. Công nghệ nào hỗ trợ giám sát, điều hành tài chính công hiệu quả?",
    "options": {
      "a": "Tự động hóa báo cáo ngân sách",
      "b": "Hệ thống Dashboard trực quan",
      "c": "Phân tích dữ liệu thời gian thực",
      "d": "Excel offline"
    },
    "answer": ["a", "b", "c"]
  },
  {
    "question": "2. Ứng dụng công nghệ số nào được sử dụng phổ biến trong ngành ngân hàng?",
    "options": {
      "a": "Chatbot tư vấn tài chính",
      "b": "Blockchain",
      "c": "Ngân hàng số",
      "d": "Trí tuệ nhân tạo"
    },
    "answer": ["a", "b", "c", "d"]
  },
  {
    "question": "3. Những công nghệ nào được xem là cốt lõi trong chuyển đổi số?",
    "options": {
      "a": "Big Data",
      "b": "AR/VR",
      "c": "5G",
      "d": "AI",
      "e": "IoT, Blockchain, Cloud, RPA"
    },
    "answer": ["a", "b", "c", "d", "e"]
  },
  {
    "question": "4. Khi đăng ký tài khoản định danh điện tử, có cần số điện thoại chính chủ không?",
    "options": {
      "a": "Sử dụng một số điện bất kỳ dù không sử dụng, miễn có là được",
      "b": "Không bắt buộc sử dụng số điện thoại chính chủ, nhưng khuyến khích sử dụng vì vấn đề an toàn bảo mật",
      "c": "Sử dụng số điện thoại của những người thân trong gia đình là được",
      "d": "Bắt buộc phải có số điện thoại chính chủ"
    },
    "answer": "b"
  },
  {
    "question": "5. Đâu là nền tảng giao tiếp trực tuyến phổ biến hiện nay?",
    "options": {
      "a": "Microsoft Teams",
      "b": "Zoom",
      "c": "Google Meet",
      "d": "Zalo"
    },
    "answer": ["a", "b", "c", "d"]
  },
  {
    "question": "6. Thông tin đăng ký trên VNeID được bảo mật bằng?",
    "options": {
      "a": "Tự động lưu trữ đám mây",
      "b": "Email xác nhận",
      "c": "Mã OTP và mật khẩu",
      "d": "Mã QR công khai"
    },
    "answer": "c"
  },
  {
    "question": "7. Các hành động nào giúp bảo vệ mạng nội bộ cơ quan?",
    "options": {
      "a": "Cài phần mềm bảo mật đáng tin cậy",
      "b": "Cập nhật hệ thống thường xuyên",
      "c": "Giới hạn quyền truy cập",
      "d": "Cấu hình firewall mạnh"
    },
    "answer": ["a", "b", "c", "d"]
  },
  {
    "question": "8. Yếu tố nào quan trọng nhất trong đào tạo nhân lực an ninh mạng quân sự?",
    "options": {
      "a": "Kỹ năng phân tích mã độc",
      "b": "Tư duy phản biện",
      "c": "Tổng hợp cả kỹ thuật và kỷ luật quân sự",
      "d": "Kiến thức bảo mật"
    },
    "answer": "c"
  },
  {
    "question": "9. Trình tự giám sát an ninh mạng của lực lượng chuyên trách bảo vệ an ninh mạng?",
    "options": {
      "a": "Gửi thông báo -> Triển khai giám sát -> Định kỳ thống kê, báo cáo",
      "b": "Triển khai giám sát -> Định kỳ thống kê, báo cáo -> Gửi thông báo",
      "c": "Định kỳ thống kê, báo cáo -> Gửi thông báo -> Triển khai giám sát"
    },
    "answer": "a"
  },
  {
    "question": "10. AI có vai trò gì trong kiểm tra đầu vào sinh viên?",
    "options": {
      "a": "Dự đoán khả năng thành công",
      "b": "Phân tích bài kiểm tra",
      "c": "Tất cả đúng",
      "d": "Tự động xếp lớp"
    },
    "answer": "c"
  },
  {
    "question": "11. AI hỗ trợ giám sát mạng trong an toàn thông tin chủ yếu bằng cách nào?",
    "options": {
      "a": "Phát hiện và ngăn chặn các cuộc tấn công mạng như DDoS hoặc xâm nhập trái phép",
      "b": "Tạo báo cáo thủ công về các sự cố bảo mật trong hệ thống mạng",
      "c": "Dự đoán các sự cố phần cứng của thiết bị mạng",
      "d": "Tự động cài đặt bản vá bảo mật trên hệ thống mạng"
    },
    "answer": "a"
  },
  {
    "question": "12. AI có thể giúp gì trong ngành y tế?",
    "options": {
      "a": "Chẩn đoán bệnh",
      "b": "Đo huyết áp bằng tay",
      "c": "Pha chế thuốc",
      "d": "Khám bệnh trực tiếp"
    },
    "answer": "a"
  },
  {
    "question": "15. Mức pin lý tưởng khi không sử dụng thiết bị lâu dài là bao nhiêu?",
    "options": {
      "a": "0",
      "b": "10-20%",
      "c": "40-60%",
      "d": "100%"
    },
    "answer": "c"
  },
  {
    "question": "16. Quy trình nào giúp tăng hiệu quả làm việc nhóm trên môi trường số?",
    "options": {
      "a": "Chia sẻ lịch làm việc",
      "b": "Giao nhiệm vụ rõ ràng",
      "c": "Trao đổi kết quả qua email",
      "d": "Sử dụng phần mềm quản lý dự án"
    },
    "answer": "d"
  },
  {
    "question": "19. Khoảng cách năng lực số là gì?",
    "options": {
      "a": "Khác biệt giữa người sử dụng tốt công nghệ số và người không có điều kiện tiếp cận",
      "b": "Sự chênh lệch thu nhập giữa người làm CNTT và người lao động phổ thông",
      "c": "Khác biệt giữa người già và người trẻ",
      "d": "Khoảng cách về mức sống giữa nông thôn và thành thị"
    },
    "answer": "a"
  },
  {
    "question": "20. Tác dụng của xác thực hai lớp là gì?",
    "options": {
      "a": "Tăng tính bảo mật cho tài khoản",
      "b": "Đăng nhập tự động",
      "c": "Dễ ghi nhớ mật khẩu",
      "d": "Tăng tốc truy cập"
    },
    "answer": "a"
  },
  {
    "question": "21. Theo quy định về an toàn thông tin mạng, hành vi nào sau đây là vi phạm?",
    "options": {
      "a": "Không đổi mật khẩu mặc định thiết bị truy cập",
      "b": "Cài phần mềm không rõ nguồn gốc",
      "c": "Dùng chung tài khoản nhiều người",
      "d": "Tất cả các đáp án trên"
    },
    "answer": "d"
  },
  {
    "question": "22. Tại sao nên thường xuyên cập nhật phần mềm?",
    "options": {
      "a": "Khắc phục lỗi bảo mật",
      "b": "Bổ sung tính năng mới",
      "c": "Cả A và B đúng",
      "d": "Làm đẹp giao diện"
    },
    "answer": "c"
  },
  {
    "question": "23. Điểm khác biệt giữa tài khoản định danh điện tử với tài khoản mạng xã hội là:",
    "options": {
      "a": "Có giá trị pháp lý và được luật pháp bảo vệ",
      "b": "Dùng để giao lưu kết bạn",
      "c": "Chủ yếu đăng ảnh, cập nhật trạng thái hàng ngày",
      "d": "Tự do lựa chọn thông tin đăng ký"
    },
    "answer": "a"
  },
  {
    "question": "24. Khi nhận được thông báo có phần mềm độc hại từ trình duyệt, bạn nên:",
    "options": {
      "a": "Bỏ qua thông báo và tiếp tục",
      "b": "Tắt máy tính ngay",
      "c": "Không tải/tắt trang có cảnh báo và quét lại phần mềm bảo mật trên thiết bị",
      "d": "Gửi cảnh báo cho bạn bè"
    },
    "answer": "c"
  },
  {
    "question": "25. Để bảo đảm an ninh mạng khi làm việc từ xa, việc nào sau đây cần thực hiện?",
    "options": {
      "a": "Không sử dụng thiết bị cá nhân để truy cập dữ liệu nội bộ",
      "b": "Sử dụng VPN",
      "c": "Sử dụng thiết bị đã được cấu hình an toàn",
      "d": "Tất cả các đáp án trên"
    },
    "answer": "d"
  },
  {
    "question": "27. Vì sao thông tin cần có nguồn gốc và thẩm quyền rõ ràng?",
    "options": {
      "a": "Để xác minh tính đáng tin cậy của tác giả hoặc tổ chức",
      "b": "Để rút ngắn nội dung",
      "c": "Để dễ chia sẻ lên mạng xã hội",
      "d": "Để tránh bị đạo văn"
    },
    "answer": "a"
  },
  {
    "question": "28. Một giải pháp phổ biến để bảo vệ tài khoản cá nhân là gì?",
    "options": {
      "a": "Đặt mật khẩu mạnh và khác nhau cho các tài khoản",
      "b": "Chia sẻ tài khoản cho bạn bè, gia đình",
      "c": "Lưu mật khẩu trên giấy note để tiện tra cứu",
      "d": "Tắt xác thực hai lớp vì phức tạp"
    },
    "answer": "a"
  },
  {
    "question": "29. Trình quản lý mật khẩu có tác dụng gì?",
    "options": {
      "a": "Hiển thị mật khẩu dưới dạng công khai",
      "b": "Lưu trữ và tự động điền mật khẩu an toàn",
      "c": "Đặt mật khẩu giống nhau cho mọi tài khoản",
      "d": "Tự động thay đổi mật khẩu mỗi tuần"
    },
    "answer": "b"
  },
  {
    "question": "30. Sau khi triển khai giải pháp xử lý sự cố, việc kiểm tra lại hệ thống có mục đích gì?",
    "options": {
      "a": "Để viết báo cáo sự cố",
      "b": "Đảm bảo sự cố đã được xử lý triệt để và hệ thống hoạt động bình thường",
      "c": "Để chuẩn bị đưa vào bảo trì định kỳ",
      "d": "Để đảm bảo hoàn thành quy trình giấy tờ"
    },
    "answer": "b"
  },
  {
    "question": "1. Tài khoản định danh mức 2 dùng để làm gì?",
    "options": {
      "a": "Ký số",
      "b": "Tất cả phương án trên",
      "c": "Nộp thuế",
      "d": "Xác minh giao dịch"
    },
    "answer": "b"
  },
  {
    "question": "2. Chuyển đổi số có ảnh hưởng gì đến lao động?",
    "options": {
      "a": "Thay đổi mô tả công việc",
      "b": "Tạo cơ hội việc làm mới",
      "c": "Cần kỹ năng mới",
      "d": "Tất cả các phương án trên"
    },
    "answer": "d"
  },
  {
    "question": "3. Chuyển đổi số trong chính phủ điện tử bao gồm những yếu tố nào?",
    "options": {
      "a": "Hệ thống giấy tờ thủ công",
      "b": "Dữ liệu mở",
      "c": "Hệ thống tương tác công dân",
      "d": "Cổng dịch vụ công trực tuyến"
    },
    "answer": ["b", "c", "d"]
  },
  {
    "question": "4. Theo Nghị định 42, ứng dụng công nghệ số được yêu cầu triển khai ở những lĩnh vực nào?",
    "options": {
      "a": "Y tế, giáo dục, giao thông, nông nghiệp",
      "b": "Du lịch, thể thao, văn hóa",
      "c": "Giải trí, ẩm thực, thời trang",
      "d": "Công nghiệp ô tô"
    },
    "answer": "a"
  },
  {
    "question": "5. Thông tin trong VNeID do ai quản lý?",
    "options": {
      "a": "Doanh nghiệp viễn thông",
      "b": "Sở Thông tin",
      "c": "Ngân hàng Nhà nước",
      "d": "Bộ Công an"
    },
    "answer": "d"
  },
  {
    "question": "6. Ứng dụng ví điện tử thường được sử dụng để làm gì?",
    "options": {
      "a": "Mua vé xem phim",
      "b": "Xem YouTube không quảng cáo",
      "c": "Nạp tiền điện thoại",
      "d": "Thanh toán hóa đơn"
    },
    "answer": ["a", "c", "d"]
  },
  {
    "question": "7. Đâu là điểm yếu thường bị tấn công trong hệ thống quân sự?",
    "options": {
      "a": "Tất cả đều đúng",
      "b": "Nhân sự chưa được đào tạo",
      "c": "Phần mềm không cập nhật",
      "d": "Thiết bị cũ"
    },
    "answer": "a"
  },
  {
    "question": "8. Tác hại khi lộ thông tin tài khoản mạng xã hội?",
    "options": {
      "a": "Bị mất quyền kiểm soát tài khoản",
      "b": "Bị lợi dụng lừa đảo",
      "c": "Bị giả mạo",
      "d": "Bị đánh cắp danh tính"
    },
    "answer": ["a", "b", "c", "d"]
  },
  {
    "question": "9. Đâu là trách nhiệm của cá nhân trong việc quản lý và sử dụng tài khoản?",
    "options": {
      "a": "Khi bị lộ mật khẩu, hoặc nghi ngờ mật khẩu bị lộ phải đổi ngay mật khẩu, trong trường hợp không thể tự đổi phải làm thủ tục reset mật khẩu",
      "b": "Thiết lập chính sách mật khẩu mạnh cho các tài khoản được cấp theo đúng quy định",
      "c": "Phải cam kết sử dụng tài khoản đúng mục đích công việc, không được lạm dụng quyền được cấp vào các mục đích cá nhân",
      "d": "Sử dụng các ứng dụng CNTT trong công tác rà soát, giám sát việc sử dụng tài khoản đúng mục đích"
    },
    "answer": ["a", "b", "c"]
  },
  {
    "question": "10. AI có thể nhận diện cảm xúc học sinh qua gì?",
    "options": {
      "a": "Giọng nói",
      "b": "Tất cả đúng",
      "c": "Hành vi",
      "d": "Khuôn mặt"
    },
    "answer": "b"
  },
  {
    "question": "11. Trong giáo dục, AI có thể hỗ trợ giáo viên bằng cách nào?",
    "options": {
      "a": "Gợi ý cải tiến phương pháp giảng dạy",
      "b": "Tất cả đều đúng",
      "c": "Chấm điểm bài kiểm tra",
      "d": "Tổng hợp báo cáo học tập"
    },
    "answer": "b"
  },
  {
    "question": "12. AI có thể làm gì trong ngành luật?",
    "options": {
      "a": "Tìm văn bản pháp luật",
      "b": "Tư vấn pháp lý cơ bản",
      "c": "Phân tích hợp đồng",
      "d": "Tất cả các ý trên"
    },
    "answer": "d"
  },
  {
    "question": "13. Ethernet là gì?",
    "options": {
      "a": "Phương thức kết nối mạng có dây dùng cáp RJ45",
      "b": "Ứng dụng giúp tăng sóng mạng",
      "c": "Bộ chuyển đổi tín hiệu Bluetooth",
      "d": "Một dạng Wi-Fi công suất cao"
    },
    "answer": "a"
  },
  {
    "question": "16. Tại sao cần xác minh nguồn và tác giả thông tin?",
    "options": {
      "a": "Để đảm bảo tác giả là người có chuyên môn và đáng tin cậy",
      "b": "Để biết người viết có thường xuyên đăng không",
      "c": "Để biết người viết có nhiều người theo dõi không",
      "d": "Để biết nguồn có nổi tiếng không"
    },
    "answer": "a"
  },
  {
    "question": "17. Vì sao cần xác minh và kiểm chứng thông tin trong thời đại số?",
    "options": {
      "a": "Để tạo ra thêm dữ liệu",
      "b": "Để tránh dùng AI quá nhiều",
      "c": "Để loại bỏ tin giả, nâng cao độ tin cậy và hỗ trợ ra quyết định đúng đắn",
      "d": "Để cập nhật xu hướng công nghệ"
    },
    "answer": "c"
  },
  {
    "question": "21. Hành vi nào sau đây thuộc quy tắc lành mạnh trên mạng xã hội?",
    "options": {
      "a": "Ứng xử văn minh, phù hợp giá trị đạo đức và truyền thống dân tộc",
      "b": "Chia sẻ nội dung kích động, phản cảm",
      "c": "Tạo tài khoản ẩn danh để tránh trách nhiệm pháp lý",
      "d": "Đăng tải tin giả để thu hút tương tác"
    },
    "answer": "a"
  },
  {
    "question": "22. Vì sao nên tinh chỉnh lại slide sau khi Gamma thiết kế tự động?",
    "options": {
      "a": "Để thay đổi chủ đề của bài thuyết trình",
      "b": "Để xóa phần tóm tắt của Gamma",
      "c": "Để phù hợp với văn hóa tổ chức và nhận diện thương hiệu",
      "d": "Để thêm nội dung mới"
    },
    "answer": "c"
  },
  {
    "question": "26. Việc tắt thiết bị và wifi khi không sử dụng có lợi ích chính là gì?",
    "options": {
      "a": "Kéo dài tuổi thọ phần mềm",
      "b": "Giảm nhiễu sóng điện từ",
      "c": "Tiết kiệm năng lượng và giảm phát thải khí nhà kính",
      "d": "Giúp tăng tốc độ mạng"
    },
    "answer": "c"
  },
  {
    "question": "27. Việc dùng thiết bị điện tử sai tư thế lâu dài có thể gây ảnh hưởng gì đến cơ thể?",
    "options": {
      "a": "Cải thiện tuần hoàn máu",
      "b": "Rối loạn cơ xương khớp như đau cổ, vai, gáy",
      "c": "Làm chắc xương hơn",
      "d": "Tăng trí nhớ"
    },
    "answer": "b"
  },
  {
    "question": "29. Tại sao cần dừng hoạt động thiết bị khi phát hiện sự cố nghiêm trọng?",
    "options": {
      "a": "Để đảm bảo an toàn cho người và tài sản",
      "b": "Để chờ chuyên gia đến xử lý",
      "c": "Để không làm ảnh hưởng đến năng suất thiết bị",
      "d": "Để thiết bị nghỉ ngơi"
    },
    "answer": "a"
  },
  {
    "question": "1. Theo quy định của Luật Cư trú, Sổ hộ khẩu, Sổ tạm trú đã được cấp vẫn được sử dụng và có giá trị như giấy tờ, tài liệu xác nhận về cư trú cho đến thời điểm nào sau đây?",
    "options": {
      "a": "Đến ngày 01/07/2022.",
      "b": "Đến hết ngày 31/12/2022.",
      "c": "Đến hết ngày 01/7/2023.",
      "d": "Đến hết ngày 31/12/2023."
    },
    "answer": "b"
  },
  {
    "question": "2. Lợi ích chính của chuyển đổi số trong quản lý tài chính công là gì?",
    "options": {
      "a": "Giảm thất thoát ngân sách",
      "b": "Tự động hóa báo cáo",
      "c": "Gian lận dễ hơn",
      "d": "Tăng tính minh bạch"
    },
    "answer": ["a", "b", "d"]
  },
  {
    "question": "3. Theo Quyết định số 749/QĐ-TTg ngày 03/6/2020 của Thủ tướng Chính phủ, đến năm 2030 trong Chương trình chuyển đổi số Quốc gia đến năm 2025, định hướng đến năm 2030, đặt ra mục tiêu Việt Nam thuộc nhóm bao nhiêu nước dẫn đầu về an toàn, an ninh mạng (GCI)?",
    "options": {
      "a": "40",
      "b": "35",
      "c": "45",
      "d": "30"
    },
    "answer": "d"
  },
  {
    "question": "4. Lợi ích của lớp học thông minh là gì?",
    "options": {
      "a": "Tiết kiệm thời gian",
      "b": "Học tập cá nhân hóa",
      "c": "Tất cả các đáp án trên",
      "d": "Tăng cường tương tác"
    },
    "answer": "c"
  },
  {
    "question": "5. Sau khi tải ứng dụng VNeID về điện thoại, để đăng ký sử dụng tài khoản định danh điện tử, cần có giấy tờ gì?",
    "options": {
      "a": "Không cần giấy tờ gì.",
      "b": "Thẻ Căn cước công dân gắn chip.",
      "c": "Thẻ Căn cước công dân mã vạch hoặc gắn chip.",
      "d": "CMND 9 số."
    },
    "answer": "b"
  },
  {
    "question": "6. Công nghệ nào giúp học sinh học lập trình từ sớm theo cách trực quan?",
    "options": {
      "a": "Java",
      "b": "Pascal",
      "c": "Python nâng cao",
      "d": "Scratch"
    },
    "answer": "d"
  },
  {
    "question": "7. Bảo mật cấp quân sự yêu cầu gì trong truyền dữ liệu?",
    "options": {
      "a": "Thiết bị chuyên dụng",
      "b": "Không truyền qua mạng công cộng",
      "c": "Mã hóa đầu-cuối",
      "d": "Tất cả các đáp án trên"
    },
    "answer": "d"
  },
  {
    "question": "8. Làm gì khi bị lộ mật khẩu email?",
    "options": {
      "a": "Đổi mật khẩu ngay",
      "b": "Báo cáo nhà cung cấp",
      "c": "Kích hoạt xác thực hai lớp nếu chưa bật",
      "d": "Tắt các thiết bị đã đăng nhập"
    },
    "answer": ["a", "b", "c", "d"]
  },
  {
    "question": "9. Tấn công phishing thường diễn ra dưới những hình thức nào?",
    "options": {
      "a": "Tin nhắn SMS lừa đảo",
      "b": "Website giả mạo",
      "c": "Giả danh người thân trên mạng xã hội",
      "d": "Email giả mạo"
    },
    "answer": ["a", "b", "c", "d"]
  },
  {
    "question": "12. Khi tài khoản bị khóa, bạn có thể mở lại bằng cách nào?",
    "options": {
      "a": "Liên hệ qua tổng đài",
      "b": "Làm lại hồ sơ định danh theo quy định",
      "c": "Đến cơ quan công an yêu cầu mở",
      "d": "Tất cả các đáp án trên"
    },
    "answer": "d"
  },
  {
    "question": "13. CPU trong thiết bị thông minh có vai trò gì?",
    "options": {
      "a": "Điều phối toàn bộ hoạt động của thiết bị",
      "b": "Lưu trữ dữ liệu",
      "c": "Quản lý cảm biến",
      "d": "Xử lý hình ảnh"
    },
    "answer": "a"
  },
  {
    "question": "14. Mã hóa dữ liệu giúp làm gì?",
    "options": {
      "a": "Tăng tốc độ truyền tải",
      "b": "Bảo vệ thông tin khỏi truy cập trái phép",
      "c": "Giảm dung lượng lưu trữ",
      "d": "Dễ khôi phục dữ liệu nếu bị mất"
    },
    "answer": "b"
  },
  {
    "question": "15. Yếu tố nào quyết định việc lựa chọn phần mềm quản lý doanh nghiệp?",
    "options": {
      "a": "Khả năng mở rộng",
      "b": "Giá thành",
      "c": "Giao diện dễ sử dụng",
      "d": "Có nhiều tính năng"
    },
    "answer": "a"
  },
  {
    "question": "16. Phân loại quyền truy cập dữ liệu quân sự nhằm mục đích gì?",
    "options": {
      "a": "Đảm bảo mức độ bảo mật",
      "b": "Tối ưu bộ nhớ",
      "c": "Tiết kiệm chi phí",
      "d": "Dễ quản lý thiết bị"
    },
    "answer": "a"
  },
  {
    "question": "17. Dấu hiệu nào thường gặp của email lừa đảo?",
    "options": {
      "a": "Đính kèm file lạ",
      "b": "Đường link lạ",
      "c": "Người gửi không rõ ràng",
      "d": "Nội dung cấp bách, khẩn cấp"
    },
    "answer": ["a", "b", "c", "d"]
  },
  {
    "question": "18. Ứng dụng công nghệ số nào phổ biến trong lĩnh vực y tế hiện nay?",
    "options": {
      "a": "Quản lý hồ sơ sức khỏe điện tử",
      "b": "Đặt lịch khám, tư vấn từ xa",
      "c": "Cảnh báo dịch bệnh qua ứng dụng",
      "d": "Tất cả các đáp án trên"
    },
    "answer": "d"
  },
  {
    "question": "19. Lợi ích chính của việc khai báo trực tuyến là gì?",
    "options": {
      "a": "Giảm thủ tục",
      "b": "Tiết kiệm thời gian",
      "c": "Tăng số lượng người dùng Internet",
      "d": "Hạn chế giao tiếp xã hội"
    },
    "answer": ["a", "b"]
  },
  {
    "question": "21. Một giải pháp giúp tăng bảo mật tài khoản trực tuyến là gì?",
    "options": {
      "a": "Đặt mật khẩu mạnh",
      "b": "Thiết lập xác thực hai lớp",
      "c": "Không chia sẻ thông tin đăng nhập",
      "d": "Tất cả các đáp án trên"
    },
    "answer": "d"
  },
  {
    "question": "22. Khi nghi ngờ bị lộ dữ liệu cá nhân, bạn nên làm gì?",
    "options": {
      "a": "Thay đổi mật khẩu",
      "b": "Báo cáo quản trị viên",
      "c": "Tắt thiết bị",
      "d": "Xóa tài khoản"
    },
    "answer": ["a", "b"]
  },
  {
    "question": "23. Tại sao không nên sử dụng Wi-Fi công cộng không bảo mật?",
    "options": {
      "a": "Dễ bị tấn công giả mạo (fake AP)",
      "b": "Không có mã hóa dữ liệu truyền",
      "c": "Tin tặc có thể chặn thông tin truyền",
      "d": "Dễ bị nghe lén dữ liệu"
    },
    "answer": ["a", "b", "c", "d"]
  },
  {
    "question": "1. Hệ thống nào giúp kết nối, chia sẻ dữ liệu giữa các cơ quan nhà nước?",
    "options": {
      "a": "Hệ thống dữ liệu dùng chung",
      "b": "Trung tâm dữ liệu quốc gia",
      "c": "Nền tảng tích hợp chia sẻ dữ liệu (NDXP)",
      "d": "Trục liên thông quốc gia"
    },
    "answer": "c"
  },
  {
    "question": "2. Mở khóa tài khoản định danh điện tử của công dân khi nào?",
    "options": {
      "a": "Hệ thống định danh và xác thực điện tử tự động mở khóa ngay tài khoản khi các căn cứ khóa tự động đã hết",
      "b": "Khi công dân có yêu cầu",
      "c": "Cơ quan tiến hành tố tụng, cơ quan chức năng có thẩm quyền có yêu cầu"
    },
    "answer": ["a", "c"]
  },
  {
    "question": "3. Giấy tờ nào cần mang khi đăng ký tài khoản?",
    "options": {
      "a": "Giấy khai sinh",
      "b": "CCCD gắn chip",
      "c": "CMND",
      "d": "Sổ hộ khẩu"
    },
    "answer": "b"
  },
  {
    "question": "4. Nghị định 57 tạo điều kiện doanh nghiệp đầu tư công nghệ số vào nông thôn thông qua hình thức nào?",
    "options": {
      "a": "Hỗ trợ hạ tầng công nghệ",
      "b": "Ưu đãi thuế",
      "c": "Ưu đãi tín dụng",
      "d": "Tất cả các đáp án trên"
    },
    "answer": "d"
  },
  {
    "question": "5. Chức năng chính của ứng dụng chăm sóc sức khỏe số là gì?",
    "options": {
      "a": "Theo dõi lịch tiêm chủng",
      "b": "Đặt lịch khám bệnh",
      "c": "Tư vấn sức khỏe từ xa"
    },
    "answer": ["a", "b", "c"]
  },
  {
    "question": "6. Đâu là lợi ích của việc học trên nền tảng học trực tuyến (LMS)?",
    "options": {
      "a": "Học mọi lúc mọi nơi",
      "b": "Tất cả các đáp án trên",
      "c": "Quản lý tiến độ học tập",
      "d": "Tiết kiệm chi phí"
    },
    "answer": "b"
  },
  {
    "question": "7. Hệ thống mạng quân sự cần được xây dựng như thế nào để đảm bảo an toàn?",
    "options": {
      "a": "Tất cả đều đúng",
      "b": "Cách ly với Internet",
      "c": "Phân quyền truy cập chặt chẽ",
      "d": "Mã hóa thông tin"
    },
    "answer": "a"
  },
  {
    "question": "9. Nguy cơ nào đến từ việc dùng phần mềm bẻ khóa?",
    "options": {
      "a": "Dễ bị gài mã độc",
      "b": "Có thể bị tấn công qua backdoor",
      "c": "Vi phạm bản quyền",
      "d": "Mất dữ liệu cá nhân"
    },
    "answer": ["a", "b", "c", "d"]
  },
  {
    "question": "10. AI có thể phát hiện học sinh gặp khó khăn học tập qua đâu?",
    "options": {
      "a": "Tất cả đúng",
      "b": "Kết quả học tập",
      "c": "Mức độ tương tác",
      "d": "Thái độ học tập"
    },
    "answer": "a"
  },
  {
    "question": "11. AI có thể hỗ trợ như thế nào trong việc kê đơn thuốc?",
    "options": {
      "a": "Đề xuất thuốc phù hợp",
      "b": "Tất cả đều đúng",
      "c": "Tự động kê đơn",
      "d": "Kiểm tra tương tác thuốc"
    },
    "answer": "b"
  },
  {
    "question": "12. Trong thương mại điện tử, AI giúp gì?",
    "options": {
      "a": "Đóng gói hàng hóa",
      "b": "Giao hàng tận nơi",
      "c": "Gợi ý sản phẩm",
      "d": "Tăng thuế"
    },
    "answer": "c"
  },
  {
    "question": "13. Điều chỉnh độ sáng màn hình hợp lý giúp ích điều gì?",
    "options": {
      "a": "Làm màn hình sáng đẹp hơn",
      "b": "Bảo vệ mắt và tiết kiệm pin",
      "c": "Giúp thiết bị tải nhanh hơn",
      "d": "Tăng khả năng chống nước của thiết bị"
    },
    "answer": "b"
  },
  {
    "question": "14. Mạng di động 3G, 4G, 5G có đặc điểm gì nổi bật?",
    "options": {
      "a": "Luôn nhanh hơn Wi-Fi",
      "b": "Chỉ dùng được khi có Wi-Fi",
      "c": "Chỉ áp dụng cho máy tính bàn",
      "d": "Cho phép truy cập Internet mọi nơi có sóng điện thoại"
    },
    "answer": "d"
  },
  {
    "question": "15. Ưu điểm nổi bật của SSD so với HDD là gì?",
    "options": {
      "a": "Giá rẻ hơn",
      "b": "Dung lượng lớn hơn",
      "c": "Tốc độ truy xuất nhanh hơn",
      "d": "Có thể bị nhiễm từ"
    },
    "answer": "c"
  },
  {
    "question": "16. Một điểm yếu của phương pháp kiểm chứng truyền thống là gì?",
    "options": {
      "a": "Không có công cụ trích dẫn",
      "b": "Không sử dụng được trong nghiên cứu",
      "c": "Tốn nhiều thời gian và công sức khi dữ liệu quá lớn",
      "d": "Phải có kết nối Internet"
    },
    "answer": "c"
  },
  {
    "question": "18. Một trong những thủ đoạn lừa đảo phổ biến là gì?",
    "options": {
      "a": "Cấp giấy chứng nhận không giá trị",
      "b": "Giả danh sĩ quan quân đội để đặt hàng số lượng lớn",
      "c": "Gửi thư mời từ các cơ quan nhà nước",
      "d": "Tổ chức hội thảo công khai"
    },
    "answer": "b"
  },
  {
    "question": "19. Thông tin nào đồng chí không nắm quyền kiểm soát trên mạng xã hội?",
    "options": {
      "a": "Họ tên, số điện thoại",
      "b": "Bình luận, đánh giá từ người khác về nội dung đồng chí chia sẻ",
      "c": "Cài đặt hiển thị trên tài khoản",
      "d": "Hình ảnh cá nhân đồng chí tự đăng"
    },
    "answer": "b"
  },
  {
    "question": "21. “Danh tính số” là gì?",
    "options": {
      "a": "Hình ảnh đại diện của cá nhân trên Internet, được hình thành qua hành vi, thông tin và tương tác",
      "b": "Tài khoản đăng nhập mạng xã hội",
      "c": "Chữ ký số cá nhân trong các văn bản điện tử",
      "d": "Mã số định danh cá nhân trên CCCD"
    },
    "answer": "a"
  },
  {
    "question": "26. Yếu tố nào sau đây KHÔNG nên xuất hiện trong mật khẩu?",
    "options": {
      "a": "Chữ hoa và ký tự đặc biệt",
      "b": "Số và chữ thường",
      "c": "Ngày sinh hoặc số điện thoại cá nhân",
      "d": "Ký tự đặc biệt và độ dài đủ"
    },
    "answer": "c"
  },
  {
    "question": "1. Tài khoản định danh điện tử được kích hoạt thế nào?",
    "options": {
      "a": "Tại công an cấp xã",
      "b": "Tự động từ CCCD",
      "c": "Qua ứng dụng VNeID",
      "d": "Qua SMS"
    },
    "answer": "c"
  },
  {
    "question": "2. Các trở ngại chính trong chuyển đổi số tài chính là gì?",
    "options": {
      "a": "Chi phí đầu tư cao",
      "b": "Được hỗ trợ nhiều ngân sách",
      "c": "Thiếu nhân lực",
      "d": "Ngại thay đổi quy trình"
    },
    "answer": ["a", "c", "d"]
  },
  {
    "question": "3. Điều kiện cài đặt VNeID là gì?",
    "options": {
      "a": "SIM chính chủ",
      "b": "Điện thoại thông minh",
      "c": "Cả hai",
      "d": "Không cần gì"
    },
    "answer": "c"
  },
  {
    "question": "4. Thiết bị nào sau đây thường được dùng trong huấn luyện mô phỏng bắn súng?",
    "options": {
      "a": "Kính thực tế ảo (VR)",
      "b": "Máy chiếu",
      "c": "Mô hình 3D",
      "d": "Mô hình giấy"
    },
    "answer": "a"
  },
  {
    "question": "6. Điều kiện cài ứng dụng VNeID?",
    "options": {
      "a": "Chỉ hỗ trợ iOS.",
      "b": "Chỉ cần có điện thoại.",
      "c": "Chỉ hỗ trợ Android.",
      "d": "Smartphone có kết nối mạng, Android ≥5.0, iOS ≥13."
    },
    "answer": "d"
  },
  {
    "question": "7. Mạng botnet thường được dùng để làm gì?",
    "options": {
      "a": "Phát tán mã độc",
      "b": "Đào tiền ảo trái phép",
      "c": "Gửi spam",
      "d": "Tấn công DDoS"
    },
    "answer": ["a", "b", "c", "d"]
  },
  {
    "question": "9. Yêu cầu đối với mật khẩu mạnh là?",
    "options": {
      "a": "Độ dài tối thiểu là 6 ký tự",
      "b": "Mật khẩu bao gồm chữ, số, ký tự đặc biệt",
      "c": "Mật khẩu bao gồm chữ hoa, chữ thường, số",
      "d": "Độ dài tối thiểu là 8 ký tự"
    },
    "answer": ["b", "c", "d"]
  },
  {
    "question": "10. AI hỗ trợ gì trong lĩnh vực nghiên cứu y học?",
    "options": {
      "a": "Phát hiện mẫu bệnh lý",
      "b": "Phân tích dữ liệu lâm sàng",
      "c": "Hỗ trợ phát triển thuốc mới",
      "d": "Tất cả đều đúng"
    },
    "answer": "d"
  },
  {
    "question": "11. Ứng dụng AI nào phù hợp trong hệ thống phòng không?",
    "options": {
      "a": "Ra quyết định phóng tên lửa",
      "b": "Dự đoán đường bay",
      "c": "Hỗ trợ phân tích radar",
      "d": "Tự động phân loại mục tiêu bay"
    },
    "answer": ["a", "b", "c", "d"]
  },
  {
    "question": "12. Siêu AI (Artificial Superintelligence) là gì?",
    "options": {
      "a": "AI chỉ làm việc theo lập trình sẵn",
      "b": "AI chỉ thực hiện được các tác vụ đơn giản",
      "c": "AI chỉ hoạt động trong các trò chơi điện tử",
      "d": "AI vượt qua trí tuệ con người trong mọi lĩnh vực"
    },
    "answer": "d"
  },
  {
    "question": "18. Kỹ thuật nào giúp nâng cao hiệu quả tìm kiếm dữ liệu quân sự?",
    "options": {
      "a": "Gửi dữ liệu qua email cá nhân",
      "b": "Sao chép tất cả dữ liệu vào ổ cứng",
      "c": "Sử dụng từ khóa chính xác và phân loại thông tin theo cấp độ bảo mật",
      "d": "Dùng tài khoản công cộng truy cập nhanh"
    },
    "answer": "c"
  },
  {
    "question": "21. Hành động nào sau đây giúp kiểm soát và xử lý sự cố truy cập dữ liệu?",
    "options": {
      "a": "Chia sẻ qua nhiều nền tảng",
      "b": "Ghi lại lịch sử truy cập",
      "c": "Cấp quyền không giới hạn",
      "d": "Sử dụng mạng công cộng"
    },
    "answer": "b"
  },
  {
    "question": "24. Một trong các hậu quả pháp lý của hành vi vi phạm bản quyền là gì?",
    "options": {
      "a": "Được yêu cầu tạo tác phẩm thay thế",
      "b": "Phải xin lỗi công khai trên mạng xã hội",
      "c": "Bị kiện bởi chủ sở hữu bản quyền",
      "d": "Bị chặn đăng bình luận"
    },
    "answer": "c"
  },
  {
    "question": "1. Công nghệ nào hỗ trợ giám sát, điều hành tài chính công hiệu quả?",
    "options": {
      "a": "Tự động hóa báo cáo ngân sách",
      "b": "Hệ thống Dashboard trực quan",
      "c": "Phân tích dữ liệu thời gian thực",
      "d": "Excel offline"
    },
    "answer": ["a", "b", "c"]
  },
  {
    "question": "4. Khi đăng ký tài khoản định danh điện tử, có cần số điện thoại chính chủ không?",
    "options": {
      "a": "Sử dụng một số điện bất kỳ dù không sử dụng, miễn có là được",
      "b": "Không bắt buộc sử dụng số điện thoại chính chủ, nhưng khuyến khích sử dụng vì vấn đề an toàn bảo mật",
      "c": "Sử dụng số điện thoại của những người thân trong gia đình là được",
      "d": "Bắt buộc phải có số điện thoại chính chủ"
    },
    "answer": "b"
  },
  {
    "question": "1. Tổ chức có thể áp dụng chuyển đổi số vào những hoạt động nào?",
    "options": {
      "a": "Chăm sóc khách hàng",
      "b": "Nghiên cứu thị trường",
      "c": "Bán hàng",
      "d": "Quản lý rủi ro",
      "e": "Tất cả đáp án trên"
    },
    "answer": "e"
  },
  {
    "question": "2. Lợi ích chuyển đổi số trong giáo dục và đào tạo?",
    "options": {
      "a": "Tạo môi trường giáo dục linh động và truy cập tài liệu học tập mọi lúc, mọi nơi",
      "b": "Tất cả các đáp án",
      "c": "Nâng cao chất lượng giáo dục và giảm chi phí đào tạo",
      "d": "Tăng tính tương tác và trải nghiệm thực tế"
    },
    "answer": "b"
  },
  {
    "question": "3. Theo quy định tại Luật Căn cước công dân năm 2014, công dân Việt Nam từ bao nhiêu tuổi được cấp thẻ Căn cước công dân?",
    "options": {
      "a": "Từ đủ 14 tuổi.",
      "b": "Từ đủ 18 tuổi.",
      "c": "Từ đủ 16 tuổi.",
      "d": "Từ đủ 15 tuổi."
    },
    "answer": "a"
  },
  {
    "question": "4. VNeID có thể thay thế cho loại giấy tờ nào?",
    "options": {
      "a": "Bằng lái xe",
      "b": "Giấy khai sinh",
      "c": "CMND/CCCD",
      "d": "Hộ khẩu"
    },
    "answer": "c"
  },
  {
    "question": "5. Ứng dụng nào có thể tích hợp VNeID?",
    "options": {
      "a": "Tiktok",
      "b": "Messenger",
      "c": "Facebook",
      "d": "Cổng DVC Quốc gia"
    },
    "answer": "d"
  },
  {
    "question": "6. Công nghệ Blockchain có thể hỗ trợ quân đội ở lĩnh vực nào?",
    "options": {
      "a": "Quản lý chuỗi cung ứng",
      "b": "Tất cả các đáp án trên",
      "c": "Lưu trữ hồ sơ",
      "d": "Bảo mật thông tin"
    },
    "answer": "b"
  },
  {
    "question": "7. Giải pháp phổ biến nhất để bảo vệ tài khoản cá nhân là gì?",
    "options": {
      "a": "Sử dụng xác thực hai yếu tố (2FA)",
      "b": "Cài phần mềm gián điệp",
      "c": "Dùng mật khẩu đơn giản",
      "d": "Không sử dụng mạng"
    },
    "answer": "a"
  },
  {
    "question": "8. Để bảo vệ an ninh mạng, thì môi trường vận hành của hệ thống thông tin quan trọng về an ninh quốc gia phải đáp ứng những yêu cầu nào?",
    "options": {
      "a": "Loại bỏ hoặc tắt các tính năng, phần mềm tiện ích không sử dụng, không cần thiết trên hệ thống thông tin",
      "b": "Cả A, B và C đều đúng",
      "c": "Tách biệt với các môi trường phát triển, kiểm tra và thử nghiệm",
      "d": "Áp dụng các giải pháp bảo đảm an toàn thông tin. Không cài đặt các công cụ, phương tiện phát triển ứng dụng"
    },
    "answer": "b"
  },
  {
    "question": "9. Các kỹ thuật tấn công mạng hiện đại thường sử dụng?",
    "options": {
      "a": "Tấn công bằng mã độc tàng hình",
      "b": "Tấn công bằng khai thác 0-day",
      "c": "Spear phishing",
      "d": "Tấn công qua AI",
      "e": "Cả 4 đáp án đều đúng"
    },
    "answer": "e"
  },
  {
    "question": "11. AI hỗ trợ gì trong phòng chống tin giả?",
    "options": {
      "a": "Tự động gắn cảnh báo",
      "b": "Kiểm tra nguồn gốc",
      "c": "Xác thực thông tin theo thời gian thực",
      "d": "Phân tích nội dung",
      "e": "Cả 4 đáp án trên"
    },
    "answer": "e"
  },
  {
    "question": "12. Các nền tảng học tập sử dụng AI thường có tính năng nào?",
    "options": {
      "a": "Phân tích kết quả học tập",
      "b": "Tất cả đúng",
      "c": "Gợi ý nội dung theo tiến độ",
      "d": "Cá nhân hóa bài học"
    },
    "answer": "b"
  },
  {
    "question": "13. Đâu là một tính năng sao lưu hệ thống toàn bộ dành riêng cho máy Mac?",
    "options": {
      "a": "Apple ID Sync",
      "b": "Time Machine",
      "c": "System Restore",
      "d": "File History"
    },
    "answer": "b"
  },
  {
    "question": "15. Mạng di động 3G, 4G, 5G có đặc điểm gì nổi bật?",
    "options": {
      "a": "Chỉ dùng được khi có Wi-Fi",
      "b": "Luôn nhanh hơn Wi-Fi",
      "c": "Cho phép truy cập Internet mọi nơi có sóng điện thoại",
      "d": "Chỉ áp dụng cho máy tính bàn"
    },
    "answer": "c"
  },
  {
    "question": "17. Một trong những thủ đoạn lừa đảo phổ biến là gì?",
    "options": {
      "a": "Gửi thư mời từ các cơ quan nhà nước",
      "b": "Cấp giấy chứng nhận không giá trị",
      "c": "Giả danh sĩ quan quân đội để đặt hàng số lượng lớn",
      "d": "Tổ chức hội thảo công khai"
    },
    "answer": "c"
  },
  {
    "question": "24. NotebookLM là công cụ do tổ chức nào phát triển?",
    "options": {
      "a": "Microsoft",
      "b": "Google",
      "c": "IBM",
      "d": "OpenAI"
    },
    "answer": "b"
  },
  {
    "question": "25. Mật khẩu mạnh nên có ít nhất bao nhiêu ký tự?",
    "options": {
      "a": "12 ký tự",
      "b": "8 ký tự",
      "c": "6 ký tự",
      "d": "16 ký tự"
    },
    "answer": "a"
  },
  {
    "question": "26. Hội chứng thị giác màn hình thường xảy ra khi dùng thiết bị trên bao lâu mỗi ngày?",
    "options": {
      "a": "5 giờ",
      "b": "3 giờ",
      "c": "1 giờ",
      "d": "30 phút"
    },
    "answer": "b"
  }
];