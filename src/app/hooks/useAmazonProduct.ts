'use client';

import { useState, useEffect } from 'react';

interface AmazonProductData {
  asin: string;
  title: string;
  price: string;
  availability: string;
  imageUrl: string;
  rating: number | null;
  reviewCount: number | null;
  lastUpdated: string;
  isRealData?: boolean;
  isBasicData?: boolean;
  error?: string;
}

export const useAmazonProduct = (asin: string) => {
  const [data, setData] = useState<AmazonProductData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!asin) return;

    const fetchProductData = async () => {
      setLoading(true);
      setError(null);

      try {
        // ビルド時に生成されたJSONファイルから情報を取得
        console.log(`🔍 Amazon情報取得開始: ASIN=${asin}`);
        const response = await fetch('/tools/book-recommendation/amazon-data.json');
        
        console.log(`📡 JSONファイル取得: status=${response.status}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const allData = await response.json();
        console.log('📊 JSONデータ取得成功、キー数:', Object.keys(allData).length);
        
        const productData = allData[asin];
        console.log(`🎯 ASIN=${asin}のデータ:`, productData ? '✅見つかった' : '❌見つからない');
        
        if (productData) {
          setData(productData);
          console.log('✅ Amazon情報設定完了:', productData);
        } else {
          throw new Error('Product data not found');
        }
      } catch (err) {
        console.error('Failed to fetch Amazon product data:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
        
        // エラー時はフォールバックデータを設定
        setData({
          asin: asin,
          title: '商品情報取得エラー',
          price: 'Amazon で確認',
          availability: 'Amazon で確認',
          imageUrl: '/placeholder-book.svg',
          rating: null,
          reviewCount: null,
          lastUpdated: new Date().toISOString(),
          isBasicData: true,
          error: 'データ読み込みエラー'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [asin]);

  return { data, loading, error };
};