import type { Village } from "./types";

export const villages: Village[] = [
  {
    id: "konoha",
    name: "Làng Lá Ẩn — Konohagakure",
    nameJP: "木ノ葉隠れの里",
    slug: "konohagakure",
    country: "Đất nước Lửa",
    kage: "Hokage",
    symbol: "Lá cây",
    description:
      "Konohagakure là một trong Năm Đại Làng Nhẫn và là ngôi làng mạnh nhất trong thế giới Naruto. Đây là quê hương của nhân vật chính Naruto Uzumaki.",
    history:
      "Konohagakure được thành lập bởi hai shinobi huyền thoại là Hashirama Senju và Madara Uchiha sau khi họ đồng ý hợp nhất hai gia tộc Senju và Uchiha để chấm dứt những cuộc chiến không hồi kết. Hashirama trở thành Hokage đầu tiên, đặt nền móng cho làng trở thành biểu tượng của hòa bình. Tuy nhiên, Madara không hài lòng với hướng đi của làng và rời đi, tạo ra kẻ thù lớn nhất của Konoha. Qua nhiều thế hệ Hokage, Konoha đã chống chọi với nhiều mối đe dọa: cuộc tấn công của Chín Vĩ Hồ Ly do Madara điều khiển, Thế chiến Ninja lần 2 và 3, sự xâm lược của Ngôi làng Âm Thanh và Làng Cát trong kỳ thi Chunin, và cuộc tấn công của Pain. Mỗi thử thách đều định hình tinh thần bất khuất của ngôi làng.",
    notableNinja: [
      "Naruto Uzumaki",
      "Sasuke Uchiha",
      "Sakura Haruno",
      "Kakashi Hatake",
      "Minato Namikaze",
      "Hashirama Senju",
      "Tsunade",
      "Jiraiya",
      "Rock Lee",
      "Neji Hyuga",
    ],
    tags: ["Ngũ Đại Làng", "Đất Lửa", "Hokage"],
  },
  {
    id: "suna",
    name: "Làng Cát Ẩn — Sunagakure",
    nameJP: "砂隠れの里",
    slug: "sunagakure",
    country: "Đất nước Gió",
    kage: "Kazekage",
    symbol: "Hộp sọ cát",
    description:
      "Sunagakure nằm giữa sa mạc khắc nghiệt của Đất nước Gió. Là ngôi làng chuyên về ninja cát và con rối, quê hương của Gaara — người sau này trở thành Kazekage đệ ngũ.",
    history:
      "Sunagakure nổi tiếng với kỹ thuật Ninjutsu cát và nghệ thuật chiến đấu bằng con rối. Làng đã trải qua giai đoạn khủng hoảng khi Đất nước Gió cắt giảm ngân sách quân sự, buộc làng hợp tác với Orochimaru trong âm mưu xâm lược Konoha — một sai lầm mà Kazekage đệ tứ Rasa phải trả giá bằng mạng sống. Sau sự kiện đó, Gaara — người từng bị cả làng sợ hãi và khinh thường — đã vươn lên trở thành Kazekage đệ ngũ được kính trọng, định nghĩa lại tinh thần của ngôi làng.",
    notableNinja: ["Gaara", "Temari", "Kankuro", "Chiyo", "Sasori", "Rasa"],
    tags: ["Ngũ Đại Làng", "Đất Gió", "Kazekage", "Sa mạc"],
  },
  {
    id: "kiri",
    name: "Làng Sương Ẩn — Kirigakure",
    nameJP: "霧隠れの里",
    slug: "kirigakure",
    country: "Đất nước Nước",
    kage: "Mizukage",
    symbol: "Sóng nước",
    description:
      "Kirigakure, mệnh danh là 'Làng của Sát Nhân', nổi tiếng với những ninja tàn nhẫn và kỳ thi tốt nghiệp khét tiếng — nơi học viên phải giết nhau để qua môn.",
    history:
      "Kirigakure từng trải qua một thời kỳ đen tối dưới sự cai trị của Mizukage đệ tứ Yagura, người bị Obito Uchiha điều khiển bí mật. Trong giai đoạn này, làng đàn áp và tàn sát những người mang Kekkei Genkai. Nhiều người sở hữu năng lực đặc biệt bị buộc phải trốn chạy hoặc bị tiêu diệt. Zabuza Momochi và Haku là những nạn nhân của thời kỳ đó. Sau khi Yagura mất, làng dần hồi phục dưới sự lãnh đạo của Mizukage đệ ngũ Mei Terumi, người chủ trương cởi mở và hòa giải.",
    notableNinja: ["Kisame Hoshigaki", "Zabuza Momochi", "Haku", "Mei Terumi", "Suigetsu Hozuki"],
    tags: ["Ngũ Đại Làng", "Đất Nước", "Mizukage", "Bảy Kiếm Thủ Sương"],
  },
  {
    id: "kumo",
    name: "Làng Mây Ẩn — Kumogakure",
    nameJP: "雲隠れの里",
    slug: "kumogakure",
    country: "Đất nước Sét",
    kage: "Raikage",
    symbol: "Biểu tượng mây",
    description:
      "Kumogakure nằm trên đỉnh núi cao phủ mây của Đất nước Sét. Làng nổi tiếng với sức mạnh thể chất vượt trội và kỹ thuật sử dụng Chakra Sét.",
    history:
      "Kumogakure được biết đến qua những xung đột lịch sử với Konoha, đặc biệt là vụ bắt cóc Hinata Hyuga để đánh cắp Byakugan — vụ việc được giải quyết bởi Hiashi Hyuga khi ông hạ sát đặc sứ Kumo. Làng cũng là nơi nuôi dưỡng Killer Bee — Jinchuriki của Bát Vĩ và người thầy của A. Raikage đệ tứ A là một trong những Kage mạnh nhất, đã dẫn dắt Kumogakure trong Thế chiến Ninja đệ tứ với vai trò Tổng tư lệnh Liên minh.",
    notableNinja: ["A (Raikage đệ tứ)", "Killer Bee", "Darui", "C", "Samui"],
    tags: ["Ngũ Đại Làng", "Đất Sét", "Raikage", "Jinchuriki"],
  },
  {
    id: "iwa",
    name: "Làng Đá Ẩn — Iwagakure",
    nameJP: "岩隠れの里",
    slug: "iwagakure",
    country: "Đất nước Đất",
    kage: "Tsuchikage",
    symbol: "Biểu tượng đá",
    description:
      "Iwagakure nằm trong lòng núi đá của Đất nước Đất. Làng nổi tiếng với Jinton (Phóng thể — Dust Release) và những ninja có tinh thần chiến đấu kiên cường như đá.",
    history:
      "Iwagakure từng là kẻ thù không đội trời chung của Konoha, đặc biệt trong Thế chiến Ninja đệ ba khi Minato Namikaze — Hoàng Sắc Chớp — một mình đánh bại hàng nghìn ninja Iwa, khiến Tsuchikage Onoki phải ký hòa ước. Tsuchikage đệ tam Onoki là một trong những Kage lâu đời nhất, người từng được đào tạo bởi Madara Uchiha gián tiếp và đã sống đủ lâu để tham chiến trong Thế chiến Ninja đệ tứ dù tuổi cao.",
    notableNinja: ["Onoki (Tsuchikage đệ tam)", "Kitsuchi", "Han", "Roshi", "Deidara"],
    tags: ["Ngũ Đại Làng", "Đất Đất", "Tsuchikage", "Jinton"],
  },
  {
    id: "ame",
    name: "Làng Mưa Ẩn — Amegakure",
    nameJP: "雨隠れの里",
    slug: "amegakure",
    country: "Đất nước Mưa",
    kage: "Không chính thức",
    symbol: "Giọt mưa",
    description:
      "Amegakure là một làng nhỏ nhưng bí ẩn, nằm giữa những cơn mưa dai dẳng. Đây là nơi Pain và Konan xây dựng đế chế của họ với tham vọng mang lại hòa bình bằng nỗi đau.",
    history:
      "Amegakure là chiến trường của nhiều cuộc xung đột giữa các làng lớn. Nagato, Konan và Yahiko — ba trẻ mồ côi lớn lên trong chiến tranh tại đây — được Jiraiya dạy Ninjutsu với hy vọng họ sẽ trở thành những sứ giả hòa bình. Sau cái chết bi thảm của Yahiko, Nagato trở thành Pain và nắm quyền kiểm soát Amegakure với bàn tay sắt, biến nơi đây thành căn cứ của Akatsuki. Ngôi làng trở thành biểu tượng của nỗi đau chiến tranh và sự tìm kiếm hòa bình theo cách cực đoan.",
    notableNinja: ["Pain (Nagato)", "Konan", "Yahiko"],
    tags: ["Làng Nhỏ", "Akatsuki", "Đất Mưa"],
  },
  {
    id: "oto",
    name: "Làng Âm Thanh Ẩn — Otogakure",
    nameJP: "音隠れの里",
    slug: "otogakure",
    country: "Đất nước Âm Thanh",
    kage: "Orochimaru",
    symbol: "Âm ký",
    description:
      "Otogakure là ngôi làng do Orochimaru thành lập sau khi rời Konoha. Ẩn náu trong nhiều hang động bí mật, đây là nơi Orochimaru thực hiện những thí nghiệm tàn bạo để truy cầu sự bất tử.",
    history:
      "Otogakure không phải là ngôi làng theo nghĩa truyền thống — nó là tổ chức do Orochimaru xây dựng với mục đích thu thập ninja mạnh cho thí nghiệm và chuẩn bị lực lượng xâm lược Konoha. Orochimaru đã chiêu mộ những cá nhân có tài năng đặc biệt bằng lời hứa về sức mạnh, trong đó có Kimimaro và nhóm Tứ Thanh Âm. Sasuke Uchiha cũng từng đến đây để học hỏi sức mạnh từ Orochimaru, một quyết định định hình số phận của anh trong nhiều năm.",
    notableNinja: ["Orochimaru", "Kabuto Yakushi", "Kimimaro", "Sasuke Uchiha (tạm thời)"],
    tags: ["Làng Phản Diện", "Orochimaru", "Thí Nghiệm"],
  },
];
