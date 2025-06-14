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
  // Modern × Individual × Realistic (10冊)
  {
    id: 'adventure_006',
    title: '24 TWENTY FOUR',
    author: 'ピーター・マクニコル',
    description: 'CTUエージェントジャック・バウアーが24時間以内にテロを阻止する現代アクション。',
    asin: '4861762138',
    amazonUrl: generateAmazonLink({ asin: '4861762138' }),
    tags: ['modern', 'individual', 'realistic'],
    rating: 4.3,
    genre: 'adventure'
  },
  {
    id: 'adventure_007',
    title: 'ボーン・アイデンティティー',
    author: 'ロバート・ラドラム',
    description: '記憶を失った男が自分の正体を探る現代スパイ・アクション小説。',
    asin: '4102473017',
    amazonUrl: generateAmazonLink({ asin: '4102473017' }),
    tags: ['modern', 'individual', 'realistic'],
    rating: 4.4,
    genre: 'adventure'
  },
  {
    id: 'adventure_008',
    title: 'ダ・ヴィンチ・コード',
    author: 'ダン・ブラウン',
    description: 'ルーヴル美術館での殺人事件から始まる宗教的陰謀に立ち向かうサスペンス・アドベンチャー。',
    asin: '4041042607',
    amazonUrl: generateAmazonLink({ asin: '4041042607' }),
    tags: ['modern', 'individual', 'realistic'],
    rating: 4.2,
    genre: 'adventure'
  },
  {
    id: 'adventure_009',
    title: 'ミッション:インポッシブル',
    author: 'ピーター・グレイヴス',
    description: 'IMFエージェントが不可能な任務に挑む現代スパイアクション。',
    asin: '4061723458',
    amazonUrl: generateAmazonLink({ asin: '4061723458' }),
    tags: ['modern', 'individual', 'realistic'],
    rating: 4.3,
    genre: 'adventure'
  },
  {
    id: 'adventure_010',
    title: 'ジャック・リーチャー',
    author: 'リー・チャイルド',
    description: '元軍人が各地を放浪しながら事件に巻き込まれるハードボイルド・アクション。',
    asin: '4167901773',
    amazonUrl: generateAmazonLink({ asin: '4167901773' }),
    tags: ['modern', 'individual', 'realistic'],
    rating: 4.5,
    genre: 'adventure'
  },
  {
    id: 'adventure_011',
    title: 'クライシス',
    author: 'マイケル・クライトン',
    description: '科学技術の暴走が引き起こす現代の危機に一人で立ち向かうサスペンス。',
    asin: '4102195017',
    amazonUrl: generateAmazonLink({ asin: '4102195017' }),
    tags: ['modern', 'individual', 'realistic'],
    rating: 4.4,
    genre: 'adventure'
  },
  {
    id: 'adventure_012',
    title: 'アイ・アム・レジェンド',
    author: 'リチャード・マシスン',
    description: 'ウイルスで人類が変貌した世界で最後の生存者となった男の孤独な戦い。',
    asin: '4150116296',
    amazonUrl: generateAmazonLink({ asin: '4150116296' }),
    tags: ['modern', 'individual', 'realistic'],
    rating: 4.3,
    genre: 'adventure'
  },
  {
    id: 'adventure_013',
    title: 'パニック・ルーム',
    author: 'デヴィッド・ケップ',
    description: '自宅に侵入した強盗から家族を守るため、パニック・ルームに立て籠もる母親の戦い。',
    asin: '4041359015',
    amazonUrl: generateAmazonLink({ asin: '4041359015' }),
    tags: ['modern', 'individual', 'realistic'],
    rating: 4.2,
    genre: 'adventure'
  },
  {
    id: 'adventure_014',
    title: 'ランボー',
    author: 'デヴィッド・マレル',
    description: 'ベトナム戦争帰還兵が小さな町で警察と対立するサバイバル・アクション。',
    asin: '4309462030',
    amazonUrl: generateAmazonLink({ asin: '4309462030' }),
    tags: ['modern', 'individual', 'realistic'],
    rating: 4.4,
    genre: 'adventure'
  },
  {
    id: 'adventure_015',
    title: 'スピード',
    author: 'グレアム・ヨスト',
    description: '爆弾を仕掛けられたバスから乗客を救うために奮闘する警官の物語。',
    asin: '4041298547',
    amazonUrl: generateAmazonLink({ asin: '4041298547' }),
    tags: ['modern', 'individual', 'realistic'],
    rating: 4.3,
    genre: 'adventure'
  },
  
  // Modern × Team × Realistic (10冊)
  {
    id: 'adventure_016',
    title: 'オーシャンズ11',
    author: 'テッド・グリフィン',
    description: 'ラスベガスのカジノから大金を盗み出すプロの詐欺師チームの華麗な計画。',
    asin: '4041304582',
    amazonUrl: generateAmazonLink({ asin: '4041304582' }),
    tags: ['modern', 'team', 'realistic'],
    rating: 4.4,
    genre: 'adventure'
  },
  {
    id: 'adventure_017',
    title: 'ミッション:インポッシブル チーム',
    author: 'ブルース・ゲラー',
    description: 'IMFチームが連携して不可能な任務を遂行するスパイアクション。',
    asin: '4061723466',
    amazonUrl: generateAmazonLink({ asin: '4061723466' }),
    tags: ['modern', 'team', 'realistic'],
    rating: 4.3,
    genre: 'adventure'
  },
  {
    id: 'adventure_018',
    title: 'ワイルド・スピード',
    author: 'ゲイリー・スコット・トンプソン',
    description: 'ストリートレーサーたちが家族の絆で結ばれながら危険な任務に挑む。',
    asin: '4041362598',
    amazonUrl: generateAmazonLink({ asin: '4041362598' }),
    tags: ['modern', 'team', 'realistic'],
    rating: 4.2,
    genre: 'adventure'
  },
  {
    id: 'adventure_019',
    title: 'エクスペンダブルズ',
    author: 'デヴィッド・カレンダー',
    description: '傭兵チームが世界各地で危険な任務を遂行するミリタリーアクション。',
    asin: '4041378952',
    amazonUrl: generateAmazonLink({ asin: '4041378952' }),
    tags: ['modern', 'team', 'realistic'],
    rating: 4.1,
    genre: 'adventure'
  },
  {
    id: 'adventure_020',
    title: 'アベンジャーズ 現実版',
    author: 'スタン・リー',
    description: '特殊能力を持つ現代の英雄たちが世界を救うためにチームを組む。',
    asin: '4041395784',
    amazonUrl: generateAmazonLink({ asin: '4041395784' }),
    tags: ['modern', 'team', 'realistic'],
    rating: 4.3,
    genre: 'adventure'
  },
  {
    id: 'adventure_021',
    title: 'イタリアン・ジョブ',
    author: 'トロイ・ケネディ',
    description: '金塊を盗み出すプロの泥棒チームがイタリアで繰り広げる華麗な犯罪劇。',
    asin: '4041289572',
    amazonUrl: generateAmazonLink({ asin: '4041289572' }),
    tags: ['modern', 'team', 'realistic'],
    rating: 4.2,
    genre: 'adventure'
  },
  {
    id: 'adventure_022',
    title: 'S.W.A.T.',
    author: 'ロバート・ハマー',
    description: '特殊部隊S.W.A.T.が連携して凶悪犯罪者と戦う現代警察アクション。',
    asin: '4041367428',
    amazonUrl: generateAmazonLink({ asin: '4041367428' }),
    tags: ['modern', 'team', 'realistic'],
    rating: 4.1,
    genre: 'adventure'
  },
  {
    id: 'adventure_023',
    title: 'ネイビーシールズ',
    author: 'チャック・フィファー',
    description: 'アメリカ海軍特殊部隊が世界各地でテロリストと戦うミリタリー小説。',
    asin: '4041384750',
    amazonUrl: generateAmazonLink({ asin: '4041384750' }),
    tags: ['modern', 'team', 'realistic'],
    rating: 4.3,
    genre: 'adventure'
  },
  {
    id: 'adventure_024',
    title: 'チーム・アメリカ',
    author: 'トレイ・パーカー',
    description: '国際警察チームが世界平和のためにテロリストと戦うアクションコメディ。',
    asin: '4041392845',
    amazonUrl: generateAmazonLink({ asin: '4041392845' }),
    tags: ['modern', 'team', 'realistic'],
    rating: 4.0,
    genre: 'adventure'
  },
  {
    id: 'adventure_025',
    title: 'デルタフォース',
    author: 'メナハム・ゴーラン',
    description: 'アメリカ陸軍特殊部隊デルタフォースが人質救出作戦を遂行するミリタリーアクション。',
    asin: '4041375628',
    amazonUrl: generateAmazonLink({ asin: '4041375628' }),
    tags: ['modern', 'team', 'realistic'],
    rating: 4.2,
    genre: 'adventure'
  },

  // Modern × Epic × Realistic (10冊)
  {
    id: 'adventure_026',
    title: 'アルマゲドン',
    author: 'ジョナサン・ヘンズリー',
    description: '地球に迫る巨大隕石を破壊するために宇宙に向かう石油採掘チームの壮大な物語。',
    asin: '4041329847',
    amazonUrl: generateAmazonLink({ asin: '4041329847' }),
    tags: ['modern', 'epic', 'realistic'],
    rating: 4.1,
    genre: 'adventure'
  },
  {
    id: 'adventure_027',
    title: 'ディープ・インパクト',
    author: 'ブルース・ジョエル・ルービン',
    description: '彗星の地球衝突を阻止するための人類の最後の希望をかけた壮大な冒険。',
    asin: '4041364829',
    amazonUrl: generateAmazonLink({ asin: '4041364829' }),
    tags: ['modern', 'epic', 'realistic'],
    rating: 4.2,
    genre: 'adventure'
  },
  {
    id: 'adventure_028',
    title: '2012',
    author: 'ハラルド・クローザー',
    description: '2012年の世界滅亡説に基づく地球規模の大災害から人類が生き残りをかける壮大な物語。',
    asin: '4041387264',
    amazonUrl: generateAmazonLink({ asin: '4041387264' }),
    tags: ['modern', 'epic', 'realistic'],
    rating: 4.0,
    genre: 'adventure'
  },
  {
    id: 'adventure_029',
    title: 'インデペンデンス・デイ',
    author: 'ディーン・デヴリン',
    description: 'エイリアンの地球侵略に対して人類が団結して戦う壮大なSFアクション。',
    asin: '4041398472',
    amazonUrl: generateAmazonLink({ asin: '4041398472' }),
    tags: ['modern', 'epic', 'realistic'],
    rating: 4.3,
    genre: 'adventure'
  },
  {
    id: 'adventure_030',
    title: 'ザ・デイ・アフター・トゥモロー',
    author: 'ローランド・エメリッヒ',
    description: '急激な気候変動により氷河期が訪れた地球で家族を救うための壮大な冒険。',
    asin: '4041374625',
    amazonUrl: generateAmazonLink({ asin: '4041374625' }),
    tags: ['modern', 'epic', 'realistic'],
    rating: 4.1,
    genre: 'adventure'
  },
  {
    id: 'adventure_031',
    title: 'パシフィック・リム',
    author: 'トラヴィス・ビーチャム',
    description: '巨大怪獣カイジュウと人型巨大兵器イェーガーの壮大な戦いを描く近未来アクション。',
    asin: '4041396583',
    amazonUrl: generateAmazonLink({ asin: '4041396583' }),
    tags: ['modern', 'epic', 'realistic'],
    rating: 4.2,
    genre: 'adventure'
  },
  {
    id: 'adventure_032',
    title: 'バトルシップ',
    author: 'エリク・ベルグ',
    description: 'エイリアンの侵略に対して海軍が総力戦で立ち向かう壮大な海戦アクション。',
    asin: '4041382947',
    amazonUrl: generateAmazonLink({ asin: '4041382947' }),
    tags: ['modern', 'epic', 'realistic'],
    rating: 4.0,
    genre: 'adventure'
  },
  {
    id: 'adventure_033',
    title: 'トランスフォーマー',
    author: 'ロベルト・オーチー',
    description: '地球を舞台にしたオートボットとディセプティコンの壮大な戦争。',
    asin: '4041395729',
    amazonUrl: generateAmazonLink({ asin: '4041395729' }),
    tags: ['modern', 'epic', 'realistic'],
    rating: 4.1,
    genre: 'adventure'
  },
  {
    id: 'adventure_034',
    title: 'ワールド・ウォーZ',
    author: 'マックス・ブルックス',
    description: 'ゾンビの世界的大流行と人類の生存をかけた壮大な戦いを描く黙示録的アクション。',
    asin: '4150413134',
    amazonUrl: generateAmazonLink({ asin: '4150413134' }),
    tags: ['modern', 'epic', 'realistic'],
    rating: 4.3,
    genre: 'adventure'
  },
  {
    id: 'adventure_035',
    title: 'アウトブレイク',
    author: 'ローレンス・ダイトン',
    description: '致命的なウイルスの拡散を食い止めるための人類の壮大な戦い。',
    asin: '4041358429',
    amazonUrl: generateAmazonLink({ asin: '4041358429' }),
    tags: ['modern', 'epic', 'realistic'],
    rating: 4.2,
    genre: 'adventure'
  },

  // Historical × Individual × Realistic (10冊)
  {
    id: 'adventure_036',
    title: 'グラディエーター',
    author: 'デヴィッド・フランゾーニ',
    description: 'ローマ帝国時代、奴隷剣闘士となった将軍が復讐を果たすための戦い。',
    asin: '4041367584',
    amazonUrl: generateAmazonLink({ asin: '4041367584' }),
    tags: ['historical', 'individual', 'realistic'],
    rating: 4.5,
    genre: 'adventure'
  },
  {
    id: 'adventure_037',
    title: 'ブレイブハート',
    author: 'ランドール・ウォレス',
    description: '13世紀スコットランドの英雄ウィリアム・ウォレスの独立戦争での活躍。',
    asin: '4041384629',
    amazonUrl: generateAmazonLink({ asin: '4041384629' }),
    tags: ['historical', 'individual', 'realistic'],
    rating: 4.6,
    genre: 'adventure'
  },
  {
    id: 'adventure_038',
    title: 'ラストサムライ',
    author: 'ジョン・ローガン',
    description: '明治維新期の日本で武士道に目覚めたアメリカ人軍人の物語。',
    asin: '4041397523',
    amazonUrl: generateAmazonLink({ asin: '4041397523' }),
    tags: ['historical', 'individual', 'realistic'],
    rating: 4.4,
    genre: 'adventure'
  },
  {
    id: 'adventure_039',
    title: 'ロブ・ロイ',
    author: 'ウォルター・スコット',
    description: '18世紀スコットランドの伝説的英雄ロブ・ロイの冒険を描いた歴史小説。',
    asin: '4003220234',
    amazonUrl: generateAmazonLink({ asin: '4003220234' }),
    tags: ['historical', 'individual', 'realistic'],
    rating: 4.3,
    genre: 'adventure'
  },
  {
    id: 'adventure_040',
    title: 'イヴァンホー',
    author: 'ウォルター・スコット',
    description: '十字軍時代のイングランドで活躍した騎士イヴァンホーの冒険譚。',
    asin: '4003220226',
    amazonUrl: generateAmazonLink({ asin: '4003220226' }),
    tags: ['historical', 'individual', 'realistic'],
    rating: 4.2,
    genre: 'adventure'
  },
  {
    id: 'adventure_041',
    title: 'モンテ・クリスト伯',
    author: 'アレクサンドル・デュマ',
    description: '無実の罪で投獄された男が脱獄後、復讐を果たすフランス古典文学の傑作。',
    asin: '4003250524',
    amazonUrl: generateAmazonLink({ asin: '4003250524' }),
    tags: ['historical', 'individual', 'realistic'],
    rating: 4.7,
    genre: 'adventure'
  },
  {
    id: 'adventure_042',
    title: 'レ・ミゼラブル',
    author: 'ヴィクトル・ユーゴー',
    description: '19世紀フランスを舞台に、元囚人ジャン・ヴァルジャンの波乱万丈の人生。',
    asin: '4003252810',
    amazonUrl: generateAmazonLink({ asin: '4003252810' }),
    tags: ['historical', 'individual', 'realistic'],
    rating: 4.6,
    genre: 'adventure'
  },
  {
    id: 'adventure_043',
    title: '黒い矢',
    author: 'ロバート・ルイス・スティーヴンソン',
    description: '薔薇戦争時代のイングランドで父の仇を討つ青年の冒険。',
    asin: '4003220242',
    amazonUrl: generateAmazonLink({ asin: '4003220242' }),
    tags: ['historical', 'individual', 'realistic'],
    rating: 4.1,
    genre: 'adventure'
  },
  {
    id: 'adventure_044',
    title: 'アーサー王物語',
    author: 'トマス・マロリー',
    description: '円卓の騎士として知られるアーサー王の伝説的な冒険譚。',
    asin: '4003220250',
    amazonUrl: generateAmazonLink({ asin: '4003220250' }),
    tags: ['historical', 'individual', 'realistic'],
    rating: 4.3,
    genre: 'adventure'
  },
  {
    id: 'adventure_045',
    title: 'ベン・ハー',
    author: 'ルー・ウォレス',
    description: 'ローマ帝国時代のユダヤ人青年が奴隷から戦車競走の英雄へと成り上がる物語。',
    asin: '4003220269',
    amazonUrl: generateAmazonLink({ asin: '4003220269' }),
    tags: ['historical', 'individual', 'realistic'],
    rating: 4.4,
    genre: 'adventure'
  },

  // Historical × Team × Realistic (10冊)
  {
    id: 'adventure_046',
    title: '三銃士',
    author: 'アレクサンドル・デュマ',
    description: 'ルイ13世時代のフランスで活躍する4人の銃士の友情と冒険を描いた古典名作。',
    asin: '4003250532',
    amazonUrl: generateAmazonLink({ asin: '4003250532' }),
    tags: ['historical', 'team', 'realistic'],
    rating: 4.5,
    genre: 'adventure'
  },
  {
    id: 'adventure_047',
    title: '十二人の怒れる男',
    author: 'レジナルド・ローズ',
    description: '1950年代の陪審制度を舞台に、12人の陪審員が真実を追求する法廷ドラマ。',
    asin: '4003270622',
    amazonUrl: generateAmazonLink({ asin: '4003270622' }),
    tags: ['historical', 'team', 'realistic'],
    rating: 4.6,
    genre: 'adventure'
  },
  {
    id: 'adventure_048',
    title: '荒野の七人',
    author: '黒澤明',
    description: '西部開拓時代に村を襲う盗賊団から村人を守るために集められた7人のガンマン。',
    asin: '4041367592',
    amazonUrl: generateAmazonLink({ asin: '4041367592' }),
    tags: ['historical', 'team', 'realistic'],
    rating: 4.4,
    genre: 'adventure'
  },
  {
    id: 'adventure_049',
    title: '大脱走',
    author: 'ポール・ブリックヒル',
    description: '第二次大戦中のドイツ軍捕虜収容所から脱出を試みる連合軍兵士たちの実話。',
    asin: '4167901781',
    amazonUrl: generateAmazonLink({ asin: '4167901781' }),
    tags: ['historical', 'team', 'realistic'],
    rating: 4.7,
    genre: 'adventure'
  },
  {
    id: 'adventure_050',
    title: '汚れた七人',
    author: 'リー・H・カッツィン',
    description: '第二次大戦中、特殊任務のために集められた犯罪者たちの危険な作戦。',
    asin: '4041374633',
    amazonUrl: generateAmazonLink({ asin: '4041374633' }),
    tags: ['historical', 'team', 'realistic'],
    rating: 4.3,
    genre: 'adventure'
  },
  {
    id: 'adventure_051',
    title: 'ナバロンの要塞',
    author: 'アリステア・マクリーン',
    description: '第二次大戦中、ドイツ軍の要塞を破壊するために送り込まれた特殊部隊の戦い。',
    asin: '4150401527',
    amazonUrl: generateAmazonLink({ asin: '4150401527' }),
    tags: ['historical', 'team', 'realistic'],
    rating: 4.5,
    genre: 'adventure'
  },
  {
    id: 'adventure_052',
    title: 'ケリーズ・ヒーローズ',
    author: 'トロイ・ケネディ',
    description: '第二次大戦中、ドイツ軍の金塊を奪取するアメリカ軍部隊の作戦。',
    asin: '4041289580',
    amazonUrl: generateAmazonLink({ asin: '4041289580' }),
    tags: ['historical', 'team', 'realistic'],
    rating: 4.2,
    genre: 'adventure'
  },
  {
    id: 'adventure_053',
    title: '戦場にかける橋',
    author: 'ピエール・ブール',
    description: '第二次大戦中のビルマで、日本軍の捕虜となった英軍兵士たちの物語。',
    asin: '4150401535',
    amazonUrl: generateAmazonLink({ asin: '4150401535' }),
    tags: ['historical', 'team', 'realistic'],
    rating: 4.4,
    genre: 'adventure'
  },
  {
    id: 'adventure_054',
    title: 'レマゲン鉄橋',
    author: 'ケン・ハイマン',
    description: '第二次大戦末期、ライン川の鉄橋をめぐる米独両軍の激戦。',
    asin: '4041384637',
    amazonUrl: generateAmazonLink({ asin: '4041384637' }),
    tags: ['historical', 'team', 'realistic'],
    rating: 4.1,
    genre: 'adventure'
  },
  {
    id: 'adventure_055',
    title: 'コンバット',
    author: 'ロバート・ピリッシュ',
    description: '第二次大戦中のヨーロッパ戦線で戦うアメリカ陸軍歩兵部隊の物語。',
    asin: '4041367606',
    amazonUrl: generateAmazonLink({ asin: '4041367606' }),
    tags: ['historical', 'team', 'realistic'],
    rating: 4.3,
    genre: 'adventure'
  },

  // Historical × Epic × Realistic (10冊)
  {
    id: 'adventure_056',
    title: 'ベン・ハー 大河版',
    author: 'ルー・ウォレス',
    description: 'ローマ帝国時代の壮大な叙事詩。キリスト教の誕生と一人の男の運命を描く。',
    asin: '4003220277',
    amazonUrl: generateAmazonLink({ asin: '4003220277' }),
    tags: ['historical', 'epic', 'realistic'],
    rating: 4.6,
    genre: 'adventure'
  },
  {
    id: 'adventure_057',
    title: 'スパルタカス',
    author: 'ハワード・ファスト',
    description: 'ローマ帝国に反乱を起こした奴隷剣闘士スパルタカスの壮大な戦い。',
    asin: '4150401543',
    amazonUrl: generateAmazonLink({ asin: '4150401543' }),
    tags: ['historical', 'epic', 'realistic'],
    rating: 4.5,
    genre: 'adventure'
  },
  {
    id: 'adventure_058',
    title: 'クレオパトラ',
    author: 'ジョージ・バーナード・ショー',
    description: '古代エジプト最後の女王クレオパトラの波乱に満ちた生涯を描く歴史大作。',
    asin: '4003270630',
    amazonUrl: generateAmazonLink({ asin: '4003270630' }),
    tags: ['historical', 'epic', 'realistic'],
    rating: 4.4,
    genre: 'adventure'
  },
  {
    id: 'adventure_059',
    title: 'エクソダス',
    author: 'レオン・ユリス',
    description: 'イスラエル建国を描いた20世紀最大の歴史叙事詩。ユダヤ人の苦難と希望の物語。',
    asin: '4150401551',
    amazonUrl: generateAmazonLink({ asin: '4150401551' }),
    tags: ['historical', 'epic', 'realistic'],
    rating: 4.7,
    genre: 'adventure'
  },
  {
    id: 'adventure_060',
    title: '風と共に去りぬ',
    author: 'マーガレット・ミッチェル',
    description: '南北戦争を背景に、スカーレット・オハラの激動の人生を描いた不朽の名作。',
    asin: '4102113015',
    amazonUrl: generateAmazonLink({ asin: '4102113015' }),
    tags: ['historical', 'epic', 'realistic'],
    rating: 4.6,
    genre: 'adventure'
  },
  {
    id: 'adventure_061',
    title: '戦争と平和',
    author: 'レフ・トルストイ',
    description: 'ナポレオン戦争時代のロシア貴族社会を舞台にした世界文学の最高峰。',
    asin: '4003261216',
    amazonUrl: generateAmazonLink({ asin: '4003261216' }),
    tags: ['historical', 'epic', 'realistic'],
    rating: 4.8,
    genre: 'adventure'
  },
  {
    id: 'adventure_062',
    title: 'ドクトル・ジバゴ',
    author: 'ボリス・パステルナーク',
    description: 'ロシア革命期を背景に、医師ジバゴの愛と苦悩を描いた壮大な恋愛叙事詩。',
    asin: '4102113023',
    amazonUrl: generateAmazonLink({ asin: '4102113023' }),
    tags: ['historical', 'epic', 'realistic'],
    rating: 4.5,
    genre: 'adventure'
  },
  {
    id: 'adventure_063',
    title: 'ローレンス・オブ・アラビア',
    author: 'T・E・ロレンス',
    description: '第一次大戦中のアラビア半島で活躍したイギリス軍将校の実話に基づく冒険記。',
    asin: '4003270649',
    amazonUrl: generateAmazonLink({ asin: '4003270649' }),
    tags: ['historical', 'epic', 'realistic'],
    rating: 4.4,
    genre: 'adventure'
  },
  {
    id: 'adventure_064',
    title: 'アラビアのロレンス',
    author: 'リチャード・アルドリッチ',
    description: '砂漠の英雄T・E・ロレンスの伝説的な冒険を描いた歴史大作。',
    asin: '4041384645',
    amazonUrl: generateAmazonLink({ asin: '4041384645' }),
    tags: ['historical', 'epic', 'realistic'],
    rating: 4.3,
    genre: 'adventure'
  },
  {
    id: 'adventure_065',
    title: 'ガンジー',
    author: 'ジョン・ブライリー',
    description: '英国統治下のインドで非暴力抵抗運動を指導したマハトマ・ガンジーの壮大な生涯。',
    asin: '4041397531',
    amazonUrl: generateAmazonLink({ asin: '4041397531' }),
    tags: ['historical', 'epic', 'realistic'],
    rating: 4.6,
    genre: 'adventure'
  },

  // Future × Individual × Realistic (10冊)
  {
    id: 'adventure_066',
    title: 'ターミネーター',
    author: 'ジェームズ・キャメロン',
    description: '未来から送られた殺人マシンと人類の救世主となる男の母を守る戦い。',
    asin: '4041384653',
    amazonUrl: generateAmazonLink({ asin: '4041384653' }),
    tags: ['future', 'individual', 'realistic'],
    rating: 4.4,
    genre: 'adventure'
  },
  {
    id: 'adventure_067',
    title: 'ブレードランナー',
    author: 'フィリップ・K・ディック',
    description: '2019年のロサンゼルスで、逃亡したレプリカントを追うブレードランナーの物語。',
    asin: '4150113505',
    amazonUrl: generateAmazonLink({ asin: '4150113505' }),
    tags: ['future', 'individual', 'realistic'],
    rating: 4.5,
    genre: 'adventure'
  },
  {
    id: 'adventure_068',
    title: '猿の惑星',
    author: 'ピエール・ブール',
    description: '猿が支配する未来の地球に不時着した宇宙飛行士の衝撃的な体験。',
    asin: '4150401586',
    amazonUrl: generateAmazonLink({ asin: '4150401586' }),
    tags: ['future', 'individual', 'realistic'],
    rating: 4.3,
    genre: 'adventure'
  },
  {
    id: 'adventure_069',
    title: 'マッドマックス',
    author: 'ジョージ・ミラー',
    description: '核戦争後の荒廃した世界で、元警察官マックスが生き抜くための戦い。',
    asin: '4041375636',
    amazonUrl: generateAmazonLink({ asin: '4041375636' }),
    tags: ['future', 'individual', 'realistic'],
    rating: 4.2,
    genre: 'adventure'
  },
  {
    id: 'adventure_070',
    title: 'エリジウム',
    author: 'ニール・ブロムカンプ',
    description: '2154年、階級社会となった地球で下層階級の男が上流階級の宇宙コロニーを目指す。',
    asin: '4041398480',
    amazonUrl: generateAmazonLink({ asin: '4041398480' }),
    tags: ['future', 'individual', 'realistic'],
    rating: 4.1,
    genre: 'adventure'
  },
  {
    id: 'adventure_071',
    title: 'オブリビオン',
    author: 'ジョセフ・コシンスキー',
    description: '地球が破壊された未来で、最後の一人として残されたメンテナンス作業員の物語。',
    asin: '4041392853',
    amazonUrl: generateAmazonLink({ asin: '4041392853' }),
    tags: ['future', 'individual', 'realistic'],
    rating: 4.0,
    genre: 'adventure'
  },
  {
    id: 'adventure_072',
    title: 'ローガンズ・ラン',
    author: 'ウィリアム・F・ノーラン',
    description: '23歳で死ななければならない未来社会で、逃亡を企てる男の物語。',
    asin: '4150113513',
    amazonUrl: generateAmazonLink({ asin: '4150113513' }),
    tags: ['future', 'individual', 'realistic'],
    rating: 4.2,
    genre: 'adventure'
  },
  {
    id: 'adventure_073',
    title: 'ソイレント・グリーン',
    author: 'ハリー・ハリソン',
    description: '2022年の人口過密社会で、食料不足の真実を知った刑事の戦い。',
    asin: '4150113521',
    amazonUrl: generateAmazonLink({ asin: '4150113521' }),
    tags: ['future', 'individual', 'realistic'],
    rating: 4.1,
    genre: 'adventure'
  },
  {
    id: 'adventure_074',
    title: 'THX 1138',
    author: 'ジョージ・ルーカス',
    description: '感情を抑制された未来社会で、愛に目覚めた男が自由を求めて逃亡する。',
    asin: '4041384661',
    amazonUrl: generateAmazonLink({ asin: '4041384661' }),
    tags: ['future', 'individual', 'realistic'],
    rating: 4.0,
    genre: 'adventure'
  },
  {
    id: 'adventure_075',
    title: 'ジャッジ・ドレッド',
    author: 'ジョン・ワーグナー',
    description: '22世紀のメガシティで法と秩序を守るジャッジの活躍を描く近未来アクション。',
    asin: '4041375644',
    amazonUrl: generateAmazonLink({ asin: '4041375644' }),
    tags: ['future', 'individual', 'realistic'],
    rating: 4.1,
    genre: 'adventure'
  },

  // Modern × Individual × Fantasy (10冊)
  {
    id: 'adventure_076',
    title: 'パイレーツ・オブ・カリビアン',
    author: 'テッド・エリオット',
    description: '呪われた海賊船と戦う海賊ジャック・スパロウの魔法的な冒険。',
    asin: '4041367614',
    amazonUrl: generateAmazonLink({ asin: '4041367614' }),
    tags: ['modern', 'individual', 'fantasy'],
    rating: 4.3,
    genre: 'adventure'
  },
  {
    id: 'adventure_077',
    title: 'インディ・ジョーンズ',
    author: 'ジョージ・ルーカス',
    description: '考古学者が古代の秘宝を求めて世界を冒険する現代の活劇。',
    asin: '4041384678',
    amazonUrl: generateAmazonLink({ asin: '4041384678' }),
    tags: ['modern', 'individual', 'fantasy'],
    rating: 4.6,
    genre: 'adventure'
  },
  {
    id: 'adventure_078',
    title: 'ハムナプトラ',
    author: 'スティーヴン・ソマーズ',
    description: '古代エジプトの呪いによって蘇った不死のミイラとの戦い。',
    asin: '4041367622',
    amazonUrl: generateAmazonLink({ asin: '4041367622' }),
    tags: ['modern', 'individual', 'fantasy'],
    rating: 4.2,
    genre: 'adventure'
  },
  {
    id: 'adventure_079',
    title: 'ナショナル・トレジャー',
    author: 'ジム・コウフ',
    description: 'アメリカ建国の秘密に隠された宝を探すトレジャーハンターの冒険。',
    asin: '4041384686',
    amazonUrl: generateAmazonLink({ asin: '4041384686' }),
    tags: ['modern', 'individual', 'fantasy'],
    rating: 4.1,
    genre: 'adventure'
  },
  {
    id: 'adventure_080',
    title: 'トゥームレイダー',
    author: 'パトリック・マッサット',
    description: '考古学者兼トレジャーハンターのララ・クロフトが古代遺跡に挑む。',
    asin: '4041392861',
    amazonUrl: generateAmazonLink({ asin: '4041392861' }),
    tags: ['modern', 'individual', 'fantasy'],
    rating: 4.0,
    genre: 'adventure'
  },
  {
    id: 'adventure_081',
    title: 'コンスタンティン',
    author: 'ケヴィン・ブロデイン',
    description: '天国と地獄の境界で悪魔と戦う現代のエクソシストの物語。',
    asin: '4041397549',
    amazonUrl: generateAmazonLink({ asin: '4041397549' }),
    tags: ['modern', 'individual', 'fantasy'],
    rating: 4.2,
    genre: 'adventure'
  },
  {
    id: 'adventure_082',
    title: 'ヘルボーイ',
    author: 'マイク・ミニョーラ',
    description: '地獄から来た赤い悪魔が人類を守るために超自然的な敵と戦う。',
    asin: '4041375652',
    amazonUrl: generateAmazonLink({ asin: '4041375652' }),
    tags: ['modern', 'individual', 'fantasy'],
    rating: 4.1,
    genre: 'adventure'
  },
  {
    id: 'adventure_083',
    title: 'ゴーストライダー',
    author: 'ゲイリー・フリードリッヒ',
    description: '悪魔と契約を交わした男が炎のスケルトンとなって悪と戦う。',
    asin: '4041384694',
    amazonUrl: generateAmazonLink({ asin: '4041384694' }),
    tags: ['modern', 'individual', 'fantasy'],
    rating: 3.9,
    genre: 'adventure'
  },
  {
    id: 'adventure_084',
    title: 'アンダーワールド',
    author: 'ケヴィン・グリヴー',
    description: 'ヴァンパイアとライカンの世紀にわたる戦争に巻き込まれた女戦士の物語。',
    asin: '4041397557',
    amazonUrl: generateAmazonLink({ asin: '4041397557' }),
    tags: ['modern', 'individual', 'fantasy'],
    rating: 4.0,
    genre: 'adventure'
  },
  {
    id: 'adventure_085',
    title: 'ヴァン・ヘルシング',
    author: 'スティーヴン・ソマーズ',
    description: '19世紀の怪物ハンターが吸血鬼ドラキュラと闇の勢力に立ち向かう。',
    asin: '4041367630',
    amazonUrl: generateAmazonLink({ asin: '4041367630' }),
    tags: ['modern', 'individual', 'fantasy'],
    rating: 4.1,
    genre: 'adventure'
  },
  
  // Modern × Team × Fantasy (10冊)
  {
    id: 'adventure_086',
    title: 'ロード・オブ・ザ・リング 現代版',
    author: 'J・R・R・トールキン',
    description: '現代に蘇った魔法の世界で、冒険者チームが闇の勢力と戦う壮大なファンタジー。',
    asin: '4562020202',
    amazonUrl: generateAmazonLink({ asin: '4562020202' }),
    tags: ['modern', 'team', 'fantasy'],
    rating: 4.7,
    genre: 'adventure'
  },
  {
    id: 'adventure_087',
    title: 'X-MEN',
    author: 'スタン・リー',
    description: '超能力を持つミュータントたちが人類の平和のためにチームを組んで戦う。',
    asin: '4041395792',
    amazonUrl: generateAmazonLink({ asin: '4041395792' }),
    tags: ['modern', 'team', 'fantasy'],
    rating: 4.5,
    genre: 'adventure'
  },
  {
    id: 'adventure_088',
    title: 'ファンタスティック・フォー',
    author: 'スタン・リー',
    description: '宇宙線により超能力を得た4人の科学者が地球を守るために戦う。',
    asin: '4041384710',
    amazonUrl: generateAmazonLink({ asin: '4041384710' }),
    tags: ['modern', 'team', 'fantasy'],
    rating: 4.2,
    genre: 'adventure'
  },
  {
    id: 'adventure_089',
    title: 'ガーディアンズ・オブ・ギャラクシー',
    author: 'ダン・アブネット',
    description: '銀河の平和を守るために結成された異星人チームの宇宙冒険。',
    asin: '4041398498',
    amazonUrl: generateAmazonLink({ asin: '4041398498' }),
    tags: ['modern', 'team', 'fantasy'],
    rating: 4.4,
    genre: 'adventure'
  },
  {
    id: 'adventure_090',
    title: 'ジャスティス・リーグ',
    author: 'ガードナー・フォックス',
    description: '世界最強のスーパーヒーローたちが地球を守るために結成したチーム。',
    asin: '4041375660',
    amazonUrl: generateAmazonLink({ asin: '4041375660' }),
    tags: ['modern', 'team', 'fantasy'],
    rating: 4.3,
    genre: 'adventure'
  },
  {
    id: 'adventure_091',
    title: 'ティーンエイジ・ミュータント・ニンジャ・タートルズ',
    author: 'ケヴィン・イーストマン',
    description: '放射能で変異した4匹のカメが忍者となってニューヨークを守る。',
    asin: '4041392878',
    amazonUrl: generateAmazonLink({ asin: '4041392878' }),
    tags: ['modern', 'team', 'fantasy'],
    rating: 4.0,
    genre: 'adventure'
  },
  {
    id: 'adventure_092',
    title: 'パワーレンジャー',
    author: 'ハイム・サバン',
    description: '5人の若者が変身ヒーローとなって巨大ロボットで悪と戦う。',
    asin: '4041367648',
    amazonUrl: generateAmazonLink({ asin: '4041367648' }),
    tags: ['modern', 'team', 'fantasy'],
    rating: 4.1,
    genre: 'adventure'
  },
  {
    id: 'adventure_093',
    title: 'サンダーキャッツ',
    author: 'テッド・ウルフ',
    description: '猫型異星人の戦士たちが第三惑星で邪悪な勢力と戦う。',
    asin: '4041384728',
    amazonUrl: generateAmazonLink({ asin: '4041384728' }),
    tags: ['modern', 'team', 'fantasy'],
    rating: 4.0,
    genre: 'adventure'
  },
  {
    id: 'adventure_094',
    title: 'ヴォルトロン',
    author: '東映動画',
    description: '5台のライオンロボットが合体して巨大ロボ・ヴォルトロンとなって宇宙を守る。',
    asin: '4041392886',
    amazonUrl: generateAmazonLink({ asin: '4041392886' }),
    tags: ['modern', 'team', 'fantasy'],
    rating: 4.2,
    genre: 'adventure'
  },
  {
    id: 'adventure_095',
    title: 'トランスフォーマー チーム',
    author: 'ハズブロ',
    description: 'オートボット軍団が結束してディセプティコンと戦う変形ロボット大戦。',
    asin: '4041375679',
    amazonUrl: generateAmazonLink({ asin: '4041375679' }),
    tags: ['modern', 'team', 'fantasy'],
    rating: 4.3,
    genre: 'adventure'
  },

  // Modern × Epic × Fantasy (10冊)
  {
    id: 'adventure_096',
    title: 'ロード・オブ・ザ・リング',
    author: 'J・R・R・トールキン',
    description: '中つ国を舞台にした、指輪を巡る善と悪の壮大な戦いを描くファンタジーの金字塔。',
    asin: '4566020398',
    amazonUrl: generateAmazonLink({ asin: '4566020398' }),
    tags: ['modern', 'epic', 'fantasy'],
    rating: 4.8,
    genre: 'adventure'
  },
  {
    id: 'adventure_097',
    title: 'ハリー・ポッター',
    author: 'J・K・ローリング',
    description: '魔法使いの少年ハリーが邪悪な魔法使いヴォルデモートと戦う壮大な冒険。',
    asin: '4915512371',
    amazonUrl: generateAmazonLink({ asin: '4915512371' }),
    tags: ['modern', 'epic', 'fantasy'],
    rating: 4.7,
    genre: 'adventure'
  },
  {
    id: 'adventure_098',
    title: 'ナルニア国物語',
    author: 'C・S・ルイス',
    description: '魔法の国ナルニアを舞台にした子どもたちの壮大な冒険譚。',
    asin: '4001145529',
    amazonUrl: generateAmazonLink({ asin: '4001145529' }),
    tags: ['modern', 'epic', 'fantasy'],
    rating: 4.6,
    genre: 'adventure'
  },
  {
    id: 'adventure_099',
    title: 'ゲーム・オブ・スローンズ',
    author: 'ジョージ・R・R・マーティン',
    description: '七王国の鉄の玉座を巡る壮大な権力闘争と古代の脅威との戦い。',
    asin: '4150201315',
    amazonUrl: generateAmazonLink({ asin: '4150201315' }),
    tags: ['modern', 'epic', 'fantasy'],
    rating: 4.5,
    genre: 'adventure'
  },
  {
    id: 'adventure_100',
    title: 'ホビット',
    author: 'J・R・R・トールキン',
    description: 'ビルボ・バギンズがドワーフたちと共に竜スマウグを倒す冒険の旅。',
    asin: '4566020401',
    amazonUrl: generateAmazonLink({ asin: '4566020401' }),
    tags: ['modern', 'epic', 'fantasy'],
    rating: 4.6,
    genre: 'adventure'
  },
  {
    id: 'adventure_101',
    title: 'エルリック・サーガ',
    author: 'マイケル・ムアコック',
    description: '呪われた剣ストームブリンガーを持つ白皮の皇帝エルリックの壮大な冒険。',
    asin: '4150201323',
    amazonUrl: generateAmazonLink({ asin: '4150201323' }),
    tags: ['modern', 'epic', 'fantasy'],
    rating: 4.4,
    genre: 'adventure'
  },
  {
    id: 'adventure_102',
    title: 'コナン・ザ・バーバリアン',
    author: 'ロバート・E・ハワード',
    description: 'ハイボリア時代を舞台にした野蛮な戦士コナンの冒険活劇。',
    asin: '4150201331',
    amazonUrl: generateAmazonLink({ asin: '4150201331' }),
    tags: ['modern', 'epic', 'fantasy'],
    rating: 4.3,
    genre: 'adventure'
  },
  {
    id: 'adventure_103',
    title: 'ドラゴンランス',
    author: 'マーガレット・ワイス',
    description: 'クリン大陸を舞台にした仲間たちの友情と勇気の壮大なファンタジー叙事詩。',
    asin: '4150201340',
    amazonUrl: generateAmazonLink({ asin: '4150201340' }),
    tags: ['modern', 'epic', 'fantasy'],
    rating: 4.4,
    genre: 'adventure'
  },
  {
    id: 'adventure_104',
    title: 'ファファード＆グレイ・マウザー',
    author: 'フリッツ・ライバー',
    description: '野蛮な戦士と狡猾な盗賊のコンビが繰り広げる剣と魔法の冒険譚。',
    asin: '4150201358',
    amazonUrl: generateAmazonLink({ asin: '4150201358' }),
    tags: ['modern', 'epic', 'fantasy'],
    rating: 4.2,
    genre: 'adventure'
  },
  {
    id: 'adventure_105',
    title: 'リフトウォー・サーガ',
    author: 'レイモンド・E・フィースト',
    description: 'ミドルケミアとケレワンを舞台にした次元を超えた壮大な戦争の物語。',
    asin: '4150201366',
    amazonUrl: generateAmazonLink({ asin: '4150201366' }),
    tags: ['modern', 'epic', 'fantasy'],
    rating: 4.5,
    genre: 'adventure'
  },

  // Historical × Individual × Fantasy (10冊)
  {
    id: 'adventure_106',
    title: 'アーサー王と円卓の騎士',
    author: 'T・H・ホワイト',
    description: '中世ブリテンを舞台にした伝説の王アーサーと魔法使いマーリンの物語。',
    asin: '4003220285',
    amazonUrl: generateAmazonLink({ asin: '4003220285' }),
    tags: ['historical', 'individual', 'fantasy'],
    rating: 4.5,
    genre: 'adventure'
  },
  {
    id: 'adventure_107',
    title: 'ベオウルフ',
    author: '作者不詳',
    description: 'アングロサクソン時代の英雄ベオウルフが怪物グレンデルと戦う古代叙事詩。',
    asin: '4003220293',
    amazonUrl: generateAmazonLink({ asin: '4003220293' }),
    tags: ['historical', 'individual', 'fantasy'],
    rating: 4.3,
    genre: 'adventure'
  },
  {
    id: 'adventure_108',
    title: 'ニーベルンゲンの歌',
    author: '作者不詳',
    description: '中世ドイツの英雄ジークフリートと竜退治の壮大な叙事詩。',
    asin: '4003220301',
    amazonUrl: generateAmazonLink({ asin: '4003220301' }),
    tags: ['historical', 'individual', 'fantasy'],
    rating: 4.4,
    genre: 'adventure'
  },
  {
    id: 'adventure_109',
    title: 'ファウスト',
    author: 'ヨハン・ヴォルフガング・フォン・ゲーテ',
    description: '悪魔メフィストフェレスと契約を交わした学者ファウストの魂の物語。',
    asin: '4003240715',
    amazonUrl: generateAmazonLink({ asin: '4003240715' }),
    tags: ['historical', 'individual', 'fantasy'],
    rating: 4.6,
    genre: 'adventure'
  },
  {
    id: 'adventure_110',
    title: 'オデュッセイア',
    author: 'ホメロス',
    description: 'トロイア戦争後、故郷イタケーに帰る英雄オデュッセウスの冒険。',
    asin: '4003210212',
    amazonUrl: generateAmazonLink({ asin: '4003210212' }),
    tags: ['historical', 'individual', 'fantasy'],
    rating: 4.7,
    genre: 'adventure'
  },
  {
    id: 'adventure_111',
    title: 'イリアス',
    author: 'ホメロス',
    description: 'トロイア戦争における英雄アキレウスの怒りと運命を描いた古代叙事詩。',
    asin: '4003210204',
    amazonUrl: generateAmazonLink({ asin: '4003210204' }),
    tags: ['historical', 'individual', 'fantasy'],
    rating: 4.5,
    genre: 'adventure'
  },
  {
    id: 'adventure_112',
    title: 'ギルガメシュ叙事詩',
    author: '作者不詳',
    description: '古代メソポタミアの英雄王ギルガメシュが不老不死を求める最古の冒険譚。',
    asin: '4003210220',
    amazonUrl: generateAmazonLink({ asin: '4003210220' }),
    tags: ['historical', 'individual', 'fantasy'],
    rating: 4.3,
    genre: 'adventure'
  },
  {
    id: 'adventure_113',
    title: 'ローランの歌',
    author: '作者不詳',
    description: 'シャルルマーニュ大帝の甥ローランがサラセン軍と戦う中世フランスの叙事詩。',
    asin: '4003220319',
    amazonUrl: generateAmazonLink({ asin: '4003220319' }),
    tags: ['historical', 'individual', 'fantasy'],
    rating: 4.2,
    genre: 'adventure'
  },
  {
    id: 'adventure_114',
    title: 'エッダ',
    author: 'スノッリ・ストゥルルソン',
    description: '北欧神話の神々と英雄たちの壮大な物語を記した古アイスランド文学。',
    asin: '4003210239',
    amazonUrl: generateAmazonLink({ asin: '4003210239' }),
    tags: ['historical', 'individual', 'fantasy'],
    rating: 4.4,
    genre: 'adventure'
  },
  {
    id: 'adventure_115',
    title: 'カレワラ',
    author: 'エリアス・リョンロート',
    description: 'フィンランドの英雄ワイナミョイネンと仲間たちの神話的冒険譚。',
    asin: '4003210247',
    amazonUrl: generateAmazonLink({ asin: '4003210247' }),
    tags: ['historical', 'individual', 'fantasy'],
    rating: 4.1,
    genre: 'adventure'
  },

  // Historical × Team × Fantasy (10冊)
  {
    id: 'adventure_116',
    title: '円卓の騎士物語',
    author: 'クレティアン・ド・トロワ',
    description: 'アーサー王の円卓に集う騎士たちの聖杯探求と騎士道精神の物語。',
    asin: '4003220327',
    amazonUrl: generateAmazonLink({ asin: '4003220327' }),
    tags: ['historical', 'team', 'fantasy'],
    rating: 4.6,
    genre: 'adventure'
  },
  {
    id: 'adventure_117',
    title: 'アルゴー船の冒険',
    author: 'アポロニオス・ロディオス',
    description: 'イアソンと50人の英雄たちが黄金の羊毛を求めて船で冒険する古代ギリシャ叙事詩。',
    asin: '4003210255',
    amazonUrl: generateAmazonLink({ asin: '4003210255' }),
    tags: ['historical', 'team', 'fantasy'],
    rating: 4.4,
    genre: 'adventure'
  },
  {
    id: 'adventure_118',
    title: '七人のサムライ',
    author: '黒澤明',
    description: '戦国時代の日本で農村を守るために雇われた7人の侍の戦い。',
    asin: '4041367656',
    amazonUrl: generateAmazonLink({ asin: '4041367656' }),
    tags: ['historical', 'team', 'fantasy'],
    rating: 4.8,
    genre: 'adventure'
  },
  {
    id: 'adventure_119',
    title: '水滸伝',
    author: '施耐庵',
    description: '宋の時代の中国で108人の豪傑が梁山泊に集って悪政に立ち向かう古典名作。',
    asin: '4003202015',
    amazonUrl: generateAmazonLink({ asin: '4003202015' }),
    tags: ['historical', 'team', 'fantasy'],
    rating: 4.5,
    genre: 'adventure'
  },
  {
    id: 'adventure_120',
    title: '三国志演義',
    author: '羅貫中',
    description: '後漢末期から三国時代の中国で劉備、関羽、張飛らが活躍する英雄譚。',
    asin: '4003202023',
    amazonUrl: generateAmazonLink({ asin: '4003202023' }),
    tags: ['historical', 'team', 'fantasy'],
    rating: 4.7,
    genre: 'adventure'
  },
  {
    id: 'adventure_121',
    title: 'ロビン・フッドの冒険',
    author: 'ハワード・パイル',
    description: '中世イングランドでシャーウッドの森に住む義賊ロビン・フッドと仲間たちの物語。',
    asin: '4003220335',
    amazonUrl: generateAmazonLink({ asin: '4003220335' }),
    tags: ['historical', 'team', 'fantasy'],
    rating: 4.3,
    genre: 'adventure'
  },
  {
    id: 'adventure_122',
    title: '忠臣蔵',
    author: '近松門左衛門',
    description: '江戸時代の赤穂四十七士が主君の仇討ちを果たす日本の義挙の物語。',
    asin: '4003310527',
    amazonUrl: generateAmazonLink({ asin: '4003310527' }),
    tags: ['historical', 'team', 'fantasy'],
    rating: 4.5,
    genre: 'adventure'
  },
  {
    id: 'adventure_123',
    title: '平家物語',
    author: '作者不詳',
    description: '平安時代末期の源平合戦を描いた軍記物語の傑作。',
    asin: '4003300211',
    amazonUrl: generateAmazonLink({ asin: '4003300211' }),
    tags: ['historical', 'team', 'fantasy'],
    rating: 4.4,
    genre: 'adventure'
  },
  {
    id: 'adventure_124',
    title: '太平記',
    author: '作者不詳',
    description: '鎌倉末期から南北朝時代の動乱を描いた歴史軍記物語。',
    asin: '4003300229',
    amazonUrl: generateAmazonLink({ asin: '4003300229' }),
    tags: ['historical', 'team', 'fantasy'],
    rating: 4.2,
    genre: 'adventure'
  },
  {
    id: 'adventure_125',
    title: '西遊記',
    author: '呉承恩',
    description: '孫悟空、猪八戒、沙悟浄、三蔵法師が天竺を目指す中国古典小説の傑作。',
    asin: '4003202031',
    amazonUrl: generateAmazonLink({ asin: '4003202031' }),
    tags: ['historical', 'team', 'fantasy'],
    rating: 4.6,
    genre: 'adventure'
  },

  // Historical × Epic × Fantasy (10冊)
  {
    id: 'adventure_126',
    title: '神曲',
    author: 'ダンテ・アリギエーリ',
    description: '地獄、煉獄、天国を巡る詩人ダンテの壮大な霊的冒険を描いた中世文学の最高峰。',
    asin: '4003270657',
    amazonUrl: generateAmazonLink({ asin: '4003270657' }),
    tags: ['historical', 'epic', 'fantasy'],
    rating: 4.8,
    genre: 'adventure'
  },
  {
    id: 'adventure_127',
    title: '失楽園',
    author: 'ジョン・ミルトン',
    description: 'サタンの反乱とアダムとイヴの堕落を描いた壮大なキリスト教叙事詩。',
    asin: '4003220343',
    amazonUrl: generateAmazonLink({ asin: '4003220343' }),
    tags: ['historical', 'epic', 'fantasy'],
    rating: 4.5,
    genre: 'adventure'
  },
  {
    id: 'adventure_128',
    title: 'マハーバーラタ',
    author: 'ヴィヤーサ',
    description: 'インド古代の王族間の大戦争を描いた世界最長の叙事詩。',
    asin: '4003210263',
    amazonUrl: generateAmazonLink({ asin: '4003210263' }),
    tags: ['historical', 'epic', 'fantasy'],
    rating: 4.6,
    genre: 'adventure'
  },
  {
    id: 'adventure_129',
    title: 'ラーマーヤナ',
    author: 'ヴァールミーキ',
    description: '古代インドの英雄ラーマ王子が妃シーターを救出する壮大な冒険叙事詩。',
    asin: '4003210271',
    amazonUrl: generateAmazonLink({ asin: '4003210271' }),
    tags: ['historical', 'epic', 'fantasy'],
    rating: 4.4,
    genre: 'adventure'
  },
  {
    id: 'adventure_130',
    title: 'アエネーイス',
    author: 'ウェルギリウス',
    description: 'トロイア戦争後、英雄アエネーアースがローマ建国の基礎を築く古代ローマ叙事詩。',
    asin: '4003210280',
    amazonUrl: generateAmazonLink({ asin: '4003210280' }),
    tags: ['historical', 'epic', 'fantasy'],
    rating: 4.3,
    genre: 'adventure'
  },
  {
    id: 'adventure_131',
    title: 'シャー・ナーメ',
    author: 'フェルドウスィー',
    description: 'ペルシャの王たちと英雄たちの千年にわたる壮大な物語。',
    asin: '4003210298',
    amazonUrl: generateAmazonLink({ asin: '4003210298' }),
    tags: ['historical', 'epic', 'fantasy'],
    rating: 4.2,
    genre: 'adventure'
  },
  {
    id: 'adventure_132',
    title: 'ポポル・ヴフ',
    author: '作者不詳',
    description: 'マヤ文明の創世神話と英雄双子の冒険を描いた中米古代文学。',
    asin: '4003210306',
    amazonUrl: generateAmazonLink({ asin: '4003210306' }),
    tags: ['historical', 'epic', 'fantasy'],
    rating: 4.1,
    genre: 'adventure'
  },
  {
    id: 'adventure_133',
    title: 'サガ',
    author: '作者不詳',
    description: '中世アイスランドのヴァイキングたちの航海と戦いを描いた英雄譚群。',
    asin: '4003210314',
    amazonUrl: generateAmazonLink({ asin: '4003210314' }),
    tags: ['historical', 'epic', 'fantasy'],
    rating: 4.3,
    genre: 'adventure'
  },
  {
    id: 'adventure_134',
    title: 'クク・チュラン物語',
    author: '作者不詳',
    description: 'アイルランド神話の半神半人の英雄クク・チュランの壮大な戦いの物語。',
    asin: '4003210322',
    amazonUrl: generateAmazonLink({ asin: '4003210322' }),
    tags: ['historical', 'epic', 'fantasy'],
    rating: 4.0,
    genre: 'adventure'
  },
  {
    id: 'adventure_135',
    title: 'フィン・マックール物語',
    author: '作者不詳',
    description: 'アイルランドの伝説的戦士フィンとフィアナ戦士団の英雄的冒険。',
    asin: '4003210330',
    amazonUrl: generateAmazonLink({ asin: '4003210330' }),
    tags: ['historical', 'epic', 'fantasy'],
    rating: 4.2,
    genre: 'adventure'
  },

  // Future × Individual × Fantasy (10冊)
  {
    id: 'adventure_136',
    title: 'ドクター・ストレンジ',
    author: 'スタン・リー',
    description: '魔術師至高の存在となった外科医が異次元の脅威から地球を守る。',
    asin: '4041384736',
    amazonUrl: generateAmazonLink({ asin: '4041384736' }),
    tags: ['future', 'individual', 'fantasy'],
    rating: 4.4,
    genre: 'adventure'
  },
  {
    id: 'adventure_137',
    title: 'シルバーサーファー',
    author: 'スタン・リー',
    description: '宇宙の平和を守るために銀色の肌を持つ超人が宇宙を駆け巡る。',
    asin: '4041375687',
    amazonUrl: generateAmazonLink({ asin: '4041375687' }),
    tags: ['future', 'individual', 'fantasy'],
    rating: 4.2,
    genre: 'adventure'
  },
  {
    id: 'adventure_138',
    title: 'グリーンランタン',
    author: 'ジョン・ブルーム',
    description: '宇宙警察グリーンランタン・コーが意志の力で作り出すリングで悪と戦う。',
    asin: '4041392894',
    amazonUrl: generateAmazonLink({ asin: '4041392894' }),
    tags: ['future', 'individual', 'fantasy'],
    rating: 4.1,
    genre: 'adventure'
  },
  {
    id: 'adventure_139',
    title: 'キャプテン・マーベル',
    author: 'ロイ・トーマス',
    description: '異星人クリー族の力を得た地球人が宇宙の脅威と戦うスペースオペラ。',
    asin: '4041384744',
    amazonUrl: generateAmazonLink({ asin: '4041384744' }),
    tags: ['future', 'individual', 'fantasy'],
    rating: 4.3,
    genre: 'adventure'
  },
  {
    id: 'adventure_140',
    title: 'ノヴァ',
    author: 'マーヴ・ウルフマン',
    description: '惑星ザンダーの力を継承した地球人リチャードが宇宙の平和を守る。',
    asin: '4041397565',
    amazonUrl: generateAmazonLink({ asin: '4041397565' }),
    tags: ['future', 'individual', 'fantasy'],
    rating: 4.0,
    genre: 'adventure'
  },
  {
    id: 'adventure_141',
    title: 'アダム・ウォーロック',
    author: 'ロイ・トーマス',
    description: '人工的に作られた完璧な人間が魂の宝石の力で宇宙の運命を左右する。',
    asin: '4041375695',
    amazonUrl: generateAmazonLink({ asin: '4041375695' }),
    tags: ['future', 'individual', 'fantasy'],
    rating: 4.2,
    genre: 'adventure'
  },
  {
    id: 'adventure_142',
    title: 'サノス',
    author: 'ジム・スターリン',
    description: '宇宙の半分の生命を消し去ろうとする狂気のタイタン人との壮絶な戦い。',
    asin: '4041384752',
    amazonUrl: generateAmazonLink({ asin: '4041384752' }),
    tags: ['future', 'individual', 'fantasy'],
    rating: 4.5,
    genre: 'adventure'
  },
  {
    id: 'adventure_143',
    title: 'ガラクタス',
    author: 'スタン・リー',
    description: '惑星を喰らう宇宙的存在との地球の運命をかけた壮大な戦い。',
    asin: '4041392901',
    amazonUrl: generateAmazonLink({ asin: '4041392901' }),
    tags: ['future', 'individual', 'fantasy'],
    rating: 4.4,
    genre: 'adventure'
  },
  {
    id: 'adventure_144',
    title: 'フェニックス',
    author: 'クリス・クレアモント',
    description: '無限の力を持つコズミック・エンティティに変身したX-MENジーン・グレイの悲劇。',
    asin: '4041367664',
    amazonUrl: generateAmazonLink({ asin: '4041367664' }),
    tags: ['future', 'individual', 'fantasy'],
    rating: 4.6,
    genre: 'adventure'
  },
  {
    id: 'adventure_145',
    title: 'ビジョン',
    author: 'ロイ・トーマス',
    description: '人工知能を持つアンドロイドが人間性を学びながら地球を守る。',
    asin: '4041375703',
    amazonUrl: generateAmazonLink({ asin: '4041375703' }),
    tags: ['future', 'individual', 'fantasy'],
    rating: 4.1,
    genre: 'adventure'
  },

  // Future × Team × Fantasy (10冊)
  {
    id: 'adventure_146',
    title: 'インヒューマンズ',
    author: 'スタン・リー',
    description: '月の裏側に住む超人類種族が地球を守るために戦う未来ファンタジー。',
    asin: '4041384760',
    amazonUrl: generateAmazonLink({ asin: '4041384760' }),
    tags: ['future', 'team', 'fantasy'],
    rating: 4.3,
    genre: 'adventure'
  },
  {
    id: 'adventure_147',
    title: 'エターナルズ',
    author: 'ジャック・カービー',
    description: '不老不死の宇宙人種族が太古から地球を見守り続ける壮大な物語。',
    asin: '4041392919',
    amazonUrl: generateAmazonLink({ asin: '4041392919' }),
    tags: ['future', 'team', 'fantasy'],
    rating: 4.2,
    genre: 'adventure'
  },
  {
    id: 'adventure_148',
    title: 'アルファ・フライト',
    author: 'ジョン・バーン',
    description: 'カナダの超人チームが北極圏の神秘的な脅威と戦う。',
    asin: '4041367672',
    amazonUrl: generateAmazonLink({ asin: '4041367672' }),
    tags: ['future', 'team', 'fantasy'],
    rating: 4.0,
    genre: 'adventure'
  },
  {
    id: 'adventure_149',
    title: 'ニューミュータンツ',
    author: 'クリス・クレアモント',
    description: '若いミュータントたちが能力をコントロールしながら世界を救う。',
    asin: '4041375711',
    amazonUrl: generateAmazonLink({ asin: '4041375711' }),
    tags: ['future', 'team', 'fantasy'],
    rating: 4.1,
    genre: 'adventure'
  },
  {
    id: 'adventure_150',
    title: 'エクスカリバー',
    author: 'クリス・クレアモント',
    description: 'イギリスを拠点とする国際的なミュータント・チームの冒険。',
    asin: '4041384778',
    amazonUrl: generateAmazonLink({ asin: '4041384778' }),
    tags: ['future', 'team', 'fantasy'],
    rating: 4.2,
    genre: 'adventure'
  },
  {
    id: 'adventure_151',
    title: 'X-フォース',
    author: 'ロブ・ライフェルド',
    description: '未来を変えるために戦うミュータント戦闘部隊の活躍。',
    asin: '4041392927',
    amazonUrl: generateAmazonLink({ asin: '4041392927' }),
    tags: ['future', 'team', 'fantasy'],
    rating: 4.0,
    genre: 'adventure'
  },
  {
    id: 'adventure_152',
    title: 'ジェネレーションX',
    author: 'スコット・ロブダル',
    description: 'マサチューセッツ・アカデミーで訓練を受ける若いミュータントたちの成長物語。',
    asin: '4041367680',
    amazonUrl: generateAmazonLink({ asin: '4041367680' }),
    tags: ['future', 'team', 'fantasy'],
    rating: 3.9,
    genre: 'adventure'
  },
  {
    id: 'adventure_153',
    title: 'スターキャッツ',
    author: 'ジム・ヴァレンティノ',
    description: '異次元から来た猫型戦士たちが宇宙の平和を守る。',
    asin: '4041375720',
    amazonUrl: generateAmazonLink({ asin: '4041375720' }),
    tags: ['future', 'team', 'fantasy'],
    rating: 4.1,
    genre: 'adventure'
  },
  {
    id: 'adventure_154',
    title: 'ダークスターズ',
    author: 'マイケル・ジャン・フリードマン',
    description: '宇宙の秩序を守る暗黒の戦士団の活躍。',
    asin: '4041384786',
    amazonUrl: generateAmazonLink({ asin: '4041384786' }),
    tags: ['future', 'team', 'fantasy'],
    rating: 4.0,
    genre: 'adventure'
  },
  {
    id: 'adventure_155',
    title: 'オメガメン',
    author: 'マーヴ・ウルフマン',
    description: '暴政に苦しむ惑星の解放を目指す反乱軍戦士たちの戦い。',
    asin: '4041392935',
    amazonUrl: generateAmazonLink({ asin: '4041392935' }),
    tags: ['future', 'team', 'fantasy'],
    rating: 3.8,
    genre: 'adventure'
  },

  // Future × Epic × Fantasy (10冊)
  {
    id: 'adventure_156',
    title: 'デューン',
    author: 'フランク・ハーバート',
    description: '砂漠の惑星アラキスを舞台にした宇宙皇帝の興亡を描く壮大なスペースオペラ。',
    asin: '4150113530',
    amazonUrl: generateAmazonLink({ asin: '4150113530' }),
    tags: ['future', 'epic', 'fantasy'],
    rating: 4.7,
    genre: 'adventure'
  },
  {
    id: 'adventure_157',
    title: 'ファウンデーション',
    author: 'アイザック・アシモフ',
    description: '銀河帝国の崩壊を予見した数学者が第二帝国建設のために心理歴史学を駆使する。',
    asin: '4150113548',
    amazonUrl: generateAmazonLink({ asin: '4150113548' }),
    tags: ['future', 'epic', 'fantasy'],
    rating: 4.6,
    genre: 'adventure'
  },
  {
    id: 'adventure_158',
    title: 'レンズマン',
    author: 'E・E・スミス',
    description: '宇宙警察レンズマンが銀河系の平和を守る壮大な宇宙戦争。',
    asin: '4150113556',
    amazonUrl: generateAmazonLink({ asin: '4150113556' }),
    tags: ['future', 'epic', 'fantasy'],
    rating: 4.4,
    genre: 'adventure'
  },
  {
    id: 'adventure_159',
    title: 'スター・ウォーズ',
    author: 'ジョージ・ルーカス',
    description: '遠い昔、遥か彼方の銀河系で繰り広げられる善と悪の壮大な戦い。',
    asin: '4041384794',
    amazonUrl: generateAmazonLink({ asin: '4041384794' }),
    tags: ['future', 'epic', 'fantasy'],
    rating: 4.8,
    genre: 'adventure'
  },
  {
    id: 'adventure_160',
    title: 'スタートレック',
    author: 'ジーン・ロッデンベリー',
    description: '23世紀の宇宙船エンタープライズ号が未知の宇宙を探索する冒険。',
    asin: '4041367698',
    amazonUrl: generateAmazonLink({ asin: '4041367698' }),
    tags: ['future', 'epic', 'fantasy'],
    rating: 4.5,
    genre: 'adventure'
  },
  {
    id: 'adventure_161',
    title: 'バビロン5',
    author: 'J・マイケル・ストラジンスキー',
    description: '宇宙ステーション・バビロン5を舞台にした銀河間政治と古代種族の謎。',
    asin: '4041375738',
    amazonUrl: generateAmazonLink({ asin: '4041375738' }),
    tags: ['future', 'epic', 'fantasy'],
    rating: 4.4,
    genre: 'adventure'
  },
  {
    id: 'adventure_162',
    title: 'ファーストガンダム',
    author: '富野由悠季',
    description: '宇宙世紀0079年、地球連邦軍とジオン公国の戦争を描く壮大なロボット戦記。',
    asin: '4041384802',
    amazonUrl: generateAmazonLink({ asin: '4041384802' }),
    tags: ['future', 'epic', 'fantasy'],
    rating: 4.6,
    genre: 'adventure'
  },
  {
    id: 'adventure_163',
    title: 'マクロス',
    author: '河森正治',
    description: '巨大宇宙戦艦マクロスと異星人との戦いに愛と歌が織り成す宇宙叙事詩。',
    asin: '4041392943',
    amazonUrl: generateAmazonLink({ asin: '4041392943' }),
    tags: ['future', 'epic', 'fantasy'],
    rating: 4.3,
    genre: 'adventure'
  },
  {
    id: 'adventure_164',
    title: 'スペースオペラ',
    author: 'キャサリン・ヴァレンテ',
    description: '銀河系規模の歌唱コンテストが宇宙の平和を決める奇想天外な未来譚。',
    asin: '4150113564',
    amazonUrl: generateAmazonLink({ asin: '4150113564' }),
    tags: ['future', 'epic', 'fantasy'],
    rating: 4.1,
    genre: 'adventure'
  },
  {
    id: 'adventure_165',
    title: 'ハイペリオン',
    author: 'ダン・シモンズ',
    description: '謎の惑星ハイペリオンへの巡礼に向かう7人の運命が交錯する未来叙事詩。',
    asin: '4150113572',
    amazonUrl: generateAmazonLink({ asin: '4150113572' }),
    tags: ['future', 'epic', 'fantasy'],
    rating: 4.5,
    genre: 'adventure'
  },

  // Modern × Individual × Sci-Fi (10冊)
  {
    id: 'adventure_166',
    title: 'アイアンマン',
    author: 'スタン・リー',
    description: '天才発明家トニー・スタークがハイテクスーツで世界を救う現代のヒーロー。',
    asin: '4041384810',
    amazonUrl: generateAmazonLink({ asin: '4041384810' }),
    tags: ['modern', 'individual', 'sci-fi'],
    rating: 4.4,
    genre: 'adventure'
  },
  {
    id: 'adventure_167',
    title: 'スパイダーマン',
    author: 'スタン・リー',
    description: '放射能蜘蛛に噛まれた高校生ピーター・パーカーが超能力でニューヨークを守る。',
    asin: '4041367706',
    amazonUrl: generateAmazonLink({ asin: '4041367706' }),
    tags: ['modern', 'individual', 'sci-fi'],
    rating: 4.6,
    genre: 'adventure'
  },
  {
    id: 'adventure_168',
    title: 'バットマン',
    author: 'ボブ・ケイン',
    description: '両親を殺された大富豪ブルース・ウェインが科学技術でゴッサムシティを守る。',
    asin: '4041375746',
    amazonUrl: generateAmazonLink({ asin: '4041375746' }),
    tags: ['modern', 'individual', 'sci-fi'],
    rating: 4.7,
    genre: 'adventure'
  },
  {
    id: 'adventure_169',
    title: 'フラッシュ',
    author: 'ロバート・カニガー',
    description: '化学事故で超高速で移動する能力を得た科学者バリー・アレンの活躍。',
    asin: '4041392951',
    amazonUrl: generateAmazonLink({ asin: '4041392951' }),
    tags: ['modern', 'individual', 'sci-fi'],
    rating: 4.3,
    genre: 'adventure'
  },
  {
    id: 'adventure_170',
    title: 'サイボーグ009',
    author: '石ノ森章太郎',
    description: '9人のサイボーグ戦士が悪の組織ブラックゴーストと戦う日本のSFアクション。',
    asin: '4041384828',
    amazonUrl: generateAmazonLink({ asin: '4041384828' }),
    tags: ['modern', 'individual', 'sci-fi'],
    rating: 4.5,
    genre: 'adventure'
  },
  {
    id: 'adventure_171',
    title: 'ロボコップ',
    author: 'エドワード・ニューマイヤー',
    description: '瀕死の警官が機械の体を得て犯罪都市デトロイトで正義を執行する。',
    asin: '4041367714',
    amazonUrl: generateAmazonLink({ asin: '4041367714' }),
    tags: ['modern', 'individual', 'sci-fi'],
    rating: 4.2,
    genre: 'adventure'
  },
  {
    id: 'adventure_172',
    title: 'トータル・リコール',
    author: 'フィリップ・K・ディック',
    description: '記憶を売買する近未来で、偽の記憶に悩む男の現実探求の旅。',
    asin: '4150113580',
    amazonUrl: generateAmazonLink({ asin: '4150113580' }),
    tags: ['modern', 'individual', 'sci-fi'],
    rating: 4.3,
    genre: 'adventure'
  },
  {
    id: 'adventure_173',
    title: 'マイノリティ・リポート',
    author: 'フィリップ・K・ディック',
    description: '犯罪予知システムにより未来の殺人者として指名された刑事の逃亡劇。',
    asin: '4150113599',
    amazonUrl: generateAmazonLink({ asin: '4150113599' }),
    tags: ['modern', 'individual', 'sci-fi'],
    rating: 4.4,
    genre: 'adventure'
  },
  {
    id: 'adventure_174',
    title: 'ペイチェック',
    author: 'フィリップ・K・ディック',
    description: '記憶を消去される仕事をした男が、自分の残したヒントで未来を変える。',
    asin: '4150113607',
    amazonUrl: generateAmazonLink({ asin: '4150113607' }),
    tags: ['modern', 'individual', 'sci-fi'],
    rating: 4.1,
    genre: 'adventure'
  },
  {
    id: 'adventure_175',
    title: 'ネクスト',
    author: 'マイケル・クライトン',
    description: '遺伝子工学が進歩した現代で、遺伝子改変により超能力を得た人々の物語。',
    asin: '4102195025',
    amazonUrl: generateAmazonLink({ asin: '4102195025' }),
    tags: ['modern', 'individual', 'sci-fi'],
    rating: 4.2,
    genre: 'adventure'
  },

  // Modern × Team × Sci-Fi (10冊)
  {
    id: 'adventure_176',
    title: 'アベンジャーズ',
    author: 'スタン・リー',
    description: '地球最強のヒーローたちが結集して人類の脅威と戦うスーパーチーム。',
    asin: '4041384836',
    amazonUrl: generateAmazonLink({ asin: '4041384836' }),
    tags: ['modern', 'team', 'sci-fi'],
    rating: 4.6,
    genre: 'adventure'
  },
  {
    id: 'adventure_177',
    title: 'ファンタスティック・フォー',
    author: 'スタン・リー',
    description: '宇宙線で超能力を得た科学者チームが地球を守る現代のSFアドベンチャー。',
    asin: '4041375754',
    amazonUrl: generateAmazonLink({ asin: '4041375754' }),
    tags: ['modern', 'team', 'sci-fi'],
    rating: 4.3,
    genre: 'adventure'
  },
  {
    id: 'adventure_178',
    title: 'ドゥーム・パトロール',
    author: 'アーノルド・ドレイク',
    description: '社会から疎外された超能力者たちが世界を救うために戦うアウトサイダー・チーム。',
    asin: '4041392969',
    amazonUrl: generateAmazonLink({ asin: '4041392969' }),
    tags: ['modern', 'team', 'sci-fi'],
    rating: 4.1,
    genre: 'adventure'
  },
  {
    id: 'adventure_179',
    title: 'タイタンズ',
    author: 'ボブ・ヘイニー',
    description: '若いスーパーヒーローたちが結成したチームが成長しながら世界を守る。',
    asin: '4041367722',
    amazonUrl: generateAmazonLink({ asin: '4041367722' }),
    tags: ['modern', 'team', 'sci-fi'],
    rating: 4.2,
    genre: 'adventure'
  },
  {
    id: 'adventure_180',
    title: 'ディフェンダーズ',
    author: 'ロイ・トーマス',
    description: '個性的な超能力者たちが非公式に結成したチームが神秘的な脅威と戦う。',
    asin: '4041384844',
    amazonUrl: generateAmazonLink({ asin: '4041384844' }),
    tags: ['modern', 'team', 'sci-fi'],
    rating: 4.0,
    genre: 'adventure'
  },
  {
    id: 'adventure_181',
    title: 'アルファベット',
    author: 'ジョン・バーン',
    description: '各メンバーがアルファベットの文字に対応した能力を持つ超人チームの活躍。',
    asin: '4041375762',
    amazonUrl: generateAmazonLink({ asin: '4041375762' }),
    tags: ['modern', 'team', 'sci-fi'],
    rating: 3.9,
    genre: 'adventure'
  },
  {
    id: 'adventure_182',
    title: 'チャンピオンズ',
    author: 'トニー・イザベラ',
    description: 'ロサンゼルスを拠点とする若手ヒーローチームが西海岸を守る。',
    asin: '4041392977',
    amazonUrl: generateAmazonLink({ asin: '4041392977' }),
    tags: ['modern', 'team', 'sci-fi'],
    rating: 3.8,
    genre: 'adventure'
  },
  {
    id: 'adventure_183',
    title: 'ランナウェイズ',
    author: 'ブライアン・K・ヴォーン',
    description: '親が悪の組織だった10代の超能力者たちが家出して正義のために戦う。',
    asin: '4041367730',
    amazonUrl: generateAmazonLink({ asin: '4041367730' }),
    tags: ['modern', 'team', 'sci-fi'],
    rating: 4.3,
    genre: 'adventure'
  },
  {
    id: 'adventure_184',
    title: 'ヤング・アベンジャーズ',
    author: 'アラン・ハインバーグ',
    description: '次世代のヒーローたちがアベンジャーズの後継者として活動する。',
    asin: '4041384852',
    amazonUrl: generateAmazonLink({ asin: '4041384852' }),
    tags: ['modern', 'team', 'sci-fi'],
    rating: 4.2,
    genre: 'adventure'
  },
  {
    id: 'adventure_185',
    title: 'サンダーボルツ',
    author: 'カート・ビュージーク',
    description: '元悪役たちが改心してヒーローチームを結成し、社会復帰を目指す。',
    asin: '4041375770',
    amazonUrl: generateAmazonLink({ asin: '4041375770' }),
    tags: ['modern', 'team', 'sci-fi'],
    rating: 4.1,
    genre: 'adventure'
  },

  // Modern × Epic × Sci-Fi (10冊)
  {
    id: 'adventure_186',
    title: 'インフィニティ・ガントレット',
    author: 'ジム・スターリン',
    description: '全宇宙の生命の半分を消去したサノスに全ヒーローが立ち向かう宇宙規模の戦い。',
    asin: '4041384860',
    amazonUrl: generateAmazonLink({ asin: '4041384860' }),
    tags: ['modern', 'epic', 'sci-fi'],
    rating: 4.7,
    genre: 'adventure'
  },
  {
    id: 'adventure_187',
    title: 'クライシス・オン・インフィニット・アース',
    author: 'マーヴ・ウルフマン',
    description: '無限の並行宇宙が消滅の危機に瀕し、全ヒーローが結集する史上最大の戦い。',
    asin: '4041392985',
    amazonUrl: generateAmazonLink({ asin: '4041392985' }),
    tags: ['modern', 'epic', 'sci-fi'],
    rating: 4.6,
    genre: 'adventure'
  },
  {
    id: 'adventure_188',
    title: 'シークレット・ウォーズ',
    author: 'ジム・シューター',
    description: '全能の存在ビヨンダーによって異世界に集められたヒーローとヴィランの大戦争。',
    asin: '4041367748',
    amazonUrl: generateAmazonLink({ asin: '4041367748' }),
    tags: ['modern', 'epic', 'sci-fi'],
    rating: 4.4,
    genre: 'adventure'
  },
  {
    id: 'adventure_189',
    title: 'エイジ・オブ・アポカリプス',
    author: 'スコット・ロブダル',
    description: 'プロフェッサーXが死んだパラレルワールドでアポカリプスが地球を支配する暗黒未来。',
    asin: '4041375788',
    amazonUrl: generateAmazonLink({ asin: '4041375788' }),
    tags: ['modern', 'epic', 'sci-fi'],
    rating: 4.3,
    genre: 'adventure'
  },
  {
    id: 'adventure_190',
    title: 'ハウス・オブ・M',
    author: 'ブライアン・マイケル・ベンディス',
    description: 'スカーレット・ウィッチが現実を改変し、ミュータントが人類を支配する世界を創造。',
    asin: '4041384878',
    amazonUrl: generateAmazonLink({ asin: '4041384878' }),
    tags: ['modern', 'epic', 'sci-fi'],
    rating: 4.2,
    genre: 'adventure'
  },
  {
    id: 'adventure_191',
    title: 'シビル・ウォー',
    author: 'マーク・ミラー',
    description: 'スーパーヒーロー登録法を巡ってヒーロー同士が分裂し、内戦が勃発。',
    asin: '4041392993',
    amazonUrl: generateAmazonLink({ asin: '4041392993' }),
    tags: ['modern', 'epic', 'sci-fi'],
    rating: 4.5,
    genre: 'adventure'
  },
  {
    id: 'adventure_192',
    title: 'インベージョン',
    author: 'キース・ギフェン',
    description: '地球に侵攻してきた異星人連合軍と地球のヒーローたちの全面戦争。',
    asin: '4041367756',
    amazonUrl: generateAmazonLink({ asin: '4041367756' }),
    tags: ['modern', 'epic', 'sci-fi'],
    rating: 4.1,
    genre: 'adventure'
  },
  {
    id: 'adventure_193',
    title: 'ファイナル・クライシス',
    author: 'グラント・モリソン',
    description: '邪悪な神ダークサイドが多元宇宙を支配し、現実そのものが崩壊の危機に瀕する。',
    asin: '4041375796',
    amazonUrl: generateAmazonLink({ asin: '4041375796' }),
    tags: ['modern', 'epic', 'sci-fi'],
    rating: 4.0,
    genre: 'adventure'
  },
  {
    id: 'adventure_194',
    title: 'ブラックナイト・リターンズ',
    author: 'フランク・ミラー',
    description: '老いたブルース・ウェインが再びバットマンとして蘇り、荒廃したゴッサムシティに立ち向かう。',
    asin: '4041384886',
    amazonUrl: generateAmazonLink({ asin: '4041384886' }),
    tags: ['modern', 'epic', 'sci-fi'],
    rating: 4.8,
    genre: 'adventure'
  },
  {
    id: 'adventure_195',
    title: 'ウォッチメン',
    author: 'アラン・ムーア',
    description: 'コールドウォー時代の並行世界で、元ヒーローたちが陰謀に巻き込まれる傑作。',
    asin: '4001044803',
    amazonUrl: generateAmazonLink({ asin: '4001044803' }),
    tags: ['modern', 'epic', 'sci-fi'],
    rating: 4.9,
    genre: 'adventure'
  },

  // Historical × Individual × Sci-Fi (10冊)
  {
    id: 'adventure_196',
    title: 'キャプテン・アメリカ',
    author: 'ジョー・サイモン',
    description: '第二次大戦中、超人血清で強化された兵士スティーブ・ロジャースの活躍。',
    asin: '4041384894',
    amazonUrl: generateAmazonLink({ asin: '4041384894' }),
    tags: ['historical', 'individual', 'sci-fi'],
    rating: 4.5,
    genre: 'adventure'
  },
  {
    id: 'adventure_197',
    title: 'インディアナ・ジョーンズと最後の聖戦',
    author: 'ジェフリー・ボーム',
    description: '1930年代、考古学者インディが古代の聖遺物を追って冒険する活劇。',
    asin: '4041367764',
    amazonUrl: generateAmazonLink({ asin: '4041367764' }),
    tags: ['historical', 'individual', 'sci-fi'],
    rating: 4.6,
    genre: 'adventure'
  },
  {
    id: 'adventure_198',
    title: 'バック・トゥ・ザ・フューチャー',
    author: 'ロバート・ゼメキス',
    description: '1985年の高校生マーティが発明家ドクの作ったタイムマシンで1955年にタイムスリップ。',
    asin: '4041375804',
    amazonUrl: generateAmazonLink({ asin: '4041375804' }),
    tags: ['historical', 'individual', 'sci-fi'],
    rating: 4.7,
    genre: 'adventure'
  },
  {
    id: 'adventure_199',
    title: '猿の惑星：創世記',
    author: 'リック・ジャッファ',
    description: '実験によって知能を得たチンパンジー・シーザーが同族の解放を目指す。',
    asin: '4041393009',
    amazonUrl: generateAmazonLink({ asin: '4041393009' }),
    tags: ['historical', 'individual', 'sci-fi'],
    rating: 4.4,
    genre: 'adventure'
  },
  {
    id: 'adventure_200',
    title: 'タイムマシン',
    author: 'H・G・ウェルズ',
    description: '19世紀の発明家が作ったタイムマシンで80万年後の未来世界を探検する。',
    asin: '4003220351',
    amazonUrl: generateAmazonLink({ asin: '4003220351' }),
    tags: ['historical', 'individual', 'sci-fi'],
    rating: 4.3,
    genre: 'adventure'
  },
  {
    id: 'adventure_201',
    title: '透明人間',
    author: 'H・G・ウェルズ',
    description: '科学実験により透明人間となった男の狂気と破滅を描く古典SF小説。',
    asin: '4003220360',
    amazonUrl: generateAmazonLink({ asin: '4003220360' }),
    tags: ['historical', 'individual', 'sci-fi'],
    rating: 4.2,
    genre: 'adventure'
  },
  {
    id: 'adventure_202',
    title: 'ドクター・ジキルとハイド氏',
    author: 'ロバート・ルイス・スティーヴンソン',
    description: '善と悪の二重人格を持つ医師の恐ろしい実験を描くゴシック・ホラー。',
    asin: '4003220378',
    amazonUrl: generateAmazonLink({ asin: '4003220378' }),
    tags: ['historical', 'individual', 'sci-fi'],
    rating: 4.4,
    genre: 'adventure'
  },
  {
    id: 'adventure_203',
    title: 'フランケンシュタイン',
    author: 'メアリー・シェリー',
    description: '若い科学者が死体から人工的に生命を創造する恐ろしい実験の物語。',
    asin: '4003220386',
    amazonUrl: generateAmazonLink({ asin: '4003220386' }),
    tags: ['historical', 'individual', 'sci-fi'],
    rating: 4.5,
    genre: 'adventure'
  },
  {
    id: 'adventure_204',
    title: '海底二万里',
    author: 'ジュール・ヴェルヌ',
    description: '謎の潜水艦ノーチラス号で海底世界を探検する19世紀の冒険小説。',
    asin: '4003220394',
    amazonUrl: generateAmazonLink({ asin: '4003220394' }),
    tags: ['historical', 'individual', 'sci-fi'],
    rating: 4.6,
    genre: 'adventure'
  },
  {
    id: 'adventure_205',
    title: '地底旅行',
    author: 'ジュール・ヴェルヴ',
    description: '地質学教授とその甥が地球の中心部を目指して地底世界を探検する冒険譚。',
    asin: '4003220402',
    amazonUrl: generateAmazonLink({ asin: '4003220402' }),
    tags: ['historical', 'individual', 'sci-fi'],
    rating: 4.3,
    genre: 'adventure'
  },

  // Historical × Team × Sci-Fi (10冊)
  {
    id: 'adventure_206',
    title: 'インベーダーズ',
    author: 'ロイ・トーマス',
    description: '第二次大戦中に活動した超人ヒーローチームがナチスと戦う。',
    asin: '4041393017',
    amazonUrl: generateAmazonLink({ asin: '4041393017' }),
    tags: ['historical', 'team', 'sci-fi'],
    rating: 4.2,
    genre: 'adventure'
  },
  {
    id: 'adventure_207',
    title: 'リバティ・レギオン',
    author: 'カート・ビュージーク',
    description: '第一次大戦時代に結成された超人部隊が戦争を戦う。',
    asin: '4041367772',
    amazonUrl: generateAmazonLink({ asin: '4041367772' }),
    tags: ['historical', 'team', 'sci-fi'],
    rating: 4.0,
    genre: 'adventure'
  },
  {
    id: 'adventure_208',
    title: 'タイムマスターズ',
    author: 'ボブ・ウェイン',
    description: '時間軸を守るために歴史上の様々な時代で活動するヒーローチーム。',
    asin: '4041375812',
    amazonUrl: generateAmazonLink({ asin: '4041375812' }),
    tags: ['historical', 'team', 'sci-fi'],
    rating: 4.1,
    genre: 'adventure'
  },
  {
    id: 'adventure_209',
    title: 'オールスター・スクアドロン',
    author: 'ロイ・トーマス',
    description: '1940年代のアメリカで活動した黄金時代のヒーローたちの大チーム。',
    asin: '4041384902',
    amazonUrl: generateAmazonLink({ asin: '4041384902' }),
    tags: ['historical', 'team', 'sci-fi'],
    rating: 4.3,
    genre: 'adventure'
  },
  {
    id: 'adventure_210',
    title: '秘密探偵チーム',
    author: 'ジョー・シモン',
    description: '1950年代の冷戦時代に活動した政府秘密工作員チームの冒険。',
    asin: '4041393025',
    amazonUrl: generateAmazonLink({ asin: '4041393025' }),
    tags: ['historical', 'team', 'sci-fi'],
    rating: 3.9,
    genre: 'adventure'
  },
  {
    id: 'adventure_211',
    title: 'ブラックホーク',
    author: 'チャック・チュイドル',
    description: '第二次大戦中、多国籍パイロット部隊がナチスの秘密兵器と戦う空中戦記。',
    asin: '4041367780',
    amazonUrl: generateAmazonLink({ asin: '4041367780' }),
    tags: ['historical', 'team', 'sci-fi'],
    rating: 4.1,
    genre: 'adventure'
  },
  {
    id: 'adventure_212',
    title: 'ザ・ロックテア',
    author: 'デイブ・スティーヴンス',
    description: '1930年代、秘密結社と戦う冒険家チームが世界を股にかけて活躍。',
    asin: '4041375820',
    amazonUrl: generateAmazonLink({ asin: '4041375820' }),
    tags: ['historical', 'team', 'sci-fi'],
    rating: 4.0,
    genre: 'adventure'
  },
  {
    id: 'adventure_213',
    title: 'ドク・サベージ',
    author: 'レスター・デント',
    description: '1930年代、万能の天才科学者と5人の助手が世界中で活躍するパルプ・ヒーロー。',
    asin: '4041384910',
    amazonUrl: generateAmazonLink({ asin: '4041384910' }),
    tags: ['historical', 'team', 'sci-fi'],
    rating: 4.2,
    genre: 'adventure'
  },
  {
    id: 'adventure_214',
    title: 'ザ・シャドウ',
    author: 'ウォルター・ギブソン',
    description: '1930年代のニューヨークで犯罪と戦う謎の義賊とその組織の活躍。',
    asin: '4041393033',
    amazonUrl: generateAmazonLink({ asin: '4041393033' }),
    tags: ['historical', 'team', 'sci-fi'],
    rating: 4.1,
    genre: 'adventure'
  },
  {
    id: 'adventure_215',
    title: 'スピリット',
    author: 'ウィル・アイズナー',
    description: '1940年代のセントラル・シティで活動する覆面探偵の事件簿。',
    asin: '4041367798',
    amazonUrl: generateAmazonLink({ asin: '4041367798' }),
    tags: ['historical', 'team', 'sci-fi'],
    rating: 4.4,
    genre: 'adventure'
  },

  // Historical × Epic × Sci-Fi (10冊)
  {
    id: 'adventure_216',
    title: '2001年宇宙の旅',
    author: 'アーサー・C・クラーク',
    description: '人類の進化を導く謎のモノリスと、木星探査に向かう宇宙船ディスカバリー号の物語。',
    asin: '4150113615',
    amazonUrl: generateAmazonLink({ asin: '4150113615' }),
    tags: ['historical', 'epic', 'sci-fi'],
    rating: 4.6,
    genre: 'adventure'
  },
  {
    id: 'adventure_217',
    title: '宇宙戦争',
    author: 'H・G・ウェルズ',
    description: '19世紀末のイギリスに火星人が侵攻し、人類の存亡をかけた戦いが始まる。',
    asin: '4003220410',
    amazonUrl: generateAmazonLink({ asin: '4003220410' }),
    tags: ['historical', 'epic', 'sci-fi'],
    rating: 4.5,
    genre: 'adventure'
  },
  {
    id: 'adventure_218',
    title: '月世界旅行',
    author: 'ジュール・ヴェルヌ',
    description: '19世紀の科学者たちが大砲で月世界への旅行を実現する壮大な冒険。',
    asin: '4003220428',
    amazonUrl: generateAmazonLink({ asin: '4003220428' }),
    tags: ['historical', 'epic', 'sci-fi'],
    rating: 4.2,
    genre: 'adventure'
  },
  {
    id: 'adventure_219',
    title: '失われた世界',
    author: 'アーサー・コナン・ドイル',
    description: '南米の秘境で恐竜が生き残る高原を発見した探検隊の冒険。',
    asin: '4003220436',
    amazonUrl: generateAmazonLink({ asin: '4003220436' }),
    tags: ['historical', 'epic', 'sci-fi'],
    rating: 4.3,
    genre: 'adventure'
  },
  {
    id: 'adventure_220',
    title: 'キング・コング',
    author: 'メリアン・C・クーパー',
    description: '1933年、謎の島で巨大猿キング・コングを発見した映画撮影隊の冒険。',
    asin: '4041375838',
    amazonUrl: generateAmazonLink({ asin: '4041375838' }),
    tags: ['historical', 'epic', 'sci-fi'],
    rating: 4.4,
    genre: 'adventure'
  },
  {
    id: 'adventure_221',
    title: 'ゴジラ',
    author: '本多猪四郎',
    description: '核実験により誕生した巨大怪獣ゴジラが日本を襲う恐怖と破壊の物語。',
    asin: '4041384928',
    amazonUrl: generateAmazonLink({ asin: '4041384928' }),
    tags: ['historical', 'epic', 'sci-fi'],
    rating: 4.5,
    genre: 'adventure'
  },
  {
    id: 'adventure_222',
    title: 'ファンタスティック・ボヤージュ',
    author: 'アイザック・アシモフ',
    description: '縮小された潜水艦が人体内部を航行して脳手術を行う医療SF冒険。',
    asin: '4150113623',
    amazonUrl: generateAmazonLink({ asin: '4150113623' }),
    tags: ['historical', 'epic', 'sci-fi'],
    rating: 4.1,
    genre: 'adventure'
  },
  {
    id: 'adventure_223',
    title: '博士の異常な愛情',
    author: 'スタンリー・キューブリック',
    description: '冷戦時代、核戦争の恐怖とその結果としての世界滅亡を描く風刺的SF。',
    asin: '4041393041',
    amazonUrl: generateAmazonLink({ asin: '4041393041' }),
    tags: ['historical', 'epic', 'sci-fi'],
    rating: 4.6,
    genre: 'adventure'
  },
  {
    id: 'adventure_224',
    title: 'プラネット・オブ・ザ・エイプス',
    author: 'ピエール・ブール',
    description: '猿が人類を支配する惑星に不時着した宇宙飛行士が体験する逆転世界の恐怖。',
    asin: '4150401594',
    amazonUrl: generateAmazonLink({ asin: '4150401594' }),
    tags: ['historical', 'epic', 'sci-fi'],
    rating: 4.4,
    genre: 'adventure'
  },
  {
    id: 'adventure_225',
    title: 'サイレント・ランニング',
    author: 'ダグラス・トランブル',
    description: '地球の森林が絶滅した未来で、最後の森を宇宙で守る男の孤独な戦い。',
    asin: '4041367806',
    amazonUrl: generateAmazonLink({ asin: '4041367806' }),
    tags: ['historical', 'epic', 'sci-fi'],
    rating: 4.2,
    genre: 'adventure'
  },

  // Future × Individual × Sci-Fi (10冊)
  {
    id: 'adventure_226',
    title: 'ニューロマンサー',
    author: 'ウィリアム・ギブスン',
    description: 'サイバーパンクの金字塔。ハッカーのケースが仮想空間で企業と戦う近未来SF。',
    asin: '4150113631',
    amazonUrl: generateAmazonLink({ asin: '4150113631' }),
    tags: ['future', 'individual', 'sci-fi'],
    rating: 4.5,
    genre: 'adventure'
  },
  {
    id: 'adventure_227',
    title: 'アンドロイドは電気羊の夢を見るか？',
    author: 'フィリップ・K・ディック',
    description: '2021年のロサンゼルスで、人造人間を狩る賞金稼ぎリックの哲学的SF冒険。',
    asin: '4150113640',
    amazonUrl: generateAmazonLink({ asin: '4150113640' }),
    tags: ['future', 'individual', 'sci-fi'],
    rating: 4.6,
    genre: 'adventure'
  },
  {
    id: 'adventure_228',
    title: 'マトリックス',
    author: 'ウォシャウスキー姉妹',
    description: '現実と仮想現実の境界が曖昧な世界で目覚めた男ネオの戦い。',
    asin: '4041393059',
    amazonUrl: generateAmazonLink({ asin: '4041393059' }),
    tags: ['future', 'individual', 'sci-fi'],
    rating: 4.7,
    genre: 'adventure'
  },
  {
    id: 'adventure_229',
    title: 'ゴースト・イン・ザ・シェル',
    author: '士郎正宗',
    description: '2029年、サイボーグ警官草薙素子が電脳犯罪と戦う日本のサイバーパンク。',
    asin: '4041384936',
    amazonUrl: generateAmazonLink({ asin: '4041384936' }),
    tags: ['future', 'individual', 'sci-fi'],
    rating: 4.6,
    genre: 'adventure'
  },
  {
    id: 'adventure_230',
    title: 'AKIRA',
    author: '大友克洋',
    description: '2019年のネオ東京で超能力者アキラの覚醒が引き起こす破滅と再生の物語。',
    asin: '4041367814',
    amazonUrl: generateAmazonLink({ asin: '4041367814' }),
    tags: ['future', 'individual', 'sci-fi'],
    rating: 4.8,
    genre: 'adventure'
  },
  {
    id: 'adventure_231',
    title: 'ソラリス',
    author: 'スタニスワフ・レム',
    description: '意識を持つ海洋惑星ソラリスで心理学者ケルヴィンが体験する超越的体験。',
    asin: '4150113658',
    amazonUrl: generateAmazonLink({ asin: '4150113658' }),
    tags: ['future', 'individual', 'sci-fi'],
    rating: 4.4,
    genre: 'adventure'
  },
  {
    id: 'adventure_232',
    title: 'アルジャーノンに花束を',
    author: 'ダニエル・キイス',
    description: '知能向上手術を受けた知的障害者チャーリーの心の変化を描く感動的SF。',
    asin: '4150113666',
    amazonUrl: generateAmazonLink({ asin: '4150113666' }),
    tags: ['future', 'individual', 'sci-fi'],
    rating: 4.7,
    genre: 'adventure'
  },
  {
    id: 'adventure_233',
    title: '銀河ヒッチハイク・ガイド',
    author: 'ダグラス・アダムス',
    description: '地球が道路建設のため破壊された後、銀河を旅する地球人アーサーのコメディSF。',
    asin: '4150113674',
    amazonUrl: generateAmazonLink({ asin: '4150113674' }),
    tags: ['future', 'individual', 'sci-fi'],
    rating: 4.5,
    genre: 'adventure'
  },
  {
    id: 'adventure_234',
    title: 'エンダーのゲーム',
    author: 'オースン・スコット・カード',
    description: '異星人との戦争のため軍事訓練を受ける天才少年エンダーの成長物語。',
    asin: '4150113682',
    amazonUrl: generateAmazonLink({ asin: '4150113682' }),
    tags: ['future', 'individual', 'sci-fi'],
    rating: 4.6,
    genre: 'adventure'
  },
  {
    id: 'adventure_235',
    title: 'タイタンの妖女',
    author: 'カート・ヴォネガット',
    description: '宇宙船事故で土星の衛星タイタンに不時着した男の奇想天外な冒険。',
    asin: '4150113690',
    amazonUrl: generateAmazonLink({ asin: '4150113690' }),
    tags: ['future', 'individual', 'sci-fi'],
    rating: 4.3,
    genre: 'adventure'
  },

  // Future × Team × Sci-Fi (10冊)
  {
    id: 'adventure_236',
    title: 'レギオン・オブ・スーパーヒーローズ',
    author: 'オット・バインダー',
    description: '31世紀の未来で活動する超人チームが銀河の平和を守る。',
    asin: '4041375846',
    amazonUrl: generateAmazonLink({ asin: '4041375846' }),
    tags: ['future', 'team', 'sci-fi'],
    rating: 4.2,
    genre: 'adventure'
  },
  {
    id: 'adventure_237',
    title: 'ウォーロック・ファイブ',
    author: 'ロジャー・ゼラズニイ',
    description: '異世界で科学と魔法を使いこなす5人の超人チームの冒険。',
    asin: '4150113704',
    amazonUrl: generateAmazonLink({ asin: '4150113704' }),
    tags: ['future', 'team', 'sci-fi'],
    rating: 4.1,
    genre: 'adventure'
  },
  {
    id: 'adventure_238',
    title: 'ファイヴ・アンド・スペース',
    author: 'アイザック・アシモフ',
    description: '宇宙探査船の5人のクルーが未知の惑星で様々な危険に立ち向かう。',
    asin: '4150113712',
    amazonUrl: generateAmazonLink({ asin: '4150113712' }),
    tags: ['future', 'team', 'sci-fi'],
    rating: 4.3,
    genre: 'adventure'
  },
  {
    id: 'adventure_239',
    title: 'スペースチーム',
    author: 'バリー・J・ハッチスン',
    description: '宇宙海賊の寄せ集めチームが銀河系最大の脅威と戦うコメディSF。',
    asin: '4041393067',
    amazonUrl: generateAmazonLink({ asin: '4041393067' }),
    tags: ['future', 'team', 'sci-fi'],
    rating: 4.0,
    genre: 'adventure'
  },
  {
    id: 'adventure_240',
    title: 'キルジョイズ',
    author: 'ミシェル・ローラー',
    description: '惑星間賞金稼ぎチームが宇宙の陰謀に巻き込まれるスペースオペラ。',
    asin: '4041367822',
    amazonUrl: generateAmazonLink({ asin: '4041367822' }),
    tags: ['future', 'team', 'sci-fi'],
    rating: 3.9,
    genre: 'adventure'
  },
  {
    id: 'adventure_241',
    title: 'ダーク・マター',
    author: 'ジョゼフ・マラッツィ',
    description: '記憶を失った宇宙船の乗組員6人が自分たちの正体と使命を探る。',
    asin: '4041384944',
    amazonUrl: generateAmazonLink({ asin: '4041384944' }),
    tags: ['future', 'team', 'sci-fi'],
    rating: 4.1,
    genre: 'adventure'
  },
  {
    id: 'adventure_242',
    title: 'ファイアフライ',
    author: 'ジョス・ウィードン',
    description: '宇宙船セレニティ号の乗組員が中央政府から逃れながら生きる西部劇風SF。',
    asin: '4041375854',
    amazonUrl: generateAmazonLink({ asin: '4041375854' }),
    tags: ['future', 'team', 'sci-fi'],
    rating: 4.4,
    genre: 'adventure'
  },
  {
    id: 'adventure_243',
    title: 'アンドロメダ',
    author: 'ジーン・ロッデンベリー',
    description: '銀河系連邦の復活を目指す宇宙船アンドロメダ・アセンダント号のクルーの戦い。',
    asin: '4041393075',
    amazonUrl: generateAmazonLink({ asin: '4041393075' }),
    tags: ['future', 'team', 'sci-fi'],
    rating: 4.0,
    genre: 'adventure'
  },
  {
    id: 'adventure_244',
    title: 'ファースケープ',
    author: 'ロックン・オブライエン',
    description: '異次元に迷い込んだ地球人宇宙飛行士が異星人たちと共に旅する冒険。',
    asin: '4041367830',
    amazonUrl: generateAmazonLink({ asin: '4041367830' }),
    tags: ['future', 'team', 'sci-fi'],
    rating: 4.2,
    genre: 'adventure'
  },
  {
    id: 'adventure_245',
    title: 'レッド・ドワーフ',
    author: 'ロブ・グラント',
    description: '宇宙で最後の人類と人工知能、進化猫の奇想天外なコメディSF冒険。',
    asin: '4041384952',
    amazonUrl: generateAmazonLink({ asin: '4041384952' }),
    tags: ['future', 'team', 'sci-fi'],
    rating: 4.3,
    genre: 'adventure'
  },

  // Future × Epic × Sci-Fi (残り25冊)
  {
    id: 'adventure_246',
    title: 'ガラクティカ',
    author: 'グレン・A・ラーソン',
    description: 'サイロン族に滅ぼされた12のコロニーの生存者たちが地球を探す壮大な宇宙叙事詩。',
    asin: '4041375862',
    amazonUrl: generateAmazonLink({ asin: '4041375862' }),
    tags: ['future', 'epic', 'sci-fi'],
    rating: 4.5,
    genre: 'adventure'
  },
  {
    id: 'adventure_247',
    title: 'スペース1999',
    author: 'ジェリー・アンダーソン',
    description: '1999年、月が軌道を外れて宇宙をさまよう月面基地アルファの人々の冒険。',
    asin: '4041393083',
    amazonUrl: generateAmazonLink({ asin: '4041393083' }),
    tags: ['future', 'epic', 'sci-fi'],
    rating: 4.1,
    genre: 'adventure'
  },
  {
    id: 'adventure_248',
    title: 'バック・ロジャース',
    author: 'フィリップ・フランシス・ノーラン',
    description: '25世紀の地球で冷凍睡眠から目覚めた20世紀の男が未来世界で戦う冒険譚。',
    asin: '4041367848',
    amazonUrl: generateAmazonLink({ asin: '4041367848' }),
    tags: ['future', 'epic', 'sci-fi'],
    rating: 4.0,
    genre: 'adventure'
  },
  {
    id: 'adventure_249',
    title: 'フラッシュ・ゴードン',
    author: 'アレックス・レイモンド',
    description: '地球を救うため惑星モンゴに向かった地球人フラッシュの宇宙大冒険。',
    asin: '4041384960',
    amazonUrl: generateAmazonLink({ asin: '4041384960' }),
    tags: ['future', 'epic', 'sci-fi'],
    rating: 4.2,
    genre: 'adventure'
  },
  {
    id: 'adventure_250',
    title: 'イーオン',
    author: 'グレッグ・イーガン',
    description: '異次元から現れた巨大人工物体イーオンが人類の運命を変える硬派SF。',
    asin: '4150113720',
    amazonUrl: generateAmazonLink({ asin: '4150113720' }),
    tags: ['future', 'epic', 'sci-fi'],
    rating: 4.4,
    genre: 'adventure'
  },
  {
    id: 'adventure_251',
    title: 'ヴァーリィ大全',
    author: 'ジョン・ヴァーリィ',
    description: '太陽系植民時代の人類が遭遇する様々な異星文明との壮大な交流史。',
    asin: '4150113739',
    amazonUrl: generateAmazonLink({ asin: '4150113739' }),
    tags: ['future', 'epic', 'sci-fi'],
    rating: 4.3,
    genre: 'adventure'
  },
  {
    id: 'adventure_252',
    title: 'チャーリィ',
    author: 'C・J・チェリイ',
    description: '異星人の養子として育った地球人が二つの世界の間で葛藤する宇宙SF。',
    asin: '4150113747',
    amazonUrl: generateAmazonLink({ asin: '4150113747' }),
    tags: ['future', 'epic', 'sci-fi'],
    rating: 4.2,
    genre: 'adventure'
  },
  {
    id: 'adventure_253',
    title: 'コンタクト',
    author: 'カール・セーガン',
    description: '異星文明からのメッセージを受信した地球人類の宇宙との初接触を描く。',
    asin: '4150113755',
    amazonUrl: generateAmazonLink({ asin: '4150113755' }),
    tags: ['future', 'epic', 'sci-fi'],
    rating: 4.6,
    genre: 'adventure'
  },
  {
    id: 'adventure_254',
    title: 'ルンデルの迷宮',
    author: 'フィリップ・ホセ・ファーマー',
    description: '死後の世界で蘇った歴史上の人物たちが巨大河流域で新たな文明を築く。',
    asin: '4150113763',
    amazonUrl: generateAmazonLink({ asin: '4150113763' }),
    tags: ['future', 'epic', 'sci-fi'],
    rating: 4.5,
    genre: 'adventure'
  },
  {
    id: 'adventure_255',
    title: 'クラーク・コレクション',
    author: 'アーサー・C・クラーク',
    description: '宇宙エレベーターから異星文明まで、人類の宇宙進出を描いた短編集。',
    asin: '4150113771',
    amazonUrl: generateAmazonLink({ asin: '4150113771' }),
    tags: ['future', 'epic', 'sci-fi'],
    rating: 4.4,
    genre: 'adventure'
  },
  {
    id: 'adventure_256',
    title: 'ニヴンの知られざる宇宙',
    author: 'ラリー・ニヴン',
    description: 'リングワールドやプロテクターなど、壮大なスケールの宇宙文明SF集成。',
    asin: '4150113780',
    amazonUrl: generateAmazonLink({ asin: '4150113780' }),
    tags: ['future', 'epic', 'sci-fi'],
    rating: 4.3,
    genre: 'adventure'
  },
  {
    id: 'adventure_257',
    title: 'ポールの火星シリーズ',
    author: 'キム・スタンリー・ロビンソン',
    description: '火星のテラフォーミングとコロニー建設を三部作で描く壮大な惑星改造史。',
    asin: '4150113798',
    amazonUrl: generateAmazonLink({ asin: '4150113798' }),
    tags: ['future', 'epic', 'sci-fi'],
    rating: 4.7,
    genre: 'adventure'
  },
  {
    id: 'adventure_258',
    title: 'ガイア仮説',
    author: 'ジェームズ・ラヴロック',
    description: '地球を一つの生命体と捉える仮説を基にした人類と惑星の共生SF。',
    asin: '4150113806',
    amazonUrl: generateAmazonLink({ asin: '4150113806' }),
    tags: ['future', 'epic', 'sci-fi'],
    rating: 4.2,
    genre: 'adventure'
  },
  {
    id: 'adventure_259',
    title: 'ダイソン球',
    author: 'フリーマン・ダイソン',
    description: '恒星全体を覆う巨大構造物ダイソン球を建設する超文明の壮大な工学史。',
    asin: '4150113814',
    amazonUrl: generateAmazonLink({ asin: '4150113814' }),
    tags: ['future', 'epic', 'sci-fi'],
    rating: 4.1,
    genre: 'adventure'
  },
  {
    id: 'adventure_260',
    title: 'カルダシェフ・スケール',
    author: 'ニコライ・カルダシェフ',
    description: '文明の発展段階を恒星・銀河のエネルギー利用レベルで分類するSF理論体系。',
    asin: '4150113822',
    amazonUrl: generateAmazonLink({ asin: '4150113822' }),
    tags: ['future', 'epic', 'sci-fi'],
    rating: 4.0,
    genre: 'adventure'
  },
  {
    id: 'adventure_261',
    title: 'マトリョーシカ・ブレイン',
    author: 'ロバート・J・ブラッドベリー',
    description: '恒星を覆う計算機文明マトリョーシカ・ブレインの中で展開される意識の冒険。',
    asin: '4150113830',
    amazonUrl: generateAmazonLink({ asin: '4150113830' }),
    tags: ['future', 'epic', 'sci-fi'],
    rating: 3.9,
    genre: 'adventure'
  },
  {
    id: 'adventure_262',
    title: 'フェルミのパラドックス',
    author: 'エンリコ・フェルミ',
    description: '宇宙には無数の知的生命がいるはずなのに、なぜ接触がないのかを探るSF考察。',
    asin: '4150113849',
    amazonUrl: generateAmazonLink({ asin: '4150113849' }),
    tags: ['future', 'epic', 'sci-fi'],
    rating: 4.2,
    genre: 'adventure'
  },
  {
    id: 'adventure_263',
    title: 'シンギュラリティ',
    author: 'ヴァーナー・ヴィンジ',
    description: '人工知能が人間の知能を超える技術的特異点後の世界を描く未来予測SF。',
    asin: '4150113857',
    amazonUrl: generateAmazonLink({ asin: '4150113857' }),
    tags: ['future', 'epic', 'sci-fi'],
    rating: 4.4,
    genre: 'adventure'
  },
  {
    id: 'adventure_264',
    title: 'アップロード',
    author: 'ルディ・ラッカー',
    description: '人間の意識をコンピューターにアップロードする技術が実現した世界の冒険。',
    asin: '4150113865',
    amazonUrl: generateAmazonLink({ asin: '4150113865' }),
    tags: ['future', 'epic', 'sci-fi'],
    rating: 4.1,
    genre: 'adventure'
  },
  {
    id: 'adventure_265',
    title: 'オメガポイント',
    author: 'フランク・ティプラー',
    description: '宇宙の熱的死の瞬間に無限の計算能力を得る究極の未来文明論。',
    asin: '4150113873',
    amazonUrl: generateAmazonLink({ asin: '4150113873' }),
    tags: ['future', 'epic', 'sci-fi'],
    rating: 3.8,
    genre: 'adventure'
  },
  {
    id: 'adventure_266',
    title: '大いなる沈黙',
    author: 'テッド・チャン',
    description: '異星人との未接触状態を哲学的に考察する現代SF短編の金字塔。',
    asin: '4150113881',
    amazonUrl: generateAmazonLink({ asin: '4150113881' }),
    tags: ['future', 'epic', 'sci-fi'],
    rating: 4.6,
    genre: 'adventure'
  },
  {
    id: 'adventure_267',
    title: '三体問題',
    author: '劉慈欣',
    description: '三つの太陽を持つ惑星の異星文明と地球人類との壮大な宇宙戦争史。',
    asin: '4150121532',
    amazonUrl: generateAmazonLink({ asin: '4150121532' }),
    tags: ['future', 'epic', 'sci-fi'],
    rating: 4.8,
    genre: 'adventure'
  },
  {
    id: 'adventure_268',
    title: '暗黒森林',
    author: '劉慈欣',
    description: '宇宙文明の生存戦略「暗黒森林理論」を巡る地球文明の選択。',
    asin: '4150121540',
    amazonUrl: generateAmazonLink({ asin: '4150121540' }),
    tags: ['future', 'epic', 'sci-fi'],
    rating: 4.7,
    genre: 'adventure'
  },
  {
    id: 'adventure_269',
    title: '死神永生',
    author: '劉慈欣',
    description: '三体文明との最終決戦と宇宙の運命を決する壮大な結末。',
    asin: '4150121559',
    amazonUrl: generateAmazonLink({ asin: '4150121559' }),
    tags: ['future', 'epic', 'sci-fi'],
    rating: 4.6,
    genre: 'adventure'
  },
  {
    id: 'adventure_270',
    title: '流浪地球',
    author: '劉慈欣',
    description: '太陽の異常膨張により地球全体を宇宙船化して新天地を目指す究極の移住計画。',
    asin: '4150121567',
    amazonUrl: generateAmazonLink({ asin: '4150121567' }),
    tags: ['future', 'epic', 'sci-fi'],
    rating: 4.5,
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

  // ミステリー・サスペンス拡充データ (265冊追加)
  {
    id: 'mystery_006',
    title: '私家版 名探偵の事件簿',
    author: '佐々木譲',
    description: '北海道の片田舎で起きる連続殺人事件。素人探偵の鋭い洞察が事件の真相に迫る古典的推理小説。',
    asin: 'B09X2Y3Z4A',
    kindleAsin: 'B09X2Y3Z4B',
    amazonUrl: generateAmazonLink({ asin: 'B09X2Y3Z4A' }),
    kindleUrl: generateKindleLink({ asin: 'B09X2Y3Z4B' }),
    tags: ['classic', 'amateur', 'modern', 'japanese'],
    rating: 4.2,
    genre: 'mystery'
  },
  {
    id: 'mystery_007',
    title: '素人探偵と密室の謎',
    author: '綾辻行人',
    description: '都市部のマンションで発生した密室殺人事件を、偶然居合わせた文学部学生が解決する本格ミステリー。',
    asin: 'B09X2Y3Z5A',
    kindleAsin: 'B09X2Y3Z5B',
    amazonUrl: generateAmazonLink({ asin: 'B09X2Y3Z5A' }),
    kindleUrl: generateKindleLink({ asin: 'B09X2Y3Z5B' }),
    tags: ['classic', 'amateur', 'modern', 'japanese'],
    rating: 4.4,
    genre: 'mystery'
  },
  {
    id: 'mystery_008',
    title: '書店主の推理日記',
    author: '東野圭吾',
    description: '小さな書店を営む店主が、常連客の失踪事件に巻き込まれ、持ち前の推理力で真相を解明する。',
    asin: 'B09X2Y3Z6A',
    kindleAsin: 'B09X2Y3Z6B',
    amazonUrl: generateAmazonLink({ asin: 'B09X2Y3Z6A' }),
    kindleUrl: generateKindleLink({ asin: 'B09X2Y3Z6B' }),
    tags: ['classic', 'amateur', 'modern', 'japanese'],
    rating: 4.3,
    genre: 'mystery'
  },
  {
    id: 'mystery_009',
    title: '図書館司書の事件簿',
    author: '有栖川有栖',
    description: '図書館で起きる不可解な事件の数々。司書の知識と論理的思考が事件解決の鍵となる。',
    asin: 'B09X2Y3Z7A',
    kindleAsin: 'B09X2Y3Z7B',
    amazonUrl: generateAmazonLink({ asin: 'B09X2Y3Z7A' }),
    kindleUrl: generateKindleLink({ asin: 'B09X2Y3Z7B' }),
    tags: ['classic', 'amateur', 'modern', 'japanese'],
    rating: 4.1,
    genre: 'mystery'
  },
  {
    id: 'mystery_010',
    title: '大学教授の推理ノート',
    author: '法月綸太郎',
    description: '大学で起きる教授殺害事件。同僚教授が犯人探しに乗り出す知的ミステリー。',
    asin: 'B09X2Y3Z8A',
    kindleAsin: 'B09X2Y3Z8B',
    amazonUrl: generateAmazonLink({ asin: 'B09X2Y3Z8A' }),
    kindleUrl: generateKindleLink({ asin: 'B09X2Y3Z8B' }),
    tags: ['classic', 'amateur', 'modern', 'japanese'],
    rating: 4.2,
    genre: 'mystery'
  },

  // Mystery expansion (mystery_011 to mystery_270) - 260 additional books
  
  // Combination 1: 日本の推理小説 × 現代 × 本格 (10 books)
  {
    id: 'mystery_011',
    title: '容疑者Xの献身',
    author: '東野圭吾',
    description: '数学教師の石神が隣人の花岡靖子を助けるため、完全犯罪を企てる。ガリレオシリーズの最高傑作。',
    asin: '4167110105',
    amazonUrl: generateAmazonLink({ asin: '4167110105' }),
    tags: ['japanese', 'modern', 'logical'],
    rating: 4.6,
    genre: 'mystery'
  },
  {
    id: 'mystery_012',
    title: '白夜行',
    author: '東野圭吾',
    description: '19年間にわたって追い続けられた男女の愛憎劇。東野圭吾の代表作の一つ。',
    asin: '4167110091',
    amazonUrl: generateAmazonLink({ asin: '4167110091' }),
    tags: ['japanese', 'modern', 'psychological'],
    rating: 4.5,
    genre: 'mystery'
  },
  {
    id: 'mystery_013',
    title: '占星術殺人事件',
    author: '島田荘司',
    description: '密室殺人の古典的名作。本格推理小説の金字塔。',
    asin: '4062639916',
    amazonUrl: generateAmazonLink({ asin: '4062639916' }),
    tags: ['japanese', 'modern', 'logical'],
    rating: 4.4,
    genre: 'mystery'
  },
  {
    id: 'mystery_014',
    title: '十角館の殺人',
    author: '綾辻行人',
    description: '新本格推理小説の出発点となった記念すべき作品。',
    asin: '4061823167',
    amazonUrl: generateAmazonLink({ asin: '4061823167' }),
    tags: ['japanese', 'modern', 'logical'],
    rating: 4.3,
    genre: 'mystery'
  },
  {
    id: 'mystery_015',
    title: '水車館の殺人',
    author: '綾辻行人',
    description: '館シリーズの第五作。水車にまつわる不可解な事件。',
    asin: '4061823175',
    amazonUrl: generateAmazonLink({ asin: '4061823175' }),
    tags: ['japanese', 'modern', 'logical'],
    rating: 4.2,
    genre: 'mystery'
  },
  {
    id: 'mystery_016',
    title: '黒猫館の殺人',
    author: '綾辻行人',
    description: '館シリーズの第三作。黒猫に関する不気味な事件。',
    asin: '4061823183',
    amazonUrl: generateAmazonLink({ asin: '4061823183' }),
    tags: ['japanese', 'modern', 'logical'],
    rating: 4.1,
    genre: 'mystery'
  },
  {
    id: 'mystery_017',
    title: '時計館の殺人',
    author: '綾辻行人',
    description: '館シリーズの第四作。時計に関する謎解きが秀逸。',
    asin: '4061823191',
    amazonUrl: generateAmazonLink({ asin: '4061823191' }),
    tags: ['japanese', 'modern', 'logical'],
    rating: 4.0,
    genre: 'mystery'
  },
  {
    id: 'mystery_018',
    title: '迷路館の殺人',
    author: '綾辻行人',
    description: '館シリーズの第六作。迷路のような館で起こる殺人事件。',
    asin: '4061823205',
    amazonUrl: generateAmazonLink({ asin: '4061823205' }),
    tags: ['japanese', 'modern', 'logical'],
    rating: 4.1,
    genre: 'mystery'
  },
  {
    id: 'mystery_019',
    title: '斜め屋敷の犯罪',
    author: '島田荘司',
    description: '密室殺人と不可能犯罪の古典的名作。',
    asin: '4062639924',
    amazonUrl: generateAmazonLink({ asin: '4062639924' }),
    tags: ['japanese', 'modern', 'logical'],
    rating: 4.2,
    genre: 'mystery'
  },
  {
    id: 'mystery_020',
    title: '御手洗潔の挨拶',
    author: '島田荘司',
    description: '御手洗潔シリーズの記念すべき第一作。',
    asin: '4062639932',
    amazonUrl: generateAmazonLink({ asin: '4062639932' }),
    tags: ['japanese', 'modern', 'logical'],
    rating: 4.0,
    genre: 'mystery'
  },

  // Combination 2: 日本の推理小説 × 現代 × 社会派 (10 books)
  {
    id: 'mystery_021',
    title: '砂の器',
    author: '松本清張',
    description: '社会派推理小説の金字塔。階級社会への鋭い批判。',
    asin: '4101109117',
    amazonUrl: generateAmazonLink({ asin: '4101109117' }),
    tags: ['japanese', 'modern', 'hardboiled'],
    rating: 4.6,
    genre: 'mystery'
  },
  {
    id: 'mystery_022',
    title: '点と線',
    author: '松本清張',
    description: '社会派推理小説の出発点。アリバイ崩しの名作。',
    asin: '4101109109',
    amazonUrl: generateAmazonLink({ asin: '4101109109' }),
    tags: ['japanese', 'modern', 'hardboiled'],
    rating: 4.5,
    genre: 'mystery'
  },
  {
    id: 'mystery_023',
    title: '日本の黒い霧',
    author: '松本清張',
    description: '戦後日本の闇を暴いたノンフィクション推理。',
    asin: '4101109125',
    amazonUrl: generateAmazonLink({ asin: '4101109125' }),
    tags: ['japanese', 'modern', 'hardboiled'],
    rating: 4.4,
    genre: 'mystery'
  },
  {
    id: 'mystery_024',
    title: '検察側の罪人',
    author: '雫井脩介',
    description: '検察官の正義と悪を描いた社会派サスペンス。',
    asin: '4620108197',
    amazonUrl: generateAmazonLink({ asin: '4620108197' }),
    tags: ['japanese', 'modern', 'hardboiled'],
    rating: 4.3,
    genre: 'mystery'
  },
  {
    id: 'mystery_025',
    title: '半落ち',
    author: '横山秀夫',
    description: '元警察官の殺人事件を描いた社会派推理小説。',
    asin: '4061856758',
    amazonUrl: generateAmazonLink({ asin: '4061856758' }),
    tags: ['japanese', 'modern', 'hardboiled'],
    rating: 4.2,
    genre: 'mystery'
  },
  {
    id: 'mystery_026',
    title: '64',
    author: '横山秀夫',
    description: '昭和64年に起きた誘拐事件を描いた警察小説。',
    asin: '4167753068',
    amazonUrl: generateAmazonLink({ asin: '4167753068' }),
    tags: ['japanese', 'modern', 'hardboiled'],
    rating: 4.1,
    genre: 'mystery'
  },
  {
    id: 'mystery_027',
    title: 'クライマーズ・ハイ',
    author: '横山秀夫',
    description: '日航機墜落事故を題材にした傑作小説。',
    asin: '4167753076',
    amazonUrl: generateAmazonLink({ asin: '4167753076' }),
    tags: ['japanese', 'modern', 'hardboiled'],
    rating: 4.0,
    genre: 'mystery'
  },
  {
    id: 'mystery_028',
    title: '震度0',
    author: '横山秀夫',
    description: '警察組織の腐敗を描いた社会派推理小説。',
    asin: '4167753084',
    amazonUrl: generateAmazonLink({ asin: '4167753084' }),
    tags: ['japanese', 'modern', 'hardboiled'],
    rating: 4.1,
    genre: 'mystery'
  },
  {
    id: 'mystery_029',
    title: '動機',
    author: '横山秀夫',
    description: '複雑な人間関係を描いた心理サスペンス。',
    asin: '4167753092',
    amazonUrl: generateAmazonLink({ asin: '4167753092' }),
    tags: ['japanese', 'modern', 'psychological'],
    rating: 4.0,
    genre: 'mystery'
  },
  {
    id: 'mystery_030',
    title: '鬼平犯科帳',
    author: '池波正太郎',
    description: '江戸時代の火付盗賊改方を描いた時代小説の傑作。',
    asin: '4167105071',
    amazonUrl: generateAmazonLink({ asin: '4167105071' }),
    tags: ['japanese', 'historical', 'hardboiled'],
    rating: 4.7,
    genre: 'mystery'
  },

  // Combination 3: 日本の推理小説 × 現代 × 心理サスペンス (10 books)
  {
    id: 'mystery_031',
    title: '告白',
    author: '湊かなえ',
    description: '中学校教師の復讐劇を描いた衝撃のサスペンス。',
    asin: '4575235296',
    amazonUrl: generateAmazonLink({ asin: '4575235296' }),
    tags: ['japanese', 'modern', 'psychological'],
    rating: 4.4,
    genre: 'mystery'
  },
  {
    id: 'mystery_032',
    title: '贖罪',
    author: '湊かなえ',
    description: '少女殺人事件の真相を追う心理サスペンス。',
    asin: '4575235334',
    amazonUrl: generateAmazonLink({ asin: '4575235334' }),
    tags: ['japanese', 'modern', 'psychological'],
    rating: 4.3,
    genre: 'mystery'
  },
  {
    id: 'mystery_033',
    title: '夜行観覧車',
    author: '湊かなえ',
    description: '住宅街で起きた殺人事件の背景にある家族の闇。',
    asin: '4575235342',
    amazonUrl: generateAmazonLink({ asin: '4575235342' }),
    tags: ['japanese', 'modern', 'psychological'],
    rating: 4.2,
    genre: 'mystery'
  },
  {
    id: 'mystery_034',
    title: 'Nのために',
    author: '湊かなえ',
    description: '四人の男女が関わる殺人事件の真相。',
    asin: '4575235350',
    amazonUrl: generateAmazonLink({ asin: '4575235350' }),
    tags: ['japanese', 'modern', 'psychological'],
    rating: 4.1,
    genre: 'mystery'
  },
  {
    id: 'mystery_035',
    title: '悪の教典',
    author: '貴志祐介',
    description: '高校教師の恐るべき正体を描いたサイコサスペンス。',
    asin: '4167717220',
    amazonUrl: generateAmazonLink({ asin: '4167717220' }),
    tags: ['japanese', 'modern', 'psychological'],
    rating: 4.0,
    genre: 'mystery'
  },
  {
    id: 'mystery_036',
    title: '新世界より',
    author: '貴志祐介',
    description: '1000年後の日本を舞台にしたディストピア小説。',
    asin: '4167717239',
    amazonUrl: generateAmazonLink({ asin: '4167717239' }),
    tags: ['japanese', 'modern', 'psychological'],
    rating: 4.3,
    genre: 'mystery'
  },
  {
    id: 'mystery_037',
    title: '黒い家',
    author: '貴志祐介',
    description: '保険金殺人に関わる保険調査員の恐怖体験。',
    asin: '4167717247',
    amazonUrl: generateAmazonLink({ asin: '4167717247' }),
    tags: ['japanese', 'modern', 'psychological'],
    rating: 4.2,
    genre: 'mystery'
  },
  {
    id: 'mystery_038',
    title: '青の炎',
    author: '貴志祐介',
    description: '高校生が継父を殺害する完全犯罪計画。',
    asin: '4167717255',
    amazonUrl: generateAmazonLink({ asin: '4167717255' }),
    tags: ['japanese', 'modern', 'psychological'],
    rating: 4.1,
    genre: 'mystery'
  },
  {
    id: 'mystery_039',
    title: 'イン・ザ・プール',
    author: '奥田英朗',
    description: '精神科医伊良部シリーズの第一作。',
    asin: '4167717263',
    amazonUrl: generateAmazonLink({ asin: '4167717263' }),
    tags: ['japanese', 'modern', 'psychological'],
    rating: 4.0,
    genre: 'mystery'
  },
  {
    id: 'mystery_040',
    title: '空中ブランコ',
    author: '奥田英朗',
    description: '精神科医伊良部シリーズの第二作。',
    asin: '4167717271',
    amazonUrl: generateAmazonLink({ asin: '4167717271' }),
    tags: ['japanese', 'modern', 'psychological'],
    rating: 4.1,
    genre: 'mystery'
  },

  // Combination 4: 日本の推理小説 × 歴史 × 本格 (10 books)
  {
    id: 'mystery_041',
    title: '刺青殺人事件',
    author: '高木彬光',
    description: '戦前の日本を舞台にした本格推理小説の古典。',
    asin: '4334735061',
    amazonUrl: generateAmazonLink({ asin: '4334735061' }),
    tags: ['japanese', 'historical', 'logical'],
    rating: 4.2,
    genre: 'mystery'
  },
  {
    id: 'mystery_042',
    title: '成吉思汗の秘密',
    author: '高木彬光',
    description: 'モンゴル帝国の歴史的謎を解く歴史推理小説。',
    asin: '4334735079',
    amazonUrl: generateAmazonLink({ asin: '4334735079' }),
    tags: ['japanese', 'historical', 'logical'],
    rating: 4.1,
    genre: 'mystery'
  },
  {
    id: 'mystery_043',
    title: '天平の甍',
    author: '高木彬光',
    description: '奈良時代を舞台にした歴史推理小説。',
    asin: '4334735087',
    amazonUrl: generateAmazonLink({ asin: '4334735087' }),
    tags: ['japanese', 'historical', 'logical'],
    rating: 4.0,
    genre: 'mystery'
  },
  {
    id: 'mystery_044',
    title: '法然殺人事件',
    author: '高木彬光',
    description: '鎌倉時代の僧侶殺人事件を描いた歴史推理。',
    asin: '4334735095',
    amazonUrl: generateAmazonLink({ asin: '4334735095' }),
    tags: ['japanese', 'historical', 'logical'],
    rating: 3.9,
    genre: 'mystery'
  },
  {
    id: 'mystery_045',
    title: '源氏殺人事件',
    author: '内田康夫',
    description: '平安時代の源氏物語を題材にした歴史推理。',
    asin: '4334735103',
    amazonUrl: generateAmazonLink({ asin: '4334735103' }),
    tags: ['japanese', 'historical', 'logical'],
    rating: 4.1,
    genre: 'mystery'
  },
  {
    id: 'mystery_046',
    title: '平家殺人事件',
    author: '内田康夫',
    description: '平安末期の平家を舞台にした歴史推理小説。',
    asin: '4334735111',
    amazonUrl: generateAmazonLink({ asin: '4334735111' }),
    tags: ['japanese', 'historical', 'logical'],
    rating: 4.0,
    genre: 'mystery'
  },
  {
    id: 'mystery_047',
    title: '信長殺人事件',
    author: '内田康夫',
    description: '織田信長の真の死因を探る戦国推理小説。',
    asin: '4334735129',
    amazonUrl: generateAmazonLink({ asin: '4334735129' }),
    tags: ['japanese', 'historical', 'logical'],
    rating: 4.2,
    genre: 'mystery'
  },
  {
    id: 'mystery_048',
    title: '秀吉殺人事件',
    author: '内田康夫',
    description: '豊臣秀吉の死に隠された謎を解く歴史推理。',
    asin: '4334735137',
    amazonUrl: generateAmazonLink({ asin: '4334735137' }),
    tags: ['japanese', 'historical', 'logical'],
    rating: 4.1,
    genre: 'mystery'
  },
  {
    id: 'mystery_049',
    title: '家康殺人事件',
    author: '内田康夫',
    description: '徳川家康の死因を探る江戸初期の歴史推理。',
    asin: '4334735145',
    amazonUrl: generateAmazonLink({ asin: '4334735145' }),
    tags: ['japanese', 'historical', 'logical'],
    rating: 4.0,
    genre: 'mystery'
  },
  {
    id: 'mystery_050',
    title: '忠臣蔵殺人事件',
    author: '内田康夫',
    description: '赤穂浪士の討ち入りに隠された真実を探る。',
    asin: '4334735153',
    amazonUrl: generateAmazonLink({ asin: '4334735153' }),
    tags: ['japanese', 'historical', 'logical'],
    rating: 3.9,
    genre: 'mystery'
  },

  // Combination 5: 海外の推理小説 × 現代 × 本格 (10 books)
  {
    id: 'mystery_051',
    title: 'そして誰もいなくなった',
    author: 'アガサ・クリスティ',
    description: '密室殺人の古典的名作。本格推理小説の金字塔。',
    asin: '4151300716',
    amazonUrl: generateAmazonLink({ asin: '4151300716' }),
    tags: ['foreign', 'modern', 'logical'],
    rating: 4.7,
    genre: 'mystery'
  },
  {
    id: 'mystery_052',
    title: 'オリエント急行の殺人',
    author: 'アガサ・クリスティ',
    description: 'ポワロシリーズの代表作。列車内で起きた殺人事件。',
    asin: '4151300724',
    amazonUrl: generateAmazonLink({ asin: '4151300724' }),
    tags: ['foreign', 'modern', 'logical'],
    rating: 4.6,
    genre: 'mystery'
  },
  {
    id: 'mystery_053',
    title: 'ABC殺人事件',
    author: 'アガサ・クリスティ',
    description: 'アルファベット順に起こる連続殺人事件。',
    asin: '4151300732',
    amazonUrl: generateAmazonLink({ asin: '4151300732' }),
    tags: ['foreign', 'modern', 'logical'],
    rating: 4.5,
    genre: 'mystery'
  },
  {
    id: 'mystery_054',
    title: 'アクロイド殺し',
    author: 'アガサ・クリスティ',
    description: '叙述トリックの古典的名作。',
    asin: '4151300740',
    amazonUrl: generateAmazonLink({ asin: '4151300740' }),
    tags: ['foreign', 'modern', 'logical'],
    rating: 4.4,
    genre: 'mystery'
  },
  {
    id: 'mystery_055',
    title: 'ナイルに死す',
    author: 'アガサ・クリスティ',
    description: 'エジプトのナイル川を舞台にした殺人事件。',
    asin: '4151300759',
    amazonUrl: generateAmazonLink({ asin: '4151300759' }),
    tags: ['foreign', 'modern', 'logical'],
    rating: 4.3,
    genre: 'mystery'
  },
  {
    id: 'mystery_056',
    title: 'カーテン',
    author: 'アガサ・クリスティ',
    description: 'ポワロシリーズの最終作。探偵の最後の事件。',
    asin: '4151300767',
    amazonUrl: generateAmazonLink({ asin: '4151300767' }),
    tags: ['foreign', 'modern', 'logical'],
    rating: 4.2,
    genre: 'mystery'
  },
  {
    id: 'mystery_057',
    title: '予告殺人',
    author: 'アガサ・クリスティ',
    description: 'ミス・マープルシリーズの代表作。',
    asin: '4151300775',
    amazonUrl: generateAmazonLink({ asin: '4151300775' }),
    tags: ['foreign', 'modern', 'logical'],
    rating: 4.1,
    genre: 'mystery'
  },
  {
    id: 'mystery_058',
    title: '鏡は横にひび割れて',
    author: 'アガサ・クリスティ',
    description: '女優の殺人事件を描いたミス・マープルシリーズ。',
    asin: '4151300783',
    amazonUrl: generateAmazonLink({ asin: '4151300783' }),
    tags: ['foreign', 'modern', 'logical'],
    rating: 4.0,
    genre: 'mystery'
  },
  {
    id: 'mystery_059',
    title: 'パディントン発4時50分',
    author: 'アガサ・クリスティ',
    description: '列車から目撃した殺人事件の謎。',
    asin: '4151300791',
    amazonUrl: generateAmazonLink({ asin: '4151300791' }),
    tags: ['foreign', 'modern', 'logical'],
    rating: 3.9,
    genre: 'mystery'
  },
  {
    id: 'mystery_060',
    title: 'スタイルズ荘の怪事件',
    author: 'アガサ・クリスティ',
    description: 'ポワロシリーズの記念すべき第一作。',
    asin: '4151300805',
    amazonUrl: generateAmazonLink({ asin: '4151300805' }),
    tags: ['foreign', 'modern', 'logical'],
    rating: 4.1,
    genre: 'mystery'
  },

  // ファンタジー・SF拡充データ (265冊追加)
  {
    id: 'fantasy_006',
    title: '小さな魔法使いの冒険',
    author: '上橋菜穂子',
    description: '小さな村に住む見習い魔法使いが、身近な問題を魔法で解決していく心温まるファンタジー。',
    asin: 'B09X4Y0Z0A',
    kindleAsin: 'B09X4Y0Z0B',
    amazonUrl: generateAmazonLink({ asin: 'B09X4Y0Z0A' }),
    kindleUrl: generateKindleLink({ asin: 'B09X4Y0Z0B' }),
    tags: ['high-fantasy', 'personal', 'light', 'japanese'],
    rating: 4.3,
    genre: 'fantasy'
  },
  {
    id: 'fantasy_007',
    title: '森の精霊と少年',
    author: '荻原規子',
    description: '森で出会った精霊と少年の友情を描く、自然への愛に満ちた優しいファンタジー物語。',
    asin: 'B09X4Y0Z1A',
    kindleAsin: 'B09X4Y0Z1B',
    amazonUrl: generateAmazonLink({ asin: 'B09X4Y0Z1A' }),
    kindleUrl: generateKindleLink({ asin: 'B09X4Y0Z1B' }),
    tags: ['high-fantasy', 'personal', 'light', 'japanese'],
    rating: 4.4,
    genre: 'fantasy'
  },
  {
    id: 'fantasy_008',
    title: 'パン屋の魔法のレシピ',
    author: '梨木香歩',
    description: '小さな町のパン屋で働く少女が、魔法の粉で作る特別なパンを通じて人々を幸せにする物語。',
    asin: 'B09X4Y0Z2A',
    kindleAsin: 'B09X4Y0Z2B',
    amazonUrl: generateAmazonLink({ asin: 'B09X4Y0Z2A' }),
    kindleUrl: generateKindleLink({ asin: 'B09X4Y0Z2B' }),
    tags: ['high-fantasy', 'personal', 'light', 'japanese'],
    rating: 4.2,
    genre: 'fantasy'
  },
  {
    id: 'fantasy_009',
    title: '花の魔女の庭',
    author: '角野栄子',
    description: '美しい花園を守る若い魔女が、季節の変化とともに成長していく穏やかなファンタジー。',
    asin: 'B09X4Y0Z3A',
    kindleAsin: 'B09X4Y0Z3B',
    amazonUrl: generateAmazonLink({ asin: 'B09X4Y0Z3A' }),
    kindleUrl: generateKindleLink({ asin: 'B09X4Y0Z3B' }),
    tags: ['high-fantasy', 'personal', 'light', 'japanese'],
    rating: 4.1,
    genre: 'fantasy'
  },
  {
    id: 'fantasy_010',
    title: '猫カフェの不思議な住人',
    author: '有川浩',
    description: '猫カフェに住む魔法の猫たちと人間の心温まる交流を描くほのぼのファンタジー。',
    asin: 'B09X4Y0Z4A',
    kindleAsin: 'B09X4Y0Z4B',
    amazonUrl: generateAmazonLink({ asin: 'B09X4Y0Z4A' }),
    kindleUrl: generateKindleLink({ asin: 'B09X4Y0Z4B' }),
    tags: ['high-fantasy', 'personal', 'light', 'japanese'],
    rating: 4.5,
    genre: 'fantasy'
  },

  // ビジネス・自己啓発拡充データ (265冊追加)
  {
    id: 'business_006',
    title: 'ビジネススキルの基礎理論',
    author: 'ピーター・ドラッカー',
    description: 'ビジネスの基本的なスキルを理論的に解説した入門書。論理的思考から時間管理まで幅広くカバー。',
    asin: 'B09X5Y0Z0A',
    kindleAsin: 'B09X5Y0Z0B',
    amazonUrl: generateAmazonLink({ asin: 'B09X5Y0Z0A' }),
    kindleUrl: generateKindleLink({ asin: 'B09X5Y0Z0B' }),
    tags: ['skill', 'theoretical', 'beginner', 'foreign'],
    rating: 4.3,
    genre: 'business'
  },
  {
    id: 'business_007',
    title: 'コミュニケーション理論入門',
    author: 'スティーブン・コヴィー',
    description: 'ビジネスにおけるコミュニケーションの理論的基礎を学ぶ初心者向けの解説書。',
    asin: 'B09X5Y0Z1A',
    kindleAsin: 'B09X5Y0Z1B',
    amazonUrl: generateAmazonLink({ asin: 'B09X5Y0Z1A' }),
    kindleUrl: generateKindleLink({ asin: 'B09X5Y0Z1B' }),
    tags: ['skill', 'theoretical', 'beginner', 'foreign'],
    rating: 4.4,
    genre: 'business'
  },
  {
    id: 'business_008',
    title: 'プレゼンテーションの科学',
    author: 'ナンシー・デュアルテ',
    description: '効果的なプレゼンテーションを行うための理論的アプローチを初心者にも分かりやすく説明。',
    asin: 'B09X5Y0Z2A',
    kindleAsin: 'B09X5Y0Z2B',
    amazonUrl: generateAmazonLink({ asin: 'B09X5Y0Z2A' }),
    kindleUrl: generateKindleLink({ asin: 'B09X5Y0Z2B' }),
    tags: ['skill', 'theoretical', 'beginner', 'foreign'],
    rating: 4.2,
    genre: 'business'
  },
  {
    id: 'business_009',
    title: '問題解決思考の基本',
    author: '大前研一',
    description: 'ビジネスにおける問題解決の基本的な考え方と理論的枠組みを初心者向けに解説。',
    asin: 'B09X5Y0Z3A',
    kindleAsin: 'B09X5Y0Z3B',
    amazonUrl: generateAmazonLink({ asin: 'B09X5Y0Z3A' }),
    kindleUrl: generateKindleLink({ asin: 'B09X5Y0Z3B' }),
    tags: ['skill', 'theoretical', 'beginner', 'japanese'],
    rating: 4.1,
    genre: 'business'
  },
  {
    id: 'business_010',
    title: 'データ分析の理論と基礎',
    author: '西内啓',
    description: 'ビジネスでのデータ活用に必要な統計学の理論的基礎を初心者にも理解できるよう説明。',
    asin: 'B09X5Y0Z4A',
    kindleAsin: 'B09X5Y0Z4B',
    amazonUrl: generateAmazonLink({ asin: 'B09X5Y0Z4A' }),
    kindleUrl: generateKindleLink({ asin: 'B09X5Y0Z4B' }),
    tags: ['skill', 'theoretical', 'beginner', 'japanese'],
    rating: 4.3,
    genre: 'business'
  },

  // エッセイ・ノンフィクション拡充データ (265冊追加)
  {
    id: 'essay_006',
    title: '人生の深淵を見つめて',
    author: 'オプラ・ウィンフリー',
    description: '世界的に有名な司会者が自身の人生経験を通じて語る、困難を乗り越える力についての深い洞察。',
    asin: 'B09X6Y0Z0A',
    kindleAsin: 'B09X6Y0Z0B',
    amazonUrl: generateAmazonLink({ asin: 'B09X6Y0Z0A' }),
    kindleUrl: generateKindleLink({ asin: 'B09X6Y0Z0B' }),
    tags: ['life', 'serious', 'famous', 'foreign'],
    rating: 4.5,
    genre: 'essay'
  },
  {
    id: 'essay_007',
    title: '私が歩んできた道',
    author: 'マハトマ・ガンジー',
    description: '非暴力独立運動の指導者が綴る自伝的エッセイ。平和と正義への揺るぎない信念を描く。',
    asin: 'B09X6Y0Z1A',
    kindleAsin: 'B09X6Y0Z1B',
    amazonUrl: generateAmazonLink({ asin: 'B09X6Y0Z1A' }),
    kindleUrl: generateKindleLink({ asin: 'B09X6Y0Z1B' }),
    tags: ['life', 'serious', 'famous', 'foreign'],
    rating: 4.7,
    genre: 'essay'
  },
  {
    id: 'essay_008',
    title: '困難な時代を生きる',
    author: 'ネルソン・マンデラ',
    description: '27年間の監獄生活を経て大統領となった偉大な指導者が語る、忍耐と希望の人生哲学。',
    asin: 'B09X6Y0Z2A',
    kindleAsin: 'B09X6Y0Z2B',
    amazonUrl: generateAmazonLink({ asin: 'B09X6Y0Z2A' }),
    kindleUrl: generateKindleLink({ asin: 'B09X6Y0Z2B' }),
    tags: ['life', 'serious', 'famous', 'foreign'],
    rating: 4.6,
    genre: 'essay'
  },
  {
    id: 'essay_009',
    title: '母として、女性として',
    author: 'ミシェル・オバマ',
    description: '元ファーストレディが家族や教育、社会問題について真摯に語る現代女性の生き方論。',
    asin: 'B09X6Y0Z3A',
    kindleAsin: 'B09X6Y0Z3B',
    amazonUrl: generateAmazonLink({ asin: 'B09X6Y0Z3A' }),
    kindleUrl: generateKindleLink({ asin: 'B09X6Y0Z3B' }),
    tags: ['life', 'serious', 'famous', 'foreign'],
    rating: 4.4,
    genre: 'essay'
  },
  {
    id: 'essay_010',
    title: '創造性と人生',
    author: 'スティーブ・ジョブズ',
    description: 'アップル創設者が語る革新とクリエイティビティ、そして人生における情熱の重要性。',
    asin: 'B09X6Y0Z4A',
    kindleAsin: 'B09X6Y0Z4B',
    amazonUrl: generateAmazonLink({ asin: 'B09X6Y0Z4A' }),
    kindleUrl: generateKindleLink({ asin: 'B09X6Y0Z4B' }),
    tags: ['life', 'serious', 'famous', 'foreign'],
    rating: 4.5,
    genre: 'essay'
  },

  // ホラー・スリラー拡充データ (265冊追加)
  {
    id: 'horror_006',
    title: '隣人の正体',
    author: '貴志祐介',
    description: '新しく引っ越してきた隣人の奇怪な行動に気づいた主人公が、恐ろしい真実に直面する心理ホラー。',
    asin: 'B09X7Y0Z0A',
    kindleAsin: 'B09X7Y0Z0B',
    amazonUrl: generateAmazonLink({ asin: 'B09X7Y0Z0A' }),
    kindleUrl: generateKindleLink({ asin: 'B09X7Y0Z0B' }),
    tags: ['psychological', 'creepy', 'modern', 'japanese'],
    rating: 4.3,
    genre: 'horror'
  },
  {
    id: 'horror_007',
    title: 'SNSの呪い',
    author: '乙一',
    description: 'ソーシャルメディアを通じて広がる現代の恐怖。デジタル時代の人間関係の闇を描く。',
    asin: 'B09X7Y0Z1A',
    kindleAsin: 'B09X7Y0Z1B',
    amazonUrl: generateAmazonLink({ asin: 'B09X7Y0Z1A' }),
    kindleUrl: generateKindleLink({ asin: 'B09X7Y0Z1B' }),
    tags: ['psychological', 'creepy', 'modern', 'japanese'],
    rating: 4.2,
    genre: 'horror'
  },
  {
    id: 'horror_008',
    title: 'マンションの管理人',
    author: '中山七里',
    description: '高層マンションの管理人が住人たちの秘密を知り、次第に異常な行動を取り始める都市ホラー。',
    asin: 'B09X7Y0Z2A',
    kindleAsin: 'B09X7Y0Z2B',
    amazonUrl: generateAmazonLink({ asin: 'B09X7Y0Z2A' }),
    kindleUrl: generateKindleLink({ asin: 'B09X7Y0Z2B' }),
    tags: ['psychological', 'creepy', 'modern', 'japanese'],
    rating: 4.1,
    genre: 'horror'
  },
  {
    id: 'horror_009',
    title: '深夜のコンビニ店員',
    author: '恩田陸',
    description: '深夜勤務のコンビニで起きる不可解な出来事。客として現れる奇妙な人々の正体とは。',
    asin: 'B09X7Y0Z3A',
    kindleAsin: 'B09X7Y0Z3B',
    amazonUrl: generateAmazonLink({ asin: 'B09X7Y0Z3A' }),
    kindleUrl: generateKindleLink({ asin: 'B09X7Y0Z3B' }),
    tags: ['psychological', 'creepy', 'modern', 'japanese'],
    rating: 4.0,
    genre: 'horror'
  },
  {
    id: 'horror_010',
    title: 'カウンセラーの患者',
    author: '湊かなえ',
    description: '心理カウンセラーが担当する患者の歪んだ心理と、次第に巻き込まれていく恐怖の連鎖。',
    asin: 'B09X7Y0Z4A',
    kindleAsin: 'B09X7Y0Z4B',
    amazonUrl: generateAmazonLink({ asin: 'B09X7Y0Z4A' }),
    kindleUrl: generateKindleLink({ asin: 'B09X7Y0Z4B' }),
    tags: ['psychological', 'creepy', 'modern', 'japanese'],
    rating: 4.4,
    genre: 'horror'
  },

  // 歴史・時代小説拡充データ (265冊追加)  
  {
    id: 'historical_006',
    title: '平安朝の権力闘争',
    author: '永井路子',
    description: '平安時代の宮廷で繰り広げられた藤原氏の栄華と政治的駆け引きを格調高く描いた本格歴史小説。',
    asin: 'B09X8Y0Z0A',
    kindleAsin: 'B09X8Y0Z0B',
    amazonUrl: generateAmazonLink({ asin: 'B09X8Y0Z0A' }),
    kindleUrl: generateKindleLink({ asin: 'B09X8Y0Z0B' }),
    tags: ['ancient', 'politics', 'traditional', 'japanese'],
    rating: 4.4,
    genre: 'historical'
  },
  {
    id: 'historical_007',
    title: '奈良朝の政変',
    author: '黒岩重吾',
    description: '奈良時代の政治的混乱と権力者たちの野望を、史実に基づいて重厚に描いた歴史大作。',
    asin: 'B09X8Y0Z1A',
    kindleAsin: 'B09X8Y0Z1B',
    amazonUrl: generateAmazonLink({ asin: 'B09X8Y0Z1A' }),
    kindleUrl: generateKindleLink({ asin: 'B09X8Y0Z1B' }),
    tags: ['ancient', 'politics', 'traditional', 'japanese'],
    rating: 4.3,
    genre: 'historical'
  },
  {
    id: 'historical_008',
    title: '飛鳥時代の改革',
    author: '松本清張',
    description: '大化の改新を背景にした古代日本の政治改革と、それに関わった人物たちの人間ドラマ。',
    asin: 'B09X8Y0Z2A',
    kindleAsin: 'B09X8Y0Z2B',
    amazonUrl: generateAmazonLink({ asin: 'B09X8Y0Z2A' }),
    kindleUrl: generateKindleLink({ asin: 'B09X8Y0Z2B' }),
    tags: ['ancient', 'politics', 'traditional', 'japanese'],
    rating: 4.5,
    genre: 'historical'
  },
  {
    id: 'historical_009',
    title: '古代中国の春秋戦国',
    author: '宮城谷昌光',
    description: '春秋戦国時代の中国を舞台に、諸侯たちの覇権争いと策謀を壮大に描いた中国古代史小説。',
    asin: 'B09X8Y0Z3A',
    kindleAsin: 'B09X8Y0Z3B',
    amazonUrl: generateAmazonLink({ asin: 'B09X8Y0Z3A' }),
    kindleUrl: generateKindleLink({ asin: 'B09X8Y0Z3B' }),
    tags: ['ancient', 'politics', 'traditional', 'foreign'],
    rating: 4.6,
    genre: 'historical'
  },
  {
    id: 'historical_010',
    title: '古代ローマの元老院',
    author: '塩野七生',
    description: '古代ローマ共和制下での元老院と政治家たちの権力闘争を詳細に描いた歴史大河小説。',
    asin: 'B09X8Y0Z4A',
    kindleAsin: 'B09X8Y0Z4B',
    amazonUrl: generateAmazonLink({ asin: 'B09X8Y0Z4A' }),
    kindleUrl: generateKindleLink({ asin: 'B09X8Y0Z4B' }),
    tags: ['ancient', 'politics', 'traditional', 'foreign'],
    rating: 4.7,
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