import React, { useState } from 'react';

const GraduationAlbumSlides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Album content structure based on the provided image
  const albumContent = [
    {
      leftPage: {
        pageNumber: 1,
        content: "個人ページ",
        description: "4人/1p",
        details: "ここに個人ページの内容が入ります。クラスの思い出や個人の写真などが掲載されます。"
      },
      rightPage: {
        pageNumber: 2,
        content: "個人ページ",
        description: "4人/1p",
        details: "個人の写真や寄せ書き、思い出のエピソードなどが掲載されています。"
      }
    },
    {
      leftPage: {
        pageNumber: 3,
        content: "個人ページ",
        description: "4人/1p",
        details: "クラスメートの写真と思い出のメッセージが記載されています。"
      },
      rightPage: {
        pageNumber: 4,
        content: "個人ページ",
        description: "4人/1p",
        details: "友達との思い出の写真や楽しかった時間の記録が掲載されています。"
      }
    },
    {
      leftPage: {
        pageNumber: 5,
        content: "個人ページ・担任の先生",
        description: "4人/1p・先生",
        details: "最後の個人ページと担任の先生からのメッセージが掲載されています。"
      },
      rightPage: {
        pageNumber: 6,
        content: "その他の先生ページ",
        description: "先生方からのメッセージ",
        details: "科目担当の先生方からの卒業メッセージが掲載されています。"
      }
    },
    {
      leftPage: {
        pageNumber: 7,
        content: "その他の先生ページ",
        description: "先生方からのメッセージ",
        details: "学校生活でお世話になった先生方からの思い出や激励の言葉が記載されています。"
      },
      rightPage: {
        pageNumber: 8,
        content: "日常の生活",
        description: "学校での日常",
        details: "教室での授業風景や休み時間の様子など、日常の学校生活の写真が掲載されています。"
      }
    },
    {
      leftPage: {
        pageNumber: 9,
        content: "日常の生活",
        description: "学校での日常",
        details: "給食の時間や清掃活動、朝の会など学校生活の様々な場面が記録されています。"
      },
      rightPage: {
        pageNumber: 10,
        content: "日常の生活",
        description: "学校での日常",
        details: "放課後の部活動や委員会活動、図書室での時間など多様な学校生活の風景が掲載されています。"
      }
    },
    {
      leftPage: {
        pageNumber: 11,
        content: "日常の生活",
        description: "学校での日常",
        details: "特別授業や校外学習など、普段とは違う学校生活の思い出が記録されています。"
      },
      rightPage: {
        pageNumber: 12,
        content: "日常の生活",
        description: "学校での日常",
        details: "友達との交流や班活動など、日々の学校生活で育まれた絆の瞬間が写真で紹介されています。"
      }
    },
    {
      leftPage: {
        pageNumber: 13,
        content: "プール",
        description: "水泳授業・水泳大会",
        details: "夏のプール授業や水泳大会の様子が写真と共に掲載されています。水しぶきと笑顔が輝く瞬間です。"
      },
      rightPage: {
        pageNumber: 14,
        content: "プール",
        description: "水泳授業・水泳大会",
        details: "水泳記録会や着衣泳などの特別授業の思い出が記録されています。チームでの応援や成長の記録です。"
      }
    },
    {
      leftPage: {
        pageNumber: 15,
        content: "夏祭り",
        description: "学校夏祭りイベント",
        details: "学校で開催された夏祭りの様子。出店や盆踊り、花火など楽しい夏の思い出が詰まっています。"
      },
      rightPage: {
        pageNumber: 16,
        content: "運動会",
        description: "体育祭の記録",
        details: "運動会での徒競走や団体競技の様子。クラス一丸となって挑んだ競技の熱気が伝わる写真が掲載されています。"
      }
    },
    {
      leftPage: {
        pageNumber: 17,
        content: "運動会",
        description: "体育祭の記録",
        details: "応援合戦や表彰式など、運動会での感動の瞬間が写真と共に記録されています。みんなで作り上げた貴重な思い出です。"
      },
      rightPage: {
        pageNumber: 18,
        content: "運動会",
        description: "体育祭の記録",
        details: "リレーや騎馬戦など白熱した競技の様子。汗と涙と笑顔が輝く、最高の運動会の思い出が詰まっています。"
      }
    },
    {
      leftPage: {
        pageNumber: 19,
        content: "お泊まり保育",
        description: "宿泊学習の記録",
        details: "初めての宿泊学習での活動の様子。仲間との共同生活で深まった絆が写真から伝わってきます。"
      },
      rightPage: {
        pageNumber: 20,
        content: "お泊まり保育",
        description: "宿泊学習の記録",
        details: "キャンプファイヤーや肝試し、みんなで作った料理など、特別な体験の記録が写真と共に掲載されています。"
      }
    },
    {
      leftPage: {
        pageNumber: 21,
        content: "ハロウィン",
        description: "ハロウィンイベント",
        details: "学校で行われたハロウィンパーティーの様子。仮装や特別イベントでの楽しい思い出が写真で紹介されています。"
      },
      rightPage: {
        pageNumber: 22,
        content: "クリスマス",
        description: "クリスマス会",
        details: "クラスで行ったクリスマス会の様子。プレゼント交換や特別イベントなど、温かい思い出が詰まっています。"
      }
    },
    {
      leftPage: {
        pageNumber: 23,
        content: "節分",
        description: "節分行事",
        details: "節分の豆まきや恵方巻づくりなど、日本の伝統行事を体験した思い出が写真と共に掲載されています。"
      },
      rightPage: {
        pageNumber: 24,
        content: "節分",
        description: "節分行事",
        details: "鬼のお面づくりや節分にちなんだ特別授業など、節分行事を通じた学びの様子が記録されています。"
      }
    },
    {
      leftPage: {
        pageNumber: 25,
        content: "成長を祝う会",
        description: "進級・成長の記録",
        details: "一年間の成長を振り返り、お祝いする会の様子。感謝の気持ちや将来の夢を発表する姿が写真で紹介されています。"
      },
      rightPage: {
        pageNumber: 26,
        content: "成長を祝う会",
        description: "進級・成長の記録",
        details: "保護者や地域の方々も参加した成長を祝う会。温かい拍手に包まれた特別な時間の記録です。"
      }
    },
    {
      leftPage: {
        pageNumber: 27,
        content: "卒園式",
        description: "卒業セレモニー",
        details: "厳かな雰囲気の中で行われた卒園式の様子。証書授与や送辞・答辞など、感動の瞬間が写真で記録されています。"
      },
      rightPage: {
        pageNumber: 28,
        content: "卒園式",
        description: "卒業セレモニー",
        details: "在校生からの送別の言葉や最後の記念撮影など、新たな旅立ちの日の思い出が詰まっています。"
      }
    }
  ];

  const totalSlides = albumContent.length;

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  return (
    <div className="flex flex-col items-center w-full h-full bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4 text-indigo-800">卒業アルバム</h1>
      
      {/* Album spread */}
      <div className="w-full max-w-4xl flex shadow-xl mb-6 bg-white rounded-lg overflow-hidden">
        {/* Left page (odd page) */}
        <div className="w-1/2 p-6 border-r border-gray-200 bg-gradient-to-br from-white to-gray-50 flex flex-col">
          <div className="text-right text-gray-500 text-sm mb-1">Page {albumContent[currentSlide].leftPage.pageNumber}</div>
          <div className="h-12 bg-indigo-700 text-white font-bold flex items-center justify-center rounded-t-lg">
            {albumContent[currentSlide].leftPage.content}
          </div>
          <div className="text-center text-sm text-gray-600 bg-indigo-100 py-1 mb-4">
            {albumContent[currentSlide].leftPage.description}
          </div>
          <div className="flex-grow bg-gray-50 p-4 rounded-b-lg border border-gray-200">
            <div className="grid grid-cols-3 gap-2 h-full">
              {[...Array(15)].map((_, i) => (
                <div key={i} className="bg-gray-200 rounded-lg flex items-center justify-center p-1 text-xs text-gray-500 font-medium" style={{minHeight: "40px"}}>
                  dummy image
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Right page (even page) */}
        <div className="w-1/2 p-6 bg-gradient-to-bl from-white to-gray-50 flex flex-col">
          <div className="text-right text-gray-500 text-sm mb-1">Page {albumContent[currentSlide].rightPage.pageNumber}</div>
          <div className="h-12 bg-indigo-700 text-white font-bold flex items-center justify-center rounded-t-lg">
            {albumContent[currentSlide].rightPage.content}
          </div>
          <div className="text-center text-sm text-gray-600 bg-indigo-100 py-1 mb-4">
            {albumContent[currentSlide].rightPage.description}
          </div>
          <div className="flex-grow bg-gray-50 p-4 rounded-b-lg border border-gray-200">
            <div className="grid grid-cols-3 gap-2 h-full">
              {[...Array(15)].map((_, i) => (
                <div key={i} className="bg-gray-200 rounded-lg flex items-center justify-center p-1 text-xs text-gray-500 font-medium" style={{minHeight: "40px"}}>
                  dummy image
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation controls */}
      <div className="flex items-center justify-center space-x-4 w-full">
        <button 
          onClick={goToPrevSlide}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition-colors"
        >
          前のページ
        </button>
        <div className="text-indigo-800 font-medium">
          {currentSlide + 1} / {totalSlides}
        </div>
        <button 
          onClick={goToNextSlide}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition-colors"
        >
          次のページ
        </button>
      </div>
    </div>
  );
};

export default GraduationAlbumSlides;

// ファイルの最後に以下を追加
ReactDOM.createRoot(document.getElementById('root')).render(<GraduationAlbumSlides />);
