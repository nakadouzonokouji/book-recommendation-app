import { Question } from '../types';

export const questionsByGenre: Record<string, Question[]> = {
  romance: [
    {
      id: 'romance_setting',
      text: 'どの時代設定がお好みですか？',
      options: [
        { id: 'modern', text: '現代', tags: ['modern', 'contemporary'] },
        { id: 'historical', text: '歴史・時代もの', tags: ['historical', 'period'] },
        { id: 'future', text: '未来・SF', tags: ['future', 'sci-fi'] }
      ]
    },
    {
      id: 'romance_tone',
      text: 'どんな雰囲気の恋愛がお好みですか？',
      options: [
        { id: 'sweet', text: '甘くて幸せな恋愛', tags: ['sweet', 'happy', 'fluffy'] },
        { id: 'bittersweet', text: '切なくて深い恋愛', tags: ['bittersweet', 'emotional', 'deep'] },
        { id: 'passionate', text: '情熱的でドラマチック', tags: ['passionate', 'dramatic', 'intense'] }
      ]
    },
    {
      id: 'romance_origin',
      text: '作品の出身地は？',
      options: [
        { id: 'japanese', text: '日本', tags: ['japanese', 'domestic'] },
        { id: 'western', text: '海外', tags: ['foreign', 'translated'] },
        { id: 'any', text: 'どちらでも', tags: ['any-origin'] }
      ]
    }
  ],

  adventure: [
    {
      id: 'adventure_setting',
      text: 'どんな世界での冒険がお好みですか？',
      options: [
        { id: 'fantasy', text: 'ファンタジー世界', tags: ['fantasy', 'magic', 'mythical'] },
        { id: 'real_world', text: '現実世界', tags: ['realistic', 'modern', 'contemporary'] },
        { id: 'historical', text: '歴史上の世界', tags: ['historical', 'period', 'classic'] }
      ]
    },
    {
      id: 'adventure_style',
      text: '冒険のスタイルは？',
      options: [
        { id: 'solo', text: '一人旅・単独行動', tags: ['solo', 'individual', 'lone-wolf'] },
        { id: 'team', text: '仲間との冒険', tags: ['team', 'friendship', 'group'] },
        { id: 'mentor', text: '師弟関係・成長物語', tags: ['mentor', 'growth', 'coming-of-age'] }
      ]
    },
    {
      id: 'adventure_length',
      text: '読み応えは？',
      options: [
        { id: 'short', text: '短編・サクッと読める', tags: ['short', 'quick-read', 'light'] },
        { id: 'medium', text: '中編・程よいボリューム', tags: ['medium', 'moderate'] },
        { id: 'long', text: '長編・じっくり楽しめる', tags: ['long', 'epic', 'detailed'] }
      ]
    }
  ],

  mystery: [
    {
      id: 'mystery_type',
      text: 'どんなミステリーがお好みですか？',
      options: [
        { id: 'classic', text: '本格推理・パズル型', tags: ['classic', 'puzzle', 'logic'] },
        { id: 'hardboiled', text: 'ハードボイルド・アクション', tags: ['hardboiled', 'action', 'noir'] },
        { id: 'cozy', text: 'コージー・日常系', tags: ['cozy', 'everyday', 'light-mystery'] }
      ]
    },
    {
      id: 'mystery_setting',
      text: '舞台設定は？',
      options: [
        { id: 'modern', text: '現代', tags: ['modern', 'contemporary'] },
        { id: 'classic', text: '古典・過去', tags: ['classic', 'period', 'vintage'] },
        { id: 'any', text: 'どちらでも', tags: ['any-period'] }
      ]
    },
    {
      id: 'mystery_format',
      text: '作品形式は？',
      options: [
        { id: 'series', text: 'シリーズもの', tags: ['series', 'recurring-character'] },
        { id: 'standalone', text: '単発作品', tags: ['standalone', 'one-shot'] },
        { id: 'any', text: 'どちらでも', tags: ['any-format'] }
      ]
    }
  ],

  fantasy: [
    {
      id: 'fantasy_type',
      text: 'どちらの世界がお好みですか？',
      options: [
        { id: 'high_fantasy', text: 'ハイファンタジー（魔法世界）', tags: ['high-fantasy', 'magic', 'medieval'] },
        { id: 'sci_fi', text: 'SF・宇宙・未来', tags: ['sci-fi', 'space', 'future', 'technology'] },
        { id: 'urban_fantasy', text: 'アーバンファンタジー（現代+魔法）', tags: ['urban-fantasy', 'modern-magic', 'contemporary'] }
      ]
    },
    {
      id: 'fantasy_scope',
      text: 'スケールは？',
      options: [
        { id: 'epic', text: '壮大な世界・戦争・運命', tags: ['epic', 'world-saving', 'grand-scale'] },
        { id: 'personal', text: '個人的な成長・冒険', tags: ['personal', 'coming-of-age', 'individual'] },
        { id: 'slice_of_life', text: '日常系・ほのぼの', tags: ['slice-of-life', 'peaceful', 'everyday'] }
      ]
    },
    {
      id: 'fantasy_tone',
      text: '雰囲気は？',
      options: [
        { id: 'dark', text: 'ダーク・シリアス', tags: ['dark', 'serious', 'gritty'] },
        { id: 'light', text: '明るい・コメディ', tags: ['light', 'comedy', 'humorous'] },
        { id: 'balanced', text: 'バランスよく', tags: ['balanced', 'mixed-tone'] }
      ]
    }
  ],

  business: [
    {
      id: 'business_focus',
      text: '何を重視したいですか？',
      options: [
        { id: 'skill', text: 'スキルアップ・技術向上', tags: ['skill', 'technical', 'professional'] },
        { id: 'mindset', text: 'マインドセット・考え方', tags: ['mindset', 'philosophy', 'thinking'] },
        { id: 'career', text: 'キャリア・成功法則', tags: ['career', 'success', 'achievement'] }
      ]
    },
    {
      id: 'business_style',
      text: '読みやすさは？',
      options: [
        { id: 'practical', text: '実践的・具体的', tags: ['practical', 'actionable', 'concrete'] },
        { id: 'theoretical', text: '理論的・学術的', tags: ['theoretical', 'academic', 'research-based'] },
        { id: 'story', text: 'ストーリー形式・読みやすい', tags: ['narrative', 'story-based', 'accessible'] }
      ]
    },
    {
      id: 'business_level',
      text: 'レベルは？',
      options: [
        { id: 'beginner', text: '初心者向け・基礎から', tags: ['beginner', 'basic', 'introductory'] },
        { id: 'intermediate', text: '中級者向け・応用', tags: ['intermediate', 'advanced', 'applied'] },
        { id: 'expert', text: '上級者向け・専門的', tags: ['expert', 'specialized', 'professional'] }
      ]
    }
  ],

  essay: [
    {
      id: 'essay_type',
      text: 'どんな内容がお好みですか？',
      options: [
        { id: 'life', text: '人生・生き方', tags: ['life', 'philosophy', 'wisdom'] },
        { id: 'culture', text: '文化・社会・時事', tags: ['culture', 'society', 'current-affairs'] },
        { id: 'personal', text: '個人的体験・エッセイ', tags: ['personal', 'memoir', 'experience'] }
      ]
    },
    {
      id: 'essay_tone',
      text: '文体・雰囲気は？',
      options: [
        { id: 'serious', text: '真面目・考えさせられる', tags: ['serious', 'thought-provoking', 'deep'] },
        { id: 'light', text: '軽やか・ユーモア', tags: ['light', 'humorous', 'witty'] },
        { id: 'emotional', text: '感動的・心に響く', tags: ['emotional', 'touching', 'inspiring'] }
      ]
    },
    {
      id: 'essay_author',
      text: '著者のタイプは？',
      options: [
        { id: 'famous', text: '有名人・著名人', tags: ['celebrity', 'famous', 'well-known'] },
        { id: 'writer', text: '作家・文筆家', tags: ['writer', 'literary', 'professional'] },
        { id: 'any', text: 'どちらでも', tags: ['any-author'] }
      ]
    }
  ],

  horror: [
    {
      id: 'horror_type',
      text: 'どんな怖さがお好みですか？',
      options: [
        { id: 'psychological', text: '心理的恐怖・じわじわ', tags: ['psychological', 'creepy', 'unsettling'] },
        { id: 'supernatural', text: '超自然・オカルト', tags: ['supernatural', 'occult', 'paranormal'] },
        { id: 'gore', text: 'ゴア・スプラッター', tags: ['gore', 'splatter', 'violent'] }
      ]
    },
    {
      id: 'horror_setting',
      text: '舞台は？',
      options: [
        { id: 'modern', text: '現代', tags: ['modern', 'contemporary'] },
        { id: 'classic', text: '古典・過去', tags: ['classic', 'period', 'gothic'] },
        { id: 'future', text: '未来・SF', tags: ['future', 'sci-fi', 'dystopian'] }
      ]
    },
    {
      id: 'horror_intensity',
      text: '恐怖のレベルは？',
      options: [
        { id: 'mild', text: 'マイルド・ちょっと怖い', tags: ['mild', 'light-horror', 'suspense'] },
        { id: 'moderate', text: '程よく怖い', tags: ['moderate', 'standard-horror'] },
        { id: 'intense', text: '本格的に怖い', tags: ['intense', 'terrifying', 'extreme'] }
      ]
    }
  ],

  historical: [
    {
      id: 'historical_period',
      text: 'どの時代がお好みですか？',
      options: [
        { id: 'ancient', text: '古代・平安・鎌倉', tags: ['ancient', 'heian', 'kamakura'] },
        { id: 'medieval', text: '戦国・江戸', tags: ['sengoku', 'edo', 'samurai'] },
        { id: 'modern', text: '明治・大正・昭和', tags: ['meiji', 'taisho', 'showa', 'modern-history'] }
      ]
    },
    {
      id: 'historical_focus',
      text: '何に焦点を当てたいですか？',
      options: [
        { id: 'politics', text: '政治・戦争・権力', tags: ['politics', 'war', 'power'] },
        { id: 'people', text: '人々の暮らし・日常', tags: ['daily-life', 'common-people', 'society'] },
        { id: 'culture', text: '文化・芸術・思想', tags: ['culture', 'art', 'philosophy'] }
      ]
    },
    {
      id: 'historical_style',
      text: '文体・読みやすさは？',
      options: [
        { id: 'classical', text: '格調高い・古典的', tags: ['classical', 'formal', 'traditional'] },
        { id: 'modern', text: '現代的・読みやすい', tags: ['modern-style', 'accessible', 'contemporary'] },
        { id: 'entertaining', text: 'エンタメ・面白さ重視', tags: ['entertaining', 'popular', 'engaging'] }
      ]
    }
  ]
};