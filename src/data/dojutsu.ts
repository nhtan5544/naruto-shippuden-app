import type { Dojutsu } from "./types";

export const dojutsuList: Dojutsu[] = [
  {
    id: "sharingan",
    name: "Sharingan",
    nameJP: "写輪眼",
    slug: "sharingan",
    clan: { vi: "Gia tộc Uchiha", en: "Uchiha Clan" },
    tier: "rare",
    description: {
      vi: "Sharingan — Nhãn Luân Hồi — là Kekkei Genkai biểu tượng của gia tộc Uchiha, cho phép người dùng sao chép Ninjutsu, Taijutsu và Genjutsu, đọc chuyển động và áp đặt ảo giác.",
      en: "Sharingan — the Copy Wheel Eye — is the iconic Kekkei Genkai of the Uchiha clan, allowing the user to copy Ninjutsu, Taijutsu, and Genjutsu, read movements, and impose illusions.",
    },
    history: {
      vi: "Sharingan bắt nguồn từ Rinne-Sharingan của nữ thần Kaguya Otsutsuki. Sau khi Chakra được truyền cho con cháu, Indra Otsutsuki — con trai của Hagoromo — được thừa hưởng Dojutsu này, về sau hình thành nên gia tộc Uchiha. Sharingan thức tỉnh khi người dùng trải qua cảm xúc cực mạnh, đặc biệt là mất mát. Lịch sử gia tộc Uchiha gắn liền với bi kịch — chính vì vậy Sharingan thường thức tỉnh qua đau khổ.",
      en: "The Sharingan traces its origin to the Rinne Sharingan of the goddess Kaguya Otsutsuki. After chakra was passed to her descendants, Indra Otsutsuki — Hagoromo's son — inherited this Dojutsu, which later formed the foundation of the Uchiha clan. The Sharingan awakens when the user experiences an intense emotion, particularly loss. The Uchiha clan's history is intertwined with tragedy — which is why the Sharingan so often awakens through suffering.",
    },
    abilities: [
      {
        name: { vi: "Sao chép Ninjutsu", en: "Ninjutsu Copying" },
        description: { vi: "Nhìn thấy và sao chép gần như mọi loại Ninjutsu, Taijutsu, Genjutsu.", en: "See and copy nearly all forms of Ninjutsu, Taijutsu, and Genjutsu." },
      },
      {
        name: { vi: "Nhãn quan tăng cường", en: "Enhanced Perception" },
        description: { vi: "Đọc chuyển động cực nhanh, dự đoán đòn tấn công của đối thủ.", en: "Read extremely fast movements and anticipate opponents' attacks." },
      },
      {
        name: { vi: "Genjutsu — Ảo thuật mắt", en: "Genjutsu — Eye Illusion" },
        description: { vi: "Áp đặt ảo giác lên đối thủ chỉ bằng ánh mắt.", en: "Cast illusions upon opponents through eye contact alone." },
      },
      {
        name: { vi: "Tiên tri Chakra", en: "Chakra Vision" },
        description: { vi: "Nhìn thấy luồng Chakra chạy trong cơ thể người khác.", en: "See the flow of chakra running through others' bodies." },
      },
    ],
    users: [
      { vi: "Sasuke Uchiha", en: "Sasuke Uchiha" },
      { vi: "Itachi Uchiha", en: "Itachi Uchiha" },
      { vi: "Madara Uchiha", en: "Madara Uchiha" },
      { vi: "Obito Uchiha", en: "Obito Uchiha" },
      { vi: "Kakashi Hatake (cấy ghép)", en: "Kakashi Hatake (transplanted)" },
    ],
    color: "#dc2626",
    image: "/dojutsu/sharingan.svg",
  },
  {
    id: "mangekyou",
    name: "Mangekyou Sharingan",
    nameJP: "万華鏡写輪眼",
    slug: "mangekyou-sharingan",
    clan: { vi: "Gia tộc Uchiha", en: "Uchiha Clan" },
    tier: "legendary",
    description: {
      vi: "Mangekyou Sharingan — Vạn Hoa Kính Nhãn Luân Hồi — là hình thức cao hơn của Sharingan, thức tỉnh sau khi giết chết người thân nhất. Mỗi người dùng sở hữu hoa văn Mangekyou độc nhất.",
      en: "Mangekyou Sharingan — the Kaleidoscope Copy Wheel Eye — is an advanced form of the Sharingan, awakened after killing one's closest loved one. Each user possesses a unique Mangekyou pattern.",
    },
    history: {
      vi: "Mangekyou Sharingan lần đầu được ghi chép khi Hagoromo giải thích về sức mạnh của gia tộc Uchiha. Điều kiện thức tỉnh tàn khốc — phải chứng kiến hoặc gây ra cái chết của người thân — phản ánh nghiệp chướng của gia tộc. Itachi thức tỉnh khi chứng kiến cái chết của Shisui. Sasuke thức tỉnh sau khi nghe sự thật về Itachi. Obito thức tỉnh khi chứng kiến Rin chết. Việc sử dụng liên tục sẽ gây mù dần, trừ khi cấy ghép Mangekyou của anh em ruột để đạt Eternal Mangekyou Sharingan.",
      en: "The Mangekyou Sharingan was first documented when Hagoromo explained the Uchiha clan's power. The brutal awakening condition — witnessing or causing the death of a loved one — reflects the clan's cursed fate. Itachi awakened his when Shisui died. Sasuke awakened his upon learning the truth about Itachi. Obito awakened his after witnessing Rin's death. Continued use gradually causes blindness, unless the user transplants a sibling's Mangekyou to achieve the Eternal Mangekyou Sharingan.",
    },
    abilities: [
      {
        name: { vi: "Amaterasu", en: "Amaterasu" },
        description: { vi: "Ngọn lửa đen thiêu đốt mọi thứ, không thể dập tắt bằng nước hay thông thường.", en: "Black flames that incinerate everything, impossible to extinguish by ordinary means." },
      },
      {
        name: { vi: "Tsukuyomi", en: "Tsukuyomi" },
        description: { vi: "Thế giới ảo giác cực mạnh, đặt nạn nhân vào thực tại méo mó trong tích tắc.", en: "An extremely powerful illusion world that traps the victim in a distorted reality within an instant." },
      },
      {
        name: { vi: "Kamui", en: "Kamui" },
        description: { vi: "Dịch chuyển không gian — Obito dùng để thoát khỏi mọi đòn tấn công.", en: "Space-time ninjutsu — Obito used it to phase through any attack." },
      },
      {
        name: { vi: "Susanoo", en: "Susanoo" },
        description: { vi: "Chiến binh khổng lồ bằng Chakra bao quanh người dùng, vừa tấn công vừa phòng thủ.", en: "A giant chakra warrior enveloping the user, serving as both offense and defense." },
      },
      {
        name: { vi: "Kotoamatsukami", en: "Kotoamatsukami" },
        description: { vi: "Ảo thuật tối thượng của Shisui — điều khiển tư duy người khác mà không để lại dấu vết.", en: "Shisui's supreme genjutsu — controls others' minds without leaving any trace." },
      },
    ],
    users: [
      { vi: "Itachi Uchiha", en: "Itachi Uchiha" },
      { vi: "Sasuke Uchiha", en: "Sasuke Uchiha" },
      { vi: "Obito Uchiha", en: "Obito Uchiha" },
      { vi: "Madara Uchiha", en: "Madara Uchiha" },
      { vi: "Shisui Uchiha", en: "Shisui Uchiha" },
      { vi: "Kakashi Hatake (tạm thời)", en: "Kakashi Hatake (temporary)" },
    ],
    color: "#7c2d12",
    image: "/dojutsu/mangekyou-sharingan.svg",
  },
  {
    id: "eternal-mangekyou",
    name: "Eternal Mangekyou Sharingan",
    nameJP: "永遠の万華鏡写輪眼",
    slug: "eternal-mangekyou-sharingan",
    clan: { vi: "Gia tộc Uchiha", en: "Uchiha Clan" },
    tier: "legendary",
    description: {
      vi: "Eternal Mangekyou Sharingan — Vĩnh Cửu Vạn Hoa Kính — đạt được bằng cách cấy mắt của anh em ruột. Loại bỏ điểm yếu về mù lòa và nhân đôi sức mạnh.",
      en: "Eternal Mangekyou Sharingan — the Eternal Kaleidoscope Copy Wheel Eye — is obtained by transplanting a sibling's eyes. It eliminates the blindness weakness and doubles the user's power.",
    },
    history: {
      vi: "Madara Uchiha là người đầu tiên sử dụng Eternal Mangekyou khi cấy mắt của em trai Izuna. Sasuke Uchiha sau đó đạt được khi cấy mắt Itachi vào. Với đôi mắt này, người dùng có thể sử dụng toàn bộ sức mạnh Mangekyou mà không lo mù lòa, đồng thời Susanoo đạt đến hình thái hoàn chỉnh nhất.",
      en: "Madara Uchiha was the first to use the Eternal Mangekyou by transplanting the eyes of his brother Izuna. Sasuke Uchiha later achieved it by transplanting Itachi's eyes. With these eyes, the user can employ full Mangekyou power without risk of blindness, while Susanoo reaches its most complete form.",
    },
    abilities: [
      {
        name: { vi: "Susanoo Hoàn Chỉnh", en: "Perfect Susanoo" },
        description: { vi: "Susanoo đạt cấp độ tối cao, mang đủ giáp và vũ khí hoàn thiện.", en: "Susanoo reaches its ultimate level, fully armored and equipped with perfect weapons." },
      },
      {
        name: { vi: "Không giới hạn sử dụng", en: "Unlimited Use" },
        description: { vi: "Không còn nguy cơ mù lòa khi sử dụng Mangekyou.", en: "No longer any risk of blindness from using the Mangekyou." },
      },
    ],
    users: [
      { vi: "Madara Uchiha", en: "Madara Uchiha" },
      { vi: "Sasuke Uchiha", en: "Sasuke Uchiha" },
    ],
    color: "#991b1b",
    image: "/dojutsu/eternal-mangekyou-sharingan.svg",
  },
  {
    id: "rinnegan",
    name: "Rinnegan",
    nameJP: "輪廻眼",
    slug: "rinnegan",
    clan: { vi: "Otsutsuki / Uchiha (kế thừa)", en: "Otsutsuki / Uchiha (inherited)" },
    tier: "legendary",
    description: {
      vi: "Rinnegan — Luân Hồi Nhãn — là Dojutsu tối thượng theo truyền thuyết, được mệnh danh là con mắt của thần. Người sở hữu có thể làm chủ sáu con đường của nỗi đau và kiểm soát lực hút đẩy.",
      en: "Rinnegan — the Saṃsāra Eye — is the legendary ultimate Dojutsu, called the eye of a god. Its wielder can master the six paths of pain and control gravitational forces.",
    },
    history: {
      vi: "Rinnegan được Hagoromo Otsutsuki — Lục Đạo Tiên Nhân — sở hữu, người đã dùng nó để tạo ra hệ thống Ninjutsu và truyền Chakra cho nhân loại. Rinnegan có thể đạt được khi kết hợp Chakra của Hashirama Senju (hậu duệ Ashura) và Madara Uchiha (hậu duệ Indra), hoặc khi người dùng cấy ghép Chakra Hashirama vào Sharingan Mangekyou. Nagato được trao Rinnegan bởi Madara trong thời thơ ấu, trong khi Madara tự thức tỉnh nó trong những năm cuối đời.",
      en: "The Rinnegan was wielded by Hagoromo Otsutsuki — the Sage of Six Paths — who used it to create the Ninjutsu system and distribute chakra to humanity. The Rinnegan can be obtained by combining the chakra of Hashirama Senju (Ashura's descendant) and Madara Uchiha (Indra's descendant), or by transplanting Hashirama's chakra into a Mangekyou Sharingan. Nagato was given the Rinnegan by Madara in childhood, while Madara himself awakened it in his final years.",
    },
    abilities: [
      {
        name: { vi: "Lục Đạo — Six Paths", en: "Six Paths" },
        description: { vi: "Kiểm soát sáu xác chết làm thân xác, mỗi xác mang một năng lực khác nhau.", en: "Control six corpses as bodies, each carrying a different power." },
      },
      {
        name: { vi: "Shinra Tensei", en: "Shinra Tensei" },
        description: { vi: "Đẩy mọi thứ ra xa bằng lực đẩy vô hình, có thể phá hủy cả ngôi làng.", en: "Push everything away with an invisible repulsive force, capable of destroying an entire village." },
      },
      {
        name: { vi: "Bansho Ten'in", en: "Bansho Ten'in" },
        description: { vi: "Hút mọi thứ về phía mình bằng lực hút vô hình.", en: "Pull everything toward oneself with an invisible attractive force." },
      },
      {
        name: { vi: "Chibaku Tensei", en: "Chibaku Tensei" },
        description: { vi: "Tạo ra lực hút hành tinh, thu hút đất đá tạo thành hành tinh nhỏ.", en: "Create a gravitational center that draws in earth and rock to form a small planetoid." },
      },
      {
        name: { vi: "Gedo Rinne Tensei", en: "Gedo: Rinne Tensei" },
        description: { vi: "Hồi sinh người chết với cái giá là mạng sống của người dùng.", en: "Resurrect the dead at the cost of the user's own life." },
      },
      {
        name: { vi: "Limbo", en: "Limbo" },
        description: { vi: "Tạo bóng ma trong thế giới Limbo chỉ Rinnegan mới nhìn thấy được (riêng Madara).", en: "Creates shadow clones in the Limbo realm visible only to the Rinnegan (unique to Madara)." },
      },
    ],
    users: [
      { vi: "Hagoromo Otsutsuki", en: "Hagoromo Otsutsuki" },
      { vi: "Nagato (Pain)", en: "Nagato (Pain)" },
      { vi: "Madara Uchiha", en: "Madara Uchiha" },
      { vi: "Sasuke Uchiha (biến thể)", en: "Sasuke Uchiha (variant)" },
      { vi: "Obito Uchiha (tạm thời)", en: "Obito Uchiha (temporary)" },
    ],
    color: "#7e22ce",
    image: "/dojutsu/rinnegan.svg",
  },
  {
    id: "byakugan",
    name: "Byakugan",
    nameJP: "白眼",
    slug: "byakugan",
    clan: { vi: "Gia tộc Hyuga", en: "Hyuga Clan" },
    tier: "rare",
    description: {
      vi: "Byakugan — Bạch Nhãn — là Dojutsu của gia tộc Hyuga, cho phép nhìn xuyên suốt 360 độ không điểm mù (trừ một điểm nhỏ phía sau cổ), nhìn thấy Chakra và Tenketsu.",
      en: "Byakugan — the White Eye — is the Hyuga clan's Dojutsu, granting near 360-degree vision with almost no blind spot (except a small area at the back of the neck), and the ability to see chakra and Tenketsu.",
    },
    history: {
      vi: "Byakugan có nguồn gốc từ Otsutsuki, được truyền lại cho gia tộc Hyuga qua huyết thống. Gia tộc Hyuga chia thành hai nhánh: nhánh Chính (Sōke) và nhánh Phụ (Bunke). Nhánh Phụ bị ràng buộc bằng một phong ấn trên trán để bảo vệ bí mật của Byakugan. Sự phân chia này tạo ra mâu thuẫn nội bộ sâu sắc, điển hình qua câu chuyện của Neji Hyuga — người đã vượt qua định mệnh để trở thành ninja mạnh nhất thế hệ mình.",
      en: "The Byakugan originated from the Otsutsuki and was passed down to the Hyuga clan through bloodline. The Hyuga clan is divided into two branches: the Main Branch (Sōke) and the Branch House (Bunke). Branch members bear a seal on their forehead to protect the Byakugan's secrets. This division created deep internal tensions, best illustrated through the story of Neji Hyuga — who overcame fate to become the most powerful ninja of his generation.",
    },
    abilities: [
      {
        name: { vi: "Tầm nhìn 360 độ", en: "360-degree Vision" },
        description: { vi: "Nhìn xung quanh không điểm mù, kể cả qua chướng ngại vật.", en: "See all around with almost no blind spot, even through obstacles." },
      },
      {
        name: { vi: "Nhìn thấy Chakra & Tenketsu", en: "Chakra & Tenketsu Vision" },
        description: { vi: "Quan sát luồng Chakra và 361 Tenketsu (huyệt đạo Chakra) trong cơ thể người.", en: "Observe chakra flow and all 361 Tenketsu (chakra pressure points) within the body." },
      },
      {
        name: { vi: "Tầm nhìn xa", en: "Long-range Vision" },
        description: { vi: "Nhìn rõ vật thể ở khoảng cách hàng kilomet.", en: "See objects clearly from kilometers away." },
      },
      {
        name: { vi: "Jūken — Nhu Quyền", en: "Jūken — Gentle Fist" },
        description: { vi: "Kết hợp với Byakugan để tấn công Tenketsu, phá hủy hệ thống Chakra từ bên trong.", en: "Combined with Byakugan to strike Tenketsu, destroying the chakra system from within." },
      },
    ],
    users: [
      { vi: "Neji Hyuga", en: "Neji Hyuga" },
      { vi: "Hinata Hyuga", en: "Hinata Hyuga" },
      { vi: "Hiashi Hyuga", en: "Hiashi Hyuga" },
      { vi: "Hanabi Hyuga", en: "Hanabi Hyuga" },
    ],
    color: "#e2e8f0",
    image: "/dojutsu/byakugan.svg",
  },
  {
    id: "rinne-sharingan",
    name: "Rinne Sharingan",
    nameJP: "輪廻写輪眼",
    slug: "rinne-sharingan",
    clan: { vi: "Tộc Otsutsuki", en: "Otsutsuki Clan" },
    tier: "legendary",
    description: {
      vi: "Rinne Sharingan — Luân Hồi Nhãn Luân Hồi — là Dojutsu nguyên thủy và tối thượng nhất, xuất hiện như con mắt thứ ba trên trán. Đây là nguồn gốc của cả Rinnegan lẫn Sharingan, chỉ Kaguya Otsutsuki và Madara (khi trở thành Jinchuriki Thập Vĩ) từng sở hữu.",
      en: "Rinne Sharingan — the Saṃsāra Copy Wheel Eye — is the most primordial and supreme Dojutsu, manifesting as a third eye on the forehead. It is the origin of both the Rinnegan and the Sharingan, possessed only by Kaguya Otsutsuki and Madara (as the Ten-Tails Jinchuriki).",
    },
    history: {
      vi: "Rinne Sharingan là Dojutsu nguyên bản của Kaguya Otsutsuki — xuất hiện sau khi bà ăn quả của cây Thần Mộc và hấp thụ toàn bộ Chakra trên Trái Đất. Đây là con mắt thứ ba mọc trên trán, có màu đỏ với nhiều vòng đồng tâm kết hợp hoa văn Sharingan. Sau khi Hagoromo và Hamura phong ấn Kaguya, Rinne Sharingan phân tách thành hai nhánh: Rinnegan (truyền cho con cháu Otsutsuki và sau là gia tộc Senju/Uchiha) và Sharingan (truyền qua dòng máu Indra Otsutsuki — gia tộc Uchiha). Madara Uchiha tái hiện Rinne Sharingan trên trán khi trở thành Jinchuriki của Thập Vĩ và kích hoạt Infinite Tsukuyomi.",
      en: "The Rinne Sharingan is Kaguya Otsutsuki's original Dojutsu — manifesting after she ate the fruit of the Divine Tree and absorbed all chakra on Earth. It is a third eye on the forehead, red with multiple concentric rings and a Sharingan-like pattern. After Hagoromo and Hamura sealed Kaguya, the Rinne Sharingan split into two lineages: the Rinnegan (passed to Otsutsuki descendants and later the Senju/Uchiha clans) and the Sharingan (passed through Indra Otsutsuki's bloodline — the Uchiha clan). Madara Uchiha manifested the Rinne Sharingan on his forehead upon becoming the Ten-Tails Jinchuriki and activating the Infinite Tsukuyomi.",
    },
    abilities: [
      {
        name: { vi: "Infinite Tsukuyomi", en: "Infinite Tsukuyomi" },
        description: { vi: "Chiếu ảo giác tối thượng lên toàn bộ nhân loại bằng cách phản chiếu ánh sáng qua Mặt Trăng, nhốt mọi người vào giấc mơ vĩnh cửu.", en: "Projects a supreme illusion over all of humanity by reflecting light through the Moon, trapping everyone in an eternal dream." },
      },
      {
        name: { vi: "Nguồn gốc Rinnegan & Sharingan", en: "Origin of Rinnegan & Sharingan" },
        description: { vi: "Dojutsu tổ tiên chứa đựng toàn bộ năng lực của cả Rinnegan lẫn Sharingan cộng lại.", en: "The ancestral Dojutsu containing the combined full power of both the Rinnegan and Sharingan." },
      },
      {
        name: { vi: "Tầm nhìn tối thượng", en: "Supreme Vision" },
        description: { vi: "Nhìn thấu mọi chiều không gian, nhận thức toàn bộ Chakra vũ trụ.", en: "Perceive all dimensions and sense all cosmic chakra." },
      },
    ],
    users: [
      { vi: "Kaguya Otsutsuki", en: "Kaguya Otsutsuki" },
      { vi: "Madara Uchiha (khi là Jinchuriki Thập Vĩ)", en: "Madara Uchiha (as Ten-Tails Jinchuriki)" },
    ],
    color: "#be123c",
    image: "/dojutsu/rinne-sharingan.svg",
  },
  {
    id: "tenseigan",
    name: "Tenseigan",
    nameJP: "転生眼",
    slug: "tenseigan",
    clan: { vi: "Otsutsuki", en: "Otsutsuki" },
    tier: "legendary",
    description: {
      vi: "Tenseigan — Chuyển Sinh Nhãn — xuất hiện khi Byakugan của Otsutsuki kết hợp với Chakra của Hyuga. Mắt chuyển sang màu xanh lam sáng với đồng tử hình bông tuyết.",
      en: "Tenseigan — the Reincarnation Eye — appears when an Otsutsuki's Byakugan combines with Hyuga chakra. The eye shifts to a glowing blue with a snowflake-like pupil.",
    },
    history: {
      vi: "Tenseigan được giới thiệu trong bộ phim Naruto: The Last (2014). Toneri Otsutsuki kích hoạt Tenseigan bằng cách thu thập Byakugan từ các thành viên gia tộc Hyuga. Với Tenseigan, Toneri có thể kiểm soát Chakra Tenseigan Mode và có sức mạnh đủ để di chuyển Mặt Trăng.",
      en: "The Tenseigan was introduced in the film Naruto: The Last (2014). Toneri Otsutsuki activated it by collecting Byakugan from members of the Hyuga clan. With the Tenseigan, Toneri could control the Tenseigan Chakra Mode and possessed enough power to move the Moon.",
    },
    abilities: [
      {
        name: { vi: "Tenseigan Chakra Mode", en: "Tenseigan Chakra Mode" },
        description: { vi: "Tăng cường toàn bộ năng lực thể chất và Chakra lên mức tối đa.", en: "Enhances all physical capabilities and chakra to their maximum." },
      },
      {
        name: { vi: "Kiểm soát lực hút", en: "Gravitational Control" },
        description: { vi: "Tương tự Rinnegan, có thể kiểm soát lực hút và đẩy ở quy mô vũ trụ.", en: "Similar to the Rinnegan, can control attraction and repulsion on a cosmic scale." },
      },
    ],
    users: [
      { vi: "Toneri Otsutsuki", en: "Toneri Otsutsuki" },
    ],
    color: "#0ea5e9",
    image: "/dojutsu/tenseigan.svg",
  },
  {
    id: "jougan",
    name: "Jōgan",
    nameJP: "淨眼",
    slug: "jougan",
    clan: { vi: "Uzumaki / Otsutsuki (kế thừa)", en: "Uzumaki / Otsutsuki (inherited)" },
    tier: "legendary",
    description: {
      vi: "Jōgan — Tịnh Nhãn — là Dojutsu bí ẩn của Boruto Uzumaki, xuất hiện như mắt màu xanh nhạt với đồng tử đặc biệt. Nguồn gốc và khả năng đầy đủ vẫn chưa được khám phá hoàn toàn.",
      en: "Jōgan — the Pure Eye — is Boruto Uzumaki's mysterious Dojutsu, appearing as a pale blue eye with a distinctive pupil. Its full origin and capabilities have yet to be completely uncovered.",
    },
    history: {
      vi: "Jōgan chỉ được đề cập ngắn gọn trong series Boruto. Hagoromo và Hamura Otsutsuki dường như nhận ra đây là Dojutsu thiêng liêng. Boruto không thể kiểm soát hoàn toàn Jōgan, nó tự kích hoạt trong những tình huống nguy hiểm liên quan đến Otsutsuki.",
      en: "The Jōgan is only briefly mentioned in the Boruto series. Hagoromo and Hamura Otsutsuki appear to recognize it as a sacred Dojutsu. Boruto cannot fully control the Jōgan — it activates on its own in dangerous situations involving the Otsutsuki.",
    },
    abilities: [
      {
        name: { vi: "Nhìn thấy luồng Chakra", en: "Chakra Flow Vision" },
        description: { vi: "Quan sát dòng chảy Chakra và các điểm yếu trong cơ thể.", en: "Observe chakra flow and weak points within the body." },
      },
      {
        name: { vi: "Phát hiện chiều không gian", en: "Dimensional Detection" },
        description: { vi: "Nhìn thấy các khe hở trong không gian và nhận ra mối nguy từ Otsutsuki.", en: "See rifts in space and identify threats from the Otsutsuki." },
      },
    ],
    users: [
      { vi: "Boruto Uzumaki", en: "Boruto Uzumaki" },
    ],
    color: "#bfdbfe",
    image: "/dojutsu/jougan.svg",
  },
];

export const legendaryDojutsu = dojutsuList.filter((d) => d.tier === "legendary");
export const rareDojutsu = dojutsuList.filter((d) => d.tier === "rare");
