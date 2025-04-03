'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface OpusItem {
  id: number
  title: string
  description: string
  imageUrl: string
  category: string
}

export default function OpusPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const opusData: OpusItem[] = [
    {
      id: 1,
      title: "卡牌游戏",
      description: "玩家可以在游戏中收集卡牌、升级角色、与其他玩家战斗。",
      imageUrl: "https://th.bing.com/th/id/R.52f5b9a639dc7e74b4cd53debfd4399d?rik=UfbFEnp9vwKPlQ&riu=http%3a%2f%2fwww.kuaipng.com%2fUploads%2fwater%2ftext%2f2019%2f02-12%2fwater_61235_698_1019.65_.png&ehk=iIcaD2%2fr5%2bBzMqUqMFN6GUXUwkPRmwNIt3RnVSqDf9Q%3d&risl=&pid=ImgRaw&r=0",
      category: "项目"
    },
    // 可以添加更多作品
  ]

  const categories = [
    { id: 'all', name: useTranslations()('所有') },
    { id: '1-10', name: useTranslations()('项目'), range: [1, 10] },
    { id: '11-20', name: useTranslations()('得奖'), range: [11, 20] },
  ]

  const filteredOpus = opusData
    .filter(item => 
      selectedCategory === 'all' || 
      (selectedCategory === '1-10' && item.id >= 1 && item.id <= 10) ||
      (selectedCategory === '11-20' && item.id >= 11 && item.id <= 20)
    )
    .filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    )

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 搜索框 */}
      <div className="mb-8">
        <input
          type="text"
          placeholder={useTranslations()('搜索作品...')}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-96 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* 分类筛选 */}
      <div className="flex flex-wrap gap-4 mb-8">
        {categories.map(category => (
          <motion.button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-md ${
              selectedCategory === category.id
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.name}
          </motion.button>
        ))}
      </div>

      {/* 作品网格 */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        layout
      >
        <AnimatePresence>
          {filteredOpus.map(opus => (
            <motion.a
              href={`/opus/${opus.id}`}
              key={opus.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div className="relative h-48">
                <Image
                  src={opus.imageUrl}
                  alt={opus.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  loading="lazy"
                  quality={75}
                />
              </div>
              <motion.div 
                className="p-4"
                initial={false}
                animate={{ height: expandedId === opus.id ? 'auto' : '120px' }}
              >
                <h3 className="text-xl font-semibold mb-2">{opus.title}</h3>
                <p className="text-gray-600">{opus.description}</p>
              </motion.div>
            </motion.a>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}