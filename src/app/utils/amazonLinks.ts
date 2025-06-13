// Amazon アフィリエイトリンク生成ユーティリティ

const ASSOCIATE_TAG = process.env.NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG || 'asdfghj12-22';

export interface AmazonLinkOptions {
  asin: string;
  region?: 'jp' | 'com' | 'co.uk' | 'de' | 'fr' | 'it' | 'es';
  tag?: string;
}

export const generateAmazonLink = ({ asin, region = 'jp', tag }: AmazonLinkOptions): string => {
  const associateTag = tag || ASSOCIATE_TAG;
  const baseUrl = getAmazonBaseUrl(region);
  
  return `${baseUrl}/dp/${asin}?tag=${associateTag}`;
};

export const generateKindleLink = ({ asin, region = 'jp', tag }: AmazonLinkOptions): string => {
  const associateTag = tag || ASSOCIATE_TAG;
  const baseUrl = getAmazonBaseUrl(region);
  
  return `${baseUrl}/dp/${asin}?tag=${associateTag}&linkCode=ogi&th=1&psc=1`;
};

export const generateSearchLink = (query: string, region: 'jp' | 'com' = 'jp', tag?: string): string => {
  const associateTag = tag || ASSOCIATE_TAG;
  const baseUrl = getAmazonBaseUrl(region);
  
  const encodedQuery = encodeURIComponent(query);
  return `${baseUrl}/s?k=${encodedQuery}&tag=${associateTag}&linkCode=ogi`;
};

const getAmazonBaseUrl = (region: string): string => {
  const urls = {
    'jp': 'https://www.amazon.co.jp',
    'com': 'https://www.amazon.com',
    'co.uk': 'https://www.amazon.co.uk',
    'de': 'https://www.amazon.de',
    'fr': 'https://www.amazon.fr',
    'it': 'https://www.amazon.it',
    'es': 'https://www.amazon.es'
  };
  
  return urls[region as keyof typeof urls] || urls.jp;
};

// ASIN抽出ユーティリティ
export const extractASIN = (amazonUrl: string): string | null => {
  // https://www.amazon.co.jp/dp/ASIN or https://www.amazon.co.jp/gp/product/ASIN
  const match = amazonUrl.match(/(?:dp|gp\/product)\/([A-Z0-9]{10})/);
  return match ? match[1] : null;
};

// 既存のURLをアフィリエイトリンクに変換
export const addAffiliateTag = (url: string, tag?: string): string => {
  const asin = extractASIN(url);
  if (!asin) return url;
  
  const region = url.includes('amazon.com') ? 'com' : 'jp';
  return generateAmazonLink({ asin, region, tag });
};