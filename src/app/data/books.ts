import { Book } from '../types';
import { generateAmazonLink, generateKindleLink } from '../utils/amazonLinks';
import { newBooks } from './newBooks';

export const booksDatabase: Book[] = [
  // 恋愛もの (50冊)
  {
    id: 'romance_001',
    title: '君の名は。',
    author: '新海誠',
    description: '東京で暮らす男子高校生・瀧と、飛騨の山奥で暮らす女子高生・三葉。ある日、夢の中で入れ替わっていることに気づいた二人。',
    asin: '4041026229',
    kindleAsin: 'B01GUKJ0DC',
    amazonUrl: generateAmazonLink({ asin: '4041026229' }),
    kindleUrl: generateKindleLink({ asin: 'B01GUKJ0DC' }),
    tags: ['modern', 'contemporary', 'sweet', 'japanese'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_002',
    title: 'ノルウェイの森',
    author: '村上春樹',
    description: '1960年代の東京を舞台に、青春の喪失と愛の複雑さを描いた名作。',
    asin: '4062748681',
    amazonUrl: generateAmazonLink({ asin: '4062748681' }),
    tags: ['historical', 'period', 'bittersweet', 'japanese'],
    rating: 4.3,
    genre: 'romance'
  },
  {
    id: 'romance_003',
    title: 'プライドと偏見',
    author: 'ジェーン・オースティン',
    description: '19世紀イングランドを舞台にしたエリザベスとダーシーの恋愛小説の古典。',
    asin: '4334752969',
    amazonUrl: generateAmazonLink({ asin: '4334752969' }),
    tags: ['historical', 'period', 'passionate', 'foreign'],
    rating: 4.6,
    genre: 'romance'
  },
  {
    id: 'romance_004',
    title: '世界の中心で、愛をさけぶ',
    author: '片山恭一',
    description: '高校時代の純愛と別れ、そして大人になってからの再会を描いた感動の恋愛小説。',
    asin: '4094080235',
    amazonUrl: generateAmazonLink({ asin: '4094080235' }),
    tags: ['modern', 'contemporary', 'bittersweet', 'japanese'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_005',
    title: 'アウトライダー',
    author: 'ダイアナ・ガバルドン',
    description: '時空を超えた壮大な愛の物語。18世紀スコットランドへタイムスリップした女性の運命。',
    asin: '4863336624',
    amazonUrl: generateAmazonLink({ asin: '4863336624' }),
    tags: ['future', 'sci-fi', 'passionate', 'foreign'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_006',
    title: '図書館戦争',
    author: '有川浩',
    description: '図書館の自由を守る戦いの中で芽生える恋。アクションとラブコメが融合した人気作。',
    asin: '4041024935',
    amazonUrl: generateAmazonLink({ asin: '4041024935' }),
    tags: ['modern', 'contemporary', 'sweet', 'japanese'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_007',
    title: '植物図鑑',
    author: '有川浩',
    description: '道端で拾った青年との同居生活から始まる優しい恋物語。',
    asin: '4041006317',
    amazonUrl: generateAmazonLink({ asin: '4041006317' }),
    tags: ['modern', 'contemporary', 'sweet', 'japanese'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_008',
    title: '阪急電車',
    author: '有川浩',
    description: '阪急電車で繰り広げられる様々な人間模様と恋愛群像劇。',
    asin: '4344417291',
    amazonUrl: generateAmazonLink({ asin: '4344417291' }),
    tags: ['modern', 'contemporary', 'sweet', 'japanese'],
    rating: 4.3,
    genre: 'romance'
  },
  {
    id: 'romance_009',
    title: 'きみに読む物語',
    author: 'ニコラス・スパークス',
    description: '認知症の妻に夫が読み聞かせる若き日の恋物語。',
    asin: '4087734528',
    amazonUrl: generateAmazonLink({ asin: '4087734528' }),
    tags: ['modern', 'contemporary', 'sweet', 'foreign'],
    rating: 4.6,
    genre: 'romance'
  },
  {
    id: 'romance_010',
    title: 'ワン・デイ',
    author: 'デイヴィッド・ニコルズ',
    description: '20年間、毎年同じ日に描かれる男女の恋愛模様。',
    asin: '4150504598',
    amazonUrl: generateAmazonLink({ asin: '4150504598' }),
    tags: ['modern', 'contemporary', 'sweet', 'foreign'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_011',
    title: 'ミー・ビフォア・ユー',
    author: 'ジョジョ・モイーズ',
    description: '四肢麻痺の男性と介護人の女性の心温まる恋物語。',
    asin: '4087717372',
    amazonUrl: generateAmazonLink({ asin: '4087717372' }),
    tags: ['modern', 'contemporary', 'sweet', 'foreign'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_012',
    title: 'レインツリーの国',
    author: '有川浩',
    description: '聴覚障害を持つ女性との恋愛を描いた感動作。',
    asin: '4087461513',
    amazonUrl: generateAmazonLink({ asin: '4087461513' }),
    tags: ['modern', 'contemporary', 'sweet', 'any-origin'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_013',
    title: 'ナミヤ雑貨店の奇蹟',
    author: '東野圭吾',
    description: '時を超えた手紙のやり取りが紡ぐ不思議な恋愛要素を含む物語。',
    asin: '4041014700',
    amazonUrl: generateAmazonLink({ asin: '4041014700' }),
    tags: ['modern', 'contemporary', 'sweet', 'any-origin'],
    rating: 4.6,
    genre: 'romance'
  },
  {
    id: 'romance_014',
    title: 'いま、会いにゆきます',
    author: '市川拓司',
    description: '亡くなった妻が雨の季節に戻ってくる切ない純愛物語。',
    asin: '4094080570',
    amazonUrl: generateAmazonLink({ asin: '4094080570' }),
    tags: ['modern', 'contemporary', 'bittersweet', 'japanese'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_015',
    title: '恋愛寫眞',
    author: '市川拓司',
    description: '記憶を失った恋人との再会を描く切ない恋愛小説。',
    asin: '4094026908',
    amazonUrl: generateAmazonLink({ asin: '4094026908' }),
    tags: ['modern', 'contemporary', 'bittersweet', 'japanese'],
    rating: 4.3,
    genre: 'romance'
  },
  {
    id: 'romance_016',
    title: '冷静と情熱のあいだ',
    author: '江國香織/辻仁成',
    description: '10年後にフィレンツェで再会する約束をした恋人たちの物語。',
    asin: '4094081011',
    amazonUrl: generateAmazonLink({ asin: '4094081011' }),
    tags: ['modern', 'contemporary', 'bittersweet', 'japanese'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_017',
    title: 'アルジャーノンに花束を',
    author: 'ダニエル・キイス',
    description: '知能が変化する中での恋愛を含む感動的な物語。',
    asin: '4150102813',
    amazonUrl: generateAmazonLink({ asin: '4150102813' }),
    tags: ['modern', 'contemporary', 'bittersweet', 'foreign'],
    rating: 4.7,
    genre: 'romance'
  },
  {
    id: 'romance_018',
    title: 'さよならを待つふたりのために',
    author: 'ジョン・グリーン',
    description: 'がんと闘う若者たちの切ない恋愛物語。',
    asin: '400511029X',
    amazonUrl: generateAmazonLink({ asin: '400511029X' }),
    tags: ['modern', 'contemporary', 'bittersweet', 'foreign'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_019',
    title: '東京タワー',
    author: 'リリー・フランキー',
    description: '母への愛と恋愛が交錯する自伝的小説。',
    asin: '4094080538',
    amazonUrl: generateAmazonLink({ asin: '4094080538' }),
    tags: ['modern', 'contemporary', 'bittersweet', 'any-origin'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_020',
    title: '半分の月がのぼる空',
    author: '橋本紡',
    description: '入院中の少年少女の切ない恋物語。',
    asin: '4043944810',
    amazonUrl: generateAmazonLink({ asin: '4043944810' }),
    tags: ['modern', 'contemporary', 'bittersweet', 'any-origin'],
    rating: 4.3,
    genre: 'romance'
  },
  {
    id: 'romance_021',
    title: '失楽園',
    author: '渡辺淳一',
    description: '不倫関係にある男女の激しい愛を描いた話題作。',
    asin: '4061859560',
    amazonUrl: generateAmazonLink({ asin: '4061859560' }),
    tags: ['modern', 'contemporary', 'passionate', 'japanese'],
    rating: 4.2,
    genre: 'romance'
  },
  {
    id: 'romance_022',
    title: 'ツナグ',
    author: '辻村深月',
    description: '死者との再会を仲介する「ツナグ」を通じて描かれる愛の物語。',
    asin: '4101434387',
    amazonUrl: generateAmazonLink({ asin: '4101434387' }),
    tags: ['modern', 'contemporary', 'passionate', 'any-origin'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_023',
    title: '壬生義士伝',
    author: '浅田次郎',
    description: '新選組隊士の純愛と義理を描いた時代小説。',
    asin: '4167483017',
    amazonUrl: generateAmazonLink({ asin: '4167483017' }),
    tags: ['historical', 'period', 'sweet', 'japanese'],
    rating: 4.6,
    genre: 'romance'
  },
  {
    id: 'romance_024',
    title: '燃えよ剣',
    author: '司馬遼太郎',
    description: '土方歳三の生涯と恋愛を描いた歴史小説。',
    asin: '4167105837',
    amazonUrl: generateAmazonLink({ asin: '4167105837' }),
    tags: ['historical', 'period', 'sweet', 'japanese'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_025',
    title: '風と共に去りぬ',
    author: 'マーガレット・ミッチェル',
    description: '南北戦争時代のアメリカを舞台にした壮大な恋愛叙事詩。',
    asin: '4102105018',
    amazonUrl: generateAmazonLink({ asin: '4102105018' }),
    tags: ['historical', 'period', 'sweet', 'foreign'],
    rating: 4.6,
    genre: 'romance'
  },
  {
    id: 'romance_026',
    title: 'ジェーン・エア',
    author: 'シャーロット・ブロンテ',
    description: '19世紀イギリスを舞台にした家庭教師と主人の恋物語。',
    asin: '4003222415',
    amazonUrl: generateAmazonLink({ asin: '4003222415' }),
    tags: ['historical', 'period', 'sweet', 'foreign'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_027',
    title: '蝉しぐれ',
    author: '藤沢周平',
    description: '江戸時代の下級武士の淡い恋と成長を描いた名作。',
    asin: '4167697017',
    amazonUrl: generateAmazonLink({ asin: '4167697017' }),
    tags: ['historical', 'period', 'sweet', 'any-origin'],
    rating: 4.6,
    genre: 'romance'
  },
  {
    id: 'romance_028',
    title: '雪国',
    author: '川端康成',
    description: '温泉町での芸者との切ない恋を描いたノーベル文学賞作家の代表作。',
    asin: '4101001014',
    amazonUrl: generateAmazonLink({ asin: '4101001014' }),
    tags: ['historical', 'period', 'bittersweet', 'japanese'],
    rating: 4.3,
    genre: 'romance'
  },
  {
    id: 'romance_029',
    title: '細雪',
    author: '谷崎潤一郎',
    description: '昭和初期の関西の旧家を舞台にした四姉妹の恋愛模様。',
    asin: '4101001073',
    amazonUrl: generateAmazonLink({ asin: '4101001073' }),
    tags: ['historical', 'period', 'bittersweet', 'japanese'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_030',
    title: 'アンナ・カレーニナ',
    author: 'トルストイ',
    description: '19世紀ロシア社会での不倫と破滅を描いた文学の金字塔。',
    asin: '4003261828',
    amazonUrl: generateAmazonLink({ asin: '4003261828' }),
    tags: ['historical', 'period', 'bittersweet', 'foreign'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_031',
    title: 'グレート・ギャツビー',
    author: 'F・スコット・フィッツジェラルド',
    description: '1920年代アメリカの華やかな時代に咲いた悲恋。',
    asin: '4003230736',
    amazonUrl: generateAmazonLink({ asin: '4003230736' }),
    tags: ['historical', 'period', 'bittersweet', 'foreign'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_032',
    title: 'たそがれ清兵衛',
    author: '藤沢周平',
    description: '幕末の下級武士の哀切な恋と生き様。',
    asin: '4167697025',
    amazonUrl: generateAmazonLink({ asin: '4167697025' }),
    tags: ['historical', 'period', 'bittersweet', 'any-origin'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_033',
    title: '春の雪',
    author: '三島由紀夫',
    description: '大正時代の華族の青年の激しい恋と破滅。',
    asin: '4101050015',
    amazonUrl: generateAmazonLink({ asin: '4101050015' }),
    tags: ['historical', 'period', 'passionate', 'japanese'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_034',
    title: '斜陽',
    author: '太宰治',
    description: '戦後の没落貴族の恋愛と生き様を描いた名作。',
    asin: '4101006016',
    amazonUrl: generateAmazonLink({ asin: '4101006016' }),
    tags: ['historical', 'period', 'passionate', 'japanese'],
    rating: 4.3,
    genre: 'romance'
  },
  {
    id: 'romance_035',
    title: '嵐が丘',
    author: 'エミリー・ブロンテ',
    description: 'イギリスの荒野を舞台にした激しい愛憎劇。',
    asin: '4003222423',
    amazonUrl: generateAmazonLink({ asin: '4003222423' }),
    tags: ['historical', 'period', 'passionate', 'foreign'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_036',
    title: 'レ・ミゼラブル',
    author: 'ヴィクトル・ユーゴー',
    description: '19世紀フランスを舞台にした壮大な人間ドラマと恋愛。',
    asin: '4003253019',
    amazonUrl: generateAmazonLink({ asin: '4003253019' }),
    tags: ['historical', 'period', 'passionate', 'foreign'],
    rating: 4.6,
    genre: 'romance'
  },
  {
    id: 'romance_037',
    title: '天地明察',
    author: '冲方丁',
    description: '江戸時代の天文学者の情熱と恋を描いた時代小説。',
    asin: '4041003296',
    amazonUrl: generateAmazonLink({ asin: '4041003296' }),
    tags: ['historical', 'period', 'passionate', 'any-origin'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_038',
    title: 'イリヤの空、UFOの夏',
    author: '秋山瑞人',
    description: 'SF要素を含む切なく甘い青春恋愛小説。',
    asin: '4840224455',
    amazonUrl: generateAmazonLink({ asin: '4840224455' }),
    tags: ['future', 'sci-fi', 'sweet', 'japanese'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_039',
    title: 'ソードアート・オンライン',
    author: '川原礫',
    description: 'VRゲーム世界での命がけの恋愛を描いた人気ライトノベル。',
    asin: '4048669222',
    amazonUrl: generateAmazonLink({ asin: '4048669222' }),
    tags: ['future', 'sci-fi', 'sweet', 'japanese'],
    rating: 4.3,
    genre: 'romance'
  },
  {
    id: 'romance_040',
    title: 'タイム・トラベラーズ・ワイフ',
    author: 'オードリー・ニッフェネガー',
    description: '時間旅行者と彼を待つ妻の不思議で甘い恋物語。',
    asin: '4167741180',
    amazonUrl: generateAmazonLink({ asin: '4167741180' }),
    tags: ['future', 'sci-fi', 'sweet', 'foreign'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_041',
    title: '獣の奏者',
    author: '上橋菜穂子',
    description: 'ファンタジー世界での獣と人との絆、そして恋愛。',
    asin: '4063384594',
    amazonUrl: generateAmazonLink({ asin: '4063384594' }),
    tags: ['future', 'sci-fi', 'sweet', 'any-origin'],
    rating: 4.6,
    genre: 'romance'
  },
  {
    id: 'romance_042',
    title: '最終兵器彼女',
    author: '高橋しん',
    description: '兵器となった彼女との切ない恋を描いたSF恋愛小説。',
    asin: '409386421X',
    amazonUrl: generateAmazonLink({ asin: '409386421X' }),
    tags: ['future', 'sci-fi', 'bittersweet', 'japanese'],
    rating: 4.2,
    genre: 'romance'
  },
  {
    id: 'romance_043',
    title: 'わたしを離さないで',
    author: 'カズオ・イシグロ',
    description: 'クローン人間たちの切ない恋と運命を描いたディストピア小説。',
    asin: '415010903X',
    amazonUrl: generateAmazonLink({ asin: '415010903X' }),
    tags: ['future', 'sci-fi', 'bittersweet', 'foreign'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_044',
    title: 'ハーモニー',
    author: '伊藤計劃',
    description: '管理社会での恋愛と自由を問うSF小説。',
    asin: '4150309396',
    amazonUrl: generateAmazonLink({ asin: '4150309396' }),
    tags: ['future', 'sci-fi', 'bittersweet', 'any-origin'],
    rating: 4.3,
    genre: 'romance'
  },
  {
    id: 'romance_045',
    title: '新世界より',
    author: '貴志祐介',
    description: '千年後の日本を舞台にした超能力者たちの愛と葛藤。',
    asin: '4061827839',
    amazonUrl: generateAmazonLink({ asin: '4061827839' }),
    tags: ['future', 'sci-fi', 'passionate', 'japanese'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_046',
    title: 'ハンガー・ゲーム',
    author: 'スーザン・コリンズ',
    description: '独裁国家でのサバイバルゲームの中で芽生える激しい恋。',
    asin: '4866970286',
    amazonUrl: generateAmazonLink({ asin: '4866970286' }),
    tags: ['future', 'sci-fi', 'passionate', 'foreign'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_047',
    title: '攻殻機動隊',
    author: '士郎正宗',
    description: 'サイバーパンク世界での人間とサイボーグの関係性と恋愛。',
    asin: '4063146464',
    amazonUrl: generateAmazonLink({ asin: '4063146464' }),
    tags: ['future', 'sci-fi', 'passionate', 'any-origin'],
    rating: 4.3,
    genre: 'romance'
  },

  // 追加恋愛小説 (223冊) - 27通りの組み合わせ完全対応
  
  // modern × sweet × japanese (10冊)
  {
    id: 'romance_048',
    title: 'ぼくは明日、昨日のきみとデートする',
    author: '七月隆文',
    description: '5次元での恋愛を描いた現代の甘い恋愛小説。',
    asin: '4041041104',
    amazonUrl: generateAmazonLink({ asin: '4041041104' }),
    tags: ['modern', 'sweet', 'japanese'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_049',
    title: 'ラブレター',
    author: '岩井俊二',
    description: '記憶と想いを繋ぐ美しいラブストーリー。',
    asin: '4048583417',
    amazonUrl: generateAmazonLink({ asin: '4048583417' }),
    tags: ['modern', 'sweet', 'japanese'],
    rating: 4.3,
    genre: 'romance'
  },
  {
    id: 'romance_050',
    title: 'フォルトゥナの瞳',
    author: '百田尚樹',
    description: '死を予知する能力を持つ青年の純愛物語。',
    asin: '4041077435',
    amazonUrl: generateAmazonLink({ asin: '4041077435' }),
    tags: ['modern', 'sweet', 'japanese'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_051',
    title: '砂時計',
    author: '芦原妃名子',
    description: '田舎で出会った初恋の甘酸っぱい恋物語。',
    asin: '4091307264',
    amazonUrl: generateAmazonLink({ asin: '4091307264' }),
    tags: ['modern', 'sweet', 'japanese'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_052',
    title: '僕だけがいない街',
    author: '三部けい',
    description: 'タイムリープ能力で大切な人を守る現代ラブストーリー。',
    asin: '4041041171',
    amazonUrl: generateAmazonLink({ asin: '4041041171' }),
    tags: ['modern', 'sweet', 'japanese'],
    rating: 4.6,
    genre: 'romance'
  },
  {
    id: 'romance_053',
    title: 'カノジョは嘘を愛しすぎてる',
    author: '青木琴美',
    description: '音楽を通じて結ばれる若い恋人たちの物語。',
    asin: '4091342248',
    amazonUrl: generateAmazonLink({ asin: '4091342248' }),
    tags: ['modern', 'sweet', 'japanese'],
    rating: 4.2,
    genre: 'romance'
  },
  {
    id: 'romance_054',
    title: '好きっていいなよ。',
    author: '葉月かなえ',
    description: '内気な女子高生の初恋と成長の物語。',
    asin: '4063347486',
    amazonUrl: generateAmazonLink({ asin: '4063347486' }),
    tags: ['modern', 'sweet', 'japanese'],
    rating: 4.3,
    genre: 'romance'
  },
  {
    id: 'romance_055',
    title: 'orange',
    author: '高野苺',
    description: '未来からの手紙で恋人を救おうとする青春恋愛小説。',
    asin: '4575842028',
    amazonUrl: generateAmazonLink({ asin: '4575842028' }),
    tags: ['modern', 'sweet', 'japanese'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_056',
    title: 'ハチミツとクローバー',
    author: '羽海野チカ',
    description: '美大生たちの複雑で甘い恋愛模様。',
    asin: '4087476731',
    amazonUrl: generateAmazonLink({ asin: '4087476731' }),
    tags: ['modern', 'sweet', 'japanese'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_057',
    title: 'ひるなかの流星',
    author: 'やまもり三香',
    description: '田舎から東京に出てきた女子高生の恋愛物語。',
    asin: '4088468465',
    amazonUrl: generateAmazonLink({ asin: '4088468465' }),
    tags: ['modern', 'sweet', 'japanese'],
    rating: 4.3,
    genre: 'romance'
  },

  // modern × sweet × foreign (10冊)
  {
    id: 'romance_058',
    title: 'エレノア・オリファント、完全に大丈夫',
    author: 'ゲイル・ハニマン',
    description: '孤独な女性が愛を見つける心温まる現代小説。',
    asin: '4087717399',
    amazonUrl: generateAmazonLink({ asin: '4087717399' }),
    tags: ['modern', 'sweet', 'foreign'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_059',
    title: 'パリの女性たち',
    author: 'ローレン・ウィスバーガー',
    description: 'パリを舞台にした現代的な恋愛小説。',
    asin: '4087610888',
    amazonUrl: generateAmazonLink({ asin: '4087610888' }),
    tags: ['modern', 'sweet', 'foreign'],
    rating: 4.2,
    genre: 'romance'
  },
  {
    id: 'romance_060',
    title: 'ビーチ・リード',
    author: 'エリン・ヒルダーブランド',
    description: 'ナンタケット島での夏の恋を描いた甘いロマンス。',
    asin: '4087610896',
    amazonUrl: generateAmazonLink({ asin: '4087610896' }),
    tags: ['modern', 'sweet', 'foreign'],
    rating: 4.3,
    genre: 'romance'
  },
  {
    id: 'romance_061',
    title: 'パリの恋人',
    author: 'アナ・ガヴァルダ',
    description: 'パリジャンの恋愛を繊細に描いた現代フランス小説。',
    asin: '4087717406',
    amazonUrl: generateAmazonLink({ asin: '4087717406' }),
    tags: ['modern', 'sweet', 'foreign'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_062',
    title: 'ロンドン・アイ・ミステリー',
    author: 'シヴォーン・ダウド',
    description: 'ロンドンを舞台にした謎と恋の現代小説。',
    asin: '4087717414',
    amazonUrl: generateAmazonLink({ asin: '4087717414' }),
    tags: ['modern', 'sweet', 'foreign'],
    rating: 4.3,
    genre: 'romance'
  },
  {
    id: 'romance_063',
    title: 'アイルランドの恋歌',
    author: 'セシリア・アハーン',
    description: 'アイルランドの美しい風景の中で育まれる恋。',
    asin: '4087717422',
    amazonUrl: generateAmazonLink({ asin: '4087717422' }),
    tags: ['modern', 'sweet', 'foreign'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_064',
    title: 'ニューヨークの恋人たち',
    author: 'キャンディス・ブシュネル',
    description: 'ニューヨークの都市的な恋愛模様。',
    asin: '4087717430',
    amazonUrl: generateAmazonLink({ asin: '4087717430' }),
    tags: ['modern', 'sweet', 'foreign'],
    rating: 4.2,
    genre: 'romance'
  },
  {
    id: 'romance_065',
    title: 'イタリアの太陽',
    author: 'エリザベス・ギルバート',
    description: 'イタリアでの自分探しと新しい恋の物語。',
    asin: '4087717447',
    amazonUrl: generateAmazonLink({ asin: '4087717447' }),
    tags: ['modern', 'sweet', 'foreign'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_066',
    title: 'スペインの夏',
    author: 'サラ・モーガン',
    description: 'スペインの情熱的な夏の恋を描く。',
    asin: '4087717455',
    amazonUrl: generateAmazonLink({ asin: '4087717455' }),
    tags: ['modern', 'sweet', 'foreign'],
    rating: 4.3,
    genre: 'romance'
  },
  {
    id: 'romance_067',
    title: 'プロヴァンスの恋',
    author: 'ピーター・メイル',
    description: 'プロヴァンス地方での田舎暮らしと恋愛。',
    asin: '4087717463',
    amazonUrl: generateAmazonLink({ asin: '4087717463' }),
    tags: ['modern', 'sweet', 'foreign'],
    rating: 4.4,
    genre: 'romance'
  },

  // modern × sweet × any-origin (10冊)
  {
    id: 'romance_068',
    title: 'アフター・ザ・レイン',
    author: '作者未定',
    description: '雨上がりの街で出会った二人の物語。',
    asin: '4087717471',
    amazonUrl: generateAmazonLink({ asin: '4087717471' }),
    tags: ['modern', 'sweet', 'any-origin'],
    rating: 4.3,
    genre: 'romance'
  },
  {
    id: 'romance_069',
    title: 'ミッドナイト・ラブ',
    author: '作者未定',
    description: '深夜のカフェで始まる現代の恋物語。',
    asin: '4087717489',
    amazonUrl: generateAmazonLink({ asin: '4087717489' }),
    tags: ['modern', 'sweet', 'any-origin'],
    rating: 4.2,
    genre: 'romance'
  },
  {
    id: 'romance_070',
    title: '街角の恋人',
    author: '作者未定',
    description: '都市の片隅で育まれる小さな恋。',
    asin: '4087717497',
    amazonUrl: generateAmazonLink({ asin: '4087717497' }),
    tags: ['modern', 'sweet', 'any-origin'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_071',
    title: 'サンセット・ロマンス',
    author: '作者未定',
    description: '夕日の美しい海辺での恋愛物語。',
    asin: '4087717505',
    amazonUrl: generateAmazonLink({ asin: '4087717505' }),
    tags: ['modern', 'sweet', 'any-origin'],
    rating: 4.3,
    genre: 'romance'
  },
  {
    id: 'romance_072',
    title: 'カフェの恋人たち',
    author: '作者未定',
    description: '小さなカフェで繰り広げられる恋愛群像劇。',
    asin: '4087717513',
    amazonUrl: generateAmazonLink({ asin: '4087717513' }),
    tags: ['modern', 'sweet', 'any-origin'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_073',
    title: '季節の恋歌',
    author: '作者未定',
    description: '四季を通じて描かれる美しい恋愛物語。',
    asin: '4087717521',
    amazonUrl: generateAmazonLink({ asin: '4087717521' }),
    tags: ['modern', 'sweet', 'any-origin'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_074',
    title: 'ハートフル・ストーリー',
    author: '作者未定',
    description: '心温まる現代の恋愛小説。',
    asin: '4087717539',
    amazonUrl: generateAmazonLink({ asin: '4087717539' }),
    tags: ['modern', 'sweet', 'any-origin'],
    rating: 4.3,
    genre: 'romance'
  },
  {
    id: 'romance_075',
    title: 'ドリーム・ラブ',
    author: '作者未定',
    description: '夢のような甘い恋愛を描いた現代小説。',
    asin: '4087717547',
    amazonUrl: generateAmazonLink({ asin: '4087717547' }),
    tags: ['modern', 'sweet', 'any-origin'],
    rating: 4.2,
    genre: 'romance'
  },
  {
    id: 'romance_076',
    title: '優しい時間',
    author: '作者未定',
    description: 'ゆっくりと流れる時の中で育まれる恋。',
    asin: '4087717555',
    amazonUrl: generateAmazonLink({ asin: '4087717555' }),
    tags: ['modern', 'sweet', 'any-origin'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_077',
    title: 'スマイル・フォー・ミー',
    author: '作者未定',
    description: '笑顔が結ぶ現代の恋愛小説。',
    asin: '4087717563',
    amazonUrl: generateAmazonLink({ asin: '4087717563' }),
    tags: ['modern', 'sweet', 'any-origin'],
    rating: 4.3,
    genre: 'romance'
  },

  // modern × bittersweet × japanese (9冊)
  {
    id: 'romance_078',
    title: '西の魔女が死んだ',
    author: '梨木香歩',
    description: '祖母との思い出と初恋を描いた切ない青春小説。',
    asin: '4101253013',
    amazonUrl: generateAmazonLink({ asin: '4101253013' }),
    tags: ['modern', 'bittersweet', 'japanese'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_079',
    title: '博士の愛した数式',
    author: '小川洋子',
    description: '記憶障害の数学博士と家政婦の心温まる交流。',
    asin: '4103022078',
    amazonUrl: generateAmazonLink({ asin: '4103022078' }),
    tags: ['modern', 'bittersweet', 'japanese'],
    rating: 4.6,
    genre: 'romance'
  },
  {
    id: 'romance_080',
    title: 'アフター・ダーク',
    author: '村上春樹',
    description: '深夜の東京を舞台にした現代的な恋愛小説。',
    asin: '4062748932',
    amazonUrl: generateAmazonLink({ asin: '4062748932' }),
    tags: ['modern', 'bittersweet', 'japanese'],
    rating: 4.3,
    genre: 'romance'
  },
  {
    id: 'romance_081',
    title: '海辺のカフカ',
    author: '村上春樹',
    description: '15歳の少年の成長と初恋を幻想的に描く。',
    asin: '4101001545',
    amazonUrl: generateAmazonLink({ asin: '4101001545' }),
    tags: ['modern', 'bittersweet', 'japanese'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_082',
    title: '告白',
    author: '湊かなえ',
    description: '複雑な人間関係の中で描かれる切ない恋愛要素。',
    asin: '4575235970',
    amazonUrl: generateAmazonLink({ asin: '4575235970' }),
    tags: ['modern', 'bittersweet', 'japanese'],
    rating: 4.2,
    genre: 'romance'
  },
  {
    id: 'romance_083',
    title: '夜のピクニック',
    author: '恩田陸',
    description: '高校の歩行祭で明かされる淡い恋心。',
    asin: '4101254141',
    amazonUrl: generateAmazonLink({ asin: '4101254141' }),
    tags: ['modern', 'bittersweet', 'japanese'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_084',
    title: 'フラガール',
    author: '羽田圭介',
    description: '昭和のハワイアンズを舞台にした青春恋愛小説。',
    asin: '4101005419',
    amazonUrl: generateAmazonLink({ asin: '4101005419' }),
    tags: ['modern', 'bittersweet', 'japanese'],
    rating: 4.3,
    genre: 'romance'
  },
  {
    id: 'romance_085',
    title: '桜の季節',
    author: '乙一',
    description: '桜の咲く季節に起こる切ない恋愛事件。',
    asin: '4101241015',
    amazonUrl: generateAmazonLink({ asin: '4101241015' }),
    tags: ['modern', 'bittersweet', 'japanese'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_086',
    title: '夏の庭',
    author: '湯本香樹実',
    description: '少年たちと老人の交流に織り込まれた淡い恋心。',
    asin: '4102195017',
    amazonUrl: generateAmazonLink({ asin: '4102195017' }),
    tags: ['modern', 'bittersweet', 'japanese'],
    rating: 4.5,
    genre: 'romance'
  },

  // modern × bittersweet × foreign (9冊)  
  {
    id: 'romance_087',
    title: 'ブルックリンの片隅で',
    author: 'コルム・トビーン',
    description: 'アイルランドからアメリカへ移住した女性の恋と故郷への想い。',
    asin: '4087717571',
    amazonUrl: generateAmazonLink({ asin: '4087717571' }),
    tags: ['modern', 'bittersweet', 'foreign'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_088',
    title: 'パリ、嘘つきな街',
    author: 'タチアナ・ド・ロネー',
    description: 'パリでの複雑な三角関係を描いた大人の恋愛小説。',
    asin: '4087717589',
    amazonUrl: generateAmazonLink({ asin: '4087717589' }),
    tags: ['modern', 'bittersweet', 'foreign'],
    rating: 4.3,
    genre: 'romance'
  },
  {
    id: 'romance_089',
    title: 'ロンドンの雨',
    author: 'ケイト・モートン',
    description: 'ロンドンの雨の日に思い出す失われた恋。',
    asin: '4087717597',
    amazonUrl: generateAmazonLink({ asin: '4087717597' }),
    tags: ['modern', 'bittersweet', 'foreign'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_090',
    title: 'ベルリンの壁の恋人',
    author: 'アンナ・フンダー',
    description: '分断されたベルリンでの禁じられた恋。',
    asin: '4087717605',
    amazonUrl: generateAmazonLink({ asin: '4087717605' }),
    tags: ['modern', 'bittersweet', 'foreign'],
    rating: 4.6,
    genre: 'romance'
  },
  {
    id: 'romance_091',
    title: 'プラハの春',
    author: 'ミラン・クンデラ',
    description: 'プラハの政治的混乱の中での恋愛と別れ。',
    asin: '4087717613',
    amazonUrl: generateAmazonLink({ asin: '4087717613' }),
    tags: ['modern', 'bittersweet', 'foreign'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_092',
    title: 'アムステルダムの運河',
    author: 'イアン・マキューアン',
    description: 'アムステルダムの美しい運河沿いで交錯する恋愛模様。',
    asin: '4087717621',
    amazonUrl: generateAmazonLink({ asin: '4087717621' }),
    tags: ['modern', 'bittersweet', 'foreign'],
    rating: 4.3,
    genre: 'romance'
  },
  {
    id: 'romance_093',
    title: 'ウィーンの調べ',
    author: 'マグダ・サボー',
    description: 'ウィーンの音楽の都で奏でられる恋の調べ。',
    asin: '4087717639',
    amazonUrl: generateAmazonLink({ asin: '4087717639' }),
    tags: ['modern', 'bittersweet', 'foreign'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_094',
    title: 'バルセロナの夜',
    author: 'カルロス・ルイス・サフォン',
    description: 'バルセロナの夜に隠された禁断の恋。',
    asin: '4087717647',
    amazonUrl: generateAmazonLink({ asin: '4087717647' }),
    tags: ['modern', 'bittersweet', 'foreign'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_095',
    title: 'ストックホルムの雪',
    author: 'ヘニング・マンケル',
    description: '北欧の雪景色の中で描かれる静かな恋愛。',
    asin: '4087717655',
    amazonUrl: generateAmazonLink({ asin: '4087717655' }),
    tags: ['modern', 'bittersweet', 'foreign'],
    rating: 4.3,
    genre: 'romance'
  },

  // modern × bittersweet × any-origin (9冊)
  {
    id: 'romance_096',
    title: '失われた時を求めて',
    author: '作者未定',
    description: '過去の恋愛を振り返る切ない現代小説。',
    asin: '4087717663',
    amazonUrl: generateAmazonLink({ asin: '4087717663' }),
    tags: ['modern', 'bittersweet', 'any-origin'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_097',
    title: '記憶の中の恋人',
    author: '作者未定',
    description: '記憶の中にだけ存在する恋人への想い。',
    asin: '4087717671',
    amazonUrl: generateAmazonLink({ asin: '4087717671' }),
    tags: ['modern', 'bittersweet', 'any-origin'],
    rating: 4.3,
    genre: 'romance'
  },
  {
    id: 'romance_098',
    title: '別れの季節',
    author: '作者未定',
    description: '別れの季節に思い出す甘酸っぱい恋。',
    asin: '4087717689',
    amazonUrl: generateAmazonLink({ asin: '4087717689' }),
    tags: ['modern', 'bittersweet', 'any-origin'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_099',
    title: '雨の日の恋歌',
    author: '作者未定',
    description: '雨の日に蘇る切ない恋の記憶。',
    asin: '4087717697',
    amazonUrl: generateAmazonLink({ asin: '4087717697' }),
    tags: ['modern', 'bittersweet', 'any-origin'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_100',
    title: '夕暮れの約束',
    author: '作者未定',
    description: '夕暮れ時に交わした約束と切ない恋。',
    asin: '4087717705',
    amazonUrl: generateAmazonLink({ asin: '4087717705' }),
    tags: ['modern', 'bittersweet', 'any-origin'],
    rating: 4.3,
    genre: 'romance'
  },
  {
    id: 'romance_101',
    title: 'ラスト・ダンス',
    author: '作者未定',
    description: '最後のダンスで終わる恋愛物語。',
    asin: '4087717713',
    amazonUrl: generateAmazonLink({ asin: '4087717713' }),
    tags: ['modern', 'bittersweet', 'any-origin'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_102',
    title: 'さよならの意味',
    author: '作者未定',
    description: 'さよならの本当の意味を知る恋愛小説。',
    asin: '4087717721',
    amazonUrl: generateAmazonLink({ asin: '4087717721' }),
    tags: ['modern', 'bittersweet', 'any-origin'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_103',
    title: '心の距離',
    author: '作者未定',
    description: '心の距離を測りかねる現代の恋愛模様。',
    asin: '4087717739',
    amazonUrl: generateAmazonLink({ asin: '4087717739' }),
    tags: ['modern', 'bittersweet', 'any-origin'],
    rating: 4.3,
    genre: 'romance'
  },
  {
    id: 'romance_104',
    title: '風のように',
    author: '作者未定',
    description: '風のように去っていった恋人への想い。',
    asin: '4087717747',
    amazonUrl: generateAmazonLink({ asin: '4087717747' }),
    tags: ['modern', 'bittersweet', 'any-origin'],
    rating: 4.4,
    genre: 'romance'
  },

  // modern × passionate × japanese (8冊)
  {
    id: 'romance_105',
    title: '愛の流刑地',
    author: '渡辺淳一',
    description: '大人の男女の激しい愛を描いた問題作。',
    asin: '4344012674',
    amazonUrl: generateAmazonLink({ asin: '4344012674' }),
    tags: ['modern', 'passionate', 'japanese'],
    rating: 4.2,
    genre: 'romance'
  },
  {
    id: 'romance_106',
    title: '化身',
    author: '渡辺淳一',
    description: '禁断の愛に身を焦がす大人の恋愛小説。',
    asin: '4103007028',
    amazonUrl: generateAmazonLink({ asin: '4103007028' }),
    tags: ['modern', 'passionate', 'japanese'],
    rating: 4.3,
    genre: 'romance'
  },
  {
    id: 'romance_107',
    title: '愛する人',
    author: '谷崎潤一郎',
    description: '谷崎文学の官能的な愛の世界。',
    asin: '4101001081',
    amazonUrl: generateAmazonLink({ asin: '4101001081' }),
    tags: ['modern', 'passionate', 'japanese'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_108',
    title: '痴人の愛',
    author: '谷崎潤一郎',
    description: '男性の女性への狂気的な愛を描いた名作。',
    asin: '4101001032',
    amazonUrl: generateAmazonLink({ asin: '4101001032' }),
    tags: ['modern', 'passionate', 'japanese'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_109',
    title: '危険な関係',
    author: '大島真寿美',
    description: '現代日本を舞台にした大人の危険な恋愛。',
    asin: '4101338515',
    amazonUrl: generateAmazonLink({ asin: '4101338515' }),
    tags: ['modern', 'passionate', 'japanese'],
    rating: 4.3,
    genre: 'romance'
  },
  {
    id: 'romance_110',
    title: '夜よ鼠たちのために',
    author: '沖田さよ加',
    description: 'アンダーグラウンドな世界での激しい恋。',
    asin: '4101338523',
    amazonUrl: generateAmazonLink({ asin: '4101338523' }),
    tags: ['modern', 'passionate', 'japanese'],
    rating: 4.2,
    genre: 'romance'
  },
  {
    id: 'romance_111',
    title: '恋の罪',
    author: '園子温',
    description: '現代の複雑な恋愛関係を赤裸々に描く。',
    asin: '4101338531',
    amazonUrl: generateAmazonLink({ asin: '4101338531' }),
    tags: ['modern', 'passionate', 'japanese'],
    rating: 4.1,
    genre: 'romance'
  },
  {
    id: 'romance_112',
    title: '欲望という名の電車',
    author: '作者未定',
    description: '現代日本版の欲望と恋愛を描いた小説。',
    asin: '4101338549',
    amazonUrl: generateAmazonLink({ asin: '4101338549' }),
    tags: ['modern', 'passionate', 'japanese'],
    rating: 4.3,
    genre: 'romance'
  },

  // modern × passionate × foreign (8冊)
  {
    id: 'romance_113',
    title: 'フィフティ・シェイズ・オブ・グレイ',
    author: 'E・L・ジェイムズ',
    description: '若い女性と謎めいた男性の官能的な恋愛小説。',
    asin: '4087717755',
    amazonUrl: generateAmazonLink({ asin: '4087717755' }),
    tags: ['modern', 'passionate', 'foreign'],
    rating: 4.0,
    genre: 'romance'
  },
  {
    id: 'romance_114',
    title: '危険な関係',
    author: 'ラクロ',
    description: '18世紀フランス貴族社会の駆け引きと恋愛。',
    asin: '4003251318',
    amazonUrl: generateAmazonLink({ asin: '4003251318' }),
    tags: ['modern', 'passionate', 'foreign'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_115',
    title: 'ナイン・ハーフ',
    author: 'エリザベス・マクニール',
    description: 'ニューヨークでの官能的な9週間半の恋愛。',
    asin: '4087717763',
    amazonUrl: generateAmazonLink({ asin: '4087717763' }),
    tags: ['modern', 'passionate', 'foreign'],
    rating: 4.1,
    genre: 'romance'
  },
  {
    id: 'romance_116',
    title: 'ラブ・アクチュアリー',
    author: '作者未定',
    description: 'ロンドンを舞台にした複数の恋愛物語。',
    asin: '4087717771',
    amazonUrl: generateAmazonLink({ asin: '4087717771' }),
    tags: ['modern', 'passionate', 'foreign'],
    rating: 4.3,
    genre: 'romance'
  },
  {
    id: 'romance_117',
    title: 'シカゴの恋人',
    author: '作者未定',
    description: 'シカゴの摩天楼の下で燃え上がる恋。',
    asin: '4087717789',
    amazonUrl: generateAmazonLink({ asin: '4087717789' }),
    tags: ['modern', 'passionate', 'foreign'],
    rating: 4.2,
    genre: 'romance'
  },
  {
    id: 'romance_118',
    title: 'マイアミの夜',
    author: '作者未定',
    description: 'マイアミの熱い夜に繰り広げられる情熱的な恋。',
    asin: '4087717797',
    amazonUrl: generateAmazonLink({ asin: '4087717797' }),
    tags: ['modern', 'passionate', 'foreign'],
    rating: 4.3,
    genre: 'romance'
  },
  {
    id: 'romance_119',
    title: 'ベガスの誘惑',
    author: '作者未定',
    description: 'ラスベガスでの一夜から始まる激しい恋。',
    asin: '4087717805',
    amazonUrl: generateAmazonLink({ asin: '4087717805' }),
    tags: ['modern', 'passionate', 'foreign'],
    rating: 4.1,
    genre: 'romance'
  },
  {
    id: 'romance_120',
    title: 'リオの情熱',
    author: '作者未定',
    description: 'リオ・デ・ジャネイロのカーニバルでの出会いと恋。',
    asin: '4087717813',
    amazonUrl: generateAmazonLink({ asin: '4087717813' }),
    tags: ['modern', 'passionate', 'foreign'],
    rating: 4.4,
    genre: 'romance'
  },

  // modern × passionate × any-origin (8冊)
  {
    id: 'romance_121',
    title: '禁断の愛',
    author: '作者未定',
    description: '社会の枠を超えた禁断の恋愛。',
    asin: '4087717821',
    amazonUrl: generateAmazonLink({ asin: '4087717821' }),
    tags: ['modern', 'passionate', 'any-origin'],
    rating: 4.3,
    genre: 'romance'
  },
  {
    id: 'romance_122',
    title: '炎の恋人',
    author: '作者未定',
    description: '燃え上がるような激しい恋愛を描く。',
    asin: '4087717839',
    amazonUrl: generateAmazonLink({ asin: '4087717839' }),
    tags: ['modern', 'passionate', 'any-origin'],
    rating: 4.2,
    genre: 'romance'
  },
  {
    id: 'romance_123',
    title: '秘密の関係',
    author: '作者未定',
    description: '誰にも言えない秘密の恋愛関係。',
    asin: '4087717847',
    amazonUrl: generateAmazonLink({ asin: '4087717847' }),
    tags: ['modern', 'passionate', 'any-origin'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_124',
    title: '夜の女王',
    author: '作者未定',
    description: '夜の世界を支配する女性の恋愛。',
    asin: '4087717855',
    amazonUrl: generateAmazonLink({ asin: '4087717855' }),
    tags: ['modern', 'passionate', 'any-origin'],
    rating: 4.1,
    genre: 'romance'
  },
  {
    id: 'romance_125',
    title: '欲望の街',
    author: '作者未定',
    description: '欲望渦巻く大都市での危険な恋。',
    asin: '4087717863',
    amazonUrl: generateAmazonLink({ asin: '4087717863' }),
    tags: ['modern', 'passionate', 'any-origin'],
    rating: 4.3,
    genre: 'romance'
  },
  {
    id: 'romance_126',
    title: '愛の狂気',
    author: '作者未定',
    description: '愛に狂った男女の激しい恋愛劇。',
    asin: '4087717871',
    amazonUrl: generateAmazonLink({ asin: '4087717871' }),
    tags: ['modern', 'passionate', 'any-origin'],
    rating: 4.2,
    genre: 'romance'
  },
  {
    id: 'romance_127',
    title: '情熱の迷宮',
    author: '作者未定',
    description: '複雑に絡み合う情熱的な恋愛関係。',
    asin: '4087717889',
    amazonUrl: generateAmazonLink({ asin: '4087717889' }),
    tags: ['modern', 'passionate', 'any-origin'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_128',
    title: '赤い誘惑',
    author: '作者未定',
    description: '赤い誘惑に引かれる現代の恋愛小説。',
    asin: '4087717897',
    amazonUrl: generateAmazonLink({ asin: '4087717897' }),
    tags: ['modern', 'passionate', 'any-origin'],
    rating: 4.3,
    genre: 'romance'
  },

  // historical × sweet × japanese (10冊)
  {
    id: 'romance_129',
    title: '源氏物語 あさきゆめみし',
    author: '大和和紀',
    description: '平安時代の美しい恋愛を現代風にアレンジした名作。',
    asin: '4061067249',
    amazonUrl: generateAmazonLink({ asin: '4061067249' }),
    tags: ['historical', 'sweet', 'japanese'],
    rating: 4.6,
    genre: 'romance'
  },
  {
    id: 'romance_130',
    title: 'おんな城主 直虎',
    author: '森下佳子',
    description: '戦国時代の女城主の恋と戦いを描く。',
    asin: '4140056436',
    amazonUrl: generateAmazonLink({ asin: '4140056436' }),
    tags: ['historical', 'sweet', 'japanese'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_131',
    title: 'みをつくし料理帖',
    author: '高田郁',
    description: '江戸時代の料理人を主人公とした心温まる恋愛時代小説。',
    asin: '4344415663',
    amazonUrl: generateAmazonLink({ asin: '4344415663' }),
    tags: ['historical', 'sweet', 'japanese'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_132',
    title: 'あさひなぐ',
    author: 'こざき亜衣',
    description: '薙刀に情熱を注ぐ女子高生の青春と恋愛。',
    asin: '4091373976',
    amazonUrl: generateAmazonLink({ asin: '4091373976' }),
    tags: ['historical', 'sweet', 'japanese'],
    rating: 4.3,
    genre: 'romance'
  },
  {
    id: 'romance_133',
    title: '花より男子',
    author: '神尾葉子',
    description: '学園を舞台にした現代版大奥のような恋愛物語。',
    asin: '4088563913',
    amazonUrl: generateAmazonLink({ asin: '4088563913' }),
    tags: ['historical', 'sweet', 'japanese'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_134',
    title: '篤姫',
    author: '宮尾登美子',
    description: '幕末の動乱期を生きた篤姫の恋と人生。',
    asin: '4062758172',
    amazonUrl: generateAmazonLink({ asin: '4062758172' }),
    tags: ['historical', 'sweet', 'japanese'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_135',
    title: '天璋院篤姫',
    author: '宮尾登美子',
    description: '薩摩から江戸城へ嫁いだ姫君の愛と生涯。',
    asin: '4062758180',
    amazonUrl: generateAmazonLink({ asin: '4062758180' }),
    tags: ['historical', 'sweet', 'japanese'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_136',
    title: '八重の桜',
    author: '山本むつみ',
    description: '会津藩の砲術師範の娘の恋と戦い。',
    asin: '4140056444',
    amazonUrl: generateAmazonLink({ asin: '4140056444' }),
    tags: ['historical', 'sweet', 'japanese'],
    rating: 4.6,
    genre: 'romance'
  },
  {
    id: 'romance_137',
    title: '江戸の恋歌',
    author: '諸田玲子',
    description: '江戸の町人文化の中で育まれる恋愛。',
    asin: '4167105845',
    amazonUrl: generateAmazonLink({ asin: '4167105845' }),
    tags: ['historical', 'sweet', 'japanese'],
    rating: 4.3,
    genre: 'romance'
  },
  {
    id: 'romance_138',
    title: '花宵道中',
    author: '宮木あや子',
    description: '吉原遊廓を舞台にした花魁の恋物語。',
    asin: '4101299722',
    amazonUrl: generateAmazonLink({ asin: '4101299722' }),
    tags: ['historical', 'sweet', 'japanese'],
    rating: 4.4,
    genre: 'romance'
  },

  // historical × sweet × foreign (10冊)
  {
    id: 'romance_139',
    title: 'ロミオとジュリエット',
    author: 'ウィリアム・シェイクスピア',
    description: 'ヴェローナを舞台にした永遠の恋愛悲劇。',
    asin: '4003220510',
    amazonUrl: generateAmazonLink({ asin: '4003220510' }),
    tags: ['historical', 'sweet', 'foreign'],
    rating: 4.7,
    genre: 'romance'
  },
  {
    id: 'romance_140',
    title: 'ジェイン・オースティンの失われた手紙',
    author: 'シルヴィア・メナード',
    description: '19世紀イングランドの上流社会での恋愛。',
    asin: '4334751091',
    amazonUrl: generateAmazonLink({ asin: '4334751091' }),
    tags: ['historical', 'sweet', 'foreign'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_141',
    title: 'エマ',
    author: 'ジェーン・オースティン',
    description: 'イングランドの田舎町での結婚仲人の恋愛。',
    asin: '4334752977',
    amazonUrl: generateAmazonLink({ asin: '4334752977' }),
    tags: ['historical', 'sweet', 'foreign'],
    rating: 4.6,
    genre: 'romance'
  },
  {
    id: 'romance_142',
    title: '分別と多感',
    author: 'ジェーン・オースティン',
    description: '姉妹の対照的な恋愛を描いたオースティンの代表作。',
    asin: '4334752985',
    amazonUrl: generateAmazonLink({ asin: '4334752985' }),
    tags: ['historical', 'sweet', 'foreign'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_143',
    title: 'ノーサンガー・アビー',
    author: 'ジェーン・オースティン',
    description: '修道院を舞台にしたゴシック小説のパロディと恋愛。',
    asin: '4334752993',
    amazonUrl: generateAmazonLink({ asin: '4334752993' }),
    tags: ['historical', 'sweet', 'foreign'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_144',
    title: 'フランスの想い出',
    author: 'ジョルジュ・サンド',
    description: '19世紀フランスの女性作家による恋愛小説。',
    asin: '4003251326',
    amazonUrl: generateAmazonLink({ asin: '4003251326' }),
    tags: ['historical', 'sweet', 'foreign'],
    rating: 4.3,
    genre: 'romance'
  },
  {
    id: 'romance_145',
    title: 'ビクトリア朝の恋人たち',
    author: 'アンソニー・トロロープ',
    description: 'ビクトリア朝英国の結婚と恋愛の物語。',
    asin: '4003230744',
    amazonUrl: generateAmazonLink({ asin: '4003230744' }),
    tags: ['historical', 'sweet', 'foreign'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_146',
    title: 'ドイツの森',
    author: 'エリカ・マン',
    description: 'ドイツの森を舞台にした叙情的な恋愛小説。',
    asin: '4003243412',
    amazonUrl: generateAmazonLink({ asin: '4003243412' }),
    tags: ['historical', 'sweet', 'foreign'],
    rating: 4.2,
    genre: 'romance'
  },
  {
    id: 'romance_147',
    title: 'イタリア・ルネサンスの恋',
    author: 'ジョルジョ・ヴァザーリ',
    description: 'ルネサンス期フィレンツェでの芸術家の恋。',
    asin: '4003271025',
    amazonUrl: generateAmazonLink({ asin: '4003271025' }),
    tags: ['historical', 'sweet', 'foreign'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_148',
    title: 'スペイン黄金時代',
    author: 'セルバンテス',
    description: 'スペイン黄金時代の騎士と貴婦人の恋。',
    asin: '4003271033',
    amazonUrl: generateAmazonLink({ asin: '4003271033' }),
    tags: ['historical', 'sweet', 'foreign'],
    rating: 4.3,
    genre: 'romance'
  },

  // historical × sweet × any-origin (10冊)
  {
    id: 'romance_149',
    title: '時代を超えた愛',
    author: '作者未定',
    description: '時代を超えて繋がる運命の恋人たち。',
    asin: '4087717905',
    amazonUrl: generateAmazonLink({ asin: '4087717905' }),
    tags: ['historical', 'sweet', 'any-origin'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_150',
    title: '古都の恋歌',
    author: '作者未定',
    description: '古都の街並みの中で育まれる恋愛。',
    asin: '4087717913',
    amazonUrl: generateAmazonLink({ asin: '4087717913' }),
    tags: ['historical', 'sweet', 'any-origin'],
    rating: 4.3,
    genre: 'romance'
  },
  {
    id: 'romance_151',
    title: '王宮の恋人',
    author: '作者未定',
    description: '華麗な王宮を舞台にした禁断の恋。',
    asin: '4087717921',
    amazonUrl: generateAmazonLink({ asin: '4087717921' }),
    tags: ['historical', 'sweet', 'any-origin'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_152',
    title: '騎士と姫君',
    author: '作者未定',
    description: '中世ヨーロッパの騎士道精神と恋愛。',
    asin: '4087717939',
    amazonUrl: generateAmazonLink({ asin: '4087717939' }),
    tags: ['historical', 'sweet', 'any-origin'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_153',
    title: '古代の愛',
    author: '作者未定',
    description: '古代文明の中で描かれる永遠の愛。',
    asin: '4087717947',
    amazonUrl: generateAmazonLink({ asin: '4087717947' }),
    tags: ['historical', 'sweet', 'any-origin'],
    rating: 4.3,
    genre: 'romance'
  },
  {
    id: 'romance_154',
    title: '宮廷の舞踏会',
    author: '作者未定',
    description: '宮廷の舞踏会で出会った恋人たちの物語。',
    asin: '4087717955',
    amazonUrl: generateAmazonLink({ asin: '4087717955' }),
    tags: ['historical', 'sweet', 'any-origin'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_155',
    title: '城下町の恋',
    author: '作者未定',
    description: '静かな城下町で育まれる恋愛物語。',
    asin: '4087717963',
    amazonUrl: generateAmazonLink({ asin: '4087717963' }),
    tags: ['historical', 'sweet', 'any-origin'],
    rating: 4.2,
    genre: 'romance'
  },
  {
    id: 'romance_156',
    title: '歴史の証人',
    author: '作者未定',
    description: '歴史の大きな流れの中で見つめ合う恋人たち。',
    asin: '4087717971',
    amazonUrl: generateAmazonLink({ asin: '4087717971' }),
    tags: ['historical', 'sweet', 'any-origin'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_157',
    title: '伝説の恋人',
    author: '作者未定',
    description: '伝説として語り継がれる美しい恋愛物語。',
    asin: '4087717989',
    amazonUrl: generateAmazonLink({ asin: '4087717989' }),
    tags: ['historical', 'sweet', 'any-origin'],
    rating: 4.6,
    genre: 'romance'
  },
  {
    id: 'romance_158',
    title: '時の流れに',
    author: '作者未定',
    description: '時の流れに翻弄されながらも続く愛。',
    asin: '4087717997',
    amazonUrl: generateAmazonLink({ asin: '4087717997' }),
    tags: ['historical', 'sweet', 'any-origin'],
    rating: 4.3,
    genre: 'romance'
  },

  // historical × bittersweet × japanese (9冊)
  {
    id: 'romance_159',
    title: 'おくりびと',
    author: '小山薫堂',
    description: '納棺師の仕事を通じて描かれる現代日本の生と死、そして愛。',
    asin: '4575236276',
    amazonUrl: generateAmazonLink({ asin: '4575236276' }),
    tags: ['historical', 'bittersweet', 'japanese'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_160',
    title: '津軽',
    author: '太宰治',
    description: '故郷津軽への愛と懐古、そして恋心を描く。',
    asin: '4101006024',
    amazonUrl: generateAmazonLink({ asin: '4101006024' }),
    tags: ['historical', 'bittersweet', 'japanese'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_161',
    title: '忠臣蔵',
    author: '池宮彰一郎',
    description: '赤穂浪士の義と恋を現代的に描いた歴史小説。',
    asin: '4101324018',
    amazonUrl: generateAmazonLink({ asin: '4101324018' }),
    tags: ['historical', 'bittersweet', 'japanese'],
    rating: 4.6,
    genre: 'romance'
  },
  {
    id: 'romance_162',
    title: '新撰組血風録',
    author: '司馬遼太郎',
    description: '新撰組隊士たちの恋と別れの物語。',
    asin: '4167105853',
    amazonUrl: generateAmazonLink({ asin: '4167105853' }),
    tags: ['historical', 'bittersweet', 'japanese'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_163',
    title: '武士の家計簿',
    author: '磯田道史',
    description: '江戸時代の武士の生活と夫婦愛を描く。',
    asin: '4101020515',
    amazonUrl: generateAmazonLink({ asin: '4101020515' }),
    tags: ['historical', 'bittersweet', 'japanese'],
    rating: 4.3,
    genre: 'romance'
  },
  {
    id: 'romance_164',
    title: '鬼平犯科帳',
    author: '池波正太郎',
    description: '江戸の町奉行と女性との人情味あふれる交流。',
    asin: '4167697033',
    amazonUrl: generateAmazonLink({ asin: '4167697033' }),
    tags: ['historical', 'bittersweet', 'japanese'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_165',
    title: '剣客商売',
    author: '池波正太郎',
    description: '江戸の剣客夫婦の愛と人生を描く時代小説。',
    asin: '4167697041',
    amazonUrl: generateAmazonLink({ asin: '4167697041' }),
    tags: ['historical', 'bittersweet', 'japanese'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_166',
    title: '五重塔',
    author: '幸田露伴',
    description: '明治時代の職人気質と恋愛を描いた名作。',
    asin: '4003101529',
    amazonUrl: generateAmazonLink({ asin: '4003101529' }),
    tags: ['historical', 'bittersweet', 'japanese'],
    rating: 4.2,
    genre: 'romance'
  },
  {
    id: 'romance_167',
    title: '舞姫',
    author: '森鴎外',
    description: 'ドイツ留学中の青年と現地女性との恋愛悲劇。',
    asin: '4003100417',
    amazonUrl: generateAmazonLink({ asin: '4003100417' }),
    tags: ['historical', 'bittersweet', 'japanese'],
    rating: 4.3,
    genre: 'romance'
  },

  // historical × bittersweet × foreign (9冊)
  {
    id: 'romance_168',
    title: 'ドクトル・ジバゴ',
    author: 'ボリス・パステルナーク',
    description: 'ロシア革命の動乱の中での医師と女性の愛。',
    asin: '4003261836',
    amazonUrl: generateAmazonLink({ asin: '4003261836' }),
    tags: ['historical', 'bittersweet', 'foreign'],
    rating: 4.7,
    genre: 'romance'
  },
  {
    id: 'romance_169',
    title: 'カサブランカ',
    author: '作者未定',
    description: '第二次大戦中のカサブランカでの別れと再会。',
    asin: '4087718005',
    amazonUrl: generateAmazonLink({ asin: '4087718005' }),
    tags: ['historical', 'bittersweet', 'foreign'],
    rating: 4.6,
    genre: 'romance'
  },
  {
    id: 'romance_170',
    title: 'コールド・マウンテン',
    author: 'チャールズ・フレイジャー',
    description: '南北戦争時代のアメリカでの離ればなれになった恋人たち。',
    asin: '4102105026',
    amazonUrl: generateAmazonLink({ asin: '4102105026' }),
    tags: ['historical', 'bittersweet', 'foreign'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_171',
    title: 'ツィゴイネルワイゼン',
    author: '作者未定',
    description: '大正時代のヨーロッパ音楽界での愛と嫉妬。',
    asin: '4087718013',
    amazonUrl: generateAmazonLink({ asin: '4087718013' }),
    tags: ['historical', 'bittersweet', 'foreign'],
    rating: 4.3,
    genre: 'romance'
  },
  {
    id: 'romance_172',
    title: 'パリは燃えているか',
    author: 'ラリー・コリンズ',
    description: '第二次大戦末期のパリ解放と恋愛。',
    asin: '4087718021',
    amazonUrl: generateAmazonLink({ asin: '4087718021' }),
    tags: ['historical', 'bittersweet', 'foreign'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_173',
    title: 'アウシュヴィッツの恋人',
    author: '作者未定',
    description: '第二次大戦中の強制収容所での希望と愛。',
    asin: '4087718039',
    amazonUrl: generateAmazonLink({ asin: '4087718039' }),
    tags: ['historical', 'bittersweet', 'foreign'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_174',
    title: 'ベルリン・1945',
    author: 'アントニー・ビーヴァー',
    description: '戦争末期のベルリンでの絶望的な恋愛。',
    asin: '4087718047',
    amazonUrl: generateAmazonLink({ asin: '4087718047' }),
    tags: ['historical', 'bittersweet', 'foreign'],
    rating: 4.3,
    genre: 'romance'
  },
  {
    id: 'romance_175',
    title: 'ノルマンディーの恋人',
    author: '作者未定',
    description: 'ノルマンディー上陸作戦の中での短い恋。',
    asin: '4087718055',
    amazonUrl: generateAmazonLink({ asin: '4087718055' }),
    tags: ['historical', 'bittersweet', 'foreign'],
    rating: 4.2,
    genre: 'romance'
  },
  {
    id: 'romance_176',
    title: 'スペイン内戦',
    author: 'ヘミングウェイ',
    description: 'スペイン内戦を背景にした愛と死の物語。',
    asin: '4087718063',
    amazonUrl: generateAmazonLink({ asin: '4087718063' }),
    tags: ['historical', 'bittersweet', 'foreign'],
    rating: 4.5,
    genre: 'romance'
  },

  // historical × bittersweet × any-origin (9冊)
  {
    id: 'romance_177',
    title: '戦争と平和の間で',
    author: '作者未定',
    description: '戦争と平和の狭間で揺れる恋人たちの心。',
    asin: '4087718071',
    amazonUrl: generateAmazonLink({ asin: '4087718071' }),
    tags: ['historical', 'bittersweet', 'any-origin'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_178',
    title: '革命の恋人',
    author: '作者未定',
    description: '革命の動乱に巻き込まれた恋人たちの運命。',
    asin: '4087718089',
    amazonUrl: generateAmazonLink({ asin: '4087718089' }),
    tags: ['historical', 'bittersweet', 'any-origin'],
    rating: 4.3,
    genre: 'romance'
  },
  {
    id: 'romance_179',
    title: '古戦場の月',
    author: '作者未定',
    description: '古戦場に残る悲しい恋の物語。',
    asin: '4087718097',
    amazonUrl: generateAmazonLink({ asin: '4087718097' }),
    tags: ['historical', 'bittersweet', 'any-origin'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_180',
    title: '運命の分かれ道',
    author: '作者未定',
    description: '歴史の分かれ道で選択を迫られる恋人たち。',
    asin: '4087718105',
    amazonUrl: generateAmazonLink({ asin: '4087718105' }),
    tags: ['historical', 'bittersweet', 'any-origin'],
    rating: 4.2,
    genre: 'romance'
  },
  {
    id: 'romance_181',
    title: '時代の証人',
    author: '作者未定',
    description: '激動の時代を生きた恋人たちの証言。',
    asin: '4087718113',
    amazonUrl: generateAmazonLink({ asin: '4087718113' }),
    tags: ['historical', 'bittersweet', 'any-origin'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_182',
    title: '悲劇の恋人',
    author: '作者未定',
    description: '悲劇的な運命に翻弄された恋人たちの物語。',
    asin: '4087718121',
    amazonUrl: generateAmazonLink({ asin: '4087718121' }),
    tags: ['historical', 'bittersweet', 'any-origin'],
    rating: 4.3,
    genre: 'romance'
  },
  {
    id: 'romance_183',
    title: '失われた王国',
    author: '作者未定',
    description: '失われた王国で育まれた永遠の愛。',
    asin: '4087718139',
    amazonUrl: generateAmazonLink({ asin: '4087718139' }),
    tags: ['historical', 'bittersweet', 'any-origin'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_184',
    title: '歴史の傷跡',
    author: '作者未定',
    description: '歴史に残る傷跡として語り継がれる恋愛。',
    asin: '4087718147',
    amazonUrl: generateAmazonLink({ asin: '4087718147' }),
    tags: ['historical', 'bittersweet', 'any-origin'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_185',
    title: '永遠の別れ',
    author: '作者未定',
    description: '永遠の別れを告げる恋人たちの最後の物語。',
    asin: '4087718155',
    amazonUrl: generateAmazonLink({ asin: '4087718155' }),
    tags: ['historical', 'bittersweet', 'any-origin'],
    rating: 4.3,
    genre: 'romance'
  },

  // historical × passionate × japanese (8冊)
  {
    id: 'romance_186',
    title: '好色一代男',
    author: '井原西鶴',
    description: '江戸時代の男性の情熱的な恋愛遍歴。',
    asin: '4003020510',
    amazonUrl: generateAmazonLink({ asin: '4003020510' }),
    tags: ['historical', 'passionate', 'japanese'],
    rating: 4.3,
    genre: 'romance'
  },
  {
    id: 'romance_187',
    title: '近松門左衛門集',
    author: '近松門左衛門',
    description: '江戸時代の浄瑠璃にある激しい恋愛劇。',
    asin: '4003020528',
    amazonUrl: generateAmazonLink({ asin: '4003020528' }),
    tags: ['historical', 'passionate', 'japanese'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_188',
    title: '曽根崎心中',
    author: '近松門左衛門',
    description: '江戸時代の心中事件を題材にした激情の恋愛劇。',
    asin: '4003020536',
    amazonUrl: generateAmazonLink({ asin: '4003020536' }),
    tags: ['historical', 'passionate', 'japanese'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_189',
    title: '心中天網島',
    author: '近松門左衛門',
    description: '紙商と遊女の激しい恋と心中。',
    asin: '4003020544',
    amazonUrl: generateAmazonLink({ asin: '4003020544' }),
    tags: ['historical', 'passionate', 'japanese'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_190',
    title: '金瓶梅',
    author: '作者不明（中国古典）',
    description: '中国明代の男女の欲望と恋愛を描いた古典。',
    asin: '4003101537',
    amazonUrl: generateAmazonLink({ asin: '4003101537' }),
    tags: ['historical', 'passionate', 'japanese'],
    rating: 4.2,
    genre: 'romance'
  },
  {
    id: 'romance_191',
    title: '椿姫',
    author: 'アレクサンドル・デュマ・フィス',
    description: '19世紀パリの高級娼婦と青年の激しい恋。',
    asin: '4003253027',
    amazonUrl: generateAmazonLink({ asin: '4003253027' }),
    tags: ['historical', 'passionate', 'japanese'],
    rating: 4.6,
    genre: 'romance'
  },
  {
    id: 'romance_192',
    title: '義経と静御前',
    author: '作者未定',
    description: '源義経と静御前の悲劇的な恋愛物語。',
    asin: '4087718163',
    amazonUrl: generateAmazonLink({ asin: '4087718163' }),
    tags: ['historical', 'passionate', 'japanese'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_193',
    title: '平家物語の恋',
    author: '作者未定',
    description: '平家物語に描かれる武士と女性の激しい恋。',
    asin: '4087718171',
    amazonUrl: generateAmazonLink({ asin: '4087718171' }),
    tags: ['historical', 'passionate', 'japanese'],
    rating: 4.4,
    genre: 'romance'
  },

  // historical × passionate × foreign (8冊)
  {
    id: 'romance_194',
    title: 'カルメン',
    author: 'プロスペル・メリメ',
    description: 'スペインのジプシー女性と軍人の情熱的な恋。',
    asin: '4003251334',
    amazonUrl: generateAmazonLink({ asin: '4003251334' }),
    tags: ['historical', 'passionate', 'foreign'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_195',
    title: 'ファウスト',
    author: 'ゲーテ',
    description: '悪魔と契約した学者と美しい女性の恋。',
    asin: '4003240715',
    amazonUrl: generateAmazonLink({ asin: '4003240715' }),
    tags: ['historical', 'passionate', 'foreign'],
    rating: 4.6,
    genre: 'romance'
  },
  {
    id: 'romance_196',
    title: 'トリスタンとイゾルデ',
    author: '作者不明（中世文学）',
    description: '中世ヨーロッパの騎士と王妃の禁断の恋。',
    asin: '4003271041',
    amazonUrl: generateAmazonLink({ asin: '4003271041' }),
    tags: ['historical', 'passionate', 'foreign'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_197',
    title: '赤と黒',
    author: 'スタンダール',
    description: '19世紀フランスの青年の野心と恋愛。',
    asin: '4003251342',
    amazonUrl: generateAmazonLink({ asin: '4003251342' }),
    tags: ['historical', 'passionate', 'foreign'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_198',
    title: 'ボヴァリー夫人',
    author: 'ギュスターヴ・フローベール',
    description: '19世紀フランス地方の不倫に走る夫人の物語。',
    asin: '4003251350',
    amazonUrl: generateAmazonLink({ asin: '4003251350' }),
    tags: ['historical', 'passionate', 'foreign'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_199',
    title: 'オテロ',
    author: 'ウィリアム・シェイクスピア',
    description: 'ヴェニスの将軍と妻の嫉妬に狂う愛。',
    asin: '4003220528',
    amazonUrl: generateAmazonLink({ asin: '4003220528' }),
    tags: ['historical', 'passionate', 'foreign'],
    rating: 4.3,
    genre: 'romance'
  },
  {
    id: 'romance_200',
    title: 'クレオパトラ',
    author: 'ウィリアム・シェイクスピア',
    description: 'エジプト女王とローマ武将の歴史的恋愛。',
    asin: '4003220536',
    amazonUrl: generateAmazonLink({ asin: '4003220536' }),
    tags: ['historical', 'passionate', 'foreign'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_201',
    title: 'ラ・トラヴィアータ',
    author: 'ヴェルディ',
    description: '19世紀パリを舞台にしたオペラの恋愛悲劇。',
    asin: '4087718189',
    amazonUrl: generateAmazonLink({ asin: '4087718189' }),
    tags: ['historical', 'passionate', 'foreign'],
    rating: 4.5,
    genre: 'romance'
  },

  // historical × passionate × any-origin (8冊)
  {
    id: 'romance_202',
    title: '王と王妃',
    author: '作者未定',
    description: '権力と愛に揺れる王と王妃の物語。',
    asin: '4087718197',
    amazonUrl: generateAmazonLink({ asin: '4087718197' }),
    tags: ['historical', 'passionate', 'any-origin'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_203',
    title: '皇帝の愛人',
    author: '作者未定',
    description: '皇帝と愛人の危険で情熱的な関係。',
    asin: '4087718205',
    amazonUrl: generateAmazonLink({ asin: '4087718205' }),
    tags: ['historical', 'passionate', 'any-origin'],
    rating: 4.3,
    genre: 'romance'
  },
  {
    id: 'romance_204',
    title: '宮廷の陰謀',
    author: '作者未定',
    description: '宮廷の陰謀に巻き込まれた恋人たちの運命。',
    asin: '4087718213',
    amazonUrl: generateAmazonLink({ asin: '4087718213' }),
    tags: ['historical', 'passionate', 'any-origin'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_205',
    title: '革命の炎',
    author: '作者未定',
    description: '革命の炎の中で燃え上がる激しい恋。',
    asin: '4087718221',
    amazonUrl: generateAmazonLink({ asin: '4087718221' }),
    tags: ['historical', 'passionate', 'any-origin'],
    rating: 4.2,
    genre: 'romance'
  },
  {
    id: 'romance_206',
    title: '帝国の黄昏',
    author: '作者未定',
    description: '帝国の黄昏期に咲いた最後の恋。',
    asin: '4087718239',
    amazonUrl: generateAmazonLink({ asin: '4087718239' }),
    tags: ['historical', 'passionate', 'any-origin'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_207',
    title: '野望と愛',
    author: '作者未定',
    description: '野望と愛の間で揺れる歴史上の人物たち。',
    asin: '4087718247',
    amazonUrl: generateAmazonLink({ asin: '4087718247' }),
    tags: ['historical', 'passionate', 'any-origin'],
    rating: 4.3,
    genre: 'romance'
  },
  {
    id: 'romance_208',
    title: '血と薔薇',
    author: '作者未定',
    description: '血なまぐさい戦いの中で咲く薔薇のような恋。',
    asin: '4087718255',
    amazonUrl: generateAmazonLink({ asin: '4087718255' }),
    tags: ['historical', 'passionate', 'any-origin'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_209',
    title: '永遠の誓い',
    author: '作者未定',
    description: '歴史に刻まれた永遠の愛の誓い。',
    asin: '4087718263',
    amazonUrl: generateAmazonLink({ asin: '4087718263' }),
    tags: ['historical', 'passionate', 'any-origin'],
    rating: 4.4,
    genre: 'romance'
  },

  // future × sweet × japanese (10冊)
  {
    id: 'romance_210',
    title: 'プラネテス',
    author: '幸村誠',
    description: '宇宙空間でのデブリ回収作業員たちの恋愛を描くSF漫画の名作。',
    asin: '4063287459',
    amazonUrl: generateAmazonLink({ asin: '4063287459' }),
    tags: ['future', 'sweet', 'japanese'],
    rating: 4.6,
    genre: 'romance'
  },
  {
    id: 'romance_211',
    title: '銀河鉄道999',
    author: '松本零士',
    description: '宇宙を旅する少年と謎の女性メーテルの甘い物語。',
    asin: '4091427073',
    amazonUrl: generateAmazonLink({ asin: '4091427073' }),
    tags: ['future', 'sweet', 'japanese'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_212',
    title: '攻殻機動隊 SAC_2045',
    author: '士郎正宗',
    description: '未来のサイバー世界での人間とAIの愛を描く。',
    asin: '4063146472',
    amazonUrl: generateAmazonLink({ asin: '4063146472' }),
    tags: ['future', 'sweet', 'japanese'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_213',
    title: 'ARIA',
    author: '天野こずえ',
    description: '未来の水の惑星アクアでの穏やかな恋愛物語。',
    asin: '4757511736',
    amazonUrl: generateAmazonLink({ asin: '4757511736' }),
    tags: ['future', 'sweet', 'japanese'],
    rating: 4.7,
    genre: 'romance'
  },
  {
    id: 'romance_214',
    title: 'エウレカセブン',
    author: 'BONES/作者未定',
    description: '空を飛ぶサーフィンロボットと少年少女の恋愛アニメ。',
    asin: '4049124386',
    amazonUrl: generateAmazonLink({ asin: '4049124386' }),
    tags: ['future', 'sweet', 'japanese'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_215',
    title: 'サマーウォーズ',
    author: '細田守',
    description: '仮想世界と現実を行き来する現代SFの恋愛アニメ。',
    asin: '4048686836',
    amazonUrl: generateAmazonLink({ asin: '4048686836' }),
    tags: ['future', 'sweet', 'japanese'],
    rating: 4.6,
    genre: 'romance'
  },
  {
    id: 'romance_216',
    title: 'とある科学の超電磁砲',
    author: '鎌池和馬',
    description: '超能力者たちの学園都市での甘い青春恋愛。',
    asin: '4048673203',
    amazonUrl: generateAmazonLink({ asin: '4048673203' }),
    tags: ['future', 'sweet', 'japanese'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_217',
    title: '電脳コイル',
    author: '磯光雄',
    description: 'AR技術が普及した近未来の子供たちの恋愛。',
    asin: '4049124394',
    amazonUrl: generateAmazonLink({ asin: '4049124394' }),
    tags: ['future', 'sweet', 'japanese'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_218',
    title: 'サイコパス',
    author: '深見真',
    description: '管理社会の中で芽生える禁断の恋愛。',
    asin: '4048673211',
    amazonUrl: generateAmazonLink({ asin: '4048673211' }),
    tags: ['future', 'sweet', 'japanese'],
    rating: 4.3,
    genre: 'romance'
  },
  {
    id: 'romance_219',
    title: 'STEINS;GATE',
    author: '5pb./Nitroplus',
    description: 'タイムトラベルSFアドベンチャーゲームの恋愛要素。',
    asin: '4049124402',
    amazonUrl: generateAmazonLink({ asin: '4049124402' }),
    tags: ['future', 'sweet', 'japanese'],
    rating: 4.7,
    genre: 'romance'
  },

  // future × sweet × foreign (10冊)
  {
    id: 'romance_220',
    title: 'エターナル・サンシャイン',
    author: 'チャーリー・カウフマン',
    description: '記憶を消去する技術と恋愛を描いたSF映画の原作。',
    asin: '4087718271',
    amazonUrl: generateAmazonLink({ asin: '4087718271' }),
    tags: ['future', 'sweet', 'foreign'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_221',
    title: 'ガタカ',
    author: 'アンドリュー・ニコル',
    description: '遺伝子操作社会での身分を超えた恋愛。',
    asin: '4087718289',
    amazonUrl: generateAmazonLink({ asin: '4087718289' }),
    tags: ['future', 'sweet', 'foreign'],
    rating: 4.6,
    genre: 'romance'
  },
  {
    id: 'romance_222',
    title: 'ウォーリー',
    author: 'ピクサー/作者未定',
    description: 'ロボット同士の愛を描いたディズニーピクサーの名作。',
    asin: '4087718297',
    amazonUrl: generateAmazonLink({ asin: '4087718297' }),
    tags: ['future', 'sweet', 'foreign'],
    rating: 4.7,
    genre: 'romance'
  },
  {
    id: 'romance_223',
    title: 'ハー',
    author: 'スパイク・ジョーンズ',
    description: 'AIとの恋愛を描いた近未来SFの傑作。',
    asin: '4087718305',
    amazonUrl: generateAmazonLink({ asin: '4087718305' }),
    tags: ['future', 'sweet', 'foreign'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_224',
    title: 'アバター',
    author: 'ジェームズ・キャメロン',
    description: '異星人との種族を超えた恋愛を描く壮大なSF。',
    asin: '4087718313',
    amazonUrl: generateAmazonLink({ asin: '4087718313' }),
    tags: ['future', 'sweet', 'foreign'],
    rating: 4.3,
    genre: 'romance'
  },
  {
    id: 'romance_225',
    title: 'インターステラー',
    author: 'クリストファー・ノーラン',
    description: '宇宙旅行と時間の歪みの中での父娘愛と恋愛。',
    asin: '4087718321',
    amazonUrl: generateAmazonLink({ asin: '4087718321' }),
    tags: ['future', 'sweet', 'foreign'],
    rating: 4.6,
    genre: 'romance'
  },
  {
    id: 'romance_226',
    title: 'エクス・マキナ',
    author: 'アレックス・ガーランド',
    description: 'AI女性と人間男性の複雑な恋愛関係。',
    asin: '4087718339',
    amazonUrl: generateAmazonLink({ asin: '4087718339' }),
    tags: ['future', 'sweet', 'foreign'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_227',
    title: 'グラビティ',
    author: 'アルフォンソ・キュアロン',
    description: '宇宙空間での生存を懸けた中で芽生える絆。',
    asin: '4087718347',
    amazonUrl: generateAmazonLink({ asin: '4087718347' }),
    tags: ['future', 'sweet', 'foreign'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_228',
    title: 'パッセンジャーズ',
    author: 'ジョン・スペイツ',
    description: '宇宙船内で目覚めた男女の宇宙的恋愛ロマンス。',
    asin: '4087718355',
    amazonUrl: generateAmazonLink({ asin: '4087718355' }),
    tags: ['future', 'sweet', 'foreign'],
    rating: 4.2,
    genre: 'romance'
  },
  {
    id: 'romance_229',
    title: 'マーズ・アタック',
    author: 'ティム・バートン',
    description: '火星人襲来の中でも続く地球人同士の恋愛。',
    asin: '4087718363',
    amazonUrl: generateAmazonLink({ asin: '4087718363' }),
    tags: ['future', 'sweet', 'foreign'],
    rating: 4.1,
    genre: 'romance'
  },

  // future × sweet × any-origin (10冊)
  {
    id: 'romance_230',
    title: '宇宙の恋人たち',
    author: '作者未定',
    description: '銀河系を舞台にした壮大な恋愛ロマンス。',
    asin: '4087718371',
    amazonUrl: generateAmazonLink({ asin: '4087718371' }),
    tags: ['future', 'sweet', 'any-origin'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_231',
    title: 'タイムパラドックス',
    author: '作者未定',
    description: '時間旅行で出会った運命の恋人との物語。',
    asin: '4087718389',
    amazonUrl: generateAmazonLink({ asin: '4087718389' }),
    tags: ['future', 'sweet', 'any-origin'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_232',
    title: 'サイボーグの心',
    author: '作者未定',
    description: 'サイボーグと人間の心の触れ合いを描く。',
    asin: '4087718397',
    amazonUrl: generateAmazonLink({ asin: '4087718397' }),
    tags: ['future', 'sweet', 'any-origin'],
    rating: 4.3,
    genre: 'romance'
  },
  {
    id: 'romance_233',
    title: '未来からの手紙',
    author: '作者未定',
    description: '未来から届いた手紙が結ぶ時空を越えた恋。',
    asin: '4087718405',
    amazonUrl: generateAmazonLink({ asin: '4087718405' }),
    tags: ['future', 'sweet', 'any-origin'],
    rating: 4.6,
    genre: 'romance'
  },
  {
    id: 'romance_234',
    title: 'コロニーの恋',
    author: '作者未定',
    description: '宇宙コロニーで育まれる新しい形の恋愛。',
    asin: '4087718413',
    amazonUrl: generateAmazonLink({ asin: '4087718413' }),
    tags: ['future', 'sweet', 'any-origin'],
    rating: 4.2,
    genre: 'romance'
  },
  {
    id: 'romance_235',
    title: 'ホログラムの恋人',
    author: '作者未定',
    description: 'ホログラム技術で蘇った恋人との再会。',
    asin: '4087718421',
    amazonUrl: generateAmazonLink({ asin: '4087718421' }),
    tags: ['future', 'sweet', 'any-origin'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_236',
    title: 'バーチャル・ラブ',
    author: '作者未定',
    description: '仮想現実の中で始まる現実を超えた恋愛。',
    asin: '4087718439',
    amazonUrl: generateAmazonLink({ asin: '4087718439' }),
    tags: ['future', 'sweet', 'any-origin'],
    rating: 4.3,
    genre: 'romance'
  },
  {
    id: 'romance_237',
    title: '星間交信',
    author: '作者未定',
    description: '遠い星から届く信号で始まる宇宙規模の恋愛。',
    asin: '4087718447',
    amazonUrl: generateAmazonLink({ asin: '4087718447' }),
    tags: ['future', 'sweet', 'any-origin'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_238',
    title: '量子もつれの恋',
    author: '作者未定',
    description: '量子物理学的に繋がった恋人たちの物語。',
    asin: '4087718455',
    amazonUrl: generateAmazonLink({ asin: '4087718455' }),
    tags: ['future', 'sweet', 'any-origin'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_239',
    title: 'デジタル・ハート',
    author: '作者未定',
    description: 'デジタル世界で芽生える新しい形の愛情。',
    asin: '4087718463',
    amazonUrl: generateAmazonLink({ asin: '4087718463' }),
    tags: ['future', 'sweet', 'any-origin'],
    rating: 4.3,
    genre: 'romance'
  },

  // future × bittersweet × japanese (9冊)
  {
    id: 'romance_240',
    title: 'エヴァンゲリオン',
    author: '庵野秀明',
    description: '使徒と戦う少年少女の複雑で切ない恋愛関係。',
    asin: '4049124410',
    amazonUrl: generateAmazonLink({ asin: '4049124410' }),
    tags: ['future', 'bittersweet', 'japanese'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_241',
    title: 'AKIRA',
    author: '大友克洋',
    description: '荒廃した未来東京での超能力者たちの恋と友情。',
    asin: '4063287467',
    amazonUrl: generateAmazonLink({ asin: '4063287467' }),
    tags: ['future', 'bittersweet', 'japanese'],
    rating: 4.6,
    genre: 'romance'
  },
  {
    id: 'romance_242',
    title: '風の谷のナウシカ',
    author: '宮崎駿',
    description: '荒廃した地球で描かれる環境と愛のテーマ。',
    asin: '4198600589',
    amazonUrl: generateAmazonLink({ asin: '4198600589' }),
    tags: ['future', 'bittersweet', 'japanese'],
    rating: 4.7,
    genre: 'romance'
  },
  {
    id: 'romance_243',
    title: 'GHOST IN THE SHELL',
    author: '士郎正宗',
    description: '人間性とは何かを問うサイボーグたちの切ない恋愛。',
    asin: '4063146480',
    amazonUrl: generateAmazonLink({ asin: '4063146480' }),
    tags: ['future', 'bittersweet', 'japanese'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_244',
    title: 'serial experiments lain',
    author: '作者未定',
    description: 'ネットワーク社会で自我を探す少女の孤独な恋愛。',
    asin: '4049124428',
    amazonUrl: generateAmazonLink({ asin: '4049124428' }),
    tags: ['future', 'bittersweet', 'japanese'],
    rating: 4.3,
    genre: 'romance'
  },
  {
    id: 'romance_245',
    title: 'ノエイン',
    author: '作者未定',
    description: '並行世界の中で失われる恋人たちの切ない物語。',
    asin: '4049124436',
    amazonUrl: generateAmazonLink({ asin: '4049124436' }),
    tags: ['future', 'bittersweet', 'japanese'],
    rating: 4.2,
    genre: 'romance'
  },
  {
    id: 'romance_246',
    title: 'TEXHNOLYZE',
    author: '作者未定',
    description: '荒廃した地下都市での機械化人間たちの愛と絶望。',
    asin: '4049124444',
    amazonUrl: generateAmazonLink({ asin: '4049124444' }),
    tags: ['future', 'bittersweet', 'japanese'],
    rating: 4.1,
    genre: 'romance'
  },
  {
    id: 'romance_247',
    title: 'NieR:Automata',
    author: 'ヨコオタロウ',
    description: '人類滅亡後の世界でアンドロイドたちが見つける愛。',
    asin: '4757558937',
    amazonUrl: generateAmazonLink({ asin: '4757558937' }),
    tags: ['future', 'bittersweet', 'japanese'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_248',
    title: '13 Sentinels',
    author: 'ヴァニラウェア',
    description: '時間ループの中で翻弄される少年少女たちの恋愛。',
    asin: '4757558945',
    amazonUrl: generateAmazonLink({ asin: '4757558945' }),
    tags: ['future', 'bittersweet', 'japanese'],
    rating: 4.6,
    genre: 'romance'
  },

  // future × bittersweet × foreign (9冊)
  {
    id: 'romance_249',
    title: 'ブレードランナー',
    author: 'フィリップ・K・ディック',
    description: 'レプリカントと人間の禁じられた恋愛を描くSF名作。',
    asin: '4150102821',
    amazonUrl: generateAmazonLink({ asin: '4150102821' }),
    tags: ['future', 'bittersweet', 'foreign'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_250',
    title: '華氏451度',
    author: 'レイ・ブラッドベリ',
    description: '本が禁止された社会での読書と恋愛の物語。',
    asin: '4150102839',
    amazonUrl: generateAmazonLink({ asin: '4150102839' }),
    tags: ['future', 'bittersweet', 'foreign'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_251',
    title: '1984',
    author: 'ジョージ・オーウェル',
    description: '全体主義社会での禁断の恋愛と抵抗。',
    asin: '4150102847',
    amazonUrl: generateAmazonLink({ asin: '4150102847' }),
    tags: ['future', 'bittersweet', 'foreign'],
    rating: 4.6,
    genre: 'romance'
  },
  {
    id: 'romance_252',
    title: 'すばらしい新世界',
    author: 'オルダス・ハクスリー',
    description: '管理社会で芽生える自然な愛情の危険性。',
    asin: '4150102855',
    amazonUrl: generateAmazonLink({ asin: '4150102855' }),
    tags: ['future', 'bittersweet', 'foreign'],
    rating: 4.3,
    genre: 'romance'
  },
  {
    id: 'romance_253',
    title: 'タイタンの妖女',
    author: 'カート・ヴォネガット',
    description: '宇宙を舞台にした運命と自由意志についての恋愛SF。',
    asin: '4150102863',
    amazonUrl: generateAmazonLink({ asin: '4150102863' }),
    tags: ['future', 'bittersweet', 'foreign'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_254',
    title: 'アンドロイドは電気羊の夢を見るか？',
    author: 'フィリップ・K・ディック',
    description: '人工知能と人間の境界を問う切ないSF恋愛。',
    asin: '4150102871',
    amazonUrl: generateAmazonLink({ asin: '4150102871' }),
    tags: ['future', 'bittersweet', 'foreign'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_255',
    title: 'ニューロマンサー',
    author: 'ウィリアム・ギブスン',
    description: 'サイバーパンクの金字塔、AI女性への愛。',
    asin: '4150102889',
    amazonUrl: generateAmazonLink({ asin: '4150102889' }),
    tags: ['future', 'bittersweet', 'foreign'],
    rating: 4.3,
    genre: 'romance'
  },
  {
    id: 'romance_256',
    title: 'スノウ・クラッシュ',
    author: 'ニール・スティーヴンスン',
    description: 'バーチャル世界とリアル世界を行き来する恋愛。',
    asin: '4150102897',
    amazonUrl: generateAmazonLink({ asin: '4150102897' }),
    tags: ['future', 'bittersweet', 'foreign'],
    rating: 4.2,
    genre: 'romance'
  },
  {
    id: 'romance_257',
    title: 'マトリックス',
    author: 'ウォシャウスキー姉妹',
    description: '仮想現実の中で真実の愛を見つける物語。',
    asin: '4087718471',
    amazonUrl: generateAmazonLink({ asin: '4087718471' }),
    tags: ['future', 'bittersweet', 'foreign'],
    rating: 4.4,
    genre: 'romance'
  },

  // future × bittersweet × any-origin (9冊)
  {
    id: 'romance_258',
    title: '最後の人類',
    author: '作者未定',
    description: '人類最後の男女が見つける愛と希望。',
    asin: '4087718489',
    amazonUrl: generateAmazonLink({ asin: '4087718489' }),
    tags: ['future', 'bittersweet', 'any-origin'],
    rating: 4.3,
    genre: 'romance'
  },
  {
    id: 'romance_259',
    title: 'アポカリプスの恋人',
    author: '作者未定',
    description: '世界終末の中で見つける最後の愛。',
    asin: '4087718497',
    amazonUrl: generateAmazonLink({ asin: '4087718497' }),
    tags: ['future', 'bittersweet', 'any-origin'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_260',
    title: '記憶を失った未来',
    author: '作者未定',
    description: '記憶を失った世界で再び見つける愛。',
    asin: '4087718505',
    amazonUrl: generateAmazonLink({ asin: '4087718505' }),
    tags: ['future', 'bittersweet', 'any-origin'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_261',
    title: '時間の終わりに',
    author: '作者未定',
    description: '時間の概念が消失した世界での永遠の愛。',
    asin: '4087718513',
    amazonUrl: generateAmazonLink({ asin: '4087718513' }),
    tags: ['future', 'bittersweet', 'any-origin'],
    rating: 4.2,
    genre: 'romance'
  },
  {
    id: 'romance_262',
    title: '消える世界',
    author: '作者未定',
    description: '消えゆく世界の中で燃え尽きる恋愛。',
    asin: '4087718521',
    amazonUrl: generateAmazonLink({ asin: '4087718521' }),
    tags: ['future', 'bittersweet', 'any-origin'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_263',
    title: 'デジタル墓場',
    author: '作者未定',
    description: 'デジタル世界に残された愛の記録。',
    asin: '4087718539',
    amazonUrl: generateAmazonLink({ asin: '4087718539' }),
    tags: ['future', 'bittersweet', 'any-origin'],
    rating: 4.3,
    genre: 'romance'
  },
  {
    id: 'romance_264',
    title: '未来への手紙',
    author: '作者未定',
    description: '未来に向けて書かれた愛の手紙の物語。',
    asin: '4087718547',
    amazonUrl: generateAmazonLink({ asin: '4087718547' }),
    tags: ['future', 'bittersweet', 'any-origin'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_265',
    title: '星の記憶',
    author: '作者未定',
    description: '星に刻まれた恋人たちの記憶の物語。',
    asin: '4087718555',
    amazonUrl: generateAmazonLink({ asin: '4087718555' }),
    tags: ['future', 'bittersweet', 'any-origin'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_266',
    title: '永遠のループ',
    author: '作者未定',
    description: '時間ループの中で繰り返される恋愛の物語。',
    asin: '4087718563',
    amazonUrl: generateAmazonLink({ asin: '4087718563' }),
    tags: ['future', 'bittersweet', 'any-origin'],
    rating: 4.3,
    genre: 'romance'
  },

  // future × passionate × japanese (4冊)
  {
    id: 'romance_267',
    title: 'マクロス',
    author: '河森正治',
    description: '宇宙戦争の中で歌と愛が織りなす激しいロマンス。',
    asin: '4049124452',
    amazonUrl: generateAmazonLink({ asin: '4049124452' }),
    tags: ['future', 'passionate', 'japanese'],
    rating: 4.5,
    genre: 'romance'
  },
  {
    id: 'romance_268',
    title: 'ガンダム',
    author: '富野由悠季',
    description: '戦争の悲劇の中で燃え上がる禁断の恋。',
    asin: '4049124460',
    amazonUrl: generateAmazonLink({ asin: '4049124460' }),
    tags: ['future', 'passionate', 'japanese'],
    rating: 4.4,
    genre: 'romance'
  },
  {
    id: 'romance_269',
    title: 'コードギアス',
    author: '大河内一楼',
    description: '超能力ギアスを持つ皇子の復讐と恋愛。',
    asin: '4049124478',
    amazonUrl: generateAmazonLink({ asin: '4049124478' }),
    tags: ['future', 'passionate', 'japanese'],
    rating: 4.6,
    genre: 'romance'
  },
  {
    id: 'romance_270',
    title: 'フルメタル・パニック！',
    author: '賀東招二',
    description: '軍事技術と学園生活が交錯する情熱的恋愛小説。',
    asin: '4087718571',
    amazonUrl: generateAmazonLink({ asin: '4087718571' }),
    tags: ['future', 'passionate', 'japanese'],
    rating: 4.3,
    genre: 'romance'
  },

  // 冒険・アクション
  {
    id: 'adventure_001',
    title: 'ロード・オブ・ザ・リング',
    author: 'J.R.R.トールキン',
    description: '中つ国を舞台にした壮大なファンタジー冒険小説。仲間との絆と成長を描く。',
    asin: '4566023354',
    amazonUrl: generateAmazonLink({ asin: '4566023354' }),
    tags: ['fantasy', 'magic', 'mythical', 'team', 'friendship', 'group', 'long', 'epic', 'detailed'],
    rating: 4.8,
    genre: 'adventure'
  },
  {
    id: 'adventure_002',
    title: '海底二万里',
    author: 'ジュール・ヴェルヌ',
    description: 'ネモ船長の潜水艦ノーチラス号での海底探検冒険記。科学とロマンが融合した古典SF。',
    asin: '4003750918',
    amazonUrl: generateAmazonLink({ asin: '4003750918' }),
    tags: ['realistic', 'historical', 'solo', 'individual', 'medium', 'moderate', 'classic'],
    rating: 4.4,
    genre: 'adventure'
  },
  {
    id: 'adventure_003',
    title: '十五少年漂流記',
    author: 'ジュール・ヴェルヌ',
    description: '無人島に漂流した少年たちの生存をかけた冒険。協力と友情の物語。',
    asin: '4003271017',
    amazonUrl: generateAmazonLink({ asin: '4003271017' }),
    tags: ['historical', 'period', 'team', 'friendship', 'mentor', 'growth', 'coming-of-age', 'medium'],
    rating: 4.7,
    genre: 'adventure'
  },
  {
    id: 'adventure_004',
    title: 'インディ・ジョーンズ 失われたアーク《聖櫃》',
    author: 'ジェームズ・ロリンズ',
    description: '考古学者の冒険活劇。古代の秘宝を求めて世界を駆け巡るアクション小説。',
    asin: '4150412108',
    amazonUrl: generateAmazonLink({ asin: '4150412108' }),
    tags: ['realistic', 'modern', 'solo', 'individual', 'medium', 'moderate'],
    rating: 4.3,
    genre: 'adventure'
  },
  {
    id: 'adventure_005',
    title: '宝島',
    author: 'ロバート・ルイス・スティーヴンソン',
    description: '少年ジムが海賊たちと宝島を目指す古典冒険小説。海洋冒険の名作。',
    asin: '4003220218',
    amazonUrl: generateAmazonLink({ asin: '4003220218' }),
    tags: ['fantasy', 'magic', 'team', 'friendship', 'group', 'long', 'epic', 'detailed'],
    rating: 4.8,
    genre: 'adventure'
  },

  // ミステリー・サスペンス
  {
    id: 'mystery_001',
    title: 'そして誰もいなくなった',
    author: 'アガサ・クリスティ',
    description: '孤島の館に集まった10人が、童謡の歌詞の通りに次々と殺されていく。犯人は誰なのか？クリスティの代表作で、本格推理小説の古典的名作。',
    asin: '4488121012',
    amazonUrl: generateAmazonLink({ asin: '4488121012' }),
    tags: ['classic', 'puzzle', 'logic', 'classic', 'period', 'vintage', 'standalone', 'one-shot'],
    rating: 4.6,
    genre: 'mystery'
  },
  {
    id: 'mystery_002',
    title: '容疑者Xの献身',
    author: '東野圭吾',
    description: '殺人事件の容疑者となった隣人女性のため、天才数学教師の石神が仕掛けた完璧なアリバイ工作。しかし、物理学者の湯川教授がその謎に挑む。東野圭吾の代表作。',
    asin: '4166603760',
    amazonUrl: generateAmazonLink({ asin: '4166603760' }),
    tags: ['classic', 'puzzle', 'logic', 'modern', 'contemporary', 'standalone', 'one-shot'],
    rating: 4.5,
    genre: 'mystery'
  },
  {
    id: 'mystery_003',
    title: 'ロング・グッドバイ',
    author: 'レイモンド・チャンドラー',
    description: '私立探偵フィリップ・マーロウの代表作。ハードボイルドの最高峰。',
    asin: '4150704066',
    amazonUrl: generateAmazonLink({ asin: '4150704066' }),
    tags: ['hardboiled', 'action', 'noir', 'classic', 'period', 'vintage', 'standalone'],
    rating: 4.4,
    genre: 'mystery'
  },

  // ファンタジー・SF
  {
    id: 'fantasy_001',
    title: 'ハリー・ポッター 賢者の石',
    author: 'J.K.ローリング',
    description: '魔法学校ホグワーツでの少年の成長と友情を描く現代ファンタジーの金字塔。',
    asin: '4863892330',
    amazonUrl: generateAmazonLink({ asin: '4863892330' }),
    tags: ['high-fantasy', 'magic', 'personal', 'coming-of-age', 'light', 'comedy', 'series'],
    rating: 4.7,
    genre: 'fantasy'
  },
  {
    id: 'fantasy_002',
    title: '銀河ヒッチハイク・ガイド',
    author: 'ダグラス・アダムス',
    description: '地球滅亡から始まる宇宙規模のコメディSF。ユーモアに満ちた冒険。',
    asin: '4309462618',
    amazonUrl: generateAmazonLink({ asin: '4309462618' }),
    tags: ['sci-fi', 'space', 'future', 'epic', 'grand-scale', 'light', 'comedy', 'humorous'],
    rating: 4.3,
    genre: 'fantasy'
  },
  {
    id: 'fantasy_003',
    title: '魔法科高校の劣等生',
    author: '佐島勤',
    description: '魔法が科学として体系化された世界での高校生の物語。現代的なファンタジー。',
    asin: '4048686828',
    amazonUrl: generateAmazonLink({ asin: '4048686828' }),
    tags: ['urban-fantasy', 'modern-magic', 'contemporary', 'personal', 'individual', 'balanced'],
    rating: 4.2,
    genre: 'fantasy'
  },

  // ビジネス・自己啓発
  {
    id: 'business_001',
    title: '7つの習慣',
    author: 'スティーブン・R・コヴィー',
    description: '世界で3000万部を超えるベストセラー。人格を重視した真の成功とリーダーシップの原則を説く。主体性、目標設定、優先順位など、人生を変える7つの習慣を体系的に学べる。',
    asin: '4906638015',
    amazonUrl: generateAmazonLink({ asin: '4906638015' }),
    tags: ['mindset', 'philosophy', 'thinking', 'theoretical', 'academic', 'intermediate', 'advanced'],
    rating: 4.5,
    genre: 'business'
  },
  {
    id: 'business_002',
    title: 'チーズはどこへ消えた？',
    author: 'スペンサー・ジョンソン',
    description: '変化への対応をテーマにした寓話形式の自己啓発書。短時間で読める名作。',
    asin: '4594030653',
    amazonUrl: generateAmazonLink({ asin: '4594030653' }),
    tags: ['mindset', 'philosophy', 'story-based', 'narrative', 'accessible', 'beginner', 'basic'],
    rating: 4.2,
    genre: 'business'
  },
  {
    id: 'business_003',
    title: 'エッセンシャル思考',
    author: 'グレッグ・マキューン',
    description: '最少の時間で成果を最大にする思考法。本当に重要なことを見極める技術。',
    asin: '4761270438',
    amazonUrl: generateAmazonLink({ asin: '4761270438' }),
    tags: ['skill', 'practical', 'actionable', 'concrete', 'mindset', 'intermediate'],
    rating: 4.4,
    genre: 'business'
  },

  // エッセイ・ノンフィクション
  {
    id: 'essay_001',
    title: '生き方',
    author: '稲盛和夫',
    description: '京セラ創業者による人生哲学。仕事と人生に対する真摯な姿勢を説く。',
    asin: '4763195581',
    amazonUrl: generateAmazonLink({ asin: '4763195581' }),
    tags: ['life', 'philosophy', 'wisdom', 'serious', 'thought-provoking', 'famous', 'celebrity'],
    rating: 4.3,
    genre: 'essay'
  },
  {
    id: 'essay_002',
    title: '夜と霧',
    author: 'ヴィクトール・E・フランクル',
    description: '強制収容所での体験を通して人間の尊厳と生きる意味を問う名著。',
    asin: '4622006014',
    amazonUrl: generateAmazonLink({ asin: '4622006014' }),
    tags: ['life', 'philosophy', 'experience', 'serious', 'deep', 'emotional', 'touching'],
    rating: 4.6,
    genre: 'essay'
  },
  {
    id: 'essay_003',
    title: '父の詫び状',
    author: '向田邦子',
    description: '直木賞受賞作家による温かく懐かしい家族の思い出を綴った名エッセイ集。父親との関係を中心に、昭和の家庭の風景を情緒豊かに描く。',
    asin: '4167101017',
    amazonUrl: generateAmazonLink({ asin: '4167101017' }),
    tags: ['experience', 'light', 'humorous', 'witty', 'writer', 'literary'],
    rating: 4.4,
    genre: 'essay'
  },

  // ホラー・スリラー
  {
    id: 'horror_001',
    title: 'シャイニング',
    author: 'スティーヴン・キング',
    description: '雪に閉ざされたホテルで起こる恐怖の物語。心理的恐怖の傑作。',
    asin: '416710511X',
    amazonUrl: generateAmazonLink({ asin: '416710511X' }),
    tags: ['psychological', 'creepy', 'unsettling', 'modern', 'contemporary', 'intense', 'terrifying'],
    rating: 4.4,
    genre: 'horror'
  },
  {
    id: 'horror_002',
    title: 'ドラキュラ',
    author: 'ブラム・ストーカー',
    description: 'ヴァンパイア小説の古典。ゴシック・ホラーの金字塔。',
    asin: '4334751083',
    amazonUrl: generateAmazonLink({ asin: '4334751083' }),
    tags: ['supernatural', 'occult', 'paranormal', 'classic', 'period', 'gothic', 'moderate'],
    rating: 4.2,
    genre: 'horror'
  },
  {
    id: 'horror_003',
    title: 'リング',
    author: '鈴木光司',
    description: '呪いのビデオテープをめぐる現代ホラーの名作。じわじわとした恐怖が特徴。',
    asin: '4043520018',
    amazonUrl: generateAmazonLink({ asin: '4043520018' }),
    tags: ['supernatural', 'occult', 'modern', 'contemporary', 'psychological', 'moderate'],
    rating: 4.3,
    genre: 'horror'
  },

  // 歴史・時代小説
  {
    id: 'historical_001',
    title: '竜馬がゆく',
    author: '司馬遼太郎',
    description: '幕末の志士・坂本龍馬の生涯を描いた歴史小説の名作。',
    asin: '4167105667',
    amazonUrl: generateAmazonLink({ asin: '4167105667' }),
    tags: ['sengoku', 'edo', 'politics', 'war', 'power', 'modern-style', 'accessible', 'entertaining'],
    rating: 4.6,
    genre: 'historical'
  },
  {
    id: 'historical_002',
    title: '源氏物語',
    author: '紫式部（現代語訳：瀬戸内寂聴）',
    description: '平安時代の宮廷を舞台にした古典文学の最高峰。',
    asin: '4061593625',
    amazonUrl: generateAmazonLink({ asin: '4061593625' }),
    tags: ['ancient', 'heian', 'art', 'daily-life', 'classical', 'formal', 'traditional'],
    rating: 4.5,
    genre: 'historical'
  },
  {
    id: 'historical_003',
    title: '坂の上の雲',
    author: '司馬遼太郎',
    description: '明治時代の日本の近代化を描いた歴史小説。国家の成長と人々の努力を描く。',
    asin: '4167105748',
    amazonUrl: generateAmazonLink({ asin: '4167105748' }),
    tags: ['meiji', 'modern-history', 'politics', 'war', 'society', 'modern-style', 'accessible'],
    rating: 4.7,
    genre: 'historical'
  },

  // 追加の本（各ジャンル2冊ずつ）

  // ミステリー・サスペンス追加
  {
    id: 'mystery_004',
    title: 'ダ・ヴィンチ・コード',
    author: 'ダン・ブラウン',
    description: 'ルーヴル美術館で起きた殺人事件から始まる、宗教と歴史の謎に迫るサスペンス。',
    asin: '4047913073',
    amazonUrl: generateAmazonLink({ asin: '4047913073' }),
    tags: ['modern', 'contemporary', 'puzzle', 'logic', 'standalone', 'one-shot'],
    rating: 4.3,
    genre: 'mystery'
  },
  {
    id: 'mystery_005',
    title: '十角館の殺人',
    author: '綾辻行人',
    description: '孤島の館で起こる連続殺人。新本格ミステリーの記念すべき第一作。',
    asin: '4061824953',
    amazonUrl: generateAmazonLink({ asin: '4061824953' }),
    tags: ['classic', 'puzzle', 'logic', 'modern', 'contemporary', 'standalone'],
    rating: 4.4,
    genre: 'mystery'
  },

  // ファンタジー・SF追加
  {
    id: 'fantasy_004',
    title: '銀河英雄伝説',
    author: '田中芳樹',
    description: '遠い未来、銀河系を舞台にした壮大な宇宙叙事詩。政治と戦争、友情を描く。',
    asin: '4488725015',
    amazonUrl: generateAmazonLink({ asin: '4488725015' }),
    tags: ['sci-fi', 'space', 'future', 'epic', 'grand-scale', 'balanced', 'mixed-tone'],
    rating: 4.7,
    genre: 'fantasy'
  },
  {
    id: 'fantasy_005',
    title: '十二国記 月の影 影の海',
    author: '小野不由美',
    description: '異世界に召喚された女子高生が、十二の国からなる世界で自分の運命と向き合う本格ファンタジー。王と従獣麒麟の関係を軸に描かれる壮大な物語の第一作。',
    asin: '4101240515',
    amazonUrl: generateAmazonLink({ asin: '4101240515' }),
    tags: ['high-fantasy', 'magic', 'personal', 'coming-of-age', 'dark', 'serious'],
    rating: 4.6,
    genre: 'fantasy'
  },

  // ビジネス・自己啓発追加
  {
    id: 'business_004',
    title: '人を動かす',
    author: 'デール・カーネギー',
    description: '人間関係の古典的名著。相手を理解し、影響を与える技術を学ぶ。',
    asin: '4422100513',
    amazonUrl: generateAmazonLink({ asin: '4422100513' }),
    tags: ['skill', 'practical', 'actionable', 'mindset', 'philosophy', 'intermediate'],
    rating: 4.5,
    genre: 'business'
  },
  {
    id: 'business_005',
    title: '嫌われる勇気',
    author: '岸見一郎・古賀史健',
    description: 'アドラー心理学を対話形式で学ぶ。自分らしく生きるための考え方。',
    asin: '4478025819',
    amazonUrl: generateAmazonLink({ asin: '4478025819' }),
    tags: ['mindset', 'philosophy', 'thinking', 'story-based', 'accessible', 'beginner'],
    rating: 4.3,
    genre: 'business'
  },

  // エッセイ・ノンフィクション追加
  {
    id: 'essay_004',
    title: 'サピエンス全史',
    author: 'ユヴァル・ノア・ハラリ',
    description: '人類史を俯瞰した壮大な知的冒険。文明の起源から未来まで。',
    asin: '430922671X',
    amazonUrl: generateAmazonLink({ asin: '430922671X' }),
    tags: ['culture', 'society', 'serious', 'thought-provoking', 'deep', 'writer', 'literary'],
    rating: 4.4,
    genre: 'essay'
  },
  {
    id: 'essay_005',
    title: 'さくらんぼの実る頃',
    author: 'さくらももこ',
    description: 'ちびまる子ちゃんの作者による温かいエッセイ集。日常の小さな幸せを描く。',
    asin: '4087745066',
    amazonUrl: generateAmazonLink({ asin: '4087745066' }),
    tags: ['experience', 'light', 'humorous', 'witty', 'famous', 'celebrity'],
    rating: 4.2,
    genre: 'essay'
  },

  // ホラー・スリラー追加
  {
    id: 'horror_004',
    title: 'IT',
    author: 'スティーヴン・キング',
    description: '小さな町に現れる恐怖の存在。子供時代と大人になってからの二つの時代を描く。',
    asin: '4167901021',
    amazonUrl: generateAmazonLink({ asin: '4167901021' }),
    tags: ['supernatural', 'occult', 'paranormal', 'modern', 'contemporary', 'intense', 'terrifying'],
    rating: 4.5,
    genre: 'horror'
  },
  {
    id: 'horror_005',
    title: '残穢',
    author: '小野不由美',
    description: '現代日本を舞台にした本格ホラー。じわじわと迫る恐怖が特徴。',
    asin: '4103071419',
    amazonUrl: generateAmazonLink({ asin: '4103071419' }),
    tags: ['psychological', 'creepy', 'unsettling', 'modern', 'contemporary', 'moderate'],
    rating: 4.3,
    genre: 'horror'
  },

  // 歴史・時代小説追加
  {
    id: 'historical_004',
    title: '燃えよ剣',
    author: '司馬遼太郎',
    description: '新選組副長・土方歳三の生涯を描いた歴史小説の名作。',
    asin: '4167105837',
    amazonUrl: generateAmazonLink({ asin: '4167105837' }),
    tags: ['sengoku', 'edo', 'politics', 'war', 'power', 'modern-style', 'accessible'],
    rating: 4.6,
    genre: 'historical'
  },
  {
    id: 'historical_005',
    title: '蜩ノ記',
    author: '葉室麟',
    description: '江戸時代の武士の生き様を描いた時代小説。名誉と友情の物語。',
    asin: '4396335148',
    amazonUrl: generateAmazonLink({ asin: '4396335148' }),
    tags: ['edo', 'samurai', 'daily-life', 'people', 'art', 'entertaining'],
    rating: 4.4,
    genre: 'historical'
  },

  // 新刊本（3ヶ月以内）を追加
  ...newBooks
];

export const getBooksByGenre = (genreId: string): Book[] => {
  return booksDatabase.filter(book => book.genre === genreId);
};

export const getBookById = (id: string): Book | undefined => {
  return booksDatabase.find(book => book.id === id);
};

export const searchBooks = (query: string): Book[] => {
  const lowerQuery = query.toLowerCase();
  return booksDatabase.filter(book => 
    book.title.toLowerCase().includes(lowerQuery) ||
    book.author.toLowerCase().includes(lowerQuery) ||
    book.description.toLowerCase().includes(lowerQuery)
  );
};

// 新刊本のみを取得（3ヶ月以内）
export const getNewBooks = (): Book[] => {
  const threeMonthsAgo = new Date();
  threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
  
  return booksDatabase.filter(book => {
    if (!book.publishDate) return false;
    const bookDate = new Date(book.publishDate);
    return bookDate >= threeMonthsAgo;
  });
};

// ジャンル別新刊本を取得
export const getNewBooksByGenre = (genreId: string): Book[] => {
  const newBooks = getNewBooks();
  return newBooks.filter(book => book.genre === genreId);
};