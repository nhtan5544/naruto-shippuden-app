import type { Dojutsu } from "./types";

export const dojutsuList: Dojutsu[] = [
  {
    id: "sharingan",
    name: "Sharingan",
    nameJP: "写輪眼",
    slug: "sharingan",
    clan: "Gia tộc Uchiha",
    tier: "rare",
    description:
      "Sharingan — Nhãn Luân Hồi — là Kekkei Genkai biểu tượng của gia tộc Uchiha, cho phép người dùng sao chép Ninjutsu, Taijutsu và Genjutsu, đọc chuyển động và áp đặt ảo giác.",
    history:
      "Sharingan bắt nguồn từ Rinne-Sharingan của nữ thần Kaguya Otsutsuki. Sau khi Chakra được truyền cho con cháu, Indra Otsutsuki — con trai của Hagoromo — được thừa hưởng Dojutsu này, về sau hình thành nên gia tộc Uchiha. Sharingan thức tỉnh khi người dùng trải qua cảm xúc cực mạnh, đặc biệt là mất mát. Lịch sử gia tộc Uchiha gắn liền với bi kịch — chính vì vậy Sharingan thường thức tỉnh qua đau khổ.",
    abilities: [
      {
        name: "Sao chép Ninjutsu",
        description: "Nhìn thấy và sao chép gần như mọi loại Ninjutsu, Taijutsu, Genjutsu.",
      },
      {
        name: "Nhãn quan tăng cường",
        description: "Đọc chuyển động cực nhanh, dự đoán đòn tấn công của đối thủ.",
      },
      {
        name: "Genjutsu — Ảo thuật mắt",
        description: "Áp đặt ảo giác lên đối thủ chỉ bằng ánh mắt.",
      },
      {
        name: "Tiên tri Chakra",
        description: "Nhìn thấy luồng Chakra chạy trong cơ thể người khác.",
      },
    ],
    users: ["Sasuke Uchiha", "Itachi Uchiha", "Madara Uchiha", "Obito Uchiha", "Kakashi Hatake (cấy ghép)"],
    color: "#dc2626",
    image: "/dojutsu/sharingan.svg",
  },
  {
    id: "mangekyou",
    name: "Mangekyou Sharingan",
    nameJP: "万華鏡写輪眼",
    slug: "mangekyou-sharingan",
    clan: "Gia tộc Uchiha",
    tier: "legendary",
    description:
      "Mangekyou Sharingan — Vạn Hoa Kính Nhãn Luân Hồi — là hình thức cao hơn của Sharingan, thức tỉnh sau khi giết chết người thân nhất. Mỗi người dùng sở hữu hoa văn Mangekyou độc nhất.",
    history:
      "Mangekyou Sharingan lần đầu được ghi chép khi Hagoromo giải thích về sức mạnh của gia tộc Uchiha. Điều kiện thức tỉnh tàn khốc — phải chứng kiến hoặc gây ra cái chết của người thân — phản ánh nghiệp chướng của gia tộc. Itachi thức tỉnh khi chứng kiến cái chết của Shisui. Sasuke thức tỉnh sau khi nghe sự thật về Itachi. Obito thức tỉnh khi chứng kiến Rin chết. Việc sử dụng liên tục sẽ gây mù dần, trừ khi cấy ghép Mangekyou của anh em ruột để đạt Eternal Mangekyou Sharingan.",
    abilities: [
      {
        name: "Amaterasu",
        description: "Ngọn lửa đen thiêu đốt mọi thứ, không thể dập tắt bằng nước hay thông thường.",
      },
      {
        name: "Tsukuyomi",
        description: "Thế giới ảo giác cực mạnh, đặt nạn nhân vào thực tại méo mó trong tích tắc.",
      },
      {
        name: "Kamui",
        description: "Dịch chuyển không gian — Obito dùng để thoát khỏi mọi đòn tấn công.",
      },
      {
        name: "Susanoo",
        description: "Chiến binh khổng lồ bằng Chakra bao quanh người dùng, vừa tấn công vừa phòng thủ.",
      },
      {
        name: "Kotoamatsukami",
        description: "Ảo thuật tối thượng của Shisui — điều khiển tư duy người khác mà không để lại dấu vết.",
      },
    ],
    users: [
      "Itachi Uchiha",
      "Sasuke Uchiha",
      "Obito Uchiha",
      "Madara Uchiha",
      "Shisui Uchiha",
      "Kakashi Hatake (tạm thời)",
    ],
    color: "#7c2d12",
    image: "/dojutsu/mangekyou-sharingan.svg",
  },
  {
    id: "eternal-mangekyou",
    name: "Eternal Mangekyou Sharingan",
    nameJP: "永遠の万華鏡写輪眼",
    slug: "eternal-mangekyou-sharingan",
    clan: "Gia tộc Uchiha",
    tier: "legendary",
    description:
      "Eternal Mangekyou Sharingan — Vĩnh Cửu Vạn Hoa Kính — đạt được bằng cách cấy mắt của anh em ruột. Loại bỏ điểm yếu về mù lòa và nhân đôi sức mạnh.",
    history:
      "Madara Uchiha là người đầu tiên sử dụng Eternal Mangekyou khi cấy mắt của em trai Izuna. Sasuke Uchiha sau đó đạt được khi cấy mắt Itachi vào. Với đôi mắt này, người dùng có thể sử dụng toàn bộ sức mạnh Mangekyou mà không lo mù lòa, đồng thời Susanoo đạt đến hình thái hoàn chỉnh nhất.",
    abilities: [
      {
        name: "Susanoo Hoàn Chỉnh",
        description: "Susanoo đạt cấp độ tối cao, mang đủ giáp và vũ khí hoàn thiện.",
      },
      {
        name: "Không giới hạn sử dụng",
        description: "Không còn nguy cơ mù lòa khi sử dụng Mangekyou.",
      },
    ],
    users: ["Madara Uchiha", "Sasuke Uchiha"],
    color: "#991b1b",
    image: "/dojutsu/eternal-mangekyou-sharingan.svg",
  },
  {
    id: "rinnegan",
    name: "Rinnegan",
    nameJP: "輪廻眼",
    slug: "rinnegan",
    clan: "Otsutsuki / Uchiha (kế thừa)",
    tier: "legendary",
    description:
      "Rinnegan — Luân Hồi Nhãn — là Dojutsu tối thượng theo truyền thuyết, được mệnh danh là con mắt của thần. Người sở hữu có thể làm chủ sáu con đường của nỗi đau và kiểm soát lực hút đẩy.",
    history:
      "Rinnegan được Hagoromo Otsutsuki — Lục Đạo Tiên Nhân — sở hữu, người đã dùng nó để tạo ra hệ thống Ninjutsu và truyền Chakra cho nhân loại. Rinnegan có thể đạt được khi kết hợp Chakra của Hashirama Senju (hậu duệ Ashura) và Madara Uchiha (hậu duệ Indra), hoặc khi người dùng cấy ghép Chakra Hashirama vào Sharingan Mangekyou. Nagato được trao Rinnegan bởi Madara trong thời thơ ấu, trong khi Madara tự thức tỉnh nó trong những năm cuối đời.",
    abilities: [
      {
        name: "Lục Đạo — Six Paths",
        description: "Kiểm soát sáu xác chết làm thân xác, mỗi xác mang một năng lực khác nhau.",
      },
      {
        name: "Shinra Tensei",
        description: "Đẩy mọi thứ ra xa bằng lực đẩy vô hình, có thể phá hủy cả ngôi làng.",
      },
      {
        name: "Bansho Ten'in",
        description: "Hút mọi thứ về phía mình bằng lực hút vô hình.",
      },
      {
        name: "Chibaku Tensei",
        description: "Tạo ra lực hút hành tinh, thu hút đất đá tạo thành hành tinh nhỏ.",
      },
      {
        name: "Gedo Rinne Tensei",
        description: "Hồi sinh người chết với cái giá là mạng sống của người dùng.",
      },
      {
        name: "Limbo",
        description: "Tạo bóng ma trong thế giới Limbo chỉ Rinnegan mới nhìn thấy được (riêng Madara).",
      },
    ],
    users: ["Hagoromo Otsutsuki", "Nagato (Pain)", "Madara Uchiha", "Sasuke Uchiha (biến thể)", "Obito Uchiha (tạm thời)"],
    color: "#7e22ce",
    image: "/dojutsu/rinnegan.svg",
  },
  {
    id: "byakugan",
    name: "Byakugan",
    nameJP: "白眼",
    slug: "byakugan",
    clan: "Gia tộc Hyuga",
    tier: "rare",
    description:
      "Byakugan — Bạch Nhãn — là Dojutsu của gia tộc Hyuga, cho phép nhìn xuyên suốt 360 độ không điểm mù (trừ một điểm nhỏ phía sau cổ), nhìn thấy Chakra và Tenketsu.",
    history:
      "Byakugan có nguồn gốc từ Otsutsuki, được truyền lại cho gia tộc Hyuga qua huyết thống. Gia tộc Hyuga chia thành hai nhánh: nhánh Chính (Sōke) và nhánh Phụ (Bunke). Nhánh Phụ bị ràng buộc bằng một phong ấn trên trán để bảo vệ bí mật của Byakugan. Sự phân chia này tạo ra mâu thuẫn nội bộ sâu sắc, điển hình qua câu chuyện của Neji Hyuga — người đã vượt qua định mệnh để trở thành ninja mạnh nhất thế hệ mình.",
    abilities: [
      {
        name: "Tầm nhìn 360 độ",
        description: "Nhìn xung quanh không điểm mù, kể cả qua chướng ngại vật.",
      },
      {
        name: "Nhìn thấy Chakra & Tenketsu",
        description: "Quan sát luồng Chakra và 361 Tenketsu (huyệt đạo Chakra) trong cơ thể người.",
      },
      {
        name: "Tầm nhìn xa",
        description: "Nhìn rõ vật thể ở khoảng cách hàng kilomet.",
      },
      {
        name: "Jūken — Nhu Quyền",
        description: "Kết hợp với Byakugan để tấn công Tenketsu, phá hủy hệ thống Chakra từ bên trong.",
      },
    ],
    users: ["Neji Hyuga", "Hinata Hyuga", "Hiashi Hyuga", "Hanabi Hyuga"],
    color: "#e2e8f0",
    image: "/dojutsu/byakugan.svg",
  },
  {
    id: "rinne-sharingan",
    name: "Rinne Sharingan",
    nameJP: "輪廻写輪眼",
    slug: "rinne-sharingan",
    clan: "Tộc Otsutsuki",
    tier: "legendary",
    description:
      "Rinne Sharingan — Luân Hồi Nhãn Luân Hồi — là Dojutsu nguyên thủy và tối thượng nhất, xuất hiện như con mắt thứ ba trên trán. Đây là nguồn gốc của cả Rinnegan lẫn Sharingan, chỉ Kaguya Otsutsuki và Madara (khi trở thành Jinchuriki Thập Vĩ) từng sở hữu.",
    history:
      "Rinne Sharingan là Dojutsu nguyên bản của Kaguya Otsutsuki — xuất hiện sau khi bà ăn quả của cây Thần Mộc và hấp thụ toàn bộ Chakra trên Trái Đất. Đây là con mắt thứ ba mọc trên trán, có màu đỏ với nhiều vòng đồng tâm kết hợp hoa văn Sharingan. Sau khi Hagoromo và Hamura phong ấn Kaguya, Rinne Sharingan phân tách thành hai nhánh: Rinnegan (truyền cho con cháu Otsutsuki và sau là gia tộc Senju/Uchiha) và Sharingan (truyền qua dòng máu Indra Otsutsuki — gia tộc Uchiha). Madara Uchiha tái hiện Rinne Sharingan trên trán khi trở thành Jinchuriki của Thập Vĩ và kích hoạt Infinite Tsukuyomi.",
    abilities: [
      {
        name: "Infinite Tsukuyomi",
        description: "Chiếu ảo giác tối thượng lên toàn bộ nhân loại bằng cách phản chiếu ánh sáng qua Mặt Trăng, nhốt mọi người vào giấc mơ vĩnh cửu.",
      },
      {
        name: "Nguồn gốc Rinnegan & Sharingan",
        description: "Dojutsu tổ tiên chứa đựng toàn bộ năng lực của cả Rinnegan lẫn Sharingan cộng lại.",
      },
      {
        name: "Tầm nhìn tối thượng",
        description: "Nhìn thấu mọi chiều không gian, nhận thức toàn bộ Chakra vũ trụ.",
      },
    ],
    users: ["Kaguya Otsutsuki", "Madara Uchiha (khi là Jinchuriki Thập Vĩ)"],
    color: "#be123c",
    image: "/dojutsu/rinne-sharingan.svg",
  },
  {
    id: "tenseigan",
    name: "Tenseigan",
    nameJP: "転生眼",
    slug: "tenseigan",
    clan: "Otsutsuki",
    tier: "legendary",
    description:
      "Tenseigan — Chuyển Sinh Nhãn — xuất hiện khi Byakugan của Otsutsuki kết hợp với Chakra của Hyuga. Mắt chuyển sang màu xanh lam sáng với đồng tử hình bông tuyết.",
    history:
      "Tenseigan được giới thiệu trong bộ phim Naruto: The Last (2014). Toneri Otsutsuki kích hoạt Tenseigan bằng cách thu thập Byakugan từ các thành viên gia tộc Hyuga. Với Tenseigan, Toneri có thể kiểm soát Chakra Tenseigan Mode và có sức mạnh đủ để di chuyển Mặt Trăng.",
    abilities: [
      {
        name: "Tenseigan Chakra Mode",
        description: "Tăng cường toàn bộ năng lực thể chất và Chakra lên mức tối đa.",
      },
      {
        name: "Kiểm soát lực hút",
        description: "Tương tự Rinnegan, có thể kiểm soát lực hút và đẩy ở quy mô vũ trụ.",
      },
    ],
    users: ["Toneri Otsutsuki"],
    color: "#0ea5e9",
    image: "/dojutsu/tenseigan.svg",
  },
  {
    id: "jougan",
    name: "Jōgan",
    nameJP: "淨眼",
    slug: "jougan",
    clan: "Uzumaki / Otsutsuki (kế thừa)",
    tier: "legendary",
    description:
      "Jōgan — Tịnh Nhãn — là Dojutsu bí ẩn của Boruto Uzumaki, xuất hiện như mắt màu xanh nhạt với đồng tử đặc biệt. Nguồn gốc và khả năng đầy đủ vẫn chưa được khám phá hoàn toàn.",
    history:
      "Jōgan chỉ được đề cập ngắn gọn trong series Boruto. Hagoromo và Hamura Otsutsuki dường như nhận ra đây là Dojutsu thiêng liêng. Boruto không thể kiểm soát hoàn toàn Jōgan, nó tự kích hoạt trong những tình huống nguy hiểm liên quan đến Otsutsuki.",
    abilities: [
      {
        name: "Nhìn thấy luồng Chakra",
        description: "Quan sát dòng chảy Chakra và các điểm yếu trong cơ thể.",
      },
      {
        name: "Phát hiện chiều không gian",
        description: "Nhìn thấy các khe hở trong không gian và nhận ra mối nguy từ Otsutsuki.",
      },
    ],
    users: ["Boruto Uzumaki"],
    color: "#bfdbfe",
    image: "/dojutsu/jougan.svg",
  },
];

export const legendaryDojutsu = dojutsuList.filter((d) => d.tier === "legendary");
export const rareDojutsu = dojutsuList.filter((d) => d.tier === "rare");
