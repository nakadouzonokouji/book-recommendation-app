'use client';

import { useEffect, useState } from 'react';

export default function DebugPage() {
  const [amazonData, setAmazonData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('🔍 デバッグ: Amazon JSONファイル取得開始');
        const response = await fetch('/tools/book-recommendation/amazon-data.json');
        console.log('📡 レスポンス状況:', response.status, response.statusText);
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();
        console.log('📊 JSONデータ:', data);
        console.log('📋 利用可能なASIN:', Object.keys(data));
        
        setAmazonData(data);
      } catch (err) {
        console.error('❌ エラー:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">🔍 Amazon API デバッグ</h1>
          <p>データ取得中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">🔍 Amazon API デバッグ</h1>
        
        {error ? (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            <strong>エラー:</strong> {error}
          </div>
        ) : null}

        {amazonData ? (
          <div className="space-y-4">
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
              <strong>✅ JSON取得成功!</strong> {Object.keys(amazonData).length}件のデータ
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-2">📋 利用可能なASIN一覧</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {Object.keys(amazonData).map(asin => (
                  <div key={asin} className="text-sm bg-gray-100 p-2 rounded">
                    {asin}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-2">📊 サンプルデータ（最初の3件）</h2>
              <pre className="text-xs bg-gray-100 p-4 rounded overflow-x-auto">
                {JSON.stringify(
                  Object.fromEntries(Object.entries(amazonData).slice(0, 3)), 
                  null, 
                  2
                )}
              </pre>
            </div>
          </div>
        ) : (
          <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
            データが取得できませんでした
          </div>
        )}
      </div>
    </div>
  );
}