'use client';

import { useEffect, useState } from 'react';
import { useAmazonProduct } from '../hooks/useAmazonProduct';

export default function TestPage() {
  const [testResults, setTestResults] = useState<any[]>([]);
  
  // テスト用のASIN
  const testAsins = [
    '4046017708', // 君の名は。
    '4163913564', // きみの瞳が問いかけている
    '4167110075', // 白夜行
    '4834000249', // 魔女の宅急便
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">🧪 Amazon API テスト</h1>
        
        <div className="space-y-6">
          {testAsins.map(asin => (
            <TestComponent key={asin} asin={asin} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TestComponent({ asin }: { asin: string }) {
  const { data, loading, error } = useAmazonProduct(asin);
  
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-bold text-lg mb-2">ASIN: {asin}</h3>
      
      {loading && (
        <div className="text-blue-600">📡 データ取得中...</div>
      )}
      
      {error && (
        <div className="text-red-600 mb-2">❌ エラー: {error}</div>
      )}
      
      {data && (
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <strong>タイトル:</strong> {data.title}
            </div>
            <div>
              <strong>価格:</strong> {data.price}
            </div>
            <div>
              <strong>在庫:</strong> {data.availability}
            </div>
            <div>
              <strong>評価:</strong> {data.rating ? `★${data.rating}` : 'なし'}
            </div>
          </div>
          
          {data.imageUrl && (
            <div className="mt-4">
              <strong>画像:</strong>
              <br />
              <img 
                src={data.imageUrl} 
                alt={data.title}
                className="w-32 h-auto mt-2 border"
                onError={(e) => {
                  console.error('画像読み込みエラー:', data.imageUrl);
                  e.currentTarget.style.display = 'none';
                }}
                onLoad={() => {
                  console.log('画像読み込み成功:', data.imageUrl);
                }}
              />
            </div>
          )}
          
          <div className="mt-4 p-2 bg-gray-100 rounded text-sm">
            <strong>デバッグ情報:</strong>
            <pre className="mt-1">{JSON.stringify(data, null, 2)}</pre>
          </div>
        </div>
      )}
    </div>
  );
}